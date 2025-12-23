import { Outlet } from "react-router-dom";
import "./AdminLayout.css";

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      {/* Sidebar / Header */}
      <aside className="admin-sidebar">
        <h2>Admin</h2>
        {/* links */}
      </aside>

      {/* 🔥 THIS IS REQUIRED */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}
