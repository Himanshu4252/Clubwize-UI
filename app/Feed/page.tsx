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
    <div className="inline-flex gap-4">
      {/* Sidebar */}
      <div className="inline-flex ">
        <Side_Bar />
      </div>

      <div className="flex flex-col">

<SearchBar /> 

        <div className="flex flex-row gap-4">
          <Profile />

          {/* Feed */}
          <div className='flex flex-col gap-4 items-center h-screen bg-[url("/img/FeedBackground.png")] my-1 '>
            <ModuleBar />
            <PostCard />
            <PostCard2 />
            <Comments />
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
