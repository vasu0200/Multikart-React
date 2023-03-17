import { configureStore } from "@reduxjs/toolkit";
import bestSellingSlice from "./slice/bestSellerSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        BestSeller: bestSellingSlice.reducer,
        Cart: cartSlice.reducer
    }
})

export default store