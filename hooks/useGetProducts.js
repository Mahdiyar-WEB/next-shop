import { addProduct, getProducts } from "@/services/productServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetProducts = (cookies) =>
  useQuery({
    queryKey: ["get-products"],
    queryFn: () => getProducts({}, cookies),
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useAddProduct = () => {
  return useMutation({ mutationFn: addProduct });
};
