import React from "react";
import './style.css'

const CartItem = ({ id, image, name, price, quantity, onRemoveItem}) => {
    return (
        <div className="cart-item">
            <img src={Object.values(image)} alt={name} className="cart-item-image" />
            <div className="cart-item-details">
                <h3 className="cart-item-name">{name}</h3>
                <p className="cart-item-price">${price}</p>
                <p className="cart-item-quantity">{quantity}</p>
            </div>
            <div className="cart-item-actions">
                <button className="card-item-remove" onClick={() => onRemoveItem(id)}>X</button>
            </div>
        </div>
    )
}

export default CartItem;