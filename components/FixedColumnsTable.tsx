import React, { useState, useEffect, useRef } from 'react';
import { Resizable } from 're-resizable';
import { MoreHorizontal, Settings, GripVertical, Lock, Unlock } from 'lucide-react';
import svgPaths from '../imports/svg-xkhl016h09';
import tableEditPaths from '../imports/svg-vbhf83hu8j';
import moreVertPaths from '../imports/svg-8d4vrew1xk';
import rowActionPaths from '../imports/svg-ra1x39djyh';
import bulkActionPaths from '../imports/svg-u35ksbtsus';
import checkboxSvgPaths from '../imports/svg-avdz5wve3u';
import uncheckedCheckboxSvgPaths from '../imports/svg-88ttit90gd';
import FooterActionControls from '../imports/FooterActionControls-210-2021';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Button } from './ui/button';
import FiltersSort from '../imports/FiltersSort';
import DropdownList from '../imports/DropdownList';
import ColumnCustomization from './ColumnCustomization';
import redLock from 'figma:asset/b432ee7e1a96e43ed63fe610f4fdd451d8151b58.png';
import blueLock from 'figma:asset/30c8e79624c36062b2c913c4e3c04be3819994f3.png';
import yellowLock from 'figma:asset/8d52d71faaf8d0fb026c95ffd646f6f51a1d90ea.png';

import countSvgPaths from '../imports/svg-77um7spoaq';
import tooltipSvgPaths from '../imports/svg-ws0dlxb42q';

// Table data interface
interface TableData {
  id: string;
  dateTime: string;
  modeOfTransport: string;
  referenceNo: string;
  number: string;
  type: string;
  beNumber: string;
  beDate: string;
  city: string;
  importer: string;
  supplier: string;
  dutyPayable: string;
  assessableVal: string;
  igmNo: string;
  eta: string;
  mawbMblNo: string;
  mawbDt: string;
  hawbHblNo: string;
  hawbDt: string;
  fromAddress: string;
  toAddress: string;
  emailSubjectLine: string;
  mailReceivedTime: string;
  createdBy: string;
  updatedBy: string;
  status: string;
  jobDataProgress: {
    percentage: number;
    color: 'yellow' | 'red' | 'green';
  };
}

// Generate sample data
const generateTableData = (): TableData[] => {
  const data: TableData[] = [];
  
  // Generate random job number in ICB/12345/2023-24 format
  const generateJobNumber = () => {
    const randomNum = Math.floor(Math.random() * 90000) + 10000; // 5-digit number
    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;
    const yearRange = `${currentYear.toString().slice(-2)}-${nextYear.toString().slice(-2)}`;
    return `ICB/${randomNum}/${yearRange}`;
  };

  const sampleValues = {
    referenceNos: ['REF12345678', 'REF23456789', 'REF34567890', 'REF45678901', 'REF56789012'],
    numbers: Array.from({ length: 30 }, () => generateJobNumber()),
    modesOfTransport: ['sea', 'land', 'air'],
    types: ['Home Consumption', 'Warehouse', 'Ex-bond'],
    beNumbers: ['1234567', '2345678', '3456789', '4567890', '5678901'],
    beDates: ['15/09/2024', '16/09/2024', '17/09/2024', '18/09/2024', '19/09/2024'],
    cities: ['Houston', 'Aberdeen', 'Stavanger', 'Dubai', 'Singapore'],
    importers: ['Global Import Co', 'International Trade Ltd', 'Worldwide Imports', 'Trade Solutions Inc', 'Export-Import Partners'],
    suppliers: ['Maritime Services Ltd', 'Offshore Solutions Inc', 'Deep Water Tech', 'Ocean Engineering Co', 'Subsea Specialists'],
    dutyPayables: ['₹18,750', '₹13,425', '₹32,250', '₹11,520', '₹21,780'],
    assessableVals: ['₹1,25,000', '₹89,500', '₹2,15,000', '₹76,800', '₹1,45,200'],
    igmNos: ['12345678', '23456789', '34567890', '45678901', '56789012'],
    etas: ['17/09/2024', '18/09/2024', '19/09/2024', '20/09/2024', '21/09/2024'],
    mawbMblNos: ['SWENSINMAA2309210', 'UAECXPMAA2309211', 'SGSINMAA2309212', 'AEDXBMAA2309213', 'INMUMBAA2309214'],
    mawbDts: ['17/09/2024', '18/09/2024', '19/09/2024', '20/09/2024', '21/09/2024'],
    hawbHblNos: ['LESSGMAA230931000', 'UAESGMAA230931001', 'SGHMAA230931002', 'AEDMAA230931003', 'INMAA230931004'],
    hawbDts: ['17/09/2024', '18/09/2024', '19/09/2024', '20/09/2024', '21/09/2024'],
    fromAddresses: ['raja.ccu@abc.com', 'operations@abc.com', 'export@abc.com', 'import@abc.com', 'logistics@abc.com'],
    toAddresses: ['import@abc.com', 'operations@abc.com', 'export@abc.com', 'customs@abc.com', 'logistics@abc.com'],
    emailSubjectLines: ['Create a job for phomas diagnostics except packing List', 'Urgent clearance required for shipment', 'Documentation required for customs', 'Invoice and packing list attached', 'Shipment arrival notification'],
    mailReceivedTimes: ['12/12/2024 12:30 PM', '12/12/2024 01:15 PM', '12/12/2024 02:45 PM', '12/12/2024 03:20 PM', '12/12/2024 04:10 PM'],
    createdBy: ['John Smith', 'Sarah Johnson', 'Mike Davis', 'Lisa Wilson', 'Tom Brown'],
    updatedBy: ['Admin User', 'System Auto', 'Manager1', 'Supervisor', 'Admin User'],
    statuses: [
      'Positive Acknowledgement', 
      'Negative Acknowledgement', 
      'Query Raised', 
      'Job submitted to icegate', 
      'Job Created', 
      'OOC Received', 
      'Gatepass received'
    ],
    jobDataProgressValues: [
      { percentage: 25, color: 'yellow' as const },
      { percentage: 2, color: 'red' as const },
      { percentage: 80, color: 'green' as const },
      { percentage: 60, color: 'yellow' as const },
      { percentage: 15, color: 'red' as const }
    ]
  };

  for (let i = 0; i < 30; i++) {
    const index = i % 5;
    const typeIndex = i % 3; // For BE Types (3 values)
    const motIndex = i % 3; // For Mode of Transport (3 values)
    const statusIndex = i % 7; // For Status values (7 values)
    const progressIndex = i % 5; // For Progress values (5 values)
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));
    
    data.push({
      id: `row-${i + 1}`,
      dateTime: date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modeOfTransport: sampleValues.modesOfTransport[motIndex],
      referenceNo: sampleValues.referenceNos[index],
      number: sampleValues.numbers[index],
      type: sampleValues.types[typeIndex],
      beNumber: sampleValues.beNumbers[index],
      beDate: sampleValues.beDates[index],
      city: sampleValues.cities[index],
      importer: sampleValues.importers[index],
      supplier: sampleValues.suppliers[index],
      dutyPayable: sampleValues.dutyPayables[index],
      assessableVal: sampleValues.assessableVals[index],
      igmNo: sampleValues.igmNos[index],
      eta: sampleValues.etas[index],
      mawbMblNo: sampleValues.mawbMblNos[index],
      mawbDt: sampleValues.mawbDts[index],
      hawbHblNo: sampleValues.hawbHblNos[index],
      hawbDt: sampleValues.hawbDts[index],
      fromAddress: sampleValues.fromAddresses[index],
      toAddress: sampleValues.toAddresses[index],
      emailSubjectLine: sampleValues.emailSubjectLines[index],
      mailReceivedTime: sampleValues.mailReceivedTimes[index],
      createdBy: sampleValues.createdBy[index],
      updatedBy: sampleValues.updatedBy[index],
      status: sampleValues.statuses[statusIndex],
      jobDataProgress: sampleValues.jobDataProgressValues[progressIndex]
    });
  }

  return data;
};

