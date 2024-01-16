const { default: http } = require("./httpService");

export const getOTP = (payload) => {
  return http.post("/user/get-otp", payload).then((res) => res.data);
};
export const checkOTP = (payload) => {
  return http.post("/user/check-otp", payload).then((res) => res.data);
};
export const completeProfile = (payload) => {
  return http.post("/user/complete-profile", payload).then((res) => res.data);
};
export const editProfile = (payload) => {
  return http.patch("/user/update", payload).then((res) => res.data);
};
export const logout = () => {
  return http.post("/user/logout");
};
export const getUserProfile = () => {
  return http.get("/user/profile").then((res) => res.data);
};
