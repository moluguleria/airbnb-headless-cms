// Reviews.jsx
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./Hero.css";

const reviews = [
  {
    name: "Alex Johnson",
    location: "New York, USA",
    rating: 5,
    review:
      "Absolutely loved the experience. The stay was clean, comfortable, and exactly as shown. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Williams",
    location: "London, UK",
    rating: 4.8,
    review:
      "Booking was smooth and the host was amazing. This platform made my vacation stress-free.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Sharma",
    location: "Delhi, India",
    rating: 4.9,
    review:
      "One of the best travel experiences I’ve had. Loved the design, service, and transparency.",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    name: "Emily Chen",
    location: "Singapore",
    rating: 5,
    review:
      "Everything felt premium and trustworthy. I’ll definitely use this platform again.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Reviews() {
  return (
    <section className="reviews-section">
      <div className="reviews-container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What our guests say
        </motion.h2>

        <motion.p
          className="reviews-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Real reviews from travelers around the world.
        </motion.p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.6 },
            768: { slidesPerView: 2.3 },
            1024: { slidesPerView: 3 },
          }}
          className="reviews-slider"
        >
          {reviews.map((item, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="review-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="review-top">
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="review-rating">
                  ⭐ {item.rating}
                </div>

                <p className="review-text">“{item.review}”</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
