# Fine Use Image Components

## Image Display Components

### 1. System Diagram Viewer
```html
<div class="fine-use-diagram-viewer">
  <div class="diagram-header">
    <h3>NETWORK TOPOLOGY</h3>
    <button class="diagram-fullscreen">FULLSCREEN</button>
  </div>
  <div class="diagram-container">
    <img src="topology.svg" alt="Network diagram" class="system-diagram">
  </div>
</div>
```

```css
.fine-use-diagram-viewer {
  border: 4px solid var(--fine-use-border);
  background-color: var(--fine-use-surface);
}

.system-diagram {
  width: 100%;
  height: auto;
  border: 2px solid var(--fine-use-border);
  background-color: var(--fine-use-bg);
  filter: contrast(1.2);
}
```

### 2. User Avatar System
```html
<div class="fine-use-avatar-grid">
  <div class="user-avatar" data-status="online">
    <span class="avatar-initials">JD</span>
    <div class="avatar-status"></div>
  </div>
  <div class="user-info">
    <div class="user-name">JOHN DOE</div>
    <div class="user-role">SYSTEM ADMIN</div>
  </div>
</div>
```

```css
.fine-use-avatar-grid {
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: var(--space-lg);
  align-items: center;
}

.user-avatar {
  position: relative;
  width: 4rem;
  height: 4rem;
  background-color: var(--fine-use-accent);
  border: 2px solid var(--fine-use-border);
}

.avatar-initials {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--fine-use-bg);
}

.avatar-status {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 1rem;
  height: 1rem;
  background-color: var(--fine-use-success);
  border: 2px solid var(--fine-use-border);
}

.user-avatar[data-status="offline"] .avatar-status {
  background-color: var(--fine-use-error);
}
```

### 3. File Preview Component
```html
<div class="fine-use-file-preview">
  <div class="preview-header">
    <span class="file-type">IMAGE</span>
    <span class="file-name">system-chart.png</span>
    <button class="preview-close">×</button>
  </div>
  <div class="preview-content">
    <img src="chart.png" alt="System performance chart" class="preview-image">
  </div>
  <div class="preview-metadata">
    <div class="metadata-item">
      <span class="metadata-label">SIZE:</span>
      <span class="metadata-value">1.2 MB</span>
    </div>
    <div class="metadata-item">
      <span class="metadata-label">FORMAT:</span>
      <span class="metadata-value">PNG</span>
    </div>
    <div class="metadata-item">
      <span class="metadata-label">DIMENSIONS:</span>
      <span class="metadata-value">1920×1080</span>
    </div>
  </div>
</div>
```

### 4. Logo/Brand Component
```html
<!-- Fine Use approach: Text-based logos -->
<div class="fine-use-brand">
  <div class="brand-symbol">
    <div class="brand-grid">
      <div class="grid-block"></div>
      <div class="grid-block active"></div>
      <div class="grid-block"></div>
      <div class="grid-block active"></div>
    </div>
  </div>
  <div class="brand-text">
    <div class="brand-name">SYSTEM CONTROL</div>
    <div class="brand-version">v2.1.0</div>
  </div>
</div>
```

```css
.fine-use-brand {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.brand-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
  width: 2rem;
  height: 2rem;
}

.grid-block {
  background-color: var(--fine-use-border);
}

.grid-block.active {
  background-color: var(--fine-use-accent);
}
```

## Image Processing Guidelines

### For Existing Images
1. **High Contrast Processing**
   ```css
   .fine-use-image-processed {
     filter: contrast(1.3) brightness(0.8) saturate(0.7);
   }
   ```

2. **Terminal-Style Dithering** (when appropriate)
   ```css
   .terminal-dithered {
     filter: contrast(2) brightness(0.6);
     image-rendering: pixelated;
   }
   ```

### Image Replacement Strategies
1. **Replace icons with text labels**
2. **Use geometric shapes instead of images**
3. **Convert charts to live data visualizations**
4. **Replace photos with initials or roles**

## Fine Use Philosophy on Images

Fine Use takes a **function-first approach** to images:

### 1. **Minimal Image Usage**
Images are rare and serve specific functional purposes only.

### 2. **Functional Image Categories**
- **Status Icons**: Simple geometric shapes (squares, triangles)
- **Data Visualization**: Charts and graphs (no decorative imagery)
- **System Diagrams**: Network topology, architecture diagrams
- **User Avatars**: Rectangular blocks with initials rather than photos

### 3. **Image Implementation Patterns**
```html
<!-- Status indicators - prefer text over images -->
<div class="status-indicator status-online">
  <div class="status-box"></div>
  <span class="status-text">ONLINE</span>
</div>

<!-- When images are necessary - functional only -->
<div class="system-diagram">
  <img src="network-topology.svg" 
       alt="Network topology diagram" 
       class="fine-use-diagram">
</div>

<!-- Avatar replacement - geometric initials -->
<div class="user-avatar">
  <span class="avatar-initials">JD</span>
</div>
```

### 4. **Image Styling Rules**
```css
/* All images follow geometric principles */
.fine-use-diagram {
  border: 4px solid var(--fine-use-border);
  background-color: var(--fine-use-surface);
  padding: var(--space-lg);
  filter: contrast(1.2) brightness(0.9); /* Terminal-like processing */
}

/* Replace decorative images with geometric shapes */
.avatar-initials {
  width: 4rem;
  height: 4rem;
  background-color: var(--fine-use-accent);
  color: var(--fine-use-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
}
```

### 5. **Anti-Pattern: What Fine Use Avoids**
- ❌ Decorative hero images
- ❌ Background images for styling
- ❌ Rounded profile pictures
- ❌ Icon-heavy interfaces
- ❌ Image galleries or carousels
- ❌ Subtle image overlays

## Implementation Priority
1. **User Avatar System** - Most commonly needed
2. **System Diagram Viewer** - For technical documentation
3. **File Preview** - For file management interfaces
4. **Geometric Brand Components** - Logo alternatives
