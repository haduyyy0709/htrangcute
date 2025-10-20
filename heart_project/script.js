// DOM Elements
const customizePanel = document.getElementById('customizePanel');
const heartContainer = document.getElementById('heartContainer');
const messageForm = document.getElementById('messageForm');
const backBtn = document.getElementById('backBtn');
const shareBtn = document.getElementById('shareBtn');
const generateBtn = document.getElementById('generateBtn');
const shareModal = document.getElementById('shareModal');
const closeModal = document.getElementById('closeModal');
const resetBtn = document.getElementById('resetBtn');

// Form inputs
const greetingInput = document.getElementById('greeting');
const occasionInput = document.getElementById('occasion');
const subtitleInput = document.getElementById('subtitle');
const colorThemeSelect = document.getElementById('colorTheme');

// Display elements
const displayGreeting = document.getElementById('displayGreeting');
const displayOccasion = document.getElementById('displayOccasion');
const displaySubtitle = document.getElementById('displaySubtitle');

// Load data from URL on page load
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('greeting')) {
        const greeting = decodeURIComponent(urlParams.get('greeting'));
        const occasion = decodeURIComponent(urlParams.get('occasion') || '');
        const subtitle = decodeURIComponent(urlParams.get('subtitle') || '');
        const theme = urlParams.get('theme') || 'red';
        
        // Display the heart directly
        displayGreeting.textContent = greeting;
        displayOccasion.textContent = occasion;
        displaySubtitle.textContent = subtitle;
        
        if (!subtitle) {
            displaySubtitle.style.display = 'none';
        }
        
        applyTheme(theme);
        showHeart();
    } else {
        // Show default heart message immediately without form
        displayGreeting.textContent = 'Chúc bé HTrang';
        displayOccasion.textContent = '20/10';
        displaySubtitle.textContent = 'Hạnh phúc & Xinh đẹp';
        applyTheme('red');
        showHeart();
    }
    
    console.log('💖 Heart Message Generator loaded! 💖');
});

// Form submission
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const greeting = greetingInput.value.trim();
    const occasion = occasionInput.value.trim();
    const subtitle = subtitleInput.value.trim();
    const theme = colorThemeSelect.value;
    
    // Update display
    displayGreeting.textContent = greeting;
    displayOccasion.textContent = occasion;
    displaySubtitle.textContent = subtitle;
    
    if (subtitle) {
        displaySubtitle.style.display = 'block';
    } else {
        displaySubtitle.style.display = 'none';
    }
    
    // Apply theme
    applyTheme(theme);
    
    // Update URL without reloading
    updateURL(greeting, occasion, subtitle, theme);
    
    // Show heart
    showHeart();
});

// Example buttons
document.querySelectorAll('.example-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        greetingInput.value = btn.dataset.greeting;
        occasionInput.value = btn.dataset.occasion;
        subtitleInput.value = btn.dataset.subtitle;
    });
});

// Reset button
resetBtn.addEventListener('click', () => {
    messageForm.reset();
    greetingInput.focus();
});

// Back button
backBtn.addEventListener('click', () => {
    customizePanel.style.display = 'flex';
    heartContainer.style.display = 'none';
    
    // Clear URL parameters
    window.history.pushState({}, '', window.location.pathname);
});

// Share button
shareBtn.addEventListener('click', () => {
    const shareLink = window.location.href;
    document.getElementById('shareLink').value = shareLink;
    shareModal.classList.add('active');
});

// Generate standalone page button
generateBtn.addEventListener('click', () => {
    const greeting = displayGreeting.textContent;
    const occasion = displayOccasion.textContent;
    const subtitle = displaySubtitle.textContent;
    const theme = heartContainer.className.replace('container theme-', '');
    
    generateStandalonePage(greeting, occasion, subtitle, theme);
});

// Close modal
closeModal.addEventListener('click', () => {
    shareModal.classList.remove('active');
});

// Close modal on outside click
shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) {
        shareModal.classList.remove('active');
    }
});

// Copy link button
document.getElementById('copyLinkBtn').addEventListener('click', () => {
    const shareLinkInput = document.getElementById('shareLink');
    shareLinkInput.select();
    document.execCommand('copy');
    
    const copyBtn = document.getElementById('copyLinkBtn');
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    copyBtn.style.background = '#4caf50';
    
    setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.background = '';
    }, 2000);
});

