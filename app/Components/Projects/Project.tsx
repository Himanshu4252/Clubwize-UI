'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import CreateProject from './CreateProject';
import ProjectDetails from './ProjectDetails';
import { ongoingProjects, allProjects, globalProjects, myProjects, ProjectData } from './ProjectData';
import MyProjects from './MyProjectsTab';

const Project: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('Ongoing Projects (182)');
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);


  const handleCreateNewProject = () => setShowForm(true);
  const handleCancel = () => setShowForm(false);
  
  const PopupMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    const handleIconClick = () => setIsOpen(!isOpen);

    const handleOptionClick = (option: string, projectId?: number) => {
        if (option === 'Select' && projectId !== undefined) {
          setSelectedProjectId(projectId);
        }
        console.log(`${option} clicked`);
        setIsOpen(false);
      };
      
   
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    return (
        <td className="p-3 text-xs text-center">
        <button onClick={handleIconClick}>
          <svg width="5" height="16" viewBox="0 0 5 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.49982 6.90839C1.34943 6.90839 0.408203 7.84961 0.408203 9C0.408203 10.1504 1.34943 11.0916 2.49982 11.0916C3.6502 11.0916 4.59143 10.1504 4.59143 9C4.59143 7.84961 3.6502 6.90839 2.49982 6.90839ZM2.49982 0.633545C1.34943 0.633545 0.408203 1.57477 0.408203 2.72516C0.408203 3.87555 1.34943 4.81677 2.49982 4.81677C3.6502 4.81677 4.59143 3.87555 4.59143 2.72516C4.59143 1.57477 3.6502 0.633545 2.49982 0.633545ZM2.49982 13.1832C1.34943 13.1832 0.408203 14.1245 0.408203 15.2748C0.408203 16.4252 1.34943 17.3665 2.49982 17.3665C3.6502 17.3665 4.59143 16.4252 4.59143 15.2748C4.59143 14.1245 3.6502 13.1832 2.49982 13.1832Z" fill="#495057"/>
          </svg>
        </button>
      
        {isOpen && ( 
          <div
            ref={popupRef}
            className="absolute mt-1 z-50 text-start right-[70vh] w-[20vh] bg-white border border-gray-300 rounded-lg shadow-lg"
          >
            <ul className="">
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Select', 0)}>
                Select
              </li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Edit')}>
                Edit
              </li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Copy Link')}>
                Copy Link
              </li>
              <li className="p-2 text-red-500 hover:bg-gray-100 cursor-pointer" onClick={() => handleOptionClick('Delete')}>
                Delete
              </li>
            </ul>
          </div>
        )}
      </td>
    );
  };

  useEffect(() => {
    handleTabChange('Ongoing Projects (182)');
  }, []);
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    switch (tab) {
      case 'Ongoing Projects (182)':
        setProjects(ongoingProjects);
        break;
      case 'All Projects (652)':
        setProjects(allProjects);
        break;
      case 'Global Projects (45k)':
        setProjects(globalProjects);
        break;
      case 'My Projects (2.36k)':
        setProjects(myProjects);
        break;
      default:
        setProjects([]);
    }
  };


  return (
    <div className="p-2 overflow-x-auto max-w-full">
      <div className="mb-4 mt-2">
        <h1 className="text-xl font-bold text-gray-800 flex items-center">
          Project
          <span className="ml-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0C5.38321 0 0 5.38321 0 12.0001C0 18.6169 5.38321 24 12 24C18.6168 24 24 18.6169 24 12C24 5.38314 18.6168 0 12 0ZM12 21.981C6.49646 21.981 2.01896 17.5036 2.01896 12.0001C2.01896 6.49653 6.49646 2.01896 12 2.01896C17.5035 2.01896 21.981 6.49646 21.981 12.0001C21.981 17.5037 17.5035 21.981 12 21.981Z" fill="#212529"/>
<path d="M11.9998 4.50586C9.60532 4.50586 7.65723 6.45395 7.65723 8.84843C7.65723 9.40593 8.1092 9.85791 8.66671 9.85791C9.22421 9.85791 9.67618 9.40593 9.67618 8.84843C9.67618 7.5672 10.7186 6.52482 11.9998 6.52482C13.281 6.52482 14.3234 7.5672 14.3234 8.84843C14.3234 10.1297 13.281 11.172 11.9998 11.172C11.4423 11.172 10.9903 11.624 10.9903 12.1815V14.464C10.9903 15.0215 11.4423 15.4734 11.9998 15.4734C12.5573 15.4734 13.0093 15.0215 13.0093 14.464V13.0726C14.9186 12.6163 16.3424 10.8955 16.3424 8.84836C16.3424 6.45395 14.3943 4.50586 11.9998 4.50586Z" fill="#212529"/>
<path d="M12.0001 19.3069C12.7806 19.3069 13.4133 18.6742 13.4133 17.8937C13.4133 17.1132 12.7806 16.4805 12.0001 16.4805C11.2196 16.4805 10.5869 17.1132 10.5869 17.8937C10.5869 18.6742 11.2196 19.3069 12.0001 19.3069Z" fill="#212529"/>
</svg>

          </span>
        </h1>
        <p className="text-gray-400 text-xs mt-1">
          Lorem ipsum dolor sit amet consectetur. Congue varius lorem at egestas. Iaculis semper risus sit egestas.
        </p>
      </div>
      {showForm ? (
        <CreateProject onCancel={handleCancel} />
      )  : selectedProjectId !== null ? (
        <ProjectDetails projectId={selectedProjectId} />
      ) : (
        <>
         <div className="flex space-x-4 mb-6 border-b-2 border-gray-300">
  {['Ongoing Projects (182)', 'All Projects (652)', 'Global Projects (45k)', 'My Projects (2.36k)'].map(tab => (
    <button
      key={tab}
      onClick={() => handleTabChange(tab)}
      className={`py-1.5 text-sm ${activeTab === tab ? 'text-[#22B573] border-b-4 border-[#22B573]' : 'text-gray-800'}`}
    >
      {tab}
    </button>
  ))}
</div>

          <div className="flex items-center justify-between mb-6">
            <button className="flex items-center bg-[#22B573] text-white px-8 py-1.5 rounded-md text-sm hover:bg-black" onClick={handleCreateNewProject}>
              <span className="">+ Create New Project</span>
            </button>

            <div className="flex items-center flex-1 mx-4">
              <div className="flex items-center border rounded-md px-3 py-1.5 bg-white flex-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 16.5005C11.2879 16.5005 12.0682 16.3453 12.7961 16.0438C13.5241 15.7423 14.1855 15.3003 14.7427 14.7431C15.2998 14.186 15.7418 13.5246 16.0433 12.7966C16.3448 12.0687 16.5 11.2884 16.5 10.5005C16.5 9.71257 16.3448 8.93236 16.0433 8.2044C15.7418 7.47645 15.2998 6.81501 14.7427 6.25786C14.1855 5.70071 13.5241 5.25875 12.7961 4.95723C12.0682 4.6557 11.2879 4.5005 10.5 4.5005C8.90872 4.5005 7.38259 5.13264 6.25737 6.25786C5.13216 7.38308 4.50002 8.9092 4.50002 10.5005C4.50002 12.0918 5.13216 13.6179 6.25737 14.7431C7.38259 15.8684 8.90872 16.5005 10.5 16.5005ZM16.82 15.4065L20.4 18.9865C20.4955 19.0788 20.5716 19.1892 20.6239 19.3113C20.6762 19.4333 20.7037 19.5645 20.7048 19.6973C20.7058 19.8301 20.6804 19.9618 20.63 20.0846C20.5797 20.2075 20.5053 20.3191 20.4114 20.4129C20.3174 20.5067 20.2057 20.5809 20.0828 20.6311C19.9599 20.6813 19.8282 20.7065 19.6954 20.7052C19.5626 20.704 19.4314 20.6763 19.3095 20.6238C19.1875 20.5713 19.0772 20.4951 18.985 20.3995L15.405 16.8195C13.7975 18.0674 11.7748 18.6557 9.74877 18.4647C7.72273 18.2737 5.84562 17.3178 4.49957 15.7916C3.15351 14.2653 2.4397 12.2834 2.50344 10.2494C2.56718 8.2154 3.40368 6.28213 4.84266 4.84315C6.28164 3.40417 8.21492 2.56767 10.2489 2.50393C12.283 2.44019 14.2648 3.154 15.7911 4.50005C17.3173 5.84611 18.2732 7.72322 18.4642 9.74926C18.6552 11.7753 18.0669 13.798 16.819 15.4055L16.82 15.4065Z" fill="#6C757D"/>
</svg>

                <input
                  type="text"
                  placeholder="Search for Projects..."
                  className="outline-none flex-1 ml-1 text-xs"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="p-2 bg-white border border-gray-200 flex items-center rounded-md justify-center">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.11111 16C6.75556 16 6.48889 15.913 6.13333 15.7391C5.6 15.3913 5.33333 14.8696 5.33333 14.2609V9.04348L0.533333 4.34783C0.177778 4 0 3.56522 0 3.13043V1.73913C0 0.782609 0.8 0 1.77778 0H14.2222C15.2 0 16 0.782609 16 1.73913V3.13043C16 3.56522 15.8222 4 15.4667 4.34783L10.6667 9.04348V13.3913C10.6667 14.087 10.3111 14.6087 9.68889 14.9565L7.91111 15.8261C7.64444 15.913 7.37778 16 7.11111 16ZM1.77778 1.73913V3.13043L6.57778 7.82609C6.93333 8.17391 7.11111 8.6087 7.11111 9.04348V14.2609L8.88889 13.3913V9.04348C8.88889 8.6087 9.06667 8.17391 9.42222 7.82609L14.2222 3.13043V1.73913H1.77778Z" fill="#6C757D"/>
</svg>

              </div>

              <div className="p-2 bg-white border border-gray-200 flex items-center rounded-md justify-center">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00077 0C0.735344 0 0.480799 0.120413 0.293115 0.334736C0.105441 0.549071 0 0.839761 0 1.14287C0 1.44599 0.105441 1.73668 0.293115 1.95101C0.480799 2.16533 0.735344 2.28575 1.00077 2.28575H12.0092C12.2746 2.28575 12.5292 2.16533 12.7168 1.95101C12.9045 1.73668 13.01 1.44599 13.01 1.14287C13.01 0.839761 12.9045 0.549071 12.7168 0.334736C12.5292 0.120413 12.2746 0 12.0092 0H1.00077ZM1.00077 4.57149C0.735344 4.57149 0.480799 4.69191 0.293115 4.90623C0.105441 5.12056 0 5.41125 0 5.71437C0 6.01748 0.105441 6.30817 0.293115 6.52251C0.480799 6.73683 0.735344 6.85724 1.00077 6.85724H8.00614C8.27154 6.85724 8.52613 6.73683 8.71378 6.52251C8.90142 6.30817 9.0069 6.01748 9.0069 5.71437C9.0069 5.41125 8.90142 5.12056 8.71378 4.90623C8.52613 4.69191 8.27154 4.57149 8.00614 4.57149H1.00077ZM1.00077 9.14299C0.735344 9.14299 0.480799 9.26345 0.293115 9.47774C0.105441 9.69203 0 9.98277 0 10.2859C0 10.589 0.105441 10.8797 0.293115 11.094C0.480799 11.3083 0.735344 11.4287 1.00077 11.4287H5.00383C5.26926 11.4287 5.5238 11.3083 5.71149 11.094C5.89916 10.8797 6.0046 10.589 6.0046 10.2859C6.0046 9.98277 5.89916 9.69203 5.71149 9.47774C5.5238 9.26345 5.26926 9.14299 5.00383 9.14299H1.00077ZM13.01 5.71437C13.01 5.41125 12.9045 5.12056 12.7168 4.90623C12.5292 4.69191 12.2746 4.57149 12.0092 4.57149C11.7438 4.57149 11.4892 4.69191 11.3016 4.90623C11.1139 5.12056 11.0084 5.41125 11.0084 5.71437V12.0985L9.71445 10.6207C9.5257 10.4125 9.27291 10.2973 9.01051 10.2999C8.74811 10.3025 8.49711 10.4228 8.31157 10.6347C8.12603 10.8466 8.02075 11.1332 8.01845 11.4328C8.01614 11.7325 8.11702 12.0212 8.29936 12.2367L11.3017 15.6654C11.4893 15.8797 11.7438 16 12.0092 16C12.2746 16 12.5291 15.8797 12.7167 15.6654L15.719 12.2367C15.9014 12.0212 16.0023 11.7325 16 11.4328C15.9977 11.1332 15.8924 10.8466 15.7068 10.6347C15.5213 10.4228 15.2703 10.3025 15.0079 10.2999C14.7455 10.2973 14.4927 10.4125 14.304 10.6207L13.01 12.0985V5.71437Z" fill="#6C757D"/>
</svg>

              </div>
            </div>
          </div>
          {activeTab === 'My Projects (2.36k)' ?(<MyProjects />):(
            <div>
          <table className="w-full bg-white rounded-lg shadow">
            <thead className="bg-[#F8F9FA] border border-[EAECF0]">
              <tr className='text-gray-500 text-xs font-light-medium'>
                <th className="text-left p-3 font-normal">No.</th>
                <th className="text-left p-3 font-normal">
  <span className="inline-block mr-1">Projects</span>
  <span className="inline-block">
    <svg width="7" height="10" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0.219668 4.32265C-0.0732226 4.6047 -0.0732226 5.06198 0.219668 5.34403C0.512566 5.62605 0.987437 5.62605 1.28033 5.34403L4.50001 2.2436L7.71969 5.34403C8.01257 5.62605 8.48747 5.62605 8.78034 5.34403C9.07322 5.06198 9.07322 4.6047 8.78034 4.32265L5.03034 0.711532C4.88971 0.576093 4.69891 0.5 4.50001 0.5C4.30111 0.5 4.11031 0.576093 3.96968 0.711532L0.219668 4.32265ZM8.78034 9.67736C9.07322 9.39533 9.07322 8.93802 8.78034 8.65599C8.48747 8.37397 8.01257 8.37397 7.71969 8.65599L4.50001 11.7564L1.28033 8.65599C0.987437 8.37397 0.512566 8.37397 0.219668 8.65599C-0.0732226 8.93802 -0.0732226 9.39533 0.219668 9.67736L3.96968 13.2885C4.26256 13.5705 4.73746 13.5705 5.03034 13.2885L8.78034 9.67736Z" fill="#6C757D"/>
    </svg>
  </span>
</th>
{activeTab === 'All Projects (652)'  ? (
        <th className="text-left p-3 font-normal">Status</th>
      ) : null}      

{activeTab === 'Ongoing Projects (182)'  ? (
        <th className="text-left p-3 font-normal flex items-center">
        <span className='mr-1'>Traction</span>
        <svg width="7" height="10" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.219668 4.32265C-0.0732226 4.6047 -0.0732226 5.06198 0.219668 5.34403C0.512566 5.62605 0.987437 5.62605 1.28033 5.34403L4.50001 2.2436L7.71969 5.34403C8.01257 5.62605 8.48747 5.62605 8.78034 5.34403C9.07322 5.06198 9.07322 4.6047 8.78034 4.32265L5.03034 0.711532C4.88971 0.576093 4.69891 0.5 4.50001 0.5C4.30111 0.5 4.11031 0.576093 3.96968 0.711532L0.219668 4.32265ZM8.78034 9.67736C9.07322 9.39533 9.07322 8.93802 8.78034 8.65599C8.48747 8.37397 8.01257 8.37397 7.71969 8.65599L4.50001 11.7564L1.28033 8.65599C0.987437 8.37397 0.512566 8.37397 0.219668 8.65599C-0.0732226 8.93802 -0.0732226 9.39533 0.219668 9.67736L3.96968 13.2885C4.26256 13.5705 4.73746 13.5705 5.03034 13.2885L8.78034 9.67736Z" fill="#6C757D"/>
        </svg>
      </th>
      ) :  <th className="text-left p-3 font-normal flex items-center">
      <span className='mr-1'>Posted Date</span>
      <svg width="7" height="10" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.219668 4.32265C-0.0732226 4.6047 -0.0732226 5.06198 0.219668 5.34403C0.512566 5.62605 0.987437 5.62605 1.28033 5.34403L4.50001 2.2436L7.71969 5.34403C8.01257 5.62605 8.48747 5.62605 8.78034 5.34403C9.07322 5.06198 9.07322 4.6047 8.78034 4.32265L5.03034 0.711532C4.88971 0.576093 4.69891 0.5 4.50001 0.5C4.30111 0.5 4.11031 0.576093 3.96968 0.711532L0.219668 4.32265ZM8.78034 9.67736C9.07322 9.39533 9.07322 8.93802 8.78034 8.65599C8.48747 8.37397 8.01257 8.37397 7.71969 8.65599L4.50001 11.7564L1.28033 8.65599C0.987437 8.37397 0.512566 8.37397 0.219668 8.65599C-0.0732226 8.93802 -0.0732226 9.39533 0.219668 9.67736L3.96968 13.2885C4.26256 13.5705 4.73746 13.5705 5.03034 13.2885L8.78034 9.67736Z" fill="#6C757D"/>
      </svg>
    </th>}  

                <th className="text-left p-3 font-normal">Posted by</th>
                <th className="text-left p-3 font-normal">Relevance Score</th>
                <th className="text-left p-3 font-normal">Action</th>
              </tr>
            </thead>
            <tbody>
  {projects && projects.length > 0 ? (
    projects.map(project => (
      <tr key={project.id} className="border-b">
        <td className="p-3 text-gray-500 text-xs">{project.id}</td>
        <td className="p-3 w-[10vh] text-xs">
          <div className="flex flex-col w-[20vh]">
            <div className="text-xs font-bold truncate">{project.title}</div>
            <p className="text-gray-500 text-xxs mt-1 truncate">{project.description}</p>
          </div>
        </td>
        {activeTab === 'All Projects (652)'  ? (
            <td className="p-3 text-xs"><span className={`inline-block px-3  text-xs font-normal border rounded-full 
              ${project.status === 'Live' ? 'border-green-700 text-green-800 bg-green-100' : 'border-gray-400 text-gray-400 bg-gray-100'}`}>
              {project.status}
          </span>
          </td>
          ) : null}
      {activeTab === 'Ongoing Projects (182)'  ? (
            <td className="p-3 text-[0.65rem] flex items-center">
            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.78648 13.098C5.81004 12.6586 5.18222 11.6876 5.18222 10.6169V6.59732H6.11629C6.70418 6.59759 7.2114 5.9583 6.95793 5.44232C6.21445 3.94005 5.13054 2.41919 4.19593 0.924312C3.87246 0.412437 3.15277 0.412437 2.82929 0.924312C1.89441 2.41919 0.810505 3.94005 0.067028 5.44232C-0.186722 5.95802 0.320505 6.59759 0.908669 6.59732H1.84027V10.6158C1.84027 12.191 3.11722 13.468 4.6925 13.468H6.70718C6.91554 13.468 6.97652 13.1836 6.78648 13.0983V13.098Z" fill="#495057"/>
    <path d="M7.21247 0.910093C8.18892 1.34951 8.81673 2.32048 8.81673 3.39126V7.41107H7.88267C7.29478 7.4108 6.78755 8.05009 7.04103 8.56607C7.7845 10.0683 8.86841 11.5892 9.80302 13.0841C10.1265 13.596 10.8462 13.596 11.1697 13.0841C12.1043 11.5895 13.1882 10.0686 13.9317 8.56607C14.1854 8.05037 13.6782 7.4108 13.09 7.41107H12.1584V3.39263C12.1584 1.81736 10.8815 0.540405 9.30618 0.540405H7.2915C7.08314 0.540405 7.02216 0.82478 7.2122 0.910093H7.21247Z" fill="#495057"/>
    </svg>
    <span className="ml-1">{project.traction}</span>
            </td>
          ) : <td className="p-3 text-[0.65rem] flex items-center">
        
          <span className="ml-1">{project.postedDate}</span>
        </td>}

        <td className="p-3 text-[0.65rem]">
          <div className="flex items-center">
            <Image src={project.avatar} alt="Posted By" width={20} height={20} className="rounded-full" />
            <span className="ml-2">{project.postedBy}</span>
          </div>
        </td>
        <td className="p-3 text-xs flex items-center font-bold">
          <div className="flex items-center mr-4">
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5.56775 6.22136H3.14234C2.57448 6.22253 2.03017 6.47517 1.62863 6.92395C1.22709 7.37273 1.00104 7.98107 1 8.61574V15.1547C1.00104 15.7894 1.22709 16.3977 1.62863 16.8465C2.03017 17.2953 2.57448 17.5479 3.14234 17.5491H14.3361C14.8388 17.5488 15.3254 17.3511 15.7109 16.9905C16.0964 16.63 16.3563 16.1295 16.4453 15.5766L17.4986 9.04048C17.5539 8.6956 17.5409 8.34135 17.4605 8.00269C17.3801 7.66404 17.2341 7.34922 17.033 7.08042C16.8319 6.81163 16.5805 6.5954 16.2965 6.44698C16.0126 6.29855 15.7029 6.22155 15.3894 6.22138H11.5485V2.76663C11.5485 2.29906 11.4219 1.84243 11.1853 1.45682C10.9487 1.07121 10.6132 0.77469 10.2229 0.606263C9.83261 0.437835 9.40587 0.405394 8.99878 0.513207C8.5917 0.62102 8.22336 0.864038 7.94221 1.21029L7.93964 1.21312C7.02153 2.35615 6.53438 4.13768 6.01415 5.41468C5.92647 5.64298 5.81973 5.86154 5.69535 6.06745C5.65659 6.1225 5.6139 6.17397 5.56775 6.22136ZM4.73378 15.4967H3.14232C3.10186 15.4968 3.06181 15.4877 3.02455 15.4701C2.98729 15.4525 2.9536 15.4266 2.92548 15.3941C2.897 15.3629 2.87443 15.3257 2.8591 15.2845C2.84378 15.2434 2.83602 15.1992 2.83629 15.1547V8.61574C2.83602 8.57118 2.84378 8.52702 2.8591 8.48588C2.87443 8.44475 2.897 8.40748 2.92548 8.3763C2.9536 8.34378 2.98729 8.31794 3.02455 8.3003C3.06181 8.28267 3.10186 8.27362 3.14232 8.27368H4.73378V15.4967ZM6.57007 7.94305C6.91186 7.6731 7.19368 7.31911 7.39385 6.90832C7.73944 6.14837 8.046 5.36703 8.31204 4.5681C8.54289 3.85179 8.87717 3.18258 9.3016 2.58706C9.33411 2.54828 9.37614 2.5211 9.42242 2.50893C9.4687 2.49676 9.51717 2.50014 9.56174 2.51864C9.60643 2.53793 9.64478 2.57201 9.67167 2.61632C9.69855 2.66064 9.71269 2.71307 9.71219 2.76661V7.24752C9.71211 7.38231 9.7358 7.51579 9.78192 7.64033C9.82803 7.76487 9.89566 7.87804 9.98094 7.97334C10.0662 8.06865 10.1675 8.14423 10.2789 8.19577C10.3903 8.2473 10.5098 8.27378 10.6304 8.27368H15.3894C15.4344 8.27365 15.4789 8.2849 15.5195 8.3066C15.5601 8.3283 15.5958 8.3599 15.624 8.39907C15.6532 8.43702 15.6744 8.48186 15.6859 8.53025C15.6974 8.57863 15.6989 8.6293 15.6904 8.67844L14.637 15.2145C14.624 15.2933 14.5868 15.3645 14.5319 15.416C14.477 15.4675 14.4078 15.496 14.3361 15.4967H6.57008L6.57007 7.94305Z" fill="#ADB5BD" stroke="white" stroke-width="0.839874"/>
</svg>

            <div className="pl-1 pr-1 pt-1 text-xs">{project.relevanceScore1}</div>
          </div>
          <div className="flex items-center">
          <svg width="15" height="14" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M13.1656 11.526H15.6299C16.2069 11.525 16.7599 11.2953 17.1679 10.8873C17.5759 10.4793 17.8056 9.92627 17.8066 9.3493V3.4048C17.8056 2.82783 17.5759 2.27479 17.1679 1.8668C16.7599 1.45882 16.2069 1.22915 15.6299 1.22809H4.2566C3.74585 1.22837 3.25144 1.40809 2.85974 1.73586C2.46803 2.06362 2.20394 2.51859 2.11359 3.02128L1.04338 8.96318C0.987146 9.27671 1.00035 9.59875 1.08208 9.90662C1.16381 10.2145 1.31206 10.5007 1.51639 10.745C1.72072 10.9894 1.97616 11.186 2.2647 11.3209C2.55324 11.4558 2.86787 11.5258 3.1864 11.526H7.08893V14.6667C7.08891 15.0917 7.21756 15.5069 7.45797 15.8574C7.69837 16.208 8.03926 16.4775 8.43579 16.6306C8.83233 16.7838 9.26592 16.8133 9.67953 16.7152C10.0931 16.6172 10.4674 16.3963 10.7531 16.0815L10.7557 16.079C11.6885 15.0398 12.1835 13.4203 12.7121 12.2594C12.8011 12.0518 12.9096 11.8531 13.036 11.6659C13.0753 11.6159 13.1187 11.5691 13.1656 11.526ZM14.013 3.09386H15.6299C15.6711 3.0938 15.7118 3.10203 15.7496 3.11806C15.7875 3.13409 15.8217 3.15759 15.8503 3.18715C15.8792 3.21549 15.9021 3.24937 15.9177 3.28677C15.9333 3.32416 15.9412 3.36431 15.9409 3.40482V9.34931C15.9412 9.38981 15.9333 9.42996 15.9177 9.46736C15.9021 9.50475 15.8792 9.53863 15.8503 9.56698C15.8217 9.59654 15.7875 9.62004 15.7496 9.63607C15.7118 9.65209 15.6711 9.66032 15.6299 9.66027H14.013V3.09386ZM12.1472 9.96084C11.7999 10.2063 11.5136 10.5281 11.3102 10.9015C10.9591 11.5924 10.6476 12.3027 10.3773 13.029C10.1427 13.6802 9.8031 14.2885 9.37186 14.8299C9.33883 14.8652 9.29612 14.8899 9.2491 14.901C9.20208 14.912 9.15283 14.9089 9.10755 14.8921C9.06214 14.8746 9.02318 14.8436 8.99586 14.8033C8.96854 14.763 8.95418 14.7154 8.95469 14.6667V10.5931C8.95477 10.4706 8.93069 10.3493 8.88384 10.236C8.83698 10.1228 8.76827 10.0199 8.68162 9.9333C8.59498 9.84666 8.4921 9.77795 8.37888 9.7311C8.26566 9.68425 8.14431 9.66018 8.02177 9.66027H3.18637C3.14064 9.6603 3.0955 9.65007 3.05425 9.63034C3.013 9.61061 2.9767 9.58189 2.94802 9.54628C2.91833 9.51178 2.89684 9.47101 2.88516 9.42703C2.87348 9.38304 2.8719 9.33698 2.88056 9.2923L3.95084 3.35041C3.9641 3.27881 4.00186 3.21405 4.05764 3.16724C4.11342 3.12044 4.18375 3.09449 4.25657 3.09387H12.1472L12.1472 9.96084Z" fill="#ADB5BD" stroke="white" stroke-width="0.839874"/>
</svg>

            <div className="pl-1 pr-1 pt-1 text-xs">{project.relevanceScore2}</div>
          </div>
        </td>
        <PopupMenu />
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={6} className="p-3 text-center text-gray-500">No projects available</td>
    </tr>
  )}
</tbody>
          
          </table>
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

              <select className="px-3 py-2 ml-4 border rounded w-32 text-xs" defaultValue="">
  <option value="10 / page" disabled>10 / page</option>
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
        </div>)}

          
        </>
      )}
    </div>
  );
};

export default Project;