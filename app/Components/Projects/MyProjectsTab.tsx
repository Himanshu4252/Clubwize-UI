import React, { useState, useEffect } from 'react';
import { myProjects,  ProjectsData } from './myProjectsData';
import Image from 'next/image';
import empty from '@/public/ProjectsImg/empty.png'

const contributionsContent = (
    <div className="w-full h-[50vh] bg-white rounded-lg shadow flex items-center justify-center">
    <div className="flex flex-col items-center">
        <Image src={empty} alt="" className="mb-4" />
        <p className="text-black text-sm">You haven&apos;t contributed in any projects.</p>
    </div>
</div>

  );

const MyProjects = () => {
  const [activeTab, setActiveTab] = useState('My Projects');
  const [issues, setIssues] = useState<ProjectsData[]>([]);
  useEffect(() => {
    setIssues(myProjects);
  }, []);


  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'My Projects') {
      setIssues(myProjects);
    }
  };

  return (
    <div>
      <div className="flex space-x-4 mb-6 border-b-2 border-gray-300">
        {['My Projects','My Contributions'].map(tab => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`py-1.5 text-sm ${activeTab === tab ? 'text-[#22B573] border-b-4 border-[#22B573]' : 'text-gray-800'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      {activeTab === 'My Projects' ? (
        <div>
      <table className="w-full bg-white rounded-lg">
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
            <th className="text-left p-3 font-normal">Status</th>
            <th className="text-left p-3 font-normal flex items-center">
              <span className='mr-1'>Posted Date</span>
              <svg width="7" height="10" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.219668 4.32265C-0.0732226 4.6047 -0.0732226 5.06198 0.219668 5.34403C0.512566 5.62605 0.987437 5.62605 1.28033 5.34403L4.50001 2.2436L7.71969 5.34403C8.01257 5.62605 8.48747 5.62605 8.78034 5.34403C9.07322 5.06198 9.07322 4.6047 8.78034 4.32265L5.03034 0.711532C4.88971 0.576093 4.69891 0.5 4.50001 0.5C4.30111 0.5 4.11031 0.576093 3.96968 0.711532L0.219668 4.32265ZM8.78034 9.67736C9.07322 9.39533 9.07322 8.93802 8.78034 8.65599C8.48747 8.37397 8.01257 8.37397 7.71969 8.65599L4.50001 11.7564L1.28033 8.65599C0.987437 8.37397 0.512566 8.37397 0.219668 8.65599C-0.0732226 8.93802 -0.0732226 9.39533 0.219668 9.67736L3.96968 13.2885C4.26256 13.5705 4.73746 13.5705 5.03034 13.2885L8.78034 9.67736Z" fill="#6C757D"/>
              </svg>
            </th>
           
            <th className="text-left p-3 font-normal">Relevance Score</th>
            <th className="text-left p-3 font-normal">Action</th>
          </tr>
        </thead>
        <tbody>
          {issues && issues.length > 0 ? (
            issues.map(project => (
              <tr key={project.id} className="border">
                <td className="p-3 text-gray-500 text-xs">{project.id}</td>
                <td className="p-3 w-[10vh] text-xs">
                  <div className="flex flex-col w-[28vh]">
                    <div className="text-xs font-bold truncate">{project.title}</div>
                    <p className="text-gray-500 text-xxs mt-1 truncate">{project.description}</p>
                  </div>
                </td>
                
                <td className="p-3 text-xs">
                <span className={`inline-block px-3 text-xs font-normal border rounded-full 
                    ${project.status === 'Ongoing' ? 'border-green-700 text-green-800 bg-green-100' :
                        project.status === 'Draft' ? 'border-orange-500 text-orange-500 bg-orange-100' : 
                     'border-gray-400 text-gray-400 bg-gray-100'}`}>
                    {project.status}
</span>

                </td>
                <td className="p-3 text-[0.65rem] items-center">
        
        <span className="ml-1">{project.postedDate}</span>
      </td>
      
  {project.status === 'Draft' ? (
   <td className="p-3 text-xs ml-8 flex items-center font-bold">-</td>
  ) : (
    <>
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
        </td></>)}

               
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
              <td colSpan={7} className="p-3 text-center text-gray-500">No projects found</td>
            </tr>
          )}
        </tbody>
      </table>
      
          <div className="flex border-b bg-white border-l border-r p-4 justify-center items-center text-[0.6rem]">
    <div>Total 85 Members</div>
    <div className="flex items-center ">
      <button className="px-2 py-1 border rounded ">{"<"}</button>
      {[1, '...',  4, 5, 6, 7, 8,  20].map((page, index) => (
        <button key={index} className={`px-2 py-1 border rounded ${page === 6 ? 'bg-black text-white' : ''}`}>{page}</button>
      ))}
      <button className="px-2 py-1 border rounded">{">"}</button>
    </div>
    <div className="flex items-center space-x-2">
      <select className="border rounded px-2 py-1">
        <option>10 / page</option>
        <option>20 / page</option>
        <option>30 / page</option>
      </select>
      <span>Go to</span>
      <input type="text" className="border rounded px-2 py-1 w-12" />
    </div>
          </div></div>
       ) : (
        contributionsContent
      )}
    </div>
  );
};

export default MyProjects;
