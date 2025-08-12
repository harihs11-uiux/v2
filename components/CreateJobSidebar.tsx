import React, { useState, useRef } from 'react';
import svgPaths from '../imports/svg-ipu0wpqvz5';
import filesSvgPaths from '../imports/svg-0i8vvlnysj';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Checkbox } from './ui/checkbox';
import { Upload, FileText, Plus } from 'lucide-react';
import ArrowDropdown from '../imports/ArrowDropdown-335-131';
import fileIcon from 'figma:asset/d2b14e0b0e9feecd17520fe588675e079ae93195.png';
import pdfIcon from 'figma:asset/96f1a53492dc6d043b2a94eb2643742a5e017a16.png';
import EmptyStateMessage from '../imports/EmptyStateMessage';
import FooterActionControls from '../imports/FooterActionControls-393-1489';

interface CreateJobSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

interface UploadedFile {
  id: string;
  file: File;
  uploadTime: string;
}

interface FormData {
  // CB Details
  cbBranch: string;
  assignedTo: string;
  
  // Job Details
  modeOfTransport: string;
  beType: string;
  customsHouseCode: string;
  transactionRefNo: string;
  
  // Importer Details
  importerName: string;
  importerAddress: string;
  iecPanBr: string;
  importerId: string;
  importerCity: string;
  importerPincode: string;
  countryPin: string;
  adCode: string;
  icegateId: string;
  importerType: string;

  files: UploadedFile[];
}

// Sample data for dropdowns
const modeOfTransportOptions = [
  { value: 'Sea', label: 'Sea' },
  { value: 'Air', label: 'Air' },
  { value: 'Land', label: 'Land' }
];

const beTypeOptions = [
  { value: 'H', label: 'H-Home Consumption' },
  { value: 'W', label: 'W-Warehouse' },
  { value: 'E', label: 'E-Ex-bond' },
  { value: 'T', label: 'T-Transit' },
  { value: 'R', label: 'R-Reexport' },
  { value: 'D', label: 'D-Duty Free' }
];

const cbBranchOptions = [
  { value: '015', label: '015 - Mumbai' },
  { value: '002', label: '002 - Delhi' }, 
  { value: '003', label: '003 - Chennai' },
  { value: '004', label: '004 - Kolkata' },
  { value: '005', label: '005 - Bangalore' },
  { value: '006', label: '006 - Hyderabad' },
  { value: '007', label: '007 - Pune' },
  { value: '008', label: '008 - Ahmedabad' }
];

const customsHouseCodeOptions = [
  { value: 'INMA1', label: 'INMA1 - Chennai Port' },
  { value: 'INMAA1', label: 'INMAA1 - Chennai Sea' },
  { value: 'INMAA4', label: 'INMAA4 - Chennai Air Cargo' },
  { value: 'INBOM2', label: 'INBOM2 - Mumbai Air Cargo' },
  { value: 'INDEL4', label: 'INDEL4 - Delhi Air Cargo' },
  { value: 'INKOL5', label: 'INKOL5 - Kolkata Port' },
  { value: 'INBLR2', label: 'INBLR2 - Bangalore Airport' },
  { value: 'INHYD1', label: 'INHYD1 - Hyderabad Air Cargo' }
];

const cityOptions = [
  { value: 'MUMBAI', label: 'MUMBAI' },
  { value: 'DELHI', label: 'DELHI' },
  { value: 'CHENNAI', label: 'CHENNAI' },
  { value: 'KOLKATA', label: 'KOLKATA' },
  { value: 'BANGALORE', label: 'BANGALORE' },
  { value: 'HYDERABAD', label: 'HYDERABAD' }
];

const countryOptions = [
  { value: '27-MAHARASHTRA', label: '27-MAHARASHTRA' },
  { value: '06-HARYANA', label: '06-HARYANA' },
  { value: '33-TAMIL NADU', label: '33-TAMIL NADU' },
  { value: '19-WEST BENGAL', label: '19-WEST BENGAL' },
  { value: '29-KARNATAKA', label: '29-KARNATAKA' },
  { value: '36-TELANGANA', label: '36-TELANGANA' }
];

const adCodeOptions = [
  { value: '55665', label: '55665' },
  { value: '55666', label: '55666' },
  { value: '55667', label: '55667' },
  { value: '55668', label: '55668' },
  { value: '55669', label: '55669' }
];

// Custom Dropdown Component
interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
  onHoverChange?: (isHovered: boolean) => void;
}

