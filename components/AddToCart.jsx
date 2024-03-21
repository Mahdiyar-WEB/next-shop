"use client";
import Button from "@/common/Button";
import { useAddToCart } from "@/hooks/useAddToCart";
import {useAuth} from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const AddToCart = ({ productId }) => {
  const { data: information } = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useAddToCart();

  const isInCart =
    information?.data?.user.cart.products.some(
      (product) => product.productId === productId
    ) || false;

  const addToCartHandler = async () => {
    if (isInCart) {
      router.push("/cart");
      return;
    }
    if (!information) {
      toast.error("لطفا ابتدا لاگین کنید");
      router.push("/login");
      return;
    }

    try {
      const { data } = await mutateAsync(productId);
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["get-profile"] }); // this method will call to invalidate our queryClient and update user information
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <Button
      isPending={isPending}
      onClick={() => addToCartHandler()}
      color="primary"
      className="py-2 px-3 text-sm"
    >
      {isInCart ? "ادامه سفارش" : "اضافه کردن به سبد خرید"}
    </Button>
  );
};

export default AddToCart;
