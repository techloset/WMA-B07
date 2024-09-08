import {useState} from "react";

export default function Blog (){
    const [userName,setUserName] = useState("");
    const [email,setUserEmail] = useState("");

    const handleClick = ()=> {
        if(userName === ""){
            alert("Please enter your name");
            return;
        }
        if(email === ""){
            alert("Please enter your email");
            return;
        }
     let user = {
            name: userName,
            email: email
     }

     console.log("user",user);
     
    }
    const handleMouseEnter = ()=>{
        console.log("Mouse entered");
        
    }

    const handleDoubleClick = ()=>{
        console.log("Double clicked");
    }

    const onChangeHandler =(e)=>{
        setUserName(e.target.value);
        console.log("on change handler",e.target.value);
        console.log("userName in onChangeHandler",userName);
    }
   
    const onChangeHandlerEmail =(e)=>{
        setUserEmail(e.target.value);
    }

    return(
        <div>
            
            <h1  onMouseEnter={handleMouseEnter}>Blog details</h1>
            <input style={{border:`2px solid ${userName.length <= 8 ? "red":"green"}`}} placeholder="enter your name" type="text" onChange={onChangeHandler} />
            <input placeholder="enter your email" type="email" onChange={onChangeHandlerEmail} />
            <h1>User Entered Name is: {userName} email: {email}</h1>
            <button onDoubleClick={handleDoubleClick} onClick={handleClick} style={{backgroundColor:"gray"}}> Submit </button>
        </div>
    )
}