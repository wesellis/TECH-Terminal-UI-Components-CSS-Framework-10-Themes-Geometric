}

// Usage
const logTerminal = new LogTerminal(
  document.querySelector('.fine-use-log-terminal'),
  { maxLogs: 50, autoScroll: true }
);

// Add logs programmatically
logTerminal.addLog('INFO', 'Application started successfully');
logTerminal.addLog('WARN', 'High CPU usage detected');

// Start demo mode
logTerminal.startDemo();
```

## Theme Integration

### Theme Switching System

#### HTML Controls
```html
<div class="theme-selector">
  <label class="theme-label">THEME:</label>
  <select id="theme-select" class="theme-dropdown">
    <option value="dracula">Dracula</option>
    <option value="monokai">Monokai</option>
    <option value="nord">Nord</option>
  </select>
</div>
```

#### JavaScript Theme Manager
```javascript
class ThemeManager {
  constructor() {
    this.themes = ['dracula', 'monokai', 'nord'];
    this.currentTheme = this.loadTheme();
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.setupControls();
    this.loadThemeCSS();
  }

  setupControls() {
    const selector = document.getElementById('theme-select');
    if (selector) {
      selector.value = this.currentTheme;
      selector.addEventListener('change', (e) => {
        this.setTheme(e.target.value);
      });
    }
  }

  setTheme(themeName) {
    if (this.themes.includes(themeName)) {
      this.currentTheme = themeName;
      this.applyTheme(themeName);
      this.saveTheme();
      this.loadThemeCSS();
    }
  }

  applyTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    
    // Dispatch theme change event for components to react
    document.dispatchEvent(new CustomEvent('themechange', {
      detail: { theme: themeName, previousTheme: this.currentTheme }
    }));
  }

  loadThemeCSS() {
    // Remove existing theme CSS
    const existingTheme = document.querySelector('link[data-theme-css]');
    if (existingTheme) {
      existingTheme.remove();
    }

    // Load new theme CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `themes/${this.currentTheme}.css`;
    link.setAttribute('data-theme-css', 'true');
    document.head.appendChild(link);
  }

  saveTheme() {
    localStorage.setItem('fine-use-theme', this.currentTheme);
  }

  loadTheme() {
    return localStorage.getItem('fine-use-theme') || 'dracula';
  }
}

// Initialize theme manager
const themeManager = new ThemeManager();
```

## Real-time Data Integration

### WebSocket Connection
```javascript
class RealTimeDataManager {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectDelay = 1000;
    
    this.subscribers = new Map();
    
    this.connect();
  }

  connect() {
    try {
      this.ws = new WebSocket(this.wsUrl);
      
      this.ws.onopen = () => {
        console.log('WebSocket connected');
        this.reconnectAttempts = 0;
      };
      
      this.ws.onmessage = (event) => {
        this.handleMessage(JSON.parse(event.data));
      };
      
      this.ws.onclose = () => {
        console.log('WebSocket disconnected');
        this.attemptReconnect();
      };
      
      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
      
    } catch (error) {
      console.error('Failed to connect:', error);
      this.attemptReconnect();
    }
  }

  handleMessage(data) {
    const { type, payload } = data;
    
    if (this.subscribers.has(type)) {
      this.subscribers.get(type).forEach(callback => {
        try {
          callback(payload);
        } catch (error) {
          console.error(`Error in subscriber for ${type}:`, error);
        }
      });
    }
  }

  subscribe(type, callback) {
    if (!this.subscribers.has(type)) {
      this.subscribers.set(type, new Set());
    }
    this.subscribers.get(type).add(callback);
    
    // Return unsubscribe function
    return () => {
      const typeSubscribers = this.subscribers.get(type);
      if (typeSubscribers) {
        typeSubscribers.delete(callback);
        if (typeSubscribers.size === 0) {
          this.subscribers.delete(type);
        }
      }
    };
  }

  attemptReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);
      
      setTimeout(() => {
        console.log(`Reconnecting... (attempt ${this.reconnectAttempts})`);
        this.connect();
      }, delay);
    }
  }

  send(data) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    }
  }
}

// Usage
const dataManager = new RealTimeDataManager('wss://your-api.com/ws');

// Subscribe to system metrics
dataManager.subscribe('system_metrics', (data) => {
  cpuProgress.animate(data.cpu);
  memoryProgress.animate(data.memory);
});

// Subscribe to log events
dataManager.subscribe('log_event', (data) => {
  logTerminal.addLog(data.level, data.message);
});
```

### Polling Fallback
```javascript
class PollingDataManager {
  constructor(apiUrl, interval = 2000) {
    this.apiUrl = apiUrl;
    this.interval = interval;
    this.isPolling = false;
    this.subscribers = new Map();
  }

  start() {
    if (this.isPolling) return;
    
    this.isPolling = true;
    this.poll();
  }

  stop() {
    this.isPolling = false;
  }

  async poll() {
    if (!this.isPolling) return;

    try {
      const response = await fetch(`${this.apiUrl}/metrics`);
      const data = await response.json();
      
      this.notifySubscribers('metrics_update', data);
      
    } catch (error) {
      console.error('Polling error:', error);
    }

    if (this.isPolling) {
      setTimeout(() => this.poll(), this.interval);
    }
  }

