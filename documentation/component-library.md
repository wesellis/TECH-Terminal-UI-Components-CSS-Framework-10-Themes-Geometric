# Fine Use Component Library

## Overview

This document defines all components in the Fine Use Design System. Each component follows the core principles of geometric precision, functional density, and terminal aesthetics.

## Base Component Structure

All Fine Use components share this foundation:

```css
.fine-use-component {
  /* Geometric precision */
  border: 2px solid var(--fine-use-border);
  border-radius: 0; /* Never rounded */
  
  /* Terminal aesthetics */
  background-color: var(--fine-use-surface);
  font-family: 'Fira Code', monospace;
  
  /* Functional spacing */
  padding: var(--space-lg);
  margin: 0;
}
```

## Data Display Components

### Data Table

The foundation of Fine Use interfaces - dense, readable, real-time data.

#### HTML Structure
```html
<div class="fine-use-data-table">
  <table>
    <thead>
      <tr>
        <th>SERVICE ID</th>
        <th>NAME</th>
        <th>STATUS</th>
        <th>CPU</th>
        <th>MEMORY</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="service-id">SRV001</td>
        <td>auth-gateway</td>
        <td><span class="status-indicator status-online">ONLINE</span></td>
        <td class="metric-value metric-success">23%</td>
        <td class="metric-value metric-warning">78%</td>
      </tr>
    </tbody>
  </table>
</div>
```

#### CSS Implementation
```css
.fine-use-data-table {
  border: 2px solid var(--fine-use-border);
  background-color: var(--fine-use-surface);
  overflow-x: hidden;
}

.fine-use-data-table table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.125rem;
}

.fine-use-data-table thead {
  background-color: var(--fine-use-border);
}

.fine-use-data-table th {
  padding: 1rem 1.5rem;
  text-align: left;
  font-weight: 700;
  color: var(--fine-use-text);
  border: none;
}

.fine-use-data-table td {
  padding: 1rem 1.5rem;
  border-top: 2px solid var(--fine-use-border);
  color: var(--fine-use-text);
}

.fine-use-data-table tr:hover {
  background-color: var(--fine-use-border);
}

/* Status indicators */
.status-indicator {
  padding: 0.5rem 1rem;
  font-weight: 700;
  font-size: 0.875rem;
}

.status-online {
  background-color: var(--fine-use-success);
  color: var(--fine-use-bg);
}

.status-warning {
  background-color: var(--fine-use-warning);
  color: var(--fine-use-bg);
}

.status-error {
  background-color: var(--fine-use-error);
  color: var(--fine-use-bg);
}

/* Metric values */
.metric-value {
  font-weight: 700;
  font-size: 1.25rem;
}

.metric-success { color: var(--fine-use-success); }
.metric-warning { color: var(--fine-use-warning); }
.metric-error { color: var(--fine-use-error); }
```

#### JavaScript Functionality
```javascript
class FineUseDataTable {
  constructor(element, options = {}) {
    this.element = element;
    this.data = options.data || [];
    this.realTime = options.realTime || false;
    this.updateInterval = options.updateInterval || 2000;
    
    this.init();
  }
  
  init() {
    this.render();
    if (this.realTime) {
      this.startRealTimeUpdates();
    }
  }
  
  render() {
    const tbody = this.element.querySelector('tbody');
    tbody.innerHTML = this.data.map(row => this.renderRow(row)).join('');
  }
  
  renderRow(row) {
    return `
      <tr>
        <td class="service-id">${row.id}</td>
        <td>${row.name}</td>
        <td><span class="status-indicator status-${row.status.toLowerCase()}">${row.status}</span></td>
        <td class="metric-value metric-${this.getMetricClass(row.cpu)}">${row.cpu}%</td>
        <td class="metric-value metric-${this.getMetricClass(row.memory)}">${row.memory}%</td>
      </tr>
    `;
  }
  
  getMetricClass(value) {
    if (value >= 85) return 'error';
    if (value >= 70) return 'warning';
    return 'success';
  }
  
  startRealTimeUpdates() {
    setInterval(() => {
      this.updateData();
      this.render();
    }, this.updateInterval);
  }
}
```

