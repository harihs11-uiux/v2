import React, { useState } from 'react';
import ExpandableLeftNavigation from './ExpandableLeftNavigation';
import EnhancedFilesTable from './EnhancedFilesTable';
import EnhancedPdfViewer from './EnhancedPdfViewer';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable';
import pdfIconActive from 'figma:asset/af23aeff11778c5dcbfeb3488dca2d258cf7b215.png';
import pdfIconInactive from 'figma:asset/fc1aef34e20afa4adc53177a0b00344e2307f634.png';
import xlsIconActive from 'figma:asset/98403181c2e075cac61c01060c4a7def411338b1.png';
import xlsIconInactive from 'figma:asset/5259d57a77bfe17ae34a0155872f5ee4b078338d.png';

interface SplitViewPdfLayoutProps {
  onUpload: () => void;
  onClose: () => void;
  jobData?: any;
}

// Enhanced PDF Viewer Wrapper Component
function EnhancedPdfViewerWrapper({ 
  selectedPdf, 
  onClose,
  zoom,
  onZoomChange,
  rotation,
  onRotationChange
}: { 
  selectedPdf: string | null;
  onClose: () => void;
  zoom: number;
  onZoomChange: (zoom: number) => void;
  rotation: number;
  onRotationChange: (rotation: number) => void;
}) {
  return (
    <div className="w-full h-full bg-[#f6f9ff] relative">
      <EnhancedPdfViewer 
        selectedPdf={selectedPdf}
        onClose={onClose}
        initialZoom={zoom}
        initialRotation={rotation}
      />
    </div>
  );
}

