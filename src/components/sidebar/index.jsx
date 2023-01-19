import React, {useContext} from "react";
import './style.css';
import { Link } from "react-router-dom";
import { CartContext } from "../../context";
import CartItem from '../cart-item';
 
const Sidebar = ({ children, is_open, on_close}) => {
    const { cart } = useContext(CartContext)
    return (
        <div 
        className="sidebar"
        style={{
            transform: is_open ? 'translateX(0)' : 'translateX(100%)'
        }}
        >
            <div className="close-button-container">
                <button onClick={on_close} className="close-button">x</button>
            </div>
            <div className='cart-container'>
            {cart.length === 0 ? ( <p className='empty-cart'>Your cart is empty</p> ) : (
                cart.map((item) => (
                    <CartItem key={(item.id)} {...item}  />
                )
            ))}
        <Link to='./cart' className='button-cart'>Ver carrito</Link>
        </div>
        </div>
    )
}

export default Sidebar;