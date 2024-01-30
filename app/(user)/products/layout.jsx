import http from "@/services/httpService";
import Categories from "./Categories";

export default async function RootLayout({ children }) {
  const { data } = await http.get("/category/list");
  return (
    <section className="flex flex-col lg:flex-row gap-5">
      <Categories response={data} />
      {children}
    </section>
  );
}
