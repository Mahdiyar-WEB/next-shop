const { default: http } = require("./httpService");

export const getProducts = async (category) => {
  return http
    .get(`/product/list${category && `?category=${category}`}`)
    .then((res) => res.data);
};

