import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://pawmart-store-server.vercel.app'
})
const useAxios = () => {
    return axiosInstance;
}

export default useAxios;