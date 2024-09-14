import React, { useState, useEffect } from 'react';
import { myIssues, mySolutions, IssueData } from './myIssuesData';

const MyIssues = () => {
  const [activeTab, setActiveTab] = useState('My Issues');
  const [issues, setIssues] = useState<IssueData[]>([]);
  useEffect(() => {
    setIssues(myIssues);
  }, []);


  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'My Issues') {
      setIssues(myIssues);
    } else if (tab === 'My Solutions') {
      setIssues(mySolutions);
    }
  };

  return (
    <div>
      <div className="flex space-x-4 mb-6 border-b-2 border-gray-300">
        {['My Issues', 'My Solutions'].map(tab => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`py-1.5 text-sm ${activeTab === tab ? 'text-[#22B573] border-b-4 border-[#22B573]' : 'text-gray-800'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <table className="w-full bg-white rounded-lg shadow">
        <thead className="bg-[#F8F9FA] border border-[EAECF0]">
          <tr className='text-gray-500 text-xs font-light-medium'>
            <th className="text-left p-3 font-normal">No.</th>
            <th className="text-left p-3 font-normal">
              <span className="inline-block mr-1">Issues(Supporters)</span>
              <span className="inline-block">
                <svg width="7" height="10" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.219668 4.32265C-0.0732226 4.6047 -0.0732226 5.06198 0.219668 5.34403C0.512566 5.62605 0.987437 5.62605 1.28033 5.34403L4.50001 2.2436L7.71969 5.34403C8.01257 5.62605 8.48747 5.62605 8.78034 5.34403C9.07322 5.06198 9.07322 4.6047 8.78034 4.32265L5.03034 0.711532C4.88971 0.576093 4.69891 0.5 4.50001 0.5C4.30111 0.5 4.11031 0.576093 3.96968 0.711532L0.219668 4.32265ZM8.78034 9.67736C9.07322 9.39533 9.07322 8.93802 8.78034 8.65599C8.48747 8.37397 8.01257 8.37397 7.71969 8.65599L4.50001 11.7564L1.28033 8.65599C0.987437 8.37397 0.512566 8.37397 0.219668 8.65599C-0.0732226 8.93802 -0.0732226 9.39533 0.219668 9.67736L3.96968 13.2885C4.26256 13.5705 4.73746 13.5705 5.03034 13.2885L8.78034 9.67736Z" fill="#6C757D"/>
                </svg>
              </span>
            </th>
            <th className="text-left p-3 font-normal flex items-center">
              <span className='mr-1'>Posted Date</span>
              <svg width="7" height="10" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.219668 4.32265C-0.0732226 4.6047 -0.0732226 5.06198 0.219668 5.34403C0.512566 5.62605 0.987437 5.62605 1.28033 5.34403L4.50001 2.2436L7.71969 5.34403C8.01257 5.62605 8.48747 5.62605 8.78034 5.34403C9.07322 5.06198 9.07322 4.6047 8.78034 4.32265L5.03034 0.711532C4.88971 0.576093 4.69891 0.5 4.50001 0.5C4.30111 0.5 4.11031 0.576093 3.96968 0.711532L0.219668 4.32265ZM8.78034 9.67736C9.07322 9.39533 9.07322 8.93802 8.78034 8.65599C8.48747 8.37397 8.01257 8.37397 7.71969 8.65599L4.50001 11.7564L1.28033 8.65599C0.987437 8.37397 0.512566 8.37397 0.219668 8.65599C-0.0732226 8.93802 -0.0732226 9.39533 0.219668 9.67736L3.96968 13.2885C4.26256 13.5705 4.73746 13.5705 5.03034 13.2885L8.78034 9.67736Z" fill="#6C757D"/>
              </svg>
            </th>
            <th className="text-left p-3 font-normal">Status</th>
            <th className="text-left p-3 font-normal">Solution</th>
            <th className="text-left p-3 font-normal">Action</th>
          </tr>
        </thead>
        <tbody>
          {issues && issues.length > 0 ? (
            issues.map(issue => (
              <tr key={issue.id} className="border-b">
                <td className="p-3 text-gray-500 text-xs">{issue.id}</td>
                <td className="p-3 w-[10vh] text-xs">
                  <div className="flex flex-col w-[48vh]">
                    <div className="text-xs font-bold truncate">{issue.title}</div>
                    <p className="text-gray-500 text-xxs mt-1 truncate">{issue.description}</p>
                  </div>
                </td>
                <td className="p-3 text-[0.65rem] flex justify-center items-center">
  <span className="ml-1">{issue.postedDate}</span>
</td>

                <td className="p-3 text-xs">
                <span className={`inline-block px-3 text-xs font-normal border rounded-full 
                    ${issue.status === 'Live' ? 'border-green-700 text-green-800 bg-green-100' :
                     issue.status === 'Draft' ? 'border-orange-500 text-orange-500 bg-orange-100' : 
                     'border-gray-400 text-gray-400 bg-gray-100'}`}>
                    {issue.status}
</span>

                </td>
                <td className="p-3 text-gray-500 text-xs">
  <div className="flex justify-center items-center w-full h-full">
    {issue.solution}
  </div>
</td>

               
<td className="p-3 text-xs text-gray-500">
  <div className="flex justify-center items-center w-full h-full">
    <svg width="5" height="16" viewBox="0 0 5 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.49982 6.90839C1.34943 6.90839 0.408203 7.84961 0.408203 9C0.408203 10.1504 1.34943 11.0916 2.49982 11.0916C3.6502 11.0916 4.59143 10.1504 4.59143 9C4.59143 7.84961 3.6502 6.90839 2.49982 6.90839ZM2.49982 0.633545C1.34943 0.633545 0.408203 1.57477 0.408203 2.72516C0.408203 3.87555 1.34943 4.81677 2.49982 4.81677C3.6502 4.81677 4.59143 3.87555 4.59143 2.72516C4.59143 1.57477 3.6502 0.633545 2.49982 0.633545ZM2.49982 13.1832C1.34943 13.1832 0.408203 14.1245 0.408203 15.2748C0.408203 16.4252 1.34943 17.3665 2.49982 17.3665C3.6502 17.3665 4.59143 16.4252 4.59143 15.2748C4.59143 14.1245 3.6502 13.1832 2.49982 13.1832Z" fill="#495057"/>
    </svg>
  </div>
</td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="p-3 text-center text-gray-500">No issues found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyIssues;
