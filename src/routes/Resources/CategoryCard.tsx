import { Link } from "react-router";

interface Props {
  name: string;
  slug: string;
}

const CategoryCard = ({ name, slug }: Props) => {
  return (
    <>
      <Link
        to={slug}
        className="my-4 min-w-[50%] rounded-lg border-2 border-primary px-6 py-12 text-center text-2xl shadow-lg shadow-primary hover:bg-primary hover:text-accent hover:shadow-2xl hover:shadow-primary"
      >
        {name}
      </Link>
    </>
  );
};

export default CategoryCard;
