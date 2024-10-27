"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


export default function Admin() {
  const router = useRouter()
  const handleClick = () => {
  router.push('/contact')
  }
  return (
    <div>Admin
      <button onClick={handleClick}>Move to contact us page</button>
    </div>
  )
}
    