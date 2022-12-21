import React from "react";  
import './style.css';

const Card  = ({ product, onSelect }) =>  {
    const {id, category_id, description, image, name, price, stock} = product || {};
    return (
        <div className="card" onClick={() =>onSelect(product)}>
            <div className="container-image">
            <img className="card-image" src={Object.values(image)} alt={name} />
            </div>
            <div className="card-content">
                <h3 className="card-name">{name}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
                <p className="card-stock">{stock} in stock</p>
            </div>
            <div className="card-button-container">
                <button className='card-button-minus'>-</button>
                <input 
                    className='card-input'
                    type='text'
                    placeholder="0"
                />
                <button className='card-button-plus'>+</button>
            </div>
        </div>
    )
}

export default Card;