// Footer.jsx
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h3>Staybnb</h3>
          <p>
            Discover unique stays, unforgettable experiences, and trusted hosts
            around the world.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">

          <div className="footer-col">
            <h4>Explore</h4>
            <a href="#">Stays</a>
            <a href="#">Experiences</a>
            <a href="#">Offers</a>
            <a href="#">Destinations</a>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Press</a>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">Help center</a>
            <a href="#">Cancellation options</a>
            <a href="#">Safety information</a>
            <a href="#">Contact support</a>
          </div>

          <div className="footer-col">
            <h4>Hosting</h4>
            <a href="#">Become a host</a>
            <a href="#">Host resources</a>
            <a href="#">Community forum</a>
            <a href="#">Responsible hosting</a>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Staybnb. All rights reserved.</span>

        <div className="footer-social">
          <a href="#">🌐</a>
          <a href="#">📘</a>
          <a href="#">📸</a>
          <a href="#">🐦</a>
        </div>
      </div>
    </footer>
  );
}
