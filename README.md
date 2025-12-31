# 🎬 CineMatch - AI Movie Recommendation System

An intelligent movie recommendation application powered by OpenAI's GPT models. Users describe their preferences, and the AI generates personalized movie recommendations with detailed explanations.

![Architecture](https://img.shields.io/badge/Stack-React%20%2B%20Fastify-blueviolet)
![Database](https://img.shields.io/badge/Database-SQLite-blue)
![AI](https://img.shields.io/badge/AI-OpenAI%20GPT--3.5-green)

## 🏗️ Architecture

```
┌────────────────────────┐
│   User (Browser)       │
└───────────┬────────────┘
            │
            ▼
┌────────────────────────┐
│   React Frontend       │
│  - Input Form          │
│  - Results Display     │
│  - API Calls (Axios)   │
└───────────┬────────────┘
            │ HTTP (JSON)
            ▼
┌────────────────────────┐
│ Fastify Backend (Node) │
│------------------------│
│ Controllers / Routes   │
│ - POST /recommendations│
│ - GET /recommendations │
│ - PUT / DELETE         │
│                        │
│ Services               │
│ - OpenAI API Handler   │
│ - Business Logic       │
└───────┬────────┬───────┘
        │        │
        ▼        ▼
┌──────────────┐ ┌────────────────────┐
│ SQLite DB    │ │ OpenAI API (LLM)    │
│--------------│ │--------------------│
│ user_input   │ │ Prompt Processing  │
│ movies JSON  │ │ AI Movie Generation│
│ timestamp    │ └────────────────────┘
└──────────────┘
```

## 🚀 Features

- ✨ **AI-Powered Recommendations**: Uses OpenAI GPT-3.5 to generate personalized movie suggestions
- 🎨 **Beautiful UI**: Modern, dark-themed interface with glassmorphism effects and smooth animations
- 📊 **Full CRUD Operations**: Create, read, update, and delete recommendation histories
- 💾 **Persistent Storage**: SQLite database stores all recommendations
- ⚡ **RESTful API**: Clean Fastify backend with proper error handling
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎯 **Smart Suggestions**: Pre-built suggestion chips for quick searches
- 🔄 **Real-time Updates**: Instant feedback with loading states and animations

## 📁 Project Structure

```
Movie Recommendation/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js          # SQLite database configuration
│   │   ├── controllers/
│   │   │   └── recommendationController.js  # CRUD operations
│   │   ├── routes/
│   │   │   └── recommendationRoutes.js      # API routes
│   │   ├── services/
│   │   │   └── openaiService.js     # OpenAI integration
│   │   └── server.js                # Fastify server entry point
│   ├── data/
│   │   └── recommendations.db       # SQLite database (auto-generated)
│   ├── package.json
│   ├── .env.example                 # Environment template
│   └── .env                         # Your configuration (create this!)
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── InputForm.jsx        # User input component
    │   │   ├── InputForm.css
    │   │   ├── MovieCard.jsx        # Movie recommendation card
    │   │   ├── MovieCard.css
    │   │   ├── ResultsDisplay.jsx   # Results grid
    │   │   └── ResultsDisplay.css
    │   ├── services/
    │   │   └── api.js               # Axios API client
    │   ├── styles/
    │   │   └── index.css            # Global styles & design system
    │   ├── App.jsx                  # Main application
    │   ├── App.css
    │   └── main.jsx                 # React entry point
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## 🛠️ Quick Start

### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **OpenAI API key** - [Get one here](https://platform.openai.com/api-keys)

### Installation & Setup

#### Option 1: Quick Start (Windows)

1. **Get your OpenAI API Key**
   - Visit https://platform.openai.com/api-keys
   - Create a new API key
   - Copy it for the next step

2. **Configure the Backend**
   ```bash
   # Navigate to backend folder
   cd backend
   
   # Create .env file (copy from .env.example)
   copy .env.example .env
   
   # Edit .env and add your OpenAI API key
   notepad .env
   ```
   
   In the `.env` file, replace `your_openai_api_key_here` with your actual API key:
   ```
   OPENAI_API_KEY=sk-your-actual-key-here
   PORT=3001
   NODE_ENV=development
   ```

3. **Run the Application**
   ```bash
   # Go back to root directory
   cd ..
   
   # Run the start script
   start.bat
   ```

   This will open two terminal windows:
   - Backend server on `http://localhost:3001`
   - Frontend server on `http://localhost:3000`

4. **Open your browser** and navigate to `http://localhost:3000`

#### Option 2: Manual Start

**Backend Setup:**
```bash
cd backend
npm install
# Create and configure .env file with your OpenAI API key
npm run dev
```

**Frontend Setup** (in a new terminal):
```bash
cd frontend
npm install
npm run dev
```

## 🎯 Usage

1. **Open the app** at `http://localhost:3000`
2. **Enter your preferences** in the text area, for example:
   - "I want action movies with strong female leads"
   - "Sci-fi films about time travel with mind-bending plots"
   - "Heartwarming family dramas that will make me cry"
3. **Click "Get Recommendations"** or use one of the suggestion chips
4. **View your personalized recommendations** with detailed explanations
5. **Click "New Search"** to start over with different preferences

## 🔌 API Endpoints

### POST `/recommendations`
Create new movie recommendations
```json
Request:  { "userInput": "your preferences" }
Response: {
  "id": 1,
  "userInput": "...",
  "movies": [...],
  "timestamp": "2025-12-31T14:00:00.000Z"
}
```

### GET `/recommendations`
Get all recommendation histories
```json
Response: [
  {
    "id": 1,
    "userInput": "...",
    "movies": [...],
    "timestamp": "..."
  }
]
```

### GET `/recommendations/:id`
Get a specific recommendation by ID

### PUT `/recommendations/:id`
Update a recommendation
```json
Request: { "userInput": "updated preferences" }
```

### DELETE `/recommendations/:id`
Delete a recommendation (returns 204 No Content)

### GET `/health`
Health check endpoint
```json
Response: { "status": "ok", "timestamp": "..." }
```

## 🎨 Design Features

- **🌙 Dark Theme**: Modern dark color scheme with vibrant purple and blue accents
- **💎 Glassmorphism**: Frosted glass effect on cards and containers
- **✨ Smooth Animations**: Fade-in, slide-in, and hover effects throughout
- **📐 Responsive Grid**: Adaptive layout for different screen sizes
- **🎭 Custom Scrollbar**: Themed scrollbar matching the design
- **🌈 Gradient Accents**: Eye-catching gradients for CTAs and headings
- **🎪 Micro-interactions**: Hover states and button animations for better UX
- **🎯 Floating Logo**: Animated logo with subtle floating effect

## 🔧 Technologies Used

### Backend
- **Fastify** - Fast and low overhead web framework
- **sql.js** - SQLite compiled to JavaScript (no native dependencies!)
- **OpenAI** - Official OpenAI API client for GPT-3.5
- **dotenv** - Environment variable management
- **@fastify/cors** - CORS support for cross-origin requests

### Frontend
- **React 18** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool and dev server
- **Axios** - Promise-based HTTP client
- **CSS3** - Modern styling with custom properties and animations
- **Google Fonts** - Inter & Outfit font families

## 🐛 Troubleshooting

### Backend won't start
- Make sure you've created the `.env` file in the `backend` folder
- Verify your OpenAI API key is correct
- Check that port 3001 is not already in use

### Frontend can't connect to backend
- Ensure the backend is running on port 3001
- Check the browser console for CORS errors
- Verify the API URL in `frontend/src/services/api.js`

### OpenAI API errors
- Verify your API key is valid and has credits
- Check your OpenAI account status at https://platform.openai.com/
- Review rate limits if you're making many requests

## 📝 Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Required: Your OpenAI API key
OPENAI_API_KEY=sk-your-actual-key-here

# Optional: Server port (default: 3001)
PORT=3001

# Optional: Environment (development/production)
NODE_ENV=development
```

## 🚀 Production Deployment

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm run preview
```

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💡 Future Enhancements

- [ ] User authentication and personalized history
- [ ] Movie poster images from TMDB API
- [ ] Watchlist functionality
- [ ] Export recommendations as PDF
- [ ] Social sharing features
- [ ] Advanced filtering options
- [ ] Movie ratings integration

---

**Built with ❤️ using React, Fastify, and OpenAI**
