import Product from "@/components/Product";
import { getProducts } from "@/services/productServices";
export const dynamic = "force-dynamic"

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