// Column configuration
interface ColumnConfig {
  key: keyof TableData;
  title: string;
  width: number;
  minWidth: number;
  maxWidth: number;
  fixed?: 'left' | 'right';
  moveable?: boolean;
  visible: boolean;
  render?: (value: any, row: TableData) => React.ReactNode;
}

// Custom Filter Icon Component
const FilterIcon: React.FC<{ 
  className?: string; 
  isOpen?: boolean; 
  onClick?: () => void; 
}> = ({ className, isOpen = false, onClick }) => {
  const iconColor = isOpen ? '#3874FF' : 'currentColor';
  
  return (
    <svg
      className={`${className} cursor-pointer hover:opacity-80`}
      fill="none"
      viewBox="0 0 16 16"
      onClick={onClick}
    >
      <path
        d={svgPaths.p8cd7480}
        fill={iconColor}
      />
    </svg>
  );
};

// Custom Table Edit Icon Component
const TableEditIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 18 18"
    >
      <g id="table edit">
        <rect
          fill="currentColor"
          height="12"
          id="Rectangle 3"
          width="1.2"
          x="5"
          y="3"
        />
        <path
          d={tableEditPaths.p3c1edf00}
          fill="currentColor"
          id="Subtract"
        />
        <path 
          d={tableEditPaths.p6dabd00} 
          fill="currentColor" 
          id="edit" 
        />
      </g>
    </svg>
  );
};

// Custom Count Indicator Component
const CountIndicator: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className="relative rounded-[3px] shrink-0 h-[18px] min-w-[18px] inline-flex items-center">
      <div className="overflow-clip relative h-[18px] w-full min-w-[18px] flex items-center">
        <div className="flex items-center w-full px-1">
          <div className="flex items-center justify-center w-1 h-1 mr-1">
            <svg
              className="block w-1 h-1"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 4 4"
            >
              <path d={countSvgPaths.pe24f280} fill="#626776" />
            </svg>
          </div>
          <span className="font-['Inter:Regular',_sans-serif] font-normal text-[#626776] text-[12px] leading-[18px] whitespace-nowrap">
            {count}
          </span>
        </div>
      </div>
      <div className="absolute border border-[#d0d5e3] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
};

// Custom Checkbox Component using Figma design
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

