import { Link } from "react-router";

export async function clientLoader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = (await response.json()) as {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  console.log(data);

  return {
    title: "About page",
    data
  };
}

interface LoaderData {
  title: string;
}

export default function Component({ loaderData }: { loaderData: LoaderData }) {
  return (
    <>
      <h1 className="mb-6">{loaderData.title}</h1>
      <Link to="/">Home</Link>
      <p className="mt-6">Loaded data:</p>
      <pre className="bg-[black] rounded-xl border border-secondary p-6 mt-3">{JSON.stringify(loaderData, null, 2)}</pre>
    </>
  );
}