// Social share buttons
document.getElementById('shareFacebook').addEventListener('click', () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
});

document.getElementById('shareTwitter').addEventListener('click', () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out this beautiful heart message! 💝');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
});

document.getElementById('shareWhatsapp').addEventListener('click', () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out this beautiful heart message! 💝 ');
    window.open(`https://wa.me/?text=${text}${url}`, '_blank');
});

// Helper functions
function showHeart() {
    customizePanel.style.display = 'none';
    heartContainer.style.display = 'flex';
}

function applyTheme(theme) {
    heartContainer.className = 'container theme-' + theme;
}

function updateURL(greeting, occasion, subtitle, theme) {
    const params = new URLSearchParams();
    params.set('greeting', greeting);
    params.set('occasion', occasion);
    if (subtitle) {
        params.set('subtitle', subtitle);
    }
    params.set('theme', theme);
    
    const newURL = window.location.pathname + '?' + params.toString();
    window.history.pushState({}, '', newURL);
}

// Interactive sparkles on mouse move
document.addEventListener('mousemove', (e) => {
    if (heartContainer.style.display !== 'none' && Math.random() > 0.95) {
        createSparkle(e.clientX, e.clientY);
    }
});

// Click on heart for extra sparkles
document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    if (heart) {
        heart.addEventListener('click', (e) => {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const x = e.clientX + (Math.random() - 0.5) * 200;
                    const y = e.clientY + (Math.random() - 0.5) * 200;
                    createSparkle(x, y);
                }, i * 50);
            }
        });
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'dynamic-sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    
    const size = Math.random() * 6 + 2;
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';
    sparkle.style.position = 'fixed';
    sparkle.style.background = 'white';
    sparkle.style.borderRadius = '50%';
    sparkle.style.boxShadow = '0 0 10px white';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '100';
    sparkle.style.animation = 'dynamicSparkle 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Add dynamic sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes dynamicSparkle {
        0% {
            opacity: 1;
            transform: scale(0) translateY(0);
        }
        50% {
            opacity: 1;
            transform: scale(1) translateY(-20px);
        }
        100% {
            opacity: 0;
            transform: scale(0) translateY(-40px);
        }
    }
