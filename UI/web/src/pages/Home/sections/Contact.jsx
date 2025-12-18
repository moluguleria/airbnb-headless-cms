// Contact.jsx
import { motion } from "framer-motion";
import "./Hero.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* LEFT — MAP & INFO */}
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Visit or reach us</h3>
          <p>
            Our team is always happy to help you plan your next journey or answer
            any questions.
          </p>

          <div className="contact-info">
            <p><strong>📍 Address:</strong> 221B Travel Street, New York, USA</p>
            <p><strong>📧 Email:</strong> support@staybnb.com</p>
            <p><strong>📞 Phone:</strong> +1 234 567 890</p>
          </div>

          {/* MAP */}
          <div className="map-wrapper">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=New%20York&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-card">
            <div className="contact-logo">Staybnb</div>

            <h3>Get in touch</h3>
            <p>Have a question or need help? Send us a message.</p>

            <form className="contact-form">
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Your email" required />
              <textarea placeholder="Your message" rows="4" required />
              <button type="submit">Send message</button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
