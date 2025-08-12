import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Resizable } from 're-resizable';
import svgPaths from '../imports/svg-a9i93fhkcc';
import pdfSvgPaths from '../imports/svg-p5rpmrct9o';
import filterSvgPaths from '../imports/svg-xkhl016h09';
import checkboxSvgPaths from '../imports/svg-avdz5wve3u';
import uncheckedCheckboxSvgPaths from '../imports/svg-88ttit90gd';
import EmptyStateMessage from '../imports/EmptyStateMessage';
import ColumnCustomization from './ColumnCustomization';

interface FileData {
  id: string;
  sNo: number;
  fileName: string;
  selectFileType?: string;
  selectedSheets?: string;
  documentNo?: string;
  digitizeActions?: string;
  fileActions?: string;
  fileSize?: string;
  uploadedBy: string;
  uploadedDateTime: string;
  uploadedTime?: string;
  digitizationStatus?: string;
  signingStatus?: string;
  eSanchitMappingStatus?: string;
  status?: string;
  isExpanded: boolean;
  isSelected: boolean;
  subFiles?: SubFileData[];
}

interface SubFileData {
  id: string;
  sNo: string;
  fileName: string;
  selectFileType?: string;
  selectedSheets?: string;
  documentNo?: string;
  digitizeActions?: string;
  fileActions?: string;
  fileSize?: string;
  uploadedBy: string;
  uploadedDateTime: string;
  uploadedTime?: string;
  digitizationStatus?: string;
  signingStatus?: string;
  eSanchitMappingStatus?: string;
  status?: string;
}

interface Column {
  key: keyof FileData | 'actions';
  title: string;
  width: number;
  minWidth: number;
  maxWidth: number;
  fixed?: 'left' | 'right';
  visible: boolean;
}

interface EnhancedFilesTableProps {
  onPdfClick?: (pdfPath: string) => void;
  isEmpty?: boolean;
  onUploadClick?: () => void;
  mode?: 'pdf' | 'xls';
  onFileUpload?: (files: File[]) => void;
}

// Function to generate random 16-digit document number
const generateDocumentNumber = () => {
  const digits = '0123456789';
  let result = '';
  for (let i = 0; i < 16; i++) {
    result += digits.charAt(Math.floor(Math.random() * digits.length));
  }
  return result;
};

const defaultColumns: Column[] = [
  { 
    key: 'sNo', 
    title: 'S.No', 
    width: 71, 
    minWidth: 60, 
    maxWidth: 120, 
    fixed: 'left', 
    visible: true 
  },
  { 
    key: 'fileName', 
    title: 'File Name', 
    width: 250, 
    minWidth: 200, 
    maxWidth: 350, 
    fixed: 'left', 
    visible: true 
  },
  { 
    key: 'selectFileType', 
    title: 'Select File Type', 
    width: 248, 
    minWidth: 200, 
    maxWidth: 350, 
    visible: true 
  },
  { 
    key: 'documentNo', 
    title: 'Document No.', 
    width: 200, 
    minWidth: 160, 
    maxWidth: 280, 
    visible: true 
  },
  { 
    key: 'digitizeActions', 
    title: 'Digitize Actions', 
    width: 145, 
    minWidth: 120, 
    maxWidth: 200, 
    visible: true 
  },
  { 
    key: 'fileActions', 
    title: 'File Actions', 
    width: 145, 
    minWidth: 120, 
    maxWidth: 200, 
    visible: true 
  },
  { 
    key: 'fileSize', 
    title: 'File Size', 
    width: 115, 
    minWidth: 100, 
    maxWidth: 150, 
    visible: true 
  },
  { 
    key: 'uploadedBy', 
    title: 'Uploaded By', 
    width: 186, 
    minWidth: 150, 
    maxWidth: 250, 
    visible: true 
  },
  { 
    key: 'uploadedDateTime', 
    title: 'Uploaded Date & Time', 
    width: 248, 
    minWidth: 200, 
    maxWidth: 300, 
    visible: true 
  },
  { 
    key: 'digitizationStatus', 
    title: 'Digitization Status', 
    width: 219, 
    minWidth: 180, 
    maxWidth: 280, 
    visible: true 
  },
  { 
    key: 'signingStatus', 
    title: 'Signing Status', 
    width: 219, 
    minWidth: 180, 
    maxWidth: 280, 
    visible: true 
  },
  { 
    key: 'eSanchitMappingStatus', 
    title: 'E-sanchit & mapping Status', 
    width: 248, 
    minWidth: 200, 
    maxWidth: 350, 
    visible: true 
  },
  { 
    key: 'actions', 
    title: '', 
    width: 40, 
    minWidth: 40, 
    maxWidth: 40, 
    fixed: 'right', 
    visible: true 
  }
];



const xlsColumns: Column[] = [
  { 
    key: 'sNo', 
    title: 'S.No', 
    width: 71, 
    minWidth: 60, 
    maxWidth: 120, 
    fixed: 'left', 
    visible: true 
  },
  { 
    key: 'fileName', 
    title: 'Filename', 
    width: 400, 
    minWidth: 300, 
    maxWidth: 500, 
    fixed: 'left', 
    visible: true 
  },
  { 
    key: 'selectedSheets', 
    title: 'Selected Sheets', 
    width: 500, 
    minWidth: 400, 
    maxWidth: 600, 
    visible: true 
  },
  { 
    key: 'uploadedBy', 
    title: 'Uploaded by', 
    width: 500, 
    minWidth: 400, 
    maxWidth: 600, 
    visible: true 
  },
  { 
    key: 'uploadedTime', 
    title: 'Uploaded Time', 
    width: 500, 
    minWidth: 400, 
    maxWidth: 600, 
    visible: true 
  },
  { 
    key: 'status', 
    title: 'Status', 
    width: 300, 
    minWidth: 250, 
    maxWidth: 350, 
    visible: true 
  },
  { 
    key: 'actions', 
    title: '', 
    width: 40, 
    minWidth: 40, 
    maxWidth: 40, 
    fixed: 'right', 
    visible: true 
  }
];

