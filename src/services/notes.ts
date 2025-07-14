import { Note } from "@/types";
import axios from "axios";

export const fetchAllNotes = async (): Promise<Note[]> => {
  const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/notes`);
  return res.data.data;
};