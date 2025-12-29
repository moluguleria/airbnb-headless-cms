import { useEffect, useState } from "react";
import "./AdminDashboard.css";

import RevenueChart from "./components/RevenueChart";
import BookingTypeChart from "./components/BookingTypeChart";
import ListingStatusChart from "./components/ListingStatusChart";
import AdminFilterBar from "./components/AdminFilterBar";

import { getListings } from "../../api/api";

export default function AdminDashboard() {
  const [listings, setListings] = useState([]);

  const [filters, setFilters] = useState({
    search: "",
    type: "",
    status: "",
    from: "",
    to: "",
  });

  /* =======================
     FETCH LISTINGS
  ======================= */
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await getListings();
        setListings(res.data.data || []);
      } catch (err) {
        console.error("Failed to load listings", err);
      }
    };

    loadData();
  }, []);

  /* =======================
     FILTER LOGIC
  ======================= */
  const filteredListings = listings.filter((item) => {
    const title = item.title?.toLowerCase() || "";
    const type = item.type || "";
    const created = new Date(item.createdAt);

    const matchSearch =
      !filters.search ||
      title.includes(filters.search.toLowerCase());

    const matchType =
      !filters.type || filters.type === type;

    const matchDate =
      (!filters.from || new Date(filters.from) <= created) &&
      (!filters.to || new Date(filters.to) >= created);

    return matchSearch && matchType && matchDate;
  });

  /* =======================
     DASHBOARD STATS
  ======================= */

  const totalListings = filteredListings.length;

  const totalRevenue = filteredListings.reduce(
    (sum, i) => sum + (i.price || 0),
    0
  );

  // ✅ TOTAL HOSTS (unique owners)
const totalHosts = new Set( listings.map((l) => l.attributes?.owner?.data?.id) ).size;


  const stayCount = filteredListings.filter(
    (i) => i.type === "stay"
  ).length;

  const rentalCount = filteredListings.filter(
    (i) => i.type === "rental"
  ).length;

  const experienceCount = filteredListings.filter(
    (i) => i.type === "experience"
  ).length;

  const revenueData = Object.values(
    filteredListings.reduce((acc, item) => {
      const month = new Date(item.createdAt).toLocaleString(
        "default",
        { month: "short" }
      );

      if (!acc[month]) acc[month] = { month, revenue: 0 };
      acc[month].revenue += item.price || 0;

      return acc;
    }, {})
  );

  /* =======================
     UI
  ======================= */
  return (
    <div id="admin-dashboard-root">
      <div className="admin-db">

        {/* HEADER */}
        <div className="admin-db-top">
          <h1>Admin Dashboard</h1>
          <p>Platform overview & system metrics</p>
        </div>

        {/* FILTER BAR */}
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

        {/* KPI CARDS */}
        <div className="admin-db-kpi-row">
          <div className="admin-db-kpi-card">
            <p>Total Listings</p>
            <h2>{totalListings}</h2>
          </div>

          <div className="admin-db-kpi-card">
            <p>Total Hosts</p>
            <h2>{totalHosts}</h2>
          </div>

          {/* <div className="admin-db-kpi-card">
            <p>Total Revenue</p>
            <h2>₹{totalRevenue}</h2>
          </div> */}
        </div>

        {/* CHARTS */}
        {filteredListings.length > 0 && (
          <div className="admin-db-analytics">
            <RevenueChart data={revenueData} />

            <ListingStatusChart
              data={[{ name: "Active", value: totalListings }]}
            />

            <BookingTypeChart
              data={[
                { name: "Stays", value: stayCount },
                { name: "Rentals", value: rentalCount },
                { name: "Experiences", value: experienceCount },
              ]}
            />
          </div>
        )}

        {/* TABLE */}
        <div className="admin-db-panel">
          <h3>All Listings</h3>

          <table className="admin-db-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {filteredListings.length ? (
                filteredListings.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title || "Untitled"}</td>
                    <td>{item.type || "N/A"}</td>
                    <td>₹{item.price || 0}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>
                    No listings found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
