const AboutUs = () => {
  return (
    <section className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="mb-4">
            Our Sports Academy is a hub for young talent, focusing on holistic
            athletic development. We nurture skill, character, and a winning
            mindset.
          </p>
          <p className="mb-6">
            With certified coaches and a supportive environment, we’ve helped
            hundreds of athletes chase their dreams in football, athletics, and
            beyond.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="mb-6">
            To develop disciplined, skilled, and confident athletes through
            structured training, mentorship, and competition.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p>
            To be Africa’s leading grassroots sports academy known for nurturing
            world-class talent.
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/promo-two.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
