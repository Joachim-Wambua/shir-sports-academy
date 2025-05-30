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
    icon: <FaRunning className="text-3xl text-primary" />,
    description:
      "We build speed, strength, coordination, and discipline across football and basketball.",
  },
  {
    title: "Teamwork & Leadership",
    icon: <FaUserFriends className="text-3xl text-primary" />,
    description:
      "Our programs cultivate collaboration, communication, and confidence both on and off the field.",
  },
  {
    title: "Expert Coaching",
    icon: <FaChalkboardTeacher className="text-3xl text-primary" />,
    description:
      "Certified coaches tailor training for all levels to maximize growth and minimize risk.",
  },
  {
    title: "Safe & Supportive Environment",
    icon: <FaShieldAlt className="text-3xl text-primary" />,
    description:
      "We prioritize physical safety, emotional well-being, and character development.",
  },
];

const ValueProposition = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
          What Makes Us Different?
        </h2>
        <p className="text-lg text-gray-600 font-body mb-12">
          Our mission goes beyond drills and wins — we focus on building better
          athletes and stronger people.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-left"
            >
              <div className="mb-4 text-[#59098c]">{value.icon}</div>
              <h3 className="text-xl font-semibold font-heading text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 font-body">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
