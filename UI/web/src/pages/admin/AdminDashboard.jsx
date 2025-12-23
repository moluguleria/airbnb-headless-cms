import "./AdminDashboard.css";

export default function AdminDashboard() {
  return (
    <div id="admin-dashboard-root" className="admin-db">
      {/* PAGE HEADER */}
      <div className="admin-db-top">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Platform overview & system metrics</p>
        </div>
      </div>

      {/* KPI ROW */}
      <div className="admin-db-kpi-row">
        <div className="admin-db-kpi-card">
          <p>Total Listings</p>
          <h2>1,284</h2>
          <span className="admin-db-kpi-sub">+12 this month</span>
        </div>

        <div className="admin-db-kpi-card">
          <p>Total Hosts</p>
          <h2>312</h2>
          <span className="admin-db-kpi-sub">+8 new</span>
        </div>

        <div className="admin-db-kpi-card">
          <p>Total Bookings</p>
          <h2>8,492</h2>
          <span className="admin-db-kpi-sub">+214</span>
        </div>

        <div className="admin-db-kpi-card admin-db-emphasis">
          <p>Monthly Revenue</p>
          <h2>₹24,85,200</h2>
          <span className="admin-db-kpi-sub">↑ 18%</span>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="admin-db-grid">
        {/* LEFT */}
        <div className="admin-db-main">
          <div className="admin-db-panel">
            <div className="admin-db-panel-header">
              <h3>Recent Bookings</h3>
              <button className="admin-db-link-btn">View all</button>
            </div>

            <table className="admin-db-table">
              <thead>
                <tr>
                  <th>Listing</th>
                  <th>Guest</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>StayVista</td>
                  <td>Rahul</td>
                  <td>₹4,500</td>
                  <td>
                    <span className="admin-db-status admin-db-success">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>LakeView</td>
                  <td>Ananya</td>
                  <td>₹6,200</td>
                  <td>
                    <span className="admin-db-status admin-db-pending">
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>CityNest</td>
                  <td>Arjun</td>
                  <td>₹3,100</td>
                  <td>
                    <span className="admin-db-status admin-db-success">
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT */}
        <div className="admin-db-side">
          <div className="admin-db-panel">
            <h3>System Insights</h3>

            <ul className="admin-db-insights">
              <li>
                <span>Active Listings</span>
                <strong>1,122</strong>
              </li>
              <li>
                <span>Inactive Listings</span>
                <strong>162</strong>
              </li>
              <li>
                <span>Blocked Users</span>
                <strong>4</strong>
              </li>
              <li>
                <span>Avg. Booking Value</span>
                <strong>₹5,200</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
