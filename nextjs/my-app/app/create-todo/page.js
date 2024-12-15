"use client"
import React from 'react'

export default function page() {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [file, setFile] = React.useState(null);

    const uploadImageUsingCloudinary = async () => {
        try {
            
       
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "todo-app");
        data.append("cloud_name", "dlj5qr22y");
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dlj5qr22y/image/upload",
          {
            method: "POST",
            body: data,
          }
        );
        const result = await response.json();
        console.log("result",result.url);
        
        return result.secure

    } catch (error) {
        console.log("error",error)
        
    }
    }




// Configuration::instance('cloudinary://476569224318439:YOUR_API_SECRET@dlj5qr22y?secure=true');



    const addTodo = async() =>{
        let newTodo = {
            id:5,
            title: title,
            description: description
        }

        const raw = JSON.stringify(newTodo);
        console.log("raw",raw);
        const token = localStorage.getItem("token");
          const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${token}`
            },
            body: raw,
          };
        const  response =  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/create`, requestOptions)
        console.log("response",response)
        const result = await response.json()
        console.log("data",result)
        console.log("Add todo")
    }
  return (
    <div>
        <h1>Create Todo</h1>
          <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>


            <input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="Enter title"/>
            <input type="text" onChange={(e)=>setDescription(e.target.value)} placeholder="Enter description"/>
            <button onClick={uploadImageUsingCloudinary}>Add Todo</button>
    </div>
  )
}
