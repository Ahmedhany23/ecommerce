import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:1337/api/",
    headers: {
        "Content-Type": "Media",
    },
    params: {
        "api_key": process.env.strapi_api_token,
    },
});

export default api;