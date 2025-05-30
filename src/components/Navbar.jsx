"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={isScrolled ? "/shir-web-logo-dark.png" : "/shir-web-logo.png"}
            width={160}
            height={160}
            alt="Shir Web Logo"
            className="transition-all duration-300"
          />
        </Link>

        {/* Call Us Button */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex flex-row items-center text-white font-heading bg-[#8536b6] hover:bg-[#59098c] focus:ring-4 focus:outline-none focus:ring-[#8536b6] font-medium rounded-lg text-sm px-4 py-3 transition"
          >
            <MdLocalPhone className="text-lg mr-1" />
            CALL US
          </button>
        </div>

        {/* Nav Menu */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul
            className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
              bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 
              md:bg-transparent"
          >
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className={`block py-2 px-3 md:p-0 rounded-sm transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-900 hover:text-[#8536b6]"
                      : item.label === "Home"
                      ? "text-[#8536b6]"
                      : "text-white hover:text-[#d3b2e8]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
