import api from './api';

// Upload a new note
export const uploadNote = async (formData) => {
  try {
    // Using FormData to handle file uploads
    const response = await api.post('/notes', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to upload note' };
  }
};

// Get notes by subject ID
export const getNotesBySubject = async (subjectId) => {
  try {
    const response = await api.get(`/notes/subject/${subjectId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to fetch notes' };
  }
};

// Get notes by department ID
export const getNotesByDepartment = async (departmentId) => {
  try {
    const response = await api.get(`/notes/department/${departmentId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to fetch notes' };
  }
};

// Download a note
export const downloadNote = async (noteId) => {
  try {
    const response = await api.get(`/notes/${noteId}/download`, {
      responseType: 'blob',
    });
    
    // Create a URL for the blob file and trigger download
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `note-${noteId}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    
    // Update download count
    await api.put(`/notes/${noteId}/incrementDownload`);
    
    return true;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to download note' };
  }
};

// Rate a note
export const rateNote = async (noteId, rating, comment = '') => {
  try {
    const response = await api.post(`/notes/${noteId}/rate`, {
      rating,
      comment,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to rate note' };
  }
};

// Delete a note
export const deleteNote = async (noteId) => {
  try {
    const response = await api.delete(`/notes/${noteId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to delete note' };
  }
};