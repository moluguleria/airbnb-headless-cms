// WhyUs.jsx
import { motion } from "framer-motion";
import "../sections/Hero.css";

const reasons = [
  {
    title: "Verified Hosts",
    desc: "Every host is carefully verified to ensure safety, trust, and a quality stay experience.",
    icon: "🏠",
  },
  {
    title: "Best Price Guarantee",
    desc: "We offer competitive pricing with no hidden charges and flexible booking options.",
    icon: "💰",
  },
  {
    title: "Secure Payments",
    desc: "All payments are encrypted and processed securely with global payment partners.",
    icon: "🔒",
  },
  {
    title: "24/7 Support",
    desc: "Our support team is available around the clock to assist you anytime, anywhere.",
    icon: "📞",
  },
];

export default function WhyUs() {
  return (
    <section className="whyus-section">
      <div className="whyus-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why choose Staybnb
        </motion.h2>

        <motion.p
          className="whyus-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          We focus on trust, comfort, and unforgettable travel experiences.
        </motion.p>

        <div className="whyus-grid">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              className="whyus-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div className="whyus-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
