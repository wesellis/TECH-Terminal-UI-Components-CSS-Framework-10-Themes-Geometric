# Fine Use Color System

## Overview

The Fine Use color system is built on **semantic meaning over aesthetics**. Every color serves a specific functional purpose and maintains consistent meaning across all themes and interfaces.

## Core Principles

### 1. Semantic First
Colors convey information, not decoration:
- **Green**: Success, operational, good performance
- **Yellow**: Warning, pending, moderate performance  
- **Red**: Error, offline, critical performance
- **Blue**: Information, neutral, process indicators

### 2. High Contrast Required
- **Minimum 7:1 ratio** for all body text
- **Minimum 4.5:1 ratio** for large text (18px+)
- **Minimum 3:1 ratio** for interactive elements

### 3. Limited Palette
- **Maximum 7 colors** per theme
- **Consistent color roles** across all themes
- **Test colorblind accessibility** for all combinations

## Color Roles

### Background Colors
```css
:root {
  /* Primary background - darkest surface */
  --fine-use-bg: #282a36;
  
  /* Component backgrounds - lighter than main bg */
  --fine-use-surface: #44475a;
}
```

**Usage Rules:**
- `--fine-use-bg`: Main page background, terminal content areas
- `--fine-use-surface`: Cards, panels, component backgrounds
- Always maintain clear hierarchy: surface lighter than bg

### Structure Colors
```css
:root {
  /* Borders and separators */
  --fine-use-border: #6272a4;
}
```

**Usage Rules:**
- All component borders use this color
- Table separators and dividers
- Focus outlines (may use accent as alternative)
- Minimum 2px thickness for visibility

### Text Colors
```css
:root {
  /* Primary text - highest contrast */
  --fine-use-text: #f8f8f2;
  
  /* Secondary text - timestamps, labels */
  --fine-use-comment: #6272a4;
}
```

**Usage Rules:**
- `--fine-use-text`: Body text, headers, important data
- `--fine-use-comment`: Timestamps, secondary info, labels
- Never use for critical information that needs attention

### Status Colors (Never Change Meanings)
```css
:root {
  /* Success - operational, good, completed */
  --fine-use-success: #50fa7b;
  
  /* Warning - pending, moderate, caution */
  --fine-use-warning: #f1fa8c;
  
  /* Error - failed, critical, offline */
  --fine-use-error: #ff5555;
  
  /* Information - neutral, process, data */
  --fine-use-info: #8be9fd;
}
```

**Status Color Rules:**
1. **Never change semantic meanings** across themes
2. **Always test accessibility** against background colors
3. **Use for backgrounds and text** but maintain contrast
4. **Test colorblind accessibility** - don't rely on color alone

### Accent Colors
```css
:root {
  /* Theme accent - interactive elements */
  --fine-use-accent: #bd93f9;
  
  /* Category headers - section organization */
  --fine-use-orange: #ffb86c;
}
```

**Usage Rules:**
- `--fine-use-accent`: Interactive elements, highlights, selections
- `--fine-use-orange`: Section headers, navigation, categories
- These can vary more between themes for personality

## Theme Implementations

### Dracula Theme
```css
:root[data-theme="dracula"] {
  /* Backgrounds */
  --fine-use-bg: #282a36;
  --fine-use-surface: #44475a;
  
  /* Structure */
  --fine-use-border: #6272a4;
  
  /* Text */
  --fine-use-text: #f8f8f2;
  --fine-use-comment: #6272a4;
  
  /* Status - semantic meanings preserved */
  --fine-use-success: #50fa7b;
  --fine-use-warning: #f1fa8c;
  --fine-use-error: #ff5555;
  --fine-use-info: #8be9fd;
  
  /* Accents - theme personality */
  --fine-use-accent: #bd93f9;
  --fine-use-orange: #ffb86c;
}
```

**Characteristics:**
- Purple/pink theme personality
- High contrast for readability
- Popular with developers
- Excellent for long coding sessions

### Monokai Theme
```css
:root[data-theme="monokai"] {
  /* Backgrounds */
  --fine-use-bg: #272822;
  --fine-use-surface: #3e3d32;
  
  /* Structure */
  --fine-use-border: #75715e;
  
  /* Text */
  --fine-use-text: #f8f8f2;
  --fine-use-comment: #75715e;
  
  /* Status - same semantic meanings */
  --fine-use-success: #a6e22e;
  --fine-use-warning: #e6db74;
  --fine-use-error: #f92672;
  --fine-use-info: #66d9ef;
  
  /* Accents - warm personality */
  --fine-use-accent: #ae81ff;
  --fine-use-orange: #fd971f;
}
```

