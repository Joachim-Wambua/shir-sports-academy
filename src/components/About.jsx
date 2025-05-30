// components/AboutUsHeroSection.tsx

import Link from "next/link";

export default function AboutUsHeroSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 px-6">
        {/* Left: Image or Video */}
        <div className="w-full lg:w-1/2">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              //   poster="/images/about-thumbnail.jpg"
            >
              <source src="/football-promo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            More Than a Game — We Train Minds and Feet
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At our academy, football is a tool for growth — on and off the
            pitch. We build confidence, nurture discipline, and inspire players
            to lead with heart and purpose.
          </p>
          <Link href="/about">
            <button className="inline-block text-white font-semibold px-6 py-3 rounded-full bg-[#8536b6] hover:bg-[#59098c] my-2 transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
