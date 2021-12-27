import axios from "axios"

export const API = axios.create({
    baseURL: "https://newsapi.org/v2/"
})


