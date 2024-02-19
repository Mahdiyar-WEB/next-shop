const { default: http } = require("./httpService");

export const createPayment = async () => {
  return http.post("/payment/create").then((res) => res.data);
};