### Progress Bars

Rectangular progress indicators for system metrics and operations.

#### HTML Structure
```html
<div class="fine-use-progress-group">
  <div class="fine-use-progress-item">
    <label class="progress-label">CPU LOAD</label>
    <div class="progress-bar-container">
      <div class="progress-bar" style="width: 75%;" data-status="warning"></div>
    </div>
    <span class="progress-value">75%</span>
  </div>
</div>
```

#### CSS Implementation
```css
.fine-use-progress-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.fine-use-progress-item {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.progress-label {
  width: 12rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--fine-use-text);
}

.progress-bar-container {
  flex: 1;
  height: 1.5rem;
  border: 2px solid var(--fine-use-border);
  background-color: var(--fine-use-bg);
  position: relative;
}

.progress-bar {
  height: 100%;
  transition: width 300ms ease;
}

.progress-bar[data-status="success"] {
  background-color: var(--fine-use-success);
}

.progress-bar[data-status="warning"] {
  background-color: var(--fine-use-warning);
}

.progress-bar[data-status="error"] {
  background-color: var(--fine-use-error);
}

.progress-value {
  width: 5rem;
  text-align: right;
  font-size: 1.125rem;
  font-weight: 700;
}
```

### Real-time Graphs

Simple bar charts for system performance visualization.

#### HTML Structure
```html
<div class="fine-use-graph">
  <div class="graph-header">
    <h3>CPU USAGE</h3>
    <span class="current-value">67%</span>
  </div>
  <div class="graph-container">
    <div class="graph-bars" id="cpu-graph"></div>
  </div>
</div>
```

#### CSS Implementation
```css
.fine-use-graph {
  border: 2px solid var(--fine-use-border);
  background-color: var(--fine-use-surface);
  padding: var(--space-lg);
}

.graph-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-lg);
}

.graph-header h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--fine-use-text);
  margin: 0;
}

.current-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--fine-use-success);
}

.graph-container {
  height: 6rem;
  border: 2px solid var(--fine-use-border);
  background-color: var(--fine-use-bg);
  padding: var(--space-sm);
}

.graph-bars {
  display: flex;
  align-items: flex-end;
  height: 100%;
  gap: 2px;
}

.graph-bar {
  flex: 1;
  background-color: var(--fine-use-success);
  transition: height 300ms ease;
  min-height: 2px;
}
```

## Input Components

### Boxy Toggle Switches

ON/OFF controls that maintain rectangular aesthetics.

#### HTML Structure
```html
<div class="fine-use-toggle">
  <label class="toggle-label">AUTO SCALING</label>
  <div class="toggle-status">ON</div>
  <div class="toggle-switch">
    <button class="toggle-button toggle-on active">ON</button>
    <button class="toggle-button toggle-off">OFF</button>
  </div>
</div>
```

#### CSS Implementation
```css
.fine-use-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-lg);
  border: 2px solid var(--fine-use-border);
  background-color: var(--fine-use-bg);
}

.toggle-label {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--fine-use-text);
}

.toggle-status {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--fine-use-success);
}

.toggle-switch {
  display: flex;
  border: 2px solid var(--fine-use-border);
}

.toggle-button {
  width: 3rem;
  height: 2rem;
  border: none;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 200ms ease;
}

.toggle-on.active {
  background-color: var(--fine-use-success);
  color: var(--fine-use-bg);
}

.toggle-off.active {
  background-color: var(--fine-use-error);
  color: var(--fine-use-bg);
}

.toggle-button:not(.active) {
  background-color: var(--fine-use-surface);
  color: var(--fine-use-comment);
}
```

### Action Buttons

Large, obvious buttons for system operations with grid-based layouts.

