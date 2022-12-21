import React from 'react'
import './style.css';
import { Products } from '../../data/products';
import  Card  from '../../components/card';
import { useNavigate } from 'react-router-dom';

const Home = ()  =>{

  const navigate = useNavigate();
  const onHandlerSelect = (product) => {  
    console.log(product)
    navigate(`/product/${product.id}`, { state: product})
  }
  return (
      <div className="container">
      <h1 className='products-title'>Productos destacados</h1>
      <div className='products-container'>
          {Products.map((product) => (
            <Card product={product} key={product.name} onSelect={onHandlerSelect}/>
          ))}
        </div>
      </div>
      
  );
}

export default Home;