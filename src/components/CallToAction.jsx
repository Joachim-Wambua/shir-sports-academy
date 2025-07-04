"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "/academy/coach-pau.jpg",
  "/academy/maina.jpg",
  "/academy/nathan2.jpg",
  "/academy/team.jpg",
];

const CallToAction = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  return (
    <section className="relative z-10 overflow-hidden bg-[#59098c] py-20 lg:py-[115px]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Text */}
          <div
            className="w-full lg:w-1/2 text-center lg:text-left"
            data-aos="fade-right"
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-[38px] leading-snug">
              Train Like a Pro
              <br />
              <span className="text-3xl font-normal md:text-[40px]">
                Start Your Journey With Us
              </span>
            </h2>
            <p className="mb-6 max-w-xl text-base text-white leading-relaxed mx-auto lg:mx-0">
              Our team of expert coaches, mentors, and managers brings top-level
              experience and dedication to every athlete. Join a community where
              potential is realized and goals become wins.
            </p>
            <Link
              href="/"
              className="inline-block rounded-md border border-transparent bg-white px-7 py-3 text-base font-bold text-[#59098c] transition hover:bg-[#0BB489] hover:text-white"
            >
              Get Started Today
            </Link>
          </div>

          {/* Right Masonry Gallery */}
          <motion.div
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4 max-h-[360px]  pr-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {images.map((src, i) => (
              <motion.div
                key={i}
                className={`relative rounded-xl overflow-hidden h-[140px] md:h-[180px]`}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                data-aos="zoom-in"
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i === 0}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div>
        <span className="absolute left-0 top-0">
          <svg
            width="495"
            height="470"
            viewBox="0 0 495 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="55"
              cy="442"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="446"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              strokeOpacity="0.08"
              strokeWidth="12"
            />
          </svg>
        </span>
        <span className="absolute bottom-0 right-0">
          <svg
            width="493"
            height="470"
            viewBox="0 0 493 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="462"
              cy="5"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="49"
              cy="470"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
              stroke="white"
              strokeOpacity="0.06"
              strokeWidth="13"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default CallToAction;
