import React from 'react'
import "./Products.css"

export const Products = () => {
  return (
     
<div id='sign'>
<div className='text-center titre'>
        <h1> Create New Account</h1>
        <h2>Create your own Media Center account</h2>
        <label htmlFor=""><h3>Email</h3></label>
        <input type="Email" />  
        <div className='text-center' id='button'>
<button className="btn btn-dark">
           sing up
        </button>
        <h1 id = 'sign in'>Sign In</h1>
        <h4>Hello, Welcome to your account</h4>
        <div className='ft'>
          <button ><i class="fa-brands fa-facebook"></i>Facebook</button>
          <button><i class="fa-brands fa-twitter"></i>Twitter</button>
        </div>
        <div id='input'>
        <label htmlFor=""><h3>Email.</h3></label>
        <input type="Email" /> 
       <div> <label htmlFor=""><h3>passw</h3></label>
        <input type="password" />  </div>
</div>
<div className='login'>
  <div className="remeber">
    <a>remeber me</a>
    
  </div>
  <div className="sign-in">
    <button  className="btn btn-dark">Secure Sign In</button>
  </div>
  <div className="password">
    <a>  Forgotten Password ?</a>
  </div>

</div>
        
</div>
</div>
</div>
    
  
  )
  
}
