import React from "react";
import Comments from "../Components/NewsFeed/Comments/Comments";
import ModuleBar from "../Components/NewsFeed/ModuleBar/ModuleBar";
import PostCard from "../Components/NewsFeed/PostCard/PostCard";
import PostCard2 from "../Components/NewsFeed/PostCard2/PostCard2";
import Team from "../Components/Create_Team/Team";
import Profile from "../Components/Profile/Profile";
import Side_Bar from "../Components/Sub_Componet/Side_Bar";
import SearchBar from "../Components/searchPanel/SearchBar";

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
          <div className='flex flex-col w-6/12 gap-4 items-center h-screen bg-[url("/img/FeedBackground.png")] my-1 '>
            <div className="w-full">
              <ModuleBar />
            </div>
            <div>
              <PostCard />
            </div>
            <div className="w-full">
              <PostCard2 />
            </div>
            <div>
              {" "}
              <Comments />
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
