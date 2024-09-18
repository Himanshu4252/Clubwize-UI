import React,{useState} from 'react';
import IssuesTab from './IssuesTab';
import SolTab from './SolTab';
import { liveIssues } from './SolData';

const Tabs: React.FC<{ onTabChange: (tab: string) => void }> = ({ onTabChange }) => {
    const [activeTab, setActiveTab] = useState<string>('Issues');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        onTabChange(tab);
    };

    return (
        <div className="flex space-x-4 mb-6 border-b-2 border-gray-300">
            {['Issues', 'Solutions(182)'].map(tab => (
                <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`py-1.5 text-sm ${activeTab === tab ? 'text-[#22B573] border-b-4 border-[#22B573]' : 'text-gray-800'}`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

const ViewIssues: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<string>('Issues');

    const handleTabChange = (tab: string) => {
        setSelectedTab(tab);
    };
    return (
        <div >
             <div className="text-sm text-gray-400 mb-3">
  <span className="underline text-gray-800">
    <a href="/main/Issues" className="text-gray-800 hover:text-blue-600">Issues</a>
  </span>
 &gt; Seeking Strategies for Success </div>
           <Tabs onTabChange={handleTabChange} />
            {selectedTab === 'Issues' && <IssuesTab />}
            {selectedTab === 'Solutions(182)' &&<SolTab issues={liveIssues} />}
        </div>
    );
};

export default ViewIssues;
