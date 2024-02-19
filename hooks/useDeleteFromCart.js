import { deleteFromCart } from "@/services/cartServices";
import { useMutation } from "@tanstack/react-query";

export const useDeleteFromCart = () =>
  useMutation({ mutationFn: deleteFromCart });
