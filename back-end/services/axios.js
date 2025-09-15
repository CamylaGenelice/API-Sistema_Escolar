import axios from "axios";
import dotenv from "dotenv";

dotenv.config()

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
    
})

export default api