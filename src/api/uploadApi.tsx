import axios from 'axios';

const uploadAPI = axios.create({
    baseURL: 'https://rest-api-gipe.onrender.com/api/',
})


export default uploadAPI;