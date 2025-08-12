import React, { useState, useRef, useEffect, useCallback } from 'react';
import FunctionalGlobalNavigation from './FunctionalGlobalNavigation';
import SplitViewPdfLayout from './SplitViewPdfLayout';
import EnhancedPdfViewer from './EnhancedPdfViewer';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable';
import FunctionalLeftNav from './FunctionalLeftNav';
import JobDetailsForm from './JobDetailsForm';
import Frame42680Enhanced from './Frame42680Enhanced';

interface JobDetailsPageProps {
  onLogout: () => void;
  onBackToJobList: () => void;
  onCreateJob?: () => void;
  jobData?: any;
}

// Section components for each form section
function IGMDetailsSection() {
  return (
    <div id="igmDetails" className="bg-white rounded-lg shadow-sm mb-4">
      <div className="bg-[#dde3f2] px-4 h-10 rounded-t-lg border-b border-[#d0d5e3]">
        <div className="flex items-center justify-center gap-2 h-full">
          <h2 className="text-[16px] font-semibold text-[#050e25]">IGM Details</h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-[14px] text-[#626776] mb-4">IGM (Import General Manifest) details and configuration options will be displayed here.</p>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[14px] font-semibold text-[#050e25] mb-2">IGM Number</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-[#d0d5e3] rounded focus:outline-none focus:border-[#3874FF]"
                placeholder="Enter IGM Number"
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold text-[#050e25] mb-2">IGM Date</label>
              <input 
                type="date" 
                className="w-full px-3 py-2 border border-[#d0d5e3] rounded focus:outline-none focus:border-[#3874FF]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InvoiceDetailsSection() {
  return (
    <div id="invoiceDetails" className="bg-white rounded-lg shadow-sm mb-4">
      <div className="bg-[#dde3f2] px-4 h-10 rounded-t-lg border-b border-[#d0d5e3]">
        <div className="flex items-center justify-center gap-2 h-full">
          <h2 className="text-[16px] font-semibold text-[#050e25]">Invoice Details</h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-[14px] text-[#626776] mb-4">Invoice details, billing information, and related documentation.</p>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[14px] font-semibold text-[#050e25] mb-2">Invoice Number</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-[#d0d5e3] rounded focus:outline-none focus:border-[#3874FF]"
                placeholder="Enter Invoice Number"
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold text-[#050e25] mb-2">Invoice Date</label>
              <input 
                type="date" 
                className="w-full px-3 py-2 border border-[#d0d5e3] rounded focus:outline-none focus:border-[#3874FF]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[14px] font-semibold text-[#050e25] mb-2">Invoice Value</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-[#d0d5e3] rounded focus:outline-none focus:border-[#3874FF]"
                placeholder="Enter Invoice Value"
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold text-[#050e25] mb-2">Currency</label>
              <select className="w-full px-3 py-2 border border-[#d0d5e3] rounded focus:outline-none focus:border-[#3874FF]">
                <option>USD</option>
                <option>EUR</option>
                <option>INR</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemDetailsSection() {
  return (
    <div id="itemDetails" className="bg-white rounded-lg shadow-sm mb-4">
      <div className="bg-[#dde3f2] px-4 h-10 rounded-t-lg border-b border-[#d0d5e3]">
        <div className="flex items-center justify-center gap-2 h-full">
          <h2 className="text-[16px] font-semibold text-[#050e25]">Item Details</h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-[14px] text-[#626776] mb-4">Detailed information about imported items, quantities, and specifications.</p>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-[14px] font-semibold text-[#050e25] mb-2">Item Description</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-[#d0d5e3] rounded focus:outline-none focus:border-[#3874FF]"
                placeholder="Enter Item Description"
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold text-[#050e25] mb-2">Quantity</label>
              <input 
                type="number" 
                className="w-full px-3 py-2 border border-[#d0d5e3] rounded focus:outline-none focus:border-[#3874FF]"
                placeholder="Enter Quantity"
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold text-[#050e25] mb-2">Unit Price</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-[#d0d5e3] rounded focus:outline-none focus:border-[#3874FF]"
                placeholder="Enter Unit Price"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[14px] font-semibold text-[#050e25] mb-2">HS Code</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-[#d0d5e3] rounded focus:outline-none focus:border-[#3874FF]"
                placeholder="Enter HS Code"
              />
            </div>
            <div>
              <label className="block text-[14px] font-semibold text-[#050e25] mb-2">Country of Origin</label>
              <select className="w-full px-3 py-2 border border-[#d0d5e3] rounded focus:outline-none focus:border-[#3874FF]">
                <option>Select Country</option>
                <option>China</option>
                <option>USA</option>
                <option>Germany</option>
                <option>Japan</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportingDocsSection() {
  return (
    <div id="supportingDocs" className="bg-white rounded-lg shadow-sm mb-4">
      <div className="bg-[#dde3f2] px-4 h-10 rounded-t-lg border-b border-[#d0d5e3]">
        <div className="flex items-center justify-center gap-2 h-full">
          <h2 className="text-[16px] font-semibold text-[#050e25]">Supporting Documents</h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-[14px] text-[#626776] mb-4">Supporting documentation and additional required files for the import process.</p>
        <div className="space-y-4">
          <div className="border-2 border-dashed border-[#d0d5e3] rounded-lg p-8 text-center">
            <div className="mb-4">
              <svg className="mx-auto h-12 w-12 text-[#626776]" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-[14px] text-[#626776]">Drop files here or click to browse</p>
            <p className="text-[12px] text-[#9ca3af] mt-2">PDF, DOC, DOCX up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatementsSection() {
  return (
    <div id="statements" className="bg-white rounded-lg shadow-sm mb-4">
      <div className="bg-[#dde3f2] px-4 h-10 rounded-t-lg border-b border-[#d0d5e3]">
        <div className="flex items-center justify-center gap-2 h-full">
          <h2 className="text-[16px] font-semibold text-[#050e25]">Statements</h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-[14px] text-[#626776] mb-4">Financial statements and related documentation for the import transaction.</p>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[14px] font-semibold text-[#050e25] mb-2">Statement Type</label>
              <select className="w-full px-3 py-2 border border-[#d0d5e3] rounded focus:outline-none focus:border-[#3874FF]">
                <option>Bank Statement</option>
                <option>Financial Statement</option>
                <option>Tax Statement</option>
              </select>
            </div>
            <div>
              <label className="block text-[14px] font-semibold text-[#050e25] mb-2">Statement Date</label>
              <input 
                type="date" 
                className="w-full px-3 py-2 border border-[#d0d5e3] rounded focus:outline-none focus:border-[#3874FF]"
              />
            </div>
          </div>
          <div>
            <label className="block text-[14px] font-semibold text-[#050e25] mb-2">Reference Number</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-[#d0d5e3] rounded focus:outline-none focus:border-[#3874FF]"
              placeholder="Enter Reference Number"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function JobDetailsPage({ onLogout, onBackToJobList, onCreateJob, jobData }: JobDetailsPageProps) {
  const [activeTab, setActiveTab] = useState<'files' | 'jobDetails' | 'status'>('files');
  const [selectedPdf, setSelectedPdf] = useState<string | null>('sample_invoice.pdf');
  const [activeNavigationSection, setActiveNavigationSection] = useState('jobDetails');
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);

  // Refs for smooth scrolling to sections
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Throttle function for performance optimization
  const throttle = useCallback((func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    let lastExecTime = 0;
    return (...args: any[]) => {
      const currentTime = Date.now();

      if (currentTime - lastExecTime > delay) {
        func(...args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func(...args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  }, []);

  const handleNavigationClick = (section: string) => {
    setActiveNavigationSection(section);
    
    // Find the target element and scroll to it
    if (scrollContainerRef.current) {
      const targetElement = scrollContainerRef.current.querySelector(`#${section}`);
      if (targetElement) {
        const container = scrollContainerRef.current;
        const elementTop = (targetElement as HTMLElement).offsetTop;
        
        // Smooth scroll to the element with some offset for better visibility
        container.scrollTo({
          top: elementTop - 20, // 20px offset for better visual spacing
          behavior: 'smooth'
        });
      }
    }
  };

  // Enhanced scroll detection with better accuracy
  const detectActiveSection = useCallback(() => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollTop = container.scrollTop;
    const containerHeight = container.clientHeight;
    
    // All sections in order
    const sections = ['jobDetails', 'igmDetails', 'invoiceDetails', 'itemDetails', 'supportingDocs', 'statements'];
    
    let activeSection = 'jobDetails';
    let maxVisibility = 0;
    
    // Enhanced detection algorithm
    sections.forEach((sectionId) => {
      const element = container.querySelector(`#${sectionId}`) as HTMLElement;
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      // Calculate relative position within the scroll container
      const elementTop = element.offsetTop;
      const elementBottom = elementTop + element.offsetHeight;
      const viewportTop = scrollTop;
      const viewportBottom = scrollTop + containerHeight;
      
      // Calculate intersection
      const intersectionTop = Math.max(elementTop, viewportTop);
      const intersectionBottom = Math.min(elementBottom, viewportBottom);
      const intersectionHeight = Math.max(0, intersectionBottom - intersectionTop);
      
      // Calculate visibility percentage
      const visibility = intersectionHeight / Math.min(element.offsetHeight, containerHeight);
      
      // Special handling for sections at the very top or bottom
      const isNearTop = scrollTop <= elementTop + 50; // Within 50px of element start
      const isAtTop = intersectionTop <= viewportTop + 100; // Element starts within 100px of viewport top
      
      // Priority scoring
      let score = visibility;
      
      // Boost score for sections that are prominently visible at the top
      if (isAtTop && intersectionHeight > containerHeight * 0.3) {
        score += 0.3;
      }
      
      // Boost score for sections that are near the top of scroll
      if (isNearTop && visibility > 0.1) {
        score += 0.2;
      }
      
      if (score > maxVisibility) {
        maxVisibility = score;
        activeSection = sectionId;
      }
    });
    
    // Only update if the section actually changed
    if (activeSection !== activeNavigationSection) {
      setActiveNavigationSection(activeSection);
    }
  }, [activeNavigationSection]);

  // Throttled scroll handler for better performance
  const throttledScrollHandler = useCallback(
    throttle(detectActiveSection, 100),
    [detectActiveSection, throttle]
  );

  // Update active section based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Initial detection
    detectActiveSection();

    // Add scroll listener
    container.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    // Cleanup
    return () => {
      container.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [detectActiveSection, throttledScrollHandler]);

  const handleUpload = () => {
    console.log('Upload files clicked');
  };

  const handleClose = () => {
    console.log('Close clicked');
  };

  const renderScrollableSections = () => (
    <div 
      ref={scrollContainerRef}
      className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
      style={{ 
        scrollBehavior: 'smooth',
        height: 'calc(100vh - 96px)' // Account for top navigation and toolbar
      }}
    >
      {/* Job Details Section */}
      <div id="jobDetails">
        <JobDetailsForm jobData={jobData} activeSection={activeNavigationSection} />
      </div>

      {/* IGM Details Section */}
      <div id="igmDetails">
        <IGMDetailsSection />
      </div>

      {/* Invoice Details Section */}
      <div id="invoiceDetails">
        <InvoiceDetailsSection />
      </div>

      {/* Item Details Section */}
      <div id="itemDetails">
        <ItemDetailsSection />
      </div>

      {/* Supporting Documents Section */}
      <div id="supportingDocs">
        <SupportingDocsSection />
      </div>

      {/* Statements Section */}
      <div id="statements">
        <StatementsSection />
      </div>
    </div>
  );

  const renderNavigationAndForm = () => (
    <div className="flex flex-row h-full bg-[#C9D1E5] overflow-hidden">
      {/* Left Navigation - Completely Fixed */}
      <div className="flex-shrink-0 bg-[#C9D1E5] z-10 relative">
        <FunctionalLeftNav 
          activeSection={activeNavigationSection}
          onSectionClick={handleNavigationClick}
          onCreateJob={onCreateJob}
        />
      </div>
      
      {/* Scrollable Form Content - Independent of navigation */}
      <div className="flex-1 bg-[#C9D1E5] flex flex-col relative">
        {renderScrollableSections()}
      </div>
    </div>
  );

  return (
    <div className="w-full h-screen bg-[#CAD2E5] flex flex-col overflow-hidden">
      {/* Fixed Top Navigation Bar */}
      <div className="h-12 flex-shrink-0 z-20 relative">
        <FunctionalGlobalNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onBackToJobList={onBackToJobList}
          onLogout={onLogout}
          jobData={jobData}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-hidden">
        {activeTab === 'files' && (
          <div className="h-full">
            <SplitViewPdfLayout
              onUpload={handleUpload}
              onClose={handleClose}
              jobData={jobData}
            />
          </div>
        )}

        {activeTab === 'jobDetails' && (
          <div className="h-full bg-[#CAD2E5]">
            {isPdfViewerOpen ? (
              /* Resizable Split View when PDF viewer is open */
              <ResizablePanelGroup direction="horizontal" className="h-full">
                {/* Left Panel - PDF Viewer Component */}
                <ResizablePanel defaultSize={50} minSize={30} className="relative">
                  <div className="h-full bg-[#f6f9ff] relative">
                    <EnhancedPdfViewer
                      selectedPdf={selectedPdf}
                      onClose={() => {
                        setSelectedPdf(null);
                        setIsPdfViewerOpen(false);
                      }}
                      initialZoom={110}
                      initialRotation={0}
                    />
                  </div>
                </ResizablePanel>

                {/* Standard Resizable Handle */}
                <ResizableHandle withHandle className="w-[8px] bg-[#DDE3F2] hover:bg-blue-500 transition-colors duration-200" />

                {/* Right Panel - Contains Fixed Toolbar and Navigation + Form */}
                <ResizablePanel defaultSize={50} minSize={20}>
                  <div className="h-full bg-[#C9D1E5] relative flex flex-col overflow-hidden">
                    {/* Fixed Toolbar at the top */}
                    <div className="h-12 flex-shrink-0 relative z-10">
                      <Frame42680Enhanced onPdfClick={() => setIsPdfViewerOpen(!isPdfViewerOpen)} />
                    </div>
                    
                    {/* Navigation and Form Content */}
                    <div className="flex-1 overflow-hidden">
                      {renderNavigationAndForm()}
                    </div>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            ) : (
              /* Full width layout when PDF viewer is closed */
              <div className="h-full bg-[#C9D1E5] relative flex flex-col overflow-hidden">
                {/* Fixed Toolbar at the top */}
                <div className="h-12 flex-shrink-0 relative z-10">
                  <Frame42680Enhanced onPdfClick={() => setIsPdfViewerOpen(!isPdfViewerOpen)} />
                </div>
                
                {/* Navigation and Form Content */}
                <div className="flex-1 overflow-hidden">
                  {renderNavigationAndForm()}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'status' && (
          <div className="h-full flex items-center justify-center bg-[#f6f9ff]">
            <div className="text-center">
              <h3 className="text-[18px] font-semibold text-[#050e25] mb-2">Status</h3>
              <p className="text-[14px] text-[#626776]">Status information will be displayed here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}