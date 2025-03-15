import axios from "axios";
const api = axios.create();

api.interceptors.request.use(
  function (config) {
    console.log("before req interceptors");

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    console.log("before res interceptors");

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
