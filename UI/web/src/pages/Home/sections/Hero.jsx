// Hero.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Overlay */}
      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Find places to stay,<br /> live & explore
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          Book unique homes, experiences and unforgettable stays across the world.
        </motion.p>

        {/* Tabs */}
        <motion.div
          className="hero-tabs"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/listings/stay" className="active">Stays</Link>
          <Link to="/listings/experience">Experiences</Link>
          <Link to="/listings/rental">Rentals</Link>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          {/* <button className="primary-btn">Explore now</button>
          <button className="secondary-btn">Become a host</button> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
