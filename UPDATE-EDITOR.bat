@echo off
title Timberline - Update the editor
cd /d "%~dp0studio"
echo.
echo ================================================
echo   Updating the editor (timberline.sanity.studio)
echo   If it asks a question, just press Enter.
echo ================================================
call npx sanity deploy
if errorlevel 1 goto fail
echo.
echo ================================================
echo   ALL DONE! The editor is updated.
echo ================================================
pause
exit /b 0
:fail
echo.
echo   Something went wrong. Take a screenshot and send it to Claude.
pause
exit /b 1
