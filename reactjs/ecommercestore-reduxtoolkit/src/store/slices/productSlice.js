import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "product/fetchProducts",
    async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log("data in fetchProducts action", data);
        
        return data;
    }
);

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {
        deleteProduct: (state, action) => {
            state.products = state.products.filter(
                product => product.id !== action.payload
            );
        },
        updateProduct: (state, action) => {
            const { id, title, price, description, category, image } = action.payload;
            const existingProduct = state.products.find(product => product.id === id);
            if (existingProduct) {
                existingProduct.title = title;
                existingProduct.price = price;
                existingProduct.description = description;
                existingProduct.category = category;
                existingProduct.image = image;
            }
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
    extraReducers: builder => {
           
            builder.addCase(fetchProducts.fulfilled, (state, action) => {
                console.log("fetch products in reducer", action.payload);
                
                state.products = action.payload;
            },)
          }
        
});


export const { setProducts } = productSlice.actions;
export default productSlice.reducer;

