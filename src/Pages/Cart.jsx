import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../Redux/Slices/cartSlice'
import Header from '../Components/Header'

function Cart() {
  const cart = useSelector(state => state.cartReducer)
  const [totalCartAmount,setTotalCartAmount] = useState(0) 
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(()=>{
    if(cart?.length>0){
      setTotalCartAmount(cart?.map(item=>item.totalPrice)?.reduce((p1,p2)=>p1+p2))
    }else{
      setTotalCartAmount(0)
    }
  }, [cart])

  const handleCheckout=()=>{
    alert('Order placed succesfully...Thank you for shopping with us !!!')
    dispatch(emptyCart())
    navigate('/')
  }

   const handleDecrement=(product)=>{
    if(product.quantity==1){
      dispatch(removeCartItem(product.id))
    }else{
      dispatch(decQuantity(product))
    }
   }
  return (
    <>
    <Header></Header>
    
     <div style={{ marginTop: '100px' }}>
      {cart?.length > 0 ? <div className='container'>
        <h1>Cart Summary</h1>
        <div className='row'>
          <div className='col-lg-8'>
            <table className='table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart?.map((product, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{product?.title}</td>
                      <td><img width={'60px'} height={'60px'} src={product?.thumbnail} alt='no image'></img></td>

                      <td>
                      <div className='d-flex align-items-center'>
                        <span onClick={()=>handleDecrement(product)} style={{cursor:'pointer'}} className='fw-bolder'> -  </span>
                      <td><input type='text' style={{ width: '50px' }} className='form-control' value={product?.quantity} readOnly ></input></td>
                      <span onClick={()=>dispatch(incQuantity(product))} style={{cursor:'pointer'}} className='fw-bolder'> +  </span>
                      </div>
                      </td>

                      <td>${product?.totalPrice}</td>
                      <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='btn btn-link'><i className='fa-solid fa-trash text-danger'></i></button></td>
                    </tr>

                  ))
                }
              </tbody>

            </table>
            <div className='float-end mt-3'>
              <button className='btn btn-danger me-3'>Empty Cart</button>
              <Link to={'/'} className='btn btn-primary'>Shop More</Link>
            </div>

          </div>
          <div className='col-lg-4'>
            <div className='shadow border rounded p-4'>
              <h5>Total Products: <span className='fw-bolder text-danger'>{cart?.length}</span></h5>
              <h4>Total Amount: <span className='fw-bolder text-danger'> </span>{totalCartAmount}</h4>
              <hr></hr>
              <div className='d-grid mt-4'>
                <button onClick={handleCheckout} className='btn btn-success'>Checkout</button>
              </div>
            </div>
          </div>

        </div>
      </div>
        :
        <div style={{ height: '40vh' }} className='d-flex flex-column justify-content-center align-items-center w-100'>
          <img className='img-fluid' style={{ height: '250px' }} src='https://png.pngtree.com/png-clipart/20220704/original/pngtree-empty-shopping-cart-store-icon-png-image_8308409.png' alt='empty cart'></img>
          <h2 className='text-dark'>Your Cart is Empty !!!</h2>
        </div>
      }

    </div>
    </>
   
  )
}

export default Cart