import { getDb, saveDatabase } from '../config/database.js';
import { generateMovieRecommendations } from '../services/openaiService.js';

export async function createRecommendation(request, reply) {
    console.log('Received request body:', request.body);
    try {
        const { userInput } = request.body;

        if (!userInput || userInput.trim().length === 0) {
            return reply.code(400).send({
                error: 'User input is required'
            });
        }

        const movies = await generateMovieRecommendations(userInput);
        
        getDb().run(
            'INSERT INTO recommendations (user_input, movies) VALUES (?, ?)',
            [userInput, JSON.stringify(movies)]
        );
        
        const result = getDb().exec('SELECT last_insert_rowid() as id');
        const id = result[0].values[0][0];
        saveDatabase();

        return reply.code(201).send({
            id,
            userInput,
            movies,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error creating recommendation:', error);
        return reply.code(500).send({
            error: 'Failed to generate recommendations',
            message: error.message
        });
    }
}

export async function getAllRecommendations(request, reply) {
    try {
        const result = getDb().exec(
            'SELECT id, user_input, movies, timestamp FROM recommendations ORDER BY timestamp DESC LIMIT 50'
        );

        if (!result.length) {
            return reply.send([]);
        }

        const columns = result[0].columns;
        const values = result[0].values;

        const recommendations = values.map(row => {
            const obj = {};
            columns.forEach((col, idx) => {
                obj[col] = row[idx];
            });
            return {
                id: obj.id,
                userInput: obj.user_input,
                movies: JSON.parse(obj.movies),
                timestamp: obj.timestamp
            };
        });

        return reply.send(recommendations);
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        return reply.code(500).send({
            error: 'Failed to fetch recommendations'
        });
    }
}

export async function getRecommendationById(request, reply) {
    try {
        const { id } = request.params;

        const result = getDb().exec(
            'SELECT id, user_input, movies, timestamp FROM recommendations WHERE id = ?',
            [parseInt(id)]
        );

        if (!result.length || !result[0].values.length) {
            return reply.code(404).send({
                error: 'Recommendation not found'
            });
        }

        const columns = result[0].columns;
        const row = result[0].values[0];
        const obj = {};
        columns.forEach((col, idx) => {
            obj[col] = row[idx];
        });

        return reply.send({
            id: obj.id,
            userInput: obj.user_input,
            movies: JSON.parse(obj.movies),
            timestamp: obj.timestamp
        });
    } catch (error) {
        console.error('Error fetching recommendation:', error);
        return reply.code(500).send({
            error: 'Failed to fetch recommendation'
        });
    }
}

export async function updateRecommendation(request, reply) {
    try {
        const { id } = request.params;
        const { userInput } = request.body;

        if (!userInput || userInput.trim().length === 0) {
            return reply.code(400).send({
                error: 'User input is required'
            });
        }

        const movies = await generateMovieRecommendations(userInput);

        getDb().run(
            'UPDATE recommendations SET user_input = ?, movies = ?, timestamp = CURRENT_TIMESTAMP WHERE id = ?',
            [userInput, JSON.stringify(movies), parseInt(id)]
        );
        
        const result = getDb().exec('SELECT changes() as changes');
        const changes = result[0].values[0][0];

        if (changes === 0) {
            return reply.code(404).send({
                error: 'Recommendation not found'
            });
        }

        saveDatabase();

        return reply.send({
            id: parseInt(id),
            userInput,
            movies,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error updating recommendation:', error);
        return reply.code(500).send({
            error: 'Failed to update recommendation'
        });
    }
}

export async function deleteRecommendation(request, reply) {
    try {
        const { id } = request.params;

        getDb().run('DELETE FROM recommendations WHERE id = ?', [parseInt(id)]);

        const result = getDb().exec('SELECT changes() as changes');
        const changes = result[0].values[0][0];
        if (changes === 0) {
            return reply.code(404).send({
                error: 'Recommendation not found'
            });
        }

        saveDatabase();

        return reply.code(204).send();
    } catch (error) {
        console.error('Error deleting recommendation:', error);
        return reply.code(500).send({
            error: 'Failed to delete recommendation'
        });
    }
}
