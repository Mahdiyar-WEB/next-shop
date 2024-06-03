"use client";
import { getProductByID } from "@/services/productServices";
import React from "react";

const AdminProduct = ({ params: { productID } }) => {
  const fetchProduct = async () => {
    try {
      const response = await getProductByID(productID);
    } catch (error) {}
  };
  return <div>AdminProduct</div>;
};

export default AdminProduct;
