@echo off
setlocal

set "SITE=%~dp0index.html"
cd /d "%~dp0" 2>nul

if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" "%SITE%"
  exit /b 0
)

if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" "%SITE%"
  exit /b 0
)

if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" (
  start "" "%LocalAppData%\Google\Chrome\Application\chrome.exe" "%SITE%"
  exit /b 0
)

if exist "%LocalAppData%\Microsoft\WindowsApps\msedge.exe" (
  start "" "%LocalAppData%\Microsoft\WindowsApps\msedge.exe" "%SITE%"
  exit /b 0
)

start "" "%SITE%"
