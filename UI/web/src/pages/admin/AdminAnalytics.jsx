import "./AdminAnalytics.css";
import AdminFilterBar from "./components/AdminFilterBar";
import RevenueChart from "./components/RevenueChart";
import BookingTypeChart from "./components/BookingTypeChart";
import ListingStatusChart from "./components/ListingStatusChart";

export default function AdminAnalytics() {
  return (
    <div className="admin-page admin-analytics">

      {/* HEADER */}
      <div className="admin-page-header">
        <div>
          <h1>Analytics</h1>
          <p>Performance, trends & growth metrics</p>
        </div>

        <button className="primary-btn">Export Report</button>
      </div>

      {/* FILTER BAR (DATE-DRIVEN ONLY) */}
      <AdminFilterBar
        showStatus={false}
        showType={false}
        showDate
        showCrudActions={false}
        actionLabel="Apply"
      />

      {/* KPI ROW */}
      <div className="analytics-kpi-row">
        <div className="analytics-kpi-card">
          <p>Total Revenue</p>
          <h2>₹24,85,200</h2>
          <span className="up">↑ 18% vs last period</span>
        </div>

        <div className="analytics-kpi-card">
          <p>Total Bookings</p>
          <h2>8,492</h2>
          <span className="up">↑ 12%</span>
        </div>

        <div className="analytics-kpi-card">
          <p>Avg Booking Value</p>
          <h2>₹5,200</h2>
          <span className="down">↓ 2%</span>
        </div>

        <div className="analytics-kpi-card">
          <p>Active Listings</p>
          <h2>1,122</h2>
          <span className="up">↑ 6%</span>
        </div>
      </div>

      {/* CHART GRID */}
      <div className="analytics-grid">

        {/* REVENUE */}
        <div className="admin-panel analytics-panel wide">
          <h3>Revenue Trend</h3>
          <RevenueChart />
        </div>

        {/* RIGHT STACK */}
        <div className="analytics-side">
          <div className="admin-panel analytics-panel">
            <h3>Bookings by Type</h3>
            <BookingTypeChart />
          </div>

          <div className="admin-panel analytics-panel">
            <h3>Listing Status</h3>
            <ListingStatusChart />
          </div>
        </div>
      </div>

    </div>
  );
}