// Files Table Toolbar Component
function FilesToolbar({ 
  jobData, 
  onUpload, 
  onClose, 
  activeNav, 
  onDownloadTemplate,
  isNavExpanded 
}: { 
  jobData?: any; 
  onUpload: () => void; 
  onClose: () => void; 
  activeNav: 'pdf' | 'xls'; 
  onDownloadTemplate?: () => void;
  isNavExpanded: boolean;
}) {
  const fileCount = jobData?.files?.length || 10;
  const fileTypeText = activeNav === 'pdf' ? 'PDF Files' : 'XL Files';
  const leftNavWidth = isNavExpanded ? 240 : 76; // Updated to match the actual nav widths from ExpandableLeftNavigation
  
  return (
    <div
      className="absolute bg-[#2d364d] box-border content-stretch flex flex-row items-center justify-between p-0 top-0 z-10 transition-all duration-300 ease-in-out"
      style={{ 
        left: `${leftNavWidth}px`, // No gap between left nav and toolbar
        right: '0px', // Extend to right edge of left frame container
        height: '45px'
      }}
    >
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0" style={{ height: '45px' }}>
        <div className="absolute border-0 border-[#eff0f1] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-between px-3 py-0 relative w-full" style={{ height: '45px' }}>
            <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
              <p className="block leading-[18px] whitespace-pre">
                Total {fileTypeText}: {fileCount}
              </p>
            </div>
            <div className="box-border content-stretch flex flex-row gap-3 items-center justify-end p-0 relative shrink-0">
              {activeNav === 'xls' && onDownloadTemplate && (
                <button
                  onClick={onDownloadTemplate}
                  className="bg-[rgba(56,116,255,0.1)] border border-[#3874ff] text-[#3874ff] px-2 py-1 rounded text-[14px] font-semibold hover:bg-[rgba(56,116,255,0.2)] transition-colors"
                >
                  Download template
                </button>
              )}
              <button
                onClick={onUpload}
                className="bg-[#3874ff] text-white px-2 py-1 rounded text-[14px] font-semibold hover:bg-[#2563eb] transition-colors flex items-center gap-1"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M9 1.5L9 12.5M4.5 7L9 1.5L13.5 7M3 16.5L15 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                Upload
              </button>
              <div className="w-px h-6 bg-[#505767]" />
              <button
                onClick={onClose}
                className="bg-[rgba(56,116,255,0.1)] border border-[#3874ff] text-[#3874ff] px-2 py-1 rounded text-[14px] font-semibold hover:bg-[rgba(56,116,255,0.2)] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SplitViewPdfLayout({ onUpload, onClose, jobData }: SplitViewPdfLayoutProps) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [activeNav, setActiveNav] = useState<'pdf' | 'xls'>('pdf');
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [hasPdfFiles, setHasPdfFiles] = useState(false);
  const [hasXlsFiles, setHasXlsFiles] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);

  const handleNavigationChange = (nav: 'pdf' | 'xls') => {
    setActiveNav(nav);
    setSelectedPdf(null);
  };

  const handleToggleExpanded = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handlePdfClick = (pdfPath: string) => {
    setSelectedPdf(pdfPath);
    setZoom(100); // Reset zoom when opening new PDF
    setRotation(0); // Reset rotation when opening new PDF
  };

  const handleClosePdf = () => {
    setSelectedPdf(null);
    setZoom(100);
    setRotation(0);
  };

  const handleUploadClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = activeNav === 'pdf' ? '.pdf' : '.xls,.xlsx';
    input.onchange = (event) => {
      const files = (event.target as HTMLInputElement).files;
      if (files) {
        console.log(`Selected ${files.length} ${activeNav} files:`, Array.from(files).map(f => f.name));
        if (activeNav === 'pdf') {
          setHasPdfFiles(true);
        } else {
          setHasXlsFiles(true);
        }
      }
    };
    input.click();
  };

  const handleDownloadTemplate = () => {
    console.log('Download template clicked');
    // Create and download a template file
    const link = document.createElement('a');
    link.download = 'data_capture_template.xlsx';
    link.href = 'data:application/vnd.ms-excel;base64,UEsDBBQAAAAAAAAA';
    link.click();
  };

  const leftNavWidth = isNavExpanded ? 240 : 76; // Updated to match actual component widths from ExpandableLeftNavigation

  return (
    <div className="h-full bg-[#CAD2E5]">
      {selectedPdf ? (
        // Resizable Split View when PDF is selected
        <ResizablePanelGroup direction="horizontal" className="h-full">
          {/* Left Panel - Files */}
          <ResizablePanel defaultSize={50} minSize={30} className="relative">
            <div className="h-full flex flex-col border-r border-[#D0D5E3] relative">
              {/* Left Navigation - positioned at top: -45px relative to left frame */}
              <div 
                className="absolute z-20 transition-all duration-300 ease-in-out"
                style={{ 
                  top: '-45px',
                  left: '0px',
                  height: 'calc(100% + 45px)'
                }}
              >
                <ExpandableLeftNavigation
                  isExpanded={isNavExpanded}
                  onToggleExpanded={handleToggleExpanded}
                  activeNav={activeNav}
                  onNavigationChange={handleNavigationChange}
                />
              </div>

              {/* Toolbar - positioned at top: 0px, adjusted for left nav */}
              <FilesToolbar
                jobData={jobData}
                onUpload={handleUploadClick}
                onClose={onClose}
                activeNav={activeNav}
                onDownloadTemplate={activeNav === 'xls' ? handleDownloadTemplate : undefined}
                isNavExpanded={isNavExpanded}
              />

              {/* File Table - positioned with 12px spacing on all sides */}
              <div 
                className="absolute transition-all duration-300 ease-in-out"
                style={{ 
                  top: '57px', // 12px below 45px toolbar (45px + 12px = 57px)
                  left: `${leftNavWidth + 12}px`, // 12px gap from right edge of left navigation (requirement: 12px between nav & file table)
                  right: '12px', // 12px from right boundary of left frame
                  bottom: '12px', // 12px from bottom boundary of left frame
                  height: 'calc(100% - 69px)' // Responsive height: total height - (57px top + 12px bottom)
                }}
              >
                <div className="h-full bg-white rounded-[8px] shadow-sm overflow-hidden">
                  <EnhancedFilesTable 
                    mode={activeNav}
                    onPdfClick={handlePdfClick}
                    isEmpty={activeNav === 'pdf' ? !hasPdfFiles : !hasXlsFiles}
                    onUploadClick={handleUploadClick}
                  />
                </div>
              </div>
            </div>
          </ResizablePanel>

          {/* Standard Resizable Handle */}
          <ResizableHandle withHandle className="w-[8px] bg-[#DDE3F2] hover:bg-blue-500 transition-colors duration-200" />

          {/* Right Panel - PDF Viewer */}
          <ResizablePanel defaultSize={50} minSize={20}>
            <div className="h-full bg-white relative">
              <EnhancedPdfViewerWrapper 
                selectedPdf={selectedPdf}
                onClose={handleClosePdf}
                zoom={zoom}
                onZoomChange={setZoom}
                rotation={rotation}
                onRotationChange={setRotation}
              />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      ) : (
        // Full Width View when no PDF is selected
        <div className="h-full flex relative">
          <div className="w-full flex flex-col border-r border-[#D0D5E3] relative">
            {/* Left Navigation - positioned at top: -45px relative to left frame */}
            <div 
              className="absolute z-20 transition-all duration-300 ease-in-out"
              style={{ 
                top: '-45px',
                left: '0px',
                height: 'calc(100% + 45px)'
              }}
            >
              <ExpandableLeftNavigation
                isExpanded={isNavExpanded}
                onToggleExpanded={handleToggleExpanded}
                activeNav={activeNav}
                onNavigationChange={handleNavigationChange}
              />
            </div>

            {/* Toolbar - positioned at top: 0px, adjusted for left nav */}
            <FilesToolbar
              jobData={jobData}
              onUpload={handleUploadClick}
              onClose={onClose}
              activeNav={activeNav}
              onDownloadTemplate={activeNav === 'xls' ? handleDownloadTemplate : undefined}
              isNavExpanded={isNavExpanded}
            />

            {/* File Table - positioned with 12px spacing on all sides */}
            <div 
              className="absolute transition-all duration-300 ease-in-out"
              style={{ 
                top: '57px', // 12px below 45px toolbar (45px + 12px = 57px)
                left: `${leftNavWidth + 12}px`, // 12px from right edge of left navigation
                right: '12px', // 12px from right boundary of left frame
                bottom: '12px', // 12px from bottom boundary of left frame
                height: 'calc(100% - 69px)' // Responsive height: total height - (57px top + 12px bottom)
              }}
            >
              <div className="h-full bg-white rounded-[8px] shadow-sm overflow-hidden">
                <EnhancedFilesTable 
                  mode={activeNav}
                  onPdfClick={handlePdfClick}
                  isEmpty={activeNav === 'pdf' ? !hasPdfFiles : !hasXlsFiles}
                  onUploadClick={handleUploadClick}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}