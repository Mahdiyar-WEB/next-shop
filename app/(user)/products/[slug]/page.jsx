import Button from "@/common/Button";
import SingleProduct from "@/components/SingleProduct";
import { getProductBySlug, getProducts } from "@/services/productServices";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import React from "react";

export const dynamic = "force-static"; // this value makes this page SSR but if we use force-static it will be render as SSG

export const dynamicParams = false; // to generate only existing products in db

export const generateStaticParams = async () => {
  const { data } = await getProducts({});

  return data?.products.map((product) => ({
    slug: product.slug,
  }));
};

const ProductSlug = async ({ params: { slug } }) => {
  const { data } = await getProductBySlug(slug);

  return (
    <section className="w-full px-3 py-3 ">
      <Button color="info" className="text-md px-0 py-0 mb-3">
        <Link className="flex items-center px-3 font-semibold" href="/products">
          <MdOutlineKeyboardArrowRight size={22} />
          <span>بازگشت</span>
        </Link>
      </Button>
      <SingleProduct {...data.product} />
    </section>
  );
};

export default ProductSlug;
