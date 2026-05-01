import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginUser = (data) => api.post("/auth/login", data, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
});
export const getTransactions = () => api.get("/transactions/");
export const createTransaction = (data) => api.post("/transactions/", data);
export const getGraphData = (accountId) => api.get(`/graph/${accountId}`);
export const detectFraud = (data) => api.post("/fraud/detect", data);

export default api;
