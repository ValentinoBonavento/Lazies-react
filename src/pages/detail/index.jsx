import React, {useState, useContext} from "react";
import './style.css'
import { useLocation, useParams } from "react-router-dom"
import { CartContext } from "../../context"
import { Card } from "../../components";


const Detail = () =>{
const { id } = useParams() || {}
const { state } = useLocation();
const { onDecreaseItem, onIncreaseItem, getItemQuantity} = useContext(CartContext)


    return (
        <div className="container">
            <Card product={state} key={state.name} onSelect={() => {}} type = 'cardMax' decreaseQty={onDecreaseItem} increaseQty={onIncreaseItem} numberOfItem={getItemQuantity(state?.id)}/>
        </div>    
    )
}

export default Detail;