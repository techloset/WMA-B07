"use client"
import { useState } from "react"
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const doLogin = async () => {
        let user = {email, password}
        const raw = JSON.stringify(user);
        console.log("raw",raw);
        
          const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: raw,
          };
        const  response =  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, requestOptions)
        console.log("response",response)
        const result = await response.json()
        console.log("data",result)
        localStorage.setItem("token", result?.data?.token);
    }
  return (
    <div>
        <h1>Login</h1>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="username" />
            <input onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="password" />
            <button onClick={doLogin}>Login</button>
    </div>
  )
}
