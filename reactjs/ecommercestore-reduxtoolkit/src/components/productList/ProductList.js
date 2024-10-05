import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {fetchProducts, deleteProduct, deleteProductApiAction} from "../../store/slices/productSlice"

export default function ProductList() {
    const products = useSelector(store=>store.productSlice.products)
    const dispatch = useDispatch();
    console.log("prdocuts in comp", products)

    useEffect(() => {
        if(products.length === 0){
        dispatch(fetchProducts())
        }
    }, [])
    
    const onClickDeleteProduct = (id)=>{
        console.log("delete product id", id)
        // dispatch(deleteProduct(id))
        dispatch(deleteProductApiAction(id))
        }

    
  
  
    const onClickGetProducts = ()=>{
      dispatch(fetchProducts())
    }
    return (
      <div>
        {/* <button onClick={onClickGetProducts}>Get Products</button> */}
        {products?.map(product=>{
          return <div key={product.id} style={{display:'flex', flexDirection:'row'}}>
           <div style={{padding:10}}>
           <img style={{width:100}} src={product.image} alt={product.title} />
           </div>
           <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={()=>onClickDeleteProduct(product.id)}>Delete</button>
            <button>Update</button>
            <hr/>
            </div>

            
          </div>

        })}
        
      </div>
    )
  }
  