  subscribe(type, callback) {
    if (!this.subscribers.has(type)) {
      this.subscribers.set(type, new Set());
    }
    this.subscribers.get(type).add(callback);
    
    return () => {
      const typeSubscribers = this.subscribers.get(type);
      if (typeSubscribers) {
        typeSubscribers.delete(callback);
      }
    };
  }

  notifySubscribers(type, data) {
    if (this.subscribers.has(type)) {
      this.subscribers.get(type).forEach(callback => callback(data));
    }
  }
}
```

## Performance Optimization

### Efficient Rendering
```javascript
class PerformantRenderer {
  constructor() {
    this.updateQueue = new Set();
    this.isUpdating = false;
  }

  scheduleUpdate(component) {
    this.updateQueue.add(component);
    
    if (!this.isUpdating) {
      this.isUpdating = true;
      requestAnimationFrame(() => this.processUpdates());
    }
  }

  processUpdates() {
    this.updateQueue.forEach(component => {
      if (component.shouldUpdate && component.shouldUpdate()) {
        component.render();
      }
    });
    
    this.updateQueue.clear();
    this.isUpdating = false;
  }
}

// Usage in components
class OptimizedDataTable {
  constructor(element) {
    this.element = element;
    this.lastDataHash = null;
    this.renderer = new PerformantRenderer();
  }

  shouldUpdate() {
    const currentHash = this.hashData(this.data);
    if (currentHash !== this.lastDataHash) {
      this.lastDataHash = currentHash;
      return true;
    }
    return false;
  }

  updateData(newData) {
    this.data = newData;
    this.renderer.scheduleUpdate(this);
  }

  hashData(data) {
    return JSON.stringify(data);
  }
}
```

### Virtual Scrolling for Large Datasets
```javascript
class VirtualScrollList {
  constructor(container, options = {}) {
    this.container = container;
    this.itemHeight = options.itemHeight || 50;
    this.buffer = options.buffer || 5;
    this.data = [];
    
    this.visibleStart = 0;
    this.visibleEnd = 0;
    this.totalHeight = 0;
    
    this.setupScrolling();
  }

  setupScrolling() {
    this.container.addEventListener('scroll', () => {
      this.updateVisibleRange();
      this.render();
    });
  }

  setData(data) {
    this.data = data;
    this.totalHeight = data.length * this.itemHeight;
    this.updateVisibleRange();
    this.render();
  }

  updateVisibleRange() {
    const scrollTop = this.container.scrollTop;
    const containerHeight = this.container.clientHeight;
    
    this.visibleStart = Math.max(0, 
      Math.floor(scrollTop / this.itemHeight) - this.buffer
    );
    
    this.visibleEnd = Math.min(this.data.length - 1,
      Math.ceil((scrollTop + containerHeight) / this.itemHeight) + this.buffer
    );
  }

  render() {
    const visibleItems = this.data.slice(this.visibleStart, this.visibleEnd + 1);
    
    this.container.innerHTML = `
      <div style="height: ${this.visibleStart * this.itemHeight}px;"></div>
      ${visibleItems.map((item, index) => 
        this.renderItem(item, this.visibleStart + index)
      ).join('')}
      <div style="height: ${(this.data.length - this.visibleEnd - 1) * this.itemHeight}px;"></div>
    `;
  }

  renderItem(item, index) {
    return `
      <div class="virtual-item" style="height: ${this.itemHeight}px;">
        ${item.content}
      </div>
    `;
  }
}
```

## Accessibility Implementation

### Keyboard Navigation
```javascript
class KeyboardNavigationManager {
  constructor(container) {
    this.container = container;
    this.focusableElements = [];
    this.currentFocusIndex = -1;
    
    this.setupKeyboardHandlers();
    this.updateFocusableElements();
  }

  setupKeyboardHandlers() {
    this.container.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'Tab':
          e.preventDefault();
          this.handleTab(e.shiftKey);
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          e.preventDefault();
          this.handleArrowNavigation(e.key === 'ArrowUp' ? -1 : 1);
          break;
        case 'Enter':
        case ' ':
          this.handleActivation(e);
          break;
        case 'Escape':
          this.handleEscape(e);
          break;
      }
    });
  }

  updateFocusableElements() {
    this.focusableElements = Array.from(
      this.container.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(el => !el.disabled && this.isVisible(el));
  }

  handleTab(reverse = false) {
    this.updateFocusableElements();
    
    if (this.focusableElements.length === 0) return;
    
    if (reverse) {
      this.currentFocusIndex = this.currentFocusIndex <= 0 
        ? this.focusableElements.length - 1 
        : this.currentFocusIndex - 1;
    } else {
      this.currentFocusIndex = (this.currentFocusIndex + 1) % this.focusableElements.length;
    }
    
    this.focusableElements[this.currentFocusIndex].focus();
  }

  isVisible(element) {
    return element.offsetWidth > 0 && element.offsetHeight > 0;
  }
}
```

### Screen Reader Support
```html
<!-- Proper ARIA labels and roles -->
<div class="fine-use-data-table" role="table" aria-label="System Services Status">
  <div class="table-header" role="caption">
    <h3 id="table-title">SERVICE MONITORING MATRIX</h3>
  </div>
  <table aria-labelledby="table-title">
    <thead role="rowgroup">
      <tr role="row">
        <th role="columnheader" scope="col">Service ID</th>
        <th role="columnheader" scope="col">Name</th>
        <th role="columnheader" scope="col">Status</th>
      </tr>
    </thead>
    <tbody role="rowgroup">
      <tr role="row">
        <td role="gridcell">SRV001</td>
        <td role="gridcell">auth-gateway</td>
        <td role="gridcell">
          <span class="status-badge" aria-label="Service is online">ONLINE</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Live regions for dynamic content -->
