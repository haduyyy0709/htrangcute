@echo off
REM Heart Message Generator - Quick Deployment Script for Windows

echo.
echo 💝 Heart Message Generator - Deployment Helper
echo ==============================================
echo.

REM Check if git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Git is not installed. Please install Git first.
    echo    Visit: https://git-scm.com/downloads
    pause
    exit /b 1
)

echo ✅ Git is installed
echo.

REM Check if already a git repository
if exist ".git" (
    echo 📁 Git repository already exists
) else (
    echo 📁 Initializing Git repository...
    git init
    echo ✅ Git repository initialized
)

echo.

REM Add all files
echo 📝 Adding files to Git...
git add .
echo ✅ Files added

echo.

REM Commit
echo 💾 Creating commit...
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" set commit_msg=Update Heart Message Generator

git commit -m "%commit_msg%"
echo ✅ Commit created

echo.

REM Check if remote exists
git remote | findstr "origin" >nul
if %ERRORLEVEL% EQU 0 (
    echo 🔗 Remote 'origin' already exists
    echo.
    echo 🚀 Pushing to GitHub...
    git push origin main
    if %ERRORLEVEL% NEQ 0 git push origin master
    echo ✅ Pushed to GitHub!
) else (
    echo 🔗 No remote repository found
    echo.
    echo To push to GitHub:
    echo 1. Create a new repository on GitHub
    echo 2. Run these commands:
    echo.
    echo    git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
    echo    git branch -M main
    echo    git push -u origin main
    echo.
)

echo.
echo ==============================================
echo ✨ Next Steps:
echo.
echo For GitHub Pages:
echo   1. Go to your repository on GitHub
echo   2. Settings → Pages
echo   3. Select 'main' branch and Save
echo.
echo For Netlify:
echo   1. Go to https://app.netlify.com/drop
echo   2. Drag this folder into the drop zone
echo.
echo For Vercel:
echo   1. Go to https://vercel.com/new
echo   2. Import your GitHub repository
echo.
echo See DEPLOYMENT_GUIDE.md for detailed instructions!
echo ==============================================
echo.
pause

