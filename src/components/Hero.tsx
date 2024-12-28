export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[85vh] bg-primary flex flex-col justify-evenly items-center text-accent py-8"
    >
      <div className="text-center flex items-center justify-center flex-wrap xl:flex-nowrap p-8 lg:p-20">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl lg:text-8xl mb-4">
            Where Code Meets Community
          </h2>
          <p className="text-2xl max-w-prose">
            Join our vibrant community of developers, share knowledge and grow
            together in a welcoming environment.
          </p>
        </div>
        <img
          src="/images/coffee_cup.jpg"
          alt="Code Cafe Logo"
          height="300"
          width="300"
          className="rounded-full shadow-lg"
        />
      </div>
      <div className="flex gap-10 my-6">
        <button className="px-8 py-4 text-primary rounded-lg border-2 border-secondary hover:border-secondary bg-secondary hover:text-secondary hover:bg-primary transition-all">
          Join us
        </button>
        <button className="px-8 py-4 text-primary rounded-lg border-2 border-secondary hover:border-secondary bg-secondary hover:text-secondary hover:bg-primary transition-all">
          Learn more
        </button>
      </div>
    </section>
  );
}
