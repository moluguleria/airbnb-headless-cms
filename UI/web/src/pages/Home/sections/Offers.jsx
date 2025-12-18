// Offers.jsx
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "./Hero.css";

const offers = [
  {
    title: "Summer Escape Sale",
    desc: "Get up to 30% off on beach stays this summer.",
    discount: "30% OFF",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    link: "/offers/summer",
  },
  {
    title: "Luxury Weekend Deals",
    desc: "Exclusive luxury homes at special weekend prices.",
    discount: "20% OFF",
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    link: "/offers/luxury",
  },
  {
    title: "Mountain Getaways",
    desc: "Save big on cozy mountain stays and cabins.",
    discount: "25% OFF",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    link: "/offers/mountains",
  },
  {
    title: "City Break Specials",
    desc: "Short city trips with amazing discounted stays.",
    discount: "15% OFF",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    link: "/offers/city",
  },
];

export default function Offers() {
  return (
    <section className="offers-section">
      <div className="offers-container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Special offers & deals
        </motion.h2>

        <motion.p
          className="offers-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Don’t miss out on limited-time discounts curated just for you.
        </motion.p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2600, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.6 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          className="offers-slider"
        >
          {offers.map((offer, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="offer-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={offer.link}>
                  <div className="offer-img">
                    <img src={offer.img} alt={offer.title} />
                    <span className="offer-badge">{offer.discount}</span>
                  </div>

                  <div className="offer-info">
                    <h3>{offer.title}</h3>
                    <p>{offer.desc}</p>
                    <button>View offer</button>
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
