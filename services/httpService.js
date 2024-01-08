const { default: axios } = require("axios");

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

app.interceptors.request.use(
  (res) => res,
  (error) => Promise.reject(error)
);

app.interceptors.response.use(
  (res) => res,
  async (error) => {
    const errorConfig = error.config;
    if (err.response.status === 401 && !errorConfig._retry) {
      errorConfig._retry = true;
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token`,
          { withCredentials: true }
        );
        data && app(errorConfig);
      } catch (error) {
        Promise.reject(error);
      }
    }
    Promise.reject(error);
  }
);
const http = {
  get: app.get,
  post: app.post,
  patch: app.patch,
  put: app.put,
};

export default http;
