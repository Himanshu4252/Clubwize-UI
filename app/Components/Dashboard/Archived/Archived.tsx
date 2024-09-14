"use client"
import React from 'react'
import PostCard from '../../NewsFeed/PostCard/PostCard';
import { routes } from '@/app/Routes/routes';
import { useRouter } from 'next/navigation';

const Archived = () => {
 
  
  const router = useRouter();
  
  const handleContribution = () => {
    router.push(routes.contributions)
  }

  const handleArchived = () => {
    router.push(routes.archived)
  }

  const handleDashboard = () => {
    router.push(routes.dashboard)
  }

  return (
    <div className="flex flex-col justify-start  h-screen w-full">
      {/* Tabs */}
      <div className="text-base font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-500 w-full">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <a
              onClick={handleContribution}
              className="inline-block p-4  border-b-2rounded-t-lg active dark:text-green-500 dark:border-green-500 cursor-pointer"
            >
              My Contributions
            </a>
           
          </li>
          <li className="me-2">
            <a
              onClick={handleArchived}
              className="inline-block p-4  rounded-t-lg rounded-md text-green-600 hover:text-green-500 hover:border-gray-300   hover:border-b-green-500 cursor-pointer"
              aria-current="page"
            >
              Archived
              
            </a>
            <svg width="106" height="5" viewBox="0 0 106 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H102C104.209 0.5 106 2.29086 106 4.5H0Z" fill="#22B573"/>
</svg>

          </li>
        </ul>
      </div>

  {/* Breadcrumbs */}
  

<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items space-x-1 md:space-x-2 rtl:space-x-reverse my-4 text-base">
    <li className="inline-flex items-center">
      <a onClick={handleDashboard} className="inline-flex items-center  text-black hover:text-blue-600 underline cursor-pointer">
     
        Dashoboard
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a onClick={handleArchived} className="ms-1  text-gray-500 hover:text-blue-600 md:ms-2  cursor-pointer">Archived</a>
      </div>
    </li>
    
  </ol>
</nav>

<div className="flex flex-col gap-4">
    <PostCard />
    <PostCard />

</div>

    </div>
  );
}

export default Archived