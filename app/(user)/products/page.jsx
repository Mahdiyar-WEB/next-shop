import Product from "@/components/Product";
import { getProducts } from "@/services/productServices";
import Sort from "./Sort";
import Categories from "./Categories";
import { getCategories } from "@/services/categoryServices";

export const dynamic = "force-dynamic"; // this value makes this page SSR but if we use force-static it will be render as SSG

const Products = async ({ searchParams }) => {
  const getProductsPromise = getProducts(searchParams);
  const getCategoriesPromise = getCategories();

  //** Parallel and sequential rendering in next course season 16 (217) */
  const [{ data }, { data: categories }] = await Promise.all([
    getProductsPromise,
    getCategoriesPromise,
  ]);

  return (
    <section className="flex flex-col lg:flex-row gap-5">
      <aside className="flex lg:flex-col gap-2">
        <Sort />
        <Categories data={categories} />
      </aside>
      <div className="gap-6 grid grid-cols-12 w-full">
        {data.products.map((product) => {
          return <Product key={product._id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default Products;
