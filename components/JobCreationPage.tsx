import React, { useState } from 'react';
import JobListPage from './JobListPage';
import CreateJobSidebar from './CreateJobSidebar';

interface JobCreationPageProps {
  onLogout: () => void;
  onBackToJobList: () => void;
  onJobCreated?: (jobData: any) => void;
}

const JobCreationPage: React.FC<JobCreationPageProps> = ({ 
  onLogout, 
  onBackToJobList,
  onJobCreated 
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    onBackToJobList();
  };

  const handleCreateJob = (jobData: any) => {
    // Handle job creation logic here
    console.log('Creating job with data:', jobData);
    
    // Close sidebar and navigate to job details
    setIsSidebarOpen(false);
    
    // Call the onJobCreated callback if provided
    if (onJobCreated) {
      onJobCreated(jobData);
    }
  };

  return (
    <div className="w-full h-full relative">
      {/* Background Job List Page */}
      <JobListPage 
        onLogout={onLogout}
        onCreateJob={() => {}} // Empty function since we're already in creation mode
      />
      
      {/* Create Job Sidebar */}
      <CreateJobSidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        onSubmit={handleCreateJob}
      />
    </div>
  );
};

export default JobCreationPage;