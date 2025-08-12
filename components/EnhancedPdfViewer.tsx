import React, { useState, useEffect, useRef } from 'react';
import { RotateCw } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from "../imports/svg-yxbkyl92te";
import zoomSvgPaths from "../imports/svg-wg6qa13jyo";
import IconSkeleton2 from "../imports/IconSkeleton2-651-374";
import leftNavSvgPaths from "../imports/svg-wai612fhg5";
import invoicePage1 from 'figma:asset/a4e054848e981f456fcfeb507d6be3aeb00144f6.png';
import invoicePage2 from 'figma:asset/3ecab16328491d29d515acace32f52de4d414ff7.png';

interface EnhancedPdfViewerProps {
  selectedPdf?: string | null;
  onClose?: () => void;
  initialZoom?: number;
  initialRotation?: number;
}

// Expand/Collapse Icon Component
function ExpandIcon({ isExpanded, onClick }: { isExpanded: boolean; onClick: () => void }) {
  const positionClasses = isExpanded 
    ? 'right-1.5' 
    : 'left-1/2 -translate-x-1/2';
  
  const rotationClasses = isExpanded 
    ? 'rotate-180' 
    : '';

  return (
    <div
      className={`absolute size-[18px] top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-80 transition-all duration-200 z-10 ${positionClasses}`}
      onClick={onClick}
    >
      <svg
        className={`block size-full transition-transform duration-200 ${rotationClasses}`}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g>
          <path
            d={svgPaths.p2c139180}
            fill="#9497A1"
          />
        </g>
      </svg>
    </div>
  );
}

