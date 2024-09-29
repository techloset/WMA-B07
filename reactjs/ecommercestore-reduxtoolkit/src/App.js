import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {fetchProducts} from "./store/slices/productSlice"

export default function App() {
  const products = useSelector(store=>store.productSlice.products)
  const dispatch = useDispatch();
  console.log("prdocuts in comp", products)

  const onClickGetProducts = ()=>{
    dispatch(fetchProducts())
  }
  return (
    <div>
      <button onClick={onClickGetProducts}>Get Products</button>
      {products?.map(product=>{
        return <div key={product.id}>
          <h1>{product.title}</h1>
          <img style={{width:100}} src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      })}
    </div>
  )
}
