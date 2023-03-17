import React, { useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeFromCart, deleteCart } from "../redux/cartSlice";
import {AiOutlineClose,AiOutlineCloseCircle} from "react-icons/ai";


import "../styles/cart.scss";

const ShoppingCart = (prop)=>{
    const cart = useSelector(state => state.Cart);
    const dispatch = useDispatch();
    return(
        <div className={prop.pass? ("cart"+ " " +"cartmove"):"cart"}>
              <AiOutlineClose onClick={()=>prop.setPass(false)} className="close"/>
        <div className="cart-container">
                <h1>Shopping Cart</h1>
                <div className="cart-product-container">
                    {cart.items.length && cart.items.map(e=>{
                        return(
                            <div className="cart-item">
                                {/* <AiOutlineCloseCircle className="delete-button"/> */}
                             <div className="cart-item-header">
                                <div className="cart-item-price">
                                    <p>{e.name}</p>
                                    <p>{e.cartQty}x{e.price && e.price[0]}</p>
                                </div>
                                <img className="cart-img" src={e.pictures && e.pictures[0].url}></img>
                             </div>
                            </div>
                            )
                        })}
                </div>

                  <h4>SUBTOTAL: ${cart.totalPrice}.00</h4>
                  <button>CHECKOUT</button>
            
        </div>
        </div>
    )
}

export default ShoppingCart;