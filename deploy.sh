#!/bin/bash

# Heart Message Generator - Quick Deployment Script

echo "💝 Heart Message Generator - Deployment Helper"
echo "=============================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    echo "   Visit: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Check if already a git repository
if [ -d ".git" ]; then
    echo "📁 Git repository already exists"
else
    echo "📁 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
fi

echo ""

# Add all files
echo "📝 Adding files to Git..."
git add .
echo "✅ Files added"

echo ""

# Commit
echo "💾 Creating commit..."
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update Heart Message Generator"
fi

git commit -m "$commit_msg"
echo "✅ Commit created"

echo ""

# Check if remote exists
if git remote | grep -q "origin"; then
    echo "🔗 Remote 'origin' already exists"
    echo ""
    echo "🚀 Pushing to GitHub..."
    git push origin main || git push origin master
    echo "✅ Pushed to GitHub!"
else
    echo "🔗 No remote repository found"
    echo ""
    echo "To push to GitHub:"
    echo "1. Create a new repository on GitHub"
    echo "2. Run these commands:"
    echo ""
    echo "   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
fi

echo ""
echo "=============================================="
echo "✨ Next Steps:"
echo ""
echo "For GitHub Pages:"
echo "  1. Go to your repository on GitHub"
echo "  2. Settings → Pages"
echo "  3. Select 'main' branch and Save"
echo ""
echo "For Netlify:"
echo "  1. Go to https://app.netlify.com/drop"
echo "  2. Drag this folder into the drop zone"
echo ""
echo "For Vercel:"
echo "  1. Go to https://vercel.com/new"
echo "  2. Import your GitHub repository"
echo ""
echo "See DEPLOYMENT_GUIDE.md for detailed instructions!"
echo "=============================================="

