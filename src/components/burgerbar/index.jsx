import React from "react";
import './style.css';
 
const Burgerbar = ({ children, is_open1, on_close1}) => {
    return (
        <div 
        className="burgerbar"
        style={{
            transform: is_open1 ? 'translateX(0)' : 'translateX(-100%)'
        }}
        >
            <div className="close-button-container">
                <button onClick={on_close1} className="close-button">x</button>
            </div>
            {children}
        </div>
    )
}

export default Burgerbar;