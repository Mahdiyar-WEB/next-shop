import React from "react";

const SingleProduct = ({
  _id,
  title,
  description,
  slug,
  category,
  imageLink,
  price,
  discount,
  offPrice,
  brand,
  tags,
  likesCount,
  isLiked,
  countInStock,
  rating,
  numReviews,
  createdAt,
  updatedAt,
}) => {
  return <div>{title}</div>;
};

export default SingleProduct;
