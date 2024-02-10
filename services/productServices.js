const { default: http } = require("./httpService");

export const getProducts = async (params) => {
  const finalParams = Object.keys(params)?.map((paramKey) => {
    return `${paramKey}=${params[paramKey]}`;
  });
  return http
    .get(`/product/list?${finalParams.join("&")}`)
    .then((res) => res.data);
};
