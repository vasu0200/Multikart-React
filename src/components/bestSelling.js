import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {v4 as uuid} from "uuid";
import { fetchBestSeller } from "../redux/slice/bestSellerSlice";
import ProductCard from "./productCard";



const BestSellerGifts = (props)=>{
    const products = useSelector(state => state.BestSeller.value)
    console.log(products)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchBestSeller());
    },[])

    return(
        <div className="products-container">
            <div className="products-header"><h3>{props.name}</h3> </div>
            <div className="products">
            {products.length && products.map(e=><ProductCard key={uuid()} data={e}/>)}
            </div>

        </div>
    )
}

export default BestSellerGifts;