import Categories from "./Categories";
import { getCategories } from "@/services/categoryServices";

export default async function RootLayout({ children }) {
  const { data } = await getCategories();
  return (
    <section className="flex flex-col lg:flex-row gap-5">
      <Categories data={data} />
      {children}
    </section>
  );
}
