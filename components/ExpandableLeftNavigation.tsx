import React, { useState } from 'react';
import svgPaths from '../imports/svg-p5rpmrct9o';
import xlsActiveIcon from 'figma:asset/98403181c2e075cac61c01060c4a7def411338b1.png';
import pdfInactiveIcon from 'figma:asset/fc1aef34e20afa4adc53177a0b00344e2307f634.png';

interface ExpandableLeftNavigationProps {
  onNavigationChange?: (nav: 'pdf' | 'xls') => void;
  activeNav?: 'pdf' | 'xls';
  isExpanded?: boolean;
  onToggleExpanded?: () => void;
}

// Active PDF icon (same as original but with active styling)
function PDFIconActive() {
  return (
    <div className="absolute inset-[4.167%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g id="Group 42070">
          <g filter="url(#filter0_i_437_110315)" id="Rectangle 1620">
            <path d={svgPaths.p37738600} fill="#F0F0F0" />
          </g>
          <foreignObject height="9" width="19" x="2" y="-1">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_0_437_110315_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            clipRule="evenodd"
            d={svgPaths.p6d97f00}
            data-figma-bg-blur-radius="4"
            fill="#CECACA"
            fillRule="evenodd"
            id="Line 141 (Stroke)"
          />
          <foreignObject height="9" width="17" x="2" y="1">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_1_437_110315_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            clipRule="evenodd"
            d={svgPaths.p20c2fc80}
            data-figma-bg-blur-radius="4"
            fill="#CECACA"
            fillRule="evenodd"
            id="Line 142 (Stroke)"
          />
          <foreignObject height="9" width="13" x="2" y="3">
            <div
              style={{
                backdropFilter: "blur(2px)",
                clipPath: "url(#bgblur_2_437_110315_clip_path)",
                height: "100%",
                width: "100%",
              }}
              xmlns="http://www.w3.org/1999/xhtml"
            />
          </foreignObject>
          <path
            clipRule="evenodd"
            d={svgPaths.p34922e00}
            data-figma-bg-blur-radius="4"
            fill="#CECACA"
            fillRule="evenodd"
            id="Line 143 (Stroke)"
          />
          <g filter="url(#filter4_i_437_110315)" id="Frame 1">
            <g clipPath="url(#clip3_437_110315)">
              <rect
                fill="url(#paint0_linear_437_110315)"
                height="8"
                rx="1"
                width="16"
                y="11"
              />
              <g filter="url(#filter5_d_437_110315)" id="PDF">
                <path d={svgPaths.p6b34580} fill="white" />
                <path d={svgPaths.pa9d0740} fill="white" />
                <path d={svgPaths.p3d6ed980} fill="white" />
              </g>
              <g id="PDF (Stroke)"></g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="22"
            id="filter0_i_437_110315"
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
              result="effect1_innerShadow_437_110315"
            />
          </filter>
          <clipPath
            id="bgblur_0_437_110315_clip_path"
            transform="translate(-2 1)"
          >
            <path clipRule="evenodd" d={svgPaths.p6d97f00} fillRule="evenodd" />
          </clipPath>
          <clipPath
            id="bgblur_1_437_110315_clip_path"
            transform="translate(-2 -1)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p20c2fc80}
              fillRule="evenodd"
            />
          </clipPath>
          <clipPath
            id="bgblur_2_437_110315_clip_path"
            transform="translate(-2 -3)"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p34922e00}
              fillRule="evenodd"
            />
          </clipPath>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="16"
            id="filter4_i_437_110315"
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
              result="effect1_innerShadow_437_110315"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="8.5"
            id="filter5_d_437_110315"
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
              result="effect1_dropShadow_437_110315"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_437_110315"
              mode="normal"
              result="shape"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_437_110315"
            x1="8.09961"
            x2="8.09961"
            y1="9.66667"
            y2="16.3333"
          >
            <stop offset="0.0844957" stopColor="#F2A097" />
            <stop offset="1" stopColor="#FF513E" />
          </linearGradient>
          <clipPath id="clip3_437_110315">
            <rect fill="white" height="8" rx="1" width="16" y="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// Inactive PDF icon (now uses the provided image)
function PDFIconInactive() {
  return (
    <div className="relative size-full flex items-center justify-center">
      <img 
        src={pdfInactiveIcon} 
        alt="PDF Inactive" 
        className="size-full object-contain"
      />
    </div>
  );
}

// Active XLS icon (now uses the provided image)
function XLSIconActive() {
  return (
    <div className="relative size-full flex items-center justify-center">
      <img 
        src={xlsActiveIcon} 
        alt="XLS Active" 
        className="size-full object-contain"
      />
    </div>
  );
}

// Inactive XLS icon (original inactive design)
function XLSIconInactive() {
  return (
    <div className="absolute bottom-[1.21%] left-[4.167%] right-[4.167%] top-[4.167%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 23"
      >
        <g id="Group 42071">
          <g filter="url(#filter0_i_481_7890)" id="Rectangle 1620">
            <path d={svgPaths.p2deee900} fill="#586A9C" />
          </g>
          <path
            d="M6.51462 3.35988H8.77048"
            id="Line 141"
            stroke="#8295CA"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <path
            d="M6.51462 5.9615H8.77048"
            id="Line 148"
            stroke="#8295CA"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <path
            d="M6.51462 8.5156H8.77048"
            id="Line 151"
            stroke="#8295CA"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <path
            d="M11.6458 3.35988H13.9016"
            id="Line 144"
            stroke="#8295CA"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <path
            d="M11.6458 5.9615H13.9016"
            id="Line 149"
            stroke="#8295CA"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <path
            d="M11.6458 8.5156H13.9016"
            id="Line 152"
            stroke="#8295CA"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <path
            d="M16.7772 3.35988H19.0331"
            id="Line 147"
            stroke="#8295CA"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <path
            d="M16.7772 5.9615H19.0331"
            id="Line 150"
            stroke="#8295CA"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <path
            d="M16.7772 8.5156H19.0331"
            id="Line 153"
            stroke="#8295CA"
            strokeLinecap="round"
            strokeWidth="0.9"
          />
          <g id="Frame 1">
            <g clipPath="url(#clip0_481_7890)">
              <path
                d={svgPaths.p27dc0200}
                fill="url(#paint0_linear_481_7890)"
                fillOpacity="0.53"
              />
              <g filter="url(#filter11_d_481_7890)" id="XLS">
                <path d={svgPaths.p156c9100} fill="white" />
                <path d={svgPaths.p325fad00} fill="white" />
                <path d={svgPaths.p31daf000} fill="white" />
                <path
                  d={svgPaths.p124a3f00}
                  stroke="white"
                  strokeWidth="0.1"
                />
              </g>
            </g>
            <path
              d={svgPaths.p65d1f00}
              stroke="url(#paint1_linear_481_7890)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0.2"
            />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="24.7097"
            id="filter0_i_481_7890"
            width="18.4516"
            x="3.54839"
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
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0"
            />
            <feBlend
              in2="shape"
              mode="normal"
              result="effect1_innerShadow_481_7890"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="8.45807"
            id="filter11_d_481_7890"
            width="15.645"
            x="0.648534"
            y="11.3839"
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
              result="effect1_dropShadow_481_7890"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_481_7890"
              mode="normal"
              result="shape"
            />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_481_7890"
            x1="1.13548"
            x2="9.2614"
            y1="13.788"
            y2="25.7008"
          >
            <stop stopColor="#3B4C7A" />
            <stop offset="1" stopColor="#BAC8E9" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_481_7890"
            x1="2.23507"
            x2="10.9388"
            y1="7.80645"
            y2="20.1579"
          >
            <stop stopColor="#B8BFCF" />
            <stop offset="1" stopColor="#9EACD1" />
          </linearGradient>
          <clipPath id="clip0_481_7890">
            <path d={svgPaths.p27dc0200} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FilesIcon({ isActive }: { isActive: boolean }) {
  return (
    <div
      className="overflow-clip relative shrink-0 size-6"
      data-name="Files icon"
    >
      {isActive ? <PDFIconActive /> : <PDFIconInactive />}
    </div>
  );
}

function XlsIcon({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative shrink-0 size-6" data-name="XLS Icon">
      {isActive ? <XLSIconActive /> : <XLSIconInactive />}
    </div>
  );
}

function PDFFilesItem({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      className={`relative rounded shrink-0 w-full cursor-pointer transition-all duration-200 ${
        isActive ? 'bg-transparent' : 'hover:bg-[#2a3441]'
      }`} 
      data-name="PDF Files"
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
      )}
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative w-full">
          <FilesIcon isActive={isActive} />
          <div className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap ${
            isActive ? 'text-[#ffffff]' : 'text-[#cdcfd3]'
          }`}>
            <p className="block leading-[18px] whitespace-pre">PDF Files</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function XLSFilesItem({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      className={`relative rounded shrink-0 w-full cursor-pointer transition-all duration-200 ${
        isActive ? 'bg-transparent' : 'hover:bg-[#2a3441]'
      }`} 
      data-name="XLS Files"
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
      )}
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative w-full">
          <XlsIcon isActive={isActive} />
          <div className={`font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap ${
            isActive ? 'text-[#ffffff]' : 'text-[#cdcfd3]'
          }`}>
            <p className="block leading-[18px] whitespace-pre">Data capture files</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpandIcon({ isExpanded, onClick }: { isExpanded: boolean; onClick: () => void }) {
  // In collapsed state: center the icon and reverse it (rotate 180)
  // In expanded state: position on right and show normal direction
  const positionClasses = isExpanded 
    ? 'right-1.5' 
    : 'left-1/2 -translate-x-1/2';
  
  const rotationClasses = isExpanded 
    ? '' 
    : 'rotate-180';

  return (
    <div
      className={`absolute size-[18px] top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-80 transition-all duration-200 z-10 ${positionClasses}`}
      data-name="Icon"
      onClick={onClick}
    >
      <svg
        className={`block size-full transition-transform duration-200 ${rotationClasses}`}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="double_arrow">
          <mask
            height="18"
            id="mask0_481_8045"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="18"
            x="0"
            y="0"
          >
            <rect
              fill="#D9D9D9"
              height="18"
              id="Bounding box"
              width="18"
            />
          </mask>
          <g mask="url(#mask0_481_8045)">
            <path
              d={svgPaths.p1cebca00}
              fill="#9497A1"
              id="double_arrow_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function ExpandableLeftNavigation({
  onNavigationChange,
  activeNav = 'pdf',
  isExpanded: controlledExpanded,
  onToggleExpanded
}: ExpandableLeftNavigationProps) {
  const [internalExpanded, setInternalExpanded] = useState(false);
  
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;
  
  const handleToggleExpanded = () => {
    if (onToggleExpanded) {
      onToggleExpanded();
    } else {
      setInternalExpanded(!internalExpanded);
    }
  };

  const handleNavigationChange = (nav: 'pdf' | 'xls') => {
    if (onNavigationChange) {
      onNavigationChange(nav);
    }
  };

  if (!isExpanded) {
    // Collapsed state - show minimal version
    return (
      <div
        className="absolute bg-[#242c40] w-[76px] top-12 bottom-0 left-0"
        data-name="Left Navigation Collapsed"
      >
        <div className="relative size-full">
          {/* Header */}
          <div className="absolute h-12 left-2 right-2 top-0" data-name="Heading">
            <div className="relative size-full">
              <ExpandIcon isExpanded={isExpanded} onClick={handleToggleExpanded} />
            </div>
            <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          </div>
          
          {/* Navigation Icons Only */}
          <div className="absolute top-14 left-2 right-2 bottom-2 flex flex-col gap-1 items-center justify-start overflow-x-clip overflow-y-auto py-3">
            <div 
              className={`relative w-[52px] h-[40px] cursor-pointer transition-all duration-200 ${
                activeNav === 'pdf' ? 'border border-[#3874ff] shadow-[0px_0px_11px_1px_#272d3f] rounded' : 'hover:bg-[#2a3441] rounded'
              }`}
              onClick={() => handleNavigationChange('pdf')}
            >
              <div className="flex items-center justify-center relative size-full">
                <div className="p-2">
                  <FilesIcon isActive={activeNav === 'pdf'} />
                </div>
              </div>
            </div>
            
            <div 
              className={`relative w-[52px] h-[40px] cursor-pointer transition-all duration-200 ${
                activeNav === 'xls' ? 'border border-[#3874ff] shadow-[0px_0px_11px_1px_#272d3f] rounded' : 'hover:bg-[#2a3441] rounded'
              }`}
              onClick={() => handleNavigationChange('xls')}
            >
              <div className="flex items-center justify-center relative size-full">
                <div className="p-2">
                  <XlsIcon isActive={activeNav === 'xls'} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      </div>
    );
  }

  // Expanded state - show full navigation
  return (
    <div
      className="absolute bg-[#242c40] w-[240px] top-12 bottom-0 left-0"
      data-name="Left Navigation Expanded"
    >
      <div className="relative size-full">
        {/* Navigation List */}
        <div className="absolute bg-[#242c40] bottom-14 box-border content-stretch flex flex-col gap-1 items-start justify-start left-2 overflow-x-clip overflow-y-auto px-0 py-3 right-2 top-12">
          <PDFFilesItem isActive={activeNav === 'pdf'} onClick={() => handleNavigationChange('pdf')} />
          <XLSFilesItem isActive={activeNav === 'xls'} onClick={() => handleNavigationChange('xls')} />
        </div>
        
        {/* Header */}
        <div className="absolute h-12 left-2 right-2 top-0" data-name="Heading">
          <div className="relative size-full">
            <div
              className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-2 not-italic text-[#ffffff] text-[16px] text-left text-nowrap"
              style={{ top: "calc(50% - 9px)" }}
            >
              <p className="block leading-[18px] whitespace-pre">Files</p>
            </div>
            <ExpandIcon isExpanded={isExpanded} onClick={handleToggleExpanded} />
          </div>
          <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        </div>
      </div>
      <div className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}