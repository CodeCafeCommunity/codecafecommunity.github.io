import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface JsonData {
  pageName: string;
  entries: Entry[];
}

interface Entry {
  title: string;
  url: string;
  tags: string[];
}

const ResourcePage = () => {
  const { category } = useParams();
  const [data, setData] = useState<JsonData | null>(null);

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

    fetchData().then(
      (json) => {
        setData(json);
      },
      () => {
        setData({ pageName: "", entries: [] });
      },
    );
  }, [category]);

  if (data) {
    return (
      <>
        <section className="h-2/3 bg-background">
          <h3 className="text-xl text-accent">{data.pageName}</h3>
          {data.entries.map((e) => e.title)}
        </section>
      </>
    );
  }
};
export default ResourcePage;
