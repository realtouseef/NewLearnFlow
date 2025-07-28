import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface LoginPayload {
  email: string;
  password: string;
}

interface SignupPayload {
  name: string;
  email: string;
  password: string;
}

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: LoginPayload) => {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, data);
      return response.data;
    },
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: async (data: SignupPayload) => {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/register`, data);
      return response.data;
    },
  });
};