#### HTML Structure
```html
<!-- Single buttons -->
<button class="fine-use-button" data-variant="primary">
  REFRESH SYSTEM
</button>

<button class="fine-use-button" data-variant="danger">
  EMERGENCY SHUTDOWN
</button>

<!-- Button grid layouts -->
<div class="button-grid button-grid-2x2">
  <button class="fine-use-button grid-button" data-variant="primary">
    START SERVICES
  </button>
  <button class="fine-use-button grid-button">
    STOP PROCESSES
  </button>
  <button class="fine-use-button grid-button">
    RESTART SYSTEM
  </button>
  <button class="fine-use-button grid-button" data-variant="danger">
    EMERGENCY SHUTDOWN
  </button>
</div>

<!-- Vertical button stack -->
<div class="button-grid button-grid-1x4">
  <button class="fine-use-button grid-button" data-variant="primary">
    PRIMARY ACTION
  </button>
  <button class="fine-use-button grid-button">
    SECONDARY ACTION
  </button>
  <button class="fine-use-button grid-button">
    TERTIARY ACTION
  </button>
  <button class="fine-use-button grid-button" data-variant="danger">
    DANGER ACTION
  </button>
</div>
```

#### CSS Implementation
```css
.fine-use-button {
  padding: var(--space-lg) var(--space-xl);
  border: 2px solid var(--fine-use-border);
  background-color: var(--fine-use-surface);
  color: var(--fine-use-text);
  font-family: inherit;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 200ms ease;
}

.fine-use-button:hover {
  background-color: var(--fine-use-border);
}

.fine-use-button[data-variant="primary"] {
  background-color: var(--fine-use-success);
  color: var(--fine-use-bg);
  border-color: var(--fine-use-border);
}

.fine-use-button[data-variant="danger"] {
  background-color: var(--fine-use-error);
  color: var(--fine-use-bg);
  border-color: var(--fine-use-error);
}

.fine-use-button:focus {
  outline: 2px solid var(--fine-use-accent);
  outline-offset: 2px;
}

/* Button Grid System */
.button-grid {
  display: grid;
  gap: var(--space-md);
  width: 100%;
}

.button-grid-2x2 {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.button-grid-1x4 {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
}

.fine-use-button.grid-button {
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-md);
}
```

## Layout Components

### Log Terminal

Auto-scrolling terminal for real-time data streams.

#### HTML Structure
```html
<div class="fine-use-log-terminal">
  <div class="terminal-header">
    <h3>SYSTEM EVENT LOG</h3>
  </div>
  <div class="terminal-content" id="log-content">
    <!-- Log entries populated by JavaScript -->
  </div>
</div>
```

#### CSS Implementation
```css
.fine-use-log-terminal {
  border: 2px solid var(--fine-use-border);
  background-color: var(--fine-use-surface);
}

.terminal-header {
  padding: var(--space-lg);
  border-bottom: 2px solid var(--fine-use-border);
  background-color: var(--fine-use-border);
}

.terminal-header h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--fine-use-text);
}

.terminal-content {
  height: 20rem;
  overflow-y: auto;
  padding: var(--space-lg);
  background-color: var(--fine-use-bg);
  
  /* Hide scrollbars but keep functionality */
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.terminal-content::-webkit-scrollbar {
  display: none;
}

.log-entry {
  margin-bottom: var(--space-sm);
  padding: var(--space-sm);
  border-left: 4px solid var(--fine-use-success);
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
}

.log-entry.new {
  background-color: var(--fine-use-surface);
}

.log-entry.error {
  border-left-color: var(--fine-use-error);
}

.log-entry.warning {
  border-left-color: var(--fine-use-warning);
}

.log-timestamp {
  color: var(--fine-use-comment);
}

.log-level {
  display: inline-block;
  padding: 0.125rem 0.5rem;
  font-weight: 700;
  font-size: 0.75rem;
  margin: 0 var(--space-sm);
}

.log-level.info {
  background-color: var(--fine-use-success);
  color: var(--fine-use-bg);
}

.log-level.error {
  background-color: var(--fine-use-error);
  color: var(--fine-use-bg);
}

.log-level.warning {
  background-color: var(--fine-use-warning);
  color: var(--fine-use-bg);
}

.log-message {
  color: var(--fine-use-text);
}
```

