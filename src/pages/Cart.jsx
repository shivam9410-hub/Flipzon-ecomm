import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/title';
import CartTotal from '../components/CartTotal';

const Cart = () => {

  const {products , currencey, cartItems ,navigate} = useContext(ShopContext) ;

  const [cartData, setCartData]= useState([]) ; 


  useEffect(()=>{

const tempData= [] ;
for(const items in cartItems){
  for(const item in cartItems[item]){
    if(cartItems[items][item]>0){
      tempData.push({
        _id:items,
        size:item,
        quantity: cartItems[items][item]
      })
    }
  }
}
setCartData(tempData) ;

  },[cartItems]) ;
  return (
    
<h1>asdf</h1>
  )
}

export default Cart
