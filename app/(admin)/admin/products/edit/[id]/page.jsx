import EditProductDetails from "@/components/EditProductDetails";
import { getProductByID } from "@/services/productServices";
import React from "react";

const EditProduct = async ({ params: { id } }) => {
  const { data } = await getProductByID(id);
  return (
    <main className="mt-7 w-full mx-auto max-w-2xl border h-fit pb-5 pt-3 px-3 shadow-md rounded-md">
      <EditProductDetails productDetails={data.product} />
    </main>
  );
};

export default EditProduct;
