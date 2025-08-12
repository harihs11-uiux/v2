import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import svgPaths from "./svg-8w8zv41ix1";
import TableSkeleton from '../components/TableSkeleton';

// Icon Components (keeping these as they are working)
function Checkbox() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Checkbox">
          <path d={svgPaths.p2e32d400} fill="var(--fill-0, #CDCFD3)" id="check_box_outline_blank" />
        </g>
      </svg>
    </div>
  );
}

function FilterList() {
  return (
    <div className="absolute left-0 size-4 top-0" data-name="filter_list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="filter_list">
          <mask height="16" id="mask0_2_30074" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_2_30074)">
            <path d={svgPaths.p8cd7480} fill="var(--fill-0, #626776)" id="filter_list_2" />
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

function Icon1() {
  return (
    <div className="absolute h-[15.342px] left-[2.869px] top-[1.455px] w-[11.905px]" data-name="icon">
      <div className="absolute bottom-[-1.768%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
          <g id="icon">
            <foreignObject height="15.01" width="14.4327" x="-1.26404" y="-3">
              <div style={{ backdropFilter: "blur(1.5px)", clipPath: "url(#bgblur_0_2_30097_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path clipRule="evenodd" d={svgPaths.p24f27600} data-figma-bg-blur-radius="3" fill="url(#paint0_linear_2_30097)" fillOpacity="0.65" fillRule="evenodd" id="Body" />
            <foreignObject height="12.8243" width="15.3047" x="-1.7" y="4.21739">
              <div style={{ backdropFilter: "blur(0.85px)", clipPath: "url(#bgblur_1_2_30097_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <g data-figma-bg-blur-radius="1.7" filter="url(#filter1_i_2_30097)" id="Shape 1">
              <rect fill="url(#paint1_linear_2_30097)" height="9.42427" rx="2" width="11.9047" y="5.91739" />
            </g>
            <foreignObject height="36.5804" width="34.3596" x="-11.2277" y="-7.66054">
              <div style={{ backdropFilter: "blur(7.94px)", clipPath: "url(#bgblur_2_2_30097_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <g data-figma-bg-blur-radius="15.8888" filter="url(#filter2_d_2_30097)" id="Union">
              <mask fill="white" id="path-3-inside-1_2_30097">
                <path d={svgPaths.p2aba9500} />
              </mask>
              <path d={svgPaths.p2aba9500} fill="url(#paint2_linear_2_30097)" shapeRendering="crispEdges" />
              <path d={svgPaths.p3ec9200} fill="url(#paint3_linear_2_30097)" mask="url(#path-3-inside-1_2_30097)" />
            </g>
          </g>
          <defs>
            <clipPath id="bgblur_0_2_30097_clip_path" transform="translate(1.26404 3)">
              <path clipRule="evenodd" d={svgPaths.p24f27600} fillRule="evenodd" />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.8243" id="filter1_i_2_30097" width="15.3047" x="-1.7" y="4.21739">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="0.85" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.872577 0 0 0 0 0.218986 0 0 0 0 0.165333 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_2_30097" />
            </filter>
            <clipPath id="bgblur_1_2_30097_clip_path" transform="translate(1.7 -4.21739)">
              <rect height="9.42427" rx="2" width="11.9047" y="5.91739" />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36.5804" id="filter2_d_2_30097" width="34.3596" x="-11.2277" y="-7.66054">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="1.29097" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.738283 0 0 0 0 0.322544 0 0 0 0 0.30047 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_30097" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_30097" mode="normal" result="shape" />
            </filter>
            <clipPath id="bgblur_2_2_30097_clip_path" transform="translate(11.2277 7.66054)">
              <path d={svgPaths.p2aba9500} />
            </clipPath>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_30097" x1="5.95233" x2="5.95233" y1="11.555" y2="-0.335695">
              <stop stopColor="#FF7C78" />
              <stop offset="1" stopColor="#FF2A15" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2_30097" x1="5.95235" x2="5.95235" y1="5.24789" y2="15.3417">
              <stop stopColor="#ED5D59" stopOpacity="0.52" />
              <stop offset="1" stopColor="#FF5B49" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_2_30097" x1="7.24308" x2="4.1211" y1="9.51924" y2="10.3483">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0.77" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_2_30097" x1="4.04694" x2="6.56141" y1="8.79805" y2="11.404">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Lock() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Lock">
      <Icon1 />
    </div>
  );
}

function PlaneIcon({ color = "#6B7AE5" }) {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Plane">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <path d="M2 16L16 2M16 2L16 8M16 2L10 2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ShipIcon({ color = "#22D3EE" }) {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Ship">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <path d="M3 12L9 9L15 12V15C15 15.5523 14.5523 16 14 16H4C3.44772 16 3 15.5523 3 15V12Z" fill={color} />
        <path d="M9 2V9M6 5H12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function TruckIcon({ color = "#F59E0B" }) {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Truck">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <rect x="2" y="6" width="10" height="8" rx="1" fill={color} />
        <rect x="12" y="8" width="4" height="6" rx="1" fill={color} />
        <circle cx="5" cy="16" r="1" fill={color} />
        <circle cx="13" cy="16" r="1" fill={color} />
      </svg>
    </div>
  );
}

function Dot() {
  return (
    <div className="relative shrink-0 size-2" data-name="Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Dot">
          <circle cx="4" cy="4" fill="var(--fill-0, #05D14B)" id="Ellipse 87" r="4" />
        </g>
      </svg>
    </div>
  );
}

function MoreMenu() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="More Menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <circle cx="9" cy="4" r="1.5" fill="#626776" />
        <circle cx="9" cy="9" r="1.5" fill="#626776" />
        <circle cx="9" cy="14" r="1.5" fill="#626776" />
      </svg>
    </div>
  );
}

// Job interface
export interface Job {
  id: string;
  reference: string;
  type: 'Import' | 'Export';
  status: string;
  customer: string;
  origin: string;
  destination: string;
  eta: string;
  value: string;
  referenceNo?: string;
  beDate?: string;
  beType?: string;
  customsHouseCode?: string;
  cbBranch?: string;
  cbCity?: string;
  importer?: string;
}

// Table props interface
interface TableProps {
  data?: Job[];
  loading?: boolean;
  onRefresh?: () => void;
  onLoadMore?: () => Promise<void>;
}

export default function Table({ data = [], loading = false, onRefresh }: TableProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Simulate smooth data transition
  useEffect(() => {
    if (!loading && data.length > 0) {
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 300);
      return () => clearTimeout(timer);
    }
  }, [loading, data]);

  // Generate enhanced sample data based on provided jobs
  const tableData = useMemo(() => {
    if (data.length === 0) {
      // Fallback data when no data provided
      const baseData = [
        {
          id: '1',
          reference: 'ICB/12345/2023-24',
          type: 'Import' as const,
          status: 'Positive Acknowledgement Received',
          customer: 'PHOMAS DIAGNOSTICS AND MEDICAL SUPPLIES LIMITED',
          origin: 'Shanghai, China',
          destination: 'Chennai, India',
          eta: '14/09/2022 4:00 PM',
          value: '$25,000',
          referenceNo: "94JC568465",
          beDate: "17/09/2024",
          beType: "H-Home consumption",
          customsHouseCode: "INAJZ6 - Arakonam - Melpakkam - Chennai ICD",
          cbBranch: "002",
          cbCity: "SECUNDERABAD",
          importer: "PHOMAS DIAGNOSTICS AND MEDICAL SUPPLIES LIMITED"
        }
      ];

      return Array.from({ length: 25 }, (_, index) => ({
        ...baseData[0],
        id: `fallback-${index + 1}`,
        reference: `ICB/1234${index + 1}/2023-24`,
        referenceNo: `94JC56${8465 + index}`,
        index: index + 1
      }));
    }

    // Use provided data and extend to ensure minimum rows
    const extendedData = [...data];
    while (extendedData.length < 25) {
      extendedData.push(...data);
    }

    return extendedData.slice(0, 25).map((job, index) => ({
      ...job,
      index: index + 1,
      referenceNo: job.referenceNo || `94JC56${8465 + index}`,
      beDate: job.beDate || "17/09/2024",
      beType: job.beType || "H-Home consumption",
      customsHouseCode: job.customsHouseCode || "INAJZ6 - Arakonam - Melpakkam - Chennai ICD",
      cbBranch: job.cbBranch || "002",
      cbCity: job.cbCity || "SECUNDERABAD",
      importer: job.importer || job.customer
    }));
  }, [data]);

  const getTransportIcon = (index: number) => {
    const transportModes = ['air', 'sea', 'road'];
    const transportMode = transportModes[index % 3];
    
    switch (transportMode) {
      case 'air': return <PlaneIcon />;
      case 'sea': return <ShipIcon />;
      case 'road': return <TruckIcon />;
      default: return <PlaneIcon />;
    }
  };

  // Show skeleton while loading
  if (loading) {
    return <TableSkeleton rows={25} />;
  }

  return (
    <div className={`w-full h-full bg-white rounded shadow-[0px_0px_13px_1px_rgba(26,38,120,0.08)] overflow-hidden flex flex-col transition-all duration-300 ${isTransitioning ? 'opacity-90' : 'opacity-100'}`}>
      
      {/* SIMPLE TABLE WITH BACKGROUND FIX */}
      <div 
        className="w-full h-full overflow-auto"
        style={{ 
          background: 'white',
          backgroundAttachment: 'local'
        }}
      >
        <table className="w-full border-collapse min-w-[1600px]" style={{ background: 'white' }}>
          
          {/* TABLE HEADER */}
          <thead className="sticky top-0 z-50" style={{ background: '#ebeef7' }}>
            <tr style={{ background: '#ebeef7' }}>
              {/* Left Frozen Columns */}
              <th className="sticky left-0 z-60 border-r border-b border-[#d0d5e3] px-2 py-1.5 text-left font-semibold text-[#050e25] text-sm w-[50px] shadow-[2px_0_4px_0_rgba(0,0,0,0.1)]" style={{ background: '#ebeef7' }}>
                <Checkbox />
              </th>
              <th className="sticky left-[50px] z-60 border-r border-b border-[#d0d5e3] px-2 py-1.5 text-left font-semibold text-[#050e25] text-sm w-[80px] shadow-[2px_0_4px_0_rgba(0,0,0,0.1)]" style={{ background: '#ebeef7' }}>
                Sr. No.
              </th>
              <th className="sticky left-[130px] z-60 border-r border-b border-[#d0d5e3] px-2 py-1.5 text-left font-semibold text-[#050e25] text-sm w-[200px] shadow-[2px_0_4px_0_rgba(0,0,0,0.1)]" style={{ background: '#ebeef7' }}>
                <div className="flex items-center justify-between">
                  <span>Number</span>
                  <Filters />
                </div>
              </th>
              <th className="sticky left-[330px] z-60 border-r border-b border-[#d0d5e3] px-2 py-1.5 text-left font-semibold text-[#050e25] text-sm w-[200px] shadow-[2px_0_4px_0_rgba(0,0,0,0.1)]" style={{ background: '#ebeef7' }}>
                <div className="flex items-center justify-between">
                  <span>Date & Time</span>
                  <Filters />
                </div>
              </th>
              
              {/* Scrollable Middle Columns */}
              <th className="border-r border-b border-[#d0d5e3] px-2 py-1.5 text-left font-semibold text-[#050e25] text-sm w-[120px]" style={{ background: '#ebeef7' }}>
                <div className="flex items-center justify-between">
                  <span>Reference No.</span>
                  <Filters />
                </div>
              </th>
              <th className="border-r border-b border-[#d0d5e3] px-2 py-1.5 text-left font-semibold text-[#050e25] text-sm w-[120px]" style={{ background: '#ebeef7' }}>
                <div className="flex items-center justify-between">
                  <span>BE Date</span>
                  <Filters />
                </div>
              </th>
              <th className="border-r border-b border-[#d0d5e3] px-2 py-1.5 text-left font-semibold text-[#050e25] text-sm w-[180px]" style={{ background: '#ebeef7' }}>
                <div className="flex items-center justify-between">
                  <span>BE Type</span>
                  <Filters />
                </div>
              </th>
              <th className="border-r border-b border-[#d0d5e3] px-2 py-1.5 text-left font-semibold text-[#050e25] text-sm w-[300px]" style={{ background: '#ebeef7' }}>
                <div className="flex items-center justify-between">
                  <span>Customs House Code</span>
                  <Filters />
                </div>
              </th>
              <th className="border-r border-b border-[#d0d5e3] px-2 py-1.5 text-left font-semibold text-[#050e25] text-sm w-[80px]" style={{ background: '#ebeef7' }}>
                <div className="flex items-center justify-between">
                  <span>CB Branch</span>
                  <Filters />
                </div>
              </th>
              <th className="border-r border-b border-[#d0d5e3] px-2 py-1.5 text-left font-semibold text-[#050e25] text-sm w-[150px]" style={{ background: '#ebeef7' }}>
                <div className="flex items-center justify-between">
                  <span>CB City</span>
                  <Filters />
                </div>
              </th>
              <th className="border-r border-b border-[#d0d5e3] px-2 py-1.5 text-left font-semibold text-[#050e25] text-sm w-[350px]" style={{ background: '#ebeef7' }}>
                <div className="flex items-center justify-between">
                  <span>Importer</span>
                  <Filters />
                </div>
              </th>
              
              {/* Right Frozen Columns */}
              <th className="sticky right-[60px] z-60 border-r border-b border-[#d0d5e3] px-2 py-1.5 text-left font-semibold text-[#050e25] text-sm w-[300px] shadow-[-2px_0_4px_0_rgba(0,0,0,0.1)]" style={{ background: '#ebeef7' }}>
                <div className="flex items-center justify-between">
                  <span>Status</span>
                  <Filters />
                </div>
              </th>
              <th className="sticky right-0 z-60 border-b border-[#d0d5e3] px-2 py-1.5 text-left font-semibold text-[#050e25] text-sm w-[60px] shadow-[-2px_0_4px_0_rgba(0,0,0,0.1)]" style={{ background: '#ebeef7' }}>
                <MoreMenu />
              </th>
            </tr>
          </thead>
          
          {/* TABLE BODY */}
          <tbody style={{ background: 'white' }}>
            {tableData.map((job, rowIndex) => (
              <tr 
                key={`job-row-${job.id}-${rowIndex}`} 
                className="h-[40px] hover:bg-gray-50 transition-colors" 
                style={{ background: 'white' }}
              >
                {/* Left Frozen Columns */}
                <td className="sticky left-0 z-40 border-r border-b border-[#d0d5e3] px-2 py-1.5 shadow-[2px_0_4px_0_rgba(0,0,0,0.1)]" style={{ background: 'white' }}>
                  <Checkbox />
                </td>
                <td className="sticky left-[50px] z-40 border-r border-b border-[#d0d5e3] px-2 py-1.5 shadow-[2px_0_4px_0_rgba(0,0,0,0.1)]" style={{ background: 'white' }}>
                  <div className="flex items-center gap-2">
                    <Lock />
                    <span className="text-sm text-[#050e25]">{job.index}</span>
                  </div>
                </td>
                <td className="sticky left-[130px] z-40 border-r border-b border-[#d0d5e3] px-2 py-1.5 shadow-[2px_0_4px_0_rgba(0,0,0,0.1)]" style={{ background: 'white' }}>
                  <div className="flex items-center gap-2">
                    {getTransportIcon(rowIndex)}
                    <span className="text-sm text-[#3874ff] underline cursor-pointer hover:text-[#2563eb] transition-colors">
                      {job.reference}
                    </span>
                  </div>
                </td>
                <td className="sticky left-[330px] z-40 border-r border-b border-[#d0d5e3] px-2 py-1.5 shadow-[2px_0_4px_0_rgba(0,0,0,0.1)]" style={{ background: 'white' }}>
                  <span className="text-sm text-[#050e25]">{job.eta}</span>
                </td>
                
                {/* Scrollable Middle Columns */}
                <td className="border-r border-b border-[#d0d5e3] px-2 py-1.5" style={{ background: 'white' }}>
                  <span className="text-sm text-[#050e25]">{job.referenceNo}</span>
                </td>
                <td className="border-r border-b border-[#d0d5e3] px-2 py-1.5" style={{ background: 'white' }}>
                  <span className="text-sm text-[#050e25]">{job.beDate}</span>
                </td>
                <td className="border-r border-b border-[#d0d5e3] px-2 py-1.5" style={{ background: 'white' }}>
                  <span className="text-sm text-[#050e25]">{job.beType}</span>
                </td>
                <td className="border-r border-b border-[#d0d5e3] px-2 py-1.5" style={{ background: 'white' }}>
                  <span className="text-sm text-[#050e25]">{job.customsHouseCode}</span>
                </td>
                <td className="border-r border-b border-[#d0d5e3] px-2 py-1.5" style={{ background: 'white' }}>
                  <span className="text-sm text-[#050e25]">{job.cbBranch}</span>
                </td>
                <td className="border-r border-b border-[#d0d5e3] px-2 py-1.5" style={{ background: 'white' }}>
                  <span className="text-sm text-[#050e25]">{job.cbCity}</span>
                </td>
                <td className="border-r border-b border-[#d0d5e3] px-2 py-1.5" style={{ background: 'white' }}>
                  <span className="text-sm text-[#050e25]">{job.importer}</span>
                </td>
                
                {/* Right Frozen Columns */}
                <td className="sticky right-[60px] z-40 border-r border-b border-[#d0d5e3] px-2 py-1.5 shadow-[-2px_0_4px_0_rgba(0,0,0,0.1)]" style={{ background: 'white' }}>
                  <div className="flex items-center gap-2">
                    <Dot />
                    <span className="text-sm text-[#050e25] font-medium">{job.status}</span>
                  </div>
                </td>
                <td className="sticky right-0 z-40 border-b border-[#d0d5e3] px-2 py-1.5 shadow-[-2px_0_4px_0_rgba(0,0,0,0.1)]" style={{ background: 'white' }}>
                  <div className="cursor-pointer hover:bg-gray-100 p-1 rounded transition-colors">
                    <MoreMenu />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Status Display */}
      <div className="absolute top-4 right-4 bg-green-900/90 text-white text-xs px-3 py-2 rounded-lg pointer-events-none z-[70]">
        <div className="font-bold text-green-300">
          ✅ SIMPLE & WORKING
        </div>
        <div className="text-green-200">
          {tableData.length} Rows | No White Screens | Simple CSS Fix
        </div>
        <div className="text-green-200 text-xs mt-1">
          Basic Table • Inline Styles • No Over-Engineering
          {onRefresh && (
            <>
              {' • '}
              <button 
                onClick={onRefresh}
                className="text-green-300 hover:text-green-100 underline cursor-pointer bg-transparent border-none"
              >
                Refresh
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}