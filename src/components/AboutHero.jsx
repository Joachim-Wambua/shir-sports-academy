const AboutHero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-32 px-4 text-white"
      style={{ backgroundImage: "url('/bball.jpg')" }} // Replace with your actual image path
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">About Our Academy</h1>
        <p className="text-lg">
          Empowering young athletes to excel on and off the field through
          discipline, teamwork, and skill.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
