# Screenshot Capture Guide

## Automated Method (Recommended)

### Prerequisites
Install Puppeteer:
```bash
npm install puppeteer
```

### Run the script:
```bash
node scripts/capture-screenshots.js
```

This will:
- Create a `screenshots/` folder
- Capture all 10 demo pages
- Capture 5 theme variations for each demo
- Generate 50 total screenshots automatically

## Manual Method

### Browser DevTools Method:
1. Open any demo file in your browser
2. Press `F12` to open DevTools
3. Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)
4. Type "screenshot" and select "Capture full size screenshot"
5. Change themes using the dropdown and repeat

### Browser Extensions:
- **Full Page Screen Capture** (Chrome extension)
- **FireShot** (Cross-browser)
- **Awesome Screenshot** (Cross-browser)

## Demo Files to Screenshot

### Core Demos:
1. **index.html** - Main system dashboard
2. **component-index.html** - Component showcase
3. **input-components.html** - Form elements
4. **navigation-components.html** - Navigation systems
5. **feedback-components.html** - Alerts and modals

### Advanced Demos:
6. **block-visualizations.html** - Data visualization grids
7. **terminal-components.html** - Advanced terminal interfaces
8. **file-browser.html** - File system browser
9. **image-components.html** - Image handling components
10. **button-grid-alignment-test.html** - Layout testing

## Recommended Theme Captures

### Essential (2):
- **github-dark** (default)
- **github-light** (professional)

### Most Distinctive (3):
- **synthwave** (cyberpunk neon)
- **amber** (vintage terminal)
- **newspaper** (high contrast print)

## Screenshot Specifications

- **Viewport:** 1400x1080px (standard desktop)
- **Format:** PNG (for crisp UI elements)
- **Full page:** Capture entire demo, not just viewport
- **File naming:** `[demo-name]-[theme].png`

## Output Structure
```
screenshots/
├── index-github-dark.png
├── index-github-light.png
├── index-synthwave.png
├── component-index-github-dark.png
└── ... (50 total screenshots)
```

Run the automated script for best results!
