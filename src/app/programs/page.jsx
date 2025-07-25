import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramsHero from "@/components/ProgramsHero";
import ProgramCard from "@/components/ProgramCard";

const page = () => {
  const programs = [
    {
      title: "Football Program",
      description:
        "Comprehensive training in technique, fitness, and game intelligence for all age groups.",
      image: "/football.jpg",
      link: "/programs/football",
    },
    {
      title: "Basketball Program",
      description:
        "From fundamentals to competitive play, we prepare athletes for the next level.",
      image: "/basketball.jpg",
      link: "/programs/basketball",
    },
    {
      title: "Tennis Program",
      description:
        "From Beginner to Champion: Your Tennis Journey Starts Here. Serve Up Success, One Swing at a Time.",
      image: "/tennis.jpg",
      link: "/programs/tennis",
    },
  ];
  return (
    <>
      <div>
        <Navbar />
        <ProgramsHero />
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-screen-xl mx-auto grid gap-10 md:grid-cols-3">
            {programs.map((program, i) => (
              <ProgramCard key={i} {...program} />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default page;
