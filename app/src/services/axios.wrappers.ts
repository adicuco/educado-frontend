import axios from "axios";

// axios unathenticated insdtance
export const axios_unauthenticated  = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL
});

// axios authenticated instance
export const axios_authenticated = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers:{ Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjM0ZTdiM2NhMDE2MWFkNGU2YjNiODBkIiwiaWF0IjoxNjY5OTg4MzcwLCJleHAiOjE2NzAwNzQ3NzB9.telcvKRltoHYEfysL6PEdGENR_jwmGKvCMQeYO5Lta4"}` }
});
