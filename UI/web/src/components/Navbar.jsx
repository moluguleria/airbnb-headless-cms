import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* LOGO */}
        <div className="nav-logo">
          <Link to="/">Staybnb</Link>
        </div>

        {/* CENTER LINKS */}
        <div className={`nav-center ${open ? "open" : ""}`}>
          <Link
            to="/listings/stay"
            className={location.pathname.includes("stay") ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Stays
          </Link>
          <Link
            to="/listings/experience"
            className={location.pathname.includes("experience") ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Experiences
          </Link>
          <Link
            to="/listings/rental"
            className={location.pathname.includes("rental") ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Rentals
          </Link>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          {!user ? (
            <>
              <Link to="/login" className="nav-login">
                Login
              </Link>

              <Link to="/signup">
                <button className="nav-button">Sign up</button>
              </Link>
            </>
          ) : (
            <>
              <span className="nav-user">Hi, {user.username}</span>

              {user?.role?.name === "admin" ? (
                <Link to="/admin/dashboard" className="nav-dashboard">
                  Dashboard
                </Link>
              ) : (
                <Link to="/dashboard" className="nav-dashboard">
                  Dashboard
                </Link>
              )}

              <button
                className="nav-logout"
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                Logout
              </button>
            </>
          )}

          {/* MOBILE MENU ICON */}
          <button className="nav-hamburger" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
