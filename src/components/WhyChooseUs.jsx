const WhyChooseUs = () => {
  const points = [
    "Professional Coaches with Real Experience",
    "Modern Training Facilities",
    "Personalized Training Programs",
    "Academic Support for Student-Athletes",
    "Character & Leadership Development",
  ];

  return (
    <section className="py-20 px-4 bg-gray-100 text-gray-800">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Our Academy?</h2>
        <ul className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          {points.map((point, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="text-[#8536b6] text-xl">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
