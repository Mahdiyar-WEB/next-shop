"use client";
import EditCategoryDetails from "@/components/EditCategoryDetails";
import EditProductDetails from "@/components/EditProductDetails";
import { useGetCategoryById } from "@/hooks/useGetCategories";
import { getCategoryById } from "@/services/categoryServices";
import { getProductByID } from "@/services/productServices";
import React from "react";

export const dynamic = "force-dynamic";

const EditCategory = ({ params: { id } }) => {
  const { data: response, isPending } = useGetCategoryById(id);
  // delete data.category.icon;
  return (
    <main className="mt-7 w-full mx-auto max-w-2xl border h-fit pb-5 pt-3 px-3 shadow-md rounded-md">
      {response?.data?.category && (
        <EditCategoryDetails categoryDetails={response?.data.category} />
      )}
    </main>
  );
};

export default EditCategory;
