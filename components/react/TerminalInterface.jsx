import React, { useState, useEffect, useRef } from 'react';

/**
 * Fine Use Terminal Interface Component
 * 
 * Main container component that provides theme switching and 
 * the basic terminal interface structure
 */
const TerminalInterface = ({ 
  children, 
  theme = 'dracula',
  onThemeChange,
  showThemeSelector = true,
  title = 'TERMINAL SYSTEM CONTROL'
}) => {
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [currentTime, setCurrentTime] = useState(new Date());

  const themes = {
    dracula: 'Dracula',
    monokai: 'Monokai', 
    nord: 'Nord'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if (onThemeChange) {
      onThemeChange(currentTheme);
    }
  }, [currentTheme, onThemeChange]);

  const handleThemeChange = (newTheme) => {
    setCurrentTheme(newTheme);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour12: false });
  };

  return (
    <div className="fine-use-app min-h-screen p-8 font-mono text-white" data-theme={currentTheme}>
      {/* Theme Selector */}
      {showThemeSelector && (
        <div className="theme-selector mb-8">
          <span className="theme-label">THEME:</span>
          <select 
            value={currentTheme}
            onChange={(e) => handleThemeChange(e.target.value)}
            className="theme-dropdown"
          >
            {Object.entries(themes).map(([key, name]) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Page Header */}
      <header className="mb-16">
        <h1 className="fine-use-h1 text-5xl font-bold mb-4">{title}</h1>
        <div className="flex items-center gap-8 text-lg">
          <span className="text-comment">BUILD:</span>
          <span>v1.0.0</span>
          <span className="text-comment">TIME:</span>
          <span>{formatTime(currentTime)}</span>
          <span className="text-comment">STATUS:</span>
          <span className="text-success">OPERATIONAL</span>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
};

export default TerminalInterface;
