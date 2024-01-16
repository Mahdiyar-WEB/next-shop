"use client";
import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="mx-8 mt-7 w-full grid place-items-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="rgb(var(--color-primary-900))"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ display: "flex", marginBottom: "28px" }}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
