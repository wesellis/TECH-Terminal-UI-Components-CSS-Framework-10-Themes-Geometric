# Fine Use Design System - Theme Collection

## Overview

Fine Use offers **10 professionally designed themes** organized by category and aesthetic. Each theme maintains the core geometric principles while expressing unique character through color and atmosphere.

---

## 🎨 10 Core Themes

### **Essential Themes (2)**
- **github-dark** - Professional dark theme *(DEFAULT)*
- **github-light** - Professional light theme

### **Terminal Classics (4)**
- **amber** - Classic amber CRT monitor
- **gruvbox** - Warm earth tones with reduced eye strain
- **monochrome** - Pure black/white maximum contrast
- **vt220** - Authentic vintage terminal

### **Modern Themes (2)**
- **monokai** - Warm retro coding theme
- **newspaper** - High contrast print aesthetic

### **Creative Themes (2)**
- **sakura** - Soft pink feminine theme
- **synthwave** - 80s neon cyberpunk vibes

---

## 🌙 Essential Themes (2 Themes)

Designed for professional work and daily use.

### GitHub Dark *(DEFAULT)*
**Professional dark theme based on GitHub's dark mode**
- Background: Dark gray (#0d1117)
- Accent: GitHub blue (#58a6ff)
- Use case: Development, professional interfaces, default experience

### GitHub Light
**Professional light theme based on GitHub's light mode**
- Background: Clean white (#ffffff)
- Accent: GitHub blue (#0969da)
- Use case: Bright environments, presentations, documentation

---

## 📟 Terminal Classics (4 Themes)

Classic terminal aesthetics from computing history.

### Amber
**Classic CRT monitor amber terminal**
- Background: Deep brown (#1a0f00)
- Accent: Amber yellow (#ffcc00)
- Use case: Retro applications, nostalgic interfaces

### Gruvbox
**Warm earth tones with reduced eye strain**
- Background: Dark brown (#282828)
- Accent: Muted pink (#d3869b)
- Use case: Long coding sessions, comfortable viewing

### Monochrome
**Pure black and white for maximum contrast**
- Background: Pure black (#000000)
- Accent: White (#ffffff)
- Use case: High contrast accessibility, e-ink displays

### VT220
**Authentic VT220 terminal with vintage green**
- Background: Dark green-black (#000000)
- Accent: Terminal green (#00ff00)
- Use case: Authentic terminal experience, system admin

---

## 🖥️ Modern Themes (2 Themes)

Contemporary designs with geometric precision.

### Monokai
**Warm retro coding theme**
- Background: Warm brown (#272822)
- Accent: Purple (#ae81ff)
- Use case: Development environments, coding sessions

### Newspaper
**High contrast black and white print aesthetic**
- Background: Pure white (#ffffff)
- Accent: Black (#000000)
- Use case: Documentation, print-like interfaces, reading

---

## 🎨 Creative Themes (2 Themes)

Expressive themes with bold color choices.

### Sakura
**Soft pink feminine theme**
- Background: Dark purple (#2d1b2e)
- Accent: Bright pink (#f093fb)
- Use case: Creative applications, personal tools

### Synthwave
**80s neon cyberpunk vibes**
- Background: Deep purple (#0a0014)
- Accent: Neon magenta (#ff00ff)
- Use case: Gaming interfaces, creative tools

---

## 🎯 Theme Selection Guide

### **For Development Work:**
- **github-dark** (default, most versatile)
- **monokai** (comfortable for long sessions)
- **gruvbox** (eye strain reduction)
- **vt220** (authentic terminal feel)

### **For Business/Professional:**
- **github-dark** (professional default)
- **github-light** (presentations, documentation)
- **newspaper** (clean, readable)
- **monochrome** (high contrast, serious)

### **For Creative Work:**
- **synthwave** (bold, artistic)
- **sakura** (creative, expressive)
- **amber** (retro aesthetic)

### **For System Administration:**
- **vt220** (authentic terminal)
- **monochrome** (maximum contrast)
- **amber** (classic terminal feel)

### **For Accessibility:**
- **monochrome** (maximum contrast)
- **github-light** (clean, accessible)
- **newspaper** (readable, high contrast)

---

## 📊 Theme Implementation

### Theme Switching Pattern
All HTML files use this exact structure:

```html
<!-- 10 Core Themes CSS Links -->
<link rel="stylesheet" href="../themes/github-dark.css">
<link rel="stylesheet" href="../themes/github-light.css">
<link rel="stylesheet" href="../themes/amber.css">
<link rel="stylesheet" href="../themes/gruvbox.css">
<link rel="stylesheet" href="../themes/monochrome.css">
<link rel="stylesheet" href="../themes/monokai.css">
<link rel="stylesheet" href="../themes/newspaper.css">
<link rel="stylesheet" href="../themes/sakura.css">
<link rel="stylesheet" href="../themes/synthwave.css">
<link rel="stylesheet" href="../themes/vt220.css">

<!-- Standardized Theme Selector -->
<select id="theme-select" class="theme-dropdown">
  <option value="github-dark" selected>Dark Mode</option>
  <option value="github-light">Light Mode</option>
  <option value="amber">Amber Terminal</option>
  <option value="gruvbox">Gruvbox</option>
  <option value="monochrome">Monochrome</option>
  <option value="monokai">Monokai</option>
  <option value="newspaper">Newspaper</option>
  <option value="sakura">Sakura</option>
  <option value="synthwave">Synthwave</option>
  <option value="vt220">VT220</option>
</select>
```

### JavaScript Theme Management
```javascript
const themes = [
  'github-dark', 'github-light', 'amber', 'gruvbox', 'monochrome', 
  'monokai', 'newspaper', 'sakura', 'synthwave', 'vt220'
];

// Theme switching
document.getElementById('theme-select').addEventListener('change', (e) => {
  document.documentElement.setAttribute('data-theme', e.target.value);
});
```

---

## 📊 Theme Statistics

| Category | Count | Themes |
|----------|-------|--------|
| **Essential** | 2 | GitHub Dark (default), GitHub Light |
| **Terminal Classics** | 4 | Amber, Gruvbox, Monochrome, VT220 |
| **Modern** | 2 | Monokai, Newspaper |
| **Creative** | 2 | Sakura, Synthwave |
| **Total** | **10** | **Complete Collection** |

---

## 🎨 Color System Consistency

All themes follow the same semantic color structure:

```css
:root[data-theme="theme-name"] {
  /* Backgrounds */
  --fine-use-bg: #000000;
  --fine-use-surface: #111111;
  
  /* Structure */
  --fine-use-border: #333333;
  
  /* Text */
  --fine-use-text: #ffffff;
  --fine-use-comment: #888888;
  
  /* Status Colors - NEVER change meanings */
  --fine-use-success: #00ff00;  /* Green - good/online */
  --fine-use-warning: #ffff00;  /* Yellow - caution */
  --fine-use-error: #ff0000;    /* Red - error/offline */
  --fine-use-info: #00ffff;     /* Blue - information */
  
  /* Theme personality */
  --fine-use-accent: #ffffff;
  --fine-use-orange: #cccccc;
}
```

---

**Fine Use: 10 themes, infinite possibilities, zero rounded corners.**

*Last updated: June 2025*