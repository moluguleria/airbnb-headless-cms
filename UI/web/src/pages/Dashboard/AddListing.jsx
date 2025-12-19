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
    description: "",
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
    setLoading(true);

    try {
      /* 1️⃣ Upload images */
      let imageIds = [];
      if (images.length) {
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

      /* 3️⃣ Create Provider (from logged-in user) */
      const providerRes = await API.post("/providers", {
        data: {
          name: user.username,
          verified: true,
        },
      });
      const providerId = providerRes.data.data.id;

      /* 4️⃣ Create Amenities */
      const amenityNames = form.amenities
        .split(",")
        .map((a) => a.trim())
        .filter(Boolean);

      const amenityIds = [];
      for (const name of amenityNames) {
        const res = await API.post("/amenities", {
          data: { name },
        });
        amenityIds.push(res.data.data.id);
      }

      /* 5️⃣ Create Listing (ONLY ONCE) */
    await API.post("/listings", {
  data: {
    title: form.title,
    type: form.type,
    price: Number(form.price),
    featured: form.featured,

    description: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: form.description || ""
          }
        ]
      }
    ],

    location: locationId,
    provider: providerId,
    amenities: amenityIds,
    images: imageIds,

    publishedAt: new Date().toISOString(),
  },
});


      navigate("/dashboard");
    } catch (err) {
      console.error("Create listing failed:", err.response?.data || err);
      alert("Failed to create listing");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-listing">
      <h2>Add New Property</h2>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" onChange={handleChange} required />

        <select name="type" onChange={handleChange}>
          <option value="stay">Stay</option>
          <option value="experience">Experience</option>
          <option value="rental">Rental</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <input name="city" placeholder="City" onChange={handleChange} />
        <input name="country" placeholder="Country" onChange={handleChange} />

        <input
          name="amenities"
          placeholder="WiFi, Parking"
          onChange={handleChange}
        />

        <label>
          <input type="checkbox" name="featured" onChange={handleChange} />
          Featured
        </label>

        <input type="file" multiple onChange={(e) => setImages([...e.target.files])} />

        <button disabled={loading}>
          {loading ? "Creating..." : "Create Property"}
        </button>
      </form>
    </div>
  );
}
