"use client";

import React, { useState } from "react";
import Image from "next/image";

const managementTeam = [
  {
    name: "Stacey Isiaho",
    role: "Academy Director",
    image: "/coach.jpg",
  },
  {
    name: "Shishi Wanjiru",
    role: "Operations Manager",
    image: "/coach.jpg",
  },
  {
    name: "Joachim Mwengi",
    role: "Technical Director",
    image: "/coach.jpg",
  },
];

const footballCoaches = [
  {
    name: "Coach Paul",
    role: "Head Coach",
    image: "/coach.jpg",
  },
  {
    name: "Coach Kim",
    role: "Under 9 Coach",
    image: "/coach.jpg",
  },
  {
    name: "Coach T",
    role: "Under 13 Coach",
    image: "/coach.jpg",
  },
];

const basketballCoaches = [
  {
    name: "Keza Diane",
    role: "Basketball Coach",
    image: "/coach.jpg",
  },
  {
    name: "Michael Gatera",
    role: "Assistant Basketball Coach",
    image: "/coach.jpg",
  },
];

const tennisCoaches = [
  {
    name: "Keza Diane",
    role: "Basketball Coach",
    image: "/coach.jpg",
  },
  {
    name: "Michael Gatera",
    role: "Assistant Basketball Coach",
    image: "/coach.jpg",
  },
];

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState("management");

  const getTeam = () => {
    switch (selectedCategory) {
      case "management":
        return managementTeam;
      case "football":
        return footballCoaches;
      case "basketball":
        return basketballCoaches;
      case "tennis":
        return tennisCoaches;
      default:
        return [];
    }
  };

  const renderButtons = () => {
    const categories = [
      { label: "Management", value: "management" },
      { label: "Football", value: "football" },
      { label: "Basketball", value: "basketball" },
      { label: "Tennis", value: "tennis" },
    ];

    return (
      <div className="flex items-center justify-center mt-6">
        <div className="flex items-center p-1 border border-[#8536b6] rounded-xl">
          {categories.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setSelectedCategory(value)}
              className={`px-4 py-2 mx-2 text-sm font-medium capitalize transition-colors duration-300 rounded-xl md:px-6 md:py-3 ${
                selectedCategory === value
                  ? "bg-[#8536b6] text-white"
                  : "text-[#8536b6] hover:bg-[#59098c] hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 capitalize lg:text-3xl">
          Our Team
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Meet the passionate leaders and coaches shaping the next generation of
          champions.
        </p>

        {renderButtons()}

        <div
          className={`mt-10 xl:mt-16 grid gap-8 ${
            getTeam().length === 1
              ? "grid-cols-1 justify-items-center"
              : getTeam().length === 2
              ? "grid-cols-1 sm:grid-cols-2 justify-items-center"
              : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center"
          }`}
        >
          {getTeam().map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-sm w-full"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">
                {member.name}
              </h2>
              <p className="mt-2 text-gray-500 capitalize">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
