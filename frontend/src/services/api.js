import axios from 'axios';

const API_BASE_URL = `https://movie-recommendation-3kwi.onrender.com/`;

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const recommendationAPI = {
    create: async (userInput) => {
        const response = await api.post('/recommendations', { userInput });
        return response.data;
    },
    getAll: async () => {
        const response = await api.get('/recommendations');
        return response.data;
    },
    getById: async (id) => {
        const response = await api.get(`/recommendations/${id}`);
        return response.data;
    },
    update: async (id, userInput) => {
        const response = await api.put(`/recommendations/${id}`, { userInput });
        return response.data;
    },
    delete: async (id) => {
        await api.delete(`/recommendations/${id}`);
    }
};

export default api;
