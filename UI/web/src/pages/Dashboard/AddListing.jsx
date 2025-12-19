import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { API } from "../../api/api";
import "./AddListing.css";

export default function AddListing() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    type: "stay",
    city: "",
    country: "",
    amenities: "",
    featured: false,
  });

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    /* 1️⃣ Upload images */
    let imageIds = [];
    if (images.length > 0) {
      const fd = new FormData();
      images.forEach((img) => fd.append("files", img));
      const uploadRes = await API.post("/upload", fd);
      imageIds = uploadRes.data.map((f) => f.id);
    }

    /* 2️⃣ Create Location */
    const locationRes = await API.post("/locations", {
      data: {
        city: form.city,
        country: form.country,
      },
    });

    const locationId = locationRes.data.data.id;

    /* 3️⃣ Create Amenities */
    const amenityNames = form.amenities
      .split(",")
      .map((a) => a.trim())
      .filter(Boolean);

    const amenityIds = [];

    for (let name of amenityNames) {
      const res = await API.post("/amenities", {
        data: { name },
      });
      amenityIds.push(res.data.data.id);
    }

    /* 4️⃣ CREATE LISTING — ONLY ONCE */
  await API.post("/listings", {
  data: {
    title: form.title,
    price: Number(form.price),
    type: form.type,
    featured: form.featured,
    location: locationId,
    amenities: amenityIds,
    images: imageIds,
    publishedAt: new Date().toISOString(),
  },
});


    navigate("/dashboard");
  } catch (err) {
    console.error("Create listing failed:", err.response?.data || err);
    alert("Failed to create listing. Check console.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="add-listing">
      <h2>Add New Property</h2>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <label>Price (per night)</label>
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          required
        />

        <label>Type</label>
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="stay">Stay</option>
          <option value="experience">Experience</option>
          <option value="rental">Rental</option>
        </select>

        <label>City</label>
        <input name="city" value={form.city} onChange={handleChange} required />

        <label>Country</label>
        <input
          name="country"
          value={form.country}
          onChange={handleChange}
          required
        />

        <label>Amenities (comma separated)</label>
        <input
          name="amenities"
          value={form.amenities}
          onChange={handleChange}
          placeholder="WiFi, Parking, AC"
        />

        <label>
          <input
            type="checkbox"
            name="featured"
            checked={form.featured}
            onChange={handleChange}
          />
          Featured
        </label>

        <label>Images</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setImages([...e.target.files])}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Property"}
        </button>
      </form>
    </div>
  );
}
