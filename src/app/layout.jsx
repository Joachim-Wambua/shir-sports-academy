"use client"
import { Assistant, Commissioner } from "next/font/google";
import Aos from "aos";
import "./globals.css";
import { useEffect } from "react";

const assistant = Assistant({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const commissioner = Commissioner({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});


export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  }, []);
  return (
    <html lang="en">
      <body
        className={`${assistant.variable} ${commissioner.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
