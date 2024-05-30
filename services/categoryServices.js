const { default: http } = require("./httpService");

export const getCategories = async () => {
  return http.get("/category/list").then((res) => res.data);
};

export const addNewCategory = async (data) => {
  return http.post("/admin/category/add", data).then((res) => res.data);
};