<div id="live-announcements" aria-live="polite" aria-atomic="false" class="sr-only">
  <!-- Screen reader announcements appear here -->
</div>

<!-- Progress indicators with proper labels -->
<div class="fine-use-progress-item" role="progressbar" 
     aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" 
     aria-label="CPU Usage">
  <label class="progress-label">CPU LOAD</label>
  <div class="progress-container">
    <div class="progress-bar" style="width: 75%;"></div>
  </div>
  <span class="progress-value">75%</span>
</div>
```

### Focus Management
```css
/* High contrast focus indicators */
.fine-use-focusable:focus {
  outline: 3px solid var(--fine-use-accent);
  outline-offset: 2px;
  background-color: var(--fine-use-surface);
}

/* Focus within for containers */
.fine-use-component:focus-within {
  border-color: var(--fine-use-accent);
}

/* Skip links for keyboard users */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--fine-use-accent);
  color: var(--fine-use-bg);
  padding: 8px;
  text-decoration: none;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 6px;
}

/* Screen reader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## Deployment Considerations

### Build Process
```javascript
// webpack.config.js for bundling
module.exports = {
  entry: './src/fine-use-app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'fine-use-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'fine-use-styles.css'
    })
  ]
};
```

### Performance Checklist
- [ ] CSS custom properties for efficient theming
- [ ] requestAnimationFrame for smooth animations
- [ ] Virtual scrolling for large datasets
- [ ] Debounced resize handlers
- [ ] Lazy loading for non-critical components
- [ ] Service worker for offline functionality
- [ ] Compressed assets and fonts
- [ ] Critical CSS inlined

### Browser Testing
Test across all supported browsers:
- Chrome 90+ (Chromium-based)
- Firefox 88+ (Gecko)
- Safari 14+ (WebKit)
- Edge 90+ (Chromium-based)

### Accessibility Testing
- [ ] WAVE web accessibility evaluation
- [ ] axe-core automated testing
- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Keyboard-only navigation
- [ ] High contrast mode testing
- [ ] Color contrast validation

---

## Common Patterns & Best Practices

### Error Handling
```javascript
class ErrorHandler {
  static handleComponentError(component, error) {
    console.error(`Error in ${component.constructor.name}:`, error);
    
    // Show user-friendly error in the interface
    const errorEl = document.createElement('div');
    errorEl.className = 'fine-use-error-message';
    errorEl.innerHTML = `
      <span class="error-icon">⚠</span>
      <span class="error-text">Component Error: ${error.message}</span>
    `;
    
    component.element.appendChild(errorEl);
    
    // Log to monitoring service
    this.logError(component, error);
  }
  
  static logError(component, error) {
    // Send to your monitoring service
    fetch('/api/errors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        component: component.constructor.name,
        error: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      })
    }).catch(console.error);
  }
}
```

### Component Lifecycle
```javascript
class FineUseBaseComponent {
  constructor(element, options = {}) {
    this.element = element;
    this.options = { ...this.defaultOptions, ...options };
    this.state = {};
    this.isDestroyed = false;
    
    this.init();
  }
  
  get defaultOptions() {
    return {
      theme: 'dracula',
      realTime: false,
      updateInterval: 2000
    };
  }
  
  init() {
    try {
      this.setupElements();
      this.bindEvents();
      this.render();
      
      if (this.options.realTime) {
        this.startRealTimeUpdates();
      }
      
    } catch (error) {
      ErrorHandler.handleComponentError(this, error);
    }
  }
  
  setupElements() {
    // Override in subclasses
  }
  
  bindEvents() {
    // Override in subclasses
  }
  
  render() {
    // Override in subclasses
  }
  
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  
  destroy() {
    this.isDestroyed = true;
    this.stopRealTimeUpdates();
    this.unbindEvents();
    this.element.remove();
  }
  
  startRealTimeUpdates() {
    this.updateInterval = setInterval(() => {
      if (!this.isDestroyed) {
        this.update();
      }
    }, this.options.updateInterval);
  }
  
  stopRealTimeUpdates() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }
  
  update() {
    // Override in subclasses for real-time updates
  }
}
```

This implementation guide provides everything needed to build production-ready Fine Use interfaces. The system is designed for scalability, accessibility, and performance while maintaining the core aesthetic principles.

---

**Remember: Fine Use prioritizes function over form, but achieves beauty through perfect execution of functional design.**
