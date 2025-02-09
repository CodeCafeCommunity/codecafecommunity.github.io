import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { JsonData, Entry } from "./types";
import ResourceCard from "./ResourceCard";
import { extractTags, sortEntries } from "./utils";

const ResourcePage = () => {
  const { category } = useParams();
  const [data, setData] = useState<JsonData | null>(null);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (category) {
        const dataObject = (await import(
          `../../data/resources/${category}.json`
        )) as { default: JsonData };
        return dataObject.default;
      } else {
        return { pageName: "", entries: [] };
      }
    };

    fetchData()
      .then((json) => {
        if (json.entries.length > 0) {
          setData(json);
          setEntries(sortEntries(json.entries));
          setTags(extractTags(json.entries));
        }
      })
      .catch(console.error);
  }, [category]);

  const filterColor = (tag: string) =>
    filters.includes(tag) ? "bg-slate-400" : "bg-slate-300";

  if (data) {
    return (
      <>
        <section className="w-full bg-background">
          <h3 className="my-12 text-center text-4xl text-primary">
            {data.pageName}
          </h3>
          <div className="mb-6 flex w-full flex-col items-center justify-center text-center">
            <h4 className="text-xl font-bold text-primary">Categories</h4>
            <div className="mt-4 flex w-96 flex-wrap justify-center gap-2 xl:w-[600px]">
              {tags.map((t) => (
                <div
                  key={t}
                  onClick={() => {
                    setFilters([...filters, t]);
                    setEntries(entries.filter((e) => e.tags.includes(t)));
                  }}
                >
                  <button
                    className={`rounded-xl border-transparent bg-slate-300 px-2 pb-1 ${filterColor(t)}`}
                  >
                    {t}
                  </button>
                </div>
              ))}
              {filters.length > 0 && (
                <button
                  className="rounded-xl bg-accent px-2 pb-1 text-primary"
                  onClick={() => {
                    setFilters([]);
                    setEntries(sortEntries(data.entries));
                  }}
                >
                  Clear filters &times;
                </button>
              )}
            </div>
          </div>
          <div className="flex w-full justify-center pb-12">
            <div className="mx-4 flex flex-wrap justify-center gap-6 sm:w-5/6 xl:w-3/4">
              {entries.map((e) => (
                <ResourceCard entry={e} key={e.title} />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  return <></>;
};
export default ResourcePage;
