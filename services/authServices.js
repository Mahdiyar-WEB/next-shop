const { default: http } = require("./httpService");

export const getOTP = (payload) => {
  return http.post("/user/get-otp", payload).then((res) => res.data);
};
export const checkOTP = (payload) => {
  return http.post("/user/check-otp", payload).then((res) => res.data);
};