const mockMainData: FileData[] = [
  {
    id: '1',
    sNo: 1,
    fileName: 'ICB_2192_2024-25_03.pdf',
    selectFileType: '',
    documentNo: '1234567890123456',
    digitizeActions: 'Digitize',
    fileActions: 'Edit Data',
    fileSize: '2.5 MB',
    uploadedBy: 'Ajith Kumar',
    uploadedDateTime: '04:44pm 15th May 2025',
    digitizationStatus: 'Not Digitized',
    signingStatus: 'Not Signed',
    eSanchitMappingStatus: 'Not Fetched',
    isExpanded: false,
    isSelected: false,
    subFiles: [
      {
        id: '1-1',
        sNo: '1.',
        fileName: '9499492934.pdf',
        selectFileType: '',
        documentNo: '1234567890123457',
        digitizeActions: 'Digitize',
        fileActions: 'Edit Data',
        fileSize: '2 MB',
        uploadedBy: 'Ajith Kumar',
        uploadedDateTime: '04:44pm 15th May 2025',
        digitizationStatus: 'Not Digitized',
        signingStatus: 'Not Signed',
        eSanchitMappingStatus: 'Not Fetched'
      },
      {
        id: '1-2',
        sNo: '2.',
        fileName: '9499492934.pdf',
        selectFileType: 'Multi-typed Document',
        documentNo: '1234567890123458',
        digitizeActions: 'Digitize',
        fileActions: 'Edit Data',
        fileSize: '2 MB',
        uploadedBy: 'Ajith Kumar',
        uploadedDateTime: '04:44pm 15th May 2025',
        digitizationStatus: 'Not Digitized',
        signingStatus: 'Not Signed',
        eSanchitMappingStatus: 'Not Fetched'
      }
    ]
  },
  {
    id: '2',
    sNo: 2,
    fileName: 'ICB_2193_2024-25_03.pdf',
    selectFileType: 'Invoice Document',
    documentNo: '2345678901234567',
    digitizeActions: 'Digitize',
    fileActions: 'Edit Data',
    fileSize: '1.8 MB',
    uploadedBy: 'Priya Sharma',
    uploadedDateTime: '03:22pm 15th May 2025',
    digitizationStatus: 'Digitized',
    signingStatus: 'Not Signed',
    eSanchitMappingStatus: 'Not Fetched',
    isExpanded: false,
    isSelected: false,
    subFiles: [
      {
        id: '2-1',
        sNo: '2.',
        fileName: 'invoice_details.pdf',
        selectFileType: 'Invoice Document',
        documentNo: '2345678901234568',
        digitizeActions: 'Digitize',
        fileActions: 'Edit Data',
        fileSize: '1.5 MB',
        uploadedBy: 'Priya Sharma',
        uploadedDateTime: '03:22pm 15th May 2025',
        digitizationStatus: 'Digitized',
        signingStatus: 'Not Signed',
        eSanchitMappingStatus: 'Not Fetched'
      }
    ]
  },
  {
    id: '3',
    sNo: 3,
    fileName: 'ICB_2194_2024-25_03.pdf',
    selectFileType: '',
    documentNo: '3456789012345678',
    digitizeActions: 'Digitize',
    fileActions: 'Edit Data',
    fileSize: '3.2 MB',
    uploadedBy: 'Rajesh Gupta',
    uploadedDateTime: '02:15pm 15th May 2025',
    digitizationStatus: 'Not Digitized',
    signingStatus: 'Not Signed',
    eSanchitMappingStatus: 'Fetched',
    isExpanded: false,
    isSelected: false,
    subFiles: [
      {
        id: '3-1',
        sNo: '3.',
        fileName: 'bill_of_lading_details.pdf',
        selectFileType: '',
        documentNo: '3456789012345679',
        digitizeActions: 'Digitize',
        fileActions: 'Edit Data',
        fileSize: '2.8 MB',
        uploadedBy: 'Rajesh Gupta',
        uploadedDateTime: '02:15pm 15th May 2025',
        digitizationStatus: 'Not Digitized',
        signingStatus: 'Not Signed',
        eSanchitMappingStatus: 'Fetched'
      }
    ]
  },
  {
    id: '4',
    sNo: 4,
    fileName: 'Customs_Declaration_2195.pdf',
    selectFileType: 'Customs Declaration',
    documentNo: '4567890123456789',
    digitizeActions: 'Digitize',
    fileActions: 'Edit Data',
    fileSize: '1.4 MB',
    uploadedBy: 'Meera Patel',
    uploadedDateTime: '01:30pm 15th May 2025',
    digitizationStatus: 'Digitized',
    signingStatus: 'Signed',
    eSanchitMappingStatus: 'Mapped',
    isExpanded: false,
    isSelected: false,
    subFiles: [
      {
        id: '4-1',
        sNo: '4.',
        fileName: 'customs_form.pdf',
        selectFileType: 'Customs Declaration',
        documentNo: '4567890123456790',
        digitizeActions: 'Digitize',
        fileActions: 'Edit Data',
        fileSize: '1.1 MB',
        uploadedBy: 'Meera Patel',
        uploadedDateTime: '01:30pm 15th May 2025',
        digitizationStatus: 'Digitized',
        signingStatus: 'Signed',
        eSanchitMappingStatus: 'Mapped'
      }
    ]
  },
  {
    id: '5',
    sNo: 5,
    fileName: 'Packing_List_2196.pdf',
    selectFileType: '',
    documentNo: '5678901234567890',
    digitizeActions: 'Digitize',
    fileActions: 'Edit Data',
    fileSize: '2.1 MB',
    uploadedBy: 'Suresh Kumar',
    uploadedDateTime: '12:45pm 15th May 2025',
    digitizationStatus: 'Not Digitized',
    signingStatus: 'Not Signed',
    eSanchitMappingStatus: 'Not Fetched',
    isExpanded: false,
    isSelected: false,
    subFiles: [
      {
        id: '5-1',
        sNo: '5.',
        fileName: 'item_list.pdf',
        selectFileType: 'Packing List',
        documentNo: '5678901234567891',
        digitizeActions: 'Digitize',
        fileActions: 'Edit Data',
        fileSize: '1.8 MB',
        uploadedBy: 'Suresh Kumar',
        uploadedDateTime: '12:45pm 15th May 2025',
        digitizationStatus: 'Not Digitized',
        signingStatus: 'Not Signed',
        eSanchitMappingStatus: 'Not Fetched'
      }
    ]
  },
  {
    id: '6',
    sNo: 6,
    fileName: 'Certificate_of_Origin_2197.pdf',
    selectFileType: 'Certificate',
    documentNo: '6789012345678901',
    digitizeActions: 'Digitize',
    fileActions: 'Edit Data',
    fileSize: '892 KB',
    uploadedBy: 'Anita Singh',
    uploadedDateTime: '11:20am 15th May 2025',
    digitizationStatus: 'Digitized',
    signingStatus: 'Not Signed',
    eSanchitMappingStatus: 'Fetched',
    isExpanded: false,
    isSelected: false,
    subFiles: [
      {
        id: '6-1',
        sNo: '6.',
        fileName: 'origin_certificate.pdf',
        selectFileType: 'Certificate',
        documentNo: '6789012345678902',
        digitizeActions: 'Digitize',
        fileActions: 'Edit Data',
        fileSize: '750 KB',
        uploadedBy: 'Anita Singh',
        uploadedDateTime: '11:20am 15th May 2025',
        digitizationStatus: 'Digitized',
        signingStatus: 'Not Signed',
        eSanchitMappingStatus: 'Fetched'
      }
    ]
  },
  {
    id: '7',
    sNo: 7,
    fileName: 'Insurance_Policy_2198.pdf',
    selectFileType: 'Insurance Document',
    documentNo: '7890123456789012',
    digitizeActions: 'Digitize',
    fileActions: 'Edit Data',
    fileSize: '1.6 MB',
    uploadedBy: 'Vikram Mehta',
    uploadedDateTime: '10:35am 15th May 2025',
    digitizationStatus: 'Not Digitized',
    signingStatus: 'Not Signed',
    eSanchitMappingStatus: 'Not Fetched',
    isExpanded: false,
    isSelected: false,
    subFiles: [
      {
        id: '7-1',
        sNo: '7.',
        fileName: 'insurance_policy_details.pdf',
        selectFileType: 'Insurance Document',
        documentNo: '7890123456789013',
        digitizeActions: 'Digitize',
        fileActions: 'Edit Data',
        fileSize: '1.3 MB',
        uploadedBy: 'Vikram Mehta',
        uploadedDateTime: '10:35am 15th May 2025',
        digitizationStatus: 'Not Digitized',
        signingStatus: 'Not Signed',
        eSanchitMappingStatus: 'Not Fetched'
      }
    ]
  },
  {
    id: '8',
    sNo: 8,
    fileName: 'Shipping_Instructions_2199.pdf',
    selectFileType: 'Shipping Document',
    documentNo: '8901234567890123',
    digitizeActions: 'Digitize',
    fileActions: 'Edit Data',
    fileSize: '2.8 MB',
    uploadedBy: 'Kavita Reddy',
    uploadedDateTime: '09:50am 15th May 2025',
    digitizationStatus: 'Digitized',
    signingStatus: 'Signed',
    eSanchitMappingStatus: 'Not Fetched',
    isExpanded: false,
    isSelected: false,
    subFiles: [
      {
        id: '8-1',
        sNo: '8.',
        fileName: 'route_details.pdf',
        selectFileType: 'Shipping Document',
        documentNo: '8901234567890124',
        digitizeActions: 'Digitize',
        fileActions: 'Edit Data',
        fileSize: '1.2 MB',
        uploadedBy: 'Kavita Reddy',
        uploadedDateTime: '09:50am 15th May 2025',
        digitizationStatus: 'Digitized',
        signingStatus: 'Signed',
        eSanchitMappingStatus: 'Not Fetched'
      },
      {
        id: '8-2',
        sNo: '9.',
        fileName: 'carrier_info.pdf',
        selectFileType: 'Shipping Document',
        documentNo: '8901234567890125',
        digitizeActions: 'Digitize',
        fileActions: 'Edit Data',
        fileSize: '950 KB',
        uploadedBy: 'Kavita Reddy',
        uploadedDateTime: '09:50am 15th May 2025',
        digitizationStatus: 'Digitized',
        signingStatus: 'Signed',
        eSanchitMappingStatus: 'Not Fetched'
      }
    ]
  },
  {
    id: '9',
    sNo: 9,
    fileName: 'Quality_Certificate_2200.pdf',
    selectFileType: 'Quality Document',
    documentNo: '9012345678901234',
    digitizeActions: 'Digitize',
    fileActions: 'Edit Data',
    fileSize: '1.1 MB',
    uploadedBy: 'Deepak Jain',
    uploadedDateTime: '08:15am 15th May 2025',
    digitizationStatus: 'Not Digitized',
    signingStatus: 'Not Signed',
    eSanchitMappingStatus: 'Fetched',
    isExpanded: false,
    isSelected: false,
    subFiles: [
      {
        id: '9-1',
        sNo: '9.',
        fileName: 'quality_report.pdf',
        selectFileType: 'Quality Document',
        documentNo: '9012345678901235',
        digitizeActions: 'Digitize',
        fileActions: 'Edit Data',
        fileSize: '850 KB',
        uploadedBy: 'Deepak Jain',
        uploadedDateTime: '08:15am 15th May 2025',
        digitizationStatus: 'Not Digitized',
        signingStatus: 'Not Signed',
        eSanchitMappingStatus: 'Fetched'
      }
    ]
  },
  {
    id: '10',
    sNo: 10,
    fileName: 'Final_Assessment_2201.pdf',
    selectFileType: 'Assessment Document',
    documentNo: '0123456789012345',
    digitizeActions: 'Digitize',
    fileActions: 'Edit Data',
    fileSize: '4.2 MB',
    uploadedBy: 'Ravi Agarwal',
    uploadedDateTime: '07:30am 15th May 2025',
    digitizationStatus: 'Digitized',
    signingStatus: 'Signed',
    eSanchitMappingStatus: 'Mapped',
    isExpanded: false,
    isSelected: false,
    subFiles: [
      {
        id: '10-1',
        sNo: '10.',
        fileName: 'assessment_summary.pdf',
        selectFileType: 'Assessment Document',
        documentNo: '0123456789012346',
        digitizeActions: 'Digitize',
        fileActions: 'Edit Data',
        fileSize: '2.1 MB',
        uploadedBy: 'Ravi Agarwal',
        uploadedDateTime: '07:30am 15th May 2025',
        digitizationStatus: 'Digitized',
        signingStatus: 'Signed',
        eSanchitMappingStatus: 'Mapped'
      },
      {
        id: '10-2',
        sNo: '11.',
        fileName: 'detailed_breakdown.pdf',
        selectFileType: 'Assessment Document',
        documentNo: '0123456789012347',
        digitizeActions: 'Digitize',
        fileActions: 'Edit Data',
        fileSize: '1.8 MB',
        uploadedBy: 'Ravi Agarwal',
        uploadedDateTime: '07:30am 15th May 2025',
        digitizationStatus: 'Digitized',
        signingStatus: 'Signed',
        eSanchitMappingStatus: 'Mapped'
      },
      {
        id: '10-3',
        sNo: '12.',
        fileName: 'compliance_check.pdf',
        selectFileType: 'Assessment Document',
        documentNo: '0123456789012348',
        digitizeActions: 'Digitize',
        fileActions: 'Edit Data',
        fileSize: '1.5 MB',
        uploadedBy: 'Ravi Agarwal',
        uploadedDateTime: '07:30am 15th May 2025',
        digitizationStatus: 'Digitized',
        signingStatus: 'Signed',
        eSanchitMappingStatus: 'Mapped'
      }
    ]
  }
];

