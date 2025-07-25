import Link from "next/link";

export default function About() {
  return (
    <section className="w-full bg-white py-12" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 px-6">
        {/* Video */}
        <figure className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/academy/team.jpg"
            className="w-full h-full object-cover"
            aria-label="Football Academy Video"
          >
            <source src="/football-promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>

        {/* Text */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
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
