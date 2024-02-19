const { default: http } = require("./httpService");

export const addToCart = async (productId) => {
  return http.post("/cart/add", { productId }).then((res) => res.data);
};
export const removeFromCart = async (productId) => {
  return http.post("/cart/remove", { productId }).then((res) => res.data);
};
export const deleteFromCart = async (productId) => {
  return http.post("/cart/delete", { productId }).then((res) => res.data);
};
