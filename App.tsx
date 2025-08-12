import React, { useState, useEffect } from 'react';
import JobListPage from './components/JobListPage';
import JobDetailsPage from './components/JobDetailsPage';
import LoginPageComponent from './imports/1-35-25483';
import { Toaster } from './components/ui/sonner';

// File interface for better typing
interface FileItem {
  id: string;
  name: string;
  type: string;
  size: number;
  url?: string;
  uploadedAt?: string;
}

// Job data interface
interface JobData {
  jobNumber: string;
  createdAt: string;
  status: string;
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
  transactionRefNo: string;
  jobNo: string;
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
  icegateId: string;
  importerType: string;
  files: FileItem[];
}

// Extend Window interface for Maze integration
declare global {
  interface Window {
    mazeUniversalSnippetApiKey?: string;
  }
}

// Functional Login Wrapper Component
function FunctionalLoginPage({ onLogin }: { onLogin: () => void }) {
  const [credentials, setCredentials] = useState({
    org: '',
    username: '', 
    password: ''
  });

  const handleLogin = () => {
    // Check hardcoded credentials
    if (credentials.org === 'UNI' && credentials.username === 'admin' && credentials.password === 'admin') {
      onLogin();
    } else {
      alert('Invalid credentials. Please enter:\n• Organization: UNI\n• Username: admin\n• Password: admin');
    }
  };

  return (
    <div className="w-full h-full relative">
      {/* Base Login Component with functional textfield */}
      <LoginPageComponent 
        orgValue={credentials.org}
        onOrgChange={(value: string) => setCredentials(prev => ({ ...prev, org: value }))}
        usernameValue={credentials.username}
        onUsernameChange={(value: string) => setCredentials(prev => ({ ...prev, username: value }))}
        passwordValue={credentials.password}
        onPasswordChange={(value: string) => setCredentials(prev => ({ ...prev, password: value }))}
        onSignIn={handleLogin}
      />
      
      {/* Make Sign In Button Functional */}
      <div 
        className="absolute cursor-pointer pointer-events-auto z-10"
        style={{
          left: 'calc(50% + 222px)',
          top: 'calc(50% + 150px)',
          width: '444px',
          height: '44px',
          transform: 'translateX(-50%)'
        }}
        onClick={handleLogin}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleLogin();
          }
        }}
      >
        {/* Invisible clickable area over the Sign In button */}
      </div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<'jobList' | 'jobDetails'>('jobList');
  const [currentJobData, setCurrentJobData] = useState<JobData | null>(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('jobList');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('jobList');
    setCurrentJobData(null);
  };

  const handleCreateJob = () => {
    // Generate a new job with default CB Details and navigate directly to Job Details page
    const newJobData: JobData = {
      jobNumber: `ICB/${Math.floor(Math.random() * 99999) + 10000}/2025-26`,
      createdAt: new Date().toISOString(),
      status: 'In Progress',
      
      // CB Details - Default Values
      cbBranch: 'Unifo Private Limited',
      cbCode: 'AABLI4333MCH001',
      branch: '001',
      city: 'Chennai',
      address: 'Unifo Private Limited.\n5th-Floor, Tower C, Rattha Tek Meadows,\nNo. 51, Rajiv Gandhi Salai,\nSholinganallur, Chennai, Tamil Nadu,\nIndia.',
      state: 'Tamil Nadu',
      country: 'India',
      pincode: '600119',
      branchName: '',
      aeoRegNo: '',
      aeoRole: '',
      icgateId: '',
      submittedBy: '',
      assignedTo: [],
      transactionRefNo: '',
      
      // Job Info - Empty by default except for job number which matches main job number
      jobNo: `ICB/${Math.floor(Math.random() * 99999) + 10000}/2025-26`,
      jobDate: '',
      beNumber: '',
      beDate: '',
      priorBE: '',
      modeOfTransport: '',
      beType: '',
      transactionRefNo: '',
      customsHouseCd: '',
      customerRefNo: '',
      assessableValue: '',
      dutyPayable: '',
      ucrNo: '',
      ucrType: '',
      kacchaBE: '',
      greenChannel: '',
      section48: '',
      section48Reason: '',
      firstCheck: '',
      firstCheckReason: '',
      provisionalAssess: '',
      paReason: '',
      miscLoad: '',
      paytMthodCd: '',
      portOfOrigin: '',
      countryOfOrigin: '',
      portOfShipment: '',
      consCountry: '',
      remarks: '',
      addCharges: '',
      hssTransaction: '',
      importerAddress: '',
      iecPanBr: '',
      importerId: '',
      importerCity: '',
      importerPincode: '',
      countryPin: '',
      adCode: '',
      icegateId: '',
      importerType: '',
      files: []
    };
    
    setCurrentJobData(newJobData);
    setCurrentPage('jobDetails');
  };

  const handleBackToJobList = () => {
    setCurrentPage('jobList');
    setCurrentJobData(null);
  };

  // Initialize Maze research tool
  useEffect(() => {
    // Maze Universal Snippet with proper TypeScript support
    const initializeMaze = () => {
      let sessionValue: string | null = null;
      
      try {
        sessionValue = window.sessionStorage.getItem('maze-us');
      } catch (error) {
        // Silently handle sessionStorage errors
        sessionValue = null;
      }

      if (!sessionValue) {
        sessionValue = new Date().getTime().toString();
        try {
          window.sessionStorage.setItem('maze-us', sessionValue);
        } catch (error) {
          // Silently handle sessionStorage errors
        }
      }

      const script = document.createElement('script');
      script.src = 'https://snippet.maze.co/maze-universal-loader.js?apiKey=f5d0d3ba-f6de-4441-83a6-06ce331c3c54';
      script.async = true;
      
      const head = document.getElementsByTagName('head')[0];
      if (head) {
        head.appendChild(script);
      }
      
      window.mazeUniversalSnippetApiKey = 'f5d0d3ba-f6de-4441-83a6-06ce331c3c54';
    };

    initializeMaze();
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="w-screen h-screen">
        <FunctionalLoginPage onLogin={handleLogin} />
      </div>
    );
  }

  if (currentPage === 'jobDetails') {
    return (
      <div className="w-screen h-screen">
        <JobDetailsPage 
          onLogout={handleLogout}
          onBackToJobList={handleBackToJobList}
          onCreateJob={handleCreateJob}
          jobData={currentJobData}
        />
        <Toaster />
      </div>
    );
  }

  return (
    <div className="w-screen h-screen">
      <JobListPage 
        onLogout={handleLogout}
        onCreateJob={handleCreateJob}
      />
      <Toaster />
    </div>
  );
}

export default App;