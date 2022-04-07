import axios from "axios";
import { store } from './../../src'

export const api = axios.create({
    baseURL: "https://airbnb.cybersoft.edu.vn/api/",
})
api.interceptors.request.use((config) => {
    config.headers = {
        tokenByClass: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
        token: store.getState().authReducer.data?.token || localStorage.getItem("access_token") || '',
    };
    return config
})