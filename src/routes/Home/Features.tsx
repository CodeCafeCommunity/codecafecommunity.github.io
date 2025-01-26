import { Users, CircleHelp, BookOpen } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-background py-20">
      <div className="outer mx-auto max-w-6xl rounded-2xl border border-solid border-transparent p-2.5">
        <div className="inner flex gap-x-6 rounded-lg px-4 py-6">
          <div className="flex flex-1 flex-col items-center py-6 text-center">
            <Users size={48} className="mb-2 text-accent" />
            <h3 className="mb-2 font-mono text-xl text-secondary">
              Active Community
            </h3>
            <p className="text-sm text-secondary">
              Connect with like-minded developers and build lasting
              relationships.
            </p>
          </div>
          <div className="box-border hidden h-[100px] w-[1px] self-center bg-[rgba(255,255,255,0.1)] bg-scroll bg-clip-border bg-repeat bg-origin-padding text-left font-sans text-base font-[cv05_ss01_ss03_zero] leading-6 text-white shadow-[0px_0px_70px_15px_rgba(0,0,0,0.75)] lg:block"></div>

          <div className="flex flex-1 flex-col items-center py-6 text-center font-mono">
            <CircleHelp size={48} className="mb-2 text-accent" />
            <h3 className="mb-2 text-xl text-secondary">Some other thing</h3>
            <p className="text-sm text-secondary">
              Description about that other thing.
            </p>
          </div>
          <div className="box-border hidden h-[100px] w-[1px] self-center bg-[rgba(255,255,255,0.1)] bg-scroll bg-clip-border bg-repeat bg-origin-padding text-left font-sans text-base font-[cv05_ss01_ss03_zero] leading-6 text-white shadow-[0px_0px_70px_15px_rgba(0,0,0,0.75)] lg:block"></div>

          <div className="flex flex-1 flex-col items-center py-6 text-center">
            <BookOpen size={48} className="mb-2 text-accent" />
            <h3 className="mb-2 font-mono text-xl text-secondary">
              Learning Resources
            </h3>
            <p className="text-sm text-secondary">
              Access curated learning materials and documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
