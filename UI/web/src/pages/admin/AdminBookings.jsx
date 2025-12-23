import "./AdminBookings.css";
import AdminFilterBar from "./components/AdminFilterBar";
import { useState } from "react";

export default function AdminBookings() {
  const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="admin-page">

      {/* HEADER */}
      <div className="admin-page-header">
        <div>
          <h1>Bookings</h1>
          <p>Track and manage all platform bookings</p>
        </div>

        <button className="primary-btn">Export</button>
      </div>

      {/* FILTER BAR */}
      <AdminFilterBar
        searchPlaceholder="Search bookings..."
        showStatus
        showDate
        actionLabel="Apply Filters"
      />

      {/* BULK ACTION BAR */}
      {selected.length > 0 && (
        <div className="admin-bulk-bar">
          <span>{selected.length} selected</span>
          <div>
            <button className="secondary-btn">Mark Completed</button>
            <button className="danger-btn">Cancel</button>
          </div>
        </div>
      )}

      {/* TABLE */}
      <div className="admin-panel">
        <table className="admin-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Booking ID</th>
              <th>Listing</th>
              <th>Guest</th>
              <th>Dates</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input
                  type="checkbox"
                  checked={selected.includes(1)}
                  onChange={() => toggleSelect(1)}
                />
              </td>

              <td>#BK10231</td>

              <td>
                <div className="listing-cell">
                  <strong>CityNest</strong>
                  <span>Bangalore, India</span>
                </div>
              </td>

              <td>
                <div className="user-cell">
                  <div className="user-avatar">A</div>
                  <span>Ananya</span>
                </div>
              </td>

              <td>12 Mar → 15 Mar</td>

              <td>₹6,200</td>

              <td>
                <span className="badge badge-green">Completed</span>
              </td>

              <td>
                <div className="action-group">
                  <button className="action-btn">View</button>
                  <button className="action-btn warn">Refund</button>
                  <button className="action-btn danger">Cancel</button>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <input
                  type="checkbox"
                  checked={selected.includes(2)}
                  onChange={() => toggleSelect(2)}
                />
              </td>

              <td>#BK10245</td>

              <td>
                <div className="listing-cell">
                  <strong>LakeView</strong>
                  <span>Manali, India</span>
                </div>
              </td>

              <td>
                <div className="user-cell">
                  <div className="user-avatar">R</div>
                  <span>Rahul</span>
                </div>
              </td>

              <td>20 Mar → 22 Mar</td>

              <td>₹4,500</td>

              <td>
                <span className="badge badge-yellow">Pending</span>
              </td>

              <td>
                <div className="action-group">
                  <button className="action-btn">View</button>
                  <button className="action-btn">Mark Completed</button>
                  <button className="action-btn danger">Cancel</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
