import "./AdminUsers.css";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/api";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const res = await getUsers();
        setUsers(res.data || []);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };

    loadUsers();
  }, []);

  return (
    <div className="admin-page">
      {/* HEADER */}
      <div className="admin-page-header">
        <div>
          <h1>Users</h1>
          <p>Manage all platform users</p>
        </div>
      </div>

      {/* USERS TABLE */}
      <div className="admin-panel">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>#{user.id}</td>

                  <td>
                    <strong>{user.username}</strong>
                  </td>

                  <td>{user.email}</td>

                  <td>
                    <span className="badge badge-blue">
                      {user.role?.name}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        user.blocked
                          ? "badge-red"
                          : "badge-green"
                      }`}
                    >
                      {user.blocked ? "Blocked" : "Active"}
                    </span>
                  </td>

                  <td>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
