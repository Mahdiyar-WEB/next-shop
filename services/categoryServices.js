const { default: http } = require("./httpService");

export const getCategories = async () => {
  return http.get("/category/list").then((res) => res.data);
};
export const getCategoryById = async (id) => {
  return http.get(`/category/${id}`).then((res) => res.data);
};
export const editCategory = async (data) => {
  const categoryId = data._id;
  delete data._id;
  return http
    .patch(`/admin/category/update/${categoryId}`, data)
    .then((res) => res.data);
};
export const addNewCategory = async (data) => {
  return http.post("/admin/category/add", data).then((res) => res.data);
};
export const removeCategory = async (id) => {
  return http.delete(`/admin/category/remove/${id}`).then((res) => res.data);
};
