import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import recommendationRoutes from './routes/recommendationRoutes.js';
import { initDatabase } from './config/database.js';

dotenv.config();

const fastify = Fastify({
    logger: true
});

await fastify.register(cors, {
    origin: true // Allow all origins in development
});

await fastify.register(recommendationRoutes);

fastify.get('/health', async (request, reply) => {
    return { status: 'ok', timestamp: new Date().toISOString() };
});

const start = async () => {
    try {
        console.log('Initializing database...');
        await initDatabase();
        console.log('✅ Database initialized');

        const port = process.env.PORT || 3001;
        await fastify.listen({ port, host: '0.0.0.0' });
        console.log(`🚀 Server running on http://localhost:${port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