// Job Data Progress Tooltip Component based on imported Figma design
const JobDataProgressTooltip: React.FC = () => {

  const Frame42152 = () => (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-6 justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left w-full">
        <p className="block leading-[18px]">Item Details</p>
      </div>
    </div>
  );

  const Frame42151 = () => (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame42152 />
    </div>
  );

  const Header = () => (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-center left-11 p-[8px] rounded top-[202px] w-[151px]"
      data-name="Header"
    >
      <Frame42151 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[12px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          75 % completed
        </p>
      </div>
    </div>
  );

  const Frame42153 = () => (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-6 justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left w-full">
        <p className="block leading-[18px]">Supporting Docs</p>
      </div>
    </div>
  );

  const Frame42154 = () => (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame42153 />
    </div>
  );

  const Header1 = () => (
    <div
      className="absolute box-border content-stretch flex flex-col gap-1.5 items-start justify-center left-11 p-[8px] rounded top-[264px] w-[151px]"
      data-name="Header"
    >
      <Frame42154 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[12px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          50 % completed
        </p>
      </div>
    </div>
  );

  const Frame42155 = () => (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-6 justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left w-full">
        <p className="block leading-[18px]">Statements</p>
      </div>
    </div>
  );

  const Frame42156 = () => (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame42155 />
    </div>
  );

  const Header2 = () => (
    <div
      className="absolute box-border content-stretch flex flex-col gap-1.5 items-start justify-center left-11 p-[8px] rounded top-[332px] w-[151px]"
      data-name="Header"
    >
      <Frame42156 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[12px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          50 % completed
        </p>
      </div>
    </div>
  );

  const Frame42157 = () => (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-6 justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left w-full">
        <p className="block leading-[18px]">{`Job Details `}</p>
      </div>
    </div>
  );

  const Frame42158 = () => (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame42157 />
    </div>
  );

  const Header3 = () => (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-center left-11 p-[8px] rounded top-4 w-[151px]"
      data-name="Header"
    >
      <Frame42158 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#cdcfd3] text-[12px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          100 % completed
        </p>
      </div>
    </div>
  );

  const Frame42159 = () => (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-6 justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left w-full">
        <p className="block leading-[18px]">Invoice Details</p>
      </div>
    </div>
  );

  const Frame42160 = () => (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
      <Frame42159 />
    </div>
  );

  const Header4 = () => (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-center left-11 p-[8px] rounded top-[140px] w-[151px]"
      data-name="Header"
    >
      <Frame42160 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[12px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          75 % completed
        </p>
      </div>
    </div>
  );

  const Group3 = () => (
    <div className="absolute left-[17px] size-[18px] top-[27px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Group 3">
          <circle
            cx="9"
            cy="9"
            fill="var(--fill-0, #00B196)"
            id="Ellipse 10"
            r="9"
          />
          <g id="check">
            <mask
              height="16"
              id="mask0_170_9543"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "alpha" }}
              width="16"
              x="1"
              y="1"
            >
              <rect
                fill="var(--fill-0, #D9D9D9)"
                height="16"
                id="Bounding box"
                width="16"
                x="1"
                y="1"
              />
            </mask>
            <g mask="url(#mask0_170_9543)">
              <path
                d={tooltipSvgPaths.pb636100}
                fill="var(--fill-0, white)"
                id="check_2"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );

  const ScrollBar = () => (
    <div
      className="absolute h-[52px] opacity-0 right-[3.457px] translate-y-[-50%] w-1.5"
      data-name="Scroll Bar"
      style={{ top: "calc(50% - 340px)" }}
    >
      <div
        className="absolute bg-[#32394c] inset-0 rounded-[22px]"
        data-name="Vertical Bar"
      />
    </div>
  );

  const Frame42161 = () => (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-6 justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left w-full">
        <p className="block leading-[18px]">IGM Details</p>
      </div>
    </div>
  );

  const Frame42162 = () => (
    <div className="box-border content-stretch flex flex-row gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame42161 />
    </div>
  );

  const Header5 = () => (
    <div
      className="absolute box-border content-stretch flex flex-col items-start justify-center left-11 p-[8px] rounded top-[78px] w-[151px]"
      data-name="Header"
    >
      <Frame42162 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#9497a1] text-[12px] text-left text-nowrap">
        <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">
          80 % completed
        </p>
      </div>
    </div>
  );

  const ClockLoader20 = () => (
    <div
      className="absolute bottom-[117.266%] left-[7.238%] right-[85.817%] top-[-17.465%]"
      data-name="clock_loader_20"
    >
      <div className="absolute bottom-0 left-0 right-0 top-[-0.007%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 15 1"
        >
          <g id="clock_loader_20">
            <path
              d={tooltipSvgPaths.p26ff1f80}
              fill="var(--fill-0, #6D758C)"
              id="clock_loader_20_2"
            />
          </g>
        </svg>
      </div>
    </div>
  );

  const ClockLoader21 = () => (
    <div
      className="absolute left-[17px] size-5 top-[88px]"
      data-name="clock_loader_20"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="clock_loader_20">
          <circle
            cx="9.99929"
            cy="10"
            fill="var(--fill-0, #516086)"
            id="Ellipse 11"
            r="7.27273"
          />
          <mask
            height="20"
            id="mask0_177_8888"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_177_8888)">
            <path
              d={tooltipSvgPaths.p12edc600}
              fill="var(--fill-0, #283962)"
              id="clock_loader_20_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );

  const ClockLoader22 = () => (
    <div
      className="absolute left-[17px] size-5 top-[150px]"
      data-name="clock_loader_20"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="clock_loader_20">
          <circle
            cx="9.99929"
            cy="10"
            fill="var(--fill-0, #4F5D83)"
            id="Ellipse 11"
            r="7.27273"
          />
          <mask
            height="20"
            id="mask0_177_8906"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_177_8906)">
            <path
              d={tooltipSvgPaths.p1528b00}
              fill="var(--fill-0, #283962)"
              id="clock_loader_60"
            />
          </g>
        </g>
      </svg>
    </div>
  );

  const ClockLoader23 = () => (
    <div
      className="absolute left-[17px] size-5 top-[212px]"
      data-name="clock_loader_20"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="clock_loader_20">
          <circle
            cx="9.99929"
            cy="10"
            fill="var(--fill-0, #516086)"
            id="Ellipse 11"
            r="7.27273"
          />
          <mask
            height="20"
            id="mask0_177_8883"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_177_8883)">
            <path
              d={tooltipSvgPaths.p1528b00}
              fill="var(--fill-0, #283962)"
              id="clock_loader_60"
            />
          </g>
        </g>
      </svg>
    </div>
  );

  const ClockLoader24 = () => (
    <div
      className="absolute left-[17px] size-5 top-[274px]"
      data-name="clock_loader_20"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="clock_loader_20">
          <circle
            cx="9.99929"
            cy="10"
            fill="var(--fill-0, #516086)"
            id="Ellipse 11"
            r="7.27273"
          />
          <mask
            height="20"
            id="mask0_177_8883"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_177_8883)">
            <path
              d={tooltipSvgPaths.p1528b00}
              fill="var(--fill-0, #283962)"
              id="clock_loader_60"
            />
          </g>
        </g>
      </svg>
    </div>
  );

  const ClockLoader25 = () => (
    <div
      className="absolute left-[17px] size-5 top-[342px]"
      data-name="clock_loader_20"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="clock_loader_20">
          <circle
            cx="9.99929"
            cy="10"
            fill="var(--fill-0, #516086)"
            id="Ellipse 11"
            r="7.27273"
          />
          <mask
            height="20"
            id="mask0_177_8883"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <rect
              fill="var(--fill-0, #D9D9D9)"
              height="20"
              id="Bounding box"
              width="20"
            />
          </mask>
          <g mask="url(#mask0_177_8883)">
            <path
              d={tooltipSvgPaths.p1528b00}
              fill="var(--fill-0, #283962)"
              id="clock_loader_60"
            />
          </g>
        </g>
      </svg>
    </div>
  );

  const SidebarSkeleton = () => (
    <div
      className="absolute bg-[#050e25] h-[412px] left-[6.543px] rounded-[10px] top-0 w-[204.457px]"
      data-name="Sidebar Skeleton"
    >
      <div className="h-[412px] overflow-clip relative w-[204.457px]">
        <Header />
        <Header1 />
        <Header2 />
        <div className="absolute flex h-[313px] items-center justify-center left-[26px] top-[38px] w-[0px]">
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[313px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 313 1"
                >
                  <line
                    id="Line 155"
                    stroke="var(--stroke-0, #535D78)"
                    x2="313"
                    y1="0.5"
                    y2="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Header3 />
        <Header4 />
        <Group3 />
        <ScrollBar />
        <Header5 />
        <ClockLoader20 />
        <ClockLoader21 />
        <ClockLoader22 />
        <ClockLoader23 />
        <ClockLoader24 />
        <ClockLoader25 />
      </div>
      <div className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );

  const Group42124 = () => (
    <div className="absolute contents left-[6.543px] top-0">
      <SidebarSkeleton />
    </div>
  );

  return (
    <div className="relative size-full">
      <Group42124 />
    </div>
  );
};

// Job Data Progress Bar Component with tooltip functionality
const JobDataProgressBar: React.FC<{ percentage: number; color: 'yellow' | 'red' | 'green' }> = ({ percentage, color }) => {
  const getProgressColors = (color: 'yellow' | 'red' | 'green') => {
    switch (color) {
      case 'yellow':
        return {
          background: '#fff2d9',
          fill: '#fdca5f'
        };
      case 'red':
        return {
          background: '#fcd2d2',
          fill: '#f44545'
        };
      case 'green':
        return {
          background: 'rgba(28,184,152,0.33)',
          fill: '#1cb898'
        };
      default:
        return {
          background: '#fff2d9',
          fill: '#fdca5f'
        };
    }
  };

  const colors = getProgressColors(color);
  const fillWidth = Math.max(5, (percentage / 100) * 136); // Minimum 5px width for visibility

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center justify-between w-full h-full cursor-pointer">
            {/* Progress Bar Container */}
            <div className="h-2 w-[136px] rounded-xl relative">
              <div 
                className="absolute h-2 left-0 rounded-[10px] top-0 w-[136px]"
                style={{ backgroundColor: colors.background }}
              />
              <div 
                className="absolute h-2 left-0 rounded-sm top-0"
                style={{ 
                  backgroundColor: colors.fill,
                  width: `${fillWidth}px`
                }}
              />
            </div>
            
            {/* Percentage Text */}
            <div className="flex items-center justify-center font-['Inter:Regular',_sans-serif] font-normal leading-[18px] text-[#050e25] text-[14px] w-[29px] h-full">
              {percentage}%
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent 
          side="left" 
          align="center"
          className="p-0 border-none shadow-lg bg-transparent"
          sideOffset={10}
        >
          <div className="w-[211px] h-[412px]">
            <JobDataProgressTooltip />
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

// Custom More Vert Icon Component
const MoreVertIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 18 18"
    >
      <g id="more_vert">
        <mask
          height="18"
          id="mask0_91_314"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
          width="18"
          x="0"
          y="0"
        >
          <rect
            fill="currentColor"
            height="18"
            id="Bounding box"
            width="18"
          />
        </mask>
        <g mask="url(#mask0_91_314)">
          <path
            d={moreVertPaths.p3a06d000}
            fill="currentColor"
            id="more_vert_2"
          />
        </g>
      </g>
    </svg>
  );
};

