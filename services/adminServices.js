const { default: http } = require("./httpService");

export const getAllUsers = async () => {
  return http.get("/admin/user/list").then((res) => res.data);
};
