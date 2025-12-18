// Services.jsx
import { motion } from "framer-motion";
import "./Hero.css";

const services = [
  {
    title: "Home Stays & Rentals",
    desc: "Book verified homes, apartments, villas, and unique stays tailored to your travel style.",
    icon: "🏡",
  },
  {
    title: "Unique Experiences",
    desc: "Discover local experiences hosted by experts — from adventures to cultural tours.",
    icon: "🌍",
  },
  {
    title: "Secure Booking",
    desc: "Fast, easy, and secure booking with transparent pricing and instant confirmation.",
    icon: "🔐",
  },
  {
    title: "Trusted Hosts",
    desc: "Stay with confidence knowing all hosts are verified and reviewed by guests.",
    icon: "⭐",
  },
  {
    title: "Flexible Cancellations",
    desc: "Plans changed? Enjoy flexible cancellation options on most bookings.",
    icon: "📅",
  },
  {
    title: "24/7 Customer Support",
    desc: "Our global support team is available anytime to assist before, during, or after your stay.",
    icon: "📞",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Services we provide
        </motion.h2>

        <motion.p
          className="services-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Everything you need for a smooth, safe, and memorable travel experience.
        </motion.p>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
