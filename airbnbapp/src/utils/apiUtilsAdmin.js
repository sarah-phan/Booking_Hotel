import axios from "axios";

export const apiAdmin = axios.create({
    baseURL: "https://airbnb.cybersoft.edu.vn/api/",
})
apiAdmin.interceptors.request.use((config) => {
    config.headers = {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdmNGQ3YzFkMjA5NjAwMWM1ZGY5M2QiLCJlbWFpbCI6InRodXlAZ21haWwuY29tIiwidHlwZSI6IkFETUlOIiwiaWF0IjoxNjQ4MDkxODA2fQ.fpHGwJmvydgMx40f7IcfvKu_4V2qLd2wC_s01DeOE2o",
        tokenByClass: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
    };
    return config
})