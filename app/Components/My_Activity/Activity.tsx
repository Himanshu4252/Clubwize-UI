"use client"

import styles from '../Sub_Componet/Side_Bar.module.css'

import Side_Bar from '../Sub_Componet/Side_Bar'
import SearchBar from '../searchPanel/SearchBar'

import Chat from '../Setting/Chat/Chat'
import Activity_copm from './Activity_comp/Activity_copm'







const Activity = () => {
  return(
<>

<div className="flex gap-1" style={{ zIndex: '1000' }}>
    {/* Sidebar */}
    <div className="sticky top-0 z-50" >
     <Side_Bar />
     
    </div>
  
    {/* Main Content Area */}
    <div className="flex flex-col w-full">
      <SearchBar />
  
      <div className="flex flex-row justify-evenly">
        {/* Setting Sidebar */}
  
        {/* Main Feed Area */}
        <div className="flex flex-col w-6/12 gap-2 items-center h-screen bg-[url('/img/FeedBackground.png')] my-1">
         
          <div className={styles.comp_bar}>
           <Activity_copm />
          </div>
        </div>
  
        {/* Team Section */}
        <div className="w-2/12">
          <Chat />
        </div>
      </div>
    </div>
  </div>


</>    
     
  )
}

export default Activity
