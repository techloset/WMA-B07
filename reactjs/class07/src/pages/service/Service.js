import React, { useState } from 'react'
import Card from "../../components/card/Card";

export default function Service() {
    const [flag, setFlag ] = useState(true)
    const [email, setEmail] = useState("test@test.com")
  return (
    <div>
        Service

        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
 
     <Card  data={flag} email={email} />
    <button onClick={()=>setFlag(!flag)}>Click Me</button>

    </div>
  )
}
