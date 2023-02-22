import axios from "axios";

/**
 * Whenever we have to call any api we have to use ApiService So that we can maintain header, baseurl and token.
 * @property {string} baseURL - base url of the backend api
 * @property {object} headers - header of the api request
 */
export const apiService = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });