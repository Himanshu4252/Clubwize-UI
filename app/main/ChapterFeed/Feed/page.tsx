import PostCard from '@/app/Components/NewsFeed/PostCard/PostCard'
import React from 'react'

const FeedPage = () => {
  return (
    <div className="flex flex-col">
        <PostCard />
        <PostCard />
        <PostCard />
    </div>
  )
}

export default FeedPage