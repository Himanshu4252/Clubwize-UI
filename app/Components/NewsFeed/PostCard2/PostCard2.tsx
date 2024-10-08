import React from 'react'
import PostCard2Header from './PostCard2Header/PostCard2Header'
import PostCard2Content from './PostCard2Content/PostCard2Content'

const PostCard2 = () => {
  return (
    <div className="w-full flex flex-col border rounded-lg shadow-md">
        <PostCard2Header />
        <div className="w-full">
        <PostCard2Content />
        </div>
  </div>
  )
}

export default PostCard2