 const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/hero.jpg')` }}>
      <div className="bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-6xl font-serif text-center">
          Sketch Wedding
        </h1>
      </div>
    </section>
  );
};

export default Hero;
