import CategoryCard from "./CategoryCard";

const Resources = () => (
  <main className="flex h-full w-full flex-col">
    <section className="flex h-full flex-col justify-center">
      <h3 className="my-12 text-center text-3xl text-secondary">Resources</h3>
      <div className="flex w-full justify-center bg-background">
        <div className="grid grid-cols-3 place-items-center gap-y-6 sm:w-5/6 xl:w-3/4">
          <CategoryCard name="HTML" slug="html" />
          <CategoryCard name="CSS" slug="css" />
          <CategoryCard name="JavaScript" slug="javascript" />
          <CategoryCard name="Python" slug="python" />
          <CategoryCard name="Java" slug="java" />
          <CategoryCard name="C++" slug="c-plus-plus" />
        </div>
      </div>
    </section>
  </main>
);

export default Resources;
