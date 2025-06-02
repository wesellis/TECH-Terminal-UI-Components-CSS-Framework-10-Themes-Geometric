# Fine Use Design System - Style Guide

## Core Philosophy

Fine Use is a terminal-inspired interface design philosophy that prioritizes **functional density, real-time data visualization, and uncompromising geometric precision**. Born from trading terminals and system monitoring interfaces, Fine Use represents the pinnacle of information-first design.

## Design Principles

### 1. Functional Density Over Decoration
- Every pixel serves a functional purpose
- Maximum information per screen real estate
- Zero decorative elements
- Beauty emerges from perfect organization

### 2. Geometric Precision
- **Everything rectangular** - no rounded corners, ever
- **Thick, visible borders** (2px minimum, often 4px-8px)
- **Perfect grid alignment** - strict mathematical proportions
- **Sharp corners and clean lines** throughout
- **Boxy switches and controls** - no organic shapes

### 3. Terminal-Inspired Aesthetics
- **Monospace fonts only** (Courier, Fira Code, SF Mono)
- **Dark backgrounds** with high contrast text
- **Color-coded by semantic meaning** - never decorative
- **Real-time data streaming** appearance
- **Dense information layout** like professional terminals

### 4. Strict Layout Rules
- **33% / 33% / 33%** - Three equal columns
- **50% / 50%** - Two equal columns  
- **67% / 33%** - Primary content with sidebar
- **100%** - Full width sections
- **No responsive breakpoints** - proportions stay constant

## Typography System

### Font Families
```css
/* Primary: Monospace only */
font-family: 'Fira Code', 'SF Mono', 'Courier New', monospace;

/* Never use: */
/* Sans-serif, serif, or script fonts */
```

### Typography Scale
```css
/* Headers - Command attention */
.fine-use-h1 { font-size: 3rem; font-weight: 700; }    /* 48px - Main titles */
.fine-use-h2 { font-size: 2rem; font-weight: 700; }    /* 32px - Section headers */
.fine-use-h3 { font-size: 1.5rem; font-weight: 700; }  /* 24px - Subsections */
.fine-use-h4 { font-size: 1.25rem; font-weight: 600; } /* 20px - Component titles */

/* Body text - Information density */
.fine-use-body-lg { font-size: 1.125rem; }  /* 18px - Important data */
.fine-use-body { font-size: 1rem; }         /* 16px - Standard text */
.fine-use-body-sm { font-size: 0.875rem; }  /* 14px - Secondary info */
.fine-use-body-xs { font-size: 0.75rem; }   /* 12px - Metadata */
```

### Typography Rules
1. **Bold for emphasis** - never italic
2. **ALL CAPS for status** labels and headers
3. **Color for semantic meaning** - not decoration
4. **Consistent spacing** - mathematical precision
5. **High contrast ratios** - minimum 7:1

## Color System

### Semantic Color Rules
Every theme must define these semantic colors with consistent meanings:

```css
:root {
  /* Backgrounds */
  --fine-use-bg: /* Main background - darkest */
  --fine-use-surface: /* Component backgrounds - lighter than bg */
  
  /* Structure */
  --fine-use-border: /* All borders and separators */
  
  /* Text */
  --fine-use-text: /* Primary text - highest contrast */
  --fine-use-comment: /* Secondary text - lower contrast */
  
  /* Status Colors - Never change meanings */
  --fine-use-success: /* Green - good/online/success */
  --fine-use-warning: /* Yellow - caution/pending */
  --fine-use-error: /* Red - bad/offline/error */
  --fine-use-info: /* Blue - information/neutral */
  
  /* Accent Colors */
  --fine-use-accent: /* Theme accent - interactive elements */
  --fine-use-orange: /* Section headers and categories */
}
```

### Status Color Meanings (Never Change)
- **Green (Success)**: Online, Good performance, Completed, Operational
- **Yellow (Warning)**: Pending, Moderate performance, Caution, Degraded
- **Red (Error)**: Offline, Critical performance, Failed, Emergency
- **Blue (Info)**: Information, Neutral data, Process indicators
- **Purple/Accent**: Interactive elements, highlights, selections
- **Orange**: Section headers, categories, navigation

### Color Usage Rules
1. **Functional color only** - never decorative
2. **High contrast required** - minimum 7:1 for text
3. **Consistent meanings** across all interfaces
4. **Limited palette** - maximum 7 colors per theme
5. **Test colorblind accessibility**

## Layout System

