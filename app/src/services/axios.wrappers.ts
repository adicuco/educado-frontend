import axios, { AxiosInstance } from "axios";

export let axios_unauthenticated: AxiosInstance | undefined;
export let axios_authenticated: AxiosInstance | undefined;

export const make_authenticated_axios = () => {
  if (axios_authenticated) return axios_authenticated;
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: { Authorization: `Bearer ${import.meta.env.VITE_AUTH_KEY}` }
  });

  axios_authenticated = instance;
  return axios_authenticated;
}

// export axios_authenticated;
// // axios unathenticated insdtance
// export const axios_unauthenticated = axios.create({
//   baseURL: import.meta.env.VITE_BACKEND_URL
// });

// // axios authenticated instance
// export const axios_authenticated = axios.create({
//   baseURL: import.meta.env.VITE_BACKEND_URL,
//   headers: { Authorization: `Bearer ${""}` }
// });

