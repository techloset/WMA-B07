import React, { useEffect } from 'react'
import Button from "../button/Button";
import { useSelector, useDispatch } from 'react-redux';
import { getPosts,deletePost,updateDocId } from '../../store/slices/feedSlice';

export default function FeedListing() {
  
const feed = useSelector(store => store.feedSlice.feed)
const dispatch = useDispatch()

  useEffect(() => {
    console.log("FeedListing useEffect");
    dispatch(getPosts())
  }, [])
  const handleClick = () => {
    console.log("Get Posts clicked");
    dispatch(getPosts())
  }

  const handleDelete = (id) => {
    console.log("Delete clicked", id);
    // dispatch
    dispatch(deletePost(id))
  }
  const handleEdit = (id) => {
    console.log("Edit clicked", id);
    // dispatch
    dispatch(updateDocId(id))
  }
  return (
    <div>
      <h1>Feed Listing</h1>
      {/* <Button title="Get Posts" onClickHandler={handleClick} /> */}
      {
        feed?.map((post) => {
          return (
            <div key={post?.id}>
              <h3>{post?.title}</h3>
              <p>{post?.description}</p>
              <button onClick={()=>handleDelete(post.id)}>delete</button>
              <button onClick={()=>handleEdit(post.id)}>edit</button>
              <hr/>
            </div>
          )
        })
      }
    </div>
  )
}
