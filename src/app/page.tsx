"use client"
import Hero from "./components/Hero";
import Ecommerce from "./components/Ecommerce";
import Features from "./components/features";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";


export default function Home() {
  return (
   <div>
  <Hero/>
  <Ecommerce/>
  <Features/>
  <Testimonial/>
  <Footer/>
   </div>
  );
}
