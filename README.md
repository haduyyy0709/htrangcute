# 💝 Heart Message – "Chúc chị HTrang 20/10"

A beautiful single‑page heart greeting with sparkles, a rose‑framed photo, and a generator to create/share custom hearts.

## ✨ Features

- 🎨 **6 Beautiful Color Themes**: Classic Red, Sweet Pink, Royal Purple, Rainbow, Golden, Ocean Blue
- 📝 **Fully Customizable**: Create personalized messages with greeting, occasion, and subtitle
- 💫 **Interactive Animations**: Floating heart, pulsing effects, and magical sparkles
- 🔗 **Shareable Links**: Create unique URLs to share your message with anyone
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- 🌐 **Social Sharing**: Share directly to Facebook, Twitter, and WhatsApp
- ⚡ **No Backend Required**: Pure HTML, CSS, and JavaScript

## 🚀 Quick Start

### Option 1: Open Locally
Double‑click `display.html` (clean) or `index.html` (generator)

### Option 2: Local Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Then visit http://localhost:8000
```

## 🌍 Deploy to the Public Web

### Deploy to GitHub Pages (Free & Easy!)

1. **Create a GitHub account** at https://github.com (if you don't have one)

2. **Create a new repository**
   - Click the "+" icon → "New repository"
   - Name it: `htrangcute` (or any name you like)
   - Make it Public
   - Don't initialize with README

3. **Upload your files**
   ```bash
   # In your heart_project folder, run:
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/htrangcute.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository Settings
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click Save
   - Your site will be live at: `https://YOUR_USERNAME.github.io/htrangcute/`

### Deploy to Netlify (Easiest - Drag & Drop!)

1. Go to https://www.netlify.com
2. Sign up for a free account
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your `heart_project` folder
5. Your site is live! Netlify gives you a URL like: `https://random-name.netlify.app`
6. You can customize the domain name in Site settings

### Deploy to Vercel (Fast & Free)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Your site is live at: `https://your-project.vercel.app`

### Deploy to Cloudflare Pages (Free & Fast)

1. Go to https://pages.cloudflare.com
2. Sign up for free
3. Connect your GitHub account
4. Select your repository
5. Click "Deploy"
6. Your site will be live on Cloudflare's global network!

## 🎯 How to Use

1. **Visit the website** - Users see a customization form
2. **Fill in the details**:
   - Greeting message (e.g., "Happy Birthday", "I Love You")
   - Occasion/Date (e.g., "2024", "20/10", "❤️")
   - Optional subtitle (e.g., "Forever & Always")
   - Choose a color theme
3. **Click "Create Heart"** - Beautiful animated heart appears
4. **Share it** - Click the share button to get a shareable link
5. **Customize again** - Click "Edit Message" to create a new one

## 🔗 URL Sharing

The app creates shareable URLs with all customization included:
```
https://your-site.com/?greeting=Happy%20Birthday&occasion=2024&subtitle=Love%20You&theme=pink
```

Anyone clicking this link will see your custom heart message!

## 📱 Screenshots & Examples

**Example Messages:**
- "Chúc chị HTrang" / "20/10" / "Hạnh phúc & Xinh đẹp"
- Birthday: "Happy Birthday" / "2024" / "Love You Always"
- Love: "I Love You" / "❤️" / "Forever & Always"
- Anniversary: "Happy Anniversary" / "5 Years" / "Together Forever"

## 🛠️ Technical Details

- **Pure Vanilla JavaScript** - No frameworks required
- **CSS Animations** - Smooth, performant animations
- **URL Parameters** - For sharing and deep linking
- **Responsive Design** - Mobile-first approach
- **No Database** - All data in URL (privacy-friendly)

## 🎨 Customization

Want to modify the code? Here's what to edit:

- **Colors/Themes**: Edit the CSS theme classes in `style.css`
- **Heart Size**: Modify `.heart` width/height in `style.css`
- **Animations**: Adjust keyframes in `style.css`
- **Default Values**: Change placeholders in `index.html`
- **Add More Themes**: Add new options in the select dropdown

## 🌹 Add your photo (rose frame)
1. Create folder `assets/` in this project
2. Put your image as `assets/photo.jpg` (square, e.g. 800×800)
3. Open `display.html` or `index.html` to see the framed photo

## 🌟 Features to Add (Optional)

Ideas for future enhancements:
- [ ] More color themes
- [ ] Font selection
- [ ] Background music
- [ ] Confetti effects
- [ ] Screenshot/download feature
- [ ] Multiple languages
- [ ] Heart shape variations
- [ ] Save favorites (localStorage)

## 📄 License

Free to use for personal and commercial projects. No attribution required (but appreciated!)

## 💖 Credits

Created with love for sharing love! Feel free to fork, modify, and share.

---

## 🆘 Need Help?

### Common Issues:

**Q: The site isn't working after deployment**
- Make sure all files (index.html, style.css, script.js) are in the same folder
- Check browser console for errors (F12)

**Q: Can I use a custom domain?**
- Yes! All hosting platforms support custom domains
- GitHub Pages: Add CNAME file
- Netlify/Vercel: Add in dashboard settings

**Q: How do I update my live site?**
- GitHub Pages: Push new commits
- Netlify: Drag & drop new files or connect to GitHub
- Vercel: Push to GitHub (auto-deploys)

**Q: Is it really free?**
- Yes! All mentioned hosting platforms have generous free tiers

---

Made with 💝 by the community, for the community
