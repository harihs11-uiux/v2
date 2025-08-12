import React, { useState } from 'react';
import svgPaths from '../imports/svg-9dz9e1dmix';
import createJobSvgPaths from '../imports/svg-26kguuw50j';
import timelineSvgPaths from '../imports/svg-r6a7q846ed';

interface ExpandableJobNavigationProps {
  activeSection?: string;
  onSectionClick?: (section: string) => void;
  onCreateJob?: () => void;
}

// Create Job Button Components
function CreateJobIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon Skeleton 10">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="add_circle">
          <mask
            height="18"
            id="mask0_823_3203"
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
          <g mask="url(#mask0_823_3203)">
            <path
              d={createJobSvgPaths.p3865e500}
              fill="var(--fill-0, white)"
              id="add_circle_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CreateJobButton({ onClick, isCollapsed = false }: { onClick?: () => void; isCollapsed?: boolean }) {
  return (
    <div
      className={`bg-[#3874ff] relative rounded shrink-0 cursor-pointer h-[34px] ${
        isCollapsed ? 'w-[50px]' : 'w-full'
      }`}
      data-name="Create Job Button"
      onClick={onClick}
    >
      <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-2 relative shrink-0 h-full">
        <CreateJobIcon />
        {!isCollapsed && (
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#ffffff] text-[14px] ml-1">
            Generate New Version
          </span>
        )}
      </div>
    </div>
  );
}

// Version Panel Components
function Indcator() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="indcator">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        role="presentation"
        viewBox="0 0 14 14"
      >
        <g id="indcator">
          <circle
            cx="7"
            cy="7"
            fill="var(--fill-0, #F44545)"
            fillOpacity="0.1"
            id="Ellipse 230"
            r="5.25"
          />
          <circle
            cx="7"
            cy="7"
            fill="var(--fill-0, #F44545)"
            id="Ellipse 229"
            r="2.625"
          />
        </g>
      </svg>
    </div>
  );
}

