import "./AdminBookings.css";
import AdminFilterBar from "./components/AdminFilterBar";
import { useEffect, useState } from "react";
import { getListings } from "../../api/api";

export default function AdminBookings() {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    from: "",
    to: "",
  });

  // Fetch listings
  useEffect(() => {
    const loadListings = async () => {
      try {
        const res = await getListings();
        console.log("LISTINGS:", res.data.data);
        setListings(res.data.data || []);
      } catch (err) {
        console.error("Failed to fetch listings", err);
      }
    };

    loadListings();
  }, []);

  // Filter logic
const filteredListings = listings.filter((item) => {
  const title = item.title?.toLowerCase() || "";
  const type = item.type || "";
  const status = item.status || "active"; // fallback
  const created = new Date(item.createdAt);

  const matchSearch =
    !filters.search ||
    title.includes(filters.search.toLowerCase());

  const matchType =
    !filters.type || filters.type === type;

  const matchStatus =
    !filters.status || filters.status === status;

  const matchDate =
    (!filters.from || new Date(filters.from) <= created) &&
    (!filters.to || new Date(filters.to) >= created);

  return (
    matchSearch &&
    matchType &&
    matchStatus &&
    matchDate
  );
});


  return (
    <div className="admin-page">
      {/* HEADER */}
      <div className="admin-page-header">
        <div>
          <h1>Bookings</h1>
          <p>Showing bookings using listings data</p>
        </div>
      </div>

      {/* FILTER */}
      <AdminFilterBar
              filters={filters}
              setFilters={setFilters}
              onReset={() =>
                setFilters({
                  search: "",
                  type: "",
                  status: "",
                  from: "",
                  to: "",
                })
              }
              showType
              showStatus
              showDate
            />

      {/* TABLE */}
      <div className="admin-panel">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Listing</th>
              <th>Host</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredListings.length > 0 ? (
              filteredListings.map((item) => (
                <tr key={item.id}>
                  <td>#{item.id}</td>

                  <td>
                    <strong>{item.title || "Untitled"}</strong>
                  </td>

                  <td>
                    {item.owner?.username || "N/A"}
                  </td>

                  <td>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>

                  <td>₹{item.price || 0}</td>

                  <td>
                    <span className="badge badge-green">
                      Active
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
