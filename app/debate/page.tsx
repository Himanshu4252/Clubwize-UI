import React from "react";

import Team from "../Components/Create_Team/Team";
import Profile from "../Components/Profile/Profile";
import Side_Bar from "../Components/Sub_Componet/Side_Bar";
import SearchBar from "../Components/searchPanel/SearchBar";
import ModuleBar from "@/app/Components/NewsFeed/ModuleBar/ModuleBar";
import All from "@/app/Components/Debate/All";
import Debate from "@/app/Components/Debate/Debate";

const Feed = () => {
  return (
    <div className="flex gap-4 " >
    <div style={{zIndex:'1000'}} >
    <Side_Bar />  
    </div>
    

    <div className="flex flex-col w-full" >
      <SearchBar />

      <div className="flex flex-row justify-evenly " style={{zIndex:"1"}} >
      <div className="w-2/12" >
         <Profile />
      </div>
       

        {/* Feed */}
        <div className='flex flex-col  gap-4 h-screen bg-[url("/img/FeedBackground.png")] my-1 '>
          <div className="w-full flex space-x-2">
            <ModuleBar />
             <Team />
          </div>
          <div className="w-full lg:w-8/12 ">
            <Debate/>
          </div>
        </div>

        {/* Team */}
        {/* <div className="w-3/12 ">
         
        </div> */}
      </div>
    </div>
  </div>
  );
};

export default Feed;
