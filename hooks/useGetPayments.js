import { getPayments } from "@/services/paymentServices";
import { useQuery } from "@tanstack/react-query";

export const useGetPayments = () =>
  useQuery({
    queryKey: ["get-payments"],
    queryFn: getPayments,
    retry: false,
    refetchOnWindowFocus: true,
  });

