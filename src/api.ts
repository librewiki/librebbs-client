import axios from "axios";
import type {
  LockManager,
} from "navigator.locks";
import { refreshToken } from "@/auth";

declare global {
  interface Navigator {
    locks: LockManager;
  }
}

const client = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_HOST,
  withCredentials: true
});


client.interceptors.response.use(
  async response => response,
  async error => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401 && error.response.data === "TokenExpired") {
      const originalRequest = config;
      await refreshToken();
      return client(originalRequest);
    }
    return Promise.reject(error);
  }
);

async function getUserInfo() {
  const { data: { data: { attributes } } } = await client.get("/me");
  return attributes;
}

export { getUserInfo };
