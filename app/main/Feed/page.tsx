import Comments from "@/app/Components/NewsFeed/Comments/Comments";
import PostCard from "@/app/Components/NewsFeed/PostCard/PostCard";
import PostCard2 from "@/app/Components/NewsFeed/PostCard2/PostCard2";
import React from "react";

const FeedPage = () => {
  return (
    <div>
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
  );
};

export default FeedPage;
