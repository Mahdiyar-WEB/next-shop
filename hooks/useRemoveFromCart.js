import { removeFromCart } from "@/services/cartServices";
import { useMutation } from "@tanstack/react-query";

export const useRemoveFromCart = () => useMutation({ mutationFn: removeFromCart });