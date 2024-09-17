import React from "react";
import PostCardHeader from "./PostCardHeader/PostCardHeader";
import PostCardContent from "./PostCardContent/PostCardContent";
import EngagementBar from "./EngagementBar/EngagementBar";

const PostCard = () => {

  
  return (
    <div className=" p-3 lg:p-6 flex flex-col border rounded-lg bg-white shadow-md">
      <PostCardHeader />
      <PostCardContent />   
      <EngagementBar  />
    </div>
  );
};

export default PostCard;
