"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
];

const columns = 4;

const GallerySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const columnImages = useMemo(() => {
    const cols = Array.from({ length: columns }, () => []);
    galleryImages.forEach((img, i) =>
      cols[i % columns].push({ src: img, globalIndex: i })
    );
    return cols;
  }, []);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, goToNext, goToPrev]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Moments in Motion
          </h2>
          <p className="text-gray-600 text-lg">
            A glimpse into our daily drills, match days, and team spirit.
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          data-aos="fade-up"
        >
          {columnImages.map((col, i) => (
            <div key={i} className="flex flex-col gap-4">
              {col.map(({ src, globalIndex }) => (
                <motion.div
                  key={globalIndex}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  onClick={() => openModal(globalIndex)}
                  className="overflow-hidden rounded-xl cursor-pointer"
                  data-aos="zoom-in"
                >
                  <div className="relative w-full h-[260px]">
                    <Image
                      src={src}
                      alt={`Gallery ${globalIndex + 1}`}
                      fill
                      className="object-cover rounded-xl"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      placeholder="blur"
                      blurDataURL="/placeholder.png"
                      loading={globalIndex < 2 ? "eager" : "lazy"}
                      priority={globalIndex < 2}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            aria-label="Close image modal"
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[currentIndex]}
                alt={`Full image ${currentIndex + 1}`}
                width={1200}
                height={800}
                className="rounded-xl object-contain w-full h-auto max-h-[90vh]"
                sizes="(max-width: 768px) 90vw, 70vw"
                priority
              />
              <button
                onClick={goToPrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black/50 rounded-full px-3 py-1"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black/50 rounded-full px-3 py-1"
                aria-label="Next image"
              >
                ›
              </button>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-2xl bg-black/60 rounded-full px-3 py-1"
                aria-label="Close modal"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
