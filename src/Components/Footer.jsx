import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column bg-info text-light mt-5 ' style={{ width: '100%', height: '300px' }}>
      <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap mt-5'>
        <div style={{ width: '400px' }} className='website'>
          <h4>
            <i style={{ height: '25px' }} class="fa-solid fa-truck-fast me-2">E-cart</i>
          </h4>

          <h6>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, sequi eius ex ab, aliquid dolore labore aliquam et soluta iusto possimus magni eligendi impedit illum praesentium, obcaecati dolor quidem quo!
          </h6>
          <h6>Code licensed Luminar, docs cc by 3.0</h6>
          <p>Currently v1.0.0</p>
        </div>

      <div className='links d-flex flex-column'>
      <h4>Links</h4>
      <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
      <Link to={'cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
      <Link to={'wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist</Link>
      </div>

      <div className='guides d-flex flex-column'>
        <h4>Guides</h4>
        <Link to={'https://getbootstrap.com'} style={{textDecoration:'none',color:'white'}}>React</Link>
        <Link to={'https://react-bootstrap.github.io'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
        <Link to={'https://react-bootstrap.github.io'} style={{textDecoration:'none',color:'white'}}>Routing</Link>
      </div> 

      <div className='contact d-flex flex-column flex-wrap'>
        <h4>Contact Us</h4>
        <div className='d-flex'>
          <input className='form-control' placeholder='enter your email'></input>
          <button className='btn btn-warning ms-3'><i class="fa-solid fa-arrow-right fa-beat"></i></button>
        </div>
        <div className='icons mt-3 d-flex justify-content-between fs-5'>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-linkedin-in'></i></Link>
        <Link to={'https://react-bootstrap.github.io'} style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-twitter'></i></Link>
        <Link to={'https://react-bootstrap.github.io'} style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-facebook-f'></i></Link>
        <Link to={'https://react-bootstrap.github.io'} style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-envelope'></i></Link>
        <Link to={'https://react-bootstrap.github.io'} style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-tiktok'></i></Link>
        <Link to={'https://react-bootstrap.github.io'} style={{textDecoration:'none',color:'white'}}><i className='fa-brands fa-github'></i></Link>
        </div>
        
      </div>
    </div>

    <p>Copyright @ 2013 E-cart. Build with React.</p>


    </div>

   
  )
}

export default Footer