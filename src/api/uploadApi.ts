import axios from "axios";

const uploadApi = axios.create({
  baseURL: "https://node-rest-api-mysql-production-94c9.up.railway.app/api",
});

export default uploadApi;
