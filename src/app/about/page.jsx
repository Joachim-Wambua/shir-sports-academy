import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";

const page = () => {
  return (
    <>
      <div>
        <Navbar />
        <AboutHero />
        <AboutUs />
        <WhyChooseUs />
        <Footer />
      </div>
    </>
  );
};

export default page;
