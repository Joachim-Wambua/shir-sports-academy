"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-4 pt-16 mx-auto bg-[#59098c] w-full sm:max-w-screen md:max-w-screen lg:max-w-screen lg:px-24">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <a href="/" className="flex items-center">
            <Image
              src="/shir-web-logo.png"
              width={160}
              height={160}
              alt="Shir Sports Academy Logo"
              priority
            />
          </a>
          <p className="mt-4 text-sm">
            Building champions through discipline, skill development, and
            teamwork.
          </p>
          <p className="mt-2 text-sm">
            Join us to unlock your athletic potential through elite training and
            support.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-3">
          <div>
            <h4 className="font-bold mb-2">Academy</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:underline">
                  Training Programs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Shir Sports Academy. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7..."></path>
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
              <circle cx="15" cy="15" r="4" />
              <path d="..." />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="..." />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
