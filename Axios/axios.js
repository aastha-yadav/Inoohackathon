import axios from "axios";

// Create an axios instance
const instance = axios.create({
  // Set your base URL (adjust based on production/development)
  // baseURL: "https://flatematebackend.onrender.com/api/v1",
//   baseURL: "https://api.mycozee.in/api/v1",
  baseURL: "http://localhost:5001/api/v1",
  // baseURL: "https://mycozzeboth.onrender.com/api/v1",
  withCredentials: true,
});
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle any request errors
    return Promise.reject(error);
  }
);

export default instance;
