import {
    createRecommendation,
    getAllRecommendations,
    getRecommendationById,
    updateRecommendation,
    deleteRecommendation
} from '../controllers/recommendationController.js';

export default async function recommendationRoutes(fastify, options) {
    fastify.post('/recommendations', createRecommendation);
    fastify.get('/recommendations', getAllRecommendations);
    fastify.get('/recommendations/:id', getRecommendationById);
    fastify.put('/recommendations/:id', updateRecommendation);
    fastify.delete('/recommendations/:id', deleteRecommendation);
}
