'use client';
import React, { useState, useRef, useEffect } from 'react';
import ActiveRules from './ActiveRules/page'
import AllRules from './AllRules/page'
import GlobalLibrary from './GlobalRules/page';
import MyRules from './MyRules/page';


const Rules: React.FC = () => {

  const [activeTab, setActiveTab] = useState<string>('Active Rules(12)');
  

  useEffect(() => {
    handleTabChange('Active Rules(12)');
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Active Rules(12)':
        return <ActiveRules />;
      case 'All Rules(182)':
        return <AllRules />;
      case 'Global Library(2M)':
        return <GlobalLibrary/>;
      case 'My rules(36)':
        return <MyRules/>;
      default:
        return null;
    };
  }

  return (
  <>
    <div className="p-2 overflow-x-auto max-w-full">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-800 flex items-center">
          Rules and Regulations
          <span className="ml-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.38321 0 0 5.38321 0 12.0001C0 18.6169 5.38321 24 12 24C18.6168 24 24 18.6169 24 12C24 5.38314 18.6168 0 12 0ZM12 21.981C6.49646 21.981 2.01896 17.5036 2.01896 12.0001C2.01896 6.49653 6.49646 2.01896 12 2.01896C17.5035 2.01896 21.981 6.49646 21.981 12.0001C21.981 17.5037 17.5035 21.981 12 21.981Z" fill="#212529"/>
            <path d="M11.9998 4.50586C9.60532 4.50586 7.65723 6.45395 7.65723 8.84843C7.65723 9.40593 8.1092 9.85791 8.66671 9.85791C9.22421 9.85791 9.67618 9.40593 9.67618 8.84843C9.67618 7.5672 10.7186 6.52482 11.9998 6.52482C13.281 6.52482 14.3234 7.5672 14.3234 8.84843C14.3234 10.1297 13.281 11.172 11.9998 11.172C11.4423 11.172 10.9903 11.624 10.9903 12.1815V14.464C10.9903 15.0215 11.4423 15.4734 11.9998 15.4734C12.5573 15.4734 13.0093 15.0215 13.0093 14.464V13.0726C14.9186 12.6163 16.3424 10.8955 16.3424 8.84836C16.3424 6.45395 14.3943 4.50586 11.9998 4.50586Z" fill="#212529"/>
            <path d="M12.0001 19.3069C12.7806 19.3069 13.4133 18.6742 13.4133 17.8937C13.4133 17.1132 12.7806 16.4805 12.0001 16.4805C11.2196 16.4805 10.5869 17.1132 10.5869 17.8937C10.5869 18.6742 11.2196 19.3069 12.0001 19.3069Z" fill="#212529"/>
            </svg>

          </span>
        </h1>
        <p className="text-gray-500 text-xs mt-1">
          Lorem ipsum dolor sit amet consectetur. Congue varius lorem at egestas. Iaculis semper risus sit egestas.
        </p>
      </div>
        <>
         <div className="flex space-x-5 mb-6 border-b-2 border-gray-300">
  {['Active Rules(12)', 'All Rules(182)', 'Global Library(2M)', 'My rules(36)'].map(tab => (
    <button
      key={tab}
      onClick={() => handleTabChange(tab)}
      className={`py-1.5 text-sm ${activeTab === tab ? 'text-[#22B573] border-b-4 border-[#22B573]' : 'text-gray-800'}`}
    >
      {tab}
    </button>
  ))}
        </div>
        {renderTabContent()}

          <div className="mt-6 text-center flex items-center justify-center">
            <span className="text-gray-500 text-xs">Total 85 items</span>
            <div className="flex items-center ml-4 hover:bg-[#FFFFFF00]">
              <button className="px-3 py-1.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs">&lt;</button>
              <button className="px-3 py-1.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs">1</button>
              <button className="px-3 py-1.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs">...</button>
              <button className="px-3 py-1.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs">4</button>
              <button className="px-4 py-3.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs"></button>
              <button className="px-4 py-3.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs"></button>
              <button className="px-3 py-1.5 border rounded bg-white hover:bg-[#FFFFFF00] text-xs">&gt;</button>

              <select className="px-3 py-2 ml-4 border rounded w-32 text-xs">
                <option value="" disabled selected>10 / page</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>

              <label className="ml-2 text-xs">Go to</label>
              <input
                type="number"
                placeholder=""
                className="px-3 py-1.5 border rounded w-20 text-xs"
              />
            </div>
          </div>
        </>
    </div>
  </>
  );
};

export default Rules;
