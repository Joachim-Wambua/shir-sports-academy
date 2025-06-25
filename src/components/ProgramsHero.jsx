const ProgramsHero = () => {
  return (
    <section className="relative h-[60vh] bg-black text-white flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero3.jpg"
          alt="Programs Hero"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Our Programs</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Discover how we train and shape young athletes through Football and
          Basketball.
        </p>
      </div>
    </section>
  );
};
export default ProgramsHero;
