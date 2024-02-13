const { default: http } = require("./httpService");

export const addToCart = async (productId) => {
  return http.post("/cart/add", { productId }).then((res) => res.data);
};
