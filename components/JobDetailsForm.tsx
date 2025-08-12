import React, { useState, useRef, useEffect } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown, X, Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import jobDetailsIcon from 'figma:asset/ce5fa9d874113f98e3b91bf210fa171674839fad.png';
import assignedToIcon from 'figma:asset/52ca4a4b56835bab45e78775b076143479002bcd.png';
import { ToggleSwitch } from './ToggleSwitch';

interface JobDetailsFormProps {
  jobData?: any;
  activeSection?: string;
}

// Custom DatePicker Component
interface DatePickerProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  inputRef?: (el: HTMLButtonElement | null) => void;
}

function DatePicker({
  value,
  onValueChange,
  placeholder = "Select",
  className = "",
  style = {},
  tabIndex,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onKeyDown,
  inputRef
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    value ? new Date(value) : undefined
  );
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Update selected date when value changes externally
  useEffect(() => {
    setSelectedDate(value ? new Date(value) : undefined);
  }, [value]);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const formattedDate = format(date, 'yyyy-MM-dd');
      setSelectedDate(date);
      onValueChange(formattedDate);
    } else {
      setSelectedDate(undefined);
      onValueChange('');
    }
    setIsOpen(false);
    
    // Return focus to the button and then blur it to return to normal state
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.focus();
        setTimeout(() => {
          if (buttonRef.current) {
            buttonRef.current.blur();
          }
        }, 10);
      }
    }, 50);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open && onBlur) {
      // Small delay to ensure popover has closed before triggering blur
      setTimeout(() => {
        onBlur();
      }, 100);
    }
  };

  const handleButtonFocus = () => {
    if (onFocus) onFocus();
  };

  const handleButtonBlur = (e: React.FocusEvent) => {
    // Only trigger blur if we're not focusing on the popover content
    if (!isOpen && onBlur) {
      onBlur();
    }
  };

  const displayValue = selectedDate ? format(selectedDate, 'MMM dd, yyyy') : '';

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <button
          ref={(el) => {
            buttonRef.current = el;
            if (inputRef) inputRef(el);
          }}
          type="button"
          className={`${className} flex items-center justify-between gap-2 w-full h-full text-left bg-transparent border-none outline-none focus:outline-none`}
          style={style}
          tabIndex={tabIndex}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onFocus={handleButtonFocus}
          onBlur={handleButtonBlur}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(!isOpen);
            } else if (onKeyDown) {
              onKeyDown(e);
            }
          }}
        >
          <span className={`text-[14px] overflow-x-auto overflow-y-hidden whitespace-nowrap min-w-0 flex-1 ${displayValue ? 'text-[#050e25]' : 'text-gray-400'}`} style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}>
            {displayValue || placeholder}
          </span>
          <CalendarIcon className="size-4 opacity-50 shrink-0" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white border border-[#d0d5e3]" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          initialFocus
          className="bg-white"
        />
      </PopoverContent>
    </Popover>
  );
}

// Simplified and more robust SearchableMultiSelect Component
interface SearchableMultiSelectProps {
  value: string[];
  onValueChange: (value: string[]) => void;
  options: string[];
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  selectRef?: (el: HTMLInputElement | null) => void;
}

