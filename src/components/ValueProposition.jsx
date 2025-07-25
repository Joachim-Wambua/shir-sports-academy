"use client";

import {
  FaRunning,
  FaUserFriends,
  FaChalkboardTeacher,
  FaShieldAlt,
} from "react-icons/fa";

const values = [
  {
    title: "Holistic Athletic Development",
    icon: <FaRunning className="text-3xl text-[#59098c]" aria-hidden="true" />,
    description:
      "We build speed, strength, coordination, and discipline across football and basketball.",
  },
  {
    title: "Teamwork & Leadership",
    icon: (
      <FaUserFriends className="text-3xl text-[#59098c]" aria-hidden="true" />
    ),
    description:
      "Our programs cultivate collaboration, communication, and confidence both on and off the field.",
  },
  {
    title: "Expert Coaching",
    icon: (
      <FaChalkboardTeacher
        className="text-3xl text-[#59098c]"
        aria-hidden="true"
      />
    ),
    description:
      "Certified coaches tailor training for all levels to maximize growth and minimize risk.",
  },
  {
    title: "Safe & Supportive Environment",
    icon: (
      <FaShieldAlt className="text-3xl text-[#59098c]" aria-hidden="true" />
    ),
    description:
      "We prioritize physical safety, emotional well-being, and character development.",
  },
];

const ValueProposition = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Makes Us Different?
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Our mission goes beyond drills and wins — we focus on building better
          athletes and stronger people.
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
              role="listitem"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
