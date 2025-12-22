import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getMyListings } from "../../api/api";
import ListingCard from "../../components/ListingCard";
import "./Dashboard.css";

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

useEffect(() => {
  if (!user) {
    setLoading(false);
    return;
  }

  setLoading(true);
  setError("");

  getMyListings()
    .then((res) => {
      setListings(res.data?.data || []);
    })
    .catch((err) => {
      console.error("Dashboard fetch error:", err);
      setError("Failed to load your properties");
    })
    .finally(() => {
      setLoading(false);
    });
}, [user]);

  /* ---------- UI STATES ---------- */

  if (loading) {
    return <p style={{ padding: 40 }}>Loading dashboard...</p>;
  }

  if (error) {
    return <p style={{ padding: 40, color: "red" }}>{error}</p>;
  }

  return (
    <div className="dashboard">
      {/* HEADER */}
      <div className="dashboard-header">
        <h2>My Properties</h2>

        <button className="add-btn" onClick={() => navigate("/dashboard/add")}>
          + Add New Property
        </button>
      </div>

      {/* CONTENT */}
      {listings.length === 0 ? (
        <div className="empty-state">
          <h3>No properties yet</h3>
          <p>Add your first property to start hosting</p>
        </div>
      ) : (
        <div className="dashboard-grid">
  {listings.map((listing) => (
    <ListingCard
      key={listing.id}
      listing={listing}
      isDashboard={true}
    />
  ))}
</div>

      )}
    </div>
  );
}
