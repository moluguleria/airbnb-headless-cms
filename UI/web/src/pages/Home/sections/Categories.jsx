// Categories.jsx
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "./Hero.css";

const categories = [
  {
    title: "Beachfront",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    link: "/listings/stay?category=beach",
  },
  {
    title: "Cabins",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    link: "/listings/stay?category=cabin",
  },
  {
    title: "Luxury",
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    link: "/listings/stay?category=luxury",
  },
  {
    title: "City Views",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    link: "/listings/stay?category=city",
  },
  {
    title: "Amazing Pools",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    link: "/listings/stay?category=pool",
  },
  {
    title: "Countryside",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    link: "/listings/stay?category=countryside",
  },
];

export default function Categories() {
  return (
    <section className="categories-section">
      <div className="categories-container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Browse by category
        </motion.h2>

        <motion.p
          className="categories-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Explore stays based on what you love most.
        </motion.p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          spaceBetween={20}
          slidesPerView={1.4}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 3.5 },
            1024: { slidesPerView: 5 },
          }}
          className="categories-slider"
        >
          {categories.map((cat, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="category-card"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link to={cat.link}>
                  <img src={cat.img} alt={cat.title} />
                  <div className="category-overlay">
                    <span>{cat.title}</span>
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
