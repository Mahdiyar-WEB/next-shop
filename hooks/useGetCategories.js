"use client";
import {
  addNewCategory,
  editCategory,
  getCategories,
  getCategoryById,
  removeCategory,
} from "@/services/categoryServices";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetCategories = () =>
  useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
    retry: false,
    refetchOnWindowFocus: true,
  });
export const useGetCategoryById = (id) =>
  useQuery({
    queryKey: ["get-category", id],
    queryFn: () => getCategoryById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useEditCategory = () => {
  return useMutation({ mutationFn: editCategory });
};

export const useAddCategory = () =>
  useMutation({
    mutationFn: addNewCategory,
  });

export const useRemoveCategory = () =>
  useMutation({
    mutationFn: removeCategory,
  });
