import React from "react";
import './style.css'
import { useLocation } from "react-router-dom"
import { Card } from "../../components";

const Detail = () =>{
const { state } = useLocation()
    return (
        <div className="container">
            <Card product={state} key={state.name} onSelect={() => {}}/>
        </div>    
    )
}

export default Detail;