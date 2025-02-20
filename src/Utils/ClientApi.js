import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const getToken = () => localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

//User API calls
export const registerUser = async (userData) => {
    return axiosInstance.post(`${API_URL}/users/register`, userData);
};

export const loginUser = async (userData) => {
    return axiosInstance.post(`${API_URL}/users/login`, userData);
};

//Event API calls
export const getEvents = async () => {
    return axiosInstance.get(`${API_URL}/events`);
};

export const getEventById = async (eventId) => {
    return axiosInstance.get(`${API_URL}/events/${eventId}`);
};

export const createEvent = async (eventData) => {
    return axiosInstance.post(`${API_URL}/events`, eventData);
};

export const updateEvent = async (eventId, eventData) => {
    return axiosInstance.put(`${API_URL}/events/${eventId}`, eventData);
};

export const deleteEvent = async (eventId) => {
    return axiosInstance.delete(`${API_URL}/events/${eventId}`);
};

// Admin API calls
export const getAllUsers = async () => {
    return axiosInstance.get(`${API_URL}/admin/users`);
};

export const deleteUser = async (userId) => {
    return axiosInstance.delete(`${API_URL}/admin/users/${userId}`);
};

// Utility API calls
export const getRecommendations = async () => {
    return axiosInstance.get(`${API_URL}/utilities/recommendations`);
};

export const sendReminder = async (reminderData) => {
    return axiosInstance.post(`${API_URL}/utilities/reminders`, reminderData);
};




  