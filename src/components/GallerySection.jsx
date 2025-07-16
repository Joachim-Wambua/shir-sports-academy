"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const galleryImages = [
  "/academy/pau.jpg",
  "/academy/nathan.jpg",
  "/academy/gifti2.jpg",
  "/academy/team.jpg",
  "/academy/leslie2.jpg",
  "/academy/liam.jpg",
  "/academy/maina.jpg",
  "/academy/nathan2.jpg",
  "/academy/maina.jpg",
];

const GallerySection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Moments in Motion
          </h2>
          <p className="text-gray-600 text-lg">
            A glimpse into our daily drills, match days, and team spirit.
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
          data-aos="fade-up"
        >
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid relative overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              data-aos="zoom-in"
            >
              <div className="relative w-full h-[300px] sm:h-[260px] ">
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  placeholder="blur"
                  blurDataURL="/placeholder.png" // optional low-res placeholder
                  priority={i < 2}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
