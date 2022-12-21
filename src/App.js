import React, { useState } from 'react'
import Router from './router'
import {Sidebar, Burgerbar, Header} from './components'
import { Home } from './pages';
import { Link } from 'react-router-dom';
import './App.css';


const App = ()  =>{

  const [is_open, set_is_open] = useState(false);
   const on_handler_cart = () => {
    set_is_open(!is_open);
    
  }
  const [is_open1, set_is_open1] = useState(false);
  const on_handler_burger = () => {
    set_is_open1(!is_open1);
  }
  console.log(Home)
  console.log(Router)
  return (
    <div className="container1">
      <Burgerbar on_close1={on_handler_burger}  is_open1={is_open1}/>
      <Sidebar on_close={on_handler_cart} is_open={is_open}>
        <div className='cart-container'>
        <Link to='./cart' className='button-cart'>Ver carrito</Link>
        </div>
      </Sidebar>
      <Header numbers_of_items= {0} on_handler_cart={on_handler_cart} on_handler_burger={on_handler_burger} />
      <Router />
    </div>
  );
}

export default App;
