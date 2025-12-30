import { NavLink, Outlet } from "react-router-dom";
import "./AdminLayout.css";

export default function AdminLayout() {
  return (
    <div className="admin-shell">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">Admin</h2>

        <nav className="admin-nav">
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
          <NavLink to="/admin/listings">Listings</NavLink>
          <NavLink to="/admin/bookings">Bookings</NavLink>
          <NavLink to="/admin/users">Users</NavLink>
          {/* <NavLink to="/admin/analytics">Analytics</NavLink> */}
          <NavLink to="/admin/settings">Settings</NavLink>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
