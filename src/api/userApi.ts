import axios from "axios";

const axiosClient = axios.create({
    responseType: "json"
});

export const getUser = () => 
    axiosClient.get("https://dummyjson.com/users")
        .then(res => res.data)
        .catch(err => ({message: err.message}));
