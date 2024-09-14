import PostCard from '@/app/Components/NewsFeed/PostCard/PostCard'
import React from 'react'

const FeedPage = () => {
  return (
    <div className="flex flex-col gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
    </div>
  )
}

export default FeedPage