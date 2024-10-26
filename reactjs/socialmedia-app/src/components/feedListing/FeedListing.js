import React, { useEffect } from 'react'
import Button from "../button/Button";
import { useSelector, useDispatch } from 'react-redux';
import { getPosts,deletePost,updateDocId } from '../../store/slices/feedSlice';

export default function FeedListing() {
const user = useSelector(store => store.authSlice.user)
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

  const handleDelete = (id,uid) => {
    console.log("Delete clicked", id);
    // dispatch
     if (user.uid != uid) {
      alert("You can't delete this post")
      return
      
     }
    dispatch(deletePost(id))
  }
  const handleEdit = (id) => {
    console.log("Edit clicked", id);
    // dispatch
    dispatch(updateDocId(id))
  }
  console.log("feed",feed);
  
  return (
    <div>
      <h1>Feed Listing</h1>
      {/* <Button title="Get Posts" onClickHandler={handleClick} /> */}
      {
        feed?.map((post) => {
          return (
            <div key={post?.id}>
              <img style={{width:100}} src={post?.imageURL}/>
              <h3>{post?.title} - { post?.createAt?.seconds ? new Date(post?.createAt?.toDate()).toLocaleDateString() : new Date(post?.createAt).toLocaleDateString()} - {post.uid}</h3>
              <p>{post?.description}</p>
              {post.uid != user.uid ? "" :<button onClick={()=>handleDelete(post.id, post.uid)}>delete</button>}
              <button onClick={()=>handleEdit(post.id)}>edit</button>
              <hr/>
            </div>
          )
        })
      }
    </div>
  )
}


