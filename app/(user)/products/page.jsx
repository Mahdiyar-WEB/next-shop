import Product from "@/components/Product";
import { getProducts } from "@/services/productServices";
export const dynamic = "force-dynamic" // this value makes this page SSR but if we use force-static it will be render as SSG

//** Parallel and sequential rendering in next course season 16 (217) */

const Products = async ({ searchParams }) => {
  const { data } = await getProducts(searchParams?.category || "");

  return (
    <div className="border border-primary-800 grid-cols-12 w-full">
      {data.products.map((product) => {
        return <Product key={product._id} {...product} />;
      })}
    </div>
  );
};

export default Products;
