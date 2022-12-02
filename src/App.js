import React, { useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/navbar';
import Sidebar from './components/sidebar'
import Burgerbar from './components/burgerbar';
import { Products } from './data/products';
import Card from './components/card'

function App() {

  const [is_open, set_is_open] = useState(false);
   const on_handler_cart = () => {
    set_is_open(!is_open);
    
  }
  const [is_open1, set_is_open1] = useState(false);
  const on_handler_burger = () => {
    set_is_open1(!is_open1);
  }
  return (
    <div className="App">
      <Burgerbar on_close1={on_handler_burger}  is_open1={is_open1}/>
      <Sidebar on_close={on_handler_cart} is_open={is_open}/>
      <Header numbers_of_items= {0} on_handler_cart={on_handler_cart} on_handler_burger={on_handler_burger} />
      <div>
      <h1 className="container">Productos destacados</h1>
      <div className='products-container'>
          {Products.map((product) => (
            <Card product={product} key={product.name} />
          ))}
        </div>
        </div>
    </div>
  );
}

export default App;
