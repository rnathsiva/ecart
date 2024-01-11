import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
    const response=await axios.get('https://dummyjson.com/products')
    sessionStorage.setItem('allproducts',JSON.stringify(response.data.products))
    console.log(response);
    return response.data.products
    
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        allproducts:[],
        allProductsDummy:[],
        loading:false,
        error:"",
        productsPerPage:10,
        currentPage:1
    },
    reducers:{
        searchByProduct:(state,action)=>{
        state.allproducts=state.allProductsDummy.filter(item=>item.title.toLowerCase().includes(action.payload))
        },
        navigateToNextPage:(state)=>{
            state.currentPage++
        },
        navigateToPrevPage:(state)=>{
            state.currentPage--
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.allproducts=action.payload
            state.allProductsDummy=action.payload
        })
        builder.addCase(fetchProducts.rejected,(state)=>{
            state.loading=false
            state.allproducts=[]
            state.error="API call failed...please try again after sometimes.."
        })
    }
})

export const{searchByProduct,navigateToNextPage,navigateToPrevPage}=productSlice.actions
export default productSlice.reducer