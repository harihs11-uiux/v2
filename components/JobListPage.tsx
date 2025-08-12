import { useState, useEffect, useCallback, useMemo } from 'react';
import svgPaths from "../imports/svg-tdbv1ckh3q";
import toolbarSvgPaths from "../imports/svg-gd0h7fwbx6";
import FixedColumnsTable from './FixedColumnsTable';
import CreateJobSidebar from './CreateJobSidebar';
import LogoutDropdown from './LogoutDropdown';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import newLogo from 'figma:asset/70031002c2d641f99778e91905aaf3765d0b07b6.png';

const mockJobs = [
  {
    id: '1',
    reference: 'IMP-2024-001',
    type: 'Import' as const,
    status: 'In Transit',
    customer: 'ABC Industries',
    origin: 'Shanghai, China',
    destination: 'Chennai, India',
    eta: '2025-01-15',
    value: '$25,000',
    referenceNo: "94JC568465",
    beDate: "17/09/2024",
    beType: "H-Home consumption",
    customsHouseCode: "INAJZ6 - Arakonam - Melpakkam - Chennai ICD",
    cbBranch: "002",
    cbCity: "SECUNDERABAD",
    importer: "ABC Industries"
  },
  {
    id: '2',
    reference: 'EXP-2024-002',
    type: 'Export' as const,
    status: 'Documentation',
    customer: 'XYZ Corporation',
    origin: 'Mumbai, India',
    destination: 'Dubai, UAE',
    eta: '2025-01-18',
    value: '$18,500',
    referenceNo: "94JC568466",
    beDate: "18/09/2024",
    beType: "EX-Export",
    customsHouseCode: "INMAA1 - Chennai Sea - Chennai Port",
    cbBranch: "003",
    cbCity: "BANGALORE",
    importer: "XYZ Corporation"
  },
  {
    id: '3',
    reference: 'IMP-2024-003',
    type: 'Import' as const,
    status: 'Customs Clearance',
    customer: 'Tech Solutions Ltd',
    origin: 'Singapore',
    destination: 'Bangalore, India',
    eta: '2025-01-12',
    value: '$42,000',
    referenceNo: "94JC568467",
    beDate: "19/09/2024",
    beType: "H-Home consumption",
    customsHouseCode: "INBOM2 - Mumbai Air Cargo - Mumbai Airport",
    cbBranch: "001",
    cbCity: "MUMBAI",
    importer: "Tech Solutions Ltd"
  },
  {
    id: '4',
    reference: 'IMP-2024-004',
    type: 'Import' as const,
    status: 'Delivered',
    customer: 'Global Traders',
    origin: 'Hamburg, Germany',
    destination: 'Delhi, India',
    eta: '2025-01-08',
    value: '$33,750',
    referenceNo: "94JC568468",
    beDate: "20/09/2024",
    beType: "H-Home consumption",
    customsHouseCode: "INDEL4 - Delhi Air Cargo - IGI Airport",
    cbBranch: "004",
    cbCity: "NEW DELHI",
    importer: "Global Traders"
  },
  {
    id: '5',
    reference: 'EXP-2024-005',
    type: 'Export' as const,
    status: 'Pending',
    customer: 'Export Hub Inc',
    origin: 'Chennai, India',
    destination: 'Los Angeles, USA',
    eta: '2025-01-20',
    value: '$55,200',
    referenceNo: "94JC568469",
    beDate: "21/09/2024",
    beType: "EX-Export",
    customsHouseCode: "INKOL5 - Kolkata Port - Netaji Subhash Dock",
    cbBranch: "005",
    cbCity: "KOLKATA",
    importer: "Export Hub Inc"
  },
  {
    id: '6',
    reference: 'IMP-2024-006',
    type: 'Import' as const,
    status: 'Positive Acknowledgement Received',
    customer: 'Medical Supplies Co',
    origin: 'Tokyo, Japan',
    destination: 'Hyderabad, India',
    eta: '2025-01-25',
    value: '$67,800',
    referenceNo: "94JC568470",
    beDate: "22/09/2024",
    beType: "H-Home consumption",
    customsHouseCode: "INHYD1 - Hyderabad Air Cargo Complex",
    cbBranch: "006",
    cbCity: "HYDERABAD",
    importer: "Medical Supplies Co"
  },
  {
    id: '7',
    reference: 'EXP-2024-007',
    type: 'Export' as const,
    status: 'In Transit',
    customer: 'Textile Exports Ltd',
    origin: 'Bangalore, India',
    destination: 'London, UK',
    eta: '2025-01-22',
    value: '$29,400',
    referenceNo: "94JC568471",
    beDate: "23/09/2024",
    beType: "EX-Export",
    customsHouseCode: "INBLR2 - Bangalore International Airport",
    cbBranch: "007",
    cbCity: "BANGALORE",
    importer: "Textile Exports Ltd"
  },
  {
    id: '8',
    reference: 'IMP-2024-008',
    type: 'Import' as const,
    status: 'Documentation',
    customer: 'Auto Parts International',
    origin: 'Seoul, South Korea',
    destination: 'Chennai, India',
    eta: '2025-01-30',
    value: '$78,900',
    referenceNo: "94JC568472",
    beDate: "24/09/2024",
    beType: "H-Home consumption",
    customsHouseCode: "INMAA4 - Chennai Air Cargo Terminal",
    cbBranch: "008",
    cbCity: "CHENNAI",
    importer: "Auto Parts International"
  }
];

