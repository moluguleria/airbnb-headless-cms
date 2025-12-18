// Places.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.css";

const places = [
  {
    name: "Paris",
    desc: "Romantic city with iconic landmarks, cafes, and art.",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    link: "/listings/stay?city=paris",
  },
  {
    name: "Bali",
    desc: "Tropical paradise with beaches, temples, and resorts.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    link: "/listings/stay?city=bali",
  },
  {
    name: "New York",
    desc: "The city that never sleeps, full of culture and energy.",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    link: "/listings/stay?city=newyork",
  },
  {
    name: "Dubai",
    desc: "Luxury, skyscrapers, desert safaris, and nightlife.",
    img: "https://images.unsplash.com/photo-1528702748617-c64d49f918af",
    link: "/listings/stay?city=dubai",
  },
  {
    name: "Tokyo",
    desc: "Modern life blended with tradition and technology.",
    img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
    link: "/listings/stay?city=tokyo",
  },
  {
    name: "Rome",
    desc: "Historic streets, architecture, and world-class cuisine.",
    img: "https://images.unsplash.com/photo-1526481280691-8cba8f2e0b7a",
    link: "/listings/stay?city=rome",
  },
];

export default function Places() {
  return (
    <section className="places-section">
      <div className="places-container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Top places to visit
        </motion.h2>

        <motion.p
          className="places-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Get inspired by some of the most loved destinations around the world.
        </motion.p>

        <div className="places-grid">
          {places.map((place, i) => (
            <motion.div
              key={i}
              className="place-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -10 }}
            >
              <Link to={place.link}>
                <div className="place-img">
                  <img src={place.img} alt={place.name} />
                </div>

                <div className="place-info">
                  <h3>{place.name}</h3>
                  <p>{place.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
