import React from "react";
import ModuleBar from "../Components/NewsFeed/ModuleBar/ModuleBar";
import Team from "../Components/Create_Team/Team";
import Profile from "../Components/Profile/Profile";
import Side_Bar from "../Components/Sub_Componet/Side_Bar";
import SearchBar from "../Components/searchPanel/SearchBar";
import FeedPage from "../main/Feed/page";

const Feed = () => {
  return (
    <>
      <div className="w-full">
        <SearchBar />
      </div>
      <div className="flex gap-2 relative">
        <Side_Bar />
        <Profile />
        <div className="space-y-3">
          <div className="flex gap-6">
            <div className="">
              <ModuleBar />
            </div>
            <div className="relative">
              <Team />
            </div>
          </div>
          <div className="w-11/12">
            <FeedPage />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
