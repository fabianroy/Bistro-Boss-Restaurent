import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-server-mu.vercel.app'
});

const usePublicAxios = () => {
    return axiosPublic;
};

export default usePublicAxios;