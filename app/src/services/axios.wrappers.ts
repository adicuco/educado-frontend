import axios, { AxiosInstance } from "axios";

export let axios_unauthenticated: AxiosInstance | undefined;
export let axios_authenticated: AxiosInstance | undefined;

export const make_authenticated_axios = () => {
  if (axios_authenticated) return axios_authenticated;
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: { Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjM0ZTdiM2NhMDE2MWFkNGU2YjNiODBkIiwiaWF0IjoxNjcwMjUyMzM0LCJleHAiOjE2NzAzMzg3MzR9.NyOvvn_EoFC7hE5uDwkeCmBKa4ykeGPbKQVuF3TOFHU"}` }
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

