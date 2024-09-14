import React, {useState} from 'react';
import Comments from '../NewsFeed/Comments/Comments';
import ProjectDetailsTab from './ProjectDetailsTab';
import Leaderboard from './Leaderboard';
import ProjectFAQs from './ProjectFAQs';
import ProjectsWall from './ProjectWall';

interface ProjectDetailsProps {
  projectId: number;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId }) => {
    const [activeTab, setActiveTab] = useState('Project Details');
    const handleGoBack = () => {
         window.history.back();
      };
    const renderTabContent = () => {
  switch (activeTab) {
    case 'Project Details':
        return <ProjectDetailsTab />
    
    case 'Leaderboard':
      return <Leaderboard/>

    case 'Project Wall':
      return <ProjectsWall/>
      
    case 'FAQs':
      return <ProjectFAQs/>
    default:
      return null;
  }
};

  return (
    <div className="max-w-full">
         <div className="text-sm text-gray-400 mb-3"><span className="underline text-gray-800">
    <a href="/main/Projects" className="text-gray-800 hover:text-blue-600">Projects</a>
  </span> &gt; Blood Donation</div>
      <nav className="flex space-x-4 text-green-600 text-sm  mb-4 border-b">
  {['Project Details', 'Leaderboard', 'Project Wall', 'FAQs'].map(tab => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`py-1.5 text-sm ${activeTab === tab ? 'text-[#22B573] border-b-4 border-[#22B573]' : 'text-gray-800'}`}
    >
      {tab}
    </button>
  ))}
</nav>
{renderTabContent()}
<div className="flex justify-between items-center mt-4">
        <button onClick={handleGoBack} className="border border-gray-300 text-xs rounded-md px-4 py-1">
          &lt; Previous Project
        </button>
        <button className="border border-gray-300 text-xs rounded-md px-4 py-1">
          Next Project &gt;
        </button>
      </div>
      <div className='mt-4'>
        <Comments />
      </div>
    
      </div>
    
  );
};

export default ProjectDetails;
