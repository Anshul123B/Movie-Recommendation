# ✅ Quick Start Checklist

Follow these steps to get CineMatch up and running!

---

## 📋 Pre-Flight Checklist

### ✅ Step 1: Verify Installation
- [ ] Node.js is installed (v18+)
  - Check: Open terminal and run `node --version`
  - If not installed: Download from https://nodejs.org/

### ✅ Step 2: Get OpenAI API Key
- [ ] Go to https://platform.openai.com/api-keys
- [ ] Sign in or create an account
- [ ] Click "Create new secret key"
- [ ] Copy the key (starts with `sk-`)
- [ ] Save it somewhere safe!

### ✅ Step 3: Configure Backend
- [ ] Navigate to `backend` folder
- [ ] Create a file named `.env` (not .env.example)
- [ ] Copy contents from `.env.example` to `.env`
- [ ] Replace `your_openai_api_key_here` with your actual key
- [ ] Save the file

Your `.env` should look like:
```
OPENAI_API_KEY=sk-proj-your-actual-key-here
PORT=3001
NODE_ENV=development
```

### ✅ Step 4: Verify Dependencies
Both frontend and backend dependencies are already installed!
- [ ] Backend: `backend/node_modules` exists ✓
- [ ] Frontend: `frontend/node_modules` exists ✓

---

## 🚀 Launch Checklist

### Option A: Quick Start (Recommended)
- [ ] Double-click `start.bat` in the root folder
- [ ] Wait for both servers to start
- [ ] Look for these messages:
  - Backend: "Server running on http://localhost:3001"
  - Frontend: "Local: http://localhost:3000"

### Option B: Manual Start
**Terminal 1 - Backend:**
- [ ] Open terminal
- [ ] Run: `cd backend`
- [ ] Run: `npm run dev`
- [ ] Wait for "Server running" message

**Terminal 2 - Frontend:**
- [ ] Open new terminal
- [ ] Run: `cd frontend`
- [ ] Run: `npm run dev`
- [ ] Wait for "Local: http://localhost:3000" message

---

## 🌐 Access the Application

- [ ] Open your browser
- [ ] Go to: `http://localhost:3000`
- [ ] You should see the CineMatch interface!

---

## 🧪 Test the Application

### First Test
- [ ] Type in the input box: "I want action movies with strong female leads"
- [ ] Click "Get Recommendations" button
- [ ] Wait 5-10 seconds for AI to generate recommendations
- [ ] You should see 5 movie cards appear!

### Verify Features
- [ ] Input form accepts text
- [ ] Suggestion chips work when clicked
- [ ] Loading spinner appears during generation
- [ ] Movie cards display with all information
- [ ] "New Search" button resets the form

---

## ✅ Success Indicators

You'll know everything is working when:

### Backend ✓
- [ ] Terminal shows: "Server running on http://localhost:3001"
- [ ] No error messages in terminal
- [ ] Health check works: Visit `http://localhost:3001/health`

### Frontend ✓
- [ ] Terminal shows: "Local: http://localhost:3000"
- [ ] Browser loads the CineMatch interface
- [ ] No console errors (press F12 to check)
- [ ] Gradient background and logo visible

### Integration ✓
- [ ] Can submit movie preferences
- [ ] Receives AI-generated recommendations
- [ ] Movie cards display properly
- [ ] Can start new searches

---

## 🆘 Troubleshooting Quick Fixes

### "Cannot find module" error
```bash
# Re-install dependencies
cd backend
npm install

cd ../frontend
npm install
```

### "Port already in use"
- Close other applications using ports 3000 or 3001
- Or change the port in `backend/.env`

### "OpenAI API error"
- Check your API key is correct in `backend/.env`
- Verify you have credits at https://platform.openai.com/usage
- Ensure no extra spaces in the .env file

### "Cannot connect to backend"
- Make sure backend is running (check Terminal 1)
- Verify it's on port 3001
- Check for errors in backend terminal

### Browser shows blank page
- Check browser console (F12) for errors
- Verify frontend is running on port 3000
- Try refreshing the page (Ctrl+R or Cmd+R)

---

## 📞 Need Help?

1. **Check the logs** in both terminal windows
2. **Review the documentation**:
   - `README.md` - Full documentation
   - `SETUP_GUIDE.md` - Detailed setup steps
   - `API_REFERENCE.md` - API documentation
   - `PROJECT_SUMMARY.md` - Project overview

3. **Common issues**:
   - Missing `.env` file
   - Wrong API key
   - Port conflicts
   - Node.js version too old

---

## 🎉 You're All Set!

Once all checkboxes are ticked, you're ready to discover amazing movies with AI!

**Enjoy CineMatch!** 🎬🍿✨

---

## 💡 Pro Tips

- **Better prompts = Better recommendations**
  - Be specific about genres, moods, themes
  - Mention favorite movies as reference
  - Include what you want to avoid

- **Save your favorites**
  - Recommendations are stored in the database
  - Access history via API: `GET /recommendations`

- **Experiment**
  - Try different prompt styles
  - Use the suggestion chips for inspiration
  - Combine multiple preferences

---

**Last Updated:** 2025-12-31  
**Version:** 1.0.0  
**Status:** ✅ Production Ready
