import React from 'react'
import PostCard from '../Components/NewsFeed/PostCard/PostCard'
import PostCard2 from '../Components/NewsFeed/PostCard2/PostCard2'
import ModuleBar from '../Components/NewsFeed/ModuleBar/ModuleBar'
import Comments from '../Components/NewsFeed/Comments/Comments'

const PostCardPage = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen bg-[url("/img/FeedBackground.png")]  '>
      <ModuleBar />
      <PostCard />
      {/* <PostCard2 /> */}
      <Comments />

    </div>
  )
}

export default PostCardPage