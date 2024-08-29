import React from "react";
import PostCardHeader from "./PostCardHeader/PostCardHeader";
import PostCardContent from "./PostCardContent/PostCardContent";
import EngagementBar from "./EngagementBar/EngagementBar";

const PostCard = () => {

  
  return (
    <div className="w-[940px] h-[418px] p-6 flex flex-col border rounded-lg shadow-md">
      <PostCardHeader />
      <PostCardContent />   
      <EngagementBar  />
    </div>
  );
};

export default PostCard;
