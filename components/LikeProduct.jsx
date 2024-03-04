"use client";

import { likeProduct } from "@/services/productServices";
import toPersianDigits from "@/utils/toPersianDigits";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

const LikeProduct = ({ productId, isLiked, likesCount = 0 }) => {
  const [like, setLike] = useState({ isLiked, likesCount });

  const onClickHandler = async () => {
    try {
      const { data } = await likeProduct(productId);
      toast.success(data.message);
      setLike({
        isLiked: !like.isLiked,
        likesCount: like.isLiked ? like.likesCount - 1 : like.likesCount + 1,
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <button
      onClick={() => onClickHandler()}
      className="flex cursor-pointer items-center gap-1 border hover:bg-red-600 hover:text-white duration-200 text-red-600 w-fit px-3 py-1 rounded-lg"
    >
      <span>
        {like.isLiked ? <IoHeartSharp size={20} /> : <IoHeartOutline />}
      </span>
      <span className="">{toPersianDigits(like.likesCount)}</span>
    </button>
  );
};

export default LikeProduct;
