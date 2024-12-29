export default function CTA() {
  return (
    <section
      id="cta"
      className="bg-primary flex justify-center items-center p-6 md:py-20"
    >
      <div className="cta-container bg-gradient-to-r from-accent to-secondary shadow-md rounded-3xl p-10 md:px-60 md:py-20 flex flex-col justify-evenly items-center text-primary">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Ready to Join Our Community?
        </h2>
        <p className="text-center text-lg mb-6">
          Start your journey with Code Cafe today and become part of a thriving
          developer community.
        </p>
        <a
          className="discord-button bg-primary px-8 py-4 rounded-lg border-2 border-primary text-secondary hover:bg-secondary hover:text-primary transition-all hover:no-underline"
          href="https://discord.gg/code-cafe"
        >
          Join Code Cafe
        </a>
      </div>
    </section>
  );
}
