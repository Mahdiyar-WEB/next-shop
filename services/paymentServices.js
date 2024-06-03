const { default: http } = require("./httpService");

export const createPayment = async () => {
  return http.post("/payment/create").then((res) => res.data);
};
export const getPayments = async () => {
  return http.get("/admin/payment/list").then((res) => res.data);
};
