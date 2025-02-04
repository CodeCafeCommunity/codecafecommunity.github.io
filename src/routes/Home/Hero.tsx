export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-evenly bg-primary py-8 text-accent"
    >
      <div className="flex flex-wrap items-center justify-center p-8 text-center lg:p-5 xl:flex-nowrap">
        <div className="flex flex-col items-center">
          <h2 className="mb-2 text-xl md:text-xl lg:text-4xl">
            Where Code Meets Community
          </h2>
          <p className="max-w-prose font-mono text-lg">
            Join our vibrant community of developers, share knowledge and grow
            together in a welcoming environment.
          </p>
        </div>
      </div>
      <div className="my-6 flex gap-10">
        <button className="rounded-lg border-2 border-secondary bg-secondary px-8 py-4 text-primary transition-all hover:border-secondary hover:bg-primary hover:text-secondary">
          Join us
        </button>
      </div>
    </section>
  );
}
