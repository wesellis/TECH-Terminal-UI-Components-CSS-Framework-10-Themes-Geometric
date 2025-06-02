# Fine Use Design System - Layout Standards

## Overview

Fine Use enforces **strict geometric precision** in all layouts. Every grid, column, and component follows mathematical proportions with **zero exceptions**.

---

## 🔄 EQUAL HEIGHT COLUMN RULE

**CRITICAL RULE**: All columns in a row **MUST** match the height of the tallest column.

### Implementation
```css
/* All grid layouts force equal heights */
.grid-thirds,
.grid-halves,
.grid-main-sidebar {
  align-items: stretch; /* Force equal column heights */
}

/* Column wrapper ensures full height usage */
.grid-column {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.grid-column .fine-use-component {
  flex: 1; /* Fill available height */
  display: flex;
  flex-direction: column;
}
```

### Usage Pattern
```html
<!-- Correct: Use grid-column wrapper -->
<div class="grid-halves">
  <div class="grid-column">
    <div class="fine-use-component">
      <h3>SHORT CONTENT</h3>
      <div class="component-content">
        <p>Brief text here.</p>
        <div class="content-filler">
          <span>Additional space filled</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="grid-column">
    <div class="fine-use-component">
      <h3>LONG CONTENT</h3>
      <div class="component-content">
        <p>Much longer content that extends the height...</p>
        <!-- This column determines the height for both -->
      </div>
    </div>
  </div>
</div>
```

### Content Fillers
When one column has less content, use content fillers:

```css
.content-filler {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fine-use-comment);
  font-style: italic;
  min-height: 4rem;
}
```

---

## 📏 GRID PROPORTIONS

### Three Equal Columns (33% / 33% / 33%)
```css
.grid-thirds {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--space-xl);
  align-items: stretch;
}
```

**Use Cases:**
- Component showcases
- Feature comparisons
- Product listings
- Dashboard metrics

### Two Equal Columns (50% / 50%)
```css
.grid-halves {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: stretch;
}
```

**Use Cases:**
- Side-by-side comparisons
- Before/after displays
- Dual data views
- Split interfaces

### Main Content + Sidebar (67% / 33%)
```css
.grid-main-sidebar {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-xl);
  align-items: stretch;
}
```

**Use Cases:**
- Primary content with secondary info
- Article with table of contents
- Data with controls
- Main view with navigation

### Full Width (100%)
```css
.grid-full {
  display: grid;
  grid-template-columns: 1fr;
}
```

**Use Cases:**
- Hero sections
- Full-width data tables
- Single-focus content
- Terminal interfaces

---

## 📐 SPACING SYSTEM

### Consistent Gap Values
```css
/* Spacing scale */
--space-xs: 0.25rem;   /* 4px - Minimal spacing */
--space-sm: 0.5rem;    /* 8px - Tight spacing */
--space-md: 1rem;      /* 16px - Standard spacing */
--space-lg: 1.5rem;    /* 24px - Comfortable spacing */
--space-xl: 2rem;      /* 32px - Large spacing */
--space-xxl: 3rem;     /* 48px - Major section spacing */
```

### Gap Utilities
```css
.gap-xs { gap: var(--space-xs); }   /* 4px gaps */
.gap-sm { gap: var(--space-sm); }   /* 8px gaps */
.gap-md { gap: var(--space-md); }   /* 16px gaps */
.gap-lg { gap: var(--space-lg); }   /* 24px gaps */
.gap-xl { gap: var(--space-xl); }   /* 32px gaps */
.gap-xxl { gap: var(--space-xxl); } /* 48px gaps */
```

### Usage Examples
```html
<!-- Default large spacing -->
<div class="grid-thirds">
  <!-- gap: 32px (--space-xl) -->
</div>

<!-- Tight spacing for related items -->
<div class="grid-halves gap-md">
  <!-- gap: 16px (--space-md) -->
</div>

<!-- Major section separation -->
<div class="grid-full gap-xxl">
  <!-- gap: 48px (--space-xxl) -->
</div>
```

---

## 🚫 LAYOUT ANTI-PATTERNS

