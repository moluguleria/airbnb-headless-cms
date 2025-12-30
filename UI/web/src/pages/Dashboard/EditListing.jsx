import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../../api/api";

export default function EditListing() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    type: "stay",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await API.get(`/listings/${id}?populate=owner`);

        const listing = res.data.data;
        const currentUser = JSON.parse(localStorage.getItem("user"));

        // 🚨 BLOCK IF NOT LOGGED IN
        if (!currentUser) {
          alert("Please login first");
          return navigate("/login");
        }

        // 🚨 BLOCK IF NOT OWNER
        if (listing.attributes.owner.data.id !== currentUser.id) {
          alert("You are not allowed to edit this listing");
          return navigate("/dashboard");
        }

        // ✅ Allowed
        setForm({
          title: listing.attributes.title,
          price: listing.attributes.price,
          type: listing.attributes.type,
        });

        setLoading(false);
      } catch (err) {
        console.error(err);
        alert("Access denied");
        navigate("/dashboard");
      }
    };

    fetchListing();
  }, [id, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/listings/${id}`, {
        data: {
          title: form.title,
          price: Number(form.price),
          type: form.type,
        },
      });

      alert("Listing updated successfully");
      navigate("/dashboard");
    } catch (err) {
      alert("Update failed");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 40 }}>
      <h2>Edit Property</h2>

      <form onSubmit={handleSave}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          required
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
        >
          <option value="stay">Stay</option>
          <option value="experience">Experience</option>
          <option value="rental">Rental</option>
        </select>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
