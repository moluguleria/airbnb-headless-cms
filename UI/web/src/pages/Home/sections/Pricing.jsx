// Pricing.jsx
import { motion } from "framer-motion";
import "./Hero.css";

const plans = [
  {
    title: "Basic",
    price: "Free",
    features: [
      "Explore stays around the world",
      "Limited access to offers",
      "Community support",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    title: "Standard",
    price: "$29 / mo",
    features: [
      "Everything in Basic",
      "Access to premium offers",
      "Priority support",
      "Save favorite stays",
    ],
    button: "Choose Plan",
    popular: true,
  },
  {
    title: "Premium",
    price: "$59 / mo",
    features: [
      "Everything in Standard",
      "Exclusive host perks",
      "Early check-in & late checkout",
      "Dedicated account support",
    ],
    button: "Choose Plan",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Choose your plan
        </motion.h2>

        <motion.p
          className="pricing-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Flexible pricing for every type of traveler.
        </motion.p>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`plan-card ${plan.popular ? "popular" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.04 }}
            >
              {plan.popular && (
                <span className="popular-badge">Best Value</span>
              )}
              <h3>{plan.title}</h3>
              <p className="plan-price">{plan.price}</p>

              <ul className="plan-features">
                {plan.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>

              <button className="plan-btn">
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