const mockXlsData: FileData[] = [
  {
    id: '1',
    sNo: 1,
    fileName: 'Import_Data_Sheet1.xlsx',
    selectedSheets: 'Sheet1, Sheet2',
    uploadedBy: 'John Smith',
    uploadedTime: '2025-01-15 10:30 AM',
    status: 'Processed',
    isExpanded: false,
    isSelected: false
  },
  {
    id: '2',
    sNo: 2,
    fileName: 'Customs_Declaration.xlsx',
    selectedSheets: 'Main Data',
    uploadedBy: 'Sarah Johnson',
    uploadedTime: '2025-01-15 11:45 AM',
    status: 'Processing',
    isExpanded: false,
    isSelected: false
  },
  {
    id: '3',
    sNo: 3,
    fileName: 'Cargo_Details.xlsx',
    selectedSheets: 'Sheet1, Sheet3, Sheet4',
    uploadedBy: 'Mike Davis',
    uploadedTime: '2025-01-15 02:15 PM',
    status: 'Failed',
    isExpanded: false,
    isSelected: false
  },
  {
    id: '4',
    sNo: 4,
    fileName: 'Invoice_Data.xlsx',
    selectedSheets: 'Invoice, Summary',
    uploadedBy: 'Emily Wilson',
    uploadedTime: '2025-01-15 03:20 PM',
    status: 'Pending',
    isExpanded: false,
    isSelected: false
  },
  {
    id: '5',
    sNo: 5,
    fileName: 'Bill_of_Lading.xlsx',
    selectedSheets: 'BL Data',
    uploadedBy: 'Alex Brown',
    uploadedTime: '2025-01-15 04:10 PM',
    status: 'Processed',
    isExpanded: false,
    isSelected: false
  },
  {
    id: '6',
    sNo: 6,
    fileName: 'Packing_List.xlsx',
    selectedSheets: 'Sheet1, Sheet2, Sheet5',
    uploadedBy: 'Lisa Garcia',
    uploadedTime: '2025-01-15 05:30 PM',
    status: 'Processing',
    isExpanded: false,
    isSelected: false
  },
  {
    id: '7',
    sNo: 7,
    fileName: 'Certificate_Details.xlsx',
    selectedSheets: 'Certificates',
    uploadedBy: 'David Miller',
    uploadedTime: '2025-01-16 09:15 AM',
    status: 'Processed',
    isExpanded: false,
    isSelected: false
  },
  {
    id: '8',
    sNo: 8,
    fileName: 'Inspection_Report.xlsx',
    selectedSheets: 'Report, Summary',
    uploadedBy: 'Amanda Taylor',
    uploadedTime: '2025-01-16 10:45 AM',
    status: 'Failed',
    isExpanded: false,
    isSelected: false
  },
  {
    id: '9',
    sNo: 9,
    fileName: 'Shipping_Manifest.xlsx',
    selectedSheets: 'Manifest Data',
    uploadedBy: 'Robert Jones',
    uploadedTime: '2025-01-16 01:20 PM',
    status: 'Pending',
    isExpanded: false,
    isSelected: false
  },
  {
    id: '10',
    sNo: 10,
    fileName: 'Duty_Calculation.xlsx',
    selectedSheets: 'Calculations, Rates',
    uploadedBy: 'Jennifer Lee',
    uploadedTime: '2025-01-16 02:55 PM',
    status: 'Processing',
    isExpanded: false,
    isSelected: false
  }
];

