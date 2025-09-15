# 🎨 Terminal UI Components CSS Framework
### Geometric Design System with 10 Themes

[![CSS](https://img.shields.io/badge/CSS3-Framework-1572B6?style=for-the-badge&logo=css3)](https://www.w3.org/Style/CSS/)
[![Themes](https://img.shields.io/badge/Themes-10-FF6B6B?style=for-the-badge)](https://github.com)
[![Components](https://img.shields.io/badge/Components-45+-brightgreen?style=for-the-badge)](https://github.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

## 🎯 Overview

Pure CSS framework for building terminal-style interfaces with geometric design patterns. No JavaScript required. 45+ components, 10 themes, and fully customizable. Perfect for developer tools, retro UIs, and command-line web apps.

### 📊 What's Included

- **45+ Components** - Buttons, inputs, cards, modals, etc.
- **10 Color Themes** - From classic green to cyberpunk
- **Geometric Patterns** - Unique visual style
- **Zero Dependencies** - Pure CSS, no JavaScript
- **Responsive** - Works on all screen sizes
- **Accessible** - WCAG compliant

## ⚡ Quick Start

```html
<!-- Include CSS -->
<link rel="stylesheet" href="terminal-ui.min.css">

<!-- Apply theme -->
<body class="theme-matrix">
  <!-- Use components -->
  <div class="terminal-window">
    <div class="terminal-header">Terminal</div>
    <div class="terminal-body">
      <div class="terminal-prompt">$ <span class="blink">_</span></div>
    </div>
  </div>
</body>
```

## 🎨 Themes

### Available Themes
- `theme-classic` - Green on black
- `theme-matrix` - Matrix green rain
- `theme-amber` - Retro amber CRT
- `theme-cyberpunk` - Neon pink/blue
- `theme-dracula` - Purple vampire
- `theme-nord` - Arctic blue
- `theme-synthwave` - 80s aesthetic
- `theme-monochrome` - Black and white
- `theme-solarized` - Solarized dark
- `theme-custom` - Build your own

### Theme Switcher
```html
<select onchange="document.body.className = this.value">
  <option value="theme-classic">Classic</option>
  <option value="theme-matrix">Matrix</option>
  <option value="theme-cyberpunk">Cyberpunk</option>
</select>
```

## 📦 Components

### Terminal Window
```html
<div class="terminal-window">
  <div class="terminal-header">
    <span class="terminal-title">bash</span>
    <div class="terminal-controls">
      <span class="control close"></span>
      <span class="control minimize"></span>
      <span class="control maximize"></span>
    </div>
  </div>
  <div class="terminal-body">
    <!-- Content -->
  </div>
</div>
```

### Buttons
```html
<!-- Primary button -->
<button class="btn btn-primary">[Execute]</button>

<!-- Ghost button -->
<button class="btn btn-ghost">&lt;Cancel&gt;</button>

<!-- ASCII button -->
<button class="btn btn-ascii">
  ╔═══════════╗
  ║  Submit   ║
  ╚═══════════╝
</button>
```

### Forms
```html
<div class="form-group">
  <label class="form-label">Username:</label>
  <input type="text" class="input-terminal" />
</div>

<div class="form-group">
  <label class="form-label">Command:</label>
  <select class="select-terminal">
    <option>ls -la</option>
    <option>git status</option>
  </select>
</div>
```

### Cards
```html
<div class="card geometric">
  <div class="card-corner top-left">◢</div>
  <div class="card-corner top-right">◣</div>
  <div class="card-header">System Status</div>
  <div class="card-body">
    <div class="status-line">CPU: [████████░░] 80%</div>
    <div class="status-line">RAM: [██████░░░░] 60%</div>
  </div>
  <div class="card-corner bottom-left">◥</div>
  <div class="card-corner bottom-right">◤</div>
</div>
```

### Progress Bars
```html
<!-- ASCII progress -->
<div class="progress">
  <div class="progress-bar" style="width: 60%">
    [██████████████████░░░░░░░░░░] 60%
  </div>
</div>

<!-- Geometric progress -->
<div class="progress-geometric">
  <div class="progress-fill" style="width: 75%">
    ▶▶▶▶▶▶▶▶▶▶▶▶▶▶▶
  </div>
</div>
```

### Tables
```html
<table class="table-terminal">
  <thead>
    <tr>
      <th>┌─ PID ─┐</th>
      <th>┌─ Process ─┐</th>
      <th>┌─ CPU% ─┐</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1234</td>
      <td>node</td>
      <td>12.5%</td>
    </tr>
  </tbody>
</table>
```

### Alerts
```html
<!-- Success -->
<div class="alert alert-success">
  ✓ Operation completed successfully
</div>

<!-- Error -->
<div class="alert alert-error">
  ✗ Error: Permission denied
</div>

<!-- ASCII box alert -->
<div class="alert-box">
╔════════════════════════════╗
║  ⚠ Warning: Low disk space ║
╚════════════════════════════╝
</div>
```

## 🎯 Geometric Elements

### Decorative Patterns
```html
<!-- Corner decorations -->
<div class="geometric-box">
  <span class="corner tl">╔</span>
  <span class="corner tr">╗</span>
  Content here
  <span class="corner bl">╚</span>
  <span class="corner br">╝</span>
</div>

<!-- Line patterns -->
<div class="divider-geometric">
  ═══════╡◆╞═══════
</div>

<!-- ASCII art borders -->
<div class="ascii-frame">
  ░▒▓█ Content █▓▒░
</div>
```

## 🛠️ Customization

### CSS Variables
```css
:root {
  --term-bg: #0a0e27;
  --term-fg: #00ff41;
  --term-accent: #ffb86c;
  --term-font: 'Fira Code', monospace;
  --term-size: 14px;
  --term-line-height: 1.6;
}
```

### Custom Theme
```css
.theme-custom {
  --term-bg: #1a1a2e;
  --term-fg: #eee;
  --term-accent: #f39c12;
  --term-selection: #16213e;
  --term-cursor: #e94560;
}
```

## 📱 Responsive

All components are responsive by default:

```css
/* Mobile first approach */
.terminal-window {
  width: 100%;
}

/* Tablet and up */
@media (min-width: 768px) {
  .terminal-window {
    width: 80%;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .terminal-window {
    width: 60%;
  }
}
```

## 🎨 Effects

### Animations
```html
<!-- Blinking cursor -->
<span class="blink">_</span>

<!-- Typing effect -->
<span class="typewriter">Loading...</span>

<!-- Glitch effect -->
<h1 class="glitch" data-text="SYSTEM">SYSTEM</h1>

<!-- Matrix rain -->
<div class="matrix-rain"></div>
```

### Utilities
```css
.text-glow { text-shadow: 0 0 10px currentColor; }
.scanlines { background: repeating-linear-gradient(...); }
.crt-effect { animation: crt-flicker 0.1s infinite; }
.pixelated { image-rendering: pixelated; }
```

## 📈 Performance

- **File Size**: 28KB minified, 6KB gzipped
- **No JavaScript**: Pure CSS solution
- **GPU Accelerated**: Transform animations
- **Optimized**: Single file, no requests

## 🔧 Build Tools

```bash
# Install
npm install terminal-ui-css

# Import in CSS
@import 'terminal-ui-css';

# Or in JavaScript
import 'terminal-ui-css/dist/terminal-ui.min.css';
```

## 📚 Documentation

Full docs with examples: [terminal-ui.dev](https://terminal-ui.dev)

- [Component Gallery](https://terminal-ui.dev/components)
- [Theme Builder](https://terminal-ui.dev/themes)
- [Code Examples](https://terminal-ui.dev/examples)
- [Playground](https://terminal-ui.dev/playground)

## 🤝 Contributing

PRs welcome! See [CONTRIBUTING.md](CONTRIBUTING.md)

## 📜 License

MIT License - Free for all projects

---

<div align="center">

**Build Terminal UIs with Pure CSS**

[![Download](https://img.shields.io/badge/Download-CSS-brightgreen?style=for-the-badge)](https://github.com/yourusername/terminal-ui-css/releases)
[![Demo](https://img.shields.io/badge/View-Demo-blue?style=for-the-badge)](https://terminal-ui.dev/demo)

*Lightweight • No Dependencies • Geometric Design*

</div>