### Grid Proportions (Strictly Enforced)
```css
/* Three equal columns */
.grid-thirds { display: grid; grid-template-columns: 1fr 1fr 1fr; }

/* Two equal columns */
.grid-halves { display: grid; grid-template-columns: 1fr 1fr; }

/* Primary content with sidebar */
.grid-main-sidebar { display: grid; grid-template-columns: 2fr 1fr; }

/* Full width */
.grid-full { display: grid; grid-template-columns: 1fr; }
```

### Spacing System
```css
/* Mathematical spacing scale */
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-xxl: 3rem;     /* 48px */
```

### Border System
```css
/* Visible, thick borders only */
--border-thin: 2px solid var(--fine-use-border);
--border-thick: 4px solid var(--fine-use-border);
--border-heavy: 8px solid var(--fine-use-border);

/* Never use: */
/* border-radius: any value; */
/* border: 1px; (too thin) */
```

## Component Patterns

### Data Tables
- **Full-width headers** with dark backgrounds
- **Color-coded status columns** for instant recognition
- **Monospace alignment** for numerical data
- **Hover states** for row highlighting only
- **Large, readable text** (16px minimum)
- **Thick borders** to separate sections

### Progress Indicators
- **Rectangular bars** with visible borders
- **Color-coded by performance** thresholds
- **Numerical values** displayed alongside bars
- **Instant visual feedback** on changes
- **No rounded progress bars** - boxy only

### Control Elements
- **Boxy toggle switches** - ON/OFF buttons, not sliders
- **Large, obvious buttons** with clear labels
- **Border-heavy design** for all interactive elements
- **Immediate visual feedback** on interaction
- **Status indicators** with square shapes

### Data Visualization
- **Simple bar charts** and line graphs only
- **Real-time updating** with smooth animations
- **Color-coded by status** or performance
- **No decorative chart elements** - data focus
- **Thick borders** around chart areas

## Interaction Patterns

### Real-time Updates
- **Live data streaming** - content updates automatically
- **Auto-scrolling feeds** - newest data always visible
- **Smooth transitions** between states (200-300ms)
- **No loading spinners** - data appears instantly
- **Highlight new entries** briefly then normalize

### Scrolling Behavior
- **Hidden scrollbars** (`scrollbar-width: none`)
- **Functional scrolling** maintained for usability
- **Auto-scroll to latest** for time-series data
- **Fixed heights** with overflow management
- **Smooth scrolling** performance

### Focus and Hover States
```css
/* Focus - accessibility required */
.fine-use-focusable:focus {
  outline: 2px solid var(--fine-use-accent);
  outline-offset: 2px;
}

/* Hover - subtle feedback */
.fine-use-interactive:hover {
  background-color: var(--fine-use-border);
  transition: background-color 200ms ease;
}
```

## Responsive Behavior

### Core Principle: No Responsive Breakpoints
Fine Use maintains **strict grid proportions** at all screen sizes:

```css
/* This stays constant regardless of screen size */
.grid-main-sidebar {
  grid-template-columns: 2fr 1fr;
}

/* Never do this: */
@media (max-width: 768px) {
  .grid-main-sidebar {
    grid-template-columns: 1fr; /* Breaks proportions */
  }
}
```

### Handling Small Screens
- **Horizontal scrolling** when content exceeds viewport
- **Consistent component sizes** regardless of screen
- **Maintain information density** - never hide content
- **Scale entire interface** rather than reflow

## Anti-Patterns

Fine Use explicitly rejects:

❌ **Rounded corners** (`border-radius`) - breaks geometric precision  
❌ **Subtle animations** or decorative motion - distracts from data  
❌ **Gradient backgrounds** - reduces text contrast  
❌ **Icon-heavy interfaces** - text labels are clearer  
❌ **Responsive breakpoints** - breaks layout proportions  
❌ **Whitespace as decoration** - every space must be functional  
❌ **Soft shadows** or blur effects - terminal aesthetic is sharp  
❌ **Organic shapes** - everything must be rectangular  
❌ **Decorative typography** - monospace only  
❌ **Subtle color variations** - high contrast required  

## Implementation Checklist

### Design Review
- [ ] All corners are sharp (no border-radius)
- [ ] Borders are 2px or thicker
- [ ] Colors follow semantic meanings
- [ ] Typography is monospace only
- [ ] Grid proportions are mathematically precise
- [ ] Contrast ratios meet 7:1 minimum
- [ ] Real-time data updates smoothly
- [ ] Information density is maximized

### Code Review
- [ ] CSS custom properties used for theming
- [ ] No responsive breakpoints implemented
- [ ] Scrollbars hidden but scrolling functional
- [ ] Focus states clearly visible
- [ ] Performance meets 60fps standard
- [ ] Semantic HTML for accessibility
- [ ] All interactions provide immediate feedback

---

**Remember: In Fine Use, beauty emerges from perfect function, not decoration.**