**Characteristics:**
- Warm brown/green retro aesthetic
- Classic terminal feel
- Great for data-heavy interfaces
- Reduces eye strain

### Nord Theme
```css
:root[data-theme="nord"] {
  /* Backgrounds */
  --fine-use-bg: #2e3440;
  --fine-use-surface: #3b4252;
  
  /* Structure */
  --fine-use-border: #4c566a;
  
  /* Text */
  --fine-use-text: #eceff4;
  --fine-use-comment: #616e88;
  
  /* Status - consistent meanings */
  --fine-use-success: #a3be8c;
  --fine-use-warning: #ebcb8b;
  --fine-use-error: #bf616a;
  --fine-use-info: #81a1c1;
  
  /* Accents - cool personality */
  --fine-use-accent: #b48ead;
  --fine-use-orange: #d08770;
}
```

**Characteristics:**
- Cool Arctic-inspired palette
- Professional and clean
- Excellent for business applications
- Calming blue tones

## Creating New Themes

### Step 1: Define Background Hierarchy
```css
/* Start with backgrounds - maintain clear contrast */
--fine-use-bg: #[darkest];
--fine-use-surface: #[lighter-than-bg];
--fine-use-border: #[visible-against-both];
```

### Step 2: Establish Text Contrast
```css
/* Ensure 7:1 contrast against backgrounds */
--fine-use-text: #[highest-contrast];
--fine-use-comment: #[readable-but-secondary];
```

### Step 3: Apply Status Colors
```css
/* Keep semantic meanings - adjust for theme aesthetic */
--fine-use-success: #[green-variant];
--fine-use-warning: #[yellow-variant]; 
--fine-use-error: #[red-variant];
--fine-use-info: #[blue-variant];
```

### Step 4: Add Theme Personality
```css
/* Express theme character through accents */
--fine-use-accent: #[theme-signature-color];
--fine-use-orange: #[section-header-color];
```

### Step 5: Test Everything
- Contrast ratios with tools like WebAIM
- Colorblind simulation (Protanopia, Deuteranopia, Tritanopia)
- Real content in actual components
- Different lighting conditions

## Usage Patterns

### Component Backgrounds
```css
/* Primary component */
.fine-use-component {
  background-color: var(--fine-use-surface);
  border: 2px solid var(--fine-use-border);
}

/* Nested content areas */
.terminal-content {
  background-color: var(--fine-use-bg);
}

/* Table headers */
.table-header {
  background-color: var(--fine-use-border);
}
```

### Status Implementation
```css
/* Status badges */
.status-online {
  background-color: var(--fine-use-success);
  color: var(--fine-use-bg);
}

/* Metric values */
.metric-good { color: var(--fine-use-success); }
.metric-warning { color: var(--fine-use-warning); }
.metric-critical { color: var(--fine-use-error); }

/* Progress bars */
.progress-bar[data-status="success"] {
  background-color: var(--fine-use-success);
}
```

### Interactive Elements
```css
/* Focus states */
.focusable:focus {
  outline: 2px solid var(--fine-use-accent);
  outline-offset: 2px;
}

/* Hover states */
.interactive:hover {
  background-color: var(--fine-use-border);
}

/* Active states */
.button-primary {
  background-color: var(--fine-use-success);
  color: var(--fine-use-bg);
}
```

## Accessibility Guidelines

### Contrast Testing
Use these tools to verify contrast ratios:
- **WebAIM Contrast Checker**
- **Colour Contrast Analyser**
- **axe DevTools**

### Minimum Requirements
```css
/* Text on backgrounds */
color: var(--fine-use-text);     /* 7:1+ ratio required */
background: var(--fine-use-bg);

/* Large text (18px+) */
color: var(--fine-use-comment);  /* 4.5:1+ ratio required */
background: var(--fine-use-surface);

/* Interactive elements */
border: 2px solid var(--fine-use-border); /* 3:1+ ratio required */
```

### Colorblind Considerations
- **Never rely on color alone** for critical information
- **Use text labels** alongside color coding
- **Test with simulation tools** for all three types
- **Provide high contrast modes** when possible

### Implementation Example
```html
<!-- Good: Color + text + shape -->
<span class="status-indicator status-online" role="img" aria-label="Service online">
  <div class="status-box"></div>
  <span class="status-text">ONLINE</span>
</span>

<!-- Bad: Color only -->
<div class="status-red"></div>
```

