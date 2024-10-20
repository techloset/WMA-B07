import React from 'react'
import FeedListing from '../../components/feedListing/FeedListing';
import CreatePost from '../../components/createPost/CreatePost';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

export default function Home() {
  const dispatch = useDispatch()
  const handleLogout = ()=>{
dispatch(logout())
  }
  return (
    <div>
        <h1>List of posts</h1> 
        <button onClick={handleLogout}>logout</button>
         <CreatePost/> 
        <FeedListing/>
    </div>
  )
}
