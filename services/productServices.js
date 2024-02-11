const { default: http } = require("./httpService");

export const getProducts = async (params) => {
  const finalParams = Object.keys(params)?.map((paramKey) => {
    return `${paramKey}=${
      params[paramKey].startsWith(",")
        ? params[paramKey].substring(1)
        : params[paramKey]
    }`;
  });
  return http
    .get(`/product/list?${finalParams.join("&")}`)
    .then((res) => res.data);
};
export const getProductBySlug = async (slug) => {
  return http.get(`/product/slug/${slug}`).then((res) => res.data);
};
