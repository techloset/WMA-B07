import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';

import Button from '../button/Button';
import { createPost,updatePost } from '../../store/slices/feedSlice';
import { useSelector } from 'react-redux';

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState(null);

    const post = useSelector(store => store.feedSlice.updatePost)

    const dispatch = useDispatch()
     console.log("post",post);
     
    useEffect(() => {
     if(post){
         setTitle(post.title)
         setDescription(post.description)
     }else {
          setTitle("")
          setDescription("")
     }
    
    }, [post])
    

    const createPostHandler = () => {
        console.log("Title: ", title);
        console.log("Description: ", description)
        let postData = {
            title,
            description,  
            imageURL:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",

            createAt: new Date(),
          
        }
        if(post){
            dispatch(updatePost({...postData,id:post.id}))
            return
        }
        dispatch(createPost(postData))
    }

    const uploadImage = (e) => {
        console.log("Image: ", e.target.files[0]);
        const file = e.target.files[0];
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then(() => {
            console.log("Uploaded a file");
            fileRef.getDownloadURL().then((url) => {
                console.log("URL", url);
                setImageURL(url)
            })
        })
    }

  return (
    <div>
       {/* create post just like facebook */}
        <h1>Create Post</h1>
        <input value={title} type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
        <br/>
        <textarea value={description} placeholder="Description"  onChange={(e)=>setDescription(e.target.value)}></textarea>
        <br/>
        <input type="file" onChange={uploadImage}/>
        <br/>
        <Button title={post ? "Update Post" : "Create Post"} onClickHandler={createPostHandler}/>

    </div>
  )
}
