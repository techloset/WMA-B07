import React from 'react'
import {Link} from 'react-router-dom'
import AddProduct from '../../components/addProduct/AddProduct'

export default function Products() {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <AddProduct/>
    </div>
  )
}
