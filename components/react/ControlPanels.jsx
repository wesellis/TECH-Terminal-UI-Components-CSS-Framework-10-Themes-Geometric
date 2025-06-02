import React, { useState } from 'react';

/**
 * Fine Use Toggle Switch Component (Boxy style)
 * 
 * ON/OFF controls that maintain rectangular aesthetics
 */
const ToggleSwitch = ({
  label,
  enabled = false,
  onChange,
  onColor = 'var(--fine-use-success)',
  offColor = 'var(--fine-use-error)',
  className = ''
}) => {
  const [isEnabled, setIsEnabled] = useState(enabled);

  const handleToggle = (newState) => {
    setIsEnabled(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <div className={`fine-use-toggle ${className}`}>
      <label className="toggle-label">
        {label.toUpperCase()}
      </label>
      <div className="toggle-status" style={{ 
        color: isEnabled ? onColor : offColor 
      }}>
        {isEnabled ? 'ON' : 'OFF'}
      </div>
      <div className="toggle-switch">
        <button 
          className={`toggle-button toggle-on ${isEnabled ? 'active' : ''}`}
          onClick={() => handleToggle(true)}
          style={{
            backgroundColor: isEnabled ? onColor : 'var(--fine-use-surface)',
            color: isEnabled ? 'var(--fine-use-bg)' : 'var(--fine-use-comment)'
          }}
        >
          ON
        </button>
        <button 
          className={`toggle-button toggle-off ${!isEnabled ? 'active' : ''}`}
          onClick={() => handleToggle(false)}
          style={{
            backgroundColor: !isEnabled ? offColor : 'var(--fine-use-surface)',
            color: !isEnabled ? 'var(--fine-use-bg)' : 'var(--fine-use-comment)'
          }}
        >
          OFF
        </button>
      </div>
    </div>
  );
};

/**
 * Fine Use Action Button Component
 * 
 * Large, obvious buttons for system operations
 */
const ActionButton = ({
  children,
  variant = 'default',
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary': return 'fine-use-button';
      case 'danger': return 'fine-use-button';
      case 'info': return 'fine-use-button';
      default: return 'fine-use-button';
    }
  };

  return (
    <button
      className={`${getVariantClass()} ${className}`}
      data-variant={variant}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Fine Use Control Button Component
 * 
 * Smaller buttons for terminal controls
 */
const ControlButton = ({
  children,
  active = false,
  onClick,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`control-button ${active ? 'active' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Fine Use Service Status Component
 * 
 * Visual indicators for system service health
 */
const ServiceStatus = ({
  serviceName,
  status = 'operational',
  uptime = '99.9%',
  className = ''
}) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'operational':
      case 'online':
      case 'success':
        return 'operational';
      case 'degraded':
      case 'warning':
        return 'degraded';
      case 'maintenance':
      case 'error':
      case 'offline':
        return 'maintenance';
      default:
        return 'operational';
    }
  };

  const statusClass = getStatusClass(status);

  return (
    <div className={`fine-use-service-status ${className}`}>
      <div 
        className="status-indicator-box"
        data-status={statusClass}
      />
      <div className="service-info">
        <div className="service-name">
          {serviceName.toUpperCase()}
        </div>
        <div className="service-uptime">
          {uptime}
        </div>
      </div>
      <div className={`status-label status-${statusClass}`}>
        {status.toUpperCase()}
      </div>
    </div>
  );
};

/**
 * Fine Use Control Panel Component
 * 
 * Container for grouped controls
 */
const ControlPanel = ({
  title,
  children,
  className = ''
}) => {
  return (
    <div className={`fine-use-component ${className}`}>
      {title && <h3 className="fine-use-h3 mb-6">{title}</h3>}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
};

/**
 * Fine Use Button Group Component
 * 
 * Grouped action buttons
 */
const ButtonGroup = ({
  buttons = [],
  className = ''
}) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {buttons.map((button, index) => (
        <ActionButton
          key={index}
          variant={button.variant}
          onClick={button.onClick}
          disabled={button.disabled}
        >
          {button.label}
        </ActionButton>
      ))}
    </div>
  );
};

/**
 * Fine Use System Controls Component
 * 
 * Pre-configured control panel for common system operations
 */
const SystemControls = ({
  onStart,
  onStop,
  onRestart,
  onBackup,
  onEmergencyShutdown,
  className = ''
}) => {
  const controls = [
    {
      label: 'START SERVICES',
      variant: 'primary',
      onClick: onStart
    },
    {
      label: 'STOP ALL PROCESSES',
      variant: 'default',
      onClick: onStop
    },
    {
      label: 'RESTART LOAD BALANCER',
      variant: 'default',
      onClick: onRestart
    },
    {
      label: 'BACKUP DATABASE',
      variant: 'info',
      onClick: onBackup
    },
    {
      label: 'EMERGENCY SHUTDOWN',
      variant: 'danger',
      onClick: onEmergencyShutdown
    }
  ];

  return (
    <ControlPanel title="SYSTEM CONTROLS" className={className}>
      {controls.map((control, index) => (
        <ActionButton
          key={index}
          variant={control.variant}
          onClick={control.onClick}
          className="w-full text-left"
        >
          {control.label}
        </ActionButton>
      ))}
    </ControlPanel>
  );
};

export {
  ToggleSwitch,
  ActionButton,
  ControlButton,
  ServiceStatus,
  ControlPanel,
  ButtonGroup,
  SystemControls
};

export default ControlPanel;