#### JavaScript Implementation
```javascript
class FineUseLogTerminal {
  constructor(element, options = {}) {
    this.element = element;
    this.content = element.querySelector('.terminal-content');
    this.logs = [];
    this.maxLogs = options.maxLogs || 100;
    this.autoScroll = options.autoScroll !== false;
  }
  
  addLog(level, message) {
    const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
    const log = { timestamp, level, message };
    
    this.logs.unshift(log);
    if (this.logs.length > this.maxLogs) {
      this.logs.pop();
    }
    
    this.render();
    
    if (this.autoScroll) {
      this.content.scrollTop = 0;
    }
  }
  
  render() {
    this.content.innerHTML = this.logs.map((log, index) => 
      this.renderLogEntry(log, index === 0)
    ).join('');
  }
  
  renderLogEntry(log, isNew = false) {
    return `
      <div class="log-entry ${log.level} ${isNew ? 'new' : ''}">
        <span class="log-timestamp">[${log.timestamp}]</span>
        <span class="log-level ${log.level}">${log.level.toUpperCase()}</span>
        <span class="log-message">${log.message}</span>
      </div>
    `;
  }
}
```

## Status Components

### Service Status Indicators

Visual indicators for system service health.

#### HTML Structure
```html
<div class="fine-use-service-status">
  <div class="status-indicator-box" data-status="operational"></div>
  <div class="service-info">
    <div class="service-name">AUTHENTICATION</div>
    <div class="service-uptime">99.9%</div>
  </div>
  <div class="status-label status-operational">OPERATIONAL</div>
</div>
```

#### CSS Implementation
```css
.fine-use-service-status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-lg);
  border: 2px solid var(--fine-use-border);
  background-color: var(--fine-use-bg);
}

.status-indicator-box {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid var(--fine-use-border);
}

.status-indicator-box[data-status="operational"] {
  background-color: var(--fine-use-success);
}

.status-indicator-box[data-status="degraded"] {
  background-color: var(--fine-use-warning);
}

.status-indicator-box[data-status="maintenance"] {
  background-color: var(--fine-use-error);
}

.service-info {
  flex: 1;
  margin-left: var(--space-lg);
}

.service-name {
  font-weight: 700;
  color: var(--fine-use-text);
}

.service-uptime {
  font-size: 0.875rem;
  color: var(--fine-use-comment);
}

.status-label {
  font-weight: 700;
  font-size: 1.125rem;
}

.status-operational { color: var(--fine-use-success); }
.status-degraded { color: var(--fine-use-warning); }
.status-maintenance { color: var(--fine-use-error); }
```

## Usage Guidelines

### Component Composition
```html
<!-- Example: System dashboard layout -->
<div class="fine-use-dashboard">
  <!-- 33% / 33% / 33% layout -->
  <div class="grid-thirds gap-lg">
    <div class="fine-use-graph"><!-- CPU graph --></div>
    <div class="fine-use-graph"><!-- Memory graph --></div>
    <div class="fine-use-graph"><!-- Network graph --></div>
  </div>
  
  <!-- 67% / 33% layout -->
  <div class="grid-main-sidebar gap-lg">
    <div class="fine-use-data-table"><!-- Service table --></div>
    <div class="fine-use-log-terminal"><!-- Event log --></div>
  </div>
</div>
```

### Real-time Integration
```javascript
// Initialize all components
const dashboard = {
  dataTable: new FineUseDataTable(document.getElementById('services-table'), {
    realTime: true,
    updateInterval: 2000
  }),
  
  logTerminal: new FineUseLogTerminal(document.getElementById('event-log'), {
    autoScroll: true,
    maxLogs: 50
  }),
  
  // Add real-time data
  addSystemEvent(level, message) {
    this.logTerminal.addLog(level, message);
  }
};
```

### Accessibility Requirements
- All interactive elements must have focus indicators
- Color cannot be the only means of conveying information
- Minimum contrast ratio of 7:1 for all text
- Keyboard navigation must work for all controls
- Screen readers must understand table structures

---

**Remember: Each component serves a specific functional purpose while maintaining the geometric precision that defines Fine Use.**
