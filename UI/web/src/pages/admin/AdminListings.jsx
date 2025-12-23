import "./AdminListings.css";
import AdminFilterBar from "./components/AdminFilterBar";
import { useState } from "react";

export default function AdminListings() {
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
          <h1>Listings</h1>
          <p>Manage all platform listings</p>
        </div>

        {/* <button className="primary-btn">+ Add Listing</button> */}
      </div>

      {/* FILTERS */}
      <AdminFilterBar
        searchPlaceholder="Search listings..."
        showType
        showStatus
        showDate
        actionLabel="Add Listing"
      />

      {/* BULK ACTIONS */}
      {selected.length > 0 && (
        <div className="admin-bulk-bar">
          <span>{selected.length} selected</span>
          <div>
            <button className="secondary-btn">Block</button>
            <button className="danger-btn">Delete</button>
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
              <th>Listing</th>
              <th>Host</th>
              <th>Type</th>
              <th>Status</th>
              <th>Price</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <input
                  type="checkbox"
                  onChange={() => toggleSelect(1)}
                  checked={selected.includes(1)}
                />
              </td>
              <td>
                <div className="listing-cell">
                  <strong>StayVista</strong>
                  <span>Goa, India</span>
                </div>
              </td>
              <td>Rahul</td>
              <td>
                <span className="badge badge-blue">Stay</span>
              </td>
              <td>
                <span className="badge badge-green">Active</span>
              </td>
              <td>₹4,500</td>
              <td>12 Mar 2025</td>
              <td>
                <div className="action-group">
                  <button className="action-btn">View</button>
                  <button className="action-btn">Edit</button>
                  <button className="action-btn warn">Block</button>
                  <button className="action-btn danger">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
