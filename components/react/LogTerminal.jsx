import React, { useState, useEffect, useRef } from 'react';

/**
 * Fine Use Log Terminal Component
 * 
 * Auto-scrolling terminal for real-time data streams
 */
const LogTerminal = ({
  logs = [],
  title = 'SYSTEM EVENT LOG',
  maxLogs = 100,
  autoScroll = true,
  realTime = false,
  height = '20rem',
  onClear,
  onPause,
  showControls = true,
  className = ''
}) => {
  const [terminalLogs, setTerminalLogs] = useState(logs);
  const [isPaused, setIsPaused] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      setTerminalLogs(logs);
    }
  }, [logs, isPaused]);

  useEffect(() => {
    if (autoScroll && contentRef.current && !isPaused) {
      contentRef.current.scrollTop = 0;
    }
  }, [terminalLogs, autoScroll, isPaused]);

  const addLog = (level, message, timestamp = null) => {
    if (isPaused) return;

    const newLog = {
      id: Date.now() + Math.random(),
      timestamp: timestamp || new Date(),
      level: level.toUpperCase(),
      message
    };

    setTerminalLogs(prev => {
      const updated = [newLog, ...prev];
      return updated.slice(0, maxLogs);
    });
  };

  const handleClear = () => {
    setTerminalLogs([]);
    if (onClear) onClear();
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
    if (onPause) onPause(!isPaused);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('en-US', { hour12: false });
  };

  const getLevelClass = (level) => {
    const levelLower = level.toLowerCase();
    switch (levelLower) {
      case 'error': return 'level-error';
      case 'warn': case 'warning': return 'level-warning';
      case 'info': return 'level-info';
      case 'debug': return 'level-debug';
      default: return 'level-info';
    }
  };

  const getEntryClass = (level) => {
    const levelLower = level.toLowerCase();
    switch (levelLower) {
      case 'error': return 'error';
      case 'warn': case 'warning': return 'warning';
      case 'info': return 'info';
      case 'debug': return 'debug';
      default: return 'info';
    }
  };

  const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };

  // Demo mode for testing
  const startDemo = () => {
    const demoMessages = [
      'Service mesh configuration updated',
      'High memory usage detected on node-03',
      'Connection timeout to database cluster',
      'Backup process initiated successfully',
      'Cache invalidation complete',
      'Load balancer configuration synced'
    ];

    const demoLevels = ['INFO', 'WARN', 'ERROR', 'DEBUG'];

    const interval = setInterval(() => {
      if (!isPaused) {
        const level = demoLevels[Math.floor(Math.random() * demoLevels.length)];
        const message = demoMessages[Math.floor(Math.random() * demoMessages.length)];
        addLog(level, message);
      }
    }, 2000);

    return () => clearInterval(interval);
  };

  return (
    <div className={`fine-use-log-terminal ${className}`}>
      <div className="terminal-header">
        <h3>{title}</h3>
        {showControls && (
          <div className="terminal-controls">
            <button 
              className={`control-button ${isPaused ? 'active' : ''}`}
              onClick={handlePause}
              title={isPaused ? 'Resume logging' : 'Pause logging'}
            >
              {isPaused ? 'RESUME' : 'PAUSE'}
            </button>
            <button 
              className="control-button"
              onClick={handleClear}
              title="Clear all logs"
            >
              CLEAR
            </button>
          </div>
        )}
      </div>
      <div 
        ref={contentRef}
        className="terminal-content"
        style={{ height }}
        role="log"
        aria-live={isPaused ? 'off' : 'polite'}
        aria-label={`${title} - ${terminalLogs.length} entries`}
      >
        {terminalLogs.map((log, index) => (
          <div 
            key={log.id}
            className={`log-entry ${getEntryClass(log.level)} ${index === 0 ? 'new' : ''}`}
          >
            <span className="log-timestamp">
              [{formatTime(log.timestamp)}]
            </span>
            <span className={`log-level ${getLevelClass(log.level)}`}>
              {log.level}
            </span>
            <span 
              className="log-message"
              dangerouslySetInnerHTML={{ __html: escapeHtml(log.message) }}
            />
          </div>
        ))}
        {terminalLogs.length === 0 && (
          <div className="log-entry info">
            <span className="log-message text-comment">
              No log entries. Waiting for events...
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Hook for managing log terminal state
 */
const useLogTerminal = (maxLogs = 100) => {
  const [logs, setLogs] = useState([]);

  const addLog = (level, message, timestamp = null) => {
    const newLog = {
      id: Date.now() + Math.random(),
      timestamp: timestamp || new Date(),
      level: level.toUpperCase(),
      message
    };

    setLogs(prev => {
      const updated = [newLog, ...prev];
      return updated.slice(0, maxLogs);
    });
  };

  const clearLogs = () => {
    setLogs([]);
  };

  const addInfo = (message) => addLog('INFO', message);
  const addWarning = (message) => addLog('WARN', message);
  const addError = (message) => addLog('ERROR', message);
  const addDebug = (message) => addLog('DEBUG', message);

  return {
    logs,
    addLog,
    addInfo,
    addWarning,
    addError,
    addDebug,
    clearLogs
  };
};

export { useLogTerminal };
export default LogTerminal;