function SearchableMultiSelect({
  value = [],
  onValueChange,
  options = [],
  placeholder = "Type to search users...",
  className = "",
  style = {},
  tabIndex,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onKeyDown,
  selectRef
}: SearchableMultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  // Filter options: show only unselected users that match search
  const filteredOptions = options.filter(option => {
    if (!option) return false;
    const matchesSearch = option.toLowerCase().includes(searchTerm.toLowerCase());
    const notSelected = !value.includes(option);
    return matchesSearch && notSelected;
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
        setHighlightedIndex(-1);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchTerm(newValue);
    if (!isOpen) setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const addUser = (user: string) => {
    if (!value.includes(user)) {
      onValueChange([...value, user]);
    }
    setSearchTerm('');
    setHighlightedIndex(-1);
    // Keep dropdown open for more selections
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 10);
  };

  const removeUser = (userToRemove: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onValueChange(value.filter(user => user !== userToRemove));
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 10);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen && filteredOptions.length > 0) {
        setIsOpen(true);
        setHighlightedIndex(0);
      } else if (filteredOptions.length > 0) {
        setHighlightedIndex(prev => 
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (isOpen && filteredOptions.length > 0) {
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        );
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (isOpen && highlightedIndex >= 0 && filteredOptions[highlightedIndex]) {
        addUser(filteredOptions[highlightedIndex]);
      } else if (!isOpen) {
        setIsOpen(true);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      setSearchTerm('');
      setHighlightedIndex(-1);
    } else if (e.key === 'Backspace' && searchTerm === '' && value.length > 0) {
      e.preventDefault();
      const lastUser = value[value.length - 1];
      onValueChange(value.slice(0, -1));
    } else if (onKeyDown) {
      onKeyDown(e);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setIsOpen(true);
    if (onFocus) onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    // Small delay to allow clicking on dropdown options
    setTimeout(() => {
      if (!containerRef.current?.contains(document.activeElement)) {
        setIsOpen(false);
        setSearchTerm('');
        setHighlightedIndex(-1);
        if (onBlur) onBlur();
      }
    }, 150);
  };

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <div 
        className="flex items-center justify-between gap-2 h-full w-full cursor-text relative"
        onClick={handleContainerClick}
      >
        {/* Content Container: Icon + Tags + Input */}
        <div className="flex items-center min-w-0 flex-1 h-full">
          {/* Icon */}
          <div className="flex-shrink-0 flex items-center h-full mr-2">
            <img 
              src={assignedToIcon} 
              alt="Assigned To" 
              className="w-4 h-4"
            />
          </div>
          
          {/* Tags and Input Container */}
          <div className="flex items-center min-w-0 flex-1 h-full">
            {/* Selected User Tags */}
            {value.length > 0 && (
              <div 
                className="flex items-center gap-1 h-full overflow-x-auto mr-1"
                style={{ 
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitScrollbar: { display: 'none' }
                }}
              >
                {value.map((user) => (
                  <div
                    key={user}
                    className="inline-flex items-center gap-1 bg-[#E5FAF7] text-[#050E25] px-1.5 py-0.5 rounded text-[11px] flex-shrink-0 h-5"
                    style={{ maxWidth: '80px' }}
                  >
                    <span className="truncate leading-none" style={{ maxWidth: '60px' }}>
                      {user}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => removeUser(user, e)}
                      className="hover:bg-[#00B196] hover:text-white rounded-full p-0.5 transition-colors cursor-pointer flex items-center justify-center flex-shrink-0"
                      style={{ width: '12px', height: '12px' }}
                    >
                      <X size={8} />
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            {/* Search Input */}
            <input
              ref={(el) => {
                inputRef.current = el;
                if (selectRef) selectRef(el);
              }}
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              placeholder={value.length === 0 ? placeholder : ""}
              className={`${className} flex-1 min-w-[60px] bg-transparent border-none outline-none text-[14px]`}
              style={style}
              tabIndex={tabIndex}
            />
          </div>
        </div>
        
        {/* Dropdown Arrow - Exactly like SelectTrigger */}
        <ChevronDown className="size-4 opacity-50 pointer-events-none shrink-0" />
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <div
          className="absolute z-[100] w-full mt-1 bg-[#050E25] border border-[#d0d5e3] rounded shadow-lg max-h-[200px] overflow-y-auto"
          style={{ 
            minWidth: '200px',
            top: '100%',
            left: '0'
          }}
        >
          {filteredOptions.length === 0 ? (
            <div className="px-3 py-2 text-[14px] text-gray-400">
              {searchTerm ? 'No users found' : 'Type to search users'}
            </div>
          ) : (
            filteredOptions.map((option, index) => (
              <div
                key={option}
                className={`px-3 py-2 text-[14px] cursor-pointer transition-colors ${
                  highlightedIndex === index
                    ? 'bg-[#36415A] text-white'
                    : 'text-white hover:bg-[#36415A]'
                }`}
                onClick={() => addUser(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {option}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

// Custom Searchable Select Component for State Dropdown
interface SearchableSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  inputRef?: (el: HTMLInputElement | null) => void;
}

function SearchableSelect({
  value,
  onValueChange,
  options,
  placeholder = "Select option",
  className = "",
  style = {},
  tabIndex,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onKeyDown,
  inputRef
}: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(value);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter options based on search term
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Update search term when value changes externally
  useEffect(() => {
    setSearchTerm(value);
  }, [value]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm(value); // Reset search term to current value
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleOptionSelect = (option: string) => {
    onValueChange(option);
    setSearchTerm(option);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        setHighlightedIndex(prev => 
          prev < filteredOptions.length - 1 ? prev + 1 : 0
        );
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (isOpen) {
        setHighlightedIndex(prev => 
          prev > 0 ? prev - 1 : filteredOptions.length - 1
        );
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (isOpen && highlightedIndex >= 0) {
        handleOptionSelect(filteredOptions[highlightedIndex]);
      } else if (!isOpen) {
        setIsOpen(true);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      setSearchTerm(value);
      setHighlightedIndex(-1);
    } else if (e.key === 'Tab') {
      setIsOpen(false);
      setSearchTerm(value);
    } else {
      // For other keys (including arrow keys for our custom navigation)
      if (onKeyDown) {
        onKeyDown(e);
      }
    }
  };

  const handleInputFocus = () => {
    setIsOpen(true);
    if (onFocus) onFocus();
  };

  const handleInputBlur = () => {
    // Delay blur to allow for option selection
    setTimeout(() => {
      if (!containerRef.current?.contains(document.activeElement)) {
        setIsOpen(false);
        setSearchTerm(value);
        if (onBlur) onBlur();
      }
    }, 150);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="flex items-center justify-between gap-2 relative">
        <input
          ref={(el) => {
            if (inputRef) inputRef(el);
          }}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          placeholder={placeholder}
          className={`${className} flex-1 min-w-0`}
          style={style}
          tabIndex={tabIndex}
        />
        <ChevronDown className="size-4 opacity-50 pointer-events-none shrink-0" />
      </div>
      
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-50 w-full mt-1 bg-[#050E25] border border-[#d0d5e3] shadow-lg max-h-[200px] overflow-y-auto"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#36415A #050E25',
            borderRadius: '4px'
          }}
        >
          {filteredOptions.length === 0 ? (
            <div className="px-3 py-2 text-[14px] text-gray-400">
              No states found
            </div>
          ) : (
            filteredOptions.map((option, index) => (
              <div
                key={option}
                className={`px-3 py-2 text-[14px] cursor-pointer transition-colors duration-150 ${
                  option === value 
                    ? 'bg-[#3874FF] text-white' 
                    : highlightedIndex === index
                    ? 'bg-[#36415A] text-white'
                    : 'text-white hover:bg-[#36415A]'
                }`}
                onClick={() => handleOptionSelect(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {option}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

interface FormData {
  // CB Details
  cbBranch: string;
  cbCode: string;
  branch: string;
  city: string;
  address: string;
  state: string;
  country: string;
  pincode: string;
  branchName: string;
  aeoRegNo: string;
  aeoRole: string;
  icgateId: string;
  submittedBy: string;
  assignedTo: string[];
  
  // Job Info
  jobNumber: string;
  jobDate: string;
  beNumber: string;
  beDate: string;
  priorBE: string;
  modeOfTransport: string;
  beType: string;
  transactionRefNo: string;
  customsHouseCd: string;
  customerRefNo: string;
  assessableValue: string;
  dutyPayable: string;
  ucrNo: string;
  ucrType: string;
  kacchaBE: string;
  greenChannel: string;
  section48: string;
  section48Reason: string;
  firstCheck: string;
  firstCheckReason: string;
  provisionalAssess: string;
  paReason: string;
  miscLoad: string;
  paytMthodCd: string;
  portOfOrigin: string;
  countryOfOrigin: string;
  portOfShipment: string;
  consCountry: string;
  remarks: string;
  addCharges: string;
  hssTransaction: string;
  importerAddress: string;
  iecPanBr: string;
  importerId: string;
  importerCity: string;
  importerPincode: string;
  countryPin: string;
  adCode: string;
  icegateIdJob: string;
  importerType: string;
}

export default function JobDetailsForm({ jobData, activeSection }: JobDetailsFormProps) {
  // Indian cities for dropdown
  const indianCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad',
    'Surat', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Visakhapatnam', 'Indore', 'Thane',
    'Bhopal', 'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra',
    'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivali', 'Vasai-Virar', 'Varanasi',
    'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad', 'Howrah',
    'Ranchi', 'Gwalior', 'Jabalpur', 'Coimbatore', 'Vijayawada', 'Jodhpur', 'Madurai',
    'Raipur', 'Kota', 'Chandigarh', 'Guwahati', 'Solapur', 'Hubli-Dharwad', 'Mysore',
    'Tiruchirappalli', 'Bareilly', 'Aligarh', 'Tiruppur', 'Gurgaon', 'Moradabad', 'Jalandhar',
    'Bhubaneswar', 'Salem', 'Warangal', 'Guntur', 'Bhiwandi', 'Saharanpur', 'Gorakhpur',
    'Bikaner', 'Amravati', 'Noida', 'Jamshedpur', 'Bhilai Nagar', 'Cuttack', 'Firozabad',
    'Kochi', 'Nellore', 'Bhavnagar', 'Dehradun', 'Durgapur', 'Asansol', 'Rourkela',
    'Nanded-Waghala', 'Kolhapur', 'Ajmer', 'Akola', 'Gulbarga', 'Jamnagar', 'Ujjain',
    'Loni', 'Siliguri', 'Jhansi', 'Ulhasnagar', 'Jammu', 'Sangli-Miraj & Kupwad',
    'Belgaum', 'Mangalore', 'Ambattur', 'Tirunelveli', 'Malegaon', 'Gaya', 'Jalgaon',
    'Udaipur', 'Maheshtala'
  ];

  // Indian states for dropdown
  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 
    'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 
    'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 
    'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 
    'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ];

  // Countries for dropdown
  const countries = [
    'India', 'United States', 'United Kingdom', 'Germany', 'France', 'Japan', 'China', 
    'Australia', 'Canada', 'Brazil', 'Italy', 'Spain', 'Netherlands', 'Switzerland', 
    'Sweden', 'Norway', 'Denmark', 'Belgium', 'Austria', 'Finland', 'Ireland', 
    'Portugal', 'Greece', 'Poland', 'Czech Republic', 'Hungary', 'Slovakia', 'Slovenia', 
    'Croatia', 'Estonia', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Cyprus', 
    'Bulgaria', 'Romania', 'South Korea', 'Singapore', 'Malaysia', 'Thailand', 
    'Indonesia', 'Philippines', 'Vietnam', 'New Zealand', 'South Africa', 'Mexico', 
    'Argentina', 'Chile', 'Colombia', 'Peru', 'Venezuela', 'Ecuador', 'Uruguay', 
    'Paraguay', 'Bolivia', 'Russia', 'Turkey', 'Israel', 'United Arab Emirates', 
    'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Jordan', 'Lebanon', 
    'Egypt', 'Morocco', 'Tunisia', 'Algeria', 'Nigeria', 'Kenya', 'Ghana', 'Ethiopia', 
    'Tanzania', 'Uganda', 'Zimbabwe', 'Botswana', 'Namibia', 'Zambia', 'Mozambique'
  ];

  // ICgate ID options
  const icgateIdOptions = ['UNIMAANEW', 'UNIBLR'];

  // Submitted by options
  const submittedByOptions = ['Custom Broker', 'Customer'];

  // Assigned To options
  const assignedToOptions = [
    'John Smith', 'Sarah Johnson', 'Mike Davis', 'Emily Brown', 'David Wilson',
    'Lisa Anderson', 'Chris Miller', 'Amanda Taylor', 'Kevin Moore', 'Jessica White'
  ];

  // Prior BE options
  const priorBEOptions = ['Advance', 'Normal', 'Prior'];

  // Mode of Transport options
  const modeOfTransportOptions = ['Air', 'Sea', 'Land'];

  // BE Type options
  const beTypeOptions = ['H-Home Consumption', 'E-Export', 'I-Import'];

  // Yes/No options for various fields
  const yesNoOptions = ['Yes', 'No'];

  // Importer Type options
  const importerTypeOptions = ['Manufacturer', 'Trader', 'Service Provider', 'Individual'];

  const [formData, setFormData] = useState<FormData>({
    // CB Details
    cbBranch: jobData?.cbBranch || '',
    cbCode: jobData?.cbCode || '',
    branch: jobData?.branch || '',
    city: jobData?.city || '',
    address: jobData?.address || '',
    state: jobData?.state || '',
    country: jobData?.country || '',
    pincode: jobData?.pincode || '',
    branchName: jobData?.branchName || '',
    aeoRegNo: jobData?.aeoRegNo || '',
    aeoRole: jobData?.aeoRole || '',
    icgateId: jobData?.icgateId || '',
    submittedBy: jobData?.submittedBy || '',
    assignedTo: jobData?.assignedTo || [],
    
    // Job Info
    jobNumber: jobData?.jobNo || '',
    jobDate: jobData?.jobDate || '',
    beNumber: jobData?.beNumber || '',
    beDate: jobData?.beDate || '',
    priorBE: jobData?.priorBE || '',
    modeOfTransport: jobData?.modeOfTransport || '',
    beType: jobData?.beType || '',
    transactionRefNo: jobData?.transactionRefNo || '',
    customsHouseCd: jobData?.customsHouseCd || '',
    customerRefNo: jobData?.customerRefNo || '',
    assessableValue: jobData?.assessableValue || '',
    dutyPayable: jobData?.dutyPayable || '',
    ucrNo: jobData?.ucrNo || '',
    ucrType: jobData?.ucrType || '',
    kacchaBE: jobData?.kacchaBE || '',
    greenChannel: jobData?.greenChannel || '',
    section48: jobData?.section48 || '',
    section48Reason: jobData?.section48Reason || '',
    firstCheck: jobData?.firstCheck || '',
    firstCheckReason: jobData?.firstCheckReason || '',
    provisionalAssess: jobData?.provisionalAssess || '',
    paReason: jobData?.paReason || '',
    miscLoad: jobData?.miscLoad || '',
    paytMthodCd: jobData?.paytMthodCd || '',
    portOfOrigin: jobData?.portOfOrigin || '',
    countryOfOrigin: jobData?.countryOfOrigin || '',
    portOfShipment: jobData?.portOfShipment || '',
    consCountry: jobData?.consCountry || '',
    remarks: jobData?.remarks || '',
    addCharges: jobData?.addCharges || '',
    hssTransaction: jobData?.hssTransaction || '',
    importerAddress: jobData?.importerAddress || '',
    iecPanBr: jobData?.iecPanBr || '',
    importerId: jobData?.importerId || '',
    importerCity: jobData?.importerCity || '',
    importerPincode: jobData?.importerPincode || '',
    countryPin: jobData?.countryPin || '',
    adCode: jobData?.adCode || '',
    icegateIdJob: jobData?.icegateIdJob || '',
    importerType: jobData?.importerType || '',
  });

  // Hover states for each input field
  const [inputHoverStates, setInputHoverStates] = useState<Record<string, boolean>>({});
  // Focus states for each input field
  const [inputFocusStates, setInputFocusStates] = useState<Record<string, boolean>>({});
  
  // Track which internal section is active based on focused input
  const [activeInternalSection, setActiveInternalSection] = useState<'cbDetails' | 'jobInfo' | 'importerDetails' | null>(null);

  // Track which dropdown should auto-open on focus (for keyboard navigation only)
  const [shouldAutoOpenDropdown, setShouldAutoOpenDropdown] = useState<string | null>(null);

  // Refs for Select triggers to enable programmatic opening
  const selectRefs = useRef<Record<string, HTMLButtonElement | HTMLInputElement | null>>({
    city: null,
    state: null,
    country: null,
    icgateId: null,
    submittedBy: null,
    assignedTo: null,
    priorBE: null,
    modeOfTransport: null,
    beType: null,
    kacchaBE: null,
    greenChannel: null,
    section48: null,
    firstCheck: null,
    provisionalAssess: null,
    portOfOrigin: null,
    countryOfOrigin: null,
    consCountry: null,
    hssTransaction: null,
    importerType: null,
    jobDate: null,
    beDate: null
  });

  // Refs for each input field - organized by vertical navigation order
  const inputRefs = useRef<Record<string, HTMLInputElement | HTMLTextAreaElement | null>>({
    // Left column (top to bottom)
    cbBranch: null,
    branch: null,
    address: null,
    pincode: null,
    aeoRegNo: null,
    aeoRole: null,
    submittedBy: null,
    jobNumber: null,
    jobDate: null,
    priorBE: null,
    transactionRefNo: null,
    customsHouseCd: null,
    customerRefNo: null,
    assessableValue: null,
    dutyPayable: null,
    ucrNo: null,
    ucrType: null,
    section48Reason: null,
    firstCheckReason: null,
    paReason: null,
    miscLoad: null,
    paytMthodCd: null,
    portOfShipment: null,
    remarks: null,
    addCharges: null,
    importerAddress: null,
    importerCity: null,
    countryPin: null,
    icegateIdJob: null,
    
    // Right column (top to bottom)
    cbCode: null,
    city: null,
    state: null,
    country: null,
    branchName: null,
    icgateId: null,
    assignedTo: null,
    beNumber: null,
    beDate: null,
    modeOfTransport: null,
    importerId: null,
    importerPincode: null,
    adCode: null,
    importerType: null,
  });

  // Unified vertical navigation order - arranged by columns for true vertical navigation
  const leftColumnOrder = [
    // CB Details section (Left column)
    'cbBranch',     // Row 1 Left
    'branch',       // Row 2 Left  
    'address',      // Row 3 Left (spans 2 rows)
    'pincode',      // Row 4 Left
    'aeoRegNo',     // Row 5 Left (AEO combined cell - first input)
    'submittedBy',  // Row 6 Left
    // Job Info section (Left column)
    'jobNumber',        // Row 1 Left
    'priorBE',          // Row 2 Left
    'beType',           // Row 3 Left
    'customsHouseCd',   // Row 4 Left
    'assessableValue',  // Row 5 Left
    'ucrNo',            // Row 6 Left
    'kacchaBE',         // Row 7 Left
    'section48',        // Row 8 Left
    'firstCheck',       // Row 9 Left
    'provisionalAssess', // Row 10 Left
    'miscLoad',         // Row 11 Left
    'portOfOrigin',     // Row 12 Left
    'portOfShipment',   // Row 13 Left
    'remarks',          // Row 14 Left
    'hssTransaction',   // Row 15 Left
    'importerAddress',  // Row 16 Left
    'importerCity',     // Row 17 Left
    'countryPin',       // Row 18 Left
    'icegateIdJob'      // Row 19 Left
  ];

  const rightColumnOrder = [
    // CB Details section (Right column)
    'cbCode',       // Row 1 Right
    'city',         // Row 2 Right
    'state',        // Row 3 Right (top)
    'country',      // Row 3 Right (bottom)
    'branchName',   // Row 4 Right
    'icgateId',     // Row 5 Right
    'assignedTo',   // Row 6 Right
    // Job Info section (Right column)
    'beNumber',         // Row 1 Right
    'modeOfTransport',  // Row 2 Right
    'transactionRefNo', // Row 3 Right
    'customerRefNo',    // Row 4 Right
    'dutyPayable',      // Row 5 Right
    'ucrType',          // Row 6 Right
    'greenChannel',     // Row 7 Right
    'section48Reason',  // Row 8 Right
    'firstCheckReason', // Row 9 Right
    'paReason',         // Row 10 Right
    'paytMthodCd',      // Row 11 Right
    'countryOfOrigin',  // Row 12 Right
    'consCountry',      // Row 13 Right
    'addCharges',       // Row 14 Right
    // Row 15 Right is blank
    'importerId',       // Row 16 Right
    'importerPincode',  // Row 17 Right
    'adCode',           // Row 18 Right
    'importerType'      // Row 19 Right
  ];

  // Combined vertical navigation that respects column boundaries
  const unifiedVerticalOrder = [...leftColumnOrder, ...rightColumnOrder];

  // Define horizontal navigation pairs (left field ↔ right field)
  const horizontalPairs: Record<string, string> = {
    // Left to Right mappings
    'cbBranch': 'cbCode',
    'branch': 'city',
    'address': 'state',
    'pincode': 'branchName',
    'aeoRegNo': 'icgateId',
    'submittedBy': 'assignedTo',
    'jobNumber': 'beNumber',
    'jobDate': 'beDate',
    'priorBE': 'modeOfTransport',
    'beType': 'transactionRefNo',
    'customsHouseCd': 'customerRefNo',
    'assessableValue': 'dutyPayable',
    'ucrNo': 'ucrType',
    'kacchaBE': 'greenChannel',
    'section48': 'section48Reason',
    'firstCheck': 'firstCheckReason',
    'provisionalAssess': 'paReason',
    'miscLoad': 'paytMthodCd',
    'portOfOrigin': 'countryOfOrigin',
    'portOfShipment': 'consCountry',
    'remarks': 'addCharges',
    'hssTransaction': '', // No right pair for HSS Transaction
    'importerAddress': 'importerId',
    'importerCity': 'importerPincode',
    'countryPin': 'adCode',
    'icegateIdJob': 'importerType',
    
    // Right to Left mappings
    'cbCode': 'cbBranch',
    'city': 'branch',
    'state': 'address',
    'country': 'address',
    'branchName': 'pincode',
    'icgateId': 'aeoRegNo',
    'assignedTo': 'submittedBy',
    'beNumber': 'jobNumber',
    'beDate': 'jobDate',
    'modeOfTransport': 'priorBE',
    'transactionRefNo': 'beType',
    'customerRefNo': 'customsHouseCd',
    'dutyPayable': 'assessableValue',
    'ucrType': 'ucrNo',
    'greenChannel': 'kacchaBE',
    'section48Reason': 'section48',
    'firstCheckReason': 'firstCheck',
    'paReason': 'provisionalAssess',
    'paytMthodCd': 'miscLoad',
    'countryOfOrigin': 'portOfOrigin',
    'consCountry': 'portOfShipment',
    'addCharges': 'remarks',
    'importerId': 'importerAddress',
    'importerPincode': 'importerCity',
    'adCode': 'countryPin',
    'importerType': 'icegateIdJob',
  };

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInputHover = (field: string, isHovered: boolean) => {
    setInputHoverStates(prev => ({
      ...prev,
      [field]: isHovered
    }));
  };

  const handleInputFocus = (field: string, isFocused: boolean) => {
    setInputFocusStates(prev => ({
      ...prev,
      [field]: isFocused
    }));
    
    if (isFocused) {
      // Determine which internal section this field belongs to
      const cbDetailsFields = ['cbBranch', 'cbCode', 'branch', 'city', 'address', 'state', 'country', 'pincode', 'branchName', 'aeoRegNo', 'aeoRole', 'icgateId', 'submittedBy', 'assignedTo'];
      const jobInfoFields = ['jobNumber', 'jobDate', 'beNumber', 'beDate', 'priorBE', 'modeOfTransport', 'beType', 'transactionRefNo', 'customsHouseCd', 'customerRefNo', 'assessableValue', 'dutyPayable', 'ucrNo', 'ucrType', 'kacchaBE', 'greenChannel', 'section48', 'section48Reason', 'firstCheck', 'firstCheckReason', 'provisionalAssess', 'paReason', 'miscLoad', 'paytMthodCd', 'portOfOrigin', 'countryOfOrigin', 'portOfShipment', 'consCountry', 'remarks', 'addCharges', 'hssTransaction'];
      const importerDetailsFields = ['importerAddress', 'iecPanBr', 'importerId', 'importerCity', 'importerPincode', 'countryPin', 'adCode', 'icegateIdJob', 'importerType'];
      
      if (cbDetailsFields.includes(field)) {
        setActiveInternalSection('cbDetails');
      } else if (jobInfoFields.includes(field)) {
        setActiveInternalSection('jobInfo');
      } else if (importerDetailsFields.includes(field)) {
        setActiveInternalSection('importerDetails');
      }
      
      // Clear all other hover states when focusing on a new field (for keyboard navigation)
      setInputHoverStates(prev => {
        const newStates: Record<string, boolean> = {};
        Object.keys(prev).forEach(key => {
          newStates[key] = key === field; // Only keep hover state for the focused field
        });
        return newStates;
      });
      // Trigger hover state for the focused field
      handleInputHover(field, true);

      // Auto-open dropdown if it's a dropdown field and should be auto-opened
      if (shouldAutoOpenDropdown === field) {
        // This was triggered by keyboard navigation, so open the dropdown
        const selectTrigger = selectRefs.current[field];
        if (selectTrigger) {
          // Trigger click to open dropdown naturally
          setTimeout(() => {
            if ('click' in selectTrigger) {
              (selectTrigger as HTMLButtonElement).click();
            } else {
              (selectTrigger as HTMLInputElement).focus();
            }
          }, 0);
        }
      }
    }
  };

  // Handle programmatic dropdown opening for keyboard navigation
  const openDropdownProgrammatically = (field: string) => {
    setShouldAutoOpenDropdown(field);
    // Clear the flag after a short delay
    setTimeout(() => {
      setShouldAutoOpenDropdown(null);
    }, 100);
  };

  const handleKeyDown = (e: React.KeyboardEvent, currentField: string) => {
    // Handle unified vertical arrow key navigation across all sections
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      e.stopPropagation();
      
      // Determine which column the current field is in
      const leftColumnIndex = leftColumnOrder.indexOf(currentField);
      const rightColumnIndex = rightColumnOrder.indexOf(currentField);
      
      let nextField: string;
      
      if (leftColumnIndex !== -1) {
        // Current field is in left column
        if (e.key === 'ArrowDown') {
          if (leftColumnIndex < leftColumnOrder.length - 1) {
            // Move to next field in left column
            nextField = leftColumnOrder[leftColumnIndex + 1];
          } else {
            // At bottom of left column, wrap to top of left column
            nextField = leftColumnOrder[0];
          }
        } else { // ArrowUp
          if (leftColumnIndex > 0) {
            // Move to previous field in left column
            nextField = leftColumnOrder[leftColumnIndex - 1];
          } else {
            // At top of left column, wrap to bottom of left column
            nextField = leftColumnOrder[leftColumnOrder.length - 1];
          }
        }
      } else if (rightColumnIndex !== -1) {
        // Current field is in right column
        if (e.key === 'ArrowDown') {
          if (rightColumnIndex < rightColumnOrder.length - 1) {
            // Move to next field in right column
            nextField = rightColumnOrder[rightColumnIndex + 1];
          } else {
            // At bottom of right column, wrap to top of right column
            nextField = rightColumnOrder[0];
          }
        } else { // ArrowUp
          if (rightColumnIndex > 0) {
            // Move to previous field in right column
            nextField = rightColumnOrder[rightColumnIndex - 1];
          } else {
            // At top of right column, wrap to bottom of right column
            nextField = rightColumnOrder[rightColumnOrder.length - 1];
          }
        }
      } else {
        return; // Field not found in either column
      }
      
      // Focus the next field
      const dropdownFields = ['city', 'state', 'country', 'icgateId', 'submittedBy', 'assignedTo', 'priorBE', 'modeOfTransport', 'beType', 'kacchaBE', 'greenChannel', 'section48', 'firstCheck', 'provisionalAssess', 'portOfOrigin', 'countryOfOrigin', 'consCountry', 'hssTransaction', 'importerType', 'jobDate', 'beDate'];
      if (dropdownFields.includes(nextField)) {
        openDropdownProgrammatically(nextField);
        const selectTrigger = selectRefs.current[nextField];
        if (selectTrigger) {
          setTimeout(() => {
            selectTrigger.focus();
          }, 0);
        }
      } else {
        const nextInput = inputRefs.current[nextField];
        if (nextInput) {
          setTimeout(() => {
            nextInput.focus();
          }, 0);
        }
      }
    } 
    // Let browser handle Tab navigation naturally across all sections
    // Tab key will now work normally to move between all form fields sequentially 
    // Handle horizontal arrow navigation (left/right between columns)
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      e.stopPropagation();
      
      // Get the horizontally paired field
      const pairedField = horizontalPairs[currentField];
      
      if (pairedField) {
        // Check if the paired field is a dropdown
        const dropdownFields = ['city', 'state', 'country', 'icgateId', 'submittedBy', 'assignedTo', 'priorBE', 'modeOfTransport', 'beType', 'kacchaBE', 'greenChannel', 'section48', 'firstCheck', 'provisionalAssess', 'portOfOrigin', 'countryOfOrigin', 'consCountry', 'hssTransaction', 'importerType', 'jobDate', 'beDate'];
        if (dropdownFields.includes(pairedField)) {
          openDropdownProgrammatically(pairedField);
          const selectTrigger = selectRefs.current[pairedField];
          if (selectTrigger) {
            setTimeout(() => {
              selectTrigger.focus();
            }, 0);
          }
        } else {
          const pairedInput = inputRefs.current[pairedField];
          if (pairedInput) {
            setTimeout(() => {
              pairedInput.focus();
            }, 0);
          }
        }
      }
    }
  };

  // Initialize or update internal section based on activeSection
  useEffect(() => {
    if (activeSection === 'jobDetails') {
      // Check if any field is currently focused to determine the section
      const cbDetailsFields = ['cbBranch', 'cbCode', 'branch', 'city', 'address', 'state', 'country', 'pincode', 'branchName', 'aeoRegNo', 'aeoRole', 'icgateId', 'submittedBy', 'assignedTo'];
      const jobInfoFields = ['jobNumber', 'jobDate', 'beNumber', 'beDate', 'priorBE', 'modeOfTransport', 'beType', 'transactionRefNo', 'customsHouseCd', 'customerRefNo', 'assessableValue', 'dutyPayable', 'ucrNo', 'ucrType', 'kacchaBE', 'greenChannel', 'section48', 'section48Reason', 'firstCheck', 'firstCheckReason', 'provisionalAssess', 'paReason', 'miscLoad', 'paytMthodCd', 'portOfOrigin', 'countryOfOrigin', 'portOfShipment', 'consCountry', 'remarks', 'addCharges', 'hssTransaction'];
      const importerDetailsFields = ['importerAddress', 'iecPanBr', 'importerId', 'importerCity', 'importerPincode', 'countryPin', 'adCode', 'icegateIdJob', 'importerType'];
      
      const focusedField = Object.keys(inputFocusStates).find(field => inputFocusStates[field]);
      
      if (focusedField) {
        if (cbDetailsFields.includes(focusedField)) {
          setActiveInternalSection('cbDetails');
        } else if (jobInfoFields.includes(focusedField)) {
          setActiveInternalSection('jobInfo');
        } else if (importerDetailsFields.includes(focusedField)) {
          setActiveInternalSection('importerDetails');
        }
      } else {
        // No field is focused, so no section should be highlighted
        setActiveInternalSection(null);
      }
    } else {
      // When not in jobDetails section, clear internal section highlighting
      setActiveInternalSection(null);
    }
  }, [activeSection, inputFocusStates]);

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Job Details Section Header */}
      <div className="bg-[#dde3f2] px-4 h-10 rounded-t-lg border-b border-[#d0d5e3]">
        <div className="flex items-center justify-center gap-2 h-full">
          <div className="w-6 h-6 flex items-center justify-center">
            <ImageWithFallback 
              src={jobDetailsIcon} 
              alt="Job Details" 
              className="w-6 h-6 object-contain"
            />
          </div>
          <h2 className="text-[16px] font-semibold text-[#050e25]">Job details</h2>
        </div>
      </div>

      <div className="p-0">
        {/* CB Details Section */}
        <div 
          className={`px-4 h-[34px] border-b border-[#d0d5e3] flex items-center justify-center transition-all duration-200 ${
            (activeSection === 'jobDetails' && activeInternalSection === 'cbDetails')
              ? 'bg-[#E5FAF7]' 
              : 'bg-[#ebeef7]'
          }`}
          style={(activeSection === 'jobDetails' && activeInternalSection === 'cbDetails') 
            ? { boxShadow: 'inset 0 0 0 1px #00B196' } 
            : {}
          }
        >
          <h3 
            className="text-[14px] font-bold small-caps text-[#050e25] transition-colors duration-200"
            style={{ 
              fontVariant: 'small-caps',
              fontVariantCaps: 'small-caps',
              fontFeatureSettings: "'smcp'",
              textTransform: 'none'
            }}
          >
            1. CB DETAILS
          </h3>
        </div>

        <div className="space-y-0">
          {/* Row 1: CB Name & CB Code */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* CB Name */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.cbBranch || inputFocusStates.cbBranch)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">CB Name</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.cbBranch ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.cbBranch && !inputFocusStates.cbBranch && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.cbBranch = el; }}
                  value={formData.cbBranch}
                  onChange={(e) => handleInputChange('cbBranch', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'cbBranch')}
                  placeholder="Enter CB Name"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.cbBranch 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.cbBranch ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={1}
                  onMouseEnter={() => handleInputHover('cbBranch', true)}
                  onMouseLeave={() => handleInputHover('cbBranch', false)}
                  onFocus={() => handleInputFocus('cbBranch', true)}
                  onBlur={() => handleInputFocus('cbBranch', false)}
                />
              </div>
            </div>

            {/* CB Code */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.cbCode || inputFocusStates.cbCode)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">CB Code</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.cbCode ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.cbCode && !inputFocusStates.cbCode && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.cbCode = el; }}
                  value={formData.cbCode}
                  onChange={(e) => handleInputChange('cbCode', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'cbCode')}
                  placeholder="Enter CB Code"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.cbCode 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.cbCode ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={2}
                  onMouseEnter={() => handleInputHover('cbCode', true)}
                  onMouseLeave={() => handleInputHover('cbCode', false)}
                  onFocus={() => handleInputFocus('cbCode', true)}
                  onBlur={() => handleInputFocus('cbCode', false)}
                />
              </div>
            </div>
          </div>

          {/* Row 2: Branch & City */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Branch */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.branch || inputFocusStates.branch)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Branch</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.branch ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.branch && !inputFocusStates.branch && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.branch = el; }}
                  value={formData.branch}
                  onChange={(e) => handleInputChange('branch', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'branch')}
                  placeholder="Enter Branch"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.branch 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.branch ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={3}
                  onMouseEnter={() => handleInputHover('branch', true)}
                  onMouseLeave={() => handleInputHover('branch', false)}
                  onFocus={() => handleInputFocus('branch', true)}
                  onBlur={() => handleInputFocus('branch', false)}
                />
              </div>
            </div>

            {/* City (Dropdown) */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.city || inputFocusStates.city)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">City</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.city ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.city && !inputFocusStates.city && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Select
                  value={formData.city}
                  onValueChange={(value) => handleInputChange('city', value)}
                >
                  <SelectTrigger 
                    ref={(el) => { selectRefs.current.city = el; }}
                    className={`text-[14px] shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent border-none focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 justify-between gap-2 [&>svg]:opacity-60 [&>svg]:size-4 [&>svg]:shrink-0 ${
                      inputFocusStates.city 
                        ? 'absolute left-0 right-0 top-0 bottom-0 w-auto px-2' 
                        : ''
                    }`}
                    style={inputFocusStates.city ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {}}
                    tabIndex={4}
                    onMouseEnter={() => handleInputHover('city', true)}
                    onMouseLeave={() => handleInputHover('city', false)}
                    onFocus={() => handleInputFocus('city', true)}
                    onBlur={() => handleInputFocus('city', false)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                        e.preventDefault();
                        e.stopPropagation();
                        handleKeyDown(e, 'city');
                      }
                    }}
                  >
                    <SelectValue placeholder="Select City" className="text-[14px]" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px] bg-[#050E25] border-[#d0d5e3]" style={{ borderRadius: '4px' }}>
                    {indianCities.map((city) => (
                      <SelectItem 
                        key={city} 
                        value={city} 
                        className="text-[14px] text-white hover:bg-[#36415A] hover:text-white focus:bg-[#36415A] focus:text-white data-[state=checked]:bg-[#3874FF] data-[state=checked]:text-white data-[highlighted]:bg-[#36415A] data-[highlighted]:text-white"
                      >
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Row 3: Address & State/Country */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Address (Left side, spans height of both State and Country) */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[60px] transition-all duration-200 ${
                (inputHoverStates.address || inputFocusStates.address)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Address</Label>
              </div>
              <div className={`flex-1 px-3 h-[60px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.address ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.address && !inputFocusStates.address && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Textarea
                  ref={(el) => { inputRefs.current.address = el; }}
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'address')}
                  placeholder="Enter Address"
                  className={`shadow-none focus-visible:ring-0 bg-transparent resize-none relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] !w-full !max-w-full ${
                    inputFocusStates.address 
                      ? 'absolute inset-0 px-2 py-1 h-auto min-h-[56px]' 
                      : 'border-none px-0 py-1 h-[56px]'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    width: '100% !important',
                    maxWidth: '100% !important',
                    minWidth: '100% !important',
                    boxSizing: 'border-box',
                    ...(inputFocusStates.address ? { 
                      border: '1px solid #3874FF',
                      width: '100% !important'
                    } : {})
                  }}
                  tabIndex={5}
                  onMouseEnter={() => handleInputHover('address', true)}
                  onMouseLeave={() => handleInputHover('address', false)}
                  onFocus={() => handleInputFocus('address', true)}
                  onBlur={() => handleInputFocus('address', false)}
                />
              </div>
            </div>

            {/* Right side: State and Country stacked */}
            <div className="flex flex-1 flex-col relative">
              {/* State (Top) */}
              <div className="flex h-[30px] border-b border-[#d0d5e3] relative">
                <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                  (inputHoverStates.state || inputFocusStates.state)
                    ? 'bg-[#E5FAF7] border border-[#00B196]' 
                    : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
                }`}>
                  <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">State</Label>
                </div>
                <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                  inputFocusStates.state ? 'z-20' : 'z-10'
                }`}>
                  {inputHoverStates.state && !inputFocusStates.state && (
                    <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                  )}
                  <Select
                    value={formData.state}
                    onValueChange={(value) => handleInputChange('state', value)}
                  >
                    <SelectTrigger 
                      ref={(el) => { selectRefs.current.state = el; }}
                      className={`text-[14px] shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent border-none focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 justify-between gap-2 [&>svg]:opacity-60 [&>svg]:size-4 [&>svg]:shrink-0 ${
                        inputFocusStates.state 
                          ? 'absolute left-0 right-0 top-0 bottom-0 w-auto px-2' 
                          : ''
                      }`}
                      style={inputFocusStates.state ? { 
                        left: '0px', 
                        right: '0px', 
                        border: '1px solid #3874FF' 
                      } : {}}
                      tabIndex={6}
                      onMouseEnter={() => handleInputHover('state', true)}
                      onMouseLeave={() => handleInputHover('state', false)}
                      onFocus={() => handleInputFocus('state', true)}
                      onBlur={() => handleInputFocus('state', false)}
                      onKeyDown={(e) => {
                        if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                          e.preventDefault();
                          e.stopPropagation();
                          handleKeyDown(e, 'state');
                        }
                      }}
                    >
                      <SelectValue placeholder="Select State" className="text-[14px]" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[200px] bg-[#050E25] border-[#d0d5e3]" style={{ borderRadius: '4px' }}>
                      {indianStates.map((state) => (
                        <SelectItem 
                          key={state} 
                          value={state} 
                          className="text-[14px] text-white hover:bg-[#36415A] hover:text-white focus:bg-[#36415A] focus:text-white data-[state=checked]:bg-[#3874FF] data-[state=checked]:text-white data-[highlighted]:bg-[#36415A] data-[highlighted]:text-white"
                        >
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Country (Bottom) */}
              <div className="flex h-[30px] relative">
                <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                  (inputHoverStates.country || inputFocusStates.country)
                    ? 'bg-[#E5FAF7] border border-[#00B196]' 
                    : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
                }`}>
                  <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Country</Label>
                </div>
                <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                  inputFocusStates.country ? 'z-20' : 'z-10'
                }`}>
                  {inputHoverStates.country && !inputFocusStates.country && (
                    <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                  )}
                  <Select
                    value={formData.country}
                    onValueChange={(value) => handleInputChange('country', value)}
                  >
                    <SelectTrigger 
                      ref={(el) => { selectRefs.current.country = el; }}
                      className={`text-[14px] shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent border-none focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 justify-between gap-2 [&>svg]:opacity-60 [&>svg]:size-4 [&>svg]:shrink-0 ${
                        inputFocusStates.country 
                          ? 'absolute left-0 right-0 top-0 bottom-0 w-auto px-2' 
                          : ''
                      }`}
                      style={inputFocusStates.country ? { 
                        left: '0px', 
                        right: '0px', 
                        border: '1px solid #3874FF' 
                      } : {}}
                      tabIndex={7}
                      onMouseEnter={() => handleInputHover('country', true)}
                      onMouseLeave={() => handleInputHover('country', false)}
                      onFocus={() => handleInputFocus('country', true)}
                      onBlur={() => handleInputFocus('country', false)}
                      onKeyDown={(e) => {
                        if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                          e.preventDefault();
                          e.stopPropagation();
                          handleKeyDown(e, 'country');
                        }
                      }}
                    >
                      <SelectValue placeholder="Select Country" className="text-[14px]" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[200px] bg-[#050E25] border-[#d0d5e3]" style={{ borderRadius: '4px' }}>
                      {countries.map((country) => (
                        <SelectItem 
                          key={country} 
                          value={country} 
                          className="text-[14px] text-white hover:bg-[#36415A] hover:text-white focus:bg-[#36415A] focus:text-white data-[state=checked]:bg-[#3874FF] data-[state=checked]:text-white data-[highlighted]:bg-[#36415A] data-[highlighted]:text-white"
                        >
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Pincode & Branch */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Pincode */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.pincode || inputFocusStates.pincode)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Pincode</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.pincode ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.pincode && !inputFocusStates.pincode && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.pincode = el; }}
                  value={formData.pincode}
                  onChange={(e) => handleInputChange('pincode', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'pincode')}
                  placeholder="Enter Pincode"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.pincode 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.pincode ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={8}
                  onMouseEnter={() => handleInputHover('pincode', true)}
                  onMouseLeave={() => handleInputHover('pincode', false)}
                  onFocus={() => handleInputFocus('pincode', true)}
                  onBlur={() => handleInputFocus('pincode', false)}
                />
              </div>
            </div>

            {/* Branch */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.branchName || inputFocusStates.branchName)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Branch</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.branchName ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.branchName && !inputFocusStates.branchName && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.branchName = el; }}
                  value={formData.branchName}
                  onChange={(e) => handleInputChange('branchName', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'branchName')}
                  placeholder="Enter Branch"
                  className={`text-[14px] shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent placeholder:text-[14px] flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 ${
                    inputFocusStates.branchName 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={inputFocusStates.branchName ? { 
                    left: '0px', 
                    right: '0px', 
                    border: '1px solid #3874FF' 
                  } : {}}
                  tabIndex={9}
                  onMouseEnter={() => handleInputHover('branchName', true)}
                  onMouseLeave={() => handleInputHover('branchName', false)}
                  onFocus={() => handleInputFocus('branchName', true)}
                  onBlur={() => handleInputFocus('branchName', false)}
                />
              </div>
            </div>
          </div>

          {/* Row 5: AEO Reg No./ Role (70%/30% split) & ICgate ID */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* AEO Reg No./ Role (Combined cell with 70%/30% split) */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.aeoRegNo || inputFocusStates.aeoRegNo || inputHoverStates.aeoRole || inputFocusStates.aeoRole)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">AEO Reg No./Role</Label>
              </div>
              <div className="flex-1 h-[30px] flex items-center relative">
                {/* AEO Reg No (70% width) */}
                <div className={`flex-[0.7] relative transition-all duration-200 ${
                  inputFocusStates.aeoRegNo ? 'z-20' : 'z-10'
                }`}>
                  {inputHoverStates.aeoRegNo && !inputFocusStates.aeoRegNo && (
                    <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                  )}
                  <Input
                    ref={(el) => { inputRefs.current.aeoRegNo = el; }}
                    value={formData.aeoRegNo}
                    onChange={(e) => handleInputChange('aeoRegNo', e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Tab' && !e.shiftKey) {
                        e.preventDefault();
                        const roleInput = inputRefs.current.aeoRole;
                        if (roleInput) {
                          roleInput.focus();
                        }
                      } else {
                        handleKeyDown(e, 'aeoRegNo');
                      }
                    }}
                    placeholder="Reg No."
                    className={`text-[14px] shadow-none focus-visible:ring-0 px-2 py-1 h-[30px] bg-transparent placeholder:text-[14px] relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 ${
                      inputFocusStates.aeoRegNo 
                        ? 'border border-[#3874FF] !border-[#3874FF]' 
                        : 'border-none'
                    }`}
                    tabIndex={10}
                    onMouseEnter={() => handleInputHover('aeoRegNo', true)}
                    onMouseLeave={() => handleInputHover('aeoRegNo', false)}
                    onFocus={() => handleInputFocus('aeoRegNo', true)}
                    onBlur={() => handleInputFocus('aeoRegNo', false)}
                  />
                </div>

                {/* Separator */}
                <div className="w-px h-full bg-[#d0d5e3] mx-0"></div>

                {/* AEO Role (30% width) */}
                <div className={`flex-[0.3] relative transition-all duration-200 ${
                  inputFocusStates.aeoRole ? 'z-20' : 'z-10'
                }`}>
                  {inputHoverStates.aeoRole && !inputFocusStates.aeoRole && (
                    <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                  )}
                  <Input
                    ref={(el) => { inputRefs.current.aeoRole = el; }}
                    value={formData.aeoRole}
                    onChange={(e) => handleInputChange('aeoRole', e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Tab' && e.shiftKey) {
                        e.preventDefault();
                        const regNoInput = inputRefs.current.aeoRegNo;
                        if (regNoInput) {
                          regNoInput.focus();
                        }
                      } else {
                        handleKeyDown(e, 'aeoRole');
                      }
                    }}
                    placeholder="Role"
                    className={`text-[14px] shadow-none focus-visible:ring-0 px-2 py-1 h-[30px] bg-transparent placeholder:text-[14px] relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 ${
                      inputFocusStates.aeoRole 
                        ? 'border border-[#3874FF] !border-[#3874FF]' 
                        : 'border-none'
                    }`}
                    tabIndex={11}
                    onMouseEnter={() => handleInputHover('aeoRole', true)}
                    onMouseLeave={() => handleInputHover('aeoRole', false)}
                    onFocus={() => handleInputFocus('aeoRole', true)}
                    onBlur={() => handleInputFocus('aeoRole', false)}
                  />
                </div>
              </div>
            </div>

            {/* ICgate ID (Dropdown) */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.icgateId || inputFocusStates.icgateId)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">ICEGATE ID</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.icgateId ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.icgateId && !inputFocusStates.icgateId && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Select
                  value={formData.icgateId}
                  onValueChange={(value) => handleInputChange('icgateId', value)}
                >
                  <SelectTrigger 
                    ref={(el) => { selectRefs.current.icgateId = el; }}
                    className={`text-[14px] shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent border-none focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 justify-between gap-2 [&>svg]:opacity-60 [&>svg]:size-4 [&>svg]:shrink-0 ${
                      inputFocusStates.icgateId 
                        ? 'absolute left-0 right-0 top-0 bottom-0 w-auto px-2' 
                        : ''
                    }`}
                    style={inputFocusStates.icgateId ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {}}
                    tabIndex={12}
                    onMouseEnter={() => handleInputHover('icgateId', true)}
                    onMouseLeave={() => handleInputHover('icgateId', false)}
                    onFocus={() => handleInputFocus('icgateId', true)}
                    onBlur={() => handleInputFocus('icgateId', false)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                        e.preventDefault();
                        e.stopPropagation();
                        handleKeyDown(e, 'icgateId');
                      }
                    }}
                  >
                    <SelectValue placeholder="Select" className="text-[14px]" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px] bg-[#050E25] border-[#d0d5e3]" style={{ borderRadius: '4px' }}>
                    {icgateIdOptions.map((option) => (
                      <SelectItem 
                        key={option} 
                        value={option} 
                        className="text-[14px] text-white hover:bg-[#36415A] hover:text-white focus:bg-[#36415A] focus:text-white data-[state=checked]:bg-[#3874FF] data-[state=checked]:text-white data-[highlighted]:bg-[#36415A] data-[highlighted]:text-white"
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Row 6: Submitted by & Assigned To - WITH CONSISTENT ICON POSITIONING */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Submitted by (Dropdown) */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.submittedBy || inputFocusStates.submittedBy)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Submitted by</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.submittedBy ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.submittedBy && !inputFocusStates.submittedBy && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Select
                  value={formData.submittedBy}
                  onValueChange={(value) => handleInputChange('submittedBy', value)}
                >
                  <SelectTrigger 
                    ref={(el) => { selectRefs.current.submittedBy = el; }}
                    className={`text-[14px] shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent border-none focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 justify-between gap-2 [&>svg]:opacity-60 [&>svg]:size-4 [&>svg]:shrink-0 ${
                      inputFocusStates.submittedBy 
                        ? 'absolute left-0 right-0 top-0 bottom-0 w-auto px-2' 
                        : ''
                    }`}
                    style={inputFocusStates.submittedBy ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {}}
                    tabIndex={13}
                    onMouseEnter={() => handleInputHover('submittedBy', true)}
                    onMouseLeave={() => handleInputHover('submittedBy', false)}
                    onFocus={() => handleInputFocus('submittedBy', true)}
                    onBlur={() => handleInputFocus('submittedBy', false)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                        e.preventDefault();
                        e.stopPropagation();
                        handleKeyDown(e, 'submittedBy');
                      }
                    }}
                  >
                    <SelectValue placeholder="Select" className="text-[14px]" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px] bg-[#050E25] border-[#d0d5e3]" style={{ borderRadius: '4px' }}>
                    {submittedByOptions.map((option) => (
                      <SelectItem 
                        key={option} 
                        value={option} 
                        className="text-[14px] text-white hover:bg-[#36415A] hover:text-white focus:bg-[#36415A] focus:text-white data-[state=checked]:bg-[#3874FF] data-[state=checked]:text-white data-[highlighted]:bg-[#36415A] data-[highlighted]:text-white"
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Assigned To (SearchableMultiSelect with consistent styling) */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.assignedTo || inputFocusStates.assignedTo)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Assigned To</Label>
              </div>
              <div className={`flex-1 h-[30px] px-3 relative transition-all duration-200 overflow-hidden ${
                inputFocusStates.assignedTo ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.assignedTo && !inputFocusStates.assignedTo && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <div className={`w-full h-full ${
                  inputFocusStates.assignedTo 
                    ? 'absolute left-0 right-0 top-0 bottom-0 px-3 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)]' 
                    : 'px-0'
                }`}
                style={inputFocusStates.assignedTo ? { 
                  border: '1px solid #3874FF'
                } : {}}
                >
                  <SearchableMultiSelect
                    value={formData.assignedTo}
                    onValueChange={(value) => handleInputChange('assignedTo', value)}
                    options={assignedToOptions}
                    placeholder="Type to search users..."
                    selectRef={(el) => { 
                      selectRefs.current.assignedTo = el;
                      inputRefs.current.assignedTo = el;
                    }}
                    className="text-[14px] shadow-none focus-visible:ring-0 bg-transparent border-none outline-none h-full w-full transition-all duration-200"
                    tabIndex={14}
                    onMouseEnter={() => handleInputHover('assignedTo', true)}
                    onMouseLeave={() => handleInputHover('assignedTo', false)}
                    onFocus={() => handleInputFocus('assignedTo', true)}
                    onBlur={() => handleInputFocus('assignedTo', false)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                        e.preventDefault();
                        e.stopPropagation();
                        handleKeyDown(e, 'assignedTo');
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Job Info Section */}
        <div 
          className={`px-4 h-[34px] border-b border-[#d0d5e3] flex items-center justify-center transition-all duration-200 ${
            (activeSection === 'jobDetails' && activeInternalSection === 'jobInfo')
              ? 'bg-[#E5FAF7]' 
              : 'bg-[#ebeef7]'
          }`}
          style={(activeSection === 'jobDetails' && activeInternalSection === 'jobInfo') 
            ? { boxShadow: 'inset 0 0 0 1px #00B196' } 
            : {}
          }
        >
          <h3 
            className="text-[14px] font-bold small-caps text-[#050e25] transition-colors duration-200"
            style={{ 
              fontVariant: 'small-caps',
              fontVariantCaps: 'small-caps',
              fontFeatureSettings: "'smcp'",
              textTransform: 'none'
            }}
          >
            2. JOB INFO
          </h3>
        </div>

        <div className="space-y-0">
          {/* Row 1: Job No & Date and BE No & Date */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Left Column: Job No & Date */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] border-r border-r-[#d0d5e3] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.jobNumber || inputFocusStates.jobNumber || inputHoverStates.jobDate || inputFocusStates.jobDate)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Job No & Date</Label>
              </div>
              <div className="flex-1 flex items-center">
                {/* Job Number */}
                <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                  inputFocusStates.jobNumber ? 'z-20' : 'z-10'
                }`}>
                  {inputHoverStates.jobNumber && !inputFocusStates.jobNumber && (
                    <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                  )}
                  <Input
                    ref={el => inputRefs.current.jobNumber = el}
                    type="text"
                    value={formData.jobNumber}
                    onChange={(e) => handleInputChange('jobNumber', e.target.value)}
                    onFocus={() => handleInputFocus('jobNumber', true)}
                    onBlur={() => handleInputFocus('jobNumber', false)}
                    onKeyDown={(e) => handleKeyDown(e, 'jobNumber')}
                    placeholder="Job No"
                    className={`shadow-none focus-visible:ring-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                      inputFocusStates.jobNumber 
                        ? 'absolute left-0 right-0 top-0 bottom-0 w-auto px-0' 
                        : 'border-none px-0'
                    }`}
                    style={{ 
                      fontSize: '14px !important',
                      fontFamily: '"Inter", sans-serif !important',
                      fontWeight: '400 !important',
                      lineHeight: '1.5 !important',
                      ...(inputFocusStates.jobNumber ? { 
                        left: '0px', 
                        right: '0px', 
                        border: '1px solid #3874FF' 
                      } : {})
                    }}
                    tabIndex={15}
                    onMouseEnter={() => handleInputHover('jobNumber', true)}
                    onMouseLeave={() => handleInputHover('jobNumber', false)}
                  />
                </div>
                
                {/* Job Date */}
                <div className={`flex-1 h-[30px] flex items-center relative transition-all duration-200 border-l border-[#d0d5e3] ${
                  inputFocusStates.jobDate ? 'z-20' : 'z-10'
                }`}>
                  {inputHoverStates.jobDate && !inputFocusStates.jobDate && (
                    <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                  )}
                  <DatePicker
                    value={formData.jobDate}
                    onValueChange={(value) => handleInputChange('jobDate', value)}
                    placeholder="Select"
                    inputRef={(el) => { 
                      selectRefs.current.jobDate = el; 
                      inputRefs.current.jobDate = el;
                    }}
                    className={`shadow-none focus-visible:ring-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                      inputFocusStates.jobDate 
                        ? 'absolute left-0 right-0 top-0 bottom-0 w-auto px-2' 
                        : 'border-none px-3'
                    }`}
                    style={{ 
                      fontSize: '14px !important',
                      fontFamily: '"Inter", sans-serif !important',
                      fontWeight: '400 !important',
                      lineHeight: '1.5 !important',
                      ...(inputFocusStates.jobDate ? { 
                        left: '0px', 
                        right: '0px', 
                        border: '1px solid #3874FF',
                        boxShadow: '0 2px 12px 0 rgba(47,81,160,0.47)'
                      } : {})
                    }}
                    tabIndex={16}
                    onMouseEnter={() => handleInputHover('jobDate', true)}
                    onMouseLeave={() => handleInputHover('jobDate', false)}
                    onFocus={() => handleInputFocus('jobDate', true)}
                    onBlur={() => handleInputFocus('jobDate', false)}
                    onKeyDown={(e) => handleKeyDown(e, 'jobDate')}
                  />
                </div>
              </div>
            </div>

            {/* Right Column: BE No & Date */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] border-r border-r-[#d0d5e3] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.beNumber || inputFocusStates.beNumber || inputHoverStates.beDate || inputFocusStates.beDate)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">BE No & Date</Label>
              </div>
              <div className="flex-1 flex items-center">
                {/* BE Number */}
                <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                  inputFocusStates.beNumber ? 'z-20' : 'z-10'
                }`}>
                  {inputHoverStates.beNumber && !inputFocusStates.beNumber && (
                    <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                  )}
                  <Input
                    ref={el => inputRefs.current.beNumber = el}
                    type="text"
                    value={formData.beNumber}
                    onChange={(e) => handleInputChange('beNumber', e.target.value)}
                    onFocus={() => handleInputFocus('beNumber', true)}
                    onBlur={() => handleInputFocus('beNumber', false)}
                    onKeyDown={(e) => handleKeyDown(e, 'beNumber')}
                    placeholder="BE No"
                    className={`shadow-none focus-visible:ring-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                      inputFocusStates.beNumber 
                        ? 'absolute left-0 right-0 top-0 bottom-0 w-auto px-0' 
                        : 'border-none px-0'
                    }`}
                    style={{ 
                      fontSize: '14px !important',
                      fontFamily: '"Inter", sans-serif !important',
                      fontWeight: '400 !important',
                      lineHeight: '1.5 !important',
                      ...(inputFocusStates.beNumber ? { 
                        left: '0px', 
                        right: '0px', 
                        border: '1px solid #3874FF' 
                      } : {})
                    }}
                    tabIndex={17}
                    onMouseEnter={() => handleInputHover('beNumber', true)}
                    onMouseLeave={() => handleInputHover('beNumber', false)}
                  />
                </div>
                
                {/* BE Date */}
                <div className={`flex-1 h-[30px] flex items-center relative transition-all duration-200 border-l border-[#d0d5e3] ${
                  inputFocusStates.beDate ? 'z-20' : 'z-10'
                }`}>
                  {inputHoverStates.beDate && !inputFocusStates.beDate && (
                    <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                  )}
                  <DatePicker
                    value={formData.beDate}
                    onValueChange={(value) => handleInputChange('beDate', value)}
                    placeholder="Select"
                    inputRef={(el) => { 
                      selectRefs.current.beDate = el; 
                      inputRefs.current.beDate = el;
                    }}
                    className={`shadow-none focus-visible:ring-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                      inputFocusStates.beDate 
                        ? 'absolute left-0 right-0 top-0 bottom-0 w-auto px-2' 
                        : 'border-none px-3'
                    }`}
                    style={{ 
                      fontSize: '14px !important',
                      fontFamily: '"Inter", sans-serif !important',
                      fontWeight: '400 !important',
                      lineHeight: '1.5 !important',
                      ...(inputFocusStates.beDate ? { 
                        left: '0px', 
                        right: '0px', 
                        border: '1px solid #3874FF',
                        boxShadow: '0 2px 12px 0 rgba(47,81,160,0.47)'
                      } : {})
                    }}
                    tabIndex={18}
                    onMouseEnter={() => handleInputHover('beDate', true)}
                    onMouseLeave={() => handleInputHover('beDate', false)}
                    onFocus={() => handleInputFocus('beDate', true)}
                    onBlur={() => handleInputFocus('beDate', false)}
                    onKeyDown={(e) => handleKeyDown(e, 'beDate')}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Prior BE & Mode of Transport */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Prior BE */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.priorBE || inputFocusStates.priorBE)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Prior BE</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.priorBE ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.priorBE && !inputFocusStates.priorBE && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Select
                  value={formData.priorBE}
                  onValueChange={(value) => handleInputChange('priorBE', value)}
                >
                  <SelectTrigger 
                    ref={(el) => { selectRefs.current.priorBE = el; }}
                    className={`text-[14px] shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent border-none focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 justify-between gap-2 [&>svg]:opacity-60 [&>svg]:size-4 [&>svg]:shrink-0 ${
                      inputFocusStates.priorBE 
                        ? 'absolute left-0 right-0 top-0 bottom-0 w-auto px-2' 
                        : ''
                    }`}
                    style={inputFocusStates.priorBE ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {}}
                    tabIndex={19}
                    onMouseEnter={() => handleInputHover('priorBE', true)}
                    onMouseLeave={() => handleInputHover('priorBE', false)}
                    onFocus={() => handleInputFocus('priorBE', true)}
                    onBlur={() => handleInputFocus('priorBE', false)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                        e.preventDefault();
                        e.stopPropagation();
                        handleKeyDown(e, 'priorBE');
                      }
                    }}
                  >
                    <SelectValue placeholder="Prior BE" className="text-[14px]" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px] bg-[#050E25] border-[#d0d5e3]" style={{ borderRadius: '4px' }}>
                    {priorBEOptions.map((option) => (
                      <SelectItem 
                        key={option} 
                        value={option} 
                        className="text-[14px] text-white hover:bg-[#36415A] hover:text-white focus:bg-[#36415A] focus:text-white data-[state=checked]:bg-[#3874FF] data-[state=checked]:text-white data-[highlighted]:bg-[#36415A] data-[highlighted]:text-white"
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Mode of Transport */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.modeOfTransport || inputFocusStates.modeOfTransport)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Mode of Transport</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.modeOfTransport ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.modeOfTransport && !inputFocusStates.modeOfTransport && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Select
                  value={formData.modeOfTransport}
                  onValueChange={(value) => handleInputChange('modeOfTransport', value)}
                >
                  <SelectTrigger 
                    ref={(el) => { selectRefs.current.modeOfTransport = el; }}
                    className={`text-[14px] shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent border-none focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 justify-between gap-2 [&>svg]:opacity-60 [&>svg]:size-4 [&>svg]:shrink-0 ${
                      inputFocusStates.modeOfTransport 
                        ? 'absolute left-0 right-0 top-0 bottom-0 w-auto px-2' 
                        : ''
                    }`}
                    style={inputFocusStates.modeOfTransport ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {}}
                    tabIndex={20}
                    onMouseEnter={() => handleInputHover('modeOfTransport', true)}
                    onMouseLeave={() => handleInputHover('modeOfTransport', false)}
                    onFocus={() => handleInputFocus('modeOfTransport', true)}
                    onBlur={() => handleInputFocus('modeOfTransport', false)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                        e.preventDefault();
                        e.stopPropagation();
                        handleKeyDown(e, 'modeOfTransport');
                      }
                    }}
                  >
                    <SelectValue placeholder="Select MOT" className="text-[14px]" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px] bg-[#050E25] border-[#d0d5e3]" style={{ borderRadius: '4px' }}>
                    {modeOfTransportOptions.map((mode) => (
                      <SelectItem 
                        key={mode} 
                        value={mode} 
                        className="text-[14px] text-white hover:bg-[#36415A] hover:text-white focus:bg-[#36415A] focus:text-white data-[state=checked]:bg-[#3874FF] data-[state=checked]:text-white data-[highlighted]:bg-[#36415A] data-[highlighted]:text-white"
                      >
                        {mode}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Row 3: BE Type & Transaction Ref No. */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* BE Type */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.beType || inputFocusStates.beType)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">BE Type</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.beType ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.beType && !inputFocusStates.beType && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Select
                  value={formData.beType}
                  onValueChange={(value) => handleInputChange('beType', value)}
                >
                  <SelectTrigger 
                    ref={(el) => { selectRefs.current.beType = el; }}
                    className={`text-[14px] shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent border-none focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 justify-between gap-2 [&>svg]:opacity-60 [&>svg]:size-4 [&>svg]:shrink-0 ${
                      inputFocusStates.beType 
                        ? 'absolute left-0 right-0 top-0 bottom-0 w-auto px-2' 
                        : ''
                    }`}
                    style={inputFocusStates.beType ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {}}
                    tabIndex={21}
                    onMouseEnter={() => handleInputHover('beType', true)}
                    onMouseLeave={() => handleInputHover('beType', false)}
                    onFocus={() => handleInputFocus('beType', true)}
                    onBlur={() => handleInputFocus('beType', false)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                        e.preventDefault();
                        e.stopPropagation();
                        handleKeyDown(e, 'beType');
                      }
                    }}
                  >
                    <SelectValue placeholder="BE Type" className="text-[14px]" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px] bg-[#050E25] border-[#d0d5e3]" style={{ borderRadius: '4px' }}>
                    {beTypeOptions.map((type) => (
                      <SelectItem 
                        key={type} 
                        value={type} 
                        className="text-[14px] text-white hover:bg-[#36415A] hover:text-white focus:bg-[#36415A] focus:text-white data-[state=checked]:bg-[#3874FF] data-[state=checked]:text-white data-[highlighted]:bg-[#36415A] data-[highlighted]:text-white"
                      >
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Transaction Ref No. */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.transactionRefNo || inputFocusStates.transactionRefNo)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Transaction Ref No.</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.transactionRefNo ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.transactionRefNo && !inputFocusStates.transactionRefNo && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.transactionRefNo = el; }}
                  value={formData.transactionRefNo}
                  onChange={(e) => handleInputChange('transactionRefNo', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'transactionRefNo')}
                  placeholder="Enter Transaction Ref No."
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.transactionRefNo 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.transactionRefNo ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={22}
                  onMouseEnter={() => handleInputHover('transactionRefNo', true)}
                  onMouseLeave={() => handleInputHover('transactionRefNo', false)}
                  onFocus={() => handleInputFocus('transactionRefNo', true)}
                  onBlur={() => handleInputFocus('transactionRefNo', false)}
                />
              </div>
            </div>
          </div>

          {/* Row 4: Customs house Cd. & Customer Ref No. */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Customs house Cd. */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.customsHouseCd || inputFocusStates.customsHouseCd)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Customs house Cd.</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.customsHouseCd ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.customsHouseCd && !inputFocusStates.customsHouseCd && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.customsHouseCd = el; }}
                  value={formData.customsHouseCd}
                  onChange={(e) => handleInputChange('customsHouseCd', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'customsHouseCd')}
                  placeholder="Enter Customs house Cd."
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.customsHouseCd 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.customsHouseCd ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={23}
                  onMouseEnter={() => handleInputHover('customsHouseCd', true)}
                  onMouseLeave={() => handleInputHover('customsHouseCd', false)}
                  onFocus={() => handleInputFocus('customsHouseCd', true)}
                  onBlur={() => handleInputFocus('customsHouseCd', false)}
                />
              </div>
            </div>

            {/* Customer Ref No. */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.customerRefNo || inputFocusStates.customerRefNo)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Customer Ref No.</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.customerRefNo ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.customerRefNo && !inputFocusStates.customerRefNo && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.customerRefNo = el; }}
                  value={formData.customerRefNo}
                  onChange={(e) => handleInputChange('customerRefNo', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'customerRefNo')}
                  placeholder="Enter Customer Ref No."
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.customerRefNo 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.customerRefNo ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={24}
                  onMouseEnter={() => handleInputHover('customerRefNo', true)}
                  onMouseLeave={() => handleInputHover('customerRefNo', false)}
                  onFocus={() => handleInputFocus('customerRefNo', true)}
                  onBlur={() => handleInputFocus('customerRefNo', false)}
                />
              </div>
            </div>
          </div>

          {/* Row 5: Assessable Value & Duty payable */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Assessable Value */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.assessableValue || inputFocusStates.assessableValue)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Assessable Value</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.assessableValue ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.assessableValue && !inputFocusStates.assessableValue && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.assessableValue = el; }}
                  value={formData.assessableValue}
                  onChange={(e) => handleInputChange('assessableValue', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'assessableValue')}
                  placeholder="Enter Assessable Value"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.assessableValue 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.assessableValue ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={25}
                  onMouseEnter={() => handleInputHover('assessableValue', true)}
                  onMouseLeave={() => handleInputHover('assessableValue', false)}
                  onFocus={() => handleInputFocus('assessableValue', true)}
                  onBlur={() => handleInputFocus('assessableValue', false)}
                />
              </div>
            </div>

            {/* Duty payable */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.dutyPayable || inputFocusStates.dutyPayable)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Duty payable</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.dutyPayable ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.dutyPayable && !inputFocusStates.dutyPayable && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.dutyPayable = el; }}
                  value={formData.dutyPayable}
                  onChange={(e) => handleInputChange('dutyPayable', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'dutyPayable')}
                  placeholder="Enter Duty payable"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.dutyPayable 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.dutyPayable ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={26}
                  onMouseEnter={() => handleInputHover('dutyPayable', true)}
                  onMouseLeave={() => handleInputHover('dutyPayable', false)}
                  onFocus={() => handleInputFocus('dutyPayable', true)}
                  onBlur={() => handleInputFocus('dutyPayable', false)}
                />
              </div>
            </div>
          </div>

          {/* Row 6: UCR No & UCR Type */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* UCR No */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.ucrNo || inputFocusStates.ucrNo)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">UCR No</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.ucrNo ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.ucrNo && !inputFocusStates.ucrNo && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.ucrNo = el; }}
                  value={formData.ucrNo}
                  onChange={(e) => handleInputChange('ucrNo', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'ucrNo')}
                  placeholder="Enter UCR No"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.ucrNo 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.ucrNo ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={27}
                  onMouseEnter={() => handleInputHover('ucrNo', true)}
                  onMouseLeave={() => handleInputHover('ucrNo', false)}
                  onFocus={() => handleInputFocus('ucrNo', true)}
                  onBlur={() => handleInputFocus('ucrNo', false)}
                />
              </div>
            </div>

            {/* UCR Type */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.ucrType || inputFocusStates.ucrType)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">UCR Type</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.ucrType ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.ucrType && !inputFocusStates.ucrType && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.ucrType = el; }}
                  value={formData.ucrType}
                  onChange={(e) => handleInputChange('ucrType', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'ucrType')}
                  placeholder="Enter UCR Type"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.ucrType 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.ucrType ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={28}
                  onMouseEnter={() => handleInputHover('ucrType', true)}
                  onMouseLeave={() => handleInputHover('ucrType', false)}
                  onFocus={() => handleInputFocus('ucrType', true)}
                  onBlur={() => handleInputFocus('ucrType', false)}
                />
              </div>
            </div>
          </div>

          {/* Row 7: Kachcha BE & Green Channel */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Kachcha BE */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.kacchaBE || inputFocusStates.kacchaBE)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Kachcha BE</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.kacchaBE 
                  ? 'bg-white border border-[#00B196] shadow-sm z-20' 
                  : inputHoverStates.kacchaBE
                    ? 'bg-white border border-[#3874FF] shadow-sm z-10'
                    : 'bg-transparent z-10'
              }`} style={{ borderRadius: '0px' }}>
                <ToggleSwitch
                  value={formData.kacchaBE || 'No'}
                  onValueChange={(value) => handleInputChange('kacchaBE', value)}
                  switchRef={(el) => { selectRefs.current.kacchaBE = el; }}
                  tabIndex={29}
                  onMouseEnter={() => handleInputHover('kacchaBE', true)}
                  onMouseLeave={() => handleInputHover('kacchaBE', false)}
                  onFocus={() => handleInputFocus('kacchaBE', true)}
                  onBlur={() => handleInputFocus('kacchaBE', false)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                      e.preventDefault();
                      e.stopPropagation();
                      handleKeyDown(e, 'kacchaBE');
                    }
                  }}
                />
              </div>
            </div>

            {/* Green Channel */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.greenChannel || inputFocusStates.greenChannel)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Green Channel</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.greenChannel 
                  ? 'bg-white border border-[#00B196] shadow-sm z-20' 
                  : inputHoverStates.greenChannel
                    ? 'bg-white border border-[#3874FF] shadow-sm z-10'
                    : 'bg-transparent z-10'
              }`} style={{ borderRadius: '0px' }}>
                <ToggleSwitch
                  value={formData.greenChannel || 'No'}
                  onValueChange={(value) => handleInputChange('greenChannel', value)}
                  switchRef={(el) => { selectRefs.current.greenChannel = el; }}
                  tabIndex={30}
                  onMouseEnter={() => handleInputHover('greenChannel', true)}
                  onMouseLeave={() => handleInputHover('greenChannel', false)}
                  onFocus={() => handleInputFocus('greenChannel', true)}
                  onBlur={() => handleInputFocus('greenChannel', false)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                      e.preventDefault();
                      e.stopPropagation();
                      handleKeyDown(e, 'greenChannel');
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Row 8: Section 48 & Section 48 Reason */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Section 48 */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.section48 || inputFocusStates.section48)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Section 48</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.section48 
                  ? 'bg-white border border-[#00B196] shadow-sm z-20' 
                  : inputHoverStates.section48
                    ? 'bg-white border border-[#3874FF] shadow-sm z-10'
                    : 'bg-transparent z-10'
              }`} style={{ borderRadius: '0px' }}>
                <ToggleSwitch
                  value={formData.section48 || 'No'}
                  onValueChange={(value) => handleInputChange('section48', value)}
                  switchRef={(el) => { selectRefs.current.section48 = el; }}
                  tabIndex={31}
                  onMouseEnter={() => handleInputHover('section48', true)}
                  onMouseLeave={() => handleInputHover('section48', false)}
                  onFocus={() => handleInputFocus('section48', true)}
                  onBlur={() => handleInputFocus('section48', false)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                      e.preventDefault();
                      e.stopPropagation();
                      handleKeyDown(e, 'section48');
                    }
                  }}
                />
              </div>
            </div>

            {/* Section 48 Reason */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.section48Reason || inputFocusStates.section48Reason)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Section 48 Reason</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.section48Reason ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.section48Reason && !inputFocusStates.section48Reason && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.section48Reason = el; }}
                  value={formData.section48Reason}
                  onChange={(e) => handleInputChange('section48Reason', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'section48Reason')}
                  placeholder="Enter Section 48 Reason"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.section48Reason 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.section48Reason ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={32}
                  onMouseEnter={() => handleInputHover('section48Reason', true)}
                  onMouseLeave={() => handleInputHover('section48Reason', false)}
                  onFocus={() => handleInputFocus('section48Reason', true)}
                  onBlur={() => handleInputFocus('section48Reason', false)}
                />
              </div>
            </div>
          </div>

          {/* Row 9: First Check & First check Reason */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* First Check */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.firstCheck || inputFocusStates.firstCheck)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">First Check</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.firstCheck 
                  ? 'bg-white border border-[#00B196] shadow-sm z-20' 
                  : inputHoverStates.firstCheck
                    ? 'bg-white border border-[#3874FF] shadow-sm z-10'
                    : 'bg-transparent z-10'
              }`} style={{ borderRadius: '0px' }}>
                <ToggleSwitch
                  value={formData.firstCheck || 'No'}
                  onValueChange={(value) => handleInputChange('firstCheck', value)}
                  switchRef={(el) => { selectRefs.current.firstCheck = el; }}
                  tabIndex={33}
                  onMouseEnter={() => handleInputHover('firstCheck', true)}
                  onMouseLeave={() => handleInputHover('firstCheck', false)}
                  onFocus={() => handleInputFocus('firstCheck', true)}
                  onBlur={() => handleInputFocus('firstCheck', false)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                      e.preventDefault();
                      e.stopPropagation();
                      handleKeyDown(e, 'firstCheck');
                    }
                  }}
                />
              </div>
            </div>

            {/* First check Reason */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.firstCheckReason || inputFocusStates.firstCheckReason)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">First check Reason</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.firstCheckReason ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.firstCheckReason && !inputFocusStates.firstCheckReason && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.firstCheckReason = el; }}
                  value={formData.firstCheckReason}
                  onChange={(e) => handleInputChange('firstCheckReason', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'firstCheckReason')}
                  placeholder="Enter First check Reason"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.firstCheckReason 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.firstCheckReason ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={34}
                  onMouseEnter={() => handleInputHover('firstCheckReason', true)}
                  onMouseLeave={() => handleInputHover('firstCheckReason', false)}
                  onFocus={() => handleInputFocus('firstCheckReason', true)}
                  onBlur={() => handleInputFocus('firstCheckReason', false)}
                />
              </div>
            </div>
          </div>

          {/* Row 10: Provisional Asses. & P A Reason */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Provisional Asses. */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.provisionalAssess || inputFocusStates.provisionalAssess)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Provisional Asses.</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.provisionalAssess 
                  ? 'bg-white border border-[#00B196] shadow-sm z-20' 
                  : inputHoverStates.provisionalAssess
                    ? 'bg-white border border-[#3874FF] shadow-sm z-10'
                    : 'bg-transparent z-10'
              }`} style={{ borderRadius: '0px' }}>
                <ToggleSwitch
                  value={formData.provisionalAssess || 'No'}
                  onValueChange={(value) => handleInputChange('provisionalAssess', value)}
                  switchRef={(el) => { selectRefs.current.provisionalAssess = el; }}
                  tabIndex={35}
                  onMouseEnter={() => handleInputHover('provisionalAssess', true)}
                  onMouseLeave={() => handleInputHover('provisionalAssess', false)}
                  onFocus={() => handleInputFocus('provisionalAssess', true)}
                  onBlur={() => handleInputFocus('provisionalAssess', false)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                      e.preventDefault();
                      e.stopPropagation();
                      handleKeyDown(e, 'provisionalAssess');
                    }
                  }}
                />
              </div>
            </div>

            {/* P A Reason */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.paReason || inputFocusStates.paReason)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">P A Reason</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.paReason ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.paReason && !inputFocusStates.paReason && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.paReason = el; }}
                  value={formData.paReason}
                  onChange={(e) => handleInputChange('paReason', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'paReason')}
                  placeholder="Enter P A Reason"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.paReason 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.paReason ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={36}
                  onMouseEnter={() => handleInputHover('paReason', true)}
                  onMouseLeave={() => handleInputHover('paReason', false)}
                  onFocus={() => handleInputFocus('paReason', true)}
                  onBlur={() => handleInputFocus('paReason', false)}
                />
              </div>
            </div>
          </div>

          {/* Row 11: Misc. Load & Payt Mthod Cd. */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Misc. Load */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.miscLoad || inputFocusStates.miscLoad)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Misc. Load</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.miscLoad ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.miscLoad && !inputFocusStates.miscLoad && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.miscLoad = el; }}
                  value={formData.miscLoad}
                  onChange={(e) => handleInputChange('miscLoad', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'miscLoad')}
                  placeholder="Enter Misc. Load"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.miscLoad 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.miscLoad ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={37}
                  onMouseEnter={() => handleInputHover('miscLoad', true)}
                  onMouseLeave={() => handleInputHover('miscLoad', false)}
                  onFocus={() => handleInputFocus('miscLoad', true)}
                  onBlur={() => handleInputFocus('miscLoad', false)}
                />
              </div>
            </div>

            {/* Payt Mthod Cd. */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.paytMthodCd || inputFocusStates.paytMthodCd)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Payt Mthod Cd.</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.paytMthodCd ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.paytMthodCd && !inputFocusStates.paytMthodCd && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.paytMthodCd = el; }}
                  value={formData.paytMthodCd}
                  onChange={(e) => handleInputChange('paytMthodCd', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'paytMthodCd')}
                  placeholder="Enter Payt Mthod Cd."
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.paytMthodCd 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.paytMthodCd ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={38}
                  onMouseEnter={() => handleInputHover('paytMthodCd', true)}
                  onMouseLeave={() => handleInputHover('paytMthodCd', false)}
                  onFocus={() => handleInputFocus('paytMthodCd', true)}
                  onBlur={() => handleInputFocus('paytMthodCd', false)}
                />
              </div>
            </div>
          </div>

          {/* Row 12: Port of origin & Country of origin (both country dropdowns) */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Port of origin */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.portOfOrigin || inputFocusStates.portOfOrigin)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Port of origin</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.portOfOrigin ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.portOfOrigin && !inputFocusStates.portOfOrigin && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Select
                  value={formData.portOfOrigin}
                  onValueChange={(value) => handleInputChange('portOfOrigin', value)}
                >
                  <SelectTrigger 
                    ref={(el) => { selectRefs.current.portOfOrigin = el; }}
                    className={`text-[14px] shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent border-none focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 justify-between gap-2 [&>svg]:opacity-60 [&>svg]:size-4 [&>svg]:shrink-0 ${
                      inputFocusStates.portOfOrigin 
                        ? 'absolute left-0 right-0 top-0 bottom-0 w-auto px-2' 
                        : ''
                    }`}
                    style={inputFocusStates.portOfOrigin ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {}}
                    tabIndex={39}
                    onMouseEnter={() => handleInputHover('portOfOrigin', true)}
                    onMouseLeave={() => handleInputHover('portOfOrigin', false)}
                    onFocus={() => handleInputFocus('portOfOrigin', true)}
                    onBlur={() => handleInputFocus('portOfOrigin', false)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                        e.preventDefault();
                        e.stopPropagation();
                        handleKeyDown(e, 'portOfOrigin');
                      }
                    }}
                  >
                    <SelectValue placeholder="Select" className="text-[14px]" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px] bg-[#050E25] border-[#d0d5e3]" style={{ borderRadius: '4px' }}>
                    {countries.map((country) => (
                      <SelectItem 
                        key={country} 
                        value={country} 
                        className="text-[14px] text-white hover:bg-[#36415A] hover:text-white focus:bg-[#36415A] focus:text-white data-[state=checked]:bg-[#3874FF] data-[state=checked]:text-white data-[highlighted]:bg-[#36415A] data-[highlighted]:text-white"
                      >
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Country of origin */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.countryOfOrigin || inputFocusStates.countryOfOrigin)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Country of origin</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.countryOfOrigin ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.countryOfOrigin && !inputFocusStates.countryOfOrigin && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Select
                  value={formData.countryOfOrigin}
                  onValueChange={(value) => handleInputChange('countryOfOrigin', value)}
                >
                  <SelectTrigger 
                    ref={(el) => { selectRefs.current.countryOfOrigin = el; }}
                    className={`text-[14px] shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent border-none focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 justify-between gap-2 [&>svg]:opacity-60 [&>svg]:size-4 [&>svg]:shrink-0 ${
                      inputFocusStates.countryOfOrigin 
                        ? 'absolute left-0 right-0 top-0 bottom-0 w-auto px-2' 
                        : ''
                    }`}
                    style={inputFocusStates.countryOfOrigin ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {}}
                    tabIndex={40}
                    onMouseEnter={() => handleInputHover('countryOfOrigin', true)}
                    onMouseLeave={() => handleInputHover('countryOfOrigin', false)}
                    onFocus={() => handleInputFocus('countryOfOrigin', true)}
                    onBlur={() => handleInputFocus('countryOfOrigin', false)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                        e.preventDefault();
                        e.stopPropagation();
                        handleKeyDown(e, 'countryOfOrigin');
                      }
                    }}
                  >
                    <SelectValue placeholder="Select COO" className="text-[14px]" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px] bg-[#050E25] border-[#d0d5e3]" style={{ borderRadius: '4px' }}>
                    {countries.map((country) => (
                      <SelectItem 
                        key={country} 
                        value={country} 
                        className="text-[14px] text-white hover:bg-[#36415A] hover:text-white focus:bg-[#36415A] focus:text-white data-[state=checked]:bg-[#3874FF] data-[state=checked]:text-white data-[highlighted]:bg-[#36415A] data-[highlighted]:text-white"
                      >
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Row 13: Port of shipment & Cons. Country */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Port of shipment */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.portOfShipment || inputFocusStates.portOfShipment)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Port of shipment</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.portOfShipment ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.portOfShipment && !inputFocusStates.portOfShipment && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.portOfShipment = el; }}
                  value={formData.portOfShipment}
                  onChange={(e) => handleInputChange('portOfShipment', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'portOfShipment')}
                  placeholder="Enter Port of shipment"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.portOfShipment 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.portOfShipment ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={41}
                  onMouseEnter={() => handleInputHover('portOfShipment', true)}
                  onMouseLeave={() => handleInputHover('portOfShipment', false)}
                  onFocus={() => handleInputFocus('portOfShipment', true)}
                  onBlur={() => handleInputFocus('portOfShipment', false)}
                />
              </div>
            </div>

            {/* Cons. Country */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.consCountry || inputFocusStates.consCountry)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Cons. Country</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.consCountry ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.consCountry && !inputFocusStates.consCountry && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Select
                  value={formData.consCountry}
                  onValueChange={(value) => handleInputChange('consCountry', value)}
                >
                  <SelectTrigger 
                    ref={(el) => { selectRefs.current.consCountry = el; }}
                    className={`text-[14px] shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent border-none focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 justify-between gap-2 [&>svg]:opacity-60 [&>svg]:size-4 [&>svg]:shrink-0 ${
                      inputFocusStates.consCountry 
                        ? 'absolute left-0 right-0 top-0 bottom-0 w-auto px-2' 
                        : ''
                    }`}
                    style={inputFocusStates.consCountry ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {}}
                    tabIndex={42}
                    onMouseEnter={() => handleInputHover('consCountry', true)}
                    onMouseLeave={() => handleInputHover('consCountry', false)}
                    onFocus={() => handleInputFocus('consCountry', true)}
                    onBlur={() => handleInputFocus('consCountry', false)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                        e.preventDefault();
                        e.stopPropagation();
                        handleKeyDown(e, 'consCountry');
                      }
                    }}
                  >
                    <SelectValue placeholder="Select" className="text-[14px]" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px] bg-[#050E25] border-[#d0d5e3]" style={{ borderRadius: '4px' }}>
                    {countries.map((country) => (
                      <SelectItem 
                        key={country} 
                        value={country} 
                        className="text-[14px] text-white hover:bg-[#36415A] hover:text-white focus:bg-[#36415A] focus:text-white data-[state=checked]:bg-[#3874FF] data-[state=checked]:text-white data-[highlighted]:bg-[#36415A] data-[highlighted]:text-white"
                      >
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Row 14: Remarks (Full Width) */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Remarks - Full Width */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.remarks || inputFocusStates.remarks)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Remarks</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.remarks ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.remarks && !inputFocusStates.remarks && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.remarks = el; }}
                  value={formData.remarks}
                  onChange={(e) => handleInputChange('remarks', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'remarks')}
                  placeholder="Enter Remarks"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.remarks 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.remarks ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={43}
                  onMouseEnter={() => handleInputHover('remarks', true)}
                  onMouseLeave={() => handleInputHover('remarks', false)}
                  onFocus={() => handleInputFocus('remarks', true)}
                  onBlur={() => handleInputFocus('remarks', false)}
                />
              </div>
            </div>
          </div>

          {/* Row 15: HSS Transaction & Add. charges */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* HSS Transaction */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.hssTransaction || inputFocusStates.hssTransaction)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">HSS Transaction</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.hssTransaction 
                  ? 'bg-white border border-[#00B196] shadow-sm z-20' 
                  : inputHoverStates.hssTransaction
                    ? 'bg-white border border-[#3874FF] shadow-sm z-10'
                    : 'bg-transparent z-10'
              }`} style={{ borderRadius: '0px' }}>
                <ToggleSwitch
                  value={formData.hssTransaction || 'No'}
                  onValueChange={(value) => handleInputChange('hssTransaction', value)}
                  switchRef={(el) => { selectRefs.current.hssTransaction = el; }}
                  tabIndex={45}
                  onMouseEnter={() => handleInputHover('hssTransaction', true)}
                  onMouseLeave={() => handleInputHover('hssTransaction', false)}
                  onFocus={() => handleInputFocus('hssTransaction', true)}
                  onBlur={() => handleInputFocus('hssTransaction', false)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                      e.preventDefault();
                      e.stopPropagation();
                      handleKeyDown(e, 'hssTransaction');
                    }
                  }}
                />
              </div>
            </div>

            {/* Add. charges */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.addCharges || inputFocusStates.addCharges)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Add. charges</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.addCharges ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.addCharges && !inputFocusStates.addCharges && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.addCharges = el; }}
                  value={formData.addCharges}
                  onChange={(e) => handleInputChange('addCharges', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'addCharges')}
                  placeholder="Enter Add. charges"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.addCharges 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.addCharges ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={46}
                  onMouseEnter={() => handleInputHover('addCharges', true)}
                  onMouseLeave={() => handleInputHover('addCharges', false)}
                  onFocus={() => handleInputFocus('addCharges', true)}
                  onBlur={() => handleInputFocus('addCharges', false)}
                />
              </div>
            </div>
          </div>

          {/* Continue with the existing Importer fields... */}
        </div>

        {/* Importer Details Section */}
        <div 
          className={`px-4 h-[34px] border-b border-[#d0d5e3] flex items-center justify-center transition-all duration-200 ${
            (activeSection === 'jobDetails' && activeInternalSection === 'importerDetails')
              ? 'bg-[#E5FAF7]' 
              : 'bg-[#ebeef7]'
          }`}
          style={(activeSection === 'jobDetails' && activeInternalSection === 'importerDetails') 
            ? { boxShadow: 'inset 0 0 0 1px #00B196' } 
            : {}
          }
        >
          <h3 
            className="text-[14px] font-bold small-caps text-[#050e25] transition-colors duration-200"
            style={{ 
              fontVariant: 'small-caps',
              fontVariantCaps: 'small-caps',
              fontFeatureSettings: "'smcp'",
              textTransform: 'none'
            }}
          >
            3. IMPORTER DETAILS
          </h3>
        </div>

        <div className="space-y-0">
          {/* Row 16: Importer Address & Importer ID */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Importer Address */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.importerAddress || inputFocusStates.importerAddress)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Importer Address</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.importerAddress ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.importerAddress && !inputFocusStates.importerAddress && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.importerAddress = el; }}
                  value={formData.importerAddress}
                  onChange={(e) => handleInputChange('importerAddress', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'importerAddress')}
                  placeholder="Enter Importer Address"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.importerAddress 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.importerAddress ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={47}
                  onMouseEnter={() => handleInputHover('importerAddress', true)}
                  onMouseLeave={() => handleInputHover('importerAddress', false)}
                  onFocus={() => handleInputFocus('importerAddress', true)}
                  onBlur={() => handleInputFocus('importerAddress', false)}
                />
              </div>
            </div>

            {/* Importer ID */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.importerId || inputFocusStates.importerId)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Importer ID</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.importerId ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.importerId && !inputFocusStates.importerId && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.importerId = el; }}
                  value={formData.importerId}
                  onChange={(e) => handleInputChange('importerId', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'importerId')}
                  placeholder="Enter Importer ID"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.importerId 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.importerId ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={48}
                  onMouseEnter={() => handleInputHover('importerId', true)}
                  onMouseLeave={() => handleInputHover('importerId', false)}
                  onFocus={() => handleInputFocus('importerId', true)}
                  onBlur={() => handleInputFocus('importerId', false)}
                />
              </div>
            </div>
          </div>

          {/* Row 17: Importer City & Importer Pincode */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Importer City */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.importerCity || inputFocusStates.importerCity)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Importer City</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.importerCity ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.importerCity && !inputFocusStates.importerCity && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.importerCity = el; }}
                  value={formData.importerCity}
                  onChange={(e) => handleInputChange('importerCity', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'importerCity')}
                  placeholder="Enter Importer City"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.importerCity 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.importerCity ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={49}
                  onMouseEnter={() => handleInputHover('importerCity', true)}
                  onMouseLeave={() => handleInputHover('importerCity', false)}
                  onFocus={() => handleInputFocus('importerCity', true)}
                  onBlur={() => handleInputFocus('importerCity', false)}
                />
              </div>
            </div>

            {/* Importer Pincode */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.importerPincode || inputFocusStates.importerPincode)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Importer Pincode</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.importerPincode ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.importerPincode && !inputFocusStates.importerPincode && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.importerPincode = el; }}
                  value={formData.importerPincode}
                  onChange={(e) => handleInputChange('importerPincode', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'importerPincode')}
                  placeholder="Enter Importer Pincode"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.importerPincode 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.importerPincode ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={50}
                  onMouseEnter={() => handleInputHover('importerPincode', true)}
                  onMouseLeave={() => handleInputHover('importerPincode', false)}
                  onFocus={() => handleInputFocus('importerPincode', true)}
                  onBlur={() => handleInputFocus('importerPincode', false)}
                />
              </div>
            </div>
          </div>

          {/* Row 18: Country Pin & AD Code */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* Country Pin */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.countryPin || inputFocusStates.countryPin)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Country Pin</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.countryPin ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.countryPin && !inputFocusStates.countryPin && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.countryPin = el; }}
                  value={formData.countryPin}
                  onChange={(e) => handleInputChange('countryPin', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'countryPin')}
                  placeholder="Enter Country Pin"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.countryPin 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.countryPin ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={51}
                  onMouseEnter={() => handleInputHover('countryPin', true)}
                  onMouseLeave={() => handleInputHover('countryPin', false)}
                  onFocus={() => handleInputFocus('countryPin', true)}
                  onBlur={() => handleInputFocus('countryPin', false)}
                />
              </div>
            </div>

            {/* AD Code */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.adCode || inputFocusStates.adCode)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">AD Code</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.adCode ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.adCode && !inputFocusStates.adCode && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.adCode = el; }}
                  value={formData.adCode}
                  onChange={(e) => handleInputChange('adCode', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'adCode')}
                  placeholder="Enter AD Code"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.adCode 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.adCode ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={52}
                  onMouseEnter={() => handleInputHover('adCode', true)}
                  onMouseLeave={() => handleInputHover('adCode', false)}
                  onFocus={() => handleInputFocus('adCode', true)}
                  onBlur={() => handleInputFocus('adCode', false)}
                />
              </div>
            </div>
          </div>

          {/* Row 19: ICEGATE ID & Importer Type */}
          <div className="flex border-b border-[#d0d5e3] relative">
            {/* ICEGATE ID */}
            <div className="flex flex-1 border-r border-[#d0d5e3] relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.icegateIdJob || inputFocusStates.icegateIdJob)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">ICEGATE ID</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.icegateIdJob ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.icegateIdJob && !inputFocusStates.icegateIdJob && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Input
                  ref={(el) => { inputRefs.current.icegateIdJob = el; }}
                  value={formData.icegateIdJob}
                  onChange={(e) => handleInputChange('icegateIdJob', e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'icegateIdJob')}
                  placeholder="Enter ICEGATE ID"
                  className={`shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent flex items-center relative z-0 focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 !text-[14px] !font-[400] !leading-[1.5] !font-['Inter'] ${
                    inputFocusStates.icegateIdJob 
                      ? 'absolute left-2 right-0 top-0 bottom-0 w-auto px-2' 
                      : 'border-none'
                  }`}
                  style={{ 
                    fontSize: '14px !important',
                    fontFamily: '"Inter", sans-serif !important',
                    fontWeight: '400 !important',
                    lineHeight: '1.5 !important',
                    ...(inputFocusStates.icegateIdJob ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {})
                  }}
                  tabIndex={53}
                  onMouseEnter={() => handleInputHover('icegateIdJob', true)}
                  onMouseLeave={() => handleInputHover('icegateIdJob', false)}
                  onFocus={() => handleInputFocus('icegateIdJob', true)}
                  onBlur={() => handleInputFocus('icegateIdJob', false)}
                />
              </div>
            </div>

            {/* Importer Type */}
            <div className="flex flex-1 relative">
              <div className={`w-[150px] flex items-center px-3 h-[30px] transition-all duration-200 ${
                (inputHoverStates.importerType || inputFocusStates.importerType)
                  ? 'bg-[#E5FAF7] border border-[#00B196]' 
                  : 'bg-[rgba(221,227,242,0.42)] border-r border-r-[#d0d5e3]'
              }`}>
                <Label className="text-[14px] font-semibold whitespace-nowrap text-[#050e25]">Importer Type</Label>
              </div>
              <div className={`flex-1 px-3 h-[30px] flex items-center relative transition-all duration-200 ${
                inputFocusStates.importerType ? 'z-20' : 'z-10'
              }`}>
                {inputHoverStates.importerType && !inputFocusStates.importerType && (
                  <div className="absolute inset-0 pointer-events-none z-10" style={{ border: '1px solid #3874FF' }} />
                )}
                <Select
                  value={formData.importerType}
                  onValueChange={(value) => handleInputChange('importerType', value)}
                >
                  <SelectTrigger 
                    ref={(el) => { selectRefs.current.importerType = el; }}
                    className={`text-[14px] shadow-none focus-visible:ring-0 px-0 py-1 h-[30px] bg-transparent border-none focus:shadow-[0_2px_12px_0_rgba(47,81,160,0.47)] transition-all duration-200 justify-between gap-2 [&>svg]:opacity-60 [&>svg]:size-4 [&>svg]:shrink-0 ${
                      inputFocusStates.importerType 
                        ? 'absolute left-0 right-0 top-0 bottom-0 w-auto px-2' 
                        : ''
                    }`}
                    style={inputFocusStates.importerType ? { 
                      left: '0px', 
                      right: '0px', 
                      border: '1px solid #3874FF' 
                    } : {}}
                    tabIndex={54}
                    onMouseEnter={() => handleInputHover('importerType', true)}
                    onMouseLeave={() => handleInputHover('importerType', false)}
                    onFocus={() => handleInputFocus('importerType', true)}
                    onBlur={() => handleInputFocus('importerType', false)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                        e.preventDefault();
                        e.stopPropagation();
                        handleKeyDown(e, 'importerType');
                      }
                    }}
                  >
                    <SelectValue placeholder="Select Importer Type" className="text-[14px]" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px] bg-[#050E25] border-[#d0d5e3]" style={{ borderRadius: '4px' }}>
                    {importerTypeOptions.map((type) => (
                      <SelectItem 
                        key={type} 
                        value={type} 
                        className="text-[14px] text-white hover:bg-[#36415A] hover:text-white focus:bg-[#36415A] focus:text-white data-[state=checked]:bg-[#3874FF] data-[state=checked]:text-white data-[highlighted]:bg-[#36415A] data-[highlighted]:text-white"
                      >
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}