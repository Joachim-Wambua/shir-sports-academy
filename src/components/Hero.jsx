"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Unlock Your Child's Athletic Potential",
    text: "Our structured football and basketball programs build discipline, confidence, and teamwork.",
    image: "/greg.jpg",
  },
  {
    id: 2,
    title: "Elite Coaching for All Skill Levels",
    text: "Certified coaches create a safe and growth-oriented environment for young athletes.",
    image: "/academy/team.jpg",
  },
  {
    id: 3,
    title: "More Than Sports - We Build Leaders",
    text: "Character, commitment, and community are at the heart of every training session.",
    image: "/academy/nathan.jpg",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden shadow-xl pt-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt={slides[index].title}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {slides[index].title}
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {slides[index].text}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
