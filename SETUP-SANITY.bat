@echo off
title Timberline - Sanity setup
cd /d "%~dp0studio"
echo.
echo ================================================
echo   Step 1 of 3: Installing (takes 1-3 minutes)
echo ================================================
call npm install --no-audit --no-fund
if errorlevel 1 goto fail
echo.
echo ================================================
echo   Step 2 of 3: Log in to Sanity
echo   A browser window will open - log in with the
echo   same account you used on sanity.io, then come back here.
echo ================================================
call npx sanity login
if errorlevel 1 goto fail
echo.
echo ================================================
echo   Step 3 of 3: Importing website content + photos
echo ================================================
call npm run seed
if errorlevel 1 goto fail
echo.
echo ================================================
echo   ALL DONE! Take a screenshot and send it to Claude.
echo ================================================
pause
exit /b 0
:fail
echo.
echo ************************************************
echo   Something went wrong. Take a screenshot of this
echo   window and send it to Claude.
echo ************************************************
pause
exit /b 1
