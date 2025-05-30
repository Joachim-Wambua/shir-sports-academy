import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import ContactHero from "@/components/ContactHero";

const page = () => {
  return (
    <>
      <div>
        <Navbar />
        <ContactHero />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default page;