function Mark() {
  return (
    <div
      className="absolute h-8 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[21.333px]"
      data-name="Mark"
    >
      <div className="absolute bottom-0 left-0 right-[-0.001%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 22 32"
        >
          <g id="Mark">
            <path
              d={svgPaths.p1d1c6f00}
              fill="url(#paint0_linear_2_30155)"
              id="Rectangle 1805"
            />
            <path
              d={svgPaths.p2f5870f2}
              fill="url(#paint1_linear_2_30155)"
              id="Rectangle 1805_2"
            />
            <path
              d={svgPaths.p30e32800}
              fill="url(#paint2_linear_2_30155)"
              id="Rectangle 1813"
            />
            <path
              d={svgPaths.p11744380}
              fill="url(#paint3_linear_2_30155)"
              id="Rectangle 1807"
            />
            <path
              d={svgPaths.p31e5ac00}
              fill="url(#paint4_linear_2_30155)"
              id="Rectangle 1806"
            />
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_2_30155"
              x1="8.51224"
              x2="2.42334"
              y1="3.43591"
              y2="9.90072"
            >
              <stop stopColor="#3874FF" />
              <stop offset="1" stopColor="#2852B5" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_2_30155"
              x1="18.734"
              x2="12.1398"
              y1="22.2212"
              y2="28.4871"
            >
              <stop stopColor="#2852B5" />
              <stop offset="1" stopColor="#3874FF" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_2_30155"
              x1="8.43409"
              x2="21.3863"
              y1="9.2237"
              y2="15.3269"
            >
              <stop offset="0.0797732" stopColor="#3874FF" />
              <stop offset="0.37268" stopColor="#82A7FF" />
              <stop offset="0.813761" stopColor="#3874FF" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_2_30155"
              x1="11.8385"
              x2="1.67426"
              y1="23.7239"
              y2="18.2375"
            >
              <stop offset="0.0797732" stopColor="#3874FF" />
              <stop offset="0.374435" stopColor="#82A7FF" />
              <stop offset="1" stopColor="#3874FF" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint4_linear_2_30155"
              x1="3.46187"
              x2="21.5248"
              y1="12.1612"
              y2="19.5301"
            >
              <stop offset="0.141199" stopColor="#3874FF" />
              <stop offset="0.424841" stopColor="#82A7FF" />
              <stop offset="0.751251" stopColor="#3874FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function SentinelLogo() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-8"
      data-name="Sentinel Logo"
    >
      <Mark />
    </div>
  );
}

function LogoMark() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0"
      data-name="Logo Mark"
    >
      <SentinelLogo />
    </div>
  );
}

function Logo() {
  return (
    <div
      className="flex items-center justify-start p-0 relative shrink-0"
      data-name="Logo"
    >
      <img 
        src={newLogo} 
        alt="Logo" 
        className="h-8 w-auto object-contain"
      />
    </div>
  );
}

function ArrowDropdown() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]"
      data-name="arrow_dropdown"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_2_30119)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={svgPaths.p3dd41900}
            fill="var(--fill-0, #9497A1)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_30119">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative"
      data-name="Dropdown Icon"
    >
      <ArrowDropdown />
    </div>
  );
}

interface NavbarDropdownProps {
  onLogout?: () => void;
}

