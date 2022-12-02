import React from "react";
import './style.css';
 
const Sidebar = ({ children, is_open, on_close}) => {
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
            {children}
        </div>
    )
}

export default Sidebar;