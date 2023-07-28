import axios from 'axios'
const client = axios.create({ baseURL: 'http://localhost:4000' })

export const request = ({ ...options }) => {
    client.defaults.headers.common.Authorization = 'bearer token';
    return client(options)
        .then(res => res)
        .catch(err => err);
} 