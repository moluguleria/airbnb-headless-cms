import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListingBySlug, API } from "../api/api";
import { useAuth } from "../context/AuthContext";
import "./ListingDetail.css";

const STRAPI_URL =
  import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

export default function ListingDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    city: "",
    country: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [saved, setSaved] = useState(false);

  /* ================= FETCH LISTING ================= */
  useEffect(() => {
    async function fetchListing() {
      try {
        const res = await getListingBySlug(slug);
        if (!res.data.data.length) {
          setLoading(false);
          return;
        }

        const data = res.data.data[0];
        setListing(data);

        const description =
          data.description
            ?.map((b) => b.children.map((c) => c.text).join(""))
            .join("\n") || "";

        setForm({
          title: data.title,
          price: data.price,
          description,
          city: data.location?.city || "",
          country: data.location?.country || "",
        });

        setLoading(false);
      } catch (err) {
        console.error("FETCH ERROR:", err);
        setLoading(false);
      }
    }

    fetchListing();
  }, [slug]);

  /* LOCK SCROLL WHEN MODAL OPEN */
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  if (loading) return <Skeleton />;
  if (!listing) return <p>Listing not found</p>;

  const isOwner = listing.owner?.id === user?.id;

  /* ================= SAVE CHANGES ================= */
  const handleSave = async () => {
    try {
      await API.put(`/listings/${listing.documentId}`, {
        data: {
          title: form.title,
          price: Number(form.price),
          description: [
            {
              type: "paragraph",
              children: [{ type: "text", text: form.description }],
            },
          ],
          location: listing.location?.id || null,
        },
      });
    } catch {
      alert("Failed to update listing");
      return;
    }

    try {
      if (listing.location?.id) {
        await API.put(`/locations/${listing.location.documentId}`, {
          data: {
            city: form.city,
            country: form.country,
          },
        });
      }
    } catch {
      console.warn("Location update failed");
    }

    window.location.reload();
  };

  /* ================= DELETE LISTING ================= */
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this listing? This action cannot be undone."
    );
    if (!confirmDelete) return;

    try {
      await API.delete(`/listings/${listing.documentId}`);

      if (listing.location?.id) {
        await API.delete(`/locations/${listing.location.id}`);
      }

      alert("Listing deleted successfully");
      navigate("/dashboard");
    } catch (err) {
      console.error("DELETE ERROR:", err);
      alert("Failed to delete listing");
    }
  };

  return (
    <div className="listing-page">
      {/* ---------- GALLERY ---------- */}
      <section className="gallery">
        {isOwner && (
          <div className="owner-actions">
            <button
              className="edit-btn"
              onClick={() => setEditMode(!editMode)}
            >
              {editMode ? "Cancel" : "Edit listing"}
            </button>

            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        )}

        <button className="save-btn" onClick={() => setSaved(!saved)}>
          {saved ? "❤️ Saved" : "🤍 Save"}
        </button>

        {listing.images?.length > 0 ? (
          <img
            className="gallery-main"
            src={`${STRAPI_URL}${listing.images[0].url}`}
            onClick={() => {
              setActiveImg(0);
              setShowModal(true);
            }}
            alt={listing.title}
          />
        ) : (
          <div className="gallery-placeholder">No image uploaded</div>
        )}
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="content">
        <div className="left">
          {editMode ? (
            <input
              className="edit-input"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
            />
          ) : (
            <h1>{listing.title}</h1>
          )}

          {editMode ? (
            <div className="location-edit">
              <input
                value={form.city}
                onChange={(e) =>
                  setForm({ ...form, city: e.target.value })
                }
              />
              <input
                value={form.country}
                onChange={(e) =>
                  setForm({ ...form, country: e.target.value })
                }
              />
            </div>
          ) : (
            <p className="location">
              {listing.location?.city}, {listing.location?.country}
            </p>
          )}

          <div className="host">
            Hosted by <strong>{listing.provider?.name}</strong>
            {listing.provider?.verified && (
              <span className="badge">Verified</span>
            )}
          </div>

          <hr />

          <h3>About this place</h3>

          {editMode ? (
            <textarea
              rows={5}
              className="edit-textarea"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          ) : (
            <p className="description">{form.description}</p>
          )}

          {editMode && (
            <button className="save-changes" onClick={handleSave}>
              Save changes
            </button>
          )}
        </div>

        {/* RIGHT */}
        <aside className="right">
          <div className="booking">
            {editMode ? (
              <input
                type="number"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
              />
            ) : (
              <div className="price">
                ₹{listing.price} <span>/ night</span>
              </div>
            )}

            <div className="date-picker">
              <input type="date" />
              <input type="date" />
            </div>

            <button className="reserve">Reserve</button>
          </div>
        </aside>
      </section>

      {/* ---------- CONTACT HOST ---------- */}
      {listing.provider && (
        <>
          <hr />
          <h3>Contact host</h3>

          <div className="listing-contact-card">
            <div className="listing-contact-info">
              <h4>{listing.provider.name || "John Doe"}</h4>

              {listing.provider.verified && (
                <span className="listing-verified-badge">
                  ✔ Verified Host
                </span>
              )}

              <p className="listing-contact-note">
                📧 Email: <strong>host@example.com</strong>
              </p>

              <p className="listing-contact-note">
                📞 Phone: <strong>+91 98765 43210</strong>
              </p>

              <p className="listing-contact-note">
                Usually responds within a few hours
              </p>
            </div>
          </div>
        </>
      )}

      {/* ---------- MAP ---------- */}
      {listing.location && (
        <>
          <hr />
          <h3>Where you’ll be</h3>
          <div className="map-card">
            <iframe
              title="map"
              loading="lazy"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${listing.location.city}, ${listing.location.country}`
              )}&output=embed`}
            />
          </div>
        </>
      )}

      {/* ---------- IMAGE MODAL ---------- */}
      {showModal && listing.images?.[activeImg] && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <img
            src={`${STRAPI_URL}${listing.images[activeImg].url}`}
            className="modal-img"
            alt=""
          />
        </div>
      )}
    </div>
  );
}

/* ---------- SKELETON ---------- */
function Skeleton() {
  return (
    <div className="skeleton">
      <div className="skel-img"></div>
      <div className="skel-line"></div>
      <div className="skel-line short"></div>
    </div>
  );
}
