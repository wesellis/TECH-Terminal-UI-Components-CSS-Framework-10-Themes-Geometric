import React, { useState } from 'react';

/**
 * Fine Use Avatar Component
 * Rectangular avatar with status indicator using initials instead of photos
 */
export const FineUseAvatar = ({ 
  initials, 
  name, 
  role, 
  status = 'online', 
  size = 'normal',
  onClick 
}) => {
  const sizeClasses = {
    small: 'w-12 h-12 text-lg',
    normal: 'w-16 h-16 text-2xl',
    large: 'w-24 h-24 text-4xl'
  };

  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-red-500',
    away: 'bg-yellow-500',
    busy: 'bg-red-500'
  };

  return (
    <div className="fine-use-avatar-grid" onClick={onClick}>
      <div className={`user-avatar ${sizeClasses[size]}`} data-status={status}>
        <span className="avatar-initials">{initials.toUpperCase()}</span>
        <div className={`avatar-status ${statusColors[status]}`}></div>
      </div>
      {(name || role) && (
        <div className="user-info">
          {name && <div className="user-name">{name.toUpperCase()}</div>}
          {role && <div className="user-role">{role.toUpperCase()}</div>}
        </div>
      )}
    </div>
  );
};

/**
 * Fine Use Brand Component
 * Geometric brand identity using blocks instead of logos
 */
export const FineUseBrand = ({ 
  name, 
  version, 
  pattern = [false, true, true, false] 
}) => {
  return (
    <div className="fine-use-brand">
      <div className="brand-symbol">
        <div className="brand-grid">
          {pattern.map((active, index) => (
            <div 
              key={index} 
              className={`grid-block ${active ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className="brand-text">
        <div className="brand-name">{name.toUpperCase()}</div>
        {version && <div className="brand-version">VERSION {version}</div>}
      </div>
    </div>
  );
};

/**
 * Fine Use Icon Replacement
 * Text-based icons following terminal aesthetics
 */
export const FineUseIcon = ({ 
  type = 'default', 
  text, 
  label, 
  onClick 
}) => {
  const iconMap = {
    success: '✓',
    warning: '!',
    error: '×',
    info: 'i',
    server: 'SRV',
    database: 'DB',
    network: 'NET',
    system: 'SYS'
  };

  const typeClasses = {
    success: 'icon-success',
    warning: 'icon-warning',
    error: 'icon-error',
    info: 'icon-info',
    default: ''
  };

  const iconText = text || iconMap[type] || type.charAt(0).toUpperCase();

  return (
    <div className="flex items-center gap-2" onClick={onClick}>
      <div className={`fine-use-icon-replacement ${typeClasses[type]}`}>
        {iconText}
      </div>
      {label && <span className="text-lg">{label.toUpperCase()}</span>}
    </div>
  );
};

/**
 * Fine Use System Diagram Viewer
 * Container for technical diagrams and charts
 */
export const FineUseDiagramViewer = ({ 
  title, 
  children, 
  onFullscreen 
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (onFullscreen) onFullscreen(!isFullscreen);
  };

  return (
    <div className={`fine-use-diagram-viewer ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="diagram-header">
        <h3>{title.toUpperCase()}</h3>
        <button className="diagram-fullscreen" onClick={handleFullscreen}>
          {isFullscreen ? 'EXIT FULLSCREEN' : 'FULLSCREEN'}
        </button>
      </div>
      <div className="diagram-container">
        {children}
      </div>
    </div>
  );
};

/**
 * Fine Use File Preview Modal
 * Full-screen preview for images and documents
 */
export const FineUseFilePreview = ({ 
  isOpen, 
  onClose, 
  file 
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 p-8"
      onClick={handleOverlayClick}
    >
      <div className="fine-use-file-preview mx-auto max-w-4xl">
        <div className="preview-header">
          <span className="file-type">{file.type || 'FILE'}</span>
          <span className="file-name">{file.name}</span>
          <button className="preview-close" onClick={onClose}>×</button>
        </div>
        
        <div className="preview-content">
          {file.type === 'IMAGE' ? (
            <img 
              src={file.url} 
              alt={file.name} 
              className="preview-image max-w-full max-h-full"
            />
          ) : (
            <div className="text-center text-2xl p-8">
              {file.content || 'FILE PREVIEW UNAVAILABLE'}
            </div>
          )}
        </div>
        
        {file.metadata && (
          <div className="preview-metadata">
            {Object.entries(file.metadata).map(([key, value]) => (
              <div key={key} className="metadata-item">
                <span className="metadata-label">{key.toUpperCase()}:</span>
                <span className="metadata-value">{value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Fine Use Avatar List
 * Grid of multiple user avatars
 */
export const FineUseAvatarList = ({ users, onUserClick }) => {
  return (
    <div className="fine-use-avatar-list">
      {users.map((user, index) => (
        <div key={index} className="avatar-list-item">
          <div 
            className="user-avatar avatar-small" 
            data-status={user.status}
            onClick={() => onUserClick && onUserClick(user)}
          >
            <span className="avatar-initials">{user.initials}</span>
            <div className="avatar-status"></div>
          </div>
          <div className="avatar-label">{user.label || user.role}</div>
        </div>
      ))}
    </div>
  );
};

/**
 * Fine Use Chart Container
 * Wrapper for data visualizations
 */
export const FineUseChartContainer = ({ title, children }) => {
  return (
    <div className="fine-use-chart-container">
      <div className="chart-title">{title.toUpperCase()}</div>
      <div className="chart-content">
        {children}
      </div>
    </div>
  );
};

/**
 * Example usage hook for managing file preview
 */
export const useFilePreview = () => {
  const [previewFile, setPreviewFile] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const showPreview = (file) => {
    setPreviewFile(file);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setPreviewFile(null);
  };

  return {
    previewFile,
    isPreviewOpen,
    showPreview,
    closePreview
  };
};

// Export all components
export default {
  FineUseAvatar,
  FineUseBrand,
  FineUseIcon,
  FineUseDiagramViewer,
  FineUseFilePreview,
  FineUseAvatarList,
  FineUseChartContainer,
  useFilePreview
};