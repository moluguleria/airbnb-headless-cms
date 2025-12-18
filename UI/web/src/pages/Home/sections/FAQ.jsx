// FAQ.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Hero.css";

const faqs = [
  {
    q: "How do I book a stay on Staybnb?",
    a: "Simply search for your destination, choose your dates, browse available stays, and complete the booking securely through our platform.",
  },
  {
    q: "Are all hosts verified?",
    a: "Yes. We verify host identities and review listings to ensure safety, authenticity, and quality for our guests.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept major credit/debit cards and other secure digital payment methods depending on your region.",
  },
  {
    q: "Can I cancel or modify my booking?",
    a: "Most listings offer flexible cancellation options. Cancellation policies are clearly mentioned before booking.",
  },
  {
    q: "Is customer support available 24/7?",
    a: "Absolutely. Our support team is available around the clock to help you before, during, and after your stay.",
  },
  {
    q: "Do you charge any hidden fees?",
    a: "No. All prices are transparent and shown upfront before you confirm your booking.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <div className="faq-container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently asked questions
        </motion.h2>

        <motion.p
          className="faq-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Everything you need to know before booking your next stay.
        </motion.p>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              className={`faq-item ${openIndex === i ? "active" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              >
                <span>{item.q}</span>
                <span className="icon">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
