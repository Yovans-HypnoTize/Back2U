import axios,{ AxiosError,AxiosResponse,InternalAxiosRequestConfig } from "axios";
import Cookies from 'js-cookie';
import { toast } from "react-toastify";

const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL
})

axiosInstance.interceptors.request.use(
    (config:InternalAxiosRequestConfig) => {
        const accessToken = Cookies.get("accessToken");
        if(accessToken){
            config.headers.Authorization = accessToken;
        }
        if(config.data instanceof FormData){
            delete config.headers["Content-Type"];
        } else {
            config.headers["Content-Type"] = "application/json";
        }
        return config;
        },
    (error:AxiosError)=>Promise.reject(error));

axiosInstance.interceptors.response.use(
    (response:AxiosResponse) => response,
    (error:AxiosError) => {
        if(error.response){
            const errorData = error.response.data as {message ?:string};
            switch(error.response.status){
                case 400:
                    console.log("error", error?.response.status);
                    handleBadRequest(errorData);
                    break;
                    case 401:
                        // handleClearCookies().then(() => {
                        handleBadRequest(errorData);
                        // });
                        break;
                    case 404:
                        handleNotFound(errorData);
                        break;
                    case 500:
                        handleServerError(errorData);
                        break;
                    default:
                        break;
                }
            } else {
                toast.error("An unexpected error occurred.");
        }
        return Promise.reject(error);
    }
);

// const handleClearCookies = async (): Promise<string> => {
//     return new Promise((resolve, reject) => {
//       try {
//             const allCookies = Cookies.get();
//             for (const cookieName in allCookies) {
//             Cookies.remove(cookieName);
//             }
//             resolve("Cookies cleared");
//         } catch (error) {
//             reject(error);
//         }
//     });
// };
      
function handleBadRequest(error: { message?: string }) {
    toast.error(error.message || "Bad Request.");
}
      
function handleNotFound(error: { message?: string }) {
    toast.error(error.message || "Not Found.");
}
      
function handleServerError(error: { message?: string }) {
    toast.error(error.message || "Internal Server Error.");
}


export default axiosInstance;


