import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ValueProposition from "@/components/ValueProposition";
import Image from "next/image";
import Programs from "@/components/Programs";
import Team from "@/components/Team";
import CallToAction from "@/components/CallToAction";
import Pricing from "@/components/Pricing";

export const metadata = {
  title: "Shir Sports Academy",
  description: "Empowering youth through football and basketball programs.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Team />
      <ValueProposition />
      <CallToAction />
      <Pricing />
      <Footer />
    </>
  );
}
