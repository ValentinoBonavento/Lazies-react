import React from "react";
import './style.css'
import logo from '../pics/logo1.png'
import burger from '../pics/burger.png'
import { Link } from "react-router-dom";

const Header = ({ number_of_items = 0, on_handler_cart, on_handler_burger}) => {
    ;
    return (
        <div className="header-menu">
            <div onClick={on_handler_burger} className="header-menu-burger">
              <img src={burger} alt="" className="header-logo-burger" />  
            </div>
            <div className="header-menu-logo">
                <Link to='/'><img src={logo} alt="" className="header-logo"/></Link>
            </div>
            <div onClick={on_handler_cart} className="header-menu-cart"> 
            <img src='https://cdn-icons-png.flaticon.com/512/834/834781.png' alt="" className="header-menu-cart-img" />
            <div className="header-menu-cart-number-container">
                <span className="header-menu-cart-number">{number_of_items}</span>
            </div>
            </div>
            
        </div>
    )
}

export default Header;