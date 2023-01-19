import React, { useState, useEffect, useContext } from 'react'
import Router from './router'
import {Sidebar, Burgerbar, Header, Loader, CartItem} from './components'
import { Link } from 'react-router-dom';
import './App.css';
import { CartProvider, CartContext } from './context';


const App = ()  =>{

  const { cart } = useContext(CartContext)
 const [loading, set_loading] = useState(false)
  useEffect(() => {
    set_loading(true);
    setTimeout(() =>{
      set_loading(false);
    }, 2000);
  }, []);

  const [is_open, set_is_open] = useState(false);
   const on_handler_cart = () => {
    set_is_open(!is_open);
    
  }
  const [is_open1, set_is_open1] = useState(false);
  const on_handler_burger = () => {
    set_is_open1(!is_open1);
  }
  
  return (

    <div className="container1">
      
      {loading ? (
        <Loader/>
      ) : (
      <div>
        <CartProvider>
      <Burgerbar on_close1={on_handler_burger}  is_open1={is_open1}/>
      <Sidebar on_close={on_handler_cart} is_open={is_open}>
       
      </Sidebar>
      <Header numbers_of_items= {cart.length} on_handler_cart={on_handler_cart} on_handler_burger={on_handler_burger} />
      <Router />
      </CartProvider>
      </div> 
      ) }
      
    </div>
    
  );
}

export default App;
