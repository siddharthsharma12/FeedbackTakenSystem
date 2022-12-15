import axios from "axios";

const API = axios.create({baseURl:"http://localhost:5000"})


export const login = (formData) => API.post("/login" ,formData)