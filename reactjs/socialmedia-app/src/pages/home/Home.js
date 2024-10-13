import React from 'react'
import FeedListing from '../../components/feedListing/FeedListing';
import CreatePost from '../../components/createPost/CreatePost';

export default function Home() {
  return (
    <div>
        <h1>List of posts</h1> 
         <CreatePost/> 
        <FeedListing/>
    </div>
  )
}
