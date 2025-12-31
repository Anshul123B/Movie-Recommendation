import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const recommendationAPI = {
    // Create new recommendation
    create: async (userInput) => {
        const response = await api.post('/recommendations', { userInput });
        return response.data;
    },

    // Get all recommendations
    getAll: async () => {
        const response = await api.get('/recommendations');
        return response.data;
    },

    // Get single recommendation by ID
    getById: async (id) => {
        const response = await api.get(`/recommendations/${id}`);
        return response.data;
    },

    // Update recommendation
    update: async (id, userInput) => {
        const response = await api.put(`/recommendations/${id}`, { userInput });
        return response.data;
    },

    // Delete recommendation
    delete: async (id) => {
        await api.delete(`/recommendations/${id}`);
    }
};

export default api;
