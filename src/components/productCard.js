import React from "react";
import {v4 as uuid} from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import "../styles/producrCard.scss";
import {CiShoppingCart} from "react-icons/ci";
import {MdOutlineRemoveShoppingCart} from "react-icons/md"
const ProductCard = ({data})=>{

    const cart = useSelector(state => state.Cart);
    // console.log(cart)
    const dispatch = useDispatch();

    return(
        <div className="productCard-container">
            <img className="productimg" src={data.pictures && data.pictures[0].url} alt=""/>
            <button className="AddtoCart-button" onClick={() => dispatch(addToCart(data))}><CiShoppingCart style={{fontSize: "25px"}}/></button>
            <button className="removeCart-button" onClick={() => dispatch(removeFromCart(data))}><MdOutlineRemoveShoppingCart style={{fontSize: "25px"}}/></button>
            <p style={{color: "gray"}}>{data.categories && data.categories[0].name}</p>
            <p className="name">{data.name}</p>
            <h2>${data.price && data.price[0]}.00</h2>
            <div className="quick-view">QUICK VIEW</div>
        </div>
    )
}

export default ProductCard;