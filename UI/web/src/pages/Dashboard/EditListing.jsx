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

  useEffect(() => {
  API.get(`/listings/${id}?populate=*`)
    .then((res) => {
      const data = res.data.data.attributes;
      setForm({
        title: data.title,
        price: data.price,
        type: data.type,
      });
    })
    .catch(() => {
      alert("You are not allowed to edit this listing");
      navigate("/dashboard");
    });
}, [id, navigate]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    await API.put(`/listings/${id}`, {
      data: {
        title: form.title,
        price: Number(form.price),
        type: form.type,
      },
    });

    navigate("/dashboard");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Edit Property</h2>

      <form onSubmit={handleSave}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
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

        <button type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