// Left Sidebar Components
function FilesSection({ isExpanded, onToggleExpanded }: { isExpanded: boolean; onToggleExpanded: () => void }) {
  return (
    <div className="bg-[#202433] relative shrink-0" style={{ width: isExpanded ? '216px' : '76px', height: '48px' }}>
      <div className="overflow-clip relative border-r border-[#505767]" style={{ width: isExpanded ? '216px' : '76px', height: '48px' }}>
        {isExpanded && (
          <div className="absolute flex items-center left-3 top-1/2 -translate-y-1/2">
            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic text-[#ffffff] text-[16px] text-left text-nowrap">
              <p className="block leading-[18px] whitespace-pre">Files</p>
            </div>
          </div>
        )}
        <ExpandIcon isExpanded={isExpanded} onClick={onToggleExpanded} />
      </div>
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid pointer-events-none" style={{ left: isExpanded ? '12px' : '12px', right: isExpanded ? '12px' : '12px', bottom: '0px', height: '1px' }} />
    </div>
  );
}

function PagesSection({ isExpanded, onToggleExpanded }: { isExpanded: boolean; onToggleExpanded: () => void }) {
  return (
    <div className="bg-[#2d364d] relative shrink-0" style={{ width: isExpanded ? '216px' : '76px', height: '48px' }}>
      <div className="overflow-clip relative border-r border-[#505767]" style={{ width: isExpanded ? '216px' : '76px', height: '48px' }}>
        {isExpanded && (
          <div className="absolute flex items-center left-3 top-1/2 -translate-y-1/2">
            <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic text-[#ffffff] text-[16px] text-left text-nowrap">
              <p className="block leading-[18px] whitespace-pre">Pages</p>
            </div>
          </div>
        )}
        <ExpandIcon isExpanded={isExpanded} onClick={onToggleExpanded} />
      </div>
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid pointer-events-none" style={{ left: isExpanded ? '12px' : '12px', right: isExpanded ? '12px' : '12px', bottom: '0px', height: '1px' }} />
    </div>
  );
}

function FilesCard({ label, isActive = false }: { label: string; isActive?: boolean }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-[8px] relative rounded shrink-0 mx-3" style={{ width: 'calc(76px - 24px)' }}>
      <div className={`absolute border ${isActive ? 'border-[#3874ff]' : 'border-[#505767]'} border-solid inset-0 pointer-events-none rounded`} />
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 w-8">
        <div className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 ${isActive ? 'text-[#ffffff]' : 'text-[#cdcfd3]'} text-[14px] text-left text-nowrap`}>
          <p className="block leading-[20px] whitespace-pre">{label}</p>
        </div>
      </div>
    </div>
  );
}

function ExpandedFilesCard({ label, isActive = false }: { label: string; isActive?: boolean }) {
  return (
    <div className={`relative rounded shrink-0 w-full cursor-pointer transition-all duration-200 ${isActive ? 'bg-transparent' : 'hover:bg-[#2a3441]'}`}>
      {isActive && (
        <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
      )}
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative w-full">
          <div className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap ${isActive ? 'text-[#ffffff]' : 'text-[#cdcfd3]'}`}>
            <p className="block leading-[18px] whitespace-pre">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageCard({ label, isActive = false, onClick }: { label: string; isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className="box-border content-stretch flex flex-col gap-2 items-center justify-center p-[8px] relative rounded shrink-0 mx-3 cursor-pointer hover:bg-[#3d4757] transition-colors"
      style={{ width: 'calc(76px - 24px)' }}
      onClick={onClick}
    >
      <div className={`absolute border ${isActive ? 'border-[#3874ff]' : 'border-[#505767]'} border-solid inset-0 pointer-events-none rounded`} />
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 w-8">
        <div className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 ${isActive ? 'text-[#ffffff]' : 'text-[#cdcfd3]'} text-[14px] text-left text-nowrap`}>
          <p className="block leading-[20px] whitespace-pre">{label}</p>
        </div>
      </div>
    </div>
  );
}

function ExpandedPageCard({ label, isActive = false, onClick }: { label: string; isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded shrink-0 w-full cursor-pointer transition-all duration-200 ${isActive ? 'bg-transparent' : 'hover:bg-[#3d4757]'}`}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
      )}
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative w-full">
          <div className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap ${isActive ? 'text-[#ffffff]' : 'text-[#cdcfd3]'}`}>
            <p className="block leading-[18px] whitespace-pre">Page {label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftSidebar({ isExpanded, onToggleExpanded }: { isExpanded: boolean; onToggleExpanded: () => void }) {
  const sidebarWidth = isExpanded ? '216px' : '76px';
  
  if (!isExpanded) {
    return (
      <div className="box-border content-stretch flex flex-col h-full items-start justify-start p-0 relative shrink-0 border-r border-[#505767]" style={{ width: sidebarWidth }}>
        <div className="basis-0 bg-[#1f2432] grow min-h-px min-w-px relative shrink-0">
          <div className="box-border content-stretch flex flex-col h-full items-center justify-start overflow-clip px-0 py-0 relative bg-[rgba(0,0,0,0)]" style={{ boxShadow: 'inset -1px 0 0 #505767' }}>
            <FilesSection isExpanded={isExpanded} onToggleExpanded={onToggleExpanded} />
            <div className="basis-0 bg-[#1f2533] box-border content-stretch flex flex-col gap-2 grow items-center justify-start min-h-px min-w-px px-0 py-3 relative shrink-0">
              <FilesCard label="FL 01" isActive={true} />
              <FilesCard label="FL 02" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Expanded state with new design
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start justify-start p-0 relative shrink-0 border-r border-[#505767]" style={{ width: sidebarWidth }}>
      <div className="bg-[#242c40] relative size-full">
        <div className="relative size-full">
          {/* List Section */}
          <div className="absolute bg-[#242c40] bottom-14 box-border content-stretch flex flex-col gap-1 items-start justify-start left-2 overflow-x-clip overflow-y-auto px-0 py-3 right-2 top-12">
            {/* FL 01 - Active */}
            <div className="relative rounded shrink-0 w-full">
              <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-[8px] relative w-full">
                  <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
                    <p className="block leading-[18px] whitespace-pre">FL 01</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FL02 - Inactive */}
            <div className="relative rounded shrink-0 w-full">
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-[8px] relative w-full">
                  <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#cdcfd3] text-[14px] text-left text-nowrap">
                    <p className="block leading-[18px] whitespace-pre">FL02</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Heading Section */}
          <div className="absolute h-12 left-2 right-2 top-0">
            <div className="overflow-clip relative size-full">
              {/* Collapse Icon */}
              <div 
                className="absolute right-1.5 size-[18px] translate-y-[-50%] cursor-pointer hover:opacity-80 transition-opacity"
                style={{ top: "calc(50% + 1px)" }}
                onClick={onToggleExpanded}
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 18 18"
                >
                  <g>
                    <path
                      d={leftNavSvgPaths.p1cebca00}
                      fill="#9497A1"
                    />
                  </g>
                </svg>
              </div>
              
              {/* Files Text */}
              <div
                className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-2 not-italic text-[#ffffff] text-[16px] text-left text-nowrap"
                style={{ top: "calc(50% - 9px)" }}
              >
                <p className="block leading-[18px] whitespace-pre">Files</p>
              </div>
            </div>
            <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
        <div className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function RightSidebar({ 
  currentPage, 
  onPageChange, 
  pdfPages, 
  isExpanded, 
  onToggleExpanded,
  leftSidebarWidth 
}: { 
  currentPage: number; 
  onPageChange: (page: number) => void; 
  pdfPages: any[];
  isExpanded: boolean;
  onToggleExpanded: () => void;
  leftSidebarWidth: string;
}) {
  const sidebarWidth = isExpanded ? '216px' : '76px';
  
  if (!isExpanded) {
    return (
      <div className="box-border content-stretch flex flex-col h-full items-start justify-start p-0 absolute shrink-0 border-r border-[#505767]" style={{ width: sidebarWidth, left: leftSidebarWidth }}>
        <div className="basis-0 bg-[#2d364d] grow min-h-px min-w-px relative shrink-0">
          <div className="box-border content-stretch flex flex-col h-full items-center justify-start overflow-clip px-0 py-0 relative">
            <PagesSection isExpanded={isExpanded} onToggleExpanded={onToggleExpanded} />
            <div className="basis-0 bg-[#2d364d] box-border content-stretch flex flex-col gap-2 grow items-center justify-start min-h-px min-w-px px-0 py-3 relative shrink-0">
              {pdfPages.map((page) => (
                <PageCard 
                  key={page.id}
                  label={page.label} 
                  isActive={currentPage === page.id}
                  onClick={() => onPageChange(page.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Expanded state with new design
  return (
    <div className="box-border content-stretch flex flex-col h-full items-start justify-start p-0 absolute shrink-0 border-r border-[#505767]" style={{ width: sidebarWidth, left: leftSidebarWidth }}>
      <div className="bg-[#2d364d] relative size-full">
        <div className="relative size-full">
          {/* List Section */}
          <div className="absolute bg-[#2d364d] bottom-14 box-border content-stretch flex flex-col gap-1 items-start justify-start left-2 overflow-x-clip overflow-y-auto px-0 py-3 right-2 top-12">
            {pdfPages.map((page) => (
              <div 
                key={page.id}
                className={`relative rounded shrink-0 w-full cursor-pointer transition-all duration-200 ${currentPage === page.id ? 'bg-transparent' : 'hover:bg-[#3d4757]'}`}
                onClick={() => onPageChange(page.id)}
              >
                {currentPage === page.id && (
                  <div className="absolute border border-[#3874ff] border-solid inset-0 pointer-events-none rounded" />
                )}
                <div className="flex flex-row items-center relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-[8px] relative w-full">
                    <div className={`font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap ${currentPage === page.id ? 'text-[#ffffff]' : 'text-[#cdcfd3]'}`}>
                      <p className="block leading-[18px] whitespace-pre">Page {page.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Heading Section */}
          <div className="absolute h-12 left-2 right-2 top-0">
            <div className="overflow-clip relative size-full">
              {/* Collapse Icon */}
              <div 
                className="absolute right-1.5 size-[18px] translate-y-[-50%] cursor-pointer hover:opacity-80 transition-opacity"
                style={{ top: "calc(50% + 1px)" }}
                onClick={onToggleExpanded}
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 18 18"
                >
                  <g>
                    <path
                      d={leftNavSvgPaths.p1cebca00}
                      fill="#9497A1"
                    />
                  </g>
                </svg>
              </div>
              
              {/* Pages Text */}
              <div
                className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] left-2 not-italic text-[#ffffff] text-[16px] text-left text-nowrap"
                style={{ top: "calc(50% - 9px)" }}
              >
                <p className="block leading-[18px] whitespace-pre">Pages</p>
              </div>
            </div>
            <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
        <div className="absolute border-[#505767] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

// Functional Zoom Controls Component
function FunctionalZoomControls({ 
  zoom, 
  onZoomChange 
}: {
  zoom: number;
  onZoomChange: (value: number) => void;
}) {
  const handleZoomOut = () => {
    const newZoom = Math.max(25, zoom - 25);
    onZoomChange(newZoom);
  };

  const handleZoomIn = () => {
    const newZoom = Math.min(400, zoom + 25);
    onZoomChange(newZoom);
  };

  const handleSliderClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newZoom = Math.round(25 + (percentage * (400 - 25)));
    const clampedZoom = Math.max(25, Math.min(400, newZoom));
    onZoomChange(clampedZoom);
  };

  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      {/* Zoom Out Button - 16px */}
      <button 
        onClick={handleZoomOut}
        className="relative shrink-0 hover:bg-[#505767] rounded p-0.5 transition-colors flex items-center justify-center"
        style={{ width: '16px', height: '16px' }}
      >
        <svg 
          className="block" 
          fill="none" 
          preserveAspectRatio="xMidYMid meet" 
          role="presentation" 
          viewBox="0 0 16 16"
          style={{ width: '16px', height: '16px' }}
        >
          <g>
            <path clipRule="evenodd" d={zoomSvgPaths.p1302d900} fill="#9497A1" fillRule="evenodd" />
          </g>
        </svg>
      </button>
      
      {/* Interactive Slider - 16px height */}
      <div 
        className="relative shrink-0 w-[85px] cursor-pointer flex items-center"
        style={{ height: '16px' }}
        onClick={handleSliderClick}
      >
        <svg 
          className="block" 
          fill="none" 
          preserveAspectRatio="none" 
          viewBox="0 0 85 16"
          style={{ width: '85px', height: '16px' }}
        >
          <g>
            {/* Base track */}
            <rect fill="#9497A1" height="2" rx="1" width="85" y="7" />
            {/* Fill based on zoom percentage */}
            <rect 
              fill="#3874FF" 
              height="2" 
              rx="1" 
              width={85 * ((zoom - 25) / (400 - 25))} 
              y="7" 
            />
            {/* Slider thumb */}
            <circle 
              cx={85 * ((zoom - 25) / (400 - 25))} 
              cy="8" 
              fill="#3874FF" 
              r="6" 
            />
          </g>
        </svg>
      </div>
      
      {/* Zoom In Button - 16px */}
      <button 
        onClick={handleZoomIn}
        className="relative shrink-0 hover:bg-[#505767] rounded p-0.5 transition-colors flex items-center justify-center"
        style={{ width: '16px', height: '16px' }}
      >
        <svg 
          className="block" 
          fill="none" 
          preserveAspectRatio="xMidYMid meet" 
          viewBox="0 0 16 16"
          style={{ width: '16px', height: '16px' }}
        >
          <g>
            <path d={zoomSvgPaths.p17180a00} fill="#9497A1" />
          </g>
        </svg>
      </button>
    </div>
  );
}

// Enhanced Toolbar with Zoom Slider, Rotation, and Close Button
function EnhancedToolbar({ 
  zoom, 
  onZoomChange, 
  rotation, 
  onRotateClockwise,
  onRotateAnticlockwise,
  onClose,
  currentPage,
  pdfPages,
  leftSidebarWidth,
  rightSidebarWidth,
  onToggleLeftSidebar,
  onToggleRightSidebar
}: {
  zoom: number;
  onZoomChange: (value: number) => void;
  rotation: number;
  onRotateClockwise: () => void;
  onRotateAnticlockwise: () => void;
  onClose?: () => void;
  currentPage: number;
  pdfPages: any[];
  leftSidebarWidth: string;
  rightSidebarWidth: string;
  onToggleLeftSidebar: () => void;
  onToggleRightSidebar: () => void;
}) {

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full" style={{ height: '48px' }}>
      <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      
      {/* Files Section */}
      <div 
        className="bg-[#202433] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[9px] relative shrink-0 border-r border-[#505767] cursor-pointer hover:bg-[#2a3441] transition-colors" 
        style={{ width: '76px', height: '48px' }}
        onClick={onToggleLeftSidebar}
      >
        <div className="absolute border-[#505767] border-[0px_0px_1px_0px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
          <p className="block leading-[18px] whitespace-pre">Files</p>
        </div>
      </div>

      {/* Main Toolbar */}
      <div className="basis-0 bg-[#2d364d] grow h-12 min-h-px min-w-px relative shrink-0" style={{ height: '48px' }}>
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-between pl-0 pr-3 py-0 relative w-full" style={{ height: '48px' }}>
            
            {/* Left Side Controls */}
            <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
              {/* Pages Navigation */}
              <div 
                className="bg-[#2d364d] box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[9px] absolute shrink-0 border-r border-[#505767] cursor-pointer hover:bg-[#3d4757] transition-colors" 
                style={{ width: '76px', height: '48px', left: '0px' }}
                onClick={onToggleRightSidebar}
              >
                <div className="absolute border-[#505767] border-[0px_0px_1px_0px] border-solid inset-0 pointer-events-none" />
                <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
                  <p className="block leading-[18px] whitespace-pre">Pages</p>
                </div>
              </div>

              {/* Invoice Document Dropdown - positioned 8px after pages block */}
              <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-[4px] absolute shrink-0 w-[196px]" style={{ left: 'calc(76px + 8px)' }}>
                <div className="absolute border-[#505767] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
                <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
                  <p className="block leading-[16px] overflow-inherit">Invoice Document</p>
                </div>
                <div className="relative shrink-0 size-4">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p32976780} fill="#9497A1" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Side Controls */}
            <div className="box-border content-stretch flex flex-row gap-3 items-center justify-end p-0 relative shrink-0">
              
              {/* Zoom Controls */}
              <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
                  
                  {/* Figma Zoom Controls */}
                  <FunctionalZoomControls 
                    zoom={zoom}
                    onZoomChange={onZoomChange}
                  />
                  
                  {/* Zoom Percentage */}
                  <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
                    <p className="block leading-[16px] whitespace-pre">{zoom}%</p>
                  </div>
                </div>

                {/* Rotation Buttons */}
                <div className="flex items-center gap-1">
                  {/* Anticlockwise Rotation Button */}
                  <button 
                    onClick={onRotateAnticlockwise}
                    className="relative shrink-0 hover:bg-[#505767] rounded transition-colors flex items-center justify-center"
                    style={{ width: '18px', height: '18px' }}
                  >
                    <div className="transform scale-x-[-1]" style={{ width: '18px', height: '18px' }}>
                      <IconSkeleton2 />
                    </div>
                  </button>
                  
                  {/* Clockwise Rotation Button */}
                  <button 
                    onClick={onRotateClockwise}
                    className="relative shrink-0 hover:bg-[#505767] rounded transition-colors flex items-center justify-center"
                    style={{ width: '18px', height: '18px' }}
                  >
                    <div style={{ width: '18px', height: '18px' }}>
                      <IconSkeleton2 />
                    </div>
                  </button>
                </div>

                {/* Close Button */}
                {onClose && (
                  <button
                    onClick={onClose}
                    className="bg-[rgba(56,116,255,0.1)] border border-[#3874ff] text-[#3874ff] px-2 py-1 rounded text-[14px] font-semibold hover:bg-[rgba(56,116,255,0.2)] transition-colors"
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EnhancedPdfViewer({ 
  selectedPdf, 
  onClose, 
  initialZoom = 110, 
  initialRotation = 0 
}: EnhancedPdfViewerProps) {
  const [zoom, setZoom] = useState(initialZoom);
  const [rotation, setRotation] = useState(initialRotation);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [leftSidebarExpanded, setLeftSidebarExpanded] = useState(false);
  const [rightSidebarExpanded, setRightSidebarExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTop = useRef(0);

  // PDF pages data
  const pdfPages = [
    { id: 1, image: invoicePage1, label: '1' },
    { id: 2, image: invoicePage2, label: '2' }
  ];

  const currentPageData = pdfPages.find(page => page.id === currentPage) || pdfPages[0];

  // Calculate sidebar widths
  const leftSidebarWidth = leftSidebarExpanded ? '216px' : '76px';
  const rightSidebarWidth = rightSidebarExpanded ? '216px' : '76px';
  const totalSidebarWidth = `calc(${leftSidebarWidth} + ${rightSidebarWidth})`;

  // Calculate if scrollbars should be shown based on container size and zoom
  const shouldShowScrollbars = () => {
    if (!containerSize.width || !containerSize.height) return false;
    
    const pdfWidth = 600;
    const pdfHeight = 800;
    const padding = 40;
    
    const availableWidth = containerSize.width - padding;
    const availableHeight = containerSize.height - padding;
    
    const scaledWidth = pdfWidth * (zoom / 100);
    const scaledHeight = pdfHeight * (zoom / 100);
    
    return scaledWidth > availableWidth || scaledHeight > availableHeight;
  };

  const showScrollbars = shouldShowScrollbars();

  const handleRotateClockwise = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleRotateAnticlockwise = () => {
    setRotation((prev) => (prev - 90 + 360) % 360);
  };

  // Handle scroll-based page navigation
  const handleScroll = (event: Event) => {
    const target = event.target as HTMLDivElement;
    const scrollTop = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    const clientHeight = target.clientHeight;
    
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Determine scroll direction
    const scrollDirection = scrollTop > lastScrollTop.current ? 'down' : 'up';
    lastScrollTop.current = scrollTop;
    
    // Set a timeout to handle page change after scroll stops
    scrollTimeoutRef.current = setTimeout(() => {
      const scrollPosition = scrollTop / (scrollHeight - clientHeight);
      
      if (scrollDirection === 'down') {
        // Scrolled to bottom 80% and not on last page
        if (scrollPosition > 0.8 && currentPage < pdfPages.length) {
          setCurrentPage(prev => Math.min(prev + 1, pdfPages.length));
          // Reset scroll to top after page change
          setTimeout(() => {
            if (target) {
              target.scrollTop = 0;
            }
          }, 50);
        }
      } else if (scrollDirection === 'up') {
        // Scrolled to top 20% and not on first page
        if (scrollPosition < 0.2 && currentPage > 1) {
          setCurrentPage(prev => Math.max(prev - 1, 1));
          // Reset scroll to bottom after page change
          setTimeout(() => {
            if (target) {
              target.scrollTop = target.scrollHeight - target.clientHeight;
            }
          }, 50);
        }
      }
    }, 150); // Debounce scroll events
  };

  // Measure container size and setup scroll listener
  useEffect(() => {
    const measureContainer = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    };

    // Initial measurement with delay to ensure layout is complete
    const timer = setTimeout(measureContainer, 100);

    // Handle window resize
    const handleResize = () => {
      measureContainer();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [leftSidebarExpanded, rightSidebarExpanded]);

  // Setup scroll event listener for page navigation
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, [currentPage, pdfPages.length]);

  return (
    <div className="bg-[#f6f9ff] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full">
      
      {/* Enhanced Toolbar */}
      <EnhancedToolbar 
        zoom={zoom}
        onZoomChange={setZoom}
        rotation={rotation}
        onRotateClockwise={handleRotateClockwise}
        onRotateAnticlockwise={handleRotateAnticlockwise}
        onClose={onClose}
        currentPage={currentPage}
        pdfPages={pdfPages}
        leftSidebarWidth={leftSidebarWidth}
        rightSidebarWidth={rightSidebarWidth}
        onToggleLeftSidebar={() => setLeftSidebarExpanded(!leftSidebarExpanded)}
        onToggleRightSidebar={() => setRightSidebarExpanded(!rightSidebarExpanded)}
      />

      {/* Body Content */}
      <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0 w-full">
        
        {/* Left Sidebar */}
        <LeftSidebar 
          isExpanded={leftSidebarExpanded}
          onToggleExpanded={() => setLeftSidebarExpanded(!leftSidebarExpanded)}
        />
        
        {/* Right Sidebar */}
        <RightSidebar 
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          pdfPages={pdfPages}
          isExpanded={rightSidebarExpanded}
          onToggleExpanded={() => setRightSidebarExpanded(!rightSidebarExpanded)}
          leftSidebarWidth={leftSidebarWidth}
        />
        
        {/* Main PDF Display Area */}
        <div 
          ref={containerRef}
          className={`absolute bg-[#f0f2f5] flex items-center justify-center ${showScrollbars ? 'overflow-auto' : 'overflow-auto'}`}
          style={{ 
            left: totalSidebarWidth,
            right: '0',
            top: '0',
            bottom: '0'
          }}
        >
          <div 
            className="bg-white shadow-lg transition-all duration-300"
            style={{ 
              transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
              transformOrigin: 'center center',
              width: '600px',
              height: showScrollbars ? `${800 * 1.5}px` : '800px', // Add extra height for scroll navigation
              minWidth: showScrollbars ? `${600 * (zoom / 100)}px` : '600px',
              minHeight: showScrollbars ? `${800 * 1.5}px` : '800px',
              paddingBottom: showScrollbars ? '400px' : '0' // Extra padding for scroll area
            }}
          >
            <img 
              src={currentPageData.image}
              alt={`PDF Document - Page ${currentPage}`}
              className="block"
              style={{ 
                width: '600px',
                height: '800px',
                objectFit: 'contain'
              }}
            />
            
            {/* Page Navigation Indicator */}
            {showScrollbars && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm pointer-events-none">
                {currentPage < pdfPages.length ? "Scroll down for next page" : "End of document"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}