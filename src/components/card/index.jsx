import React from "react";  
import './style.css';

const Card  = ({ product, onSelect, type = 'vCard', decreaseQty, increaseQty, numberOfItem }) =>  {
    const {id, category_id, description, image, name, price, stock} = product || {};
    return (
        <div className={type === 'vCard' ? 'card' : 'cardMax'} onClick={() =>onSelect(product)}>
            <div className="container-image">
            <img className="card-image" src={Object.values(image)} alt={name} />
            </div>
            <div className="card-content">
                <h3 className="card-name">{name}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
                <p className="card-stock">{stock} in stock</p>
            </div>
            {type === 'cardMax' && <div className="card-button-container">
                <button onClick={() => decreaseQty(id)} className='card-button-minus' disabled={numberOfItem === 0}>-</button>
                <input 
                    disabled
                    className='card-input'
                    type='text'
                    value={numberOfItem}
                />
                <button onClick={() => increaseQty(id)} className='card-button-plus' disabled={numberOfItem === stock}>+</button>
            </div>}
            {type === 'cardMax' && <div className="sideCart">
                <button className="sideAdd">Agregar a carrito</button>
            </div> }

        </div>
    )
}

export default Card;