import React, { useState, useEffect } from 'react';

/**
 * Fine Use Progress Bar Component
 * 
 * Rectangular progress indicators for system metrics
 */
const ProgressBar = ({
  label,
  value = 0,
  min = 0,
  max = 100,
  unit = '%',
  thresholds = [70, 85],
  showValue = true,
  animated = true,
  className = ''
}) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (animated) {
      const duration = 300;
      const startValue = displayValue;
      const difference = value - startValue;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out animation
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + (difference * easeProgress);
        
        setDisplayValue(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    } else {
      setDisplayValue(value);
    }
  }, [value, animated, displayValue]);

  const getStatusClass = () => {
    if (displayValue >= thresholds[1]) return 'status-error';
    if (displayValue >= thresholds[0]) return 'status-warning';
    return 'status-success';
  };

  const percentage = ((displayValue - min) / (max - min)) * 100;

  return (
    <div className={`fine-use-progress-item ${className}`}>
      <label className="progress-label">
        {label.toUpperCase()}
      </label>
      <div className="progress-container">
        <div 
          className={`progress-bar ${getStatusClass()}`}
          style={{ width: `${Math.max(0, Math.min(100, percentage))}%` }}
          aria-valuenow={displayValue}
          aria-valuemin={min}
          aria-valuemax={max}
          role="progressbar"
          aria-label={label}
        />
      </div>
      {showValue && (
        <span className={`progress-value ${getStatusClass()}`}>
          {Math.round(displayValue)}{unit}
        </span>
      )}
    </div>
  );
};

/**
 * Fine Use Progress Group Component
 * 
 * Container for multiple progress bars
 */
const ProgressGroup = ({ children, title, className = '' }) => {
  return (
    <div className={`fine-use-progress-group ${className}`}>
      {title && <h3 className="fine-use-h3 mb-6">{title}</h3>}
      {children}
    </div>
  );
};

/**
 * Fine Use System Metrics Component
 * 
 * Pre-configured progress bars for common system metrics
 */
const SystemMetrics = ({ 
  metrics = {},
  realTime = false,
  updateInterval = 2000,
  onMetricUpdate
}) => {
  const [currentMetrics, setCurrentMetrics] = useState(metrics);

  useEffect(() => {
    setCurrentMetrics(metrics);
  }, [metrics]);

  useEffect(() => {
    if (realTime && onMetricUpdate) {
      const interval = setInterval(() => {
        onMetricUpdate().then(newMetrics => {
          setCurrentMetrics(newMetrics);
        }).catch(console.error);
      }, updateInterval);

      return () => clearInterval(interval);
    }
  }, [realTime, onMetricUpdate, updateInterval]);

  const defaultMetrics = [
    { key: 'cpu', label: 'CPU Load', unit: '%', thresholds: [70, 85] },
    { key: 'memory', label: 'Memory Usage', unit: '%', thresholds: [80, 90] },
    { key: 'disk', label: 'Disk Usage', unit: '%', thresholds: [85, 95] },
    { key: 'network', label: 'Network I/O', unit: '%', thresholds: [75, 90] }
  ];

  return (
    <ProgressGroup title="SYSTEM METRICS" className="space-y-6">
      {defaultMetrics.map((metric) => (
        <ProgressBar
          key={metric.key}
          label={metric.label}
          value={currentMetrics[metric.key] || 0}
          unit={metric.unit}
          thresholds={metric.thresholds}
          animated={true}
        />
      ))}
    </ProgressGroup>
  );
};

export { ProgressBar, ProgressGroup, SystemMetrics };
export default ProgressBar;
