/* Axios instance */
import axios from "axios";

export const createApiInstance = (urlApiBase: string) => {
  return axios.create({
    baseURL: urlApiBase,
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
