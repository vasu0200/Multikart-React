import React, { useState } from "react";
import "../styles/carousel.scss";
import {GrNext, GrPrevious} from "react-icons/gr"

export default function Carousel(){
    const [count, setCount] = useState(0)

    function previous(){
        setCount(count-1);
        let body = document.getElementById("cont");
        if(count>0){
        body.style.transform += "translateX(250px)";
        body.style.transition = ".3s";
        }else{
        body.style.transform += "translateX(0)";
        setCount(0)
            
        }
    }
    function next(){
        setCount(count+1);
        let body = document.getElementById("cont");
        if(count<3){
        body.style.transform += "translateX(-250px)";
        body.style.transition = ".3s";
        }else{
        body.style.transform += "translateX(0)";
        setCount(3)

        }

    }
    return(
        <div  className="carousel-container">
            <div id="cont" className="carousel-item-cont">
            <div className="carousel-item" >
                <img className="carousel-img" src="https://d-themes.com/react_asset_api/porto/uploads/shop30_product_10_1_d78d370077.jpg"/>
                <p>Panda Paw Mug</p>
                <h3>$49.00</h3>
                </div>
            <div className="carousel-item" >
                <img className="carousel-img"  src="https://d-themes.com/react_asset_api/porto/uploads/shop30_product_4_1_9338596cb9.jpg"/>
                <p>Black Cup</p>
                <h3>$59.00</h3>
                </div>
            <div className="carousel-item" >
                <img className="carousel-img"  src="https://d-themes.com/react_asset_api/porto/uploads/shop30_product_8_1_368da48c92.jpg"/>
                <p>Black Pen</p>
                <h3>$49.00</h3>
                </div>
            <div className="carousel-item" >
                <img className="carousel-img"  src="https://d-themes.com/react_asset_api/porto/uploads/shop30_product_3_1_37195844e7.jpg"/>
                <p>Dotted Mug</p>
                <h3>$19.00</h3>
                </div>
            </div>

            <div className="prev" onClick={previous}><GrPrevious/></div>
            <div className="next" onClick={next}><GrNext/></div>
        </div>
    )
}