"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  { src: "/academy/coach-pau.jpg", alt: "Coach Pau" },
  { src: "/academy/maina.jpg", alt: "Coach Maina" },
  { src: "/academy/nathan2.jpg", alt: "Nathan Training" },
  { src: "/academy/team.jpg", alt: "Team Photo" },
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
              experience and dedication to every athlete.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-md border border-transparent bg-white px-7 py-3 text-base font-bold text-[#59098c] transition hover:bg-[#0BB489] hover:text-white"
            >
              Get Started Today
            </Link>
          </div>

          {/* Right Masonry Gallery */}
          <motion.div
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4 max-h-[360px] pr-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {images.map(({ src, alt }, i) => (
              <motion.div
                key={i}
                className="relative h-[140px] md:h-[180px] overflow-hidden rounded-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                data-aos="zoom-in"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
