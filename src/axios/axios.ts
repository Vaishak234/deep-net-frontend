import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://deep-nest-backend.onrender.com", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
