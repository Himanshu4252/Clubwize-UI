import React from "react";
import Image from "next/image";

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

interface PostsContentProps {
  post: Post; 
}

const PostsContent: React.FC<PostsContentProps> = ({ post }) => {
  return (
    <div className="py-6 border-b pb-6">
      <p className="font-semibold text-sm">{post.text}</p>
      <p className="mt-2 text-gray-700 text-sm">{post.additionalText}</p>
      {post.imageUrls.length > 0 && (
        <div className="mt-4 flex space-x-2">
          {post.imageUrls.map((url, idx) => (
            <Image
              key={idx}
              src={url}
              alt={`Post image ${idx + 1}`}
              layout="responsive"
              width={160}
              height={40}
              className="object-cover rounded-md"
            />
          ))}
        </div>
      )}
      {post.document && (
       <div className="mt-4 flex items-center space-x-2 border p-2">
       <Image
         src="/BmarkImg/doc.png"
         alt="Document"
         width={24}
         height={24}
         className="w-8 h-10 mr-3"
       />
       <p className="text-sm flex-1">
         {post.document.name}<br/>
         <span className="text-xs text-gray-500">{post.document.size}</span>
       </p>
       <div className="flex items-center border border-gray-300 rounded-lg p-1.5 ml-auto">
  <Image
    src="/BmarkImg/download.png"
    alt="Download"
    width={24}
    height={24}
    className="w-4 h-4"
  />
</div>

     </div>
     
      )}
    </div>
  );
};

export default PostsContent;
