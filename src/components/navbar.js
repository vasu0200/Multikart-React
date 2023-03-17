import React, { useState } from "react";
import {AiOutlineMenu} from "react-icons/ai";
import {CiUser,CiHeart,CiShoppingCart,CiSearch} from "react-icons/ci";
import "../styles/navbar.scss";
import { useSelector } from "react-redux";
import ShoppingCart from "./cart";
import {  useNavigate } from "react-router-dom";


const Navbar = ()=>{
    const [display, setDisplay] = useState(false)
    const navigate = useNavigate();
  const cart = useSelector(state => state.Cart);

  const [show, setShow] = useState(false)

    return(
        <div className="navbar">
        <div className="navbarContainer">
            <div className="logo-container">
                <img className="logo" src="https://d-themes.com/react/porto/demo30/images/home/logo.png"/>
            </div>
            <div className="search-container">
                <input className="Search-bar" type="text" placeholder="I'm Searching for..."/>
                <button><CiSearch className="icon"/></button>
            </div>
            <div className="profile-cart-container">
              <div className="profile">
              <CiUser className="icons"/>
                <div>
                    <p>Welcome</p>
                    <h4 onClick={()=>navigate("/myProfile")}>My Account</h4>
                </div>
              </div>
                <CiHeart className="icons"/>
                <CiShoppingCart onClick={()=>setDisplay(true)} className="icons"/>
                <div className="totalQty">{cart.totalQty}</div>
            </div>

        </div>
        <div className="options-bar">
            <div className="nav-items departments" onClick={()=>setShow(show? false:true)}><AiOutlineMenu className="icon"/> Departments
            <div className={show ? "dropdown":"none"}>
                <ul>
                    <li>For Her</li>
                    <li>For Him</li>
                    <li>For Kids</li>
                    <li>Fashion</li>
                    <li>Kitchen</li>
                    <li>Stationary</li>
                    <li>Personalized</li>

                </ul>
            </div>
            </div>
            <div className="nav-items categories">Categories</div>
            <div className="nav-items products">Products</div>
            <div className="nav-items pages">Ages</div>
            <div className="nav-items new-arivals">New Arivals</div>
        </div>
        <ShoppingCart pass={display} setPass={setDisplay}/>
        </div>
    )
}

export default Navbar;