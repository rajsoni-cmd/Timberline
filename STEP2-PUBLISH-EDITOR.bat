@echo off
title Timberline - Publish editor + save photos
cd /d "%~dp0studio"
echo.
echo ================================================
echo   Step 1 of 2: Publishing the editor online
echo   (if it asks a question, just press Enter)
echo ================================================
call npx sanity deploy
if errorlevel 1 goto fail
echo.
echo ================================================
echo   Step 2 of 2: Copying photos off Emergent
echo ================================================
cd /d "%~dp0frontend"
call node scripts/localize-images.js
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
