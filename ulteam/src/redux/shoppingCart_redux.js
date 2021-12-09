import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: "cart",
    initialState:{
        quantity: 0,
        products: [],
        totalPrice: 0
    },

    reducers: {
        addProduct: (state,action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.totalPrice += action.payload.price * action.payload.qty;
        }
    }
});





export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
