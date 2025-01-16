import { Users, CircleHelp, BookOpen } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-background py-20">
      <div className="outer">
        <div className="inner">
          <div className="flex-1 flex flex-col items-center text-center py-6">
            <Users size={48} className="text-accent mb-2" />
            <h3 className="text-secondary text-xl mb-2 font-mono">
              Active Community
            </h3>
            <p className="text-secondary text-sm">
              Connect with like-minded developers and build lasting
              relationships.
            </p>
          </div>
          <div className="self-center bg-[rgba(255,255,255,0.1)] bg-clip-border bg-origin-padding bg-scroll bg-repeat shadow-[0px_0px_70px_15px_rgba(0,0,0,0.75)] box-border text-white font-sans font-[cv05_ss01_ss03_zero] text-base leading-6 h-[100px] w-[1px] text-left hidden lg:block"></div>

          <div className="flex-1 flex flex-col items-center text-center py-6 font-mono">
            <CircleHelp size={48} className="text-accent mb-2" />
            <h3 className="text-secondary text-xl mb-2">Some other thing</h3>
            <p className="text-secondary text-sm">
              Description about that other thing.
            </p>
          </div>
          <div className="self-center bg-[rgba(255,255,255,0.1)] bg-clip-border bg-origin-padding bg-scroll bg-repeat shadow-[0px_0px_70px_15px_rgba(0,0,0,0.75)] box-border text-white font-sans font-[cv05_ss01_ss03_zero] text-base leading-6 h-[100px] w-[1px] text-left hidden lg:block"></div>

          <div className="flex-1 flex flex-col items-center text-center py-6">
            <BookOpen size={48} className="text-accent mb-2" />
            <h3 className="text-secondary text-xl mb-2 font-mono">
              Learning Resources
            </h3>
            <p className="text-secondary text-sm">
              Access curated learning materials and documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
