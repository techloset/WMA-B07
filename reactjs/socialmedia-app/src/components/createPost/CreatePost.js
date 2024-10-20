import React, { useState, useEffect } from 'react'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useDispatch } from 'react-redux';

import { storage } from '../../config/firebase';
import Button from '../button/Button';
import { createPost, updatePost } from '../../store/slices/feedSlice';
import { useSelector } from 'react-redux';

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const post = useSelector(store => store.feedSlice.updatePost)

    const dispatch = useDispatch()
    console.log("post", post);

    useEffect(() => {
        if (post) {
            setTitle(post.title)
            setDescription(post.description)
        } else {
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
            imageURL,
        }
        if (post) {
            dispatch(updatePost({ ...postData, id: post.id }))
            return
        }
        dispatch(createPost({ ...postData, file, setLoading }))
    }


    const changeImage = (e) => {
        console.log("e", e.target.files[0]);
        const file = e.target.files[0];
        setFile(file)
    }

    const uploadImage = async (e) => {
        try {
            const file = e.target.files[0];
            console.log("file", file);

            const fileRef = ref(storage, 'images/' + parseInt(Math.random() * 23423425312) + file.name);
            const metadata = {
                contentType: file.type,
            };
            const response = await uploadBytes(fileRef, file, metadata)
            console.log("response", response);
            const url = await getDownloadURL(fileRef)
            console.log("url", url);
            setImageURL(url)
        } catch (error) {
            console.log("error", error);

        }


    }

    return (
        <div>
            {/* create post just like facebook */}
            <h1>Create Post</h1>
            <input value={title} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <br />
            <textarea value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
            <br />
            <input type="file" onChange={changeImage} />
            <br />
            {loading ? <p>Loading...</p> :
                <Button title={post ? "Update Post" : "Create Post"} onClickHandler={createPostHandler} />}

        </div>
    )
}
