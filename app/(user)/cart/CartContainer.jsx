import CartItem from "@/components/CartItem";
import React from "react";

const CartContainer = ({ cartInformation }) => {
  return (
    <div className="col-span-9 grid gap-2">
      {cartInformation.productDetail.map((product) => {
        return <CartItem key={product._id} {...product} />;
      })}
    </div>
  );
};

export default CartContainer;
