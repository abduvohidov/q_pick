import axios from 'axios';

const authUrl = 'https://fakestoreapi.com';

const auth = {
    login: (params) => {
        return axios.post(`${authUrl}/auth/login`, params)
    }
}

export default auth;