function ToggleIcon({ isCollapsed, onClick }: { isCollapsed: boolean; onClick: () => void }) {
  return (
    <div 
      className="relative shrink-0 size-[18px] cursor-pointer" 
      data-name="Icon"
      onClick={onClick}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="double_arrow">
          <mask
            height="18"
            id="mask0_594_128875"
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
          <g mask="url(#mask0_594_128875)">
            <path
              d={isCollapsed ? svgPaths.p2c139180 : svgPaths.p1cebca00}
              fill="var(--fill-0, #CDCFD3)"
              id="double_arrow_2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Timeline Item Icons
function JobDetailsIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Checklist Icons Imports">
      <div className="absolute h-4 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px]" data-name="Shapes">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
          <g id="Shapes">
            <path d={timelineSvgPaths.p39a43b00} fill="url(#paint0_linear_690_29746)" id="Ellipse 2840" />
            <g id="Rectangle 274140">
              <g filter="url(#filter0_i_690_29746)">
                <path d={timelineSvgPaths.pc8cec00} fill="url(#paint1_linear_690_29746)" />
              </g>
              <path d={timelineSvgPaths.p203ac500} stroke="url(#paint2_linear_690_29746)" strokeWidth="0.2" />
            </g>
            <path d={timelineSvgPaths.p2fe6a600} fill="url(#paint3_linear_690_29746)" fillOpacity="0.34" id="Rectangle 274141" stroke="url(#paint4_linear_690_29746)" strokeWidth="0.2" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.3984" id="filter0_i_690_29746" width="18" x="0" y="4.60156">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.444444 0 0 0 0 0 0 0 0 1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_690_29746" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_690_29746" x1="8.86855" x2="9.23037" y1="-6.1943e-09" y2="11.6804">
              <stop stopColor="#FF7200" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_690_29746" x1="9" x2="10.6492" y1="1.73038" y2="25.0395">
              <stop stopColor="#FDA762" />
              <stop offset="0.371712" stopColor="#FF9846" />
              <stop offset="0.667431" stopColor="#FF7100" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_690_29746" x1="9" x2="9" y1="5" y2="16">
              <stop stopColor="#FFBD87" />
              <stop offset="1" stopColor="#D37222" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_690_29746" x1="9" x2="9.02687" y1="2" y2="9.99991">
              <stop stopColor="#FFFDFC" stopOpacity="0.31" />
              <stop offset="0.585856" stopColor="#FFFDFC" stopOpacity="0.28" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_690_29746" x1="7.65" x2="7.29872" y1="19.0145" y2="0.673446">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IGMDetailsIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Checklist Icons Imports">
      <div className="absolute inset-[18.75%_12.5%]">
        <div className="absolute bottom-[-0.67%] left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
            <g id="Group 42020">
              <g filter="url(#filter0_i_823_5639)" id="Rectangle 274363">
                <path d={timelineSvgPaths.p2a4d6440} fill="url(#paint0_linear_823_5639)" />
              </g>
              <g filter="url(#filter1_i_823_5639)" id="Rectangle 274362">
                <path d={timelineSvgPaths.p3bfb6880} fill="url(#paint1_linear_823_5639)" />
              </g>
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.87841" id="filter0_i_823_5639" width="6.96567" x="11.0345" y="2.43037">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="0.45" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_823_5639" />
              </filter>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10.8438" id="filter1_i_823_5639" width="10.5586" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="0.45" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_823_5639" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_823_5639" x1="14.5174" x2="14.5174" y1="2.43037" y2="11.3088">
                <stop stopColor="#4F608F" />
                <stop offset="1" stopColor="#7488BB" />
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_823_5639" x1="5.27931" x2="5.27931" y1="0" y2="10.8438">
                <stop stopColor="#586A9C" />
                <stop offset="1" stopColor="#7487BB" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

// Expand Icon Component
function ExpandIcon({ isExpanded }: { isExpanded: boolean }) {
  return (
    <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}>
      <svg width="6" height="10" fill="none" viewBox="0 0 6 10">
        <path 
          d="M1 1L5 5L1 9" 
          stroke="#CDCFD3" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// Mock Job Details Sub-sections
function JobDetailsSubSections() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 p-2 rounded text-[#ffffff] text-[12px] font-medium hover:bg-[#32394c] cursor-pointer">
        <div className="w-4 h-4 bg-[#FF7200] rounded-sm opacity-60"></div>
        <span>HSS</span>
      </div>
      <div className="flex items-center gap-2 p-2 rounded text-[#ffffff] text-[12px] font-medium hover:bg-[#32394c] cursor-pointer">
        <div className="w-4 h-4 bg-[#FF7200] rounded-sm opacity-60"></div>
        <span>Exchange Rate</span>
      </div>
      <div className="flex items-center gap-2 p-2 rounded text-[#ffffff] text-[12px] font-medium hover:bg-[#32394c] cursor-pointer">
        <div className="w-4 h-4 bg-[#FF7200] rounded-sm opacity-60"></div>
        <span>Bond Details</span>
      </div>
      <div className="flex items-center gap-2 p-2 rounded text-[#ffffff] text-[12px] font-medium hover:bg-[#32394c] cursor-pointer">
        <div className="w-4 h-4 bg-[#FF7200] rounded-sm opacity-60"></div>
        <span>Certificate Details</span>
      </div>
    </div>
  );
}

// Mock IGM Details Sub-sections
function IGMDetailsSubSections() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 p-2 rounded text-[#ffffff] text-[12px] font-medium hover:bg-[#32394c] cursor-pointer">
        <div className="w-4 h-4 bg-[#4F608F] rounded-sm opacity-60"></div>
        <span>Container Details</span>
      </div>
    </div>
  );
}

// Other Navigation Icons (simplified versions for expandable nav)
function InvoiceDetailsIcon() {
  return (
    <div className="w-6 h-6 bg-[#586A9C] rounded opacity-60"></div>
  );
}

function ItemDetailsIcon() {
  return (
    <div className="w-6 h-6 bg-[#586A9C] rounded opacity-60"></div>
  );
}

function SupportingDocsIcon() {
  return (
    <div className="w-6 h-6 bg-[#586A9C] rounded opacity-60"></div>
  );
}

function StatementsIcon() {
  return (
    <div className="w-6 h-6 bg-[#586A9C] rounded opacity-60"></div>
  );
}

export default function ExpandableJobNavigation({ 
  activeSection, 
  onSectionClick, 
  onCreateJob 
}: ExpandableJobNavigationProps) {
  const [versionCollapsed, setVersionCollapsed] = useState(false);
  const [navigationCollapsed, setNavigationCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (itemKey: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

  const handleSectionClick = (section: string) => {
    if (onSectionClick) {
      onSectionClick(section);
    }
  };

  return (
    <div className="flex h-full">
      {/* Version Panel */}
      <div className={`bg-[#242c40] flex flex-col transition-all duration-300 h-full ${versionCollapsed ? 'w-[76px]' : 'w-[240px]'}`}>
        <div className="border-r border-[#505767] border-solid h-full flex flex-col">
          {/* Header */}
          <div className="h-12 overflow-clip relative shrink-0">
            <div className={`box-border content-stretch flex flex-row h-12 items-center overflow-clip px-2 py-3.5 relative ${versionCollapsed ? 'justify-center' : 'justify-between'}`}>
              {!versionCollapsed && (
                <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic text-[#ffffff] text-[16px] text-left text-nowrap">
                  <p className="block leading-[20px] whitespace-pre">Version</p>
                </div>
              )}
              <ToggleIcon isCollapsed={versionCollapsed} onClick={() => setVersionCollapsed(!versionCollapsed)} />
            </div>
            <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="flex-1 box-border content-stretch flex flex-col items-center justify-start overflow-clip px-3 py-3 h-full">
            {versionCollapsed ? (
              // Collapsed view
              <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-[8px] relative rounded shrink-0 w-[50px]">
                <div className="flex justify-center">
                  <CreateJobButton onClick={onCreateJob} isCollapsed={true} />
                </div>
                <div className="border border-[#3874ff] border-solid rounded shadow-[0px_0px_11px_1px_#272d3f] bg-[#32394c] p-2 w-[50px] h-[34px]">
                  <div className="box-border content-stretch flex flex-row gap-0.5 items-center justify-center p-0 relative shrink-0 h-full">
                    <Indcator />
                    <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-left text-nowrap">
                      <p className="block leading-[20px] whitespace-pre">Live</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Expanded view
              <div className="w-full space-y-2">
                <div className="w-full">
                  <CreateJobButton onClick={onCreateJob} isCollapsed={false} />
                </div>
                <div className="bg-[#32394c] border border-[#3874ff] border-solid rounded shadow-[0px_0px_11px_1px_#272d3f] p-3">
                  <div className="flex items-center gap-2">
                    <Indcator />
                    <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold text-[#ffffff] text-[14px]">Live</span>
                  </div>
                  <div className="mt-2 text-[#cdcfd3] text-[12px]">
                    Current active version
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Navigation Panel */}
      <div className={`bg-[#242c40] flex flex-col transition-all duration-300 h-full ${navigationCollapsed ? 'w-[76px]' : 'w-[240px]'}`}>
        <div className="border-r border-[#505767] border-solid h-full flex flex-col">
          {/* Header */}
          <div className="h-12 overflow-clip relative shrink-0">
            <div className={`box-border content-stretch flex flex-row h-12 items-center overflow-clip px-2 py-3.5 relative ${navigationCollapsed ? 'justify-center' : 'justify-between'}`}>
              {!navigationCollapsed && (
                <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic text-[#ffffff] text-[16px] text-left text-nowrap">
                  <p className="block leading-[20px] whitespace-pre">Navigation</p>
                </div>
              )}
              <ToggleIcon isCollapsed={navigationCollapsed} onClick={() => setNavigationCollapsed(!navigationCollapsed)} />
            </div>
            <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          </div>

          {/* Timeline Content */}
          <div className="flex-1 box-border content-stretch flex flex-col overflow-y-auto px-3 py-3 h-full">
            <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
              <div className="flex flex-col gap-3 relative shrink-0 w-full">
                
                {/* Job Details - Expandable */}
                <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 w-6">
                    <div className="relative size-full">
                      <div className="absolute border-[#505767] border-solid border-l-[1px] border-r-0 border-t-0 border-b-0 h-[36px] left-1/2 top-6 translate-x-[-50%] w-0" />
                      <div 
                        className={`box-border content-stretch flex flex-row gap-3 items-center justify-start p-[4px] relative w-full cursor-pointer rounded transition-colors duration-200 ${
                          activeSection === 'jobDetails' ? 'bg-[#32394c]' : 'hover:bg-[#1a1f2e]'
                        }`}
                        onClick={() => {
                          handleSectionClick('jobDetails');
                          if (!navigationCollapsed) {
                            toggleExpand('jobDetails');
                          }
                        }}
                      >
                        <JobDetailsIcon />
                        {!navigationCollapsed && (
                          <ExpandIcon isExpanded={expandedItems.jobDetails} />
                        )}
                      </div>
                    </div>
                  </div>
                  {!navigationCollapsed && (
                    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-6 justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left w-full">
                        <p className="block leading-[18px]">Job Details</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Job Details Expanded Content */}
                {!navigationCollapsed && expandedItems.jobDetails && (
                  <div className="ml-8 w-full">
                    <JobDetailsSubSections />
                  </div>
                )}

                {/* IGM Details - Expandable */}
                <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 w-6">
                    <div className="relative size-full">
                      <div className="absolute border-[#505767] border-solid border-l-[1px] border-r-0 border-t-0 border-b-0 h-[36px] left-1/2 top-6 translate-x-[-50%] w-0" />
                      <div 
                        className={`box-border content-stretch flex flex-row gap-3 items-center justify-start p-[4px] relative w-full cursor-pointer rounded transition-colors duration-200 ${
                          activeSection === 'igmDetails' ? 'bg-[#32394c]' : 'hover:bg-[#1a1f2e]'
                        }`}
                        onClick={() => {
                          handleSectionClick('igmDetails');
                          if (!navigationCollapsed) {
                            toggleExpand('igmDetails');
                          }
                        }}
                      >
                        <IGMDetailsIcon />
                        {!navigationCollapsed && (
                          <ExpandIcon isExpanded={expandedItems.igmDetails} />
                        )}
                      </div>
                    </div>
                  </div>
                  {!navigationCollapsed && (
                    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-6 justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left w-full">
                        <p className="block leading-[18px]">IGM Details</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* IGM Details Expanded Content */}
                {!navigationCollapsed && expandedItems.igmDetails && (
                  <div className="ml-8 w-full">
                    <IGMDetailsSubSections />
                  </div>
                )}

                {/* Invoice Details - Non-expandable */}
                <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 w-6">
                    <div className="relative size-full">
                      <div className="absolute border-[#505767] border-solid border-l-[1px] border-r-0 border-t-0 border-b-0 h-[36px] left-1/2 top-6 translate-x-[-50%] w-0" />
                      <div 
                        className={`box-border content-stretch flex flex-row gap-3 items-center justify-start p-[4px] relative w-full cursor-pointer rounded transition-colors duration-200 ${
                          activeSection === 'invoiceDetails' ? 'bg-[#32394c]' : 'hover:bg-[#1a1f2e]'
                        }`}
                        onClick={() => handleSectionClick('invoiceDetails')}
                      >
                        <InvoiceDetailsIcon />
                      </div>
                    </div>
                  </div>
                  {!navigationCollapsed && (
                    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-6 justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left w-full">
                        <p className="block leading-[18px]">Invoice Details</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Item Details - Non-expandable */}
                <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 w-6">
                    <div className="relative size-full">
                      <div className="absolute border-[#505767] border-solid border-l-[1px] border-r-0 border-t-0 border-b-0 h-[36px] left-1/2 top-6 translate-x-[-50%] w-0" />
                      <div 
                        className={`box-border content-stretch flex flex-row gap-3 items-center justify-start p-[4px] relative w-full cursor-pointer rounded transition-colors duration-200 ${
                          activeSection === 'itemDetails' ? 'bg-[#32394c]' : 'hover:bg-[#1a1f2e]'
                        }`}
                        onClick={() => handleSectionClick('itemDetails')}
                      >
                        <ItemDetailsIcon />
                      </div>
                    </div>
                  </div>
                  {!navigationCollapsed && (
                    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-6 justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left w-full">
                        <p className="block leading-[18px]">Item Details</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Supporting Docs - Non-expandable */}
                <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 w-6">
                    <div className="relative size-full">
                      <div className="absolute border-[#505767] border-solid border-l-[1px] border-r-0 border-t-0 border-b-0 h-[36px] left-1/2 top-6 translate-x-[-50%] w-0" />
                      <div 
                        className={`box-border content-stretch flex flex-row gap-3 items-center justify-start p-[4px] relative w-full cursor-pointer rounded transition-colors duration-200 ${
                          activeSection === 'supportingDocs' ? 'bg-[#32394c]' : 'hover:bg-[#1a1f2e]'
                        }`}
                        onClick={() => handleSectionClick('supportingDocs')}
                      >
                        <SupportingDocsIcon />
                      </div>
                    </div>
                  </div>
                  {!navigationCollapsed && (
                    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-6 justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left w-full">
                        <p className="block leading-[18px]">Supporting Docs</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Statements - Non-expandable */}
                <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="relative shrink-0 w-6">
                    <div className="relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-[4px] relative w-full cursor-pointer rounded transition-colors duration-200 ${
                        activeSection === 'statements' ? 'bg-[#32394c]' : 'hover:bg-[#1a1f2e]'
                      }">
                        <StatementsIcon />
                      </div>
                    </div>
                  </div>
                  {!navigationCollapsed && (
                    <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
                      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium h-6 justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left w-full">
                        <p className="block leading-[18px]">Statements</p>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}