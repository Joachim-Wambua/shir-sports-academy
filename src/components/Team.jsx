"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

const footballCoaches = [
  { name: "Coach Victor", role: "Under 13 Coach", image: "/victor.jpg" },
  { name: "Coach Steve", role: "Under 13 Coach", image: "/bango.jpg" },
  { name: "Coach Paul", role: "Under 9 Coach", image: "/paul.jpg" },
  { name: "Coach Kim", role: "Under 9 Coach", image: "/kim.jpg" },
];

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState("football");

  const teamList = useMemo(() => {
    switch (selectedCategory) {
      case "football":
      default:
        return footballCoaches;
    }
  }, [selectedCategory]);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 lg:text-4xl">
          Our Team
        </h1>
        <p className="max-w-xl mx-auto my-6 text-gray-500">
          Meet the passionate leaders and coaches shaping the next generation of
          champions.
        </p>

        <div className="flex justify-center mt-6">
          <div className="flex gap-2 border border-[#8536b6] rounded-xl p-1">
            <button
              onClick={() => setSelectedCategory("football")}
              className={`px-4 py-2 text-sm font-medium transition rounded-xl ${
                selectedCategory === "football"
                  ? "bg-[#8536b6] text-white"
                  : "text-[#8536b6] hover:bg-[#59098c] hover:text-white"
              }`}
            >
              Football
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamList.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-sm"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  placeholder="blur"
                  blurDataURL="/placeholder.png"
                  priority={index === 0}
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-700">
                {member.name}
              </h2>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
