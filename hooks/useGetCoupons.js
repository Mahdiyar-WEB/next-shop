"use client";
import {
  addNewCoupon,
  editCoupons,
  getCoupons,
  getCouponsById,
  removeCoupon,
} from "@/services/couponsServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetCoupons = () =>
  useQuery({
    queryKey: ["get-coupons"],
    queryFn: getCoupons,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetCouponById = (id) =>
  useQuery({
    queryKey: ["get-coupons", id],
    queryFn: () => getCouponsById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useEditCoupon = () => {
  return useMutation({ mutationFn: editCoupons });
};

export const useAddCoupon = () =>
  useMutation({
    mutationFn: addNewCoupon,
  });

export const useRemoveCoupon = () =>
  useMutation({
    mutationFn: removeCoupon,
  });
