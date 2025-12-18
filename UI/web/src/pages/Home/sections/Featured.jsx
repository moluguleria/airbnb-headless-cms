// Featured.jsx
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "./Hero.css";

const featuredStays = [
  {
    id: 1,
    title: "Luxury Beach Villa",
    location: "Bali, Indonesia",
    price: "$180 / night",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    link: "/listing/luxury-beach-villa",
  },
  {
    id: 2,
    title: "Modern City Apartment",
    location: "Paris, France",
    price: "$130 / night",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    link: "/listing/modern-city-apartment",
  },
  {
    id: 3,
    title: "Mountain View Cabin",
    location: "Aspen, USA",
    price: "$110 / night",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    link: "/listing/mountain-view-cabin",
  },
  {
    id: 4,
    title: "Private Pool Resort",
    location: "Dubai, UAE",
    price: "$220 / night",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    link: "/listing/private-pool-resort",
  },
];

export default function Featured() {
  return (
    <section className="featured-section">
      <div className="featured-container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured stays
        </motion.h2>

        <motion.p
          className="featured-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Hand-picked homes loved by travelers worldwide.
        </motion.p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.2 },
          }}
          className="featured-slider"
        >
          {featuredStays.map((stay, i) => (
            <SwiperSlide key={stay.id}>
              <motion.div
                className="featured-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={stay.link}>
                  <div className="featured-img">
                    <img src={stay.img} alt={stay.title} />
                    <div className="featured-overlay">
                      <button>View details</button>
                    </div>
                  </div>

                  <div className="featured-info">
                    <div className="featured-top">
                      <h3>{stay.title}</h3>
                      <span className="rating">⭐ {stay.rating}</span>
                    </div>
                    <p className="location">{stay.location}</p>
                    <p className="price">{stay.price}</p>
                  </div>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
