import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://localhost:44361";


const axiosInstance = axios.create({
    baseURL: baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default axiosInstance;
