import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { JsonData, Entry } from "./types";
import ResourceCard from "./ResourceCard";
import { sortEntries } from "./utils";

const ResourcePage = () => {
  const { category } = useParams();
  const [data, setData] = useState<JsonData | null>(null);
  const [entries, setEntries] = useState<Entry[]>([]);

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
        }
      })
      .catch(console.error);
  }, [category]);

  if (data) {
    return (
      <>
        <section className="h-2/3 w-full bg-background">
          <h3 className="my-12 text-center text-4xl text-primary">
            {data.pageName}
          </h3>
          <div className="flex w-full justify-center">
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