export default function EnhancedFilesTable({ onPdfClick, isEmpty = false, onUploadClick, mode = 'pdf', onFileUpload }: EnhancedFilesTableProps) {
  const [data, setData] = useState<FileData[]>(isEmpty ? [] : (mode === 'pdf' ? mockMainData : mockXlsData));
  const [columns, setColumns] = useState<Column[]>(mode === 'pdf' ? defaultColumns : xlsColumns);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [selectAll, setSelectAll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredCell, setHoveredCell] = useState<{rowId: string, columnKey: string} | null>(null);
  const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());
  const [showColumnCustomization, setShowColumnCustomization] = useState(false);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const [tableWidth, setTableWidth] = useState(1200);

  // Update data when isEmpty or mode prop changes
  useEffect(() => {
    if (isEmpty) {
      setData([]);
    } else {
      const newData = mode === 'pdf' ? mockMainData : mockXlsData;
      const newColumns = mode === 'pdf' ? defaultColumns : xlsColumns;
      setData(newData);
      setColumns([...newColumns]);
    }
  }, [isEmpty, mode]);

  // Compute column groups with proper filtering
  const leftFixedColumns = useMemo(() => {
    return columns.filter(col => col.fixed === 'left' && col.visible);
  }, [columns]);

  const scrollableColumns = useMemo(() => {
    return columns.filter(col => !col.fixed && col.visible);
  }, [columns]);

  const rightFixedColumns = useMemo(() => {
    return columns.filter(col => col.fixed === 'right' && col.visible);
  }, [columns]);

  const leftFixedWidth = useMemo(() => 
    leftFixedColumns.reduce((sum, col) => sum + col.width, 0) + 34, // +34 for checkbox column
    [leftFixedColumns]
  );
  
  const rightFixedWidth = useMemo(() => 
    rightFixedColumns.reduce((sum, col) => sum + col.width, 0), 
    [rightFixedColumns]
  );

  // Calculate total scrollable width with dynamic distribution
  const scrollableWidth = useMemo(() => {
    const containerWidth = tableWidth;
    const fixedWidth = leftFixedWidth + rightFixedWidth;
    const availableWidth = containerWidth - fixedWidth - 40; // 40px margin
    const minRequiredWidth = scrollableColumns.reduce((sum, col) => sum + col.minWidth, 0);
    
    // If available width is greater than minimum required, distribute extra space
    if (availableWidth > minRequiredWidth) {
      const extraSpace = availableWidth - minRequiredWidth;
      const flexColumns = scrollableColumns.length;
      const extraPerColumn = Math.floor(extraSpace / flexColumns);
      
      // Update column widths to use available space
      scrollableColumns.forEach(col => {
        const newWidth = Math.min(col.minWidth + extraPerColumn, col.maxWidth);
        col.width = newWidth;
      });
    }
    
    return scrollableColumns.reduce((sum, col) => sum + col.width, 0);
  }, [scrollableColumns, leftFixedWidth, rightFixedWidth, tableWidth]);

  // Drag and drop handlers
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files);
    }
  }, []);

  const handleFileUpload = useCallback((files: File[]) => {
    // Filter files based on current mode
    const validFiles = files.filter(file => {
      if (mode === 'pdf') {
        return file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
      } else {
        return file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || 
               file.type === 'application/vnd.ms-excel' ||
               file.name.toLowerCase().endsWith('.xlsx') ||
               file.name.toLowerCase().endsWith('.xls');
      }
    });

    if (validFiles.length === 0) {
      alert(`Please upload valid ${mode === 'pdf' ? 'PDF' : 'Excel'} files only.`);
      return;
    }

    // Add uploaded files to the table
    const newFiles: FileData[] = validFiles.map((file, index) => {
      const baseId = data.length + index + 1;
      if (mode === 'pdf') {
        return {
          id: baseId.toString(),
          sNo: baseId,
          fileName: file.name,
          selectFileType: '',
          documentNo: generateDocumentNumber(),
          digitizeActions: 'Digitize',
          fileActions: 'Edit Data',
          fileSize: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
          uploadedBy: 'Current User',
          uploadedDateTime: new Date().toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          }),
          digitizationStatus: 'Not Digitized',
          signingStatus: 'Not Signed',
          eSanchitMappingStatus: 'Not Fetched',
          isExpanded: false,
          isSelected: false,
          subFiles: []
        };
      } else {
        return {
          id: baseId.toString(),
          sNo: baseId,
          fileName: file.name,
          selectedSheets: 'Sheet1',
          uploadedBy: 'Current User',
          uploadedTime: new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }),
          status: 'Pending',
          isExpanded: false,
          isSelected: false
        };
      }
    });

    setData(prevData => [...prevData, ...newFiles]);
    
    // Call the file upload callback if provided
    if (onFileUpload) {
      onFileUpload(validFiles);
    }
    
    // Call the original upload callback if provided
    if (onUploadClick) {
      onUploadClick();
    }
  }, [data, mode, onUploadClick, onFileUpload]);

  // Handle file input for button clicks
  const handleFileInputClick = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = mode === 'pdf' ? '.pdf' : '.xlsx,.xls';
    
    input.onchange = (event) => {
      const files = Array.from((event.target as HTMLInputElement).files || []);
      if (files.length > 0) {
        handleFileUpload(files);
      }
    };
    
    input.click();
  }, [mode, handleFileUpload]);

  const handleSelectAll = useCallback(() => {
    if (isEmpty) return;
    
    if (selectAll) {
      setSelectedRows(new Set());
      setData(prev => prev.map(row => ({ ...row, isSelected: false })));
    } else {
      const allIds = new Set(data.map(row => row.id));
      setSelectedRows(allIds);
      setData(prev => prev.map(row => ({ ...row, isSelected: true })));
    }
    setSelectAll(!selectAll);
  }, [selectAll, data, isEmpty]);

  const handleSelectRow = useCallback((rowId: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(rowId)) {
      newSelected.delete(rowId);
    } else {
      newSelected.add(rowId);
    }
    setSelectedRows(newSelected);
    setSelectAll(newSelected.size === data.length);
    
    setData(prev => prev.map(row => 
      row.id === rowId ? { ...row, isSelected: !row.isSelected } : row
    ));
  }, [selectedRows, data.length]);

  const handleExpandRow = useCallback((rowId: string) => {
    setData(prev => prev.map(row => 
      row.id === rowId ? { ...row, isExpanded: !row.isExpanded } : row
    ));
  }, []);

  const handleScrollableScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollLeft);
  }, []);

  const handleCellHover = useCallback((rowId: string, columnKey: string) => {
    setHoveredCell({ rowId, columnKey });
  }, []);

  const handleCellLeave = useCallback(() => {
    setHoveredCell(null);
  }, []);

  const handleColumnHover = useCallback((columnKey: string) => {
    // Only set column hover if no cell is currently hovered
    if (!hoveredCell) {
      setHoveredColumn(columnKey);
    }
  }, [hoveredCell]);

  const handleColumnLeave = useCallback(() => {
    setHoveredColumn(null);
  }, []);

  const handleCellHoverWithColumn = useCallback((rowId: string, columnKey: string) => {
    setHoveredCell({ rowId, columnKey });
    setHoveredColumn(columnKey);
  }, []);

  const handleCellLeaveWithColumn = useCallback(() => {
    setHoveredCell(null);
    setHoveredColumn(null);
  }, []);

  // Dropdown handlers
  const handleDropdownToggle = useCallback((dropdownId: string) => {
    setOpenDropdowns(prev => {
      const newSet = new Set(prev);
      if (newSet.has(dropdownId)) {
        newSet.delete(dropdownId);
      } else {
        newSet.clear(); // Close all other dropdowns
        newSet.add(dropdownId);
      }
      return newSet;
    });
  }, []);



  const handleDropdownSelect = useCallback((dropdownId: string, fileType: string, isSubRow: boolean) => {
    // Close the dropdown
    setOpenDropdowns(prev => {
      const newSet = new Set(prev);
      newSet.delete(dropdownId);
      return newSet;
    });

    // Update the data
    if (isSubRow) {
      setData(prevData => 
        prevData.map(row => ({
          ...row,
          subFiles: row.subFiles?.map(subFile => 
            subFile.id === dropdownId ? { ...subFile, selectFileType: fileType } : subFile
          )
        }))
      );
    } else {
      setData(prevData => 
        prevData.map(row => 
          row.id === dropdownId ? { ...row, selectFileType: fileType } : row
        )
      );
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setOpenDropdowns(new Set());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Column customization handlers
  const handleColumnCustomizationSave = useCallback((updatedColumns: Column[]) => {
    setColumns(updatedColumns);
    setShowColumnCustomization(false);
  }, []);

  const handleColumnCustomizationClose = useCallback(() => {
    setShowColumnCustomization(false);
  }, []);

  // Three dots icon handler for XLS mode
  const handleThreeDotsClick = useCallback(() => {
    setShowColumnCustomization(true);
  }, []);

  // Observe table container size changes
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        setTableWidth(entry.contentRect.width);
      }
    });

    if (tableRef.current) {
      resizeObserver.observe(tableRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  // Calculate shadow visibility - hide right shadow in empty state
  const containerWidth = tableRef.current?.clientWidth || 0;
  const availableScrollWidth = containerWidth - leftFixedWidth - rightFixedWidth;
  const showLeftShadow = !isEmpty && scrollPosition > 0;
  const showRightShadow = !isEmpty && scrollPosition < scrollableWidth - availableScrollWidth;

  // Render checkbox using the imported Figma component styles
  const renderCheckbox = (isChecked: boolean) => (
    <div className="relative w-[18px] h-[18px]">
      <svg
        className="block w-full h-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g>
          {isChecked ? (
            // Checked state - use blue fill with checkmark
            <path
              d={checkboxSvgPaths.p37fdf00}
              fill="#3874FF"
            />
          ) : (
            // Unchecked state - use gray outline
            <path
              d={uncheckedCheckboxSvgPaths.p2e32d400}
              fill="#CDCFD3"
            />
          )}
        </g>
      </svg>
    </div>
  );

  const renderStatusIndicator = (status: string) => (
    <div className="flex items-center gap-2">
      <div className="w-[18px] h-[18px] flex-shrink-0">
        <svg className="w-full h-full" fill="none" viewBox="0 0 18 18">
          <circle
            cx="9"
            cy="9"
            fill="#F44545"
            fillOpacity="0.1"
            r="6.75"
          />
          <circle
            cx="9"
            cy="9"
            fill="#F44545"
            r="3.375"
          />
        </svg>
      </div>
      <span className="text-[14px] text-[#050e25] font-normal truncate">
        {status}
      </span>
    </div>
  );

  const renderFilterIcon = () => (
    <div className="w-[16px] h-[16px] flex-shrink-0 cursor-pointer hover:opacity-80 ml-1">
      <svg
        className="w-full h-full"
        fill="none"
        viewBox="0 0 16 16"
      >
        <path
          d={filterSvgPaths.p8cd7480}
          fill="#626776"
        />
      </svg>
    </div>
  );

  const renderFileIcon = () => (
    <div className="w-[18px] h-[18px] flex-shrink-0">
      <svg className="w-full h-full" fill="none" viewBox="0 0 22 22">
        <g>
          <g filter="url(#filter0_i_files_table)" id="Rectangle 1620">
            <path d={pdfSvgPaths.p37738600} fill="#F0F0F0" />
          </g>
          <foreignObject height="9" width="19" x="2" y="-1">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_0_files_table_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            clipRule="evenodd"
            d={pdfSvgPaths.p6d97f00}
            data-figma-bg-blur-radius="4"
            fill="#CECACA"
            fillRule="evenodd"
            id="Line 141 (Stroke)"
          />
          <foreignObject height="9" width="17" x="2" y="1">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_1_files_table_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            clipRule="evenodd"
            d={pdfSvgPaths.p20c2fc80}
            data-figma-bg-blur-radius="4"
            fill="#CECACA"
            fillRule="evenodd"
            id="Line 142 (Stroke)"
          />
          <foreignObject height="9" width="13" x="2" y="3">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_2_files_table_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            clipRule="evenodd"
            d={pdfSvgPaths.p34922e00}
            data-figma-bg-blur-radius="4"
            fill="#CECACA"
            fillRule="evenodd"
            id="Line 143 (Stroke)"
          />
          <g filter="url(#filter4_i_files_table)" id="Frame 1">
            <g clipPath="url(#clip3_files_table)">
              <rect
                fill="url(#paint0_linear_files_table)"
                height="8"
                rx="1"
                width="16"
                y="11"
              />
              <g filter="url(#filter5_d_files_table)" id="PDF">
                <path d={pdfSvgPaths.p6b34580} fill="white" />
                <path d={pdfSvgPaths.pa9d0740} fill="white" />
                <path d={pdfSvgPaths.p3d6ed980} fill="white" />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="22"
            id="filter0_i_files_table"
            width="18"
            x="4"
            y="0"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.733771 0 0 0 0 0.733771 0 0 0 0 0.733771 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_files_table"
            />
          </filter>
          <clipPath
            id="bgblur_0_files_table_clip_path"
            transform="translate(-2 1)"
          >
            <path clipRule="evenodd" d={pdfSvgPaths.p6d97f00} fillRule="evenodd" />
          </clipPath>
          <clipPath
            id="bgblur_1_files_table_clip_path"
            transform="translate(-2 -1)"
          >
            <path
              clipRule="evenodd"
              d={pdfSvgPaths.p20c2fc80}
              fillRule="evenodd"
            />
          </clipPath>
          <clipPath
            id="bgblur_2_files_table_clip_path"
            transform="translate(-2 -3)"
          >
            <path
              clipRule="evenodd"
              d={pdfSvgPaths.p34922e00}
              fillRule="evenodd"
            />
          </clipPath>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="16"
            id="filter4_i_files_table"
            width="24"
            x="-4"
            y="7"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="0.75" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.775929 0 0 0 0 0.186825 0 0 0 0 0.12177 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_files_table"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="8.5"
            id="filter5_d_files_table"
            width="16"
            x="0"
            y="10.8"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.124814 0 0 0 0 0.0481408 0 0 0 0 0.0397764 0 0 0 0.26 0"
            />
            <feBlend
              in2="BackgroundImageFix"
              mode="normal"
              result="effect1_dropShadow_files_table"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_files_table"
              mode="normal"
              result="shape"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_files_table"
            x1="8.09961"
            x2="8.09961"
            y1="9.66667"
            y2="16.3333"
          >
            <stop offset="0.0844957" stopColor="#F2A097" />
            <stop offset="1" stopColor="#FF513E" />
          </linearGradient>
          <clipPath id="clip3_files_table">
            <rect fill="white" height="8" rx="1" width="16" y="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );

  const renderButton = (text: string, variant: 'primary' | 'secondary') => {
    if (variant === 'primary') {
      return (
        <div className="bg-[#3874FF] box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0 cursor-pointer hover:bg-[#2563eb] transition-colors">
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[18px] whitespace-pre">{text}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-[rgba(56,116,255,0.1)] box-border content-stretch flex flex-row gap-2 items-center justify-center px-2 py-1 relative rounded shrink-0 cursor-pointer hover:bg-[rgba(56,116,255,0.2)] transition-colors">
          <div className="absolute border border-[#3874FF] border-solid inset-0 pointer-events-none rounded" />
          <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#3874FF] text-[14px] text-left text-nowrap">
            <p className="block leading-[18px] whitespace-pre">{text}</p>
          </div>
        </div>
      );
    }
  };

  const renderUserAvatar = (name: string) => (
    <div className="flex items-center gap-2">
      <div className="relative shrink-0 size-6">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="#FE7C7C" r="12" />
          <g>
            <path d={svgPaths.p187c5080} fill="white" />
            <path d={svgPaths.p30fd8300} fill="white" />
          </g>
        </svg>
      </div>
      <span className="text-[14px] text-[#050e25] font-normal truncate">
        {name}
      </span>
    </div>
  );

  const renderFileTypeDropdown = (value: string, rowId: string, isSubRow: boolean = false) => {
    const fileTypes = [
      'Multi-typed Document',
      'Invoice Document',
      'Bill of Lading',
      'Customs Declaration',
      'Packing List',
      'Certificate',
      'Insurance Document',
      'Shipping Document',
      'Quality Document',
      'Assessment Document'
    ];

    const isOpen = openDropdowns.has(rowId);

    return (
      <div className="relative w-full dropdown-container">
        <div className="flex items-center justify-between w-full">
          <span className={`text-[14px] font-normal truncate ${!value ? 'text-gray-500' : 'text-[#050e25]'}`}>
            {value || 'Select File Type'}
          </span>
          <svg 
            className={`w-4 h-4 text-gray-400 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        {isOpen && (
          <div 
            className="absolute top-full left-0 right-0 z-50 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto"
            style={{ marginTop: '4px' }}
          >
            {fileTypes.map((fileType) => (
              <div
                key={fileType}
                className={`
                  px-3 py-2 text-[14px] cursor-pointer transition-colors duration-150
                  ${value === fileType 
                    ? 'bg-[#3874FF] text-white' 
                    : 'text-[#050e25] hover:bg-gray-100'
                  }
                `}
                onClick={() => handleDropdownSelect(rowId, fileType, isSubRow)}
              >
                {fileType}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderCell = (row: FileData, column: Column, isSubRow: boolean = false, subData?: SubFileData) => {
    const cellData = isSubRow ? subData : row;
    let content = null;

    switch (column.key) {
      case 'sNo':
        content = (
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-semibold text-[#050e25]">
              {isSubRow ? subData?.sNo : row.sNo}
            </span>
            {!isSubRow && mode === 'pdf' && (
              <div 
                className={`w-[18px] h-[18px] flex items-center justify-center flex-shrink-0 ${
                  row.subFiles ? 'cursor-pointer' : 'cursor-default opacity-50'
                }`}
                onClick={() => row.subFiles && handleExpandRow(row.id)}
              >
                <svg className="w-full h-full" fill="none" viewBox="0 0 18 18">
                  <path
                    d={row.isExpanded ? svgPaths.p3dd41900 : svgPaths.p1a435af0}
                    fill={row.subFiles ? "#626776" : "#d0d5e3"}
                  />
                </svg>
              </div>
            )}
          </div>
        );
        break;
        
      case 'fileName':
        content = (
          <div className="flex items-center gap-2">
            {renderFileIcon()}
            <span 
              className="text-[14px] text-[#3874FF] cursor-pointer hover:underline truncate font-normal"
              onClick={() => onPdfClick && onPdfClick(isSubRow ? subData?.fileName || '' : row.fileName)}
            >
              {isSubRow ? subData?.fileName : row.fileName}
            </span>
          </div>
        );
        break;
        
      case 'selectFileType':
        content = renderFileTypeDropdown(
          isSubRow ? subData?.selectFileType || '' : row.selectFileType,
          isSubRow ? subData?.id || '' : row.id,
          isSubRow
        );
        break;
        
      case 'documentNo':
        content = (
          <span className="text-[14px] text-[#050e25] font-normal font-mono">
            {isSubRow ? subData?.documentNo : row.documentNo}
          </span>
        );
        break;
        
      case 'digitizeActions':
        // Always render "Digitize" button with primary styling
        content = (
          <div className="flex items-center justify-center w-full">
            {renderButton('Digitize', 'primary')}
          </div>
        );
        break;
        
      case 'fileActions':
        const fileAction = isSubRow ? subData?.fileActions : row.fileActions;
        content = (
          <div className="flex items-center justify-center w-full">
            {renderButton(fileAction || 'Edit Data', 'secondary')}
          </div>
        );
        break;
        
      case 'fileSize':
        content = (
          <span className="text-[14px] text-[#050e25] font-normal">
            {isSubRow ? subData?.fileSize : row.fileSize}
          </span>
        );
        break;
        
      case 'uploadedBy':
        const uploaderName = isSubRow ? subData?.uploadedBy : row.uploadedBy;
        content = renderUserAvatar(uploaderName || 'Unknown');
        break;
        
      case 'uploadedDateTime':
        content = (
          <span className="text-[14px] text-[#050e25] font-normal">
            {isSubRow ? subData?.uploadedDateTime : row.uploadedDateTime}
          </span>
        );
        break;
        
      case 'digitizationStatus':
        content = renderStatusIndicator(isSubRow ? subData?.digitizationStatus || '' : row.digitizationStatus);
        break;
        
      case 'signingStatus':
        content = renderStatusIndicator(isSubRow ? subData?.signingStatus || '' : row.signingStatus);
        break;
        
      case 'eSanchitMappingStatus':
        content = renderStatusIndicator(isSubRow ? subData?.eSanchitMappingStatus || '' : row.eSanchitMappingStatus || '');
        break;

      case 'selectedSheets':
        content = (
          <span className="text-[14px] text-[#050e25] font-normal">
            {isSubRow ? subData?.selectedSheets : row.selectedSheets}
          </span>
        );
        break;

      case 'uploadedTime':
        content = (
          <span className="text-[14px] text-[#050e25] font-normal">
            {isSubRow ? subData?.uploadedTime : row.uploadedTime}
          </span>
        );
        break;

      case 'status':
        const statusValue = isSubRow ? subData?.status : row.status;
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
        content = (
          <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(statusValue || '')}`}>
            {statusValue}
          </span>
        );
        break;
        
      case 'actions':
        content = mode === 'xls' ? (
          <div 
            className="w-[18px] h-[18px] cursor-pointer flex items-center justify-center hover:bg-gray-100 rounded"
            onClick={handleThreeDotsClick}
          >
            <svg className="w-full h-full" fill="none" viewBox="0 0 18 18">
              <g>
                <circle cx="9" cy="3" r="1.5" fill="#626776" />
                <circle cx="9" cy="9" r="1.5" fill="#626776" />
                <circle cx="9" cy="15" r="1.5" fill="#626776" />
              </g>
            </svg>
          </div>
        ) : (
          <div className="w-[18px] h-[18px] cursor-pointer flex items-center justify-center">
            <svg className="w-full h-full" fill="none" viewBox="0 0 18 18">
              <path d={svgPaths.p3a06d000} fill="#626776" />
            </svg>
          </div>
        );
        break;
        
      default:
        content = (
          <span className="text-[14px] text-[#050e25] font-normal truncate">
            {(cellData as any)?.[column.key] || '-'}
          </span>
        );
    }

    return content;
  };

  const getCellClassName = (rowId: string, columnKey: string, isSubRow: boolean = false) => {
    const isCellHovered = hoveredCell?.rowId === rowId && hoveredCell?.columnKey === columnKey;
    const isOtherCellInRow = hoveredCell?.rowId === rowId && hoveredCell?.columnKey !== columnKey;
    const isDropdownOpen = openDropdowns.has(rowId) && columnKey === 'selectFileType';
    
    let className = `flex items-center min-h-[40px] flex-shrink-0 transition-all duration-150 cursor-pointer`;
    
    if (isSubRow) {
      className += ' bg-transparent';
      if (columnKey === 'selectFileType') {
        if (isDropdownOpen) {
          // Show shadow only when dropdown is open (active state)
          className += ' shadow-[0_2px_12px_#2F51A078]';
        } else if (isCellHovered) {
          // Hover state: blue borders only, no shadow
          className += '';
        } else if (isOtherCellInRow) {
          className += ' bg-[#CEF6F0] shadow-[inset_0_1px_0_0_#00B196,inset_0_-1px_0_0_#00B196] border-b border-[#d0d5e3]';
        } else {
          className += ' border-b border-[#d0d5e3]';
        }
      } else {
        if (isOtherCellInRow) {
          className += ' bg-[#CEF6F0] shadow-[inset_0_1px_0_0_#00B196,inset_0_-1px_0_0_#00B196] border-b border-[#d0d5e3]';
        } else if (isCellHovered) {
          className += ' bg-transparent shadow-[inset_0_0_0_1px_#3874FF] border-b border-[#d0d5e3]';
        } else {
          className += ' border-b border-[#d0d5e3]';
        }
      }
    } else if (columnKey === 'selectFileType') {
      // Special styling for dropdown cells - shadow only on open state
      if (isDropdownOpen) {
        className += ' bg-transparent shadow-[0_2px_12px_#2F51A078]';
      } else if (isCellHovered) {
        // Hover state: blue borders only (via inline styles), no shadow
        className += ' bg-transparent';
      } else if (isOtherCellInRow) {
        className += ' bg-[#CEF6F0] shadow-[inset_0_1px_0_0_#00B196,inset_0_-1px_0_0_#00B196] border-b border-[#d0d5e3]';
      } else {
        className += ' bg-transparent border-b border-[#d0d5e3]';
      }
    } else {
      if (isOtherCellInRow) {
        className += ' bg-[#CEF6F0] shadow-[inset_0_1px_0_0_#00B196,inset_0_-1px_0_0_#00B196] border-b border-[#d0d5e3]';
      } else if (isCellHovered) {
        className += ' bg-transparent shadow-[inset_0_0_0_1px_#3874FF] border-b border-[#d0d5e3]';
      } else {
        className += ' bg-transparent border-b border-[#d0d5e3]';
      }
    }
    
    return className;
  };

  // New function to get inline styles for blue borders
  const getCellStyle = (rowId: string, columnKey: string, isSubRow: boolean = false) => {
    const isCellHovered = hoveredCell?.rowId === rowId && hoveredCell?.columnKey === columnKey;
    const isDropdownOpen = openDropdowns.has(rowId) && columnKey === 'selectFileType';
    
    if (columnKey === 'selectFileType' && (isCellHovered || isDropdownOpen)) {
      return {
        border: '1px solid #3874FF',
        borderTop: '1px solid #3874FF',
        borderRight: '1px solid #3874FF', 
        borderBottom: '1px solid #3874FF',
        borderLeft: '1px solid #3874FF'
      };
    }
    
    return {};
  };

  const handleCellClick = (rowId: string, columnKey: string, isSubRow: boolean = false) => {
    if (columnKey === 'selectFileType') {
      handleDropdownToggle(isSubRow ? rowId : rowId);
    }
  };

  return (
    <div className="w-full h-full relative" ref={tableRef}>
      {/* Table Container */}
      <div className="absolute inset-0 bg-white rounded-[8px] border border-[#d0d5e3] overflow-hidden flex flex-col">
        {/* Fixed Left Header */}
        <div 
          className="absolute top-0 left-0 z-30 h-[34px] bg-[#ebeef7] border-b-[1px] border-[#d0d5e3] border-r border-[#d0d5e3] flex"
          style={{ width: leftFixedWidth }}
        >
          {/* Checkbox Column */}
          <div 
            className={`w-[34px] h-[34px] flex items-center justify-center border-r border-[#d0d5e3] flex-shrink-0 transition-colors cursor-pointer ${
              hoveredColumn === 'checkbox' ? 'bg-[#CEF6F0] !border-t-[1px] !border-r-[1px] !border-b-[1px] !border-l-[1px] !border-[#00B196]' : 'bg-[#ebeef7]'
            }`}
            onMouseEnter={() => handleColumnHover('checkbox')}
            onMouseLeave={handleColumnLeave}
          >
            <div 
              className="w-[18px] h-[18px] cursor-pointer flex items-center justify-center"
              onClick={handleSelectAll}
            >
              {renderCheckbox(selectAll)}
            </div>
          </div>
          
          {/* Left Fixed Columns */}
          {leftFixedColumns.map((column, index) => (
            <Resizable
              key={column.key}
              size={{ width: column.width, height: 34 }}
              minWidth={column.minWidth}
              maxWidth={column.maxWidth}
              enable={{ 
                right: true,
                top: false, 
                bottom: false, 
                left: false, 
                topRight: false, 
                bottomRight: false, 
                bottomLeft: false, 
                topLeft: false 
              }}
              onResizeStop={(e, direction, ref, d) => {
                setColumns(prev => 
                  prev.map(col => 
                    col.key === column.key 
                      ? { ...col, width: column.width + d.width }
                      : col
                  )
                );
              }}
              className={`flex items-center flex-shrink-0 transition-colors cursor-pointer ${
                hoveredColumn === column.key ? 'bg-[#CEF6F0] !border-t-[1px] !border-r-[1px] !border-b-[1px] !border-l-[1px] !border-[#00B196]' : 'bg-[#ebeef7] border-b border-[#d0d5e3]'
              } ${
                column.key === 'fileName' ? 'border-r border-[#d0d5e3]' : 
                index === leftFixedColumns.length - 1 ? '' : 'border-r border-[#d0d5e3]'
              }`}
              onMouseEnter={() => handleColumnHover(column.key)}
              onMouseLeave={handleColumnLeave}
            >
              <div className="flex items-center justify-between px-2 h-full w-full">
                <span className="text-[14px] font-semibold text-[#050e25] truncate">
                  {column.title}
                </span>
                {column.title && renderFilterIcon()}
              </div>
            </Resizable>
          ))}
        </div>

        {/* Scrollable Header */}
        <div 
          className="absolute top-0 z-20 h-[34px] bg-[#ebeef7] border-b-[1px] border-[#d0d5e3] overflow-hidden"
          style={{ 
            left: leftFixedWidth, 
            right: rightFixedWidth,
            transform: `translateX(-${scrollPosition}px)`,
            width: scrollableWidth
          }}
        >
          <div className="flex h-full" style={{ width: scrollableWidth }}>
            {scrollableColumns.map((column, index) => (
              <Resizable
                key={column.key}
                size={{ width: column.width, height: 34 }}
                minWidth={column.minWidth}
                maxWidth={column.maxWidth}
                enable={{ 
                  right: true,
                  top: false, 
                  bottom: false, 
                  left: false, 
                  topRight: false, 
                  bottomRight: false, 
                  bottomLeft: false, 
                  topLeft: false 
                }}
                onResizeStop={(e, direction, ref, d) => {
                  setColumns(prev => 
                    prev.map(col => 
                      col.key === column.key 
                        ? { ...col, width: column.width + d.width }
                        : col
                    )
                  );
                }}
                className={`flex items-center flex-shrink-0 transition-colors cursor-pointer ${
                  hoveredColumn === column.key ? 'bg-[#CEF6F0] !border-t-[1px] !border-r-[1px] !border-b-[1px] !border-l-[1px] !border-[#00B196]' : 'bg-[#ebeef7] border-b border-[#d0d5e3]'
                } ${
                  index < scrollableColumns.length - 1 ? 'border-r border-[#d0d5e3]' : ''
                }`}
                onMouseEnter={() => handleColumnHover(column.key)}
                onMouseLeave={handleColumnLeave}
              >
                <div className="flex items-center justify-between px-2 h-full w-full">
                  <span className="text-[14px] font-semibold text-[#050e25] truncate">
                    {column.title}
                  </span>
                  {column.title && renderFilterIcon()}
                </div>
              </Resizable>
            ))}
          </div>
        </div>

        {/* Fixed Right Header */}
        <div 
          className="absolute top-0 right-0 z-30 h-[34px] bg-[#ebeef7] border-b-[1px] border-[#d0d5e3] border-l border-[#d0d5e3] flex"
          style={{ width: rightFixedWidth }}
        >
          {rightFixedColumns.map((column, index) => (
            <div
              key={column.key}
              className={`flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer ${
                hoveredColumn === column.key ? 'bg-[#CEF6F0] !border-t-[1px] !border-r-[1px] !border-b-[1px] !border-l-[1px] !border-[#00B196]' : 'bg-[#ebeef7] border-b border-[#d0d5e3]'
              } ${index > 0 ? 'border-l border-[#d0d5e3]' : ''}`}
              onMouseEnter={() => handleColumnHover(column.key)}
              onMouseLeave={handleColumnLeave}
              style={{ width: column.width, height: 34 }}
            >
              <div className="w-[18px] h-[18px] flex items-center justify-center">
                <svg className="w-full h-full" fill="none" viewBox="0 0 18 18">
                  <rect fill="#626776" height="12" width="1.2" x="5" y="3" />
                  <path d={svgPaths.p3c1edf00} fill="#626776" />
                  <path d={svgPaths.p6dabd00} fill="#626776" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Table Body */}
        <div className="absolute top-[34px] left-0 right-0 bottom-0 flex">
          {/* Empty State or Data */}
          {isEmpty ? (
            <div 
              className={`w-full h-full flex items-center justify-center transition-colors ${
                isDragOver ? 'bg-blue-50' : ''
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="pointer-events-auto">
                <EmptyStateMessage 
                  onUploadClick={handleFileInputClick}
                  fileType={mode === 'pdf' ? 'PDF files' : 'Excel files (.xlsx, .xls)'}
                />
              </div>
              {isDragOver && (
                <div className="absolute inset-0 border-2 border-dashed border-blue-400 bg-blue-50 bg-opacity-50 flex items-center justify-center">
                  <div className="text-blue-600 text-[16px] font-semibold">
                    Drop {mode === 'pdf' ? 'PDF' : 'Excel'} files here to upload
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Fixed Left Body */}
              <div 
                className="z-20 bg-white overflow-hidden"
                style={{ width: leftFixedWidth }}
              >
                {data.map((row, rowIndex) => (
                  <div key={`main-row-${row.id}`} className="w-full">
                    {/* Main Row Left Fixed Part */}
                    <div className="flex min-h-[40px]">
                      {/* Checkbox Column */}
                      <div 
                        className={`w-[34px] min-h-[40px] flex items-center justify-center border-b-[1px] border-r border-[#d0d5e3] flex-shrink-0 transition-colors cursor-pointer ${
                          hoveredCell?.rowId === row.id && hoveredCell?.columnKey === 'checkbox' 
                            ? 'bg-transparent shadow-[inset_0_0_0_1px_#3874FF]'
                            : hoveredCell?.rowId === row.id 
                            ? 'bg-[#CEF6F0] shadow-[inset_0_1px_0_0_#00B196,inset_0_-1px_0_0_#00B196]' 
                            : 'bg-transparent'
                        }`}
                        onClick={() => handleSelectRow(row.id)}
                        onMouseEnter={() => handleCellHoverWithColumn(row.id, 'checkbox')}
                        onMouseLeave={handleCellLeaveWithColumn}
                      >
                        <div className="w-[18px] h-[18px] cursor-pointer flex items-center justify-center">
                          {renderCheckbox(row.isSelected)}
                        </div>
                      </div>

                      {/* Left Fixed Data Columns */}
                      {leftFixedColumns.map((column, colIndex) => (
                        <div
                          key={`${row.id}-${column.key}`}
                          className={`${getCellClassName(row.id, column.key)} ${
                            column.key === 'fileName' ? 'border-r border-[#d0d5e3]' : 
                            colIndex === leftFixedColumns.length - 1 ? '' : 'border-r border-[#d0d5e3]'
                          }`}
                          style={{ 
                            width: column.width,
                            ...getCellStyle(row.id, column.key)
                          }}
                          onMouseEnter={() => handleCellHoverWithColumn(row.id, column.key)}
                          onMouseLeave={handleCellLeaveWithColumn}
                          onClick={() => handleCellClick(row.id, column.key)}
                        >
                          <div className="flex items-center px-2 w-full h-full">
                            {renderCell(row, column)}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Expanded Sub-rows Left Fixed Part */}
                    {row.isExpanded && row.subFiles && (
                      <div className="w-full bg-transparent">
                        {row.subFiles.map((subFile, subIndex) => (
                          <div key={`sub-row-${subFile.id}`} className="flex min-h-[40px]">
                            {/* Checkbox Column for sub-rows */}
                            <div 
                              className={`w-[34px] min-h-[40px] flex items-center justify-center border-b-[1px] border-r border-[#d0d5e3] flex-shrink-0 transition-colors cursor-pointer ${
                                hoveredCell?.rowId === subFile.id && hoveredCell?.columnKey === 'checkbox' 
                                  ? 'bg-transparent shadow-[inset_0_0_0_1px_#3874FF]'
                                  : hoveredCell?.rowId === subFile.id 
                                  ? 'bg-[#CEF6F0] shadow-[inset_0_1px_0_0_#00B196,inset_0_-1px_0_0_#00B196]' 
                                  : 'bg-transparent'
                              }`}
                              onMouseEnter={() => handleCellHoverWithColumn(subFile.id, 'checkbox')}
                              onMouseLeave={handleCellLeaveWithColumn}
                            >
                              <div className="w-[18px] h-[18px] cursor-pointer flex items-center justify-center">
                                {renderCheckbox(false)}
                              </div>
                            </div>

                            {/* Left Fixed Data Columns for sub-rows */}
                            {leftFixedColumns.map((column, colIndex) => (
                              <div
                                key={`${subFile.id}-${column.key}`}
                                className={`${getCellClassName(subFile.id, column.key, true)} ${
                                  column.key === 'fileName' ? 'border-r border-[#d0d5e3]' : 
                                  colIndex === leftFixedColumns.length - 1 ? '' : 'border-r border-[#d0d5e3]'
                                }`}
                                style={{ 
                                  width: column.width,
                                  ...getCellStyle(subFile.id, column.key, true)
                                }}
                                onClick={() => handleCellClick(subFile.id, column.key, true)}
                              >
                                <div className="flex items-center px-2 w-full h-full">
                                  {renderCell(row, column, true, subFile)}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Scrollable Body */}
              <div 
                className="flex-1 overflow-x-auto overflow-y-hidden"
                ref={scrollableRef}
                onScroll={handleScrollableScroll}
              >
                <div style={{ width: scrollableWidth }}>
                  {data.map((row, rowIndex) => (
                    <div key={`scrollable-row-${row.id}`} className="w-full">
                      {/* Main Row Scrollable Part */}
                      <div className="flex min-h-[40px]">
                        {scrollableColumns.map((column, colIndex) => (
                          <div
                            key={`${row.id}-scrollable-${column.key}`}
                            className={`${getCellClassName(row.id, column.key)} ${
                              colIndex < scrollableColumns.length - 1 ? 'border-r border-[#d0d5e3]' : ''
                            }`}
                            style={{ 
                              width: column.width,
                              ...getCellStyle(row.id, column.key)
                            }}
                            onMouseEnter={() => handleCellHoverWithColumn(row.id, column.key)}
                            onMouseLeave={handleCellLeaveWithColumn}
                            onClick={() => handleCellClick(row.id, column.key)}
                          >
                            <div className="flex items-center px-2 w-full h-full">
                              {renderCell(row, column)}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Expanded Sub-rows Scrollable Part */}
                      {row.isExpanded && row.subFiles && (
                        <div className="w-full bg-transparent">
                          {row.subFiles.map((subFile, subIndex) => (
                            <div key={`scrollable-sub-row-${subFile.id}`} className="flex min-h-[40px]">
                              {scrollableColumns.map((column, colIndex) => (
                                <div
                                  key={`${subFile.id}-scrollable-${column.key}`}
                                  className={`${getCellClassName(subFile.id, column.key, true)} ${
                                    colIndex < scrollableColumns.length - 1 ? 'border-r border-[#d0d5e3]' : ''
                                  }`}
                                  style={{ 
                                    width: column.width,
                                    ...getCellStyle(subFile.id, column.key, true)
                                  }}
                                  onClick={() => handleCellClick(subFile.id, column.key, true)}
                                >
                                  <div className="flex items-center px-2 w-full h-full">
                                    {renderCell(row, column, true, subFile)}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Fixed Right Body */}
              <div 
                className="z-20 bg-white overflow-hidden"
                style={{ width: rightFixedWidth }}
              >
                {data.map((row, rowIndex) => (
                  <div key={`right-fixed-row-${row.id}`} className="w-full">
                    {/* Main Row Right Fixed Part */}
                    <div className="flex min-h-[40px]">
                      {rightFixedColumns.map((column, index) => (
                        <div
                          key={`${row.id}-right-${column.key}`}
                          className={`${getCellClassName(row.id, column.key)} ${
                            index === 0 ? 'border-l border-[#d0d5e3]' : 'border-l border-[#d0d5e3]'
                          } justify-center`}
                          style={{ 
                            width: column.width,
                            ...getCellStyle(row.id, column.key)
                          }}
                          onMouseEnter={() => handleCellHoverWithColumn(row.id, column.key)}
                          onMouseLeave={handleCellLeaveWithColumn}
                          onClick={() => handleCellClick(row.id, column.key)}
                        >
                          <div className="flex items-center justify-center px-2 w-full h-full">
                            {renderCell(row, column)}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Expanded Sub-rows Right Fixed Part */}
                    {row.isExpanded && row.subFiles && (
                      <div className="w-full bg-transparent">
                        {row.subFiles.map((subFile, subIndex) => (
                          <div key={`right-fixed-sub-row-${subFile.id}`} className="flex min-h-[40px]">
                            {rightFixedColumns.map((column, index) => (
                              <div
                                key={`${subFile.id}-right-${column.key}`}
                                className={`${getCellClassName(subFile.id, column.key, true)} ${
                                  index === 0 ? 'border-l border-[#d0d5e3]' : 'border-l border-[#d0d5e3]'
                                } justify-center`}
                                style={{ 
                                  width: column.width,
                                  ...getCellStyle(subFile.id, column.key, true)
                                }}
                                onClick={() => handleCellClick(subFile.id, column.key, true)}
                              >
                                <div className="flex items-center justify-center px-2 w-full h-full">
                                  {renderCell(row, column, true, subFile)}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Scrollable Shadows - Only show when not in empty state */}
        {showLeftShadow && (
          <div 
            className="absolute top-[34px] bottom-0 w-4 pointer-events-none z-40"
            style={{ 
              left: leftFixedWidth,
              background: 'linear-gradient(to right, rgba(0,0,0,0.1), transparent)'
            }}
          />
        )}
        
        {showRightShadow && (
          <div 
            className="absolute top-[34px] bottom-0 w-4 pointer-events-none z-40"
            style={{ 
              right: rightFixedWidth,
              background: 'linear-gradient(to left, rgba(0,0,0,0.1), transparent)'
            }}
          />
        )}
      </div>

      {/* Column Customization Modal */}
      {showColumnCustomization && (
        <ColumnCustomization
          isOpen={showColumnCustomization}
          onClose={handleColumnCustomizationClose}
          columns={columns}
          onSave={handleColumnCustomizationSave}
        />
      )}
    </div>
  );
}