function NavbarDropdown({ onLogout }: NavbarDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#cdcfd3] text-[16px] hover:text-white transition-colors cursor-pointer outline-none">
        Jobs
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        className="bg-[#1f2432] border-[#505767] text-white min-w-[120px]"
      >
        <DropdownMenuItem 
          className="text-[#cdcfd3] hover:bg-[#2a3441] hover:text-white cursor-pointer"
          onClick={onLogout}
        >
          Job List
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="text-[#cdcfd3] hover:bg-[#2a3441] hover:text-white cursor-pointer"
          onClick={() => {/* Add create job functionality */}}
        >
          Create Job
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="text-[#cdcfd3] hover:bg-[#2a3441] hover:text-white cursor-pointer"
        >
          Analytics
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ModuleTitle({ onLogout }: NavbarDropdownProps) {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Module Title"
    >
      <div className="absolute border-0 border-[#505767] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-0 pr-2 py-0 relative w-full">
          <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[0px]">
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-12" data-name="Seperator">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 48 1"
                  >
                    <line
                      id="Seperator"
                      stroke="var(--stroke-0, #505767)"
                      x2="48"
                      y1="0.5"
                      y2="0.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <NavbarDropdown onLogout={onLogout} />
        </div>
      </div>
    </div>
  );
}

function LeftSide({ onLogout }: NavbarDropdownProps) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-3 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Left Side"
    >
      <Logo />
      <ModuleTitle onLogout={onLogout} />
    </div>
  );
}

interface IndividualTabProps {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

function IndividualTab({ active = false, children, onClick }: IndividualTabProps) {
  return (
    <div
      className={`box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-1 relative shrink-0 cursor-pointer transition-colors ${active ? '' : 'hover:bg-[#333b4f]'}`}
      data-name="Individual Tab"
      onClick={onClick}
    >
      {active && <div className="absolute border-[#3874ff] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />}
      <div className={`flex flex-col font-['Inter:${active ? 'Semi_Bold' : 'Medium'}',_sans-serif] font-${active ? 'semibold' : 'medium'} justify-center leading-[0] not-italic relative shrink-0 text-[${active ? '#ffffff' : '#cdcfd3'}] text-[14px] text-left text-nowrap`}>
        <p className="block leading-[18px] whitespace-pre">{children}</p>
      </div>
    </div>
  );
}

interface HorizontalTabProps {
  activeTab: 'Imports' | 'Exports';
  onTabChange: (tab: 'Imports' | 'Exports') => void;
}

function HorizontalTab({ activeTab, onTabChange }: HorizontalTabProps) {
  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0"
      data-name="Horizontal Tab"
    >
      <IndividualTab 
        active={activeTab === 'Imports'} 
        onClick={() => onTabChange('Imports')}
      >
        Imports
      </IndividualTab>
      <IndividualTab 
        active={activeTab === 'Exports'} 
        onClick={() => onTabChange('Exports')}
      >
        Exports
      </IndividualTab>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-0" data-name="icon">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="icon">
          <mask
            height="18"
            id="mask0_2_30115"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="18"
            />
          </mask>
          <g mask="url(#mask0_2_30115)">
            <path
              d={svgPaths.p30a00d00}
              fill="var(--fill-0, #9497A1)"
              id="campaign"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Indicator() {
  return (
    <div
      className="absolute bottom-[62.5%] left-[37.5%] right-[31.25%] top-[6.25%]"
      data-name="indicator"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 6 6"
      >
        <g id="indicator">
          <circle
            cx="2.8125"
            cy="2.8125"
            fill="var(--fill-0, #CF3B3B)"
            fillOpacity="0.19"
            id="Ellipse 86"
            r="2.8125"
          />
          <circle
            cx="2.8125"
            cy="2.8125"
            fill="var(--fill-0, #CF3B3B)"
            id="Ellipse 85"
            r="1.6875"
          />
        </g>
      </svg>
    </div>
  );
}

function Campaign() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Campaign">
      <Icon />
      <Indicator />
    </div>
  );
}

function ChatSupport() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Chat support">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="icon">
          <mask
            height="18"
            id="mask0_2_30123"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="18"
            />
          </mask>
          <g mask="url(#mask0_2_30123)">
            <path
              d={svgPaths.p37d2a380}
              fill="var(--fill-0, #9497A1)"
              id="contact_support"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Notifications() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="notifications">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="icon">
          <mask
            height="18"
            id="mask0_2_30151"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="18"
              id="Bounding box"
              width="18"
            />
          </mask>
          <g mask="url(#mask0_2_30151)">
            <path
              d={svgPaths.p28009c00}
              fill="var(--fill-0, #9497A1)"
              id="notifications"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NoOfIcons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="No. of Icons"
    >
      <Campaign />
      <ChatSupport />
      <Notifications />
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[22px] relative shrink-0 w-[58px]" data-name="Logo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 58 22"
      >
        <g id="Logo">
          <rect fill="white" height="22" width="58" />
          <path
            d={svgPaths.p13e2be00}
            fill="url(#paint0_linear_2_30134)"
            id="Logo_2"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_30134"
            x1="2"
            x2="55.0181"
            y1="12.2548"
            y2="11.3354"
          >
            <stop stopColor="#005575" />
            <stop offset="1" stopColor="#01314A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function AvatarAlphabet() {
  return (
    <div className="relative shrink-0 size-6" data-name="Avatar (Alphabet)">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Avatar (Alphabet)">
          <circle
            cx="12"
            cy="12"
            fill="var(--fill-0, #FE7C7C)"
            id="Shape"
            r="12"
          />
          <g id="AK">
            <path
              d={svgPaths.p187c5080}
              fill="var(--fill-0, white)"
              id="Vector"
            />
            <path
              d={svgPaths.p30fd8300}
              fill="var(--fill-0, white)"
              id="Vector_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ProfileDetails({ onLogout }: { onLogout: () => void }) {
  return (
    <LogoutDropdown onLogout={onLogout}>
      <div
        className="bg-[#242c40] relative rounded shrink-0"
        data-name="Profile Details"
      >
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start overflow-clip p-[4px] relative">
          <Logo1 />
          <AvatarAlphabet />
        </div>
        <div className="absolute border border-[#505767] border-solid inset-0 pointer-events-none rounded" />
      </div>
    </LogoutDropdown>
  );
}

function ProductUtilities({ onLogout }: { onLogout: () => void }) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0"
      data-name="Product Utilities"
    >
      <NoOfIcons />
      <ProfileDetails onLogout={onLogout} />
    </div>
  );
}

