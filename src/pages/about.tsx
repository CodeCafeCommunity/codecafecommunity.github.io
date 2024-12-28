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
    </>
  );
}
