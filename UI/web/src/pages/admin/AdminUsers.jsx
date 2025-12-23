import "./AdminUsers.css";
import AdminFilterBar from "./components/AdminFilterBar";
import { useState } from "react";

export default function AdminUsers() {
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
          <h1>Users</h1>
          <p>Manage all platform users</p>
        </div>
      </div>

      {/* FILTER BAR */}
      <AdminFilterBar
        searchPlaceholder="Search users..."
        showStatus
        showDate
        actionLabel="Add User"
      />

      {/* BULK ACTION BAR */}
      {selected.length > 0 && (
        <div className="admin-bulk-bar">
          <span>{selected.length} selected</span>
          <div>
            <button className="secondary-btn">Block</button>
            <button className="danger-btn">Delete</button>
          </div>
        </div>
      )}

      {/* USERS TABLE */}
      <div className="admin-panel">
        <table className="admin-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
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

              <td>
                <div className="user-cell">
                  <div className="user-avatar">R</div>
                  <div>
                    <strong>Rahul Sharma</strong>
                    <span>ID #1021</span>
                  </div>
                </div>
              </td>

              <td>rahul@gmail.com</td>

              <td>
                <span className="badge badge-blue">User</span>
              </td>

              <td>
                <span className="badge badge-green">Active</span>
              </td>

              <td>15 Feb 2025</td>

              <td>
                <div className="action-group">
                  <button className="action-btn">View</button>
                  <button className="action-btn">Edit</button>
                  <button className="action-btn warn">Block</button>
                  <button className="action-btn danger">Delete</button>
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

              <td>
                <div className="user-cell">
                  <div className="user-avatar admin">A</div>
                  <div>
                    <strong>Admin</strong>
                    <span>ID #0001</span>
                  </div>
                </div>
              </td>

              <td>admin@staybnb.com</td>

              <td>
                <span className="badge badge-purple">Admin</span>
              </td>

              <td>
                <span className="badge badge-green">Active</span>
              </td>

              <td>01 Jan 2025</td>

              <td>
                <div className="action-group">
                  <button className="action-btn">View</button>
                  <button className="action-btn">Edit</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
