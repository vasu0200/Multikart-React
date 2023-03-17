import { useEffect, useState } from "react"
import React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";
import "../styles/popup.scss";

export default function Popup (){
    const [pop, setPop] = useState(false)
  
   useEffect(()=>{
    setTimeout(()=>{
        setPop(true)
      },3000)

  
   },[])
    return(
        <div>
            <div className={pop? "popup":"popup-none"}>
            <p onClick={()=>setPop(false)} className="close"><AiOutlineCloseCircle/></p>
            <div className="popup-content">
                <h1>SUBSCRIBE TO NEWSLETTER</h1>
                <p>Subscribe to the Porto mailing list to receive updates on new arrivals,
                     special offers and our promotions</p>
                <div className="popup-email"><input placeholder="Your Email Address"/><button>SUBMIT</button></div>
            </div>
          </div>
        </div>
    )

}