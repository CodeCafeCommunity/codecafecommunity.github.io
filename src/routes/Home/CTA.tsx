export default function CTA() {
  return (
    <section
      id="cta"
      className="flex items-center justify-center bg-primary p-6 md:py-20"
    >
      <div className="cta-container flex flex-col items-center justify-evenly rounded-3xl bg-gradient-to-r from-accent to-secondary p-10 text-primary shadow-md md:px-60 md:py-20">
        <h2 className="mb-4 text-center text-3xl font-bold">
          Ready to Join Our Community?
        </h2>
        <p className="mb-6 text-center text-lg">
          Start your journey with Code Cafe today and become part of a thriving
          developer community.
        </p>
        <a
          className="discord-button rounded-lg border-2 border-primary bg-primary px-8 py-4 text-secondary transition-all hover:bg-secondary hover:text-primary hover:no-underline"
          href="https://discord.gg/code-cafe"
        >
          Join Code Cafe
        </a>
      </div>
    </section>
  );
}
