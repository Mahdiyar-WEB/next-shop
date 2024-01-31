const { default: http } = require("./httpService");

export const getCategories = async () => {
  return http.get("/category/list").then((res) => res.data);
};
