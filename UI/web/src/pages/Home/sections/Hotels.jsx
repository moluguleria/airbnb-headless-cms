// Hotels.jsx
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "./Hero.css";

const hotels = [
  {
    id: 1,
    name: "Ocean View Resort",
    location: "Goa, India",
    price: "$140 / night",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2100a",
    link: "/listing/ocean-view-resort",
  },
  {
    id: 2,
    name: "Urban Luxe Hotel",
    location: "New York, USA",
    price: "$210 / night",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    link: "/listing/urban-luxe-hotel",
  },
  {
    id: 3,
    name: "Mountain Escape Lodge",
    location: "Manali, India",
    price: "$95 / night",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    link: "/listing/mountain-escape-lodge",
  },
  {
    id: 4,
    name: "Desert Palace Stay",
    location: "Dubai, UAE",
    price: "$260 / night",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    link: "/listing/desert-palace-stay",
  },
  {
    id: 5,
    name: "Lakeview Boutique Hotel",
    location: "Zurich, Switzerland",
    price: "$180 / night",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    link: "/listing/lakeview-boutique-hotel",
  },
];

export default function Hotels() {
  return (
    <section className="hotels-section">
      <div className="hotels-container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Popular hotels & stays
        </motion.h2>

        <motion.p
          className="hotels-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Discover top-rated hotels and stays loved by travelers.
        </motion.p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.6 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          className="hotels-slider"
        >
          {hotels.map((hotel, i) => (
            <SwiperSlide key={hotel.id}>
              <motion.div
                className="hotel-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={hotel.link}>
                  <div className="hotel-img">
                    <img src={hotel.img} alt={hotel.name} />
                    <div className="hotel-rating">⭐ {hotel.rating}</div>
                  </div>

                  <div className="hotel-info">
                    <h3>{hotel.name}</h3>
                    <p className="hotel-location">{hotel.location}</p>
                    <p className="hotel-price">{hotel.price}</p>
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
