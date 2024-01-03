import axios from "axios";

export const httpRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
