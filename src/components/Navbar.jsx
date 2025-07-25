"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fix: Detect scroll position immediately on mount
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll(); // Run immediately on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={
                isScrolled ? "/shir-web-logo-dark.png" : "/shir-web-logo.png"
              }
              width={160}
              height={160}
              alt="Shir Web Logo"
              className="transition-all duration-300"
              priority
            />
          </Link>

          {/* Call Us Button (Desktop) */}
          <div className="hidden md:flex md:order-2 space-x-3">
            <a href="tel:+254743130391">
              <button
                type="button"
                className="flex items-center text-white font-heading bg-[#8536b6] hover:bg-[#59098c] focus:ring-4 focus:outline-none focus:ring-[#8536b6] font-medium rounded-lg text-sm px-4 py-3 transition"
              >
                <MdLocalPhone className="text-lg mr-1" />
                CALL US
              </button>
            </a>
          </div>

          {/* Desktop Nav Menu */}
          <div className="hidden md:flex space-x-8 md:order-1">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-900 hover:text-[#8536b6]"
                    : item.label === "Home"
                    ? "text-[#8536b6]"
                    : "text-white hover:text-[#d3b2e8]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-3xl text-[#8536b6] z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6 mt-20">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="block text-gray-800 text-lg font-medium hover:text-[#8536b6]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+254743130391"
            className="block text-white bg-[#8536b6] hover:bg-[#59098c] text-center py-2 rounded-lg mt-4"
          >
            <MdLocalPhone className="inline-block mr-1" />
            Call Us
          </a>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
