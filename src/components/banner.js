import React from "react";
import "../styles/banner.scss";
const Banner = ()=>{
    return(
        <div className="banner-Conatiner">
            <div className="banner-item">
                <div><h2>GIFTS $10</h2>
                <p>& Under</p></div>

                <p className="link">SHOP NOW</p>
            </div>
            <div className="banner-item under20">
                <div><h2>GIFTS $20</h2>
                <p>& Under</p></div>

                <p className="link">SHOP NOW</p>
            </div>
            <div className="banner-item under50">
                <div><h2>GIFTS $50</h2>
                <p>& Under</p></div>

                <p className="link">SHOP NOW</p>
            </div>
            <div className="banner-item under99">
                <div><h2>GIFTS $99</h2>
                <p >& Under</p></div>

                <p className="link">SHOP NOW</p>
            </div>
        </div>
    )
}

export default Banner;