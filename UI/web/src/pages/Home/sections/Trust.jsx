// Trust.jsx
import { motion } from "framer-motion";
import "./Hero.css";

const trustItems = [
  {
    title: "Secure Payments",
    desc: "All transactions are protected with industry-standard encryption.",
    icon: "🔒",
  },
  {
    title: "Verified Hosts",
    desc: "Every host and listing is carefully reviewed for trust and safety.",
    icon: "🏠",
  },
  {
    title: "24/7 Support",
    desc: "We’re always here to help before, during, and after your trip.",
    icon: "📞",
  },
  {
    title: "Millions of Users",
    desc: "Trusted by travelers across the globe for unforgettable stays.",
    icon: "🌍",
  },
];

export default function Trust() {
  return (
    <section className="trust-section">
      <div className="trust-container">

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by millions worldwide
        </motion.h3>

        <motion.p
          className="trust-subtitle"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          A global platform built on trust, safety, and transparency.
        </motion.p>

        <div className="trust-grid">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              className="trust-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <span className="trust-icon">{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
