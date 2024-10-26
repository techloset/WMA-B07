import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../store/slices/authSlice'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = ()=>{
      let user = {
        email, 
        password
      }

      dispatch(login(user))
    }

    const handleRegister = ()=>{
      console.log("Register");
      navigate('/signup')

    }
  return (
    <div>
        <h1>Login Page</h1>
        <input type="email" placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <input type="password" placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/>
         <button onClick={handleLogin}>Login</button>
         <button onClick={handleRegister}>Register</button>
    </div>
  )
}
