@echo off
echo Starting CineMatch Movie Recommendation System...
echo.

echo [1/2] Starting Backend Server...
start "CineMatch Backend" cmd /k "cd backend && npm run dev"

timeout /t 3 /nobreak > nul

echo [2/2] Starting Frontend Server...
start "CineMatch Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ========================================
echo CineMatch is starting up!
echo ========================================
echo Backend:  http://localhost:3001
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit this window...
pause > nul
