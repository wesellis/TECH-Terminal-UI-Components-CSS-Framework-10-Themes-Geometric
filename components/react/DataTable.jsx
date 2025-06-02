import React, { useState, useEffect } from 'react';

/**
 * Fine Use Data Table Component
 * 
 * High-density data table with status indicators and real-time updates
 */
const DataTable = ({
  data = [],
  columns = [],
  title = 'DATA MATRIX',
  realTime = false,
  updateInterval = 2000,
  onRowClick,
  statusColumn = 'status',
  colorCodedColumns = []
}) => {
  const [tableData, setTableData] = useState(data);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    setTableData(data);
  }, [data]);

  useEffect(() => {
    if (realTime && typeof data === 'function') {
      const interval = setInterval(() => {
        const newData = data();
        setTableData(newData);
      }, updateInterval);

      return () => clearInterval(interval);
    }
  }, [realTime, data, updateInterval]);

  const getStatusClass = (status) => {
    if (!status) return '';
    
    const statusLower = status.toString().toLowerCase();
    if (['online', 'operational', 'success', 'completed'].includes(statusLower)) {
      return 'status-success';
    }
    if (['warning', 'degraded', 'pending'].includes(statusLower)) {
      return 'status-warning';
    }
    if (['error', 'offline', 'failed', 'critical'].includes(statusLower)) {
      return 'status-error';
    }
    return 'status-info';
  };

  const getMetricClass = (value, thresholds = [70, 85]) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return '';
    
    if (numValue >= thresholds[1]) return 'metric-error';
    if (numValue >= thresholds[0]) return 'metric-warning';
    return 'metric-success';
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortColumn) return tableData;

    return [...tableData].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];
      
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }
      
      const aStr = String(aVal).toLowerCase();
      const bStr = String(bVal).toLowerCase();
      
      if (sortDirection === 'asc') {
        return aStr.localeCompare(bStr);
      } else {
        return bStr.localeCompare(aStr);
      }
    });
  }, [tableData, sortColumn, sortDirection]);

  const renderCellValue = (value, column, row) => {
    // Status column gets special treatment
    if (column === statusColumn) {
      return (
        <span className={`status-badge ${getStatusClass(value)}`}>
          {String(value).toUpperCase()}
        </span>
      );
    }

    // Color-coded columns (usually metrics)
    if (colorCodedColumns.includes(column)) {
      const className = `metric-value ${getMetricClass(value)}`;
      return (
        <span className={className}>
          {value}
        </span>
      );
    }

    // Special formatting for specific column names
    if (column.toLowerCase().includes('id')) {
      return <span className="service-id">{value}</span>;
    }

    return value;
  };

  const handleRowClick = (row, index) => {
    if (onRowClick) {
      onRowClick(row, index);
    }
  };

  return (
    <div className="fine-use-data-table">
      <div className="table-header">
        <h3>{title}</h3>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th 
                  key={column}
                  onClick={() => handleSort(column)}
                  style={{ cursor: 'pointer' }}
                  title={`Sort by ${column}`}
                >
                  {column.toUpperCase().replace('_', ' ')}
                  {sortColumn === column && (
                    <span className="ml-2">
                      {sortDirection === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <tr 
                key={row.id || index}
                onClick={() => handleRowClick(row, index)}
                style={{ cursor: onRowClick ? 'pointer' : 'default' }}
              >
                {columns.map((column) => (
                  <td key={column}>
                    {renderCellValue(row[column], column, row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
