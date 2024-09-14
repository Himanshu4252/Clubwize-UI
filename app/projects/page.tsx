import React from "react";
import Project from "../Components/Projects/Project";
import Team from "@/app/Components/Create_Team/Team";
import Profile from "@/app/Components/Profile/Profile";
import Side_Bar from "@/app/Components/Sub_Componet/Side_Bar";
import SearchBar from "@/app/Components/searchPanel/SearchBar";
import ModuleBar from "@/app/Components/NewsFeed/ModuleBar/ModuleBar";

const Feed = () => {
  return (
    <div className="flex gap-4">
      <div>
      <Side_Bar />  
      </div>
      

      <div className="flex flex-col">
        <SearchBar />

        <div className="flex flex-row justify-evenly" >
        <div className="w-2/12">
           <Profile />
        </div>
         

          {/* Feed */}
          <div className='flex flex-col w-6/12 gap-4 items-center my-1 '>
            <div className="w-full">
              <ModuleBar />
              <Project/>
            </div>
          </div>
          {/* Team */}
          <div className="w-3/12 ">
            <Team />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
