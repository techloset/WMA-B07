import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../store/slices/productSlice'

export default function AddProduct() {

    const dispatch = useDispatch()
 
const [title, setTitle] = useState("")
const [price, setPrice] = useState("")
const [description, setDescription] = useState("")
const [image, setImage] = useState(" https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg")
const [category, setCategory] = useState("")

const onClickAddProduct = ()=>{
   let product = {
         title,
         price,
         description,
         image,
         category
    }
    console.log("product", product)
    dispatch(addProduct(product))
    
}

  return (
    <div>
        

        <h1>Add a product</h1>
            <input type="text" placeholder="title" onChange={(e)=> setTitle(e.target.value)} />
            <input type="text" placeholder="price" onChange={(e)=> setPrice(e.target.value)}  />
            <input type="text" placeholder="description" onChange={(e)=> setDescription(e.target.value)} />
            <input type="text" placeholder="category" onChange={(e)=> setCategory(e.target.value)} />
            <button onClick={onClickAddProduct}>Add</button>
    </div>
  )
}