function Utilities({ onLogout }: { onLogout: () => void }) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-5 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name="Utilities"
    >
      <ProductUtilities onLogout={onLogout} />
    </div>
  );
}

interface GlobalNavigationProps {
  activeTab: 'Imports' | 'Exports';
  onTabChange: (tab: 'Imports' | 'Exports') => void;
  onLogout?: () => void;
}

function GlobalNavigation({ activeTab, onTabChange, onLogout }: GlobalNavigationProps) {
  return (
    <div
      className="bg-[#1f2432] h-12 relative shrink-0 w-full"
      data-name="Global Navigation"
    >
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      
      {/* Logo - positioned at exactly 21px from left */}
      <div 
        className="absolute flex items-center top-1/2 translate-y-[-50%]"
        style={{ left: '21px' }}
      >
        <Logo />
      </div>
      
      {/* Jobs Dropdown - positioned at 87px from left */}
      <div 
        className="absolute flex items-center top-1/2 translate-y-[-50%]"
        style={{ left: '87px' }}
      >
        <NavbarDropdown onLogout={onLogout} />
      </div>
      
      {/* Separator Line - positioned at 75px from left, full height */}
      <div 
        className="absolute w-px h-12 bg-[#505767] top-0"
        style={{ left: '75px' }}
      />
      
      {/* Center Tabs */}
      <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <HorizontalTab activeTab={activeTab} onTabChange={onTabChange} />
      </div>
      
      {/* Right Side Utilities */}
      <div className="absolute right-3 top-1/2 translate-y-[-50%]">
        <Utilities onLogout={onLogout} />
      </div>
    </div>
  );
}

interface TotalJobsProps {
  count: number;
  loading?: boolean;
}

function TotalJobs({ count, loading }: TotalJobsProps) {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Total Jobs"
    >
      <div className="[grid-area:1_/_1] font-['Inter:Medium',_sans-serif] font-medium ml-0 mt-0 not-italic relative text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">
          Total Jobs: {loading ? '...' : count}
        </p>
      </div>
    </div>
  );
}

function FilterList() {
  return (
    <div className="absolute left-0 size-4 top-0" data-name="filter_list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="filter_list">
          <mask
            height="16"
            id="mask0_2_30048"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="16"
              id="Bounding box"
              width="16"
            />
          </mask>
          <g mask="url(#mask0_2_30048)">
            <path
              d={toolbarSvgPaths.p8cd7480}
              fill="var(--fill-0, #3874FF)"
              id="filter_list_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Filters() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="filters">
      <FilterList />
    </div>
  );
}

function NoOfIcons112Px18Px() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex flex-row gap-3 items-center justify-start ml-0 mt-0 p-0 relative"
      data-name="No. of Icons /1/12 px/18 px"
    >
      <Filters />
    </div>
  );
}

function IconLeft() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Icon Left"
    >
      <NoOfIcons112Px18Px />
    </div>
  );
}

