import Categories from "./Categories";
import { getCategories } from "@/services/categoryServices";
import Sort from "./Sort";

export default async function RootLayout({ children }) {
  const { data } = await getCategories();
  return (
    <section className="flex flex-col lg:flex-row gap-5">
      <aside >
        <Categories data={data} />
        <Sort />
      </aside>
      {children}
    </section>
  );
}
