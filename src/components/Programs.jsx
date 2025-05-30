"use client"
import { motion } from "framer-motion";

export default function Programs() {
  const sports = [
    {
      name: "Football",
      image: "/football.jpg",
      description:
        "We train young players to master the game with discipline, creativity, and leadership.",
    },
    {
      name: "Basketball",
      image: "/basketball.jpg",
      description:
        "Our basketball sessions build agility, precision, and team coordination from the ground up.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center text-black">Our Programs</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {sports.map((sport, idx) => (
            <motion.div
              key={sport.name}
              className="relative rounded-2xl overflow-hidden shadow-xl group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={sport.image}
                alt={sport.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 "
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
                <h3 className="text-3xl font-bold">{sport.name}</h3>
                <p className="mt-2 text-md">{sport.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
