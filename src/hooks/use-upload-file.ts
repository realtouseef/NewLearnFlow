import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUploadFile = () => {
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/upload`, formData);
      return data;
    },
  });
};