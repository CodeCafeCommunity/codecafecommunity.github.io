import { Entry } from "./types";

const ResourceCard = ({ entry }: { entry: Entry }) => {
  return (
    <div className="min-h-24 min-w-56 rounded-md bg-slate-400 text-center shadow-lg shadow-gray-600 hover:shadow-2xl hover:shadow-gray-600">
      <a
        href={entry.url}
        target="_blank"
        rel="noreferrer"
        className="flex h-full w-full flex-col justify-around px-6 py-4"
      >
        <p className="pb-4 text-xl text-primary">{entry.title}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {entry.tags.map((t) => (
            <div
              key={t}
              className="rounded-xl border-transparent bg-slate-300 px-2 pb-1"
            >
              {t}
            </div>
          ))}
        </div>
      </a>
    </div>
  );
};
export default ResourceCard;
