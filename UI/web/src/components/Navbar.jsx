import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <div className="nav-logo">
          <Link to="/">Staybnb</Link>
        </div>

        {/* CENTER LINKS */}
        <div className="nav-center">
          <Link
            to="/listings/stay"
            className={location.pathname.includes("stay") ? "active" : ""}
          >
            Stays
          </Link>
          <Link
            to="/listings/experience"
            className={location.pathname.includes("experience") ? "active" : ""}
          >
            Experiences
          </Link>
          <Link
            to="/listings/rental"
            className={location.pathname.includes("rental") ? "active" : ""}
          >
            Rentals
          </Link>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="nav-right">
          {!user ? (
            <>
              {/* NOT LOGGED IN */}
              <Link to="/login" className="nav-login">
                Login
              </Link>

              <Link to="/signup">
                <button className="nav-button">
                  Sign up
                </button>
              </Link>
<Link to="/dashboard">Dashboard</Link>


            </>
          ) : (
            <>
              {/* LOGGED IN */}
              <span className="nav-user">
                Hi, {user.username}
              </span>

              <button
                className="nav-logout"
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                Logout
              </button>
              <Link to="/dashboard">Dashboard</Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}
