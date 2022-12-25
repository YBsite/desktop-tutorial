import React from "react"
import "./style.css"
import { useState } from 'react';
  
  const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  const [close,setClose] = useState(false);
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
         

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            
            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                   
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
              <button onClick={()=>{setClose(!close)}}> add to cart</button><br/>
            </div>
          </div>
        </div>
      </section>
      <div className={close ?"add-to-cart" : "closing-item"}>
      <div className="buy-items">
        <div className="colsee">
        <button onClick={()=>{setClose(!close)}}><i class="fa-solid fa-xmark"></i></button>
        </div>
        <h2>START BUIYING</h2>
        <div className="inputs-side">
          <div className="name-input">
            <div className="first-name">
                <input type="text" placeholder='first name' id="" />
            </div>
            <div className="first-name">
                <input type="text" placeholder='family name' id="" />
            </div>

          </div>
          <div className="email-input">
            <input type="emqil" placeholder='adreese mail' />
          </div>
          <div className="card-number">
            <input type="number" placeholder='card number' />
          </div>
          <div className="card-details">
            <div className="cvc">
              <input type="number" placeholder='CVC' />
            </div>
            <div className="date">
              <input type="date" />
            </div>
            <div className="number">
              <input type="XXXX" />
            </div>
           
          </div>
          <div className="btn-connexion">
              <button>BUY NOW</button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart
