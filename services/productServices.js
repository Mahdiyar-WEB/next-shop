const { default: http } = require("./httpService");

export const getProducts = async (params, cookies) => {
  const finalParams = Object.keys(params)?.map((paramKey) => {
    return `${paramKey}=${
      params[paramKey].startsWith(",")
        ? params[paramKey].substring(1)
        : params[paramKey]
    }`;
  });
  return http
    .get(`/product/list?${finalParams.join("&")}`, {
      headers: { Cookie: cookies },
    })
    .then((res) => res.data);
};
export const getProductBySlug = async (slug) => {
  return http.get(`/product/slug/${slug}`).then((res) => res.data);
};
export const getProductByID = async (id) => {
  return http.get(`/product/${id}`).then((res) => res.data);
};
export const likeProduct = async (productId) => {
  return http.post(`/product/like/${productId}`).then((res) => res.data);
};

//admin
export const addProduct = async (data) => {
  return http.post("/admin/product/add", data).then((res) => res.data);
};
export const removeProduct = async (id) => {
  return http.delete(`/admin/product/remove/${id}`).then((res) => res.data);
};
export const editProduct = async (data) => {
  return http
    .patch(`/admin/product/update/${data._id}`, data)
    .then((res) => res.data);
};
