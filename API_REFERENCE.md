# 🔌 API Reference - CineMatch

## Base URL
```
http://localhost:3001
```

---

## Endpoints

### 1. Create Recommendation
**POST** `/recommendations`

Generate new movie recommendations based on user input.

**Request Body:**
```json
{
  "userInput": "I want action movies with strong female leads"
}
```

**Response:** `201 Created`
```json
{
  "id": 1,
  "userInput": "I want action movies with strong female leads",
  "movies": [
    {
      "title": "Mad Max: Fury Road",
      "year": 2015,
      "genre": "Action",
      "description": "In a post-apocalyptic wasteland...",
      "matchReason": "Features Furiosa, one of cinema's most iconic..."
    }
    // ... 4 more movies
  ],
  "timestamp": "2025-12-31T14:00:00.000Z"
}
```

**Error Responses:**
- `400 Bad Request` - Missing or empty userInput
- `500 Internal Server Error` - OpenAI API error or server error

---

### 2. Get All Recommendations
**GET** `/recommendations`

Retrieve all recommendation histories (limited to 50 most recent).

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "userInput": "I want action movies with strong female leads",
    "movies": [...],
    "timestamp": "2025-12-31T14:00:00.000Z"
  },
  {
    "id": 2,
    "userInput": "Sci-fi films about time travel",
    "movies": [...],
    "timestamp": "2025-12-31T13:30:00.000Z"
  }
]
```

---

### 3. Get Recommendation by ID
**GET** `/recommendations/:id`

Retrieve a specific recommendation by its ID.

**Parameters:**
- `id` (path) - Recommendation ID

**Response:** `200 OK`
```json
{
  "id": 1,
  "userInput": "I want action movies with strong female leads",
  "movies": [...],
  "timestamp": "2025-12-31T14:00:00.000Z"
}
```

**Error Responses:**
- `404 Not Found` - Recommendation with given ID doesn't exist

---

### 4. Update Recommendation
**PUT** `/recommendations/:id`

Update an existing recommendation with new user input.

**Parameters:**
- `id` (path) - Recommendation ID

**Request Body:**
```json
{
  "userInput": "Updated preferences: romantic comedies from the 90s"
}
```

**Response:** `200 OK`
```json
{
  "id": 1,
  "userInput": "Updated preferences: romantic comedies from the 90s",
  "movies": [...],
  "timestamp": "2025-12-31T14:05:00.000Z"
}
```

**Error Responses:**
- `400 Bad Request` - Missing or empty userInput
- `404 Not Found` - Recommendation with given ID doesn't exist
- `500 Internal Server Error` - OpenAI API error or server error

---

### 5. Delete Recommendation
**DELETE** `/recommendations/:id`

Delete a recommendation by its ID.

**Parameters:**
- `id` (path) - Recommendation ID

**Response:** `204 No Content`

**Error Responses:**
- `404 Not Found` - Recommendation with given ID doesn't exist

---

### 6. Health Check
**GET** `/health`

Check if the server is running.

**Response:** `200 OK`
```json
{
  "status": "ok",
  "timestamp": "2025-12-31T14:00:00.000Z"
}
```

---

## Movie Object Structure

Each movie in the recommendations array has the following structure:

```json
{
  "title": "Movie Title",
  "year": 2023,
  "genre": "Action/Drama/Sci-Fi/etc.",
  "description": "A brief 2-3 sentence description of the movie...",
  "matchReason": "Explanation of why this movie matches the user's preferences..."
}
```

---

## Error Response Format

All error responses follow this format:

```json
{
  "error": "Error message",
  "message": "Detailed error description (optional)"
}
```

---

## Example Usage with cURL

### Create Recommendation
```bash
curl -X POST http://localhost:3001/recommendations \
  -H "Content-Type: application/json" \
  -d '{"userInput": "I want sci-fi movies about AI"}'
```

### Get All Recommendations
```bash
curl http://localhost:3001/recommendations
```

### Get Specific Recommendation
```bash
curl http://localhost:3001/recommendations/1
```

### Update Recommendation
```bash
curl -X PUT http://localhost:3001/recommendations/1 \
  -H "Content-Type: application/json" \
  -d '{"userInput": "Updated: thriller movies with plot twists"}'
```

### Delete Recommendation
```bash
curl -X DELETE http://localhost:3001/recommendations/1
```

### Health Check
```bash
curl http://localhost:3001/health
```

---

## Example Usage with JavaScript (Axios)

```javascript
import axios from 'axios';

const API_URL = 'http://localhost:3001';

// Create recommendation
const createRecommendation = async (userInput) => {
  const response = await axios.post(`${API_URL}/recommendations`, {
    userInput
  });
  return response.data;
};

// Get all recommendations
const getAllRecommendations = async () => {
  const response = await axios.get(`${API_URL}/recommendations`);
  return response.data;
};

// Get specific recommendation
const getRecommendation = async (id) => {
  const response = await axios.get(`${API_URL}/recommendations/${id}`);
  return response.data;
};

// Update recommendation
const updateRecommendation = async (id, userInput) => {
  const response = await axios.put(`${API_URL}/recommendations/${id}`, {
    userInput
  });
  return response.data;
};

// Delete recommendation
const deleteRecommendation = async (id) => {
  await axios.delete(`${API_URL}/recommendations/${id}`);
};

// Health check
const healthCheck = async () => {
  const response = await axios.get(`${API_URL}/health`);
  return response.data;
};
```

---

## Rate Limiting & Costs

### OpenAI API
- Model: GPT-3.5-turbo
- Average tokens per request: ~1000-1500
- Cost: ~$0.0015 per recommendation
- Rate limits: Depends on your OpenAI account tier

### Best Practices
- Cache recommendations when possible
- Implement request throttling on frontend
- Monitor OpenAI usage dashboard
- Set up error handling for rate limit errors

---

## CORS Configuration

The backend is configured to accept requests from any origin in development mode:

```javascript
{
  origin: true  // Allows all origins
}
```

For production, update this to specific domains:

```javascript
{
  origin: ['https://yourdomain.com']
}
```

---

## Database Schema

### recommendations table

| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary key (auto-increment) |
| user_input | TEXT | User's movie preferences |
| movies | TEXT | JSON string of movie array |
| timestamp | DATETIME | Creation/update timestamp |

---

## Testing the API

You can use tools like:
- **Postman** - GUI for API testing
- **Insomnia** - Alternative to Postman
- **cURL** - Command-line tool
- **Browser DevTools** - For GET requests
- **Thunder Client** - VS Code extension

---

**Happy coding!** 🚀
