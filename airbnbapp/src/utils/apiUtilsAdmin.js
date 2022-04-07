import axios from "axios";
import { store } from "../../src";

export const apiAdmin = axios.create({
  baseURL: "https://airbnb.cybersoft.edu.vn/api/",
});
apiAdmin.interceptors.request.use((config) => {
  config.headers = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdmNGQ3YzFkMjA5NjAwMWM1ZGY5M2QiLCJlbWFpbCI6InRodXlAZ21haWwuY29tIiwidHlwZSI6IkFETUlOIiwiaWF0IjoxNjQ5MzA5ODk2fQ.uK644592q3JSodQvLV6ZrYyfCgjOXNSvQXIgTZmPQfc",
    tokenByClass:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyMCIsIkhldEhhblN0cmluZyI6IjE3LzA3LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1ODAxNjAwMDAwMCIsIm5iZiI6MTYyNjcxNDAwMCwiZXhwIjoxNjU4MTYzNjAwfQ.CyAnnc8e2Rp7YmuJCdtEj-Wp7RvlDenB9Dad6NV0R20",
  };
  return config;
});
