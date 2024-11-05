/* Axios instance */
import axios from "axios";

export const createApiInstance = (urlApiBase: string) => {
  return axios.create({
    baseURL: urlApiBase,
    timeout: 8000,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
