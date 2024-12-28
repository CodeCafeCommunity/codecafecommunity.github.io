import { Users, CircleHelp, BookOpen } from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="min-h-[35vh] bg-secondary flex flex-wrap gap-8 items-stretch p-8"
    >
      <div className="bg-primary shadow-lg rounded-3xl p-8 lg:p-12 text-center flex flex-col items-center justify-center flex-1 min-w-[300px]">
        <Users size={48} className="text-accent mb-2" />
        <h3 className="text-secondary text-xl mb-2">Active Community</h3>
        <p className="text-secondary text-sm">
          Connect with like-minded developers and build lasting relationships.
        </p>
      </div>
      <div className="bg-primary shadow-lg rounded-3xl p-8 lg:p-12 text-center flex flex-col items-center justify-center flex-1 min-w-[300px]">
        <CircleHelp size={48} className="text-accent mb-2" />
        <h3 className="text-secondary text-xl mb-2">Some other thing</h3>
        <p className="text-secondary text-sm">
          Description about that other thing.
        </p>
      </div>
      <div className="bg-primary shadow-lg rounded-3xl p-8 lg:p-12 text-center flex flex-col items-center justify-center flex-1 min-w-[300px]">
        <BookOpen size={48} className="text-accent mb-2" />
        <h3 className="text-secondary text-xl mb-2">Learning Resources</h3>
        <p className="text-secondary text-sm">
          Access curated learning materials and documentation.
        </p>
      </div>
    </section>
  );
}
