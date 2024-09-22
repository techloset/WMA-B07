import { useState, useEffect } from "react";
export default function Card(props) {
 
    const [userName, setUserName] = useState("")

    useEffect(()=>{
        return ()=> console.log("call when component is unmounted");
    },[])

    useEffect(()=>{
        console.log("When the email is changed", props.email);
    },[props.email])

    useEffect(()=>{
        console.log("When the data is changed", props.data);
    },[props.data])

    useEffect(()=>{
        console.log("First in the lifecycle of Card.js");
    },[])

    useEffect(()=>{
        console.log("Everytime the userName state is changed", userName);
    },[userName, props.email])


    console.log("Above the return / Card.js", props.data);
  return (
    <div>

        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} />
        <br/>
        Card - {props.email}</div>
  )
}
