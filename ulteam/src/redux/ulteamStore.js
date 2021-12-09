import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./shoppingCart_redux";
import userReducer from "./user_redux";

export default configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
    }
});