function ArrowDropdown1() {
  return (
    <div
      className="[grid-area:1_/_1] ml-0 mt-0 relative size-[18px]"
      data-name="arrow_dropdown"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g clipPath="url(#clip0_2_30164)" id="arrow_dropdown">
          <g id="Vector"></g>
          <path
            d={toolbarSvgPaths.p1a435af0}
            fill="var(--fill-0, #3874FF)"
            id="expand_more"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_30164">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconRight() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0"
      data-name="Icon Right"
    >
      <ArrowDropdown1 />
    </div>
  );
}

interface FilterButtonProps {
  onClick: () => void;
}

function FilterButton({ onClick }: FilterButtonProps) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center leading-[0] px-2 py-1 relative rounded shrink-0 cursor-pointer hover:bg-[#333b4f] transition-colors"
      data-name="Button"
      onClick={onClick}
    >
      <IconLeft />
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#3874ff] text-[14px] text-left text-nowrap">
        <p className="block leading-[18px] whitespace-pre">Add Filter</p>
      </div>
      <IconRight />
    </div>
  );
}

interface LeftsideControlsProps {
  jobCount: number;
  loading?: boolean;
  onAddFilter: () => void;
}

function LeftsideControls({ jobCount, loading, onAddFilter }: LeftsideControlsProps) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start pl-3 pr-0 py-0 relative shrink-0"
      data-name="Leftside Controls"
    >
      <TotalJobs count={jobCount} loading={loading} />
      <FilterButton onClick={onAddFilter} />
    </div>
  );
}

interface JobListPageProps {
  onLogout?: () => void;
  onCreateJob?: () => void;
}

export default function JobListPage({ onLogout, onCreateJob }: JobListPageProps) {
  const [activeTab, setActiveTab] = useState<'Imports' | 'Exports'>('Imports');
  const [loading, setLoading] = useState(false);
  const [jobData] = useState(mockJobs);
  const [isCreateJobSidebarOpen, setIsCreateJobSidebarOpen] = useState(false);

  const handleAddFilter = useCallback(() => {
    console.log('Add filter clicked');
  }, []);

  const handleCreateJob = useCallback(() => {
    setIsCreateJobSidebarOpen(true);
  }, []);

  const handleCreateJobSubmit = useCallback((jobData: any) => {
    console.log('Creating job with data:', jobData);
    // Here you would typically send the data to your backend
    setIsCreateJobSidebarOpen(false);
    // Navigate to job creation page
    onCreateJob?.();
  }, [onCreateJob]);



  const filteredJobs = useMemo(() => {
    return jobData.filter(job => 
      activeTab === 'Imports' ? job.type === 'Import' : job.type === 'Export'
    );
  }, [jobData, activeTab]);

  return (
    <div className="w-full h-full bg-[#CAD2E5] flex flex-col">
      {/* Global Navigation - 48px height */}
      <GlobalNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        onLogout={onLogout} 
      />
      
      {/* Toolbar - 48px height */}
      <div
        className="bg-[#242c40] box-border content-stretch flex flex-row items-center justify-start p-0 relative h-12 w-full"
        data-name="Toolbar"
      >
        <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div
          className="basis-0 grow h-12 min-h-px min-w-px relative shrink-0"
          data-name="List Toolbar"
        >
          <div className="absolute border-0 border-[#505767] border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row h-12 items-center justify-between pl-0 pr-3 py-0 relative w-full">
              <LeftsideControls 
                jobCount={filteredJobs.length}
                loading={loading}
                onAddFilter={handleAddFilter}
              />
              <div
                className="box-border content-stretch flex flex-row gap-4 items-center justify-end p-0 relative shrink-0"
                data-name="Right Side Controls"
              >
                <div
                  className="box-border content-stretch flex flex-row gap-3 items-center justify-center p-0 relative shrink-0"
                  data-name="Toolbar Actions"
                >
                  <div
                    className="bg-[#3874ff] box-border content-stretch flex flex-row gap-1 items-center justify-center px-2 py-1 relative rounded shrink-0 cursor-pointer hover:bg-[#2563eb] transition-colors"
                    data-name="Button"
                    onClick={handleCreateJob}
                  >
                    <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
                      <p className="block leading-[18px] whitespace-pre">Create Job</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Table Container - Takes remaining viewport height with 16px left/right padding, 12px top/bottom padding */}
      <div className="flex-1 px-4 py-3 bg-[#CAD2E5] overflow-hidden">
        <div className="w-full h-full">
          <FixedColumnsTable />
        </div>
      </div>

      {/* Create Job Sidebar */}
      <CreateJobSidebar
        isOpen={isCreateJobSidebarOpen}
        onClose={() => setIsCreateJobSidebarOpen(false)}
        onSubmit={handleCreateJobSubmit}
      />
    </div>
  );
}