### ❌ Unequal Heights
```html
<!-- WRONG: Different heights -->
<div class="grid-halves">
  <div class="fine-use-component">
    <p>Short content</p>
  </div>
  <div class="fine-use-component">
    <p>Much longer content that makes this column taller...</p>
  </div>
</div>
```

### ❌ Inconsistent Spacing
```html
<!-- WRONG: Custom spacing values -->
<div style="gap: 15px;"> <!-- Use gap utilities instead -->
<div style="margin: 10px;"> <!-- Use spacing variables -->
```

### ❌ Responsive Breakpoints
```css
/* WRONG: Breaking proportions */
@media (max-width: 768px) {
  .grid-halves {
    grid-template-columns: 1fr; /* Destroys 50/50 proportion */
  }
}
```

### ❌ Rounded Corners
```css
/* WRONG: Violates geometric precision */
.component {
  border-radius: 8px; /* Never use border-radius */
}
```

---

## ✅ LAYOUT BEST PRACTICES

### 1. **Always Use Grid Wrappers**
```html
<div class="grid-halves">
  <div class="grid-column">
    <div class="fine-use-component">
      <!-- Content -->
    </div>
  </div>
  <div class="grid-column">
    <div class="fine-use-component">
      <!-- Content -->
    </div>
  </div>
</div>
```

### 2. **Fill Empty Space Meaningfully**
```html
<div class="component-content">
  <div class="actual-content">
    <!-- Main content -->
  </div>
  <div class="content-filler">
    <span>Space for future expansion</span>
  </div>
</div>
```

### 3. **Maintain Visual Hierarchy**
```css
/* Clear component boundaries */
.fine-use-component {
  border: 2px solid var(--fine-use-border);
  padding: var(--space-lg);
}

/* Consistent header spacing */
.fine-use-h3 {
  margin-bottom: var(--space-md);
}
```

### 4. **Use Semantic Gap Sizes**
```html
<!-- Related items: small gaps -->
<div class="grid-thirds gap-md">

<!-- Independent sections: large gaps -->  
<div class="grid-halves gap-xl">

<!-- Major page sections: extra large gaps -->
<div class="grid-full gap-xxl">
```

---

## 📱 NO RESPONSIVE DESIGN RULE

Fine Use **explicitly rejects responsive breakpoints** that change proportions:

### ✅ Allowed: Maintain Proportions
```css
/* Scale entire interface */
@media (max-width: 1200px) {
  .demo-container {
    max-width: 1000px; /* Scale down but keep proportions */
  }
}
```

### ❌ Forbidden: Change Proportions
```css
/* Never change grid proportions */
@media (max-width: 768px) {
  .grid-thirds {
    grid-template-columns: 1fr; /* WRONG */
  }
}
```

### Philosophy
> "If content doesn't fit, make the screen bigger or scroll horizontally. Never compromise geometric precision for convenience."

---

## 🔧 DEBUGGING LAYOUT ISSUES

### Visual Grid Debugging
```css
/* Temporarily add for debugging */
.grid-thirds,
.grid-halves,
.grid-main-sidebar {
  outline: 2px dashed red;
}

.grid-column {
  outline: 1px solid blue;
}

.fine-use-component {
  outline: 1px solid green;
}
```

### Height Debugging
```css
/* Check if columns are equal height */
.grid-column {
  background: rgba(255, 0, 0, 0.1); /* Temporary background */
  min-height: 20rem; /* Ensure visible height */
}
```

### Common Issues
1. **Forgetting `grid-column` wrapper** → Unequal heights
2. **Not using `component-content`** → Content doesn't fill
3. **Custom spacing values** → Inconsistent rhythm
4. **Missing `content-filler`** → Awkward empty space

---

## 📊 LAYOUT CHECKLIST

### Before Ship:
- [ ] All columns in rows are equal height
- [ ] All spacing uses design system variables
- [ ] No rounded corners anywhere
- [ ] Grid proportions maintained at all sizes
- [ ] Content fillers used for short content
- [ ] Consistent gap sizes within sections
- [ ] No responsive breakpoints changing proportions
- [ ] Components have proper borders and padding

---

**Remember: In Fine Use, geometric precision is non-negotiable. Every layout must follow these rules exactly.**

*Last updated: June 2025*