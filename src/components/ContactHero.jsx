const ContactHero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-32 px-4 text-white"
      style={{ backgroundImage: "url('/hero-img.jpg')" }} // Replace with your image path
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div> {/* Overlay */}
      <div className="relative z-10 max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We'd love to hear from you — whether you have a question, feedback, or
          just want to say hello.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
