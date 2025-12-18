// Guides.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.css";

const guides = [
  {
    name: "Emma Watson",
    role: "Local Host · Paris",
    experience: "7+ years hosting",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    link: "/guides/emma-watson",
  },
  {
    name: "Rahul Mehta",
    role: "Travel Guide · India",
    experience: "120+ experiences hosted",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    link: "/guides/rahul-mehta",
  },
  {
    name: "Sophia Lee",
    role: "Experience Curator · Tokyo",
    experience: "Food & culture expert",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    link: "/guides/sophia-lee",
  },
  {
    name: "Lucas Martin",
    role: "Adventure Host · Bali",
    experience: "Outdoor & surf expert",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    link: "/guides/lucas-martin",
  },
];

export default function Guides() {
  return (
    <section className="guides-section">
      <div className="guides-container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Meet our local guides
        </motion.h2>

        <motion.p
          className="guides-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Passionate locals who help you explore destinations like never before.
        </motion.p>

        <div className="guides-grid">
          {guides.map((guide, i) => (
            <motion.div
              key={i}
              className="guide-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }}
            >
              <Link to={guide.link}>
                <div className="guide-img">
                  <img src={guide.img} alt={guide.name} />
                </div>

                <div className="guide-info">
                  <h3>{guide.name}</h3>
                  <p className="guide-role">{guide.role}</p>
                  <p className="guide-exp">{guide.experience}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
