import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/auth',
});

instance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if(token){
        config.headers.Authorizotion = `Baerer ${token}`
    }
    return config;
});

export default instance