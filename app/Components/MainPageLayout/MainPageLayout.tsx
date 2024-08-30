import React from "react";
import Team from "../Create_Team/Team";
import SearchBar from "../searchPanel/SearchBar";
import Side_Bar from "../Sub_Componet/Side_Bar";
import Comments from "../NewsFeed/Comments/Comments";
import ModuleBar from "../NewsFeed/ModuleBar/ModuleBar";
import PostCard from "../NewsFeed/PostCard/PostCard";
import PostCard2 from "../NewsFeed/PostCard2/PostCard2";
import Profile from "../Profile/Profile";

const MainPageLayout = () => {
  return (
    <div className="flex gap-4">
      <div>
      <Side_Bar />  
      </div>
      

      <div className="flex flex-col">
        <SearchBar />

        <div className="flex flex-row justify-evenly">
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

export default MainPageLayout;
