import React from "react";
import PostCardHeader from "../NewsFeed/PostCard/PostCardHeader/PostCardHeader";
import PostsContent from "./PostsContent";
import EngagementBar from "../NewsFeed/PostCard/EngagementBar/EngagementBar";

interface Document {
  name: string;
  size: string;
  link: string;
}

interface Post {
  text: string;
  additionalText: string;
  imageUrls: string[];
  document: Document | null;
}

interface PostsCardProps {
  post: Post;
}

const PostsCard: React.FC<PostsCardProps> = ({ post }) => {
  return (
    <div className="p-6 flex flex-col border rounded-lg shadow-md">
      <PostCardHeader />
      <PostsContent post={post} />
      <EngagementBar />
    </div>
  );
};

export default PostsCard;
