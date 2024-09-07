import React from 'react';
import PostsCard from './PostsCard';

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

const Posts: React.FC = () => {
  const postsData: Post[] = [
    {
      text: "Creating a code of conduct for a social media group is essential to maintain a positive and respectful online community.",
      additionalText: "Here are some general rules and guidelines you might consider. ",
      imageUrls: [],
      document: null
    },
    {
      text: "",
      additionalText: "Creating a code of conduct for a social media group is essential to maintain.",
      imageUrls: [
        "/BmarkImg/post-image1.png",
        "/BmarkImg/post-image2.png",
        "/BmarkImg/post-image3.png"
      ],
      document: null
    },
    {
      text: "",
      additionalText: "Creating a code of conduct for a social media group is essential to maintain.",
      imageUrls: [],
      document: {
        name: "Document name",
        size: "PDF 12 MB",
        link: "https://example.com/document.pdf"
      }
    },
    {
      text: "Creating a code of conduct for a social media group is essential to maintain a positive and respectful online community.",
      additionalText: "Here are some general rules and guidelines you might consider.",
      imageUrls: [],
      document: null
    }
  ];

  return (
    <div className="flex flex-wrap gap-4 items-start">
    {postsData.map((post, index) => (
      <div className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)]" key={index}>
        <PostsCard post={post} />
      </div>
    ))}
  </div>
  
    
  );
};

export default Posts;
