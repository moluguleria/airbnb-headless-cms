import React from "react";
import "./Home.css";
import Footer from "../../components/Footer.jsx";
import {
  Hero,
  Offers,
  Services,
  Featured,
  Categories,
  Guides,
  Places,
  Hotels,
  Reviews,
  WhyUs,
  FAQ
} from "./sections";
import Trust from "./sections/Trust";
import Contact from "./sections/Contact";
import Pricing from "./sections/Pricing";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <WhyUs />
      <Services />
      <Categories />
      <Featured />
      <Hotels />
      <Places />
      <Offers />
      <Guides />
      <Reviews />
      <FAQ />
      <Trust />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
