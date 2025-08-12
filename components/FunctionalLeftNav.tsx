import React, { useState, useRef, useEffect } from 'react';
import svgPaths from '../imports/svg-9dz9e1dmix';
import createJobSvgPaths from '../imports/svg-26kguuw50j';
import timelineSvgPaths from '../imports/svg-r6a7q846ed';
import itemDetailsSubSvgPaths from '../imports/svg-y1yx9raex6';
import invoiceSubSvgPaths from '../imports/svg-tksitbn2tp';
import Frame42172 from '../imports/Frame42172';
import ArrowDropdownCollapse from '../imports/ArrowDropdown-885-640';
import ArrowDropdownExpand from '../imports/ArrowDropdown-885-657';
// Using reliable SVG icons to avoid broken figma:asset imports

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

function VersionToggleIcon({ isCollapsed, onClick }: { isCollapsed: boolean; onClick: () => void }) {
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

function VersionPanel({ 
  isCollapsed, 
  onToggle, 
  onCreateJob 
}: { 
  isCollapsed: boolean; 
  onToggle: () => void;
  onCreateJob?: () => void;
}) {
  return (
    <div className={`bg-[#242c40] flex flex-col transition-all duration-300 h-full ${isCollapsed ? 'w-[76px]' : 'w-[240px]'}`}>
      <div className="border-r border-[#505767] border-solid h-full flex flex-col">
        {/* Header */}
        <div className="h-12 overflow-clip relative shrink-0">
          <div className={`box-border content-stretch flex flex-row h-12 items-center overflow-clip px-2 py-3.5 relative ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
            {!isCollapsed && (
              <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic text-[#ffffff] text-[16px] text-left text-nowrap">
                <p className="block leading-[20px] whitespace-pre">Version</p>
              </div>
            )}
            <VersionToggleIcon isCollapsed={isCollapsed} onClick={onToggle} />
          </div>
          <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="flex-1 box-border content-stretch flex flex-col items-center justify-start overflow-clip px-3 py-3 h-full">
          {isCollapsed ? (
            // Collapsed view
            <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-[8px] relative rounded shrink-0 w-[50px]">
              {/* Create Job Button */}
              <div className="flex justify-center">
                <CreateJobButton onClick={onCreateJob} isCollapsed={true} />
              </div>
              
              {/* Live Version */}
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
              {/* Create Job Button */}
              <div className="w-full">
                <CreateJobButton onClick={onCreateJob} isCollapsed={false} />
              </div>
              
              {/* Live Version */}
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
  );
}

// Timeline Navigation Components
function NavigationToggleIcon({ isCollapsed, onClick }: { isCollapsed: boolean; onClick: () => void }) {
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
            id="mask0_594_128876"
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
          <g mask="url(#mask0_594_128876)">
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
function JobDetailsIcon({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Checklist Icons Imports">
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="w-full h-full"
      >
        {isActive ? (
          // Purple active state - briefcase icon
          <g>
            <rect 
              x="4" 
              y="7" 
              width="16" 
              height="10" 
              rx="2" 
              fill="#8B5CF6" 
              stroke="#6D28D9" 
              strokeWidth="0.5"
            />
            <rect 
              x="8" 
              y="5" 
              width="8" 
              height="4" 
              rx="1" 
              fill="#8B5CF6" 
              stroke="#6D28D9" 
              strokeWidth="0.5"
            />
            <circle cx="12" cy="12" r="1.5" fill="white" />
          </g>
        ) : (
          // Gray inactive state - briefcase icon
          <g>
            <rect 
              x="4" 
              y="7" 
              width="16" 
              height="10" 
              rx="2" 
              fill="#6B7280" 
              stroke="#4B5563" 
              strokeWidth="0.5"
            />
            <rect 
              x="8" 
              y="5" 
              width="8" 
              height="4" 
              rx="1" 
              fill="#6B7280" 
              stroke="#4B5563" 
              strokeWidth="0.5"
            />
            <circle cx="12" cy="12" r="1.5" fill="white" />
          </g>
        )}
      </svg>
    </div>
  );
}

function IGMDetailsIcon({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Checklist Icons Imports">
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="w-full h-full"
      >
        {isActive ? (
          // Orange active state - truck/container icon (your requested orange truck)
          <g>
            <rect 
              x="2" 
              y="8" 
              width="14" 
              height="6" 
              rx="1" 
              fill="#F97316" 
              stroke="#EA580C" 
              strokeWidth="0.5"
            />
            <rect 
              x="16" 
              y="10" 
              width="4" 
              height="4" 
              rx="0.5" 
              fill="#F97316" 
              stroke="#EA580C" 
              strokeWidth="0.5"
            />
            <circle cx="6" cy="16" r="2" fill="#F97316" stroke="#EA580C" strokeWidth="0.5" />
            <circle cx="18" cy="16" r="2" fill="#F97316" stroke="#EA580C" strokeWidth="0.5" />
            <circle cx="6" cy="16" r="1" fill="white" />
            <circle cx="18" cy="16" r="1" fill="white" />
            {/* Container details */}
            <rect x="4" y="9" width="10" height="1" rx="0.5" fill="white" opacity="0.8" />
            <rect x="4" y="11" width="8" height="1" rx="0.5" fill="white" opacity="0.6" />
          </g>
        ) : (
          // Gray inactive state - truck/container icon
          <g>
            <rect 
              x="2" 
              y="8" 
              width="14" 
              height="6" 
              rx="1" 
              fill="#6B7280" 
              stroke="#4B5563" 
              strokeWidth="0.5"
            />
            <rect 
              x="16" 
              y="10" 
              width="4" 
              height="4" 
              rx="0.5" 
              fill="#6B7280" 
              stroke="#4B5563" 
              strokeWidth="0.5"
            />
            <circle cx="6" cy="16" r="2" fill="#6B7280" stroke="#4B5563" strokeWidth="0.5" />
            <circle cx="18" cy="16" r="2" fill="#6B7280" stroke="#4B5563" strokeWidth="0.5" />
            <circle cx="6" cy="16" r="1" fill="white" />
            <circle cx="18" cy="16" r="1" fill="white" />
            {/* Container details */}
            <rect x="4" y="9" width="10" height="1" rx="0.5" fill="white" opacity="0.8" />
            <rect x="4" y="11" width="8" height="1" rx="0.5" fill="white" opacity="0.6" />
          </g>
        )}
      </svg>
    </div>
  );
}

function InvoiceDetailsIcon({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Checklist Icons Imports">
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="w-full h-full"
      >
        {isActive ? (
          // Purple active state - invoice/document icon
          <g>
            <rect 
              x="5" 
              y="3" 
              width="14" 
              height="18" 
              rx="2" 
              fill="#8B5CF6" 
              stroke="#6D28D9" 
              strokeWidth="0.5"
            />
            <rect x="8" y="7" width="8" height="1" rx="0.5" fill="white" />
            <rect x="8" y="10" width="6" height="1" rx="0.5" fill="white" />
            <rect x="8" y="13" width="8" height="1" rx="0.5" fill="white" />
            <rect x="8" y="16" width="5" height="1" rx="0.5" fill="white" />
          </g>
        ) : (
          // Gray inactive state - invoice/document icon
          <g>
            <rect 
              x="5" 
              y="3" 
              width="14" 
              height="18" 
              rx="2" 
              fill="#6B7280" 
              stroke="#4B5563" 
              strokeWidth="0.5"
            />
            <rect x="8" y="7" width="8" height="1" rx="0.5" fill="white" />
            <rect x="8" y="10" width="6" height="1" rx="0.5" fill="white" />
            <rect x="8" y="13" width="8" height="1" rx="0.5" fill="white" />
            <rect x="8" y="16" width="5" height="1" rx="0.5" fill="white" />
          </g>
        )}
      </svg>
    </div>
  );
}

function ItemDetailsIcon({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Checklist Icons Imports">
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="w-full h-full"
      >
        {isActive ? (
          // Purple active state - list/checklist icon
          <g>
            <rect 
              x="3" 
              y="4" 
              width="18" 
              height="16" 
              rx="2" 
              fill="#8B5CF6" 
              stroke="#6D28D9" 
              strokeWidth="0.5"
            />
            <rect x="6" y="8" width="2" height="1" rx="0.5" fill="white" />
            <rect x="10" y="8" width="8" height="1" rx="0.5" fill="white" />
            <rect x="6" y="12" width="2" height="1" rx="0.5" fill="white" />
            <rect x="10" y="12" width="6" height="1" rx="0.5" fill="white" />
            <rect x="6" y="16" width="2" height="1" rx="0.5" fill="white" />
            <rect x="10" y="16" width="7" height="1" rx="0.5" fill="white" />
            {/* Checkmarks */}
            <path d="M6.5 8.5L7 9L7.5 8.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 12.5L7 13L7.5 12.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        ) : (
          // Gray inactive state - list/checklist icon
          <g>
            <rect 
              x="3" 
              y="4" 
              width="18" 
              height="16" 
              rx="2" 
              fill="#6B7280" 
              stroke="#4B5563" 
              strokeWidth="0.5"
            />
            <rect x="6" y="8" width="2" height="1" rx="0.5" fill="white" />
            <rect x="10" y="8" width="8" height="1" rx="0.5" fill="white" />
            <rect x="6" y="12" width="2" height="1" rx="0.5" fill="white" />
            <rect x="10" y="12" width="6" height="1" rx="0.5" fill="white" />
            <rect x="6" y="16" width="2" height="1" rx="0.5" fill="white" />
            <rect x="10" y="16" width="7" height="1" rx="0.5" fill="white" />
            {/* Checkmarks */}
            <path d="M6.5 8.5L7 9L7.5 8.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.5 12.5L7 13L7.5 12.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
      </svg>
    </div>
  );
}

function SupportingDocsIcon({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className="relative shrink-0 size-6" data-name="Checklist Icons Imports">
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="w-full h-full"
      >
        {isActive ? (
          // Purple active state - folder icon
          <g>
            <path 
              d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z" 
              fill="#8B5CF6" 
              stroke="#6D28D9" 
              strokeWidth="0.5"
            />
            <circle cx="12" cy="13" r="2" fill="white" />
            <rect x="8" y="15" width="8" height="1" rx="0.5" fill="white" />
          </g>
        ) : (
          // Gray inactive state - folder icon
          <g>
            <path 
              d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z" 
              fill="#6B7280" 
              stroke="#4B5563" 
              strokeWidth="0.5"
            />
            <circle cx="12" cy="13" r="2" fill="white" />
            <rect x="8" y="15" width="8" height="1" rx="0.5" fill="white" />
          </g>
        )}
      </svg>
    </div>
  );
}

function StatementsIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Checklist Icons Imports">
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="w-full h-full"
      >
        <g>
          <rect 
            x="4" 
            y="3" 
            width="16" 
            height="18" 
            rx="2" 
            fill="#6B7280" 
            stroke="#4B5563" 
            strokeWidth="0.5"
          />
          <rect x="7" y="7" width="10" height="1" rx="0.5" fill="white" />
          <rect x="7" y="10" width="8" height="1" rx="0.5" fill="white" />
          <rect x="7" y="13" width="10" height="1" rx="0.5" fill="white" />
          <rect x="7" y="16" width="6" height="1" rx="0.5" fill="white" />
          <circle cx="16" cy="8" r="3" fill="#10B981" stroke="white" strokeWidth="1" />
          <path d="M14.5 8L15.5 9L17.5 7" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

// Item Details Subsection Icon
function ItemDetailsSubIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Checklist Icons Imports">
      <div className="absolute h-4 left-1/2 top-1 translate-x-[-50%] w-3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
          <g id="Group 4339">
            <g filter="url(#filter0_i_690_29624)" id="Rectangle 274261">
              <path d={itemDetailsSubSvgPaths.pb26d980} fill="var(--fill-0, #586A9C)" />
            </g>
            <foreignObject height="8.9" width="18.1309" x="-3.06544" y="1.80515">
              <div
                style={{
                  backdropFilter: "blur(2px)",
                  height: "100%",
                  width: "100%",
                }}
                xmlns="http://www.w3.org/1999/xhtml"
              />
            </foreignObject>
            <path
              d="M1.38456 6.25515H10.6154"
              data-figma-bg-blur-radius="4"
              id="Line 141"
              opacity="0.9"
              stroke="url(#paint0_linear_690_29624)"
              strokeLinecap="round"
              strokeWidth="0.9"
            />
            <foreignObject height="8.9" width="18.1309" x="-3.06544" y="3.71778">
              <div
                style={{
                  backdropFilter: "blur(2px)",
                  height: "100%",
                  width: "100%",
                }}
                xmlns="http://www.w3.org/1999/xhtml"
              />
            </foreignObject>
            <path
              d="M1.38456 8.16778H10.6154"
              data-figma-bg-blur-radius="4"
              id="Line 142"
              opacity="0.9"
              stroke="url(#paint1_linear_690_29624)"
              strokeLinecap="round"
              strokeWidth="0.9"
            />
            <foreignObject height="8.9" width="18.1309" x="-3.06544" y="5.63038">
              <div
                style={{
                  backdropFilter: "blur(2px)",
                  height: "100%",
                  width: "100%",
                }}
                xmlns="http://www.w3.org/1999/xhtml"
              />
            </foreignObject>
            <path
              d="M1.38456 10.0804H10.6154"
              data-figma-bg-blur-radius="4"
              id="Line 143"
              opacity="0.9"
              stroke="url(#paint2_linear_690_29624)"
              strokeLinecap="round"
              strokeWidth="0.9"
            />
            <foreignObject height="8.9" width="18.1309" x="-3.06544" y="7.54297">
              <div
                style={{
                  backdropFilter: "blur(2px)",
                  height: "100%",
                  width: "100%",
                }}
                xmlns="http://www.w3.org/1999/xhtml"
              />
            </foreignObject>
            <path
              d="M1.38456 11.993H10.6154"
              data-figma-bg-blur-radius="4"
              id="Line 144"
              opacity="0.9"
              stroke="url(#paint3_linear_690_29624)"
              strokeLinecap="round"
              strokeWidth="0.9"
            />
            <foreignObject height="8.9" width="13.5154" x="-3.06544" y="9.45557">
              <div
                style={{
                  backdropFilter: "blur(2px)",
                  height: "100%",
                  width: "100%",
                }}
                xmlns="http://www.w3.org/1999/xhtml"
              />
            </foreignObject>
            <path
              d="M1.38456 13.9056H6"
              data-figma-bg-blur-radius="4"
              id="Line 145"
              opacity="0.9"
              stroke="url(#paint4_linear_690_29624)"
              strokeLinecap="round"
              strokeWidth="0.9"
            />
            <path
              d={itemDetailsSubSvgPaths.pcfd4e80}
              fill="var(--fill-0, #7C8CB8)"
              id="Rectangle 274262"
            />
            <path
              d={itemDetailsSubSvgPaths.p1301ce00}
              fill="url(#paint5_linear_690_29624)"
              id="Rectangle 274304"
            />
          </g>
          <defs>
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="18"
              id="filter0_i_690_29624"
              width="12"
              x="0"
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
                result="effect1_innerShadow_690_29624"
              />
            </filter>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_690_29624"
              x1="6.05103"
              x2="6.05103"
              y1="5.8633"
              y2="7.3633"
            >
              <stop stopColor="white" />
              <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_690_29624"
              x1="6.05103"
              x2="6.05103"
              y1="7.77593"
              y2="9.27593"
            >
              <stop stopColor="white" />
              <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_690_29624"
              x1="6.05103"
              x2="6.05103"
              y1="9.68853"
              y2="11.1885"
            >
              <stop stopColor="white" />
              <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_690_29624"
              x1="6.05103"
              x2="6.05103"
              y1="11.6011"
              y2="13.1011"
            >
              <stop stopColor="white" />
              <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint4_linear_690_29624"
              x1="3.7178"
              x2="3.7178"
              y1="13.5137"
              y2="15.0137"
            >
              <stop stopColor="white" />
              <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint5_linear_690_29624"
              x1="3"
              x2="3"
              y1="-0.50354"
              y2="5"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#8D9AB8" stopOpacity="0.43" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// Invoice Details Subsection Icons
function SellerDetailsIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="Checklist Icons Imports">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checklist Icons Imports">
          <g id="Group 42028">
            <g filter="url(#filter0_i_690_29706)" id="Rectangle 274336">
              <path d={invoiceSubSvgPaths.p34591700} fill="url(#paint0_linear_690_29706)" />
            </g>
            <path d={invoiceSubSvgPaths.pe4b5e00} fill="url(#paint1_linear_690_29706)" id="Vector 330" />
            <path d={invoiceSubSvgPaths.pa466000} fill="url(#paint2_linear_690_29706)" id="Vector 331" />
          </g>
          <g filter="url(#filter1_i_690_29706)" id="Union">
            <path d={invoiceSubSvgPaths.p3f326480} fill="url(#paint3_linear_690_29706)" />
          </g>
          <g id="Group 42036">
            <g filter="url(#filter2_i_690_29706)" id="Rectangle 274405">
              <path d={invoiceSubSvgPaths.p3f695800} fill="var(--fill-0, #6F80B1)" />
            </g>
            <g filter="url(#filter3_i_690_29706)" id="Rectangle 274406">
              <path d={invoiceSubSvgPaths.p10db900} fill="var(--fill-0, #8090BF)" />
            </g>
            <path d={invoiceSubSvgPaths.p19c6c800} fill="url(#paint4_linear_690_29706)" id="Rectangle 274408" />
            <path d={invoiceSubSvgPaths.p2f01f780} fill="url(#paint5_linear_690_29706)" id="Vector 332" />
            <path d={invoiceSubSvgPaths.p2c919d80} fill="url(#paint6_linear_690_29706)" id="Rectangle 274496" />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="8.05062"
            id="filter0_i_690_29706"
            width="13.2439"
            x="5.37807"
            y="11.6679"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_690_29706" />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="8.58257"
            id="filter1_i_690_29706"
            width="6.56481"
            x="8.70253"
            y="3.08748"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_690_29706" />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="5.44618"
            id="filter2_i_690_29706"
            width="3.25271"
            x="15.2671"
            y="15.6236"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_690_29706" />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="5.41648"
            id="filter3_i_690_29706"
            width="3.383"
            x="18.4783"
            y="15.6488"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_690_29706" />
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_690_29706"
            x1="12"
            x2="12"
            y1="11.5648"
            y2="20.6916"
          >
            <stop offset="0.0844957" stopColor="#7F8FB6" />
            <stop offset="1" stopColor="#3E5079" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_690_29706"
            x1="11.9849"
            x2="11.9849"
            y1="7.21683"
            y2="19.862"
          >
            <stop stopColor="#7E90B8" />
            <stop offset="1" stopColor="#8B9ABE" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_690_29706"
            x1="12.0201"
            x2="12.0201"
            y1="12.2333"
            y2="18.2491"
          >
            <stop stopColor="#D1E0FF" />
            <stop offset="1" stopColor="#8FA0C8" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint3_linear_690_29706"
            x1="11.9672"
            x2="11.9672"
            y1="4.33104"
            y2="10.5827"
          >
            <stop offset="0.0844957" stopColor="#67769D" />
            <stop offset="1" stopColor="#3D4E74" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint4_linear_690_29706"
            x1="19.7894"
            x2="20.1941"
            y1="17.8634"
            y2="13.0575"
          >
            <stop stopColor="#8B9FCB" />
            <stop offset="1" stopColor="#6577AA" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint5_linear_690_29706"
            x1="16.308"
            x2="20.1697"
            y1="15.5596"
            y2="15.5596"
          >
            <stop stopColor="#93A5CD" />
            <stop offset="0.209768" stopColor="#A3B3D6" />
            <stop offset="1" stopColor="#9DB4E6" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint6_linear_690_29706"
            x1="16.6862"
            x2="16.6862"
            y1="15.9704"
            y2="17.2911"
          >
            <stop stopColor="#BBCEF7" />
            <stop offset="1" stopColor="#98A9D0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ThirdPartyIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Checklist Icons Imports">
      <div className="absolute bg-[#586a9c] inset-[20.833%] rounded-sm">
        <div className="absolute inset-0 pointer-events-none shadow-[0px_2px_4px_0px_inset_#344366]" />
      </div>
    </div>
  );
}

function SubChargesIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Checklist Icons Imports">
      <div className="absolute h-[17.358px] left-1.5 top-[3.32px] w-[14.103px]" data-name="icon">
        <div className="absolute bottom-[-14.42%] left-0 right-[-14.9%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
            <g id="icon">
              <g filter="url(#filter0_i_830_4944)" id="Intersect">
                <path d={invoiceSubSvgPaths.p26d5a500} fill="var(--fill-0, #586A9C)" />
              </g>
              <foreignObject height="8.9" width="15.3255" x="-0.298511" y="-0.700794">
                <div
                  style={{
                    backdropFilter: "blur(2px)",
                    height: "100%",
                    width: "100%",
                  }}
                  xmlns="http://www.w3.org/1999/xhtml"
                />
              </foreignObject>
              <path
                d={invoiceSubSvgPaths.p3f5675c0}
                data-figma-bg-blur-radius="4"
                id="Line 144"
                opacity="0.9"
                stroke="url(#paint0_linear_830_4944)"
                strokeLinecap="round"
                strokeWidth="0.9"
              />
              <foreignObject height="8.9" width="15.3255" x="-0.298511" y="2.13322">
                <div
                  style={{
                    backdropFilter: "blur(2px)",
                    height: "100%",
                    width: "100%",
                  }}
                  xmlns="http://www.w3.org/1999/xhtml"
                />
              </foreignObject>
              <path
                d={invoiceSubSvgPaths.p2d1da900}
                data-figma-bg-blur-radius="4"
                id="Line 145"
                opacity="0.9"
                stroke="url(#paint1_linear_830_4944)"
                strokeLinecap="round"
                strokeWidth="0.9"
              />
              <path
                d={invoiceSubSvgPaths.p17974fc0}
                fill="url(#paint4_linear_830_4944)"
                id="Rectangle 274304"
              />
              <path
                d={invoiceSubSvgPaths.p236dbcc0}
                fill="url(#paint5_linear_830_4944)"
                id="Rectangle 274305"
              />
              <path
                d={invoiceSubSvgPaths.p18b75d00}
                fill="url(#paint6_linear_830_4944)"
                id="Rectangle 274306"
              />
              <path
                d={invoiceSubSvgPaths.p839f280}
                fill="url(#paint7_linear_830_4944)"
                id="Rectangle 274307"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="15.4851"
                id="filter0_i_830_4944"
                width="12"
                x="0"
                y="0"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.203922 0 0 0 0 0.262745 0 0 0 0 0.4 0 0 0 1 0" />
                <feBlend in2="shape" mode="normal" result="effect1_innerShadow_830_4944" />
              </filter>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_830_4944"
                x1="7.39974"
                x2="7.39974"
                y1="3.35736"
                y2="4.85736"
              >
                <stop stopColor="white" />
                <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint1_linear_830_4944"
                x1="7.39974"
                x2="7.39974"
                y1="6.19138"
                y2="7.69138"
              >
                <stop stopColor="white" />
                <stop offset="0.727217" stopColor="#6B7EA9" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint4_linear_830_4944"
                x1="2.09473"
                x2="2.09473"
                y1="2.77533"
                y2="4.72311"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#8D9AB8" stopOpacity="0.43" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint5_linear_830_4944"
                x1="2.09473"
                x2="2.09473"
                y1="5.60931"
                y2="7.5571"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#8D9AB8" stopOpacity="0.43" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint6_linear_830_4944"
                x1="2.09473"
                x2="2.09473"
                y1="8.4431"
                y2="10.3909"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#8D9AB8" stopOpacity="0.43" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint7_linear_830_4944"
                x1="2.09473"
                x2="2.09473"
                y1="11.2769"
                y2="13.2247"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#8D9AB8" stopOpacity="0.43" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

// Job Details Subsection Icons - using similar icons for consistency
function JobBasicInfoIcon() {
  return <JobDetailsIcon isActive={false} />;
}

function JobContactInfoIcon() {
  return <InvoiceDetailsIcon isActive={false} />;
}

function JobTransportInfoIcon() {
  return <IGMDetailsIcon />;
}

// Job Details Subsections using Frame42172 with selectable functionality
function JobDetailsSubSections({ 
  contentRef, 
  activeSubsection, 
  onSubsectionClick 
}: { 
  contentRef: React.RefObject<HTMLDivElement>; 
  activeSubsection: string;
  onSubsectionClick: (subsection: string) => void;
}) {
  const subsections = [
    { id: 'hss', label: 'HSS', iconColor: '#FF7200' },
    { id: 'exchangeRate', label: 'Exchange Rate', iconColor: '#FF7200' },
    { id: 'bondDetails', label: 'Bond Details', iconColor: '#FF7200' },
    { id: 'certificate', label: 'Certificate', iconColor: '#FF7200' },
    { id: 'permissionDetails', label: 'Permission Details', iconColor: '#FF7200' }
  ];

  return (
    <div ref={contentRef} className="ml-8 mt-2 w-[176px]">
      <div className="rounded p-2 space-y-1">
        {subsections.map((subsection) => (
          <div
            key={subsection.id}
            className={`flex items-center gap-2 p-2 rounded text-[12px] font-medium cursor-pointer transition-colors ${
              activeSubsection === subsection.id
                ? 'text-[#ffffff]'
                : 'text-[#ffffff] hover:bg-[#42495c]'
            }`}
            onClick={() => onSubsectionClick(subsection.id)}
          >
            <div 
              className="w-4 h-4 rounded-sm opacity-60 flex items-center justify-center"
              style={{ backgroundColor: subsection.iconColor }}
            >
              {/* Add specific icons based on subsection type */}
              {subsection.id === 'hss' && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="white"/>
                </svg>
              )}
              {subsection.id === 'exchangeRate' && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.5 6L15.5 8L12.5 11L14.5 13L12.5 15L9.5 12L7.5 14L6 12.5L8.5 10L6.5 8L8.5 6L11.5 9L13.5 6Z" fill="white"/>
                </svg>
              )}
              {(subsection.id === 'bondDetails' || subsection.id === 'certificate') && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="white"/>
                </svg>
              )}
              {subsection.id === 'permissionDetails' && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H7V10H17V12ZM15 16H7V14H15V16ZM17 8H7V6H17V8Z" fill="white"/>
                </svg>
              )}
            </div>
            <span>{subsection.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// IGM Details Subsections with selectable functionality
function IGMDetailsSubSections({ 
  contentRef, 
  activeSubsection, 
  onSubsectionClick 
}: { 
  contentRef: React.RefObject<HTMLDivElement>; 
  activeSubsection: string;
  onSubsectionClick: (subsection: string) => void;
}) {
  const subsections = [
    { id: 'containerDetails', label: 'Container Details', iconColor: '#4F608F' }
  ];

  return (
    <div ref={contentRef} className="ml-8 mt-2 w-[176px]">
      <div className="rounded p-2 space-y-1">
        {subsections.map((subsection) => (
          <div
            key={subsection.id}
            className={`flex items-center gap-2 p-2 rounded text-[12px] font-medium cursor-pointer transition-colors ${
              activeSubsection === subsection.id
                ? 'text-[#ffffff]'
                : 'text-[#ffffff] hover:bg-[#42495c]'
            }`}
            onClick={() => onSubsectionClick(subsection.id)}
          >
            <div 
              className="w-4 h-4 rounded-sm opacity-60 flex items-center justify-center"
              style={{ backgroundColor: subsection.iconColor }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M2 7H22V17H2V7ZM20 9H4V15H20V9ZM6 11H18V13H6V11Z" fill="white"/>
              </svg>
            </div>
            <span>{subsection.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface NavigationItem {
  id: string;
  title: string;
  progress: number;
  completed: boolean;
  expanded?: boolean;
  icon: (isActive?: boolean) => React.ReactNode;
  subsections?: NavigationSubsection[];
}

interface NavigationSubsection {
  id: string;
  title: string;
  icon: React.ReactNode;
}

function ItemDetailsSubsectionItem({ 
  subsection, 
  isActive, 
  onClick 
}: { 
  subsection: NavigationSubsection; 
  isActive: boolean; 
  onClick: () => void 
}) {
  return (
    <div 
      className="relative cursor-pointer"
      onClick={onClick}
    >
      <div 
        className={`box-border content-stretch flex flex-row gap-1 items-center justify-start p-[6px] relative w-full rounded ml-[13px] ${
          isActive 
            ? 'border border-[#3874ff] border-solid shadow-[0px_0px_40.5px_0px_#14203e] bg-[#36415a]' 
            : 'hover:bg-[#42495c]'
        }`}
      >
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
          {subsection.icon}
        </div>
        <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
          <div className={`flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-6 justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left w-full ${
            isActive ? 'text-[#ffffff]' : 'text-[#CDCFD3]'
          }`}>
            <p className="block leading-[18px]">{subsection.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ 
  item, 
  isActive, 
  onClick, 
  onExpandToggle,
  expandedItems,
  activeSubsection,
  onSubsectionClick
}: { 
  item: NavigationItem; 
  isActive: boolean; 
  onClick: () => void;
  onExpandToggle?: (itemId: string) => void;
  expandedItems?: string[];
  activeSubsection?: string;
  onSubsectionClick?: (subsectionId: string) => void;
}) {
  const isExpanded = expandedItems?.includes(item.id) || false;
  
  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onExpandToggle) {
      onExpandToggle(item.id);
    }
  };

  return (
    <div className="relative">
      <div 
        className="relative cursor-pointer"
        onClick={onClick}
      >
        <div 
          className={`absolute box-border content-stretch flex flex-col items-start justify-center left-[27px] p-[8px] rounded w-[176px] ${
            isActive 
              ? 'border border-[#3874ff] border-solid shadow-[0px_0px_40.5px_0px_#14203e] bg-[#36415a]' 
              : 'hover:bg-[#42495c]'
          }`}
          data-name="Header"
        >
          <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
              {item.icon(isActive)}
            </div>
            <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px p-0 relative shrink-0">
              <div className={`flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold h-6 justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-left w-full ${
                isActive ? 'text-[#ffffff]' : 'text-[#CDCFD3]'
              }`}>
                <p className="block leading-[18px]">{item.title}</p>
              </div>
            </div>
            {item.expanded && (
              <div 
                className="relative shrink-0 size-[18px] cursor-pointer group" 
                data-name="arrow_dropdown"
                onClick={handleExpandClick}
              >
                <div className={`transition-all duration-200 ${isActive ? '[&_path]:fill-white' : '[&_path]:fill-[#CDCFD3] group-hover:[&_path]:fill-white'}`}>
                  {isExpanded ? (
                    <ArrowDropdownCollapse />
                  ) : (
                    <ArrowDropdownExpand />
                  )}
                </div>
              </div>
            )}
          </div>
          <div className={`font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-left text-nowrap text-[#9497A1]`}>
            <p className="[text-overflow:inherit] block leading-[16px] overflow-inherit whitespace-pre">        {item.progress} % completed</p>
          </div>
        </div>
      </div>
      
      {/* Render subsections if expanded */}
      {isExpanded && item.subsections && (
        <div className="absolute left-[27px] top-[55px] w-[176px] space-y-1">
          {item.subsections.map((subsection, index) => (
            <div 
              key={subsection.id}
              style={{ marginTop: index === 0 ? '6px' : '2px' }}
            >
              <ItemDetailsSubsectionItem
                subsection={subsection}
                isActive={activeSubsection === subsection.id}
                onClick={() => onSubsectionClick?.(subsection.id)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TimelineConnector({ 
  expandedItems
}: { 
  expandedItems: string[];
}) {
  // Calculate the height to reach Statements timeline item (icon center)
  // Base positions for each timeline item
  const baseJobDetailsTop = 0;
  const baseIGMDetailsTop = 72;
  const baseInvoiceDetailsTop = 144;
  const baseItemDetailsTop = 216;
  const baseSupportingDocsTop = 288;
  const baseStatementsTop = 360;
  
  // Calculate additional height for each expanded section
  const jobDetailsExpanded = expandedItems.includes('jobDetails');
  const igmDetailsExpanded = expandedItems.includes('igmDetails');
  const invoiceDetailsExpanded = expandedItems.includes('invoiceDetails');
  const itemDetailsExpanded = expandedItems.includes('itemDetails');
  
  // Calculate heights for expanded sections
  const jobDetailsHeightCalc = jobDetailsExpanded ? (5 * 34) + 10 : 0;
  const igmDetailsHeightCalc = igmDetailsExpanded ? (1 * 34) + 10 : 0;
  const invoiceDetailsHeightCalc = invoiceDetailsExpanded ? (3 * 34) + 10 : 0;
  const itemDetailsHeightCalc = itemDetailsExpanded ? (12 * 34) + 30 : 0;
  
  // Calculate total height to reach Statements icon center + 9px (to icon center)
  const totalHeight = baseStatementsTop + jobDetailsHeightCalc + igmDetailsHeightCalc + invoiceDetailsHeightCalc + itemDetailsHeightCalc + 9;

  return (
    <div className={`absolute left-2.5 top-[18px] w-[1px] z-0 transition-all duration-300`} style={{ height: `${totalHeight}px` }}>
      <div className="w-full h-full bg-[#535D78]"></div>
    </div>
  );
}

function NavigationPanel({ 
  isCollapsed, 
  onToggle, 
  activeSection,
  onSectionClick 
}: { 
  isCollapsed: boolean; 
  onToggle: () => void;
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [activeSubsection, setActiveSubsection] = useState<string>('');

  const handleExpandToggle = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSubsectionClick = (subsectionId: string) => {
    setActiveSubsection(subsectionId);
  };

  // Enhanced section click handler that resets subsections when switching sections
  const handleSectionClick = (sectionId: string) => {
    // Clear active subsection when switching to a different main section
    setActiveSubsection('');
    // Call the original section click handler
    onSectionClick(sectionId);
  };

  // Job Details subsections
  const jobDetailsSubsections: NavigationSubsection[] = [
    { id: 'hss', title: 'HSS', icon: <JobBasicInfoIcon /> },
    { id: 'exchangeRate', title: 'Exchange Rate', icon: <JobContactInfoIcon /> },
    { id: 'bondDetails', title: 'Bond Details', icon: <JobTransportInfoIcon /> },
    { id: 'certificate', title: 'Certificate', icon: <JobBasicInfoIcon /> },
    { id: 'permissionDetails', title: 'Permission Details', icon: <JobContactInfoIcon /> },
  ];

  // IGM Details subsections
  const igmDetailsSubsections: NavigationSubsection[] = [
    { id: 'containerDetails', title: 'Container Details', icon: <IGMDetailsIcon /> },
  ];

  // Invoice Details subsections
  const invoiceDetailsSubsections: NavigationSubsection[] = [
    { id: 'sellerDetails', title: 'Seller Details', icon: <SellerDetailsIcon /> },
    { id: 'thirdParty', title: 'Third Party', icon: <ThirdPartyIcon /> },
    { id: 'subCharges', title: 'Sub Charges', icon: <SubChargesIcon /> },
  ];

  // Item Details subsections
  const itemDetailsSubsections: NavigationSubsection[] = [
    { id: 'swInfo', title: 'SW Info', icon: <ItemDetailsSubIcon /> },
    { id: 'swProduction', title: 'SW Production', icon: <ItemDetailsSubIcon /> },
    { id: 'swControl', title: 'SW Control', icon: <ItemDetailsSubIcon /> },
    { id: 'generalDetails', title: 'General Details', icon: <ItemDetailsSubIcon /> },
    { id: 'licenseDetails', title: 'License Details', icon: <ItemDetailsSubIcon /> },
    { id: 'swConstituent', title: 'SW Constituent', icon: <ItemDetailsSubIcon /> },
    { id: 'sezZBeType', title: 'SEZ-Z BE Type', icon: <ItemDetailsSubIcon /> },
    { id: 'section65', title: 'Section 65', icon: <ItemDetailsSubIcon /> },
    { id: 'fta', title: 'FTA', icon: <ItemDetailsSubIcon /> },
    { id: 'rsp', title: 'RSP', icon: <ItemDetailsSubIcon /> },
    { id: 'reimport', title: 'Reimport', icon: <ItemDetailsSubIcon /> },
    { id: 'itemManufacturer', title: 'Item Manufacturer', icon: <ItemDetailsSubIcon /> },
  ];

  const navigationItems: NavigationItem[] = [
    { 
      id: 'jobDetails', 
      title: 'Job Details', 
      progress: 100, 
      completed: true, 
      expanded: true, 
      icon: (isActive) => <JobDetailsIcon isActive={isActive} />,
      subsections: jobDetailsSubsections
    },
    { 
      id: 'igmDetails', 
      title: 'IGM Details', 
      progress: 80, 
      completed: false, 
      expanded: true, 
      icon: (isActive) => <IGMDetailsIcon isActive={isActive} />,
      subsections: igmDetailsSubsections
    },
    { 
      id: 'invoiceDetails', 
      title: 'Invoice Details', 
      progress: 75, 
      completed: false, 
      expanded: true, 
      icon: (isActive) => <InvoiceDetailsIcon isActive={isActive} />,
      subsections: invoiceDetailsSubsections
    },
    { 
      id: 'itemDetails', 
      title: 'Item Details', 
      progress: 75, 
      completed: false, 
      expanded: true, 
      icon: (isActive) => <ItemDetailsIcon isActive={isActive} />,
      subsections: itemDetailsSubsections
    },
    { id: 'supportingDocs', title: 'Supporting Docs', progress: 50, completed: false, expanded: false, icon: (isActive) => <SupportingDocsIcon isActive={isActive} /> },
    { id: 'statements', title: 'Statements', progress: 50, completed: false, expanded: false, icon: () => <StatementsIcon /> },
  ];

  return (
    <div className={`bg-[#36415a] flex flex-col transition-all duration-300 ${isCollapsed ? 'w-[76px]' : 'w-[240px]'}`}>
      <div className="h-full">
        {/* Header */}
        <div className="bg-[#364159] h-12 relative">
          <div className={`box-border content-stretch flex flex-row h-12 items-center overflow-clip px-2 py-3.5 relative ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
            {!isCollapsed && (
              <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic text-[#ffffff] text-[16px] text-left text-nowrap">
                <p className="block leading-[20px] whitespace-pre">Navigation</p>
              </div>
            )}
            <NavigationToggleIcon isCollapsed={isCollapsed} onClick={onToggle} />
          </div>
          <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto py-4 pb-8 h-full max-h-[calc(100vh-48px)]">
          {isCollapsed ? (
            // Collapsed view - show icons only
            <div className="space-y-2 px-2">
              {navigationItems.map((item, index) => (
                <div key={item.id} className="relative">
                  <div 
                    className={`size-10 flex items-center justify-center rounded cursor-pointer transition-colors ${
                      activeSection === item.id 
                        ? 'bg-[#3874ff]' 
                        : 'hover:bg-[#42495c]'
                    }`}
                    onClick={() => handleSectionClick(item.id)}
                  >
                    {item.icon(activeSection === item.id)}
                    <div className="relative size-5">
                      {item.completed ? (
                        <div className="absolute left-px size-[18px] top-[11px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g id="Group 3">
                              <circle cx="9" cy="9" fill="var(--fill-0, #00B196)" id="Ellipse 10" r="9" />
                              <path d={timelineSvgPaths.pb636100} fill="var(--fill-0, white)" id="check_2" />
                            </g>
                          </svg>
                        </div>
                      ) : (
                        <div className="absolute left-0 size-5 top-0" data-name="clock_loader_20">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <g id="clock_loader_20">
                              <circle cx="9.99929" cy="10" fill="var(--fill-0, #35405C)" id="Ellipse 11" r="7.27273" />
                              <path d={timelineSvgPaths.p1528b00} fill="var(--fill-0, #6D758C)" id="clock_loader_60" />
                            </g>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Expanded view - Timeline
            <div className="relative w-full" style={{ 
              minHeight: `${550 + (expandedItems.includes('jobDetails') ? (5 * 34) + 10 : 0) + (expandedItems.includes('igmDetails') ? (1 * 34) + 10 : 0) + (expandedItems.includes('invoiceDetails') ? (3 * 34) + 10 : 0) + (expandedItems.includes('itemDetails') ? (12 * 34) + 30 : 0)}px` 
            }}>
              <div className="relative w-fit ml-[13px]">
                <TimelineConnector 
                  expandedItems={expandedItems}
                />
                
                {/* Job Details */}
                <div style={{ position: 'absolute', top: '0px', zIndex: 1 }}>
                  <TimelineItem
                    item={navigationItems[0]}
                    isActive={activeSection === navigationItems[0].id}
                    onClick={() => handleSectionClick(navigationItems[0].id)}
                    onExpandToggle={handleExpandToggle}
                    expandedItems={expandedItems}
                    activeSubsection={activeSubsection}
                    onSubsectionClick={handleSubsectionClick}
                  />
                  <div className="absolute left-px size-4 top-[11px] z-10">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <g id="Group 3">
                        <circle cx="9" cy="9" fill="var(--fill-0, #00B196)" id="Ellipse 10" r="9" />
                        <path d={timelineSvgPaths.pb636100} fill="var(--fill-0, white)" id="check_2" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* IGM Details */}
                <div style={{ 
                  position: 'absolute', 
                  top: `${72 + (expandedItems.includes('jobDetails') ? (5 * 34) + 10 : 0)}px`, 
                  zIndex: 1 
                }}>
                  <TimelineItem
                    item={navigationItems[1]}
                    isActive={activeSection === navigationItems[1].id}
                    onClick={() => handleSectionClick(navigationItems[1].id)}
                    onExpandToggle={handleExpandToggle}
                    expandedItems={expandedItems}
                    activeSubsection={activeSubsection}
                    onSubsectionClick={handleSubsectionClick}
                  />
                  <div className="absolute left-0 size-5 top-[11px] z-10" data-name="clock_loader_20">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="clock_loader_20">
                        <circle cx="9.99929" cy="10" fill="var(--fill-0, #35405C)" id="Ellipse 11" r="7.27273" />
                        <path d={timelineSvgPaths.p12edc600} fill="var(--fill-0, #6D758C)" id="clock_loader_20_2" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Invoice Details */}
                <div style={{ 
                  position: 'absolute', 
                  top: `${144 + (expandedItems.includes('jobDetails') ? (5 * 34) + 10 : 0) + (expandedItems.includes('igmDetails') ? (1 * 34) + 10 : 0)}px`, 
                  zIndex: 1 
                }}>
                  <TimelineItem
                    item={navigationItems[2]}
                    isActive={activeSection === navigationItems[2].id}
                    onClick={() => handleSectionClick(navigationItems[2].id)}
                    onExpandToggle={handleExpandToggle}
                    expandedItems={expandedItems}
                    activeSubsection={activeSubsection}
                    onSubsectionClick={handleSubsectionClick}
                  />
                  <div className="absolute left-0 size-5 top-[11px] z-10" data-name="clock_loader_20">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="clock_loader_20">
                        <circle cx="9.99929" cy="10" fill="var(--fill-0, #35405C)" id="Ellipse 11" r="7.27273" />
                        <path d={timelineSvgPaths.p1528b00} fill="var(--fill-0, #6D758C)" id="clock_loader_60" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Item Details */}
                <div style={{ 
                  position: 'absolute', 
                  top: `${216 + (expandedItems.includes('jobDetails') ? (5 * 34) + 10 : 0) + (expandedItems.includes('igmDetails') ? (1 * 34) + 10 : 0) + (expandedItems.includes('invoiceDetails') ? (3 * 34) + 10 : 0)}px`, 
                  zIndex: 1 
                }}>
                  <TimelineItem
                    item={navigationItems[3]}
                    isActive={activeSection === navigationItems[3].id}
                    onClick={() => handleSectionClick(navigationItems[3].id)}
                    onExpandToggle={handleExpandToggle}
                    expandedItems={expandedItems}
                    activeSubsection={activeSubsection}
                    onSubsectionClick={handleSubsectionClick}
                  />
                  <div className="absolute left-0 size-5 top-[11px] z-10" data-name="clock_loader_20">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="clock_loader_20">
                        <circle cx="9.99929" cy="10" fill="var(--fill-0, #35405C)" id="Ellipse 11" r="7.27273" />
                        <path d={timelineSvgPaths.p1528b00} fill="var(--fill-0, #6D758C)" id="clock_loader_60" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Supporting Docs */}
                <div style={{ 
                  position: 'absolute', 
                  top: `${288 + (expandedItems.includes('jobDetails') ? (5 * 34) + 10 : 0) + (expandedItems.includes('igmDetails') ? (1 * 34) + 10 : 0) + (expandedItems.includes('invoiceDetails') ? (3 * 34) + 10 : 0) + (expandedItems.includes('itemDetails') ? (12 * 34) + 30 : 0)}px`, 
                  zIndex: 1 
                }}>
                  <TimelineItem
                    item={navigationItems[4]}
                    isActive={activeSection === navigationItems[4].id}
                    onClick={() => handleSectionClick(navigationItems[4].id)}
                  />
                  <div className="absolute left-0 size-5 top-[11px] z-10" data-name="clock_loader_20">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="clock_loader_20">
                        <circle cx="9.99929" cy="10" fill="var(--fill-0, #35405C)" id="Ellipse 11" r="7.27273" />
                        <path d={timelineSvgPaths.p1528b00} fill="var(--fill-0, #6D758C)" id="clock_loader_60" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Statements */}
                <div style={{ 
                  position: 'absolute', 
                  top: `${360 + (expandedItems.includes('jobDetails') ? (5 * 34) + 10 : 0) + (expandedItems.includes('igmDetails') ? (1 * 34) + 10 : 0) + (expandedItems.includes('invoiceDetails') ? (3 * 34) + 10 : 0) + (expandedItems.includes('itemDetails') ? (12 * 34) + 30 : 0)}px`, 
                  zIndex: 1 
                }}>
                  <TimelineItem
                    item={navigationItems[5]}
                    isActive={activeSection === navigationItems[5].id}
                    onClick={() => handleSectionClick(navigationItems[5].id)}
                  />
                  <div className="absolute left-0 size-5 top-[11px] z-10" data-name="clock_loader_20">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="clock_loader_20">
                        <circle cx="9.99929" cy="10" fill="var(--fill-0, #35405C)" id="Ellipse 11" r="7.27273" />
                        <path d={timelineSvgPaths.p1528b00} fill="var(--fill-0, #6D758C)" id="clock_loader_60" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function FunctionalLeftNav({ 
  activeSection = 'jobDetails',
  onSectionClick = () => {},
  onCreateJob
}: {
  activeSection?: string;
  onSectionClick?: (sectionId: string) => void;
  onCreateJob?: () => void;
}) {
  const [isVersionCollapsed, setIsVersionCollapsed] = useState(true);
  const [isNavigationCollapsed, setIsNavigationCollapsed] = useState(false);

  return (
    <div className="flex h-full min-h-0">
      <VersionPanel 
        isCollapsed={isVersionCollapsed} 
        onToggle={() => setIsVersionCollapsed(!isVersionCollapsed)}
        onCreateJob={onCreateJob}
      />
      <NavigationPanel 
        isCollapsed={isNavigationCollapsed} 
        onToggle={() => setIsNavigationCollapsed(!isNavigationCollapsed)}
        activeSection={activeSection}
        onSectionClick={onSectionClick}
      />
    </div>
  );
}