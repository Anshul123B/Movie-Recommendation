Local setup (Windows)

1. Open PowerShell or Command Prompt.

2. Backend

	```powershell
	cd "d:\My Web Dev projects\Movie Recommendation\backend"
	npm install
	copy .env.example .env
	notepad .env    # add OPENAI_API_KEY and optional PORT, save and close
	npm run dev     # or npm start for production
	```

	- Required env vars: `OPENAI_API_KEY` (and `PORT` if you change default).

3. Frontend (new terminal)

	```powershell
	cd "d:\My Web Dev projects\Movie Recommendation\frontend"
	npm install
	npm run dev
	```

4. Open in browser

	- Frontend: http://localhost:3000
	- Backend API: http://localhost:3001

5. Quick troubleshooting

	- If a port is in use, change `PORT` in `backend/.env`.
	- Ensure Node.js (>=14) and npm are installed.
	- Verify `OPENAI_API_KEY` is set correctly in `backend/.env`.

That's all, the repository contains only these local setup instructions.
