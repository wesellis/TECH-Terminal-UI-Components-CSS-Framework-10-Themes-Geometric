# Terminal UI Components CSS Framework

Pure CSS framework for building terminal-style interfaces with geometric design patterns.

[![CSS](https://img.shields.io/badge/CSS3-Framework-1572B6?style=flat-square&logo=css3)](https://www.w3.org/Style/CSS/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## Overview

A collection of CSS components and themes for creating terminal-style user interfaces. No JavaScript required - everything is built with pure CSS. Includes multiple color themes and geometric design elements.

## Features

- **Multiple Components** - Buttons, inputs, cards, modals, tables, alerts
- **10 Color Themes** - Classic green, Matrix, Cyberpunk, Dracula, Nord, and more
- **Geometric Patterns** - ASCII art decorations and geometric shapes
- **Zero Dependencies** - Pure CSS, no JavaScript required
- **Responsive** - Mobile-first design approach
- **Customizable** - CSS variables for easy theming

## Quick Start

```html
<!-- Include CSS -->
<link rel="stylesheet" href="terminal-ui.css">

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

## Themes

Available themes:
- `theme-classic` - Green on black
- `theme-matrix` - Matrix green
- `theme-amber` - Retro amber CRT
- `theme-cyberpunk` - Neon pink/blue
- `theme-dracula` - Purple palette
- `theme-nord` - Arctic blue
- `theme-synthwave` - 80s aesthetic
- `theme-monochrome` - Black and white
- `theme-solarized` - Solarized dark
- `theme-custom` - Build your own

Switch themes by changing the body class:
```html
<body class="theme-cyberpunk">
  <!-- Your content -->
</body>
```

## Components

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

## Geometric Elements

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

## Customization

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

## Responsive Design

All components use a mobile-first approach:

```css
/* Mobile first */
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

## CSS Effects

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

### Utility Classes

```css
.text-glow { text-shadow: 0 0 10px currentColor; }
.scanlines { /* CRT scanline effect */ }
.crt-effect { /* CRT flicker animation */ }
.pixelated { image-rendering: pixelated; }
```

## Project Structure

```
terminal-ui-css/
├── themes/              # Color theme files
├── components/          # Individual component styles
├── scripts/             # Build scripts
├── html-demos/          # Example HTML files
├── documentation/       # Component documentation
└── future-versions/     # Experimental features
```

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License - See [LICENSE](LICENSE) for details.

---

**Note**: This is a portfolio/demonstration project showcasing CSS terminal UI design patterns.

---

## Project Status & Roadmap

**Completion: ~70%**

### What Works
- ✅ CSS framework for terminal-style UI
- ✅ 10 geometric themes
- ✅ Terminal UI components
- ✅ Typography and color systems
- ✅ Responsive design patterns

### Current Status
Functional CSS framework providing terminal-inspired UI components with multiple themes. Works for building retro/terminal aesthetic web interfaces.

**Note**: Usable CSS framework for terminal-style web applications.