`;
document.head.appendChild(style);

// Function to generate standalone HTML page
function generateStandalonePage(greeting, occasion, subtitle, theme) {
    const themeColors = {
        'red': 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
        'pink': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        'purple': 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        'rainbow': 'linear-gradient(135deg, #fa709a 0%, #fee140 50%, #30cfd0 100%)',
        'gold': 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
        'blue': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    };
    
    const htmlContent = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${greeting} - ${occasion}</title>
    <meta name="description" content="${greeting} ${occasion}">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💝</text></svg>">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }
        
        .container {
            position: relative;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .heart-wrapper {
            position: relative;
            z-index: 10;
            animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .heart {
            position: relative;
            width: 400px;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: pulse 1.5s ease-in-out infinite;
        }
        
        .heart::before,
        .heart::after {
            content: "";
            position: absolute;
            top: 0;
            width: 200px;
            height: 320px;
            background: ${themeColors[theme] || themeColors.red};
            border-radius: 200px 200px 0 0;
            box-shadow: 0 20px 60px rgba(255, 107, 107, 0.5);
        }
        
        .heart::before {
            left: 100px;
            transform: rotate(-45deg);
            transform-origin: 0 100%;
        }
        
        .heart::after {
            left: 0;
            transform: rotate(45deg);
            transform-origin: 100% 100%;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .message {
            position: absolute;
            text-align: center;
            color: white;
            z-index: 1;
            text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
            animation: fadeInScale 1s ease-out;
            max-width: 90%;
            word-wrap: break-word;
        }
        
        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: scale(0.5);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        .message h1 {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 10px;
            letter-spacing: 2px;
        }
        
        .message h2 {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 10px;
            text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4);
        }
        
        .message p {
            font-size: 1.3rem;
            font-style: italic;
            opacity: 0.95;
        }
        
        .sparkles {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
        
        .sparkle {
            position: absolute;
            width: 4px;
            height: 4px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 10px white;
            animation: sparkle 2s ease-in-out infinite;
        }
        
        .sparkle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .sparkle:nth-child(2) { top: 30%; left: 80%; animation-delay: 0.3s; }
        .sparkle:nth-child(3) { top: 60%; left: 15%; animation-delay: 0.6s; }
        .sparkle:nth-child(4) { top: 70%; left: 85%; animation-delay: 0.9s; }
        .sparkle:nth-child(5) { top: 15%; left: 50%; animation-delay: 1.2s; }
        .sparkle:nth-child(6) { top: 80%; left: 50%; animation-delay: 1.5s; }
        .sparkle:nth-child(7) { top: 40%; left: 5%; animation-delay: 1.8s; }
        .sparkle:nth-child(8) { top: 50%; left: 90%; animation-delay: 2.1s; }
        
        @keyframes sparkle {
            0%, 100% {
                opacity: 0;
                transform: scale(0);
            }
            50% {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        .credit {
            position: fixed;
            bottom: 20px;
            width: 100%;
            text-align: center;
            color: white;
            font-size: 0.9rem;
            opacity: 0.8;
            z-index: 100;
        }
        
        .credit a {
            color: white;
            text-decoration: underline;
        }
        
        @media (max-width: 768px) {
            .heart { width: 300px; height: 300px; }
            .heart::before, .heart::after { width: 150px; height: 240px; }
            .heart::before { left: 75px; }
            .message h1 { font-size: 1.8rem; }
            .message h2 { font-size: 2.2rem; }
            .message p { font-size: 1rem; }
        }
        
        @media (max-width: 480px) {
            .heart { width: 250px; height: 250px; }
            .heart::before, .heart::after { width: 125px; height: 200px; }
            .heart::before { left: 62.5px; }
            .message h1 { font-size: 1.5rem; }
            .message h2 { font-size: 1.8rem; }
            .message p { font-size: 0.9rem; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="heart-wrapper">
            <div class="heart">
                <div class="message">
                    <h1>${greeting}</h1>
                    <h2>${occasion}</h2>
                    ${subtitle ? `<p>${subtitle}</p>` : ''}
                </div>
            </div>
        </div>
        <div class="sparkles">
            <div class="sparkle"></div>
            <div class="sparkle"></div>
            <div class="sparkle"></div>
            <div class="sparkle"></div>
            <div class="sparkle"></div>
            <div class="sparkle"></div>
            <div class="sparkle"></div>
            <div class="sparkle"></div>
        </div>
        <div class="credit">
            <p>💝 Create your own at <a href="${window.location.origin}${window.location.pathname}" target="_blank">Heart Message Generator</a></p>
        </div>
    </div>
    
    <script>
        // Interactive sparkles
        document.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.95) {
                createSparkle(e.clientX, e.clientY);
            }
        });
        
        document.querySelector('.heart').addEventListener('click', (e) => {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const x = e.clientX + (Math.random() - 0.5) * 200;
                    const y = e.clientY + (Math.random() - 0.5) * 200;
                    createSparkle(x, y);
                }, i * 50);
            }
        });
        
        function createSparkle(x, y) {
            const sparkle = document.createElement('div');
            sparkle.style.cssText = \`
                position: fixed;
                left: \${x}px;
                top: \${y}px;
                width: \${Math.random() * 6 + 2}px;
                height: \${Math.random() * 6 + 2}px;
                background: white;
                border-radius: 50%;
                box-shadow: 0 0 10px white;
                pointer-events: none;
                z-index: 100;
                animation: dynamicSparkle 1s ease-out forwards;
            \`;
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
        }
        
        const style = document.createElement('style');
        style.textContent = \`
            @keyframes dynamicSparkle {
                0% { opacity: 1; transform: scale(0) translateY(0); }
                50% { opacity: 1; transform: scale(1) translateY(-20px); }
                100% { opacity: 0; transform: scale(0) translateY(-40px); }
            }
        \`;
        document.head.appendChild(style);
    </script>
</body>
</html>`;

    // Create a blob and download it
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Open in new window option
    const newWindow = window.open(url, '_blank');
    
    // Also create download link
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `heart-message-${greeting.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.html`;
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Show success message
    setTimeout(() => {
        alert('✨ Standalone page generated!\\n\\n✅ Page opened in new tab\\n✅ HTML file downloaded\\n\\nYou can upload the downloaded file to any web hosting service!');
    }, 500);
    
    // Clean up the blob URL after a short delay
    setTimeout(() => URL.revokeObjectURL(url), 60000);
}
