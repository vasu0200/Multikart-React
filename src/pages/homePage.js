import React, { useState, useEffect } from "react";

import Banner from "../components/banner";
import BestSellerGifts from "../components/bestSelling";
import Banner2 from "../components/banner2";
import HomeBanner from "../components/homeBanner";
import Popup from "../components/popup";


function HomePage(){
 
  
    return(
        <div>

          <Popup/>
      <HomeBanner/>
      <Banner/>
      <BestSellerGifts name="Best Selling Gifts"/>
      <Banner2/>
      <BestSellerGifts name="Our Recommendations"/>
        </div>
    )
}

export default HomePage;