const CustomDropdown: React.FC<DropdownProps> = ({ value, onChange, options, placeholder, className = "", onHoverChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const selectedOption = options.find(opt => opt.value === value);

  const showBorder = isHovered || isFocused || isOpen;
  const showShadow = isFocused || isOpen;

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange?.(false);
  };

  const displayText = selectedOption?.label || placeholder || 'Select...';

  return (
    <div className="relative w-full h-full">
      {/* Blue border overlay on hover/focus */}
      {showBorder && (
        <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none z-10" />
      )}
      
      {/* Box shadow overlay on focus/active */}
      {showShadow && (
        <div 
          className="absolute inset-0 pointer-events-none z-5" 
          style={{ 
            boxShadow: '0px 2px 12px 0px rgba(113, 144, 214, 0.47)' 
          }} 
        />
      )}
      
      <Popover open={isOpen} onOpenChange={(open) => {
        setIsOpen(open);
        setIsFocused(open);
      }}>
        <PopoverTrigger asChild>
          <div 
            className={`flex flex-row gap-1 items-center justify-start cursor-pointer transition-all duration-200 p-[8px] w-full h-full ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            tabIndex={0}
          >
            <div className="flex-1 font-['Inter:Regular',_sans-serif] font-normal text-[14px]" style={{ color: selectedOption ? '#050e25' : '#9497a1' }}>
              <p className="leading-[18px]">{displayText}</p>
            </div>
            <div className="relative shrink-0 size-[18px]">
              <ArrowDropdown />
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0 bg-[#050E25] border-[#626776]" side="bottom" align="start">
          <div className="max-h-64 overflow-y-auto">
            {options.map((option) => (
              <div
                key={option.value}
                className="px-3 py-2 cursor-pointer hover:bg-[#1a1a2e] text-white text-[14px] border-b border-[#626776] last:border-b-0"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                  setIsFocused(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

// Custom Input Component
interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  multiline?: boolean;
  onHoverChange?: (isHovered: boolean) => void;
}

const CustomInput: React.FC<InputProps> = ({ value, onChange, placeholder, className = "", multiline = false, onHoverChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const showBorder = isHovered || isFocused;
  const showShadow = isFocused;

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange?.(false);
  };

  if (multiline) {
    return (
      <div className="relative w-full h-full">
        {/* Blue border overlay on hover/focus */}
        {showBorder && (
          <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none z-10" />
        )}
        
        {/* Box shadow overlay on focus/active */}
        {showShadow && (
          <div 
            className="absolute inset-0 pointer-events-none z-5" 
            style={{ 
              boxShadow: '0px 2px 12px 0px rgba(113, 144, 214, 0.47)' 
            }} 
          />
        )}
        
        <div 
          className="w-full h-full p-[8px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={`w-full h-full bg-transparent border-none outline-none resize-none font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px] placeholder:text-[#9497a1] ${className}`}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {/* Blue border overlay on hover/focus */}
      {showBorder && (
        <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none z-10" />
      )}
      
      {/* Box shadow overlay on focus/active */}
      {showShadow && (
        <div 
          className="absolute inset-0 pointer-events-none z-5" 
          style={{ 
            boxShadow: '0px 2px 12px 0px rgba(113, 144, 214, 0.47)' 
          }} 
        />
      )}
      
      <div 
        className="w-full h-[34px] p-[8px] rounded-br-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full h-full bg-transparent border-none outline-none font-['Inter:Regular',_sans-serif] font-normal text-[#050e25] text-[14px] leading-[18px] placeholder:text-[#9497a1] ${className}`}
        />
      </div>
    </div>
  );
};

// Functional Empty State Component with Figma Design
const FunctionalEmptyStateMessage: React.FC<{ onUploadClick: () => void }> = ({ onUploadClick }) => {
  return (
    <div 
      className="w-full h-full cursor-pointer"
      onClick={onUploadClick}
    >
      <div className="relative w-full h-full">
        <EmptyStateMessage />
        {/* Invisible clickable overlay for the Upload button */}
        <div 
          className="absolute cursor-pointer z-10"
          style={{
            left: '50%',
            top: 'calc(50% + 100px)',
            transform: 'translateX(-50%)',
            width: '88px',
            height: '36px'
          }}
          onClick={(e) => {
            e.stopPropagation();
            onUploadClick();
          }}
        />
      </div>
    </div>
  );
};

// Custom Footer Action Controls Component
const CustomFooterActionControls: React.FC<{
  selectedCount: number;
  onDelete: () => void;
}> = ({ selectedCount, onDelete }) => {
  return (
    <div className="bg-[#050e25] box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative rounded-lg w-full h-[40px]">
      {/* Left Button - Selection Count */}
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center leading-[0] px-2 py-1 relative rounded shrink-0">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
          <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-3 items-center justify-start ml-0 mt-0 p-0 relative">
            <div className="overflow-clip relative shrink-0 size-[18px]">
              <div className="absolute inset-[6.25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g>
                    <circle cx="7.875" cy="7.875" fill="#3874FF" r="7.875" />
                    <g>
                      <rect fill="white" height="5.625" rx="0.5625" width="1.125" x="7.3125" y="6.1875" />
                      <circle cx="7.875" cy="4.5" fill="white" r="0.5625" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left text-nowrap">
          <p className="block leading-[18px] whitespace-pre">{selectedCount} item{selectedCount !== 1 ? 's' : ''} selected</p>
        </div>
      </div>

      {/* Separator */}
      <div className="flex h-[20px] items-center justify-center relative shrink-0 w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-5">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 20 1">
                <line stroke="#505767" x2="20" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right Button - Delete */}
      <button 
        onClick={onDelete}
        className="box-border content-stretch flex flex-row gap-1 items-center justify-center leading-[0] px-2 py-1 relative rounded shrink-0 hover:bg-[#1a1a2e] transition-colors duration-200"
      >
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
          <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-3 items-center justify-start ml-0 mt-0 p-0 relative">
            <div className="relative shrink-0 size-[18px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <g>
                  <mask height="18" id="mask0_delete" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                    <rect fill="#D9D9D9" height="18" width="18" />
                  </mask>
                  <g mask="url(#mask0_delete)">
                    <path d="M5.475 15.75C5.1 15.75 4.78125 15.615 4.51875 15.345C4.25625 15.075 4.125 14.7471 4.125 14.3614V4.56429H3.375V3.40714H6.75V2.24999H11.25V3.40714H14.625V4.56429H13.875V14.3614C13.875 14.7471 13.7438 15.075 13.4813 15.345C13.2188 15.615 12.9 15.75 12.525 15.75H5.475ZM12.75 4.56429H5.25V14.3614C5.25 14.4257 5.272 14.4805 5.316 14.5257C5.3595 14.5705 5.4125 14.5929 5.475 14.5929H12.525C12.575 14.5929 12.625 14.5671 12.675 14.5157C12.725 14.4643 12.75 14.4129 12.75 14.3614V4.56429ZM7.05 13.05H8.175V6.10714H7.05V13.05ZM9.825 13.05H10.95V6.10714H9.825V13.05ZM5.25 4.56429V14.5929V14.3614V4.56429Z" fill="#CF3B3B" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#cf3b3b] text-[14px] text-left text-nowrap">
          <p className="block leading-[18px] whitespace-pre">Delete File</p>
        </div>
      </button>
    </div>
  );
};

const CreateJobSidebar: React.FC<CreateJobSidebarProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    // CB Details
    cbBranch: '',
    assignedTo: '',
    
    // Job Details
    modeOfTransport: '',
    beType: '',
    customsHouseCode: '',
    transactionRefNo: '',
    
    // Importer Details
    importerName: '',
    importerAddress: '',
    iecPanBr: '',
    importerId: '',
    importerCity: '',
    importerPincode: '',
    countryPin: '',
    adCode: '',
    icegateId: '',
    importerType: '',

    files: []
  });

  const [selectedFiles, setSelectedFiles] = useState<Set<string>>(new Set());
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Separate hover states for City & State fields
  const [isCityDropdownHovered, setIsCityDropdownHovered] = useState(false);
  const [isPincodeInputHovered, setIsPincodeInputHovered] = useState(false);

  // Computed state for label highlighting
  const isCityStateHovered = isCityDropdownHovered || isPincodeInputHovered;

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // File upload functions
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const generateFileId = (): string => {
    return Math.random().toString(36).substr(2, 9);
  };

  const getCurrentTime = (): string => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    const date = now.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
    return `${time} ${date}`;
  };

  const validateFile = (file: File): string | null => {
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return 'File size must be less than 10MB';
    }

    // Only allow PDF files
    if (file.type !== 'application/pdf') {
      return 'Only PDF files are allowed';
    }

    return null;
  };

  const handleFilesUpload = (files: FileList | File[]) => {
    const fileArray = Array.from(files);
    const newFiles: UploadedFile[] = [];
    const errors: string[] = [];

    fileArray.forEach(file => {
      const error = validateFile(file);
      if (error) {
        errors.push(`${file.name}: ${error}`);
      } else {
        const exists = formData.files.some(f => f.file.name === file.name && f.file.size === file.size);
        if (!exists) {
          newFiles.push({
            id: generateFileId(),
            file: file,
            uploadTime: getCurrentTime()
          });
        }
      }
    });

    if (errors.length > 0) {
      alert(errors.join('\n'));
    }

    if (newFiles.length > 0) {
      handleInputChange('files', [...formData.files, ...newFiles]);
    }
  };

  const handleFileSelect = (fileId: string) => {
    const newSelected = new Set(selectedFiles);
    if (newSelected.has(fileId)) {
      newSelected.delete(fileId);
    } else {
      newSelected.add(fileId);
    }
    setSelectedFiles(newSelected);
  };

  const handleSelectAllFiles = () => {
    if (selectedFiles.size === formData.files.length) {
      setSelectedFiles(new Set());
    } else {
      setSelectedFiles(new Set(formData.files.map(f => f.id)));
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFileList = Array.from(e.target.files || []);
    if (selectedFileList.length > 0) {
      handleFilesUpload(selectedFileList);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteSelectedFiles = () => {
    if (selectedFiles.size === 0) return;
    
    const remainingFiles = formData.files.filter(file => !selectedFiles.has(file.id));
    handleInputChange('files', remainingFiles);
    setSelectedFiles(new Set()); // Clear selection after deletion
  };

  const handleCancelSelection = () => {
    setSelectedFiles(new Set());
  };

  const handleSubmit = () => {
    // Generate a unique job number
    const jobNumber = `ICB/${Math.floor(Math.random() * 99999) + 10000}/2025-26`;
    
    // Create job data with generated job number
    const jobData = {
      ...formData,
      jobNumber,
      createdAt: new Date().toISOString(),
      status: 'In Progress'
    };
    
    onSubmit(jobData);
  };

  if (!isOpen) return null;

  // Icon Components
  function ChecklistIconsImports() {
    return (
      <div className="overflow-clip relative shrink-0 size-6" data-name="Checklist Icons Imports">
        <div className="absolute h-4 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px]" data-name="Shapes">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
            <g id="Shapes">
              <path d={svgPaths.p39a43b00} fill="url(#paint0_linear_267_15116)" id="Ellipse 2840" />
              <g id="Rectangle 274140">
                <g filter="url(#filter0_i_267_15116)">
                  <path d={svgPaths.p343ad000} fill="url(#paint1_linear_267_15116)" />
                </g>
                <path d={svgPaths.p34c1f400} stroke="url(#paint2_linear_267_15116)" strokeWidth="0.2" />
              </g>
              <foreignObject height="15.6" width="26" x="-4" y="-1.99997">
                <div style={{ backdropFilter: "blur(2px)", clipPath: "url(#bgblur_0_267_15116_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
              </foreignObject>
              <path d={svgPaths.p2008ed00} data-figma-bg-blur-radius="4" fill="var(--fill-0, #F1A66A)" id="Rectangle 274141" stroke="url(#paint3_linear_267_15116)" strokeWidth="0.2" />
              <foreignObject height="13.0667" width="12.7684" x="2.85263" y="3.33333">
                <div style={{ backdropFilter: "blur(2.6px)", clipPath: "url(#bgblur_1_267_15116_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
              </foreignObject>
              <g data-figma-bg-blur-radius="5.2" filter="url(#filter2_d_267_15116)" id="Rectangle 274260">
                <rect fill="url(#paint4_linear_267_15116)" height="2.66667" rx="1" shapeRendering="crispEdges" width="2.36842" x="8.05263" y="8.53333" />
              </g>
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16" id="filter0_i_267_15116" width="18" x="0" y="2">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.444444 0 0 0 0 0 0 0 0 1 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_267_15116" />
              </filter>
              <clipPath id="bgblur_0_267_15116_clip_path" transform="translate(4 1.99997)">
                <path d={svgPaths.p2008ed00} />
              </clipPath>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.0667" id="filter2_d_267_15116" width="12.7684" x="2.85263" y="3.33333">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.818289 0 0 0 0 0.481499 0 0 0 0 0.208104 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_267_15116" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_267_15116" mode="normal" result="shape" />
              </filter>
              <clipPath id="bgblur_1_267_15116_clip_path" transform="translate(-2.85263 -3.33333)">
                <rect height="2.66667" rx="1" width="2.36842" x="8.05263" y="8.53333" />
              </clipPath>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_267_15116" x1="8.86855" x2="9.23037" y1="-6.1943e-09" y2="11.6804">
                <stop stopColor="#FF7200" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_267_15116" x1="9" x2="11.4817" y1="-1.52649" y2="27.0303">
                <stop stopColor="#DD6200" />
                <stop offset="0.371712" stopColor="#FF9846" />
                <stop offset="0.667431" stopColor="#FF7100" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_267_15116" x1="9" x2="9" y1="2.48938" y2="16">
                <stop stopColor="#FFBD87" />
                <stop offset="1" stopColor="#D37222" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_267_15116" x1="7.65" x2="7.29872" y1="19.0145" y2="0.673446">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_267_15116" x1="9.23684" x2="8.9676" y1="8.53333" y2="11.7306">
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.29" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    );
  }

  function MasterSelectionIcon() {
    return (
      <div className="relative shrink-0 size-[18px]" data-name="master selection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 18 18">
          <g id="Icon Skeleton 1">
            <mask height="18" id="mask0_212_32323" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
              <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
            </mask>
            <g mask="url(#mask0_212_32323)">
              <path d={svgPaths.p3d558af0} fill="var(--fill-0, #626776)" id="apps" />
            </g>
          </g>
        </svg>
      </div>
    );
  }

  // Files Icon Component
  function FilesIcon() {
    return (
      <img 
        src={fileIcon} 
        alt="File icon" 
        className="w-[24px] h-[24px] flex-shrink-0"
      />
    );
  }

  // PDF Icon Component for file names
  function PDFIcon() {
    return (
      <img 
        src={pdfIcon} 
        alt="PDF icon" 
        className="w-[18px] h-[18px] flex-shrink-0"
      />
    );
  }

  // More Vert Icon Component
  function MoreVertIcon() {
    return (
      <div className="relative shrink-0 size-[18px]" data-name="more_vert">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 18 18">
          <g id="more_vert">
            <mask height="18" id="mask0_218_140070" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
              <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
            </mask>
            <g mask="url(#mask0_218_140070)">
              <path d={filesSvgPaths.p3a06d000} fill="var(--fill-0, #626776)" id="more_vert_2" />
            </g>
          </g>
        </svg>
      </div>
    );
  }

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 z-50"
        style={{
          backgroundColor: 'rgba(40, 82, 181, 0.3)',
          backdropFilter: 'blur(30%)'
        }}
        onClick={onClose}
      />
      
      {/* Sidebar - Fixed to right side */}
      <div className="fixed right-0 top-0 h-full w-[1017px] bg-[#cad2e5] shadow-lg z-50 flex flex-col" data-name="Sidebar">
        
        {/* Title Bar */}
        <div className="bg-[#1f2432] box-border content-stretch flex flex-row items-start justify-between p-[16px] h-24 border-b border-[#505767]" data-name="Title Bar">
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic text-left" data-name="Text">
            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#ffffff] text-[16px] w-full">
              <p className="block leading-[18px]">Create Import Job</p>
            </div>
            <div className="font-['Inter:Regular',_sans-serif] font-normal text-[#cdcfd3] text-[14px] w-full">
              <p className="block leading-[18px]">Enter the basic details to created Import Job</p>
            </div>
          </div>
          <button onClick={onClose} className="cursor-pointer bg-transparent border-none p-0">
            <div className="relative shrink-0 size-[18px]" data-name="close">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 18 18">
                <g>
                  <mask height="18" id="mask0_267_15142" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                    <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
                  </mask>
                  <g mask="url(#mask0_267_15142)">
                    <path d={svgPaths.p4280c0} fill="var(--fill-0, #9497A1)" id="close_2" />
                  </g>
                </g>
              </svg>
            </div>
          </button>
        </div>

        {/* Content Area - Scrollable with fixed title bar and footer */}
        <div 
          className="flex-1 flex flex-col px-6 pt-6 pb-3 overflow-y-auto table-container" 
          style={{ height: 'calc(100vh - 96px - 80px)' }} // Subtract title bar and footer heights
        >
          
          {/* Form Sections Container */}
          <div className="flex flex-col">
            
            {/* Job Details Section Header */}
            <div className="bg-[#dde3f2] h-[45px] w-full border border-[#d0d5e3] rounded-t-lg" data-name="Section Header">
              <div className="flex items-center justify-center h-full gap-2">
                <ChecklistIconsImports />
                <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[16px]">
                  <p className="leading-[20px]">Job details</p>
                </div>
              </div>
            </div>

            {/* 1. CB DETAILS Section */}
            <div>
              {/* CB DETAILS Header */}
              <div className="bg-[#ebeef7] h-10 w-full border border-[#d0d5e3] border-t-0">
                <div className="h-10 overflow-clip relative w-full">
                  <div className="absolute font-['Roboto:Bold',_sans-serif] font-bold text-[#050e25] text-[14px] text-center translate-x-[-50%] top-1/2 left-1/2 transform -translate-y-1/2">
                    <ol className="list-decimal" start={1}>
                      <li className="list-inside mb-0 ms-[21px]">
                        <span className="leading-[18px]">CB Details</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* CB Details Form Row */}
              <div className="bg-[#ffffff] flex flex-row items-start justify-start w-full h-[34px] border border-[#d0d5e3] border-t-0">
                {/* Select Branch */}
                <div className="flex-1 flex flex-row h-[34px] items-start justify-start group">
                  <div className="bg-[rgba(221,227,242,0.42)] group-hover:bg-[#CEF6F0] border-l border-r border-b border-[#d0d5e3] group-hover:border group-hover:border-[#00B196] flex flex-row gap-1 h-[34px] items-start justify-start p-[8px] w-[150px] transition-colors duration-200">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px] overflow-ellipsis overflow-hidden text-nowrap">
                      <p className="leading-[18px]">Select Branch</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col h-[34px] items-start justify-start border-r border-[#d0d5e3]">
                    <div className="flex flex-row items-start justify-start w-full h-full">
                      <div className="flex-1 h-full flex items-center">
                        <CustomDropdown
                          value={formData.cbBranch}
                          onChange={(value) => handleInputChange('cbBranch', value)}
                          options={cbBranchOptions}
                          placeholder="Select CB Branch"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Assign to */}
                <div className="flex-1 flex flex-row h-[34px] items-start justify-start group">
                  <div className="bg-[rgba(221,227,242,0.42)] group-hover:bg-[#CEF6F0] border-l border-r border-b border-[#d0d5e3] group-hover:border group-hover:border-[#00B196] flex flex-row gap-1 items-start justify-start p-[8px] w-[150px] h-[34px] transition-colors duration-200">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px] overflow-ellipsis overflow-hidden text-nowrap">
                      <p className="leading-[18px]">Assign to</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col h-[34px] items-start justify-start">
                    <div className="flex flex-row items-start justify-start w-full h-full">
                      <div className="flex-1 h-full flex items-center">
                        <CustomInput
                          value={formData.assignedTo}
                          onChange={(value) => handleInputChange('assignedTo', value)}
                          placeholder="Select User"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. JOB DETAILS Section */}
            <div>
              {/* JOB DETAILS Header */}
              <div className="bg-[#ebeef7] h-10 w-full border border-[#d0d5e3] border-t-0">
                <div className="h-10 overflow-clip relative w-full border-l border-r border-[#d0d5e3]">
                  <div className="absolute font-['Roboto:Bold',_sans-serif] font-bold text-[#050e25] text-[14px] text-center translate-x-[-50%] top-1/2 left-1/2 transform -translate-y-1/2">
                    <ol className="list-decimal" start={2}>
                      <li className="list-inside mb-0 ms-[21px]">
                        <span className="leading-[18px]">Job Details</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Job Details Forms - Row 1 */}
              <div className="bg-[#ffffff] flex flex-row items-start justify-start w-full h-[34px] border border-[#d0d5e3] border-t-0 border-b border-[#d0d5e3]">
                {/* Mode of Transport */}
                <div className="flex-1 flex flex-row h-[34px] items-start justify-start group">
                  <div className="bg-[#f3f5fa] group-hover:bg-[#CEF6F0] border-l border-r border-b border-[#d0d5e3] group-hover:border group-hover:border-[#00B196] flex flex-row gap-1 items-start justify-start p-[8px] w-[150px] h-[34px] transition-colors duration-200">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px] overflow-ellipsis overflow-hidden text-nowrap">
                      <p className="leading-[18px]">Mode of Transport</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col h-[34px] items-start justify-start border-r border-[#d0d5e3]">
                    <div className="flex flex-row items-start justify-start w-full h-full">
                      <div className="flex-1 h-full flex items-center">
                        <CustomDropdown
                          value={formData.modeOfTransport}
                          onChange={(value) => handleInputChange('modeOfTransport', value)}
                          options={modeOfTransportOptions}
                          placeholder="Select Mode of Transport"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* BE Type */}
                <div className="flex-1 flex flex-row h-[34px] items-start justify-start group">
                  <div className="bg-[#f3f5fa] group-hover:bg-[#CEF6F0] border-l border-r border-b border-[#d0d5e3] group-hover:border group-hover:border-[#00B196] flex flex-row gap-1 h-[34px] items-start justify-start p-[8px] w-[150px] transition-colors duration-200">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px] overflow-ellipsis overflow-hidden text-nowrap">
                      <p className="leading-[18px]">BE Type</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col h-[34px] items-start justify-start">
                    <div className="flex flex-row items-start justify-start w-full h-full">
                      <div className="flex-1 h-full flex items-center">
                        <CustomDropdown
                          value={formData.beType}
                          onChange={(value) => handleInputChange('beType', value)}
                          options={beTypeOptions}
                          placeholder="Select BE Type"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Details Forms - Row 2 */}
              <div className="bg-[#ffffff] flex flex-row items-start justify-start w-full h-[34px] border border-[#d0d5e3] border-t-0 border-b border-[#d0d5e3]">
                {/* Custom House Code */}
                <div className="flex-1 flex flex-row h-[34px] items-start justify-start group">
                  <div className="bg-[#f3f5fa] group-hover:bg-[#CEF6F0] border-l border-r border-b border-[#d0d5e3] group-hover:border group-hover:border-[#00B196] flex flex-row gap-1 items-start justify-start p-[8px] w-[150px] h-[34px] transition-colors duration-200">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px] overflow-ellipsis overflow-hidden text-nowrap">
                      <p className="leading-[18px]">Custom House Code</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col h-[34px] items-start justify-start border-r border-[#d0d5e3]">
                    <div className="flex flex-row items-start justify-start w-full h-full">
                      <div className="flex-1 h-full flex items-center">
                        <CustomDropdown
                          value={formData.customsHouseCode}
                          onChange={(value) => handleInputChange('customsHouseCode', value)}
                          options={customsHouseCodeOptions}
                          placeholder="Select Custom House Code"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transaction Ref No */}
                <div className="flex-1 flex flex-row h-[34px] items-start justify-start group">
                  <div className="bg-[#f3f5fa] group-hover:bg-[#CEF6F0] border-l border-r border-b border-[#d0d5e3] group-hover:border group-hover:border-[#00B196] flex flex-row gap-1 h-[34px] items-start justify-start p-[8px] w-[150px] transition-colors duration-200">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px] overflow-ellipsis overflow-hidden text-nowrap">
                      <p className="leading-[18px]">Transaction Ref No.</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col h-[34px] items-start justify-start rounded-br-lg overflow-hidden">
                    <div className="flex flex-row items-start justify-start w-full h-full">
                      <div className="flex-1 h-full flex items-center">
                        <CustomInput
                          value={formData.transactionRefNo}
                          onChange={(value) => handleInputChange('transactionRefNo', value)}
                          placeholder="Enter transaction reference number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. IMPORTER DETAILS Section */}
            <div>
              {/* IMPORTER DETAILS Header */}
              <div className="bg-[#ebeef7] h-10 w-full border border-[#d0d5e3] border-t-0">
                <div className="h-10 overflow-clip relative w-full border-l border-r border-[#d0d5e3]">
                  <div className="absolute font-['Roboto:Bold',_sans-serif] font-bold text-[#050e25] text-[14px] text-center translate-x-[-50%] top-1/2 left-1/2 transform -translate-y-1/2">
                    <ol className="list-decimal" start={3}>
                      <li className="list-inside mb-0 ms-[21px]">
                        <span className="leading-[18px]">Importer Details</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Importer Details Forms - Complex Layout */}
              <div className="bg-[#ffffff] flex flex-col items-start justify-start w-full border border-[#d0d5e3] border-t-0">
                
                {/* Name Row */}
                <div className="flex flex-row items-start justify-start w-full h-[34px] border-b border-[#d0d5e3]">
                  <div className="flex-1 flex flex-row h-[34px] items-start justify-start group">
                    <div className="bg-[#f3f5fa] group-hover:bg-[#CEF6F0] border-l border-r border-b border-[#d0d5e3] group-hover:border group-hover:border-[#00B196] flex flex-row gap-1 items-start justify-start px-2 py-1.5 w-[150px] h-[34px] transition-colors duration-200">
                      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px] overflow-ellipsis overflow-hidden text-nowrap">
                        <p className="leading-[18px]">Name</p>
                      </div>
                      <MasterSelectionIcon />
                    </div>
                    <div className="flex-1 flex flex-col h-[34px] items-start justify-start border-r border-[#d0d5e3]">
                      <div className="flex flex-row items-start justify-start w-full h-full">
                        <div className="flex-1 h-full flex items-center">
                          <CustomInput
                            value={formData.importerName}
                            onChange={(value) => handleInputChange('importerName', value)}
                            placeholder="Enter importer name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row h-[34px] items-start justify-start group">
                    <div className="bg-[#f3f5fa] group-hover:bg-[#CEF6F0] border-l border-r border-b border-[#d0d5e3] group-hover:border group-hover:border-[#00B196] flex flex-row gap-1 h-[34px] items-start justify-start p-[8px] w-[150px] transition-colors duration-200">
                      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px] overflow-ellipsis overflow-hidden text-nowrap">
                        <p className="leading-[18px]">IEC/PAN/Br</p>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col h-[34px] items-start justify-start">
                      <div className="flex flex-row items-start justify-start w-full h-full">
                        <div className="flex-1 h-full flex items-center">
                          <CustomInput
                            value={formData.iecPanBr}
                            onChange={(value) => handleInputChange('iecPanBr', value)}
                            placeholder="Enter IEC/PAN/Br"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address and Other Details Row - Using CSS Grid */}
                <div className="w-full bg-[#ffffff] grid grid-cols-2 border-[#d0d5e3]">
                  {/* Address Column - Spans 2 rows */}
                  <div className="row-span-2 group">
                    <div className="flex flex-row items-start justify-start w-full h-[68px]">
                      <div className="bg-[#f3f5fa] group-hover:bg-[#CEF6F0] border-l border-r border-[#d0d5e3] group-hover:border group-hover:border-[#00B196] flex flex-row gap-1 h-[68px] items-start justify-start px-2 py-1.5 w-[150px] transition-colors duration-200">
                        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px] overflow-ellipsis overflow-hidden text-nowrap">
                          <p className="leading-[18px]">Address</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col h-[68px] items-start justify-start border-r border-[#d0d5e3]">
                        <div className="flex flex-row items-start justify-start w-full h-full">
                          <div className="flex-1 h-full flex items-start">
                            <CustomInput
                              value={formData.importerAddress}
                              onChange={(value) => handleInputChange('importerAddress', value)}
                              placeholder="Enter importer address"
                              multiline={true}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ID Row */}
                  <div className="group">
                    <div className="flex flex-row items-start justify-start w-full h-[34px] border-b border-[#d0d5e3]">
                      <div className="bg-[#f3f5fa] group-hover:bg-[#CEF6F0] border-l border-r border-b border-[#d0d5e3] group-hover:border group-hover:border-[#00B196] flex flex-row gap-1 items-start justify-start p-[8px] w-[150px] h-[34px] transition-colors duration-200">
                        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px] overflow-ellipsis overflow-hidden text-nowrap">
                          <p className="leading-[18px]">ID</p>
                        </div>
                        <MasterSelectionIcon />
                      </div>
                      <div className="flex-1 flex flex-col h-[34px] items-start justify-start">
                        <div className="flex flex-row items-start justify-start w-full h-full">
                          <div className="flex-1 h-full flex items-center">
                            <CustomInput
                              value={formData.importerId}
                              onChange={(value) => handleInputChange('importerId', value)}
                              placeholder="Enter importer ID"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* City & State Row */}
                  <div className="group">
                    <div className="flex flex-row items-start justify-start w-full h-[34px]">
                      <div className={`flex flex-row gap-1 items-start justify-start p-[8px] w-[150px] h-[34px] transition-colors duration-200 ${isCityStateHovered ? 'bg-[#CEF6F0] border border-[#00B196]' : 'bg-[#f3f5fa] border-l border-r border-[#d0d5e3]'}`}>
                        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px] overflow-ellipsis overflow-hidden text-nowrap">
                          <p className="leading-[18px]">City &amp; State</p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col h-[34px] items-start justify-start border-r border-[#d0d5e3]">
                        <div className="flex flex-row items-center justify-start w-full h-full">
                          <div className="flex-1 h-full flex items-center">
                            <CustomDropdown
                              value={formData.importerCity}
                              onChange={(value) => handleInputChange('importerCity', value)}
                              options={cityOptions}
                              placeholder="Select City"
                              className="w-full"
                              onHoverChange={setIsCityDropdownHovered}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col h-[34px] items-start justify-start">
                        <div className="flex flex-row items-start justify-start w-full h-full">
                          <div className="flex-1 h-full flex items-center">
                            <CustomInput
                              value={formData.importerPincode}
                              onChange={(value) => handleInputChange('importerPincode', value)}
                              placeholder="Enter pincode"
                              onHoverChange={setIsPincodeInputHovered}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Details Row 1 */}
              <div className="bg-[#ffffff] flex flex-row items-start justify-start w-full h-[34px] border border-[#d0d5e3] border-t-0 border-b border-[#d0d5e3]">
                {/* Country & Pin */}
                <div className="flex-1 flex flex-row h-[34px] items-start justify-start group">
                  <div className="bg-[#f3f5fa] group-hover:bg-[#CEF6F0] border-l border-r border-b border-[#d0d5e3] group-hover:border group-hover:border-[#00B196] flex flex-row gap-1 items-start justify-start p-[8px] w-[150px] h-[34px] transition-colors duration-200">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px] overflow-ellipsis overflow-hidden text-nowrap">
                      <p className="leading-[18px]">Country &amp; Pin</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col h-[34px] items-start justify-start border-r border-[#d0d5e3]">
                    <div className="flex flex-row items-start justify-start w-full h-full">
                      <div className="flex-1 h-full flex items-center">
                        <CustomDropdown
                          value={formData.countryPin}
                          onChange={(value) => handleInputChange('countryPin', value)}
                          options={countryOptions}
                          placeholder="Select Country & Pin"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Type */}
                <div className="flex-1 flex flex-row h-[34px] items-start justify-start group">
                  <div className="bg-[#f3f5fa] group-hover:bg-[#CEF6F0] border-l border-r border-b border-[#d0d5e3] group-hover:border group-hover:border-[#00B196] flex flex-row gap-1 h-[34px] items-start justify-start p-[8px] w-[150px] transition-colors duration-200">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px] overflow-ellipsis overflow-hidden text-nowrap">
                      <p className="leading-[18px]">Type</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col h-[34px] items-start justify-start">
                    <div className="flex flex-row items-start justify-start w-full h-full">
                      <div className="flex-1 h-full flex items-center">
                        <CustomInput
                          value={formData.importerType}
                          onChange={(value) => handleInputChange('importerType', value)}
                          placeholder="Enter type (e.g., P-Private)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Details Row 2 */}
              <div className="bg-[#ffffff] flex flex-row items-start justify-start w-full h-[34px] border border-[#d0d5e3] border-t-0 rounded-bl-lg overflow-hidden">
                {/* AD Code */}
                <div className="flex-1 flex flex-row h-[34px] items-start justify-start group">
                  <div className="bg-[#f3f5fa] group-hover:bg-[#CEF6F0] border-l border-r border-b border-[#d0d5e3] group-hover:border group-hover:border-[#00B196] flex flex-row gap-1 items-start justify-start p-[8px] w-[150px] h-[34px] transition-colors duration-200">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px] overflow-ellipsis overflow-hidden text-nowrap">
                      <p className="leading-[18px]">AD Code</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col h-[34px] items-start justify-start border-r border-[#d0d5e3]">
                    <div className="flex flex-row items-start justify-start w-full h-full">
                      <div className="flex-1 h-full flex items-center">
                        <CustomDropdown
                          value={formData.adCode}
                          onChange={(value) => handleInputChange('adCode', value)}
                          options={adCodeOptions}
                          placeholder="Select AD Code"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Icegate ID */}
                <div className="flex-1 flex flex-row h-[34px] items-start justify-start group">
                  <div className="bg-[#f3f5fa] group-hover:bg-[#CEF6F0] border-l border-r border-b border-[#d0d5e3] group-hover:border group-hover:border-[#00B196] flex flex-row gap-1 h-[34px] items-start justify-start p-[8px] w-[150px] transition-colors duration-200">
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#050e25] text-[14px] overflow-ellipsis overflow-hidden text-nowrap">
                      <p className="leading-[18px]">Icegate ID</p>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col h-[34px] items-start justify-start">
                    <div className="flex flex-row items-start justify-start w-full h-full">
                      <div className="flex-1 h-full flex items-center">
                        <CustomInput
                          value={formData.icegateId}
                          onChange={(value) => handleInputChange('icegateId', value)}
                          placeholder="Enter Icegate ID"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Files Section - Fixed 500px height */}
            <div className="mt-3 flex flex-col flex-1 min-h-0 mb-3 relative">
              {/* Files Header with Upload Button */}
              <div className="bg-[#dde3f2] h-[45px] w-full border border-[#d0d5e3] border-t-0 flex items-center justify-center gap-2 relative flex-shrink-0 rounded-t-lg">
                <FilesIcon />
                <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic text-[#050e25] text-[16px] text-left text-nowrap">
                  <p className="block leading-[20px] whitespace-pre">Files</p>
                </div>
                <button 
                  onClick={handleUploadClick}
                  className="absolute bg-[#3874ff] box-border content-stretch flex flex-row gap-1 items-center justify-center leading-[0] px-2 py-1 right-4 rounded top-2.5"
                >
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-3 items-center justify-start ml-0 mt-0 p-0 relative">
                      <div className="relative shrink-0 size-[18px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" role="presentation" viewBox="0 0 18 18">
                          <g id="Icon Skeleton 10">
                            <mask height="18" id="mask0_339_1961" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
                              <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
                            </mask>
                            <g mask="url(#mask0_339_1961)">
                              <path d={filesSvgPaths.p2816c8c0} fill="var(--fill-0, white)" id="file_upload" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
                    <p className="block leading-[18px] whitespace-pre">Upload</p>
                  </div>
                </button>
              </div>

              {/* Files Table - Fixed 500px height */}
              <div 
                className="bg-[#fdfeff] border border-[#d0d5e3] border-t-0 rounded-b-lg relative table-container"
                style={{ height: '500px', overflowY: 'auto' }}
              >
                <div className="box-border content-stretch flex flex-col-reverse items-start justify-start overflow-clip p-0 relative size-full">
                  
                  {/* Table Header */}
                  <div className="box-border content-stretch flex flex-row-reverse items-start justify-start order-2 overflow-clip p-0 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
                    
                    {/* Freezed Header */}
                    <div className="basis-0 box-border content-stretch flex flex-row grow items-start justify-start min-h-px min-w-px order-3 overflow-clip p-0 relative shrink-0">
                      <div className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 items-center justify-center px-2 py-1.5 relative self-stretch shrink-0 h-[34px]">
                        <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                        <Checkbox 
                          checked={selectedFiles.size === formData.files.length && formData.files.length > 0}
                          onCheckedChange={handleSelectAllFiles}
                          className="h-[18px] w-[18px] data-[state=checked]:bg-[#3874ff] data-[state=checked]:border-[#3874ff] data-[state=checked]:text-white border-[#d0d5e3] bg-white"
                        />
                      </div>
                      <div className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-1.5 relative self-stretch shrink-0 h-[34px]">
                        <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[55px]">
                          <p className="block leading-[18px] overflow-inherit">S.No</p>
                        </div>
                      </div>
                      <div className="basis-0 bg-[#ebeef7] grow min-h-px min-w-px relative self-stretch shrink-0">
                        <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center relative size-full">
                          <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-1.5 relative w-full h-[34px]">
                            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap w-[184px]">
                              <p className="block leading-[18px] overflow-inherit">File Name</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Scrollable Header */}
                    <div className="box-border content-stretch flex flex-row items-center justify-start order-2 overflow-clip p-0 relative shrink-0 w-[280px]">
                      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
                        <div className="basis-0 bg-[#ebeef7] grow h-full min-h-px min-w-px relative shrink-0">
                          <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center relative size-full">
                            <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-1.5 relative w-full h-[34px]">
                              <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
                                <p className="block leading-[18px] overflow-inherit whitespace-pre">Uploaded Time</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Options Header */}
                    <div className="box-border content-stretch flex flex-row items-start justify-start order-1 p-0 relative shrink-0">
                      <div className="bg-[#ebeef7] box-border content-stretch flex flex-row gap-1 h-[34px] items-center justify-center px-2 py-1.5 relative shrink-0 w-[34px]">
                        <div className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Table Body - Fills remaining space */}
                  <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px order-1 p-0 relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full h-full">
                      
                      {/* File Rows */}
                      {formData.files.slice().reverse().map((file, index) => (
                        <div key={file.id} className="h-[34px] relative shrink-0 w-full">
                          <div className="box-border content-stretch flex flex-row h-[34px] items-start justify-start p-0 relative w-full">
                            
                            {/* Freezed Row */}
                            <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row items-center justify-end p-0 relative size-full">
                                <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-[34px] items-center justify-center px-2 py-1.5 relative shrink-0">
                                  <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                                  <Checkbox 
                                    checked={selectedFiles.has(file.id)}
                                    onCheckedChange={() => handleFileSelect(file.id)}
                                    className="h-[18px] w-[18px] data-[state=checked]:bg-[#3874ff] data-[state=checked]:border-[#3874ff] data-[state=checked]:text-white border-[#d0d5e3] bg-white"
                                  />
                                </div>
                                <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-[34px] items-center justify-start px-2 py-1.5 relative shrink-0">
                                  <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                                  <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left w-[55px]">
                                    <p className="block leading-[18px]">{formData.files.length - index}</p>
                                  </div>
                                </div>
                                <div className="basis-0 bg-[#ffffff] grow h-full min-h-px min-w-px relative shrink-0">
                                  <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                                  <div className="flex flex-row items-center relative size-full">
                                    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-1.5 relative w-full h-[34px]">
                                      <PDFIcon />
                                      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left w-[162px]">
                                        <p className="block leading-[18px]">{file.file.name}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Scrollable Row */}
                            <div className="bg-[#ffffff] h-[34px] relative shrink-0 w-[280px]">
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-[34px] items-center justify-end p-0 relative w-[280px]">
                                <div className="basis-0 bg-[#ffffff] grow h-[34px] min-h-px min-w-px relative shrink-0">
                                  <div className="absolute border-[#d0d5e3] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
                                  <div className="flex flex-row items-center relative w-full h-[34px]">
                                    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-1.5 relative w-full h-[34px]">
                                      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#050e25] text-[14px] text-left text-nowrap">
                                        <p className="block leading-[18px] whitespace-pre">{file.uploadTime}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Row Options */}
                            <div className="h-[34px] relative shrink-0 w-[34px]">
                              <div className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none" />
                              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-row h-[34px] items-center justify-start p-0 relative">
                                <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-1 h-[34px] items-start justify-start px-2 py-1.5 relative shrink-0 w-[34px]">
                                  <div className="absolute border-[#d0d5e3] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
                                  <button className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
                                    <MoreVertIcon />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Figma Design Empty State */}
                      {formData.files.length === 0 && (
                        <div className="flex items-center justify-center w-full flex-1">
                          <FunctionalEmptyStateMessage onUploadClick={handleUploadClick} />
                        </div>
                      )}

                      {/* Multiselect Action Controls - Positioned at the end of the table content */}
                      {selectedFiles.size > 0 && (
                        <div className="w-full flex items-center justify-center relative mt-[360px] mb-4 z-50">
                          <div className="px-4">
                            <CustomFooterActionControls
                              selectedCount={selectedFiles.size}
                              onDelete={handleDeleteSelectedFiles}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Hidden file input - Updated to accept only PDFs */}
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="application/pdf"
                  onChange={handleFileInput}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Fixed height with proper spacing - Full width like title bar */}
        <div className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-between p-[16px] border-t border-[#eff0f1] flex-shrink-0 h-20" data-name="Footer">
          <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start" />
          <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start">
            <button onClick={onClose} className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-2 rounded cursor-pointer hover:bg-gray-50 transition-colors bg-transparent border border-[#d0d5e3]">
              <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center text-[#3874ff] text-[14px] text-left text-nowrap">
                <p className="leading-[18px]">Cancel</p>
              </div>
            </button>
            <button onClick={handleSubmit} className="bg-[#3874ff] box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-2 rounded cursor-pointer hover:bg-[#2563eb] transition-colors">
              <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center text-[#ffffff] text-[14px] text-left text-nowrap">
                <p className="leading-[18px]">Create</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateJobSidebar;