import ProductsTable from "@/components/ProductsTable";
import React from "react";

const Products = () => {
  return (
    <main className="mt-7 w-full mx-8">
      <ProductsTable title="لیست محصولات" rowsPerPage={5} />
    </main>
  );
};

export default Products;
