import { getAllUsers } from "@/services/adminServices";
import { getUserProfile } from "@/services/authServices";
import { useQuery } from "@tanstack/react-query";

export const useAuth = () =>
  useQuery({
    queryKey: ["get-profile"],
    queryFn: getUserProfile,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetUsers = () =>
  useQuery({
    queryKey: ["get-users"],
    queryFn: getAllUsers,
    retry: false,
    refetchOnWindowFocus: true,
  });
