# ⚙️ Setup Guide for CineMatch

## Step 1: Get Your OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click "Create new secret key"
4. Give it a name (e.g., "CineMatch App")
5. Copy the key (it starts with `sk-`)
6. **Important**: Save it somewhere safe - you won't be able to see it again!

## Step 2: Configure the Backend

1. Navigate to the `backend` folder
2. You'll see a file called `.env.example`
3. Create a new file called `.env` (without the .example)
4. Copy the contents from `.env.example` to `.env`
5. Replace `your_openai_api_key_here` with your actual API key

Your `.env` file should look like this:

```
OPENAI_API_KEY=sk-proj-abc123xyz...your-actual-key
PORT=3001
NODE_ENV=development
```

## Step 3: Run the Application

### Option A: Use the Quick Start Script (Windows)

Simply double-click `start.bat` in the root folder, or run:
```bash
start.bat
```

### Option B: Manual Start

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## Step 4: Open the App

Open your browser and go to:
```
http://localhost:3000
```

## ✅ Verification

You'll know everything is working when:
- ✅ Backend shows: "Server running on http://localhost:3001"
- ✅ Frontend shows: "Local: http://localhost:3000"
- ✅ The CineMatch interface loads in your browser
- ✅ You can submit a movie preference and get recommendations

## 🆘 Common Issues

### "OpenAI API key is required"
- Make sure you created the `.env` file (not `.env.example`)
- Check that your API key is correct
- Ensure there are no extra spaces around the key

### "Port 3001 is already in use"
- Another application is using that port
- Change the PORT in `.env` to something else (e.g., 3002)
- Or stop the other application using that port

### "Cannot connect to backend"
- Make sure the backend is running
- Check that it's on port 3001 (or whatever you configured)
- Look for errors in the backend terminal

### "Insufficient credits" or "Rate limit exceeded"
- Your OpenAI account may need credits
- Check your usage at https://platform.openai.com/usage
- You may need to add a payment method

## 💰 OpenAI Pricing

GPT-3.5-turbo is very affordable:
- ~$0.0015 per recommendation (approximately)
- 100 recommendations ≈ $0.15
- 1000 recommendations ≈ $1.50

New accounts often get free credits to start!

## 🎉 You're All Set!

Enjoy discovering amazing movies with AI! 🍿🎬