// Custom Footer Action Controls Component using Figma imported design
const CustomFooterActionControls: React.FC<{ onAction: (action: string) => void; selectedCount: number }> = ({ onAction, selectedCount }) => {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <FooterActionControls 
        selectedCount={selectedCount}
        onCancel={() => onAction('cancel')}
      />
    </div>
  );
};

// Column definitions with BE Number added before BE Date
const getDefaultColumns = (): ColumnConfig[] => [
  {
    key: 'number',
    title: 'Job Number',
    width: 160,
    minWidth: 140,
    maxWidth: 180,
    fixed: 'left',
    moveable: false,
    visible: true,
  },
  {
    key: 'dateTime',
    title: 'Job Date and Time',
    width: 200,
    minWidth: 150,
    maxWidth: 250,
    visible: true,
  },
  {
    key: 'modeOfTransport',
    title: 'Mode of Transport',
    width: 150,
    minWidth: 120,
    maxWidth: 200,
    visible: true,
  },
  {
    key: 'referenceNo',
    title: 'Reference No.',
    width: 150,
    minWidth: 120,
    maxWidth: 200,
    visible: true,
  },
  {
    key: 'type',
    title: 'BE Type',
    width: 150,
    minWidth: 120,
    maxWidth: 200,
    visible: true,
  },
  {
    key: 'beNumber',
    title: 'BE Number',
    width: 140,
    minWidth: 120,
    maxWidth: 180,
    visible: true,
    render: (value) => (
      <div className="px-2 py-1.5">
        <span className="font-['Inter:Regular',_sans-serif] text-[#3874ff] text-[14px] leading-[18px]">
          {value}
        </span>
      </div>
    ),
  },
  {
    key: 'beDate',
    title: 'BE Date',
    width: 120,
    minWidth: 100,
    maxWidth: 150,
    visible: true,
  },
  {
    key: 'city',
    title: 'City',
    width: 120,
    minWidth: 100,
    maxWidth: 150,
    visible: true,
  },
  {
    key: 'importer',
    title: 'Importer',
    width: 200,
    minWidth: 150,
    maxWidth: 300,
    visible: true,
  },
  {
    key: 'supplier',
    title: 'Supplier',
    width: 200,
    minWidth: 150,
    maxWidth: 300,
    visible: true,
  },
  {
    key: 'dutyPayable',
    title: 'Duty Payable',
    width: 150,
    minWidth: 120,
    maxWidth: 200,
    visible: true,
  },
  {
    key: 'assessableVal',
    title: 'Assessable Value',
    width: 160,
    minWidth: 130,
    maxWidth: 200,
    visible: true,
  },
  {
    key: 'igmNo',
    title: 'IGM No.',
    width: 120,
    minWidth: 100,
    maxWidth: 150,
    visible: true,
  },
  {
    key: 'eta',
    title: 'ETA',
    width: 120,
    minWidth: 100,
    maxWidth: 150,
    visible: true,
  },
  {
    key: 'mawbMblNo',
    title: 'MAWB/MBL No.',
    width: 180,
    minWidth: 150,
    maxWidth: 220,
    visible: true,
  },
  {
    key: 'mawbDt',
    title: 'MAWB Date',
    width: 140,
    minWidth: 120,
    maxWidth: 180,
    visible: true,
  },
  {
    key: 'hawbHblNo',
    title: 'HAWB/HBL No.',
    width: 180,
    minWidth: 150,
    maxWidth: 220,
    visible: true,
  },
  {
    key: 'hawbDt',
    title: 'HAWB Date',
    width: 140,
    minWidth: 120,
    maxWidth: 180,
    visible: true,
  },
  {
    key: 'fromAddress',
    title: 'From Email Address',
    width: 200,
    minWidth: 150,
    maxWidth: 300,
    visible: true,
  },
  {
    key: 'toAddress',
    title: 'To Email Address',
    width: 200,
    minWidth: 150,
    maxWidth: 300,
    visible: true,
  },
  {
    key: 'emailSubjectLine',
    title: 'Email Subject Line',
    width: 450,
    minWidth: 350,
    maxWidth: 600,
    visible: true,
  },
  {
    key: 'mailReceivedTime',
    title: 'Mail Received Time',
    width: 180,
    minWidth: 150,
    maxWidth: 220,
    visible: true,
  },
  {
    key: 'createdBy',
    title: 'Created By',
    width: 150,
    minWidth: 120,
    maxWidth: 200,
    visible: true,
  },
  {
    key: 'updatedBy',
    title: 'Updated By',
    width: 150,
    minWidth: 120,
    maxWidth: 200,
    visible: true,
  },
  {
    key: 'status',
    title: 'Status',
    width: 200,
    minWidth: 150,
    maxWidth: 300,
    visible: true,
  },
  {
    key: 'jobDataProgress',
    title: 'Job Data Progress',
    width: 200,
    minWidth: 180,
    maxWidth: 250,
    fixed: 'right',
    moveable: false,
    visible: true,
    render: (value, row) => {
      const { percentage, color } = value;
      
      const getProgressBarColor = () => {
        switch (color) {
          case 'yellow':
            return { bg: '#fff2d9', fill: '#fdca5f' };
          case 'red':
            return { bg: '#fcd2d2', fill: '#f44545' };
          case 'green':
            return { bg: 'rgba(28,184,152,0.33)', fill: '#1cb898' };
          default:
            return { bg: '#fff2d9', fill: '#fdca5f' };
        }
      };

      const colors = getProgressBarColor();
      const fillWidth = Math.max(percentage * 136 / 100, 5); // Minimum 5px fill width

      return (
        <div className="px-2 py-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-3 cursor-pointer">
                  <div 
                    className="relative h-2 rounded-sm"
                    style={{ 
                      width: '136px',
                      backgroundColor: colors.bg 
                    }}
                  >
                    <div 
                      className="absolute left-0 top-0 h-full rounded-sm transition-all duration-300"
                      style={{ 
                        width: `${fillWidth}px`,
                        backgroundColor: colors.fill 
                      }}
                    />
                  </div>
                  <span className="text-[#050e25] whitespace-nowrap">
                    {percentage}%
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent 
                side="left" 
                align="center"
                className="p-0 border-none bg-transparent shadow-none"
                sideOffset={5}
              >
                <JobDataProgressTooltip />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    }
  }
];

const FixedColumnsTable: React.FC = () => {
  const [data] = useState<TableData[]>(generateTableData());
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [isColumnCustomizationOpen, setIsColumnCustomizationOpen] = useState(false);
  const [hoveredCell, setHoveredCell] = useState<{ rowIndex: number; columnKey: string } | null>(null);
  const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragHoveredColumn, setDragHoveredColumn] = useState<string | null>(null);
  const [openFilterColumn, setOpenFilterColumn] = useState<string | null>(null);
  
  // Default column configuration
  const [columnConfigs, setColumnConfigs] = useState<ColumnConfig[]>([
    // Fixed left columns
    { 
      key: 'number', 
      title: 'Job Number', 
      width: 160, 
      minWidth: 140, 
      maxWidth: 180, 
      fixed: 'left', 
      moveable: true,
      visible: true,
      render: (value: string, row: TableData) => {
        // Cycle through lock icons based on row index
        const lockIcons = [yellowLock, blueLock, redLock];
        const lockAlts = ['Yellow Lock', 'Blue Lock', 'Red Lock'];
        const tooltipMessages = ['Accessed by Jhony Doe', 'Positive Ack Received', 'Manually Locked'];
        const rowIndex = parseInt(row.id.split('-')[1]) - 1;
        const iconIndex = rowIndex % 3;
        
        return (
          <div className="flex items-center justify-between w-full">
            <span className="text-[#3874ff] break-words whitespace-normal" style={{ fontSize: '14px' }}>
              {value}
            </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <img 
                    src={lockIcons[iconIndex]} 
                    alt={lockAlts[iconIndex]} 
                    className="w-[18px] h-[18px] cursor-pointer flex-shrink-0" 
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tooltipMessages[iconIndex]}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        );
      }
    },
    
    // Scrollable middle columns
    { key: 'dateTime', title: 'Job Date & Time', width: 180, minWidth: 150, maxWidth: 220, moveable: true, visible: true },
    { 
      key: 'modeOfTransport', 
      title: 'Mode of Transport', 
      width: 160, 
      minWidth: 140, 
      maxWidth: 200, 
      moveable: true,
      visible: true,
      render: (value: string) => {
        // Map transport modes to display names
        const transportMap = {
          sea: 'Sea',
          land: 'Land',
          air: 'Air'
        };
        
        const displayName = transportMap[value as keyof typeof transportMap] || 'Sea';
        
        return (
          <span className="text-[#050E25] break-words whitespace-normal" style={{ fontSize: '14px' }}>
            {displayName}
          </span>
        );
      }
    },
    { key: 'referenceNo', title: 'Reference No.', width: 140, minWidth: 120, maxWidth: 180, moveable: true, visible: true },
    { key: 'type', title: 'BE Type', width: 180, minWidth: 140, maxWidth: 220, moveable: true, visible: true },
    { 
      key: 'beNumber', 
      title: 'BE Number', 
      width: 140, 
      minWidth: 120, 
      maxWidth: 180, 
      moveable: true,
      visible: true,
      render: (value: string) => (
        <span className="font-['Inter:Regular',_sans-serif] text-[#3874ff] text-[14px] leading-[18px]">
          {value}
        </span>
      )
    },
    { key: 'beDate', title: 'BE Date', width: 120, minWidth: 100, maxWidth: 160, moveable: true, visible: true },
    { key: 'city', title: 'CB City', width: 120, minWidth: 100, maxWidth: 160, moveable: true, visible: true },
    { key: 'importer', title: 'Importer', width: 180, minWidth: 140, maxWidth: 220, moveable: true, visible: true },
    { key: 'supplier', title: 'Supplier', width: 200, minWidth: 150, maxWidth: 280, moveable: true, visible: true },
    { key: 'dutyPayable', title: 'Duty Payable', width: 140, minWidth: 120, maxWidth: 180, moveable: true, visible: true },
    { key: 'assessableVal', title: 'Assessable Val.', width: 180, minWidth: 150, maxWidth: 240, moveable: true, visible: true },
    { 
      key: 'igmNo', 
      title: 'IGM No.', 
      width: 160, 
      minWidth: 140, 
      maxWidth: 200, 
      moveable: true,
      visible: true,
      render: (value: string, row: TableData) => {
        // Generate random count based on row ID for consistency
        const rowIndex = parseInt(row.id.split('-')[1]) - 1;
        const randomCount = ((rowIndex * 17) % 20) + 1; // Generates 1-20
        
        // Sample other IGM numbers for tooltip
        const otherIgmNos = [
          '12345679, 12345680, 12345681',
          '23456790, 23456791, 23456792', 
          '34567801, 34567802, 34567803',
          '45678912, 45678913, 45678914',
          '56789023, 56789024, 56789025'
        ];
        const otherNos = otherIgmNos[rowIndex % 5];
        
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center justify-between w-full cursor-pointer">
                  <span className="text-[#050E25] break-words whitespace-normal" style={{ fontSize: '14px' }}>
                    {value}
                  </span>
                  <CountIndicator count={randomCount} />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Other IGM No: {otherNos}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      }
    },
    { key: 'eta', title: 'ETA', width: 120, minWidth: 100, maxWidth: 160, moveable: true, visible: true },
    { 
      key: 'mawbMblNo', 
      title: 'MAWB/MBL No.', 
      width: 220, 
      minWidth: 190, 
      maxWidth: 260, 
      moveable: true,
      visible: true,
      render: (value: string, row: TableData) => {
        // Generate random count based on row ID for consistency
        const rowIndex = parseInt(row.id.split('-')[1]) - 1;
        const randomCount = ((rowIndex * 23) % 15) + 1; // Generates 1-15
        
        // Sample other MAWB/MBL numbers for tooltip
        const otherMawbNos = [
          'SWENSINMAA2309211, SWENSINMAA2309212',
          'UAECXPMAA2309212, UAECXPMAA2309213', 
          'SGSINMAA2309213, SGSINMAA2309214',
          'AEDXBMAA2309214, AEDXBMAA2309215',
          'INMUMBAA2309215, INMUMBAA2309216'
        ];
        const otherNos = otherMawbNos[rowIndex % 5];
        
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center justify-between w-full cursor-pointer">
                  <span className="text-[#050E25] break-words whitespace-normal" style={{ fontSize: '14px' }}>
                    {value}
                  </span>
                  <CountIndicator count={randomCount} />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Other MAWB/MBL No: {otherNos}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      }
    },
    { key: 'mawbDt', title: 'MAWB Dt.', width: 120, minWidth: 100, maxWidth: 160, moveable: true, visible: true },
    { 
      key: 'hawbHblNo', 
      title: 'HAWB/HBL No.', 
      width: 220, 
      minWidth: 190, 
      maxWidth: 260, 
      moveable: true,
      visible: true,
      render: (value: string, row: TableData) => {
        // Generate random count based on row ID for consistency
        const rowIndex = parseInt(row.id.split('-')[1]) - 1;
        const randomCount = ((rowIndex * 31) % 25) + 1; // Generates 1-25
        
        // Sample other HAWB/HBL numbers for tooltip
        const otherHawbNos = [
          'LESSGMAA230931001, LESSGMAA230931002',
          'UAESGMAA230931002, UAESGMAA230931003', 
          'SGHMAA230931003, SGHMAA230931004',
          'AEDMAA230931004, AEDMAA230931005',
          'INMAA230931005, INMAA230931006'
        ];
        const otherNos = otherHawbNos[rowIndex % 5];
        
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center justify-between w-full cursor-pointer">
                  <span className="text-[#050E25] break-words whitespace-normal" style={{ fontSize: '14px' }}>
                    {value}
                  </span>
                  <CountIndicator count={randomCount} />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Other HAWB/HBL No: {otherNos}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      }
    },
    { key: 'hawbDt', title: 'HAWB Dt.', width: 120, minWidth: 100, maxWidth: 160, moveable: true, visible: true },
    { key: 'fromAddress', title: 'From Address', width: 220, minWidth: 180, maxWidth: 280, moveable: true, visible: true },
    { key: 'toAddress', title: 'To Address', width: 220, minWidth: 180, maxWidth: 280, moveable: true, visible: true },
    { key: 'emailSubjectLine', title: 'Email subject line', width: 450, minWidth: 350, maxWidth: 600, moveable: true, visible: true },
    { key: 'mailReceivedTime', title: 'Mail Received Time', width: 200, minWidth: 180, maxWidth: 250, moveable: true, visible: true },
    { 
      key: 'jobDataProgress', 
      title: 'Job Data Progress', 
      width: 200, 
      minWidth: 180, 
      maxWidth: 250, 
      moveable: true,
      visible: true,
      render: (value: { percentage: number; color: 'yellow' | 'red' | 'green' }) => {
        return <JobDataProgressBar percentage={value.percentage} color={value.color} />;
      }
    },
    { key: 'createdBy', title: 'Created by', width: 140, minWidth: 120, maxWidth: 180, moveable: true, visible: true },
    { key: 'updatedBy', title: 'Updated by', width: 130, minWidth: 110, maxWidth: 170, moveable: true, visible: true },
    
    // Fixed right columns
    { 
      key: 'status', 
      title: 'Status', 
      width: 220, 
      minWidth: 180, 
      maxWidth: 280, 
      fixed: 'right',
      moveable: false,
      visible: true,
      render: (value: string) => {
        const getStatusColor = (status: string) => {
          switch (status) {
            case 'Positive Acknowledgement':
              return 'bg-green-500';
            case 'Negative Acknowledgement':
              return 'bg-red-500';
            case 'Query Raised':
              return 'bg-yellow-500';
            case 'Job submitted to icegate':
              return 'bg-blue-500';
            case 'Job Created':
              return 'bg-indigo-500';
            case 'OOC Received':
              return 'bg-purple-500';
            case 'Gatepass received':
              return 'bg-teal-500';
            default:
              return 'bg-gray-500';
          }
        };
        
        return (
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${getStatusColor(value)}`}></div>
            <span className="text-[#050E25] break-words whitespace-normal" style={{ fontSize: '14px' }}>
              {value}
            </span>
          </div>
        );
      }
    }
  ]);

  const [columnWidths, setColumnWidths] = useState<Record<string, number>>(() => {
    const initialWidths: Record<string, number> = {};
    columnConfigs.forEach(config => {
      initialWidths[config.key] = config.width;
    });
    return initialWidths;
  });
  
  const tableRef = useRef<HTMLDivElement>(null);

  // Synchronize row heights across all columns
  const synchronizeRowHeights = () => {
    if (!tableRef.current) return;

    data.forEach((_, rowIndex) => {
      const rowCells = tableRef.current!.querySelectorAll(`[data-row="${rowIndex}"]`);
      let maxHeight = 0;

      // Measure natural height of each cell
      rowCells.forEach(cell => {
        if (cell instanceof HTMLElement) {
          const originalHeight = cell.style.height;
          cell.style.height = 'auto';
          const cellHeight = cell.scrollHeight;
          maxHeight = Math.max(maxHeight, cellHeight);
          cell.style.height = originalHeight;
        }
      });

      // Apply synchronized height
      if (maxHeight > 0) {
        document.documentElement.style.setProperty(
          `--row-${rowIndex}-height`, 
          `${Math.max(maxHeight, 32)}px`
        );
      }
    });
  };

  // Trigger synchronization when column widths change
  useEffect(() => {
    const timer = setTimeout(synchronizeRowHeights, 100);
    return () => clearTimeout(timer);
  }, [columnWidths]);

  // Initial synchronization
  useEffect(() => {
    const timer = setTimeout(synchronizeRowHeights, 200);
    return () => clearTimeout(timer);
  }, [data]);

  const handleColumnResize = (columnKey: string, newWidth: number) => {
    setColumnWidths(prev => ({
      ...prev,
      [columnKey]: Math.max(60, newWidth)
    }));
    setTimeout(synchronizeRowHeights, 50);
  };

  const handleRowSelect = (rowId: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(rowId)) {
      newSelected.delete(rowId);
    } else {
      newSelected.add(rowId);
    }
    setSelectedRows(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(data.map(row => row.id)));
    }
  };

  // Handle row actions
  const handleRowAction = (action: string, rowId: string) => {
    console.log(`Action: ${action} for row: ${rowId}`);
    // Implement specific actions here
    switch (action) {
      case 'edit':
        console.log('Edit row:', rowId);
        break;
      case 'view-checklist':
        console.log('View checklist for row:', rowId);
        break;
      case 'view-status':
        console.log('View status for row:', rowId);
        break;
      case 'add-status':
        console.log('Add status for row:', rowId);
        break;
      case 'fetch-igm':
        console.log('Fetch IGM for row:', rowId);
        break;
      case 'fetch-irn':
        console.log('Fetch IRN for row:', rowId);
        break;
      case 'assigned-to':
        console.log('Assigned to for row:', rowId);
        break;
      case 'view-job-info':
        console.log('View job info for row:', rowId);
        break;
      case 'duplicate':
        console.log('Duplicate row:', rowId);
        break;
      case 'cancel':
        console.log('Cancel row:', rowId);
        break;
    }
  };

  // Handle bulk actions
  const handleBulkAction = (action: string) => {
    console.log(`Bulk action: ${action} for ${selectedRows.size} rows`);
    // Implement specific bulk actions here
    switch (action) {
      case 'duplicate':
        console.log('Duplicate selected rows:', Array.from(selectedRows));
        break;
      case 'cancel':
        console.log('Cancel selected rows:', Array.from(selectedRows));
        // Clear selection after cancel
        setSelectedRows(new Set());
        break;
    }
  };

  // Handle column customization save
  const handleColumnCustomizationSave = (newColumns: ColumnConfig[]) => {
    setColumnConfigs(newColumns);
    
    // Update column widths state for new configurations
    const newWidths: Record<string, number> = {};
    newColumns.forEach(config => {
      newWidths[config.key] = config.width;
    });
    setColumnWidths(newWidths);
    
    console.log('Column configuration saved:', newColumns);
  };

  // Handle drag start/end for draggable items
  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDragHoveredColumn(null);
  };

  // Filter visible columns
  const visibleColumns = columnConfigs.filter(config => config.visible);

  // Render column with proper positioning
  const renderColumn = (config: ColumnConfig, position: 'left' | 'middle' | 'right') => {
    const { key, title, minWidth, maxWidth, render } = config;
    const width = columnWidths[key];
    const isHeaderHighlighted = hoveredCell?.columnKey === key && hoveredCell?.rowIndex !== undefined;
    const isDragHovered = isDragging && dragHoveredColumn === key;

    return (
      <Resizable
        key={key}
        size={{ width, height: 'auto' }}
        onResizeStop={(e, direction, ref, d) => {
          handleColumnResize(key, width + d.width);
        }}
        enable={{ right: true }}
        minWidth={minWidth}
        maxWidth={maxWidth}
        handleStyles={{
          right: {
            width: '4px',
            right: '-2px',
            background: 'transparent',
            cursor: 'col-resize'
          }
        }}
      >
        <div className="flex flex-col h-full border-r border-[#D0D5E3]">
          {/* Header */}
          <div 
            className={`sticky top-0 z-50 border-b border-[#D0D5E3] text-left font-semibold text-[#050E25] h-11 flex items-center justify-between transition-all ${
              isDragHovered ? 'bg-[#EBEEF7] shadow-[inset_0_0_0_1px_#3874ff]' :
              isHeaderHighlighted ? 'bg-[#CEF6F0] shadow-[inset_0_0_0_1px_#00B196]' : 'bg-[#EBEEF7]'
            }`}
            style={{
              padding: '8px',
              fontSize: '14px'
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setDragHoveredColumn(key);
            }}
            onDragLeave={() => {
              setDragHoveredColumn(null);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setDragHoveredColumn(null);
              setIsDragging(false);
              // Handle drop logic here
            }}
          >
            <span>{title}</span>
            <Popover open={openFilterColumn === key} onOpenChange={(open) => setOpenFilterColumn(open ? key : null)}>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-[18px] h-[18px] p-0 hover:bg-gray-200"
                >
                  <FilterIcon 
                    className="w-[18px] h-[18px] text-[#050E25] opacity-60" 
                    isOpen={openFilterColumn === key}
                    onClick={() => setOpenFilterColumn(openFilterColumn === key ? null : key)}
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                align="start" 
                className="w-[320px] h-[480px] p-0 border-none shadow-lg"
                side="bottom"
                sideOffset={5}
              >
                <FiltersSort />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Body */}
          {data.map((row, index) => {
            const isCellHovered = hoveredCell?.rowIndex === index && hoveredCell?.columnKey === key;
            
            return (
              <div
                key={`${key}-${row.id}`}
                data-row={index}
                className={`border-b border-[#D0D5E3] flex items-center transition-all cursor-pointer ${
                  isCellHovered ? 'bg-white shadow-[inset_0_0_0_1px_#3874ff]' :
                  hoveredRowIndex === index ? 'bg-[#CEF6F0] shadow-[inset_0_1px_0_0_#00B196,inset_0_-1px_0_0_#00B196]' : 'bg-white'
                }`}
                style={{
                  padding: '8px',
                  height: `var(--row-${index}-height, auto)`,
                  minHeight: '32px',
                  fontSize: '14px'
                }}
                onMouseEnter={() => {
                  setHoveredCell({ rowIndex: index, columnKey: key });
                  setHoveredRowIndex(index);
                }}
                onMouseLeave={() => {
                  setHoveredCell(null);
                  setHoveredRowIndex(null);
                }}
              >
                {render ? render(row[key], row) : (
                  <span className="text-[#050E25] break-words whitespace-normal" style={{ fontSize: '14px' }}>
                    {String(row[key])}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </Resizable>
    );
  };

  // Render Actions column
  const renderActionsColumn = () => {
    const isHeaderHighlighted = hoveredCell?.columnKey === 'actions' && hoveredCell?.rowIndex !== undefined;
    const isDragHovered = isDragging && dragHoveredColumn === 'actions';
    
    return (
      <div className="flex flex-col h-full border-r border-[#D0D5E3]" style={{ width: '60px' }}>
        {/* Header */}
        <div 
          className={`sticky top-0 z-50 border-b border-[#D0D5E3] text-left font-semibold text-[#050E25] h-11 flex items-center justify-center transition-all ${
            isDragHovered ? 'bg-[#EBEEF7] shadow-[inset_0_0_0_1px_#3874ff]' :
            isHeaderHighlighted ? 'bg-[#CEF6F0] shadow-[inset_0_0_0_1px_#00B196]' : 'bg-[#EBEEF7]'
          }`}
          style={{
            padding: '8px',
            fontSize: '14px'
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setDragHoveredColumn('actions');
          }}
          onDragLeave={() => {
            setDragHoveredColumn(null);
          }}
          onDrop={(e) => {
            e.preventDefault();
            setDragHoveredColumn(null);
            setIsDragging(false);
            // Handle drop logic here
          }}
        >
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-[18px] h-[18px] p-0 hover:bg-gray-200 text-[13px]"
            onClick={() => setIsColumnCustomizationOpen(true)}
          >
            <TableEditIcon className="w-[18px] h-[18px] text-[#050E25] opacity-60" />
          </Button>
        </div>
        
        {/* Body */}
        {data.map((row, index) => {
          const isCellHovered = hoveredCell?.rowIndex === index && hoveredCell?.columnKey === 'actions';
          
          return (
            <div
              key={`actions-${row.id}`}
              data-row={index}
              className={`border-b border-[#D0D5E3] flex items-center justify-center transition-all cursor-pointer ${
                isCellHovered ? 'bg-white shadow-[inset_0_0_0_1px_#3874ff]' :
                hoveredRowIndex === index ? 'bg-[#CEF6F0] shadow-[inset_0_1px_0_0_#00B196,inset_0_-1px_0_0_#00B196]' : 'bg-white'
              }`}
              style={{
                padding: '8px',
                height: `var(--row-${index}-height, auto)`,
                minHeight: '32px',
                fontSize: '14px'
              }}
              onMouseEnter={() => {
                setHoveredCell({ rowIndex: index, columnKey: 'actions' });
                setHoveredRowIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredCell(null);
                setHoveredRowIndex(null);
              }}
            >
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-[18px] h-[18px] p-0 hover:bg-gray-100"
                  >
                    <MoreVertIcon className="w-[18px] h-[18px] text-[#050E25]" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-fit p-0 border-none shadow-lg" side="bottom">
                  <DropdownList onAction={(action) => handleRowAction(action, row.id)} />
                </PopoverContent>
              </Popover>
            </div>
          );
        })}
      </div>
    );
  };

  // Group columns by position (only visible columns)
  const leftColumns = visibleColumns.filter(config => config.fixed === 'left');
  const middleColumns = visibleColumns.filter(config => !config.fixed);
  const rightColumns = visibleColumns.filter(config => config.fixed === 'right');

  return (
    <div className="w-full h-full relative">
      <div ref={tableRef} className="w-full h-full bg-white rounded-[8px] shadow-lg overflow-hidden flex flex-col">
        
        {/* Table Container with Horizontal Scroll */}
        <div className="flex-1 overflow-x-auto overflow-y-auto">
          <div className="min-w-max flex flex-col h-full">
            
            {/* Table Content */}
            <div className="flex-1 flex relative">
              
              {/* FRONT LEFT SECTION: Checkbox + Sr. No. + Job ID - ALWAYS VISIBLE */}
              <div className="sticky left-0 z-50 bg-white shadow-[2px_0_6px_0_rgba(0,0,0,0.15)] flex">
                
                {/* Checkbox Column - FRONTMOST */}
                <div className="flex flex-col h-full border-r border-[#D0D5E3]" style={{ width: '50px' }}>
                  {/* Header */}
                  <div 
                    className={`sticky top-0 z-50 border-b border-[#D0D5E3] text-left font-semibold text-[#050E25] h-11 flex items-center transition-all ${
                      hoveredCell?.columnKey === 'checkbox' && hoveredCell?.rowIndex !== undefined ? 'bg-[#CEF6F0] shadow-[inset_0_0_0_1px_#00B196]' : 'bg-[#EBEEF7]'
                    }`}
                    style={{
                      padding: '8px',
                      fontSize: '14px'
                    }}
                  >
                    <div onClick={handleSelectAll} className="cursor-pointer flex items-center justify-center w-full h-full">
                      {renderCheckbox(selectedRows.size === data.length)}
                    </div>
                  </div>
                  
                  {/* Body */}
                  {data.map((row, index) => {
                    const isCellHovered = hoveredCell?.rowIndex === index && hoveredCell?.columnKey === 'checkbox';
                    
                    return (
                      <div
                        key={`checkbox-${row.id}`}
                        data-row={index}
                        className={`border-b border-[#D0D5E3] flex items-center transition-all cursor-pointer ${
                          isCellHovered ? 'bg-white shadow-[inset_0_0_0_1px_#3874ff]' :
                          hoveredRowIndex === index ? 'bg-[#CEF6F0] shadow-[inset_0_1px_0_0_#00B196,inset_0_-1px_0_0_#00B196]' : 'bg-white'
                        }`}
                        style={{
                          padding: '8px',
                          height: `var(--row-${index}-height, auto)`,
                          minHeight: '32px',
                          fontSize: '14px'
                        }}
                        onMouseEnter={() => {
                          setHoveredCell({ rowIndex: index, columnKey: 'checkbox' });
                          setHoveredRowIndex(index);
                        }}
                        onMouseLeave={() => {
                          setHoveredCell(null);
                          setHoveredRowIndex(null);
                        }}
                      >
                        <div onClick={() => handleRowSelect(row.id)} className="cursor-pointer flex items-center justify-center w-full h-full">
                          {renderCheckbox(selectedRows.has(row.id))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Left Fixed Columns */}
                {leftColumns.map(config => renderColumn(config, 'left'))}
              </div>

              {/* MIDDLE SCROLLABLE SECTION: All other data columns */}
              <div className="flex z-10">
                {middleColumns.map(config => renderColumn(config, 'middle'))}
              </div>

              {/* RIGHT FIXED SECTION: Status + Actions columns */}
              <div className="sticky right-0 z-40 bg-white shadow-[-2px_0_6px_0_rgba(0,0,0,0.15)] flex">
                {rightColumns.map(config => renderColumn(config, 'right'))}
                {/* Actions Column */}
                {renderActionsColumn()}
              </div>

            </div>

            {/* FIXED FOOTER ROW */}
            <div className="sticky bottom-0 z-50 bg-[#EBEEF7] border-t border-[#D0D5E3] shadow-[0_-2px_6px_0_rgba(0,0,0,0.15)] relative">
              <div className="flex relative">
                
                {/* Footer Left Section: Checkbox + Left Columns */}
                <div className="sticky left-0 z-50 bg-[#EBEEF7] shadow-[2px_0_6px_0_rgba(0,0,0,0.15)] flex">
                  
                  {/* Checkbox Footer */}
                  <div className="flex items-center border-r border-[#D0D5E3] bg-[#EBEEF7]" style={{ width: '50px', height: '32px' }}>
                  </div>

                  {/* Left Columns Footer */}
                  {leftColumns.map(config => (
                    <div 
                      key={`footer-${config.key}`}
                      className="flex items-center border-r border-[#D0D5E3] bg-[#EBEEF7]"
                      style={{ 
                        width: columnWidths[config.key], 
                        height: '32px',
                        paddingLeft: '8px',
                        paddingRight: '8px'
                      }}
                    >
                    </div>
                  ))}
                </div>

                {/* Footer Middle Section: Scrollable columns */}
                <div className="flex z-10">
                  {middleColumns.map(config => (
                    <div 
                      key={`footer-${config.key}`}
                      className="flex items-center border-r border-[#D0D5E3] bg-[#EBEEF7]"
                      style={{ 
                        width: columnWidths[config.key], 
                        height: '32px',
                        paddingLeft: '8px',
                        paddingRight: '8px'
                      }}
                    >
                    </div>
                  ))}
                </div>

                {/* Footer Right Section: Status + Actions */}
                <div className="sticky right-0 z-40 bg-[#EBEEF7] shadow-[-2px_0_6px_0_rgba(0,0,0,0.15)] flex">
                  
                  {/* Right Columns Footer */}
                  {rightColumns.map(config => (
                    <div 
                      key={`footer-${config.key}`}
                      className="flex items-center border-r border-[#D0D5E3] bg-[#EBEEF7]"
                      style={{ 
                        width: columnWidths[config.key], 
                        height: '32px',
                        paddingLeft: '8px',
                        paddingRight: '8px'
                      }}
                    >
                    </div>
                  ))}

                  {/* Actions Footer */}
                  <div 
                    className="flex items-center border-r border-[#D0D5E3] bg-[#EBEEF7]"
                    style={{ width: '60px', height: '32px' }}
                  >
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
        
      </div>
      
      {/* Bulk Actions Container - Fixed position, center of table, near footer */}
      {selectedRows.size > 0 && (
        <div 
          className="fixed z-[60] pointer-events-none"
          style={{
            left: '50%',
            bottom: '20px',
            transform: 'translateX(-50%)',
          }}
        >
          <div className="pointer-events-auto">
            <CustomFooterActionControls 
              onAction={handleBulkAction} 
              selectedCount={selectedRows.size}
            />
          </div>
        </div>
      )}

      {/* Column Customization Modal */}
      <ColumnCustomization
        isOpen={isColumnCustomizationOpen}
        onClose={() => setIsColumnCustomizationOpen(false)}
        columns={columnConfigs}
        onSave={handleColumnCustomizationSave}
      />
    </div>
  );
};

export default FixedColumnsTable;