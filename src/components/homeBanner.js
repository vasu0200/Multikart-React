import React from "react";
import Carousel from "./carousel";
import "../styles/homeBanner.scss";

const HomeBanner = ()=>{
    return(
        <div className="homeBanner-container">
            <div className="section1">
                <p>An entire week to enjoy all offers</p>
                <h1 style={{color:"rgb(47, 62, 137)", fontSize:"45px"}}>THE WEEK</h1>
                <h1 style={{color:"rgb(216, 87, 130)"}}>Gift Shop</h1>
                <button>SHOP NOW</button>
            </div>
            <div className="carousel-section"><Carousel/></div>
            <div className="flashCard">
                <h2>FLASH SALE RUNNING</h2>
                <img src="https://d-themes.com/react/porto/demo30/images/home/products/400x400/product-1.jpg"/>
                <div className="button">SHOP SALE NOW</div>
            </div>
            <div  className="gift-finder">
                <div className="Title">
                <h1>GIFT FINDER</h1>
                <p>Find The Perfect Gift</p>
                </div>
                <div className="inputs">
                    <select>
                        <option>Price Range</option>
                        <option>0 - 100</option>
                        <option>100 - 200</option>
                        <option>200 - 500</option>
                    </select>
                    <select>
                    <option>By Color</option>
                        <option>Red</option>
                        <option>Black</option>
                        <option>Blue</option>
                    </select>
                    <select>
                    <option>By Size</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </div>

                <div className="button">VIEW SUGGESTIONS</div>
            </div>
        </div>
    )
}
export default HomeBanner;