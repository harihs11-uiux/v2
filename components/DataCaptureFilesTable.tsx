import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Filter, ChevronUp } from 'lucide-react';

interface DataCaptureFile {
  id: string;
  serialNo: number;
  filename: string;
  selectedSheets: string;
  uploadedBy: string;
  uploadedTime: string;
  status: string;
}

interface DataCaptureFilesTableProps {
  searchTerm?: string;
  onFilesChange?: (files: DataCaptureFile[]) => void;
}

const DataCaptureFilesTable: React.FC<DataCaptureFilesTableProps> = ({ 
  searchTerm = "",
  onFilesChange
}) => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [hoveredCell, setHoveredCell] = useState<{ rowId: string; column: string } | null>(null);
  const [dropdownStates, setDropdownStates] = useState<Record<string, boolean>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  // Mock data for Data Capture Files
  const [data, setData] = useState<DataCaptureFile[]>([
    {
      id: '1',
      serialNo: 1,
      filename: 'Import_Data_Sheet1.xlsx',
      selectedSheets: 'Sheet1, Sheet2',
      uploadedBy: 'John Smith',
      uploadedTime: '2025-01-15 10:30 AM',
      status: 'Processed'
    },
    {
      id: '2',
      serialNo: 2,
      filename: 'Customs_Declaration.xlsx',
      selectedSheets: 'Main Data',
      uploadedBy: 'Sarah Johnson',
      uploadedTime: '2025-01-15 11:45 AM',
      status: 'Processing'
    },
    {
      id: '3',
      serialNo: 3,
      filename: 'Cargo_Details.xlsx',
      selectedSheets: 'Sheet1, Sheet3, Sheet4',
      uploadedBy: 'Mike Davis',
      uploadedTime: '2025-01-15 02:15 PM',
      status: 'Failed'
    },
    {
      id: '4',
      serialNo: 4,
      filename: 'Invoice_Data.xlsx',
      selectedSheets: 'Invoice, Summary',
      uploadedBy: 'Emily Wilson',
      uploadedTime: '2025-01-15 03:20 PM',
      status: 'Pending'
    },
    {
      id: '5',
      serialNo: 5,
      filename: 'Bill_of_Lading.xlsx',
      selectedSheets: 'BL Data',
      uploadedBy: 'Alex Brown',
      uploadedTime: '2025-01-15 04:10 PM',
      status: 'Processed'
    },
    {
      id: '6',
      serialNo: 6,
      filename: 'Packing_List.xlsx',
      selectedSheets: 'Sheet1, Sheet2, Sheet5',
      uploadedBy: 'Lisa Garcia',
      uploadedTime: '2025-01-15 05:30 PM',
      status: 'Processing'
    },
    {
      id: '7',
      serialNo: 7,
      filename: 'Certificate_Details.xlsx',
      selectedSheets: 'Certificates',
      uploadedBy: 'David Miller',
      uploadedTime: '2025-01-16 09:15 AM',
      status: 'Processed'
    },
    {
      id: '8',
      serialNo: 8,
      filename: 'Inspection_Report.xlsx',
      selectedSheets: 'Report, Summary',
      uploadedBy: 'Amanda Taylor',
      uploadedTime: '2025-01-16 10:45 AM',
      status: 'Failed'
    },
    {
      id: '9',
      serialNo: 9,
      filename: 'Shipping_Manifest.xlsx',
      selectedSheets: 'Manifest Data',
      uploadedBy: 'Robert Jones',
      uploadedTime: '2025-01-16 01:20 PM',
      status: 'Pending'
    },
    {
      id: '10',
      serialNo: 10,
      filename: 'Duty_Calculation.xlsx',
      selectedSheets: 'Calculations, Rates',
      uploadedBy: 'Jennifer Lee',
      uploadedTime: '2025-01-16 02:55 PM',
      status: 'Processing'
    }
  ]);

  // Custom checkbox render function
  const renderCheckbox = (checked: boolean) => (
    <div 
      className={`w-4 h-4 rounded border transition-colors duration-200 flex items-center justify-center ${
        checked 
          ? 'bg-[#3874FF] border-[#3874FF]' 
          : 'bg-transparent border-[#CDCFD3]'
      }`}
    >
      {checked && (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M1 4L3.5 6.5L9 1" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleRowSelect = (rowId: string) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(rowId)) {
      newSelectedRows.delete(rowId);
    } else {
      newSelectedRows.add(rowId);
    }
    setSelectedRows(newSelectedRows);
  };

  const handleSelectAll = () => {
    if (selectedRows.size === filteredData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(filteredData.map(row => row.id)));
    }
  };

  const toggleDropdown = (rowId: string) => {
    setDropdownStates(prev => ({
      ...prev,
      [rowId]: !prev[rowId]
    }));
  };

  // Filter data based on search term
  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Sort data
  const sortedData = React.useMemo(() => {
    if (!sortConfig) return filteredData;
    
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof DataCaptureFile];
      const bValue = b[sortConfig.key as keyof DataCaptureFile];
      
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'processed':
        return 'text-green-600 bg-green-50';
      case 'processing':
        return 'text-blue-600 bg-blue-50';
      case 'failed':
        return 'text-red-600 bg-red-50';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="absolute bg-[#ffffff] bottom-0 left-0 right-0 top-24">
      {/* Toolbar */}
      <div className="absolute bg-[#EBEEF7] h-10 left-0 right-0 top-0 flex items-center px-4">
        <div className="text-[#050E25] text-[14px] font-medium">
          Total XL Files: {filteredData.length}
        </div>
      </div>

      {/* Table Container */}
      <div 
        ref={containerRef}
        className="absolute top-10 left-0 right-0 bottom-0 overflow-auto table-container"
        style={{ 
          borderTop: '1px solid #D0D5E3'
        }}
      >
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-10">
            <tr style={{ backgroundColor: '#CAD2E5' }}>
              {/* Checkbox Column */}
              <th 
                className="w-12 p-0 border-r border-[#D0D5E3] text-center"
                style={{ 
                  height: '40px',
                  backgroundColor: '#CAD2E5'
                }}
              >
                <div onClick={handleSelectAll} className="cursor-pointer flex items-center justify-center w-full h-full">
                  {renderCheckbox(selectedRows.size === sortedData.length)}
                </div>
              </th>

              {/* S.No Column - No expand icon */}
              <th 
                className="w-16 p-0 border-r border-[#D0D5E3] cursor-pointer hover:bg-[#B8C4E0] transition-colors"
                style={{ 
                  height: '40px',
                  backgroundColor: '#CAD2E5'
                }}
                onClick={() => handleSort('serialNo')}
              >
                <div className="flex items-center justify-center gap-1 px-2 text-[#050E25] text-[14px] font-medium">
                  S.No
                  <Filter className="w-3 h-3 text-[#666]" />
                  {sortConfig?.key === 'serialNo' && (
                    sortConfig.direction === 'asc' ? 
                    <ChevronUp className="w-3 h-3" /> : 
                    <ChevronDown className="w-3 h-3" />
                  )}
                </div>
              </th>

              {/* Filename Column */}
              <th 
                className="min-w-[200px] p-0 border-r border-[#D0D5E3] cursor-pointer hover:bg-[#B8C4E0] transition-colors"
                style={{ 
                  height: '40px',
                  backgroundColor: '#CAD2E5'
                }}
                onClick={() => handleSort('filename')}
              >
                <div className="flex items-center justify-center gap-1 px-2 text-[#050E25] text-[14px] font-medium">
                  Filename
                  <Filter className="w-3 h-3 text-[#666]" />
                  {sortConfig?.key === 'filename' && (
                    sortConfig.direction === 'asc' ? 
                    <ChevronUp className="w-3 h-3" /> : 
                    <ChevronDown className="w-3 h-3" />
                  )}
                </div>
              </th>

              {/* Selected Sheets Column */}
              <th 
                className="min-w-[150px] p-0 border-r border-[#D0D5E3] cursor-pointer hover:bg-[#B8C4E0] transition-colors"
                style={{ 
                  height: '40px',
                  backgroundColor: '#CAD2E5'
                }}
                onClick={() => handleSort('selectedSheets')}
              >
                <div className="flex items-center justify-center gap-1 px-2 text-[#050E25] text-[14px] font-medium">
                  Selected Sheets
                  <Filter className="w-3 h-3 text-[#666]" />
                  {sortConfig?.key === 'selectedSheets' && (
                    sortConfig.direction === 'asc' ? 
                    <ChevronUp className="w-3 h-3" /> : 
                    <ChevronDown className="w-3 h-3" />
                  )}
                </div>
              </th>

              {/* Uploaded by Column */}
              <th 
                className="min-w-[120px] p-0 border-r border-[#D0D5E3] cursor-pointer hover:bg-[#B8C4E0] transition-colors"
                style={{ 
                  height: '40px',
                  backgroundColor: '#CAD2E5'
                }}
                onClick={() => handleSort('uploadedBy')}
              >
                <div className="flex items-center justify-center gap-1 px-2 text-[#050E25] text-[14px] font-medium">
                  Uploaded by
                  <Filter className="w-3 h-3 text-[#666]" />
                  {sortConfig?.key === 'uploadedBy' && (
                    sortConfig.direction === 'asc' ? 
                    <ChevronUp className="w-3 h-3" /> : 
                    <ChevronDown className="w-3 h-3" />
                  )}
                </div>
              </th>

              {/* Uploaded Time Column */}
              <th 
                className="min-w-[140px] p-0 border-r border-[#D0D5E3] cursor-pointer hover:bg-[#B8C4E0] transition-colors"
                style={{ 
                  height: '40px',
                  backgroundColor: '#CAD2E5'
                }}
                onClick={() => handleSort('uploadedTime')}
              >
                <div className="flex items-center justify-center gap-1 px-2 text-[#050E25] text-[14px] font-medium">
                  Uploaded Time
                  <Filter className="w-3 h-3 text-[#666]" />
                  {sortConfig?.key === 'uploadedTime' && (
                    sortConfig.direction === 'asc' ? 
                    <ChevronUp className="w-3 h-3" /> : 
                    <ChevronDown className="w-3 h-3" />
                  )}
                </div>
              </th>

              {/* Status Column */}
              <th 
                className="min-w-[100px] p-0 border-r border-[#D0D5E3] cursor-pointer hover:bg-[#B8C4E0] transition-colors"
                style={{ 
                  height: '40px',
                  backgroundColor: '#CAD2E5'
                }}
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center justify-center gap-1 px-2 text-[#050E25] text-[14px] font-medium">
                  Status
                  <Filter className="w-3 h-3 text-[#666]" />
                  {sortConfig?.key === 'status' && (
                    sortConfig.direction === 'asc' ? 
                    <ChevronUp className="w-3 h-3" /> : 
                    <ChevronDown className="w-3 h-3" />
                  )}
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {sortedData.map((row, index) => (
              <tr
                key={row.id}
                className={`border-b border-[#D0D5E3] transition-colors duration-150 ${
                  hoveredRow === row.id ? 'bg-[#CEF6F0]' : 'bg-white hover:bg-[#f8f9fa]'
                }`}
                style={{ 
                  height: '48px',
                  borderColor: hoveredRow === row.id ? '#00B196' : '#D0D5E3'
                }}
                onMouseEnter={() => setHoveredRow(row.id)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                {/* Checkbox Cell */}
                <td 
                  className={`w-12 p-0 text-center relative ${
                    hoveredRow === row.id ? 'border-r border-[#00B196]' : 'border-r border-[#D0D5E3]'
                  }`}
                >
                  <div onClick={() => handleRowSelect(row.id)} className="cursor-pointer flex items-center justify-center w-full h-full">
                    {renderCheckbox(selectedRows.has(row.id))}
                  </div>
                </td>

                {/* S.No Cell */}
                <td 
                  className={`w-16 p-0 text-center relative ${
                    hoveredCell?.rowId === row.id && hoveredCell?.column === 'serialNo' 
                      ? 'border border-[#3874FF] bg-transparent' 
                      : hoveredRow === row.id 
                        ? 'border-r border-[#00B196]' 
                        : 'border-r border-[#D0D5E3]'
                  }`}
                  onMouseEnter={() => setHoveredCell({ rowId: row.id, column: 'serialNo' })}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  <div className="flex items-center justify-center px-2 text-[#050E25] text-[14px] h-full">
                    {row.serialNo}
                  </div>
                </td>

                {/* Filename Cell */}
                <td 
                  className={`min-w-[200px] p-0 relative ${
                    hoveredCell?.rowId === row.id && hoveredCell?.column === 'filename' 
                      ? 'border border-[#3874FF] bg-transparent' 
                      : hoveredRow === row.id 
                        ? 'border-r border-[#00B196]' 
                        : 'border-r border-[#D0D5E3]'
                  }`}
                  onMouseEnter={() => setHoveredCell({ rowId: row.id, column: 'filename' })}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  <div className="flex items-center px-2 text-[#050E25] text-[14px] h-full">
                    <span className="text-[#3874FF] hover:underline cursor-pointer">
                      {row.filename}
                    </span>
                  </div>
                </td>

                {/* Selected Sheets Cell */}
                <td 
                  className={`min-w-[150px] p-0 relative ${
                    hoveredCell?.rowId === row.id && hoveredCell?.column === 'selectedSheets' 
                      ? 'border border-[#3874FF] bg-transparent' 
                      : hoveredRow === row.id 
                        ? 'border-r border-[#00B196]' 
                        : 'border-r border-[#D0D5E3]'
                  }`}
                  onMouseEnter={() => setHoveredCell({ rowId: row.id, column: 'selectedSheets' })}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  <div className="flex items-center px-2 text-[#050E25] text-[14px] h-full">
                    {row.selectedSheets}
                  </div>
                </td>

                {/* Uploaded by Cell */}
                <td 
                  className={`min-w-[120px] p-0 relative ${
                    hoveredCell?.rowId === row.id && hoveredCell?.column === 'uploadedBy' 
                      ? 'border border-[#3874FF] bg-transparent' 
                      : hoveredRow === row.id 
                        ? 'border-r border-[#00B196]' 
                        : 'border-r border-[#D0D5E3]'
                  }`}
                  onMouseEnter={() => setHoveredCell({ rowId: row.id, column: 'uploadedBy' })}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  <div className="flex items-center px-2 text-[#050E25] text-[14px] h-full">
                    {row.uploadedBy}
                  </div>
                </td>

                {/* Uploaded Time Cell */}
                <td 
                  className={`min-w-[140px] p-0 relative ${
                    hoveredCell?.rowId === row.id && hoveredCell?.column === 'uploadedTime' 
                      ? 'border border-[#3874FF] bg-transparent' 
                      : hoveredRow === row.id 
                        ? 'border-r border-[#00B196]' 
                        : 'border-r border-[#D0D5E3]'
                  }`}
                  onMouseEnter={() => setHoveredCell({ rowId: row.id, column: 'uploadedTime' })}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  <div className="flex items-center px-2 text-[#050E25] text-[14px] h-full">
                    {row.uploadedTime}
                  </div>
                </td>

                {/* Status Cell */}
                <td 
                  className={`min-w-[100px] p-0 relative ${
                    hoveredCell?.rowId === row.id && hoveredCell?.column === 'status' 
                      ? 'border border-[#3874FF] bg-transparent' 
                      : hoveredRow === row.id 
                        ? 'border-r border-[#00B196]' 
                        : 'border-r border-[#D0D5E3]'
                  }`}
                  onMouseEnter={() => setHoveredCell({ rowId: row.id, column: 'status' })}
                  onMouseLeave={() => setHoveredCell(null)}
                >
                  <div className="flex items-center px-2 text-[14px] h-full">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(row.status)}`}>
                      {row.status}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataCaptureFilesTable;