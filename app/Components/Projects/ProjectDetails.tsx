import React, {useState} from 'react';
import Comments from '../NewsFeed/Comments/Comments';
import ProjectDetailsTab from './ProjectDetailsTab';
import Leaderboard from './Leaderboard';
import ProjectFAQs from './ProjectFAQs';

interface ProjectDetailsProps {
  projectId: number;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId }) => {
    const [activeTab, setActiveTab] = useState('Project Details');
    const renderTabContent = () => {
  switch (activeTab) {
    case 'Project Details':
        return <ProjectDetailsTab />
    
    case 'Leaderboard':
      return <Leaderboard/>

    case 'Project Wall':
      return (
        <div className="bg-white rounded-lg shadow-md p-4">
          {/*return <ProjectWall/>*/}
        </div>
      );
    case 'FAQs':
      return <ProjectFAQs/>
    default:
      return null;
  }
};

  return (
    <div className="max-w-full">
      <nav className="flex space-x-4 text-green-600 text-sm font-semibold mb-4">
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
        <button className="border border-gray-300 text-xs rounded-md px-4 py-1">
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
