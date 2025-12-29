import { useEffect, useState } from "react";
import "./AdminListings.css";
import AdminFilterBar from "./components/AdminFilterBar";
import { fetchAllListings } from "../../api/adminListing";

export default function AdminListings() {
  const [listings, setListings] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    status: "",
    from: "",
    to: "",
  });

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchAllListings();
        setListings(data);
      } catch (err) {
        console.error("API ERROR:", err);
      }
    };

    load();
  }, []);

  const filtered = listings.filter((item) => {
    const title = item.title?.toLowerCase() || "";
    const type = item.type || "";
    const created = new Date(item.createdAt);

    return (
      (!filters.search ||
        title.includes(filters.search.toLowerCase())) &&
      (!filters.type || filters.type === type) &&
      (!filters.from || created >= new Date(filters.from)) &&
      (!filters.to || created <= new Date(filters.to))
    );
  });

  return (
    <div className="admin-page">
      <h1>Listings</h1>

      <AdminFilterBar
        filters={filters}
        setFilters={setFilters}
        showType
        showDate
        onReset={() =>
          setFilters({
            search: "",
            type: "",
            status: "",
            from: "",
            to: "",
          })
        }
      />

      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Price</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <tr key={item.id}>
                <td>{item.title || "Untitled"}</td>
                <td>{item.type || "N/A"}</td>
                <td>₹{item.price || 0}</td>
                <td>
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No listings found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
