import React from 'react'
import { Link } from "react-router-dom";
import ProductList from '../../components/productList/ProductList'

export default function Home() {
  return (
    <div>
        <h1>List of products</h1>  
        <Link to={"/products"}>Add Product</Link>
        <ProductList/>
    </div>
  )
}
