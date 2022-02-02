import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : "product",
    initialState: {
        products : [],
        errorFlag: false,
        fetchingFlag : false,
    },
    reducers: {
        //get
        getProducts_begin:(state) => {
            state.fetchingFlag = true;
            state.errorFlag = false
        },

        getProducts_true:(state,action) => {
            state.fetchingFlag = false;
            state.errorFlag = false;
            state.products = action.payload;
        },
        getProducts_false:(state,action) => {
            state.fetchingFlag = false;
            state.errorFlag = true;
        },
        
        //delete
        deleteProducts_begin:(state) => {
            state.fetchingFlag = true;
            state.errorFlag = false
        },

        deleteProducts_true:(state,action) => {
            state.fetchingFlag = false;
            state.products.splice(state.products.findIndex((element) => element._id === action.payload._id),1);
        },
        deleteProducts_false:(state) => {
            state.fetchingFlag = false;
            state.errorFlag = true;
        },

        //add
        addProducts_begin:(state) => {
            state.fetchingFlag = true;
            state.errorFlag = false
        },

        addProducts_true:(state,action) => {
            state.fetchingFlag = false;
            state.products.push(action.payload);
        },
        addProducts_false:(state) => {
            state.fetchingFlag = false;
            state.errorFlag = true;
        },

        //update
        updateProducts_begin:(state) => {
            state.fetchingFlag = true;
            state.errorFlag = false
        },
        
        updateProducts_true:(state,action) => {
            state.fetchingFlag = false;
            console.log("PAYLOAD ",action.payload);
            console.log("PAYLOAD PRODUCT",action.payload.product);
            state.products[state.products.findIndex((element) => element._id === action.payload.id)] = action.payload.product;
        },
        updateProducts_false:(state) => {
            state.fetchingFlag = false;
            state.errorFlag = true;
        },
    }
});

export const { 
    getProducts_begin,
    getProducts_true,
    getProducts_false,

    deleteProducts_begin,
    deleteProducts_true,
    deleteProducts_false,
    
    addProducts_begin,
    addProducts_true,
    addProducts_false,

    updateProducts_begin,
    updateProducts_true,
    updateProducts_false
    } = productSlice.actions;
export default productSlice.reducer;