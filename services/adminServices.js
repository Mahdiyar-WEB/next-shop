const { default: http } = require("./httpService");

export const getAllUsers = async () => {
  return http.get("/admin/user/list").then((res) => res.data);
};
export const getUserByID = async (id) => {
  return http.get(`/admin/user/profile/${id}`).then((res) => res.data);
};
