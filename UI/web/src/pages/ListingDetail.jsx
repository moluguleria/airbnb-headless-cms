import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListingBySlug, API } from "../api/api";
import { useAuth } from "../context/AuthContext";
import "./ListingDetail.css";

const STRAPI_URL =
  import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

export default function ListingDetail() {
  const { slug } = useParams();
  const { user } = useAuth();

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [saved, setSaved] = useState(false);
  const [dates, setDates] = useState({ checkin: "", checkout: "" });

  /* FETCH LISTING */
  useEffect(() => {
    getListingBySlug(slug).then((res) => {
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
    });
  }, [slug]);

  /* LOCK SCROLL WHEN MODAL OPEN */
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  if (loading) return <Skeleton />;

  const isOwner = listing.owner?.id === user?.id;

  /* SAVE CHANGES */
  const handleSave = async () => {
    try {
      // Update listing
      await API.put(`/listings/${listing.id}`, {
  data: {
    title: form.title,
    price: form.price,
    description: [
      {
        type: "paragraph",
        children: [
          { type: "text", text: form.description }
        ]
      }
    ],
  },
});


      // Update location
      if (listing.location?.id) {
        await API.put(`/locations/${listing.location.id}`, {
          data: {
            city: form.city,
            country: form.country,
          },
        });
      }

      window.location.reload();
    } catch (err) {
      console.error("Update failed", err);
      alert("Failed to save changes");
    }
  };

  return (
    <div className="listing-page">
      {/* ---------- GALLERY ---------- */}
      <section className="gallery">
        {isOwner && (
          <button className="edit-btn" onClick={() => setEditMode(!editMode)}>
            {editMode ? "Cancel" : "Edit listing"}
          </button>
        )}

        <button className="save-btn" onClick={() => setSaved(!saved)}>
          {saved ? "❤️ Saved" : "🤍 Save"}
        </button>

        <img
          className="gallery-main"
          src={`${STRAPI_URL}${listing.images?.[0]?.url}`}
          onClick={() => {
            setActiveImg(0);
            setShowModal(true);
          }}
          alt={listing.title}
        />
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="content">
        {/* LEFT */}
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

          <div className="contact-card">
            <div className="contact-info">
              <h4>{listing.provider.name}</h4>
              {listing.provider.verified && (
                <span className="verified-badge">✔ Verified Host</span>
              )}
              <p>Usually responds within a few hours</p>
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
      {showModal && (
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
