import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/Slices/wishlishtSlice';
import { addToCart } from '../Redux/Slices/cartSlice';
import Header from '../Components/Header';

function View() {
const {id}=useParams()

// console.log(id);
// const {allproducts}=useSelector(state=>state.productReducer)
const [product,setProduct]=useState({})

const wishlist=useSelector(state=>state.wishlistReducer)
const dispatch=useDispatch()

useEffect(()=>{
  const allproducts=JSON.parse(sessionStorage.getItem('allproducts'))
 setProduct(allproducts?.find(item=>item.id==id))
},[])

// console.log(wishlist);

const handleWishlist=(product)=>{
  const existingproducts=wishlist?.find(item=>item.id==product.id)
  if(existingproducts){
    alert("product already in your wishlist")
  }
  else{
    dispatch(addToWishlist(product))
  }
}

  return (
    <>
    <Header></Header>
    
     <div style={{paddingTop:'100px'}}>
      <div className='container mt-3 mb-5'>
        <div className='row align items-center'>
        <div className='col-lg-1'></div>
          <div className='col-lg-4'>
            <img height={'300px'} className='img-fluid' src={product?.thumbnail}></img>
          </div>

          <div className='col-lg-1'></div>
          <div className='col-lg-6'>
            <span className='lead'>PID: {product?.id}</span>
            <h1>{product?.title}</h1>
            <h3>$ {product?.price}</h3>
            <p style={{textAlign:'justify'}}> <span className='fw-bold text-primary'>Description</span> : {product?.description}</p>
            <div className='d-flex justify-content-between mt-5'>
              <button onClick={()=>handleWishlist(product)} className='btn btn-outline-danger'> < i className='fa-solid fa-heart text-danger'></i>Add to wishlist</button>
              <button onClick={()=>dispatch(addToCart(product))} className='btn btn-outline-dark'> < i className='fa-solid fa-cart-plus text-success'></i>Add to cart</button>
            </div>

          </div>
        </div>
      </div>

    </div>
    </>
   
  )
}

export default View