export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[8vh] bg-primary flex flex-col justify-evenly items-center text-accent py-8"
    >
      <div className="text-center flex items-center justify-center flex-wrap xl:flex-nowrap p-8 lg:p-5">
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-xl lg:text-4xl mb-2">
            Where Code Meets Community
          </h2>
          <p className="font-mono text-lg max-w-prose">
            Join our vibrant community of developers, share knowledge and grow
            together in a welcoming environment.
          </p>
        </div>
      </div>
      <div className="flex gap-10 my-6">
        <button className="px-8 py-4 text-primary rounded-lg border-2 border-secondary hover:border-secondary bg-secondary hover:text-secondary hover:bg-primary transition-all">
          Join us
        </button>
      </div>
    </section>
  );
}
