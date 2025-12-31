import {
    createRecommendation,
    getAllRecommendations,
    getRecommendationById,
    updateRecommendation,
    deleteRecommendation
} from '../controllers/recommendationController.js';

export default async function recommendationRoutes(fastify, options) {
    // Create new recommendation
    fastify.post('/recommendations', createRecommendation);

    // Get all recommendations
    fastify.get('/recommendations', getAllRecommendations);

    // Get single recommendation by ID
    fastify.get('/recommendations/:id', getRecommendationById);

    // Update recommendation
    fastify.put('/recommendations/:id', updateRecommendation);

    // Delete recommendation
    fastify.delete('/recommendations/:id', deleteRecommendation);
}