## Color Palette Reference

### Dracula Palette
```
Background:    #282a36    Surface:       #44475a    Border:        #6272a4
Text:          #f8f8f2    Comment:       #6272a4    Success:       #50fa7b
Warning:       #f1fa8c    Error:         #ff5555    Info:          #8be9fd
Accent:        #bd93f9    Orange:        #ffb86c
```

### Monokai Palette
```
Background:    #272822    Surface:       #3e3d32    Border:        #75715e
Text:          #f8f8f2    Comment:       #75715e    Success:       #a6e22e
Warning:       #e6db74    Error:         #f92672    Info:          #66d9ef
Accent:        #ae81ff    Orange:        #fd971f
```

### Nord Palette
```
Background:    #2e3440    Surface:       #3b4252    Border:        #4c566a
Text:          #eceff4    Comment:       #616e88    Success:       #a3be8c
Warning:       #ebcb8b    Error:         #bf616a    Info:          #81a1c1
Accent:        #b48ead    Orange:        #d08770
```

### Solarized Dark Palette
```
Background:    #002b36    Surface:       #073642    Border:        #586e75
Text:          #839496    Comment:       #586e75    Success:       #859900
Warning:       #b58900    Error:         #dc322f    Info:          #268bd2
Accent:        #d33682    Orange:        #cb4b16
```

### Gruvbox Palette
```
Background:    #282828    Surface:       #3c3836    Border:        #504945
Text:          #ebdbb2    Comment:       #928374    Success:       #b8bb26
Warning:       #fabd2f    Error:         #fb4934    Info:          #83a598
Accent:        #d3869b    Orange:        #fe8019
```

### One Dark Palette
```
Background:    #282c34    Surface:       #3e4451    Border:        #4b5263
Text:          #abb2bf    Comment:       #5c6370    Success:       #98c379
Warning:       #e5c07b    Error:         #e06c75    Info:          #61afef
Accent:        #c678dd    Orange:        #d19a66
```

### Tokyo Night Palette
```
Background:    #1a1b26    Surface:       #24283b    Border:        #414868
Text:          #c0caf5    Comment:       #565f89    Success:       #9ece6a
Warning:       #e0af68    Error:         #f7768e    Info:          #7aa2f7
Accent:        #bb9af7    Orange:        #ff9e64
```

### GitHub Dark Palette
```
Background:    #0d1117    Surface:       #161b22    Border:        #30363d
Text:          #f0f6fc    Comment:       #7d8590    Success:       #238636
Warning:       #d29922    Error:         #da3633    Info:          #1f6feb
Accent:        #8b949e    Orange:        #fd7d00
```

## Theme Switching Implementation

### CSS Custom Properties
```css
/* Theme switching via data attribute */
[data-theme="dracula"] {
  --fine-use-bg: #282a36;
  /* ... other colors */
}

[data-theme="monokai"] {
  --fine-use-bg: #272822;
  /* ... other colors */
}

/* Components automatically inherit */
.fine-use-component {
  background-color: var(--fine-use-bg);
  border-color: var(--fine-use-border);
  color: var(--fine-use-text);
}
```

### JavaScript Implementation
```javascript
class FineUseThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('fine-use-theme') || 'dracula';
    this.applyTheme(this.currentTheme);
  }
  
  applyTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    this.currentTheme = themeName;
    localStorage.setItem('fine-use-theme', themeName);
    
    // Dispatch theme change event
    document.dispatchEvent(new CustomEvent('themechange', {
      detail: { theme: themeName }
    }));
  }
  
  getAvailableThemes() {
    return [
      'dracula', 'monokai', 'nord', 'solarized-dark',
      'gruvbox', 'one-dark', 'tokyo-night', 'github-dark'
    ];
  }
  
  getThemeDescription(themeName) {
    const descriptions = {
      'dracula': 'Purple/pink theme popular with developers',
      'monokai': 'Warm retro theme with reduced eye strain',
      'nord': 'Cool Arctic-inspired professional theme',
      'solarized-dark': 'High contrast theme for terminal work',
      'gruvbox': 'Warm earth tones for comfortable viewing',
      'one-dark': 'Popular VS Code theme with balanced colors',
      'tokyo-night': 'Modern vibrant theme with purple accents',
      'github-dark': 'Official GitHub dark styling'
    };
    return descriptions[themeName] || 'Custom theme';
  }
}
```

---

**Remember: In Fine Use, color serves function first. Every hue has a purpose, every shade conveys meaning.**
