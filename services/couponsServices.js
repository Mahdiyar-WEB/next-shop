const { default: http } = require("./httpService");

export const getCoupons = async () => {
  return http.get("/coupon/list").then((res) => res.data);
};
export const getCouponById = async (id) => {
  return http.get(`/coupon/${id}`).then((res) => res.data);
};
export const editCoupon = async (data) => {
  const categoryId = data._id;
  delete data._id;
  return http
    .patch(`/admin/coupon/update/${categoryId}`, data)
    .then((res) => res.data);
};
export const addNewCoupon = async (data) => {
  return http.post("/admin/coupon/add", data).then((res) => res.data);
};
export const removeCoupon = async (id) => {
  return http.delete(`/admin/coupon/remove/${id}`).then((res) => res.data);
};
