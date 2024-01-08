import { getUserProfile } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";

const useAuth = () =>
  useQuery({
    queryKey: ["get-profile"],
    queryFn: getUserProfile,
    retry: false,
    refetchOnWindowFocus: true,
  });

export default useAuth;
