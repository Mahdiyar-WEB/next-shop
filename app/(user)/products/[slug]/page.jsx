import SingleProduct from "@/components/SingleProduct";
import { getProductBySlug, getProducts } from "@/services/productServices";
import React from "react";

export const dynamic = "force-static"; // this value makes this page SSR but if we use force-static it will be render as SSG

export const dynamicParams = false; // to generate only existing products in db

export const generateStaticParams = async () => {
  const { data } = await getProducts({});

  return data?.products.map((product) => ({
    slug: product.slug,
  }));
};

const page = async ({ params: { slug } }) => {
  const { data } = await getProductBySlug(slug);

  return (
    <div className="border border-primary-800 bg-red-300 w-full">
      <SingleProduct {...data.product} />
    </div>
  );
};

export default page;
