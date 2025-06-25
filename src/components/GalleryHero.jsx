const GalleryHero = () => {
  return (
    <section className="relative h-[50vh] bg-black text-white flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="/gallery-hero.jpg"
          alt="Gallery Hero"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Our Gallery</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          A glimpse into our vibrant academy in action – training, games, and
          fun.
        </p>
      </div>
    </section>
  );
};
export default GalleryHero;
