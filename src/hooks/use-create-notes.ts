import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

type CreateNotePayload = {
  title: string;
  description: string;
  subject: string;
  department: string;
  tier: 'free' | 'premium' | 'elite';
  fileUrl: string;
  previewUrl?: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  author: string; // or ObjectId if backend expects it
};


export const useCreateNote = () => {
  return useMutation({
    mutationFn: async (noteData: CreateNotePayload) => {
      const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/notes`, noteData);
      return data;
    },
  });
};