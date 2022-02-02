import { 
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
    }  from "./product_redux";
import axios from "axios";
import { adminRequest } from "../server_methodes";


const BASE_URL = "http://localhost:5000/api/";

export const getProducts = async (dispatch) => {
        dispatch(getProducts_begin());
    try{
        const response = await axios.get( BASE_URL+"products");
        dispatch(getProducts_true(response.data));
    }catch (err){
        dispatch(getProducts_false());
    };
};


export const deleteProducts = async (id,dispatch) => {
    dispatch(deleteProducts_begin());
    try{
        
        await adminRequest.delete(`products/${id}`);
        dispatch(deleteProducts_true(id));
    }catch (err){
        dispatch(deleteProducts_false());
    };
};

export const addProducts = async (product, dispatch) => {
    dispatch(addProducts_begin());
try{
    const response = await axios.post( BASE_URL+"products",product);
    dispatch(addProducts_true(response.data));
}catch (err){
    dispatch(addProducts_false());
};
};

//not complete
export const updateProducts = async (id ,product ,dispatch) => {
    dispatch(updateProducts_begin());
try{
    console.log("inside UPDATE PRODUCTS",{_id:id,product:product});
    dispatch(updateProducts_true({_id:id,product:product}));
     await adminRequest.put(`products/${id}`,product);
    
}catch (err){
    dispatch(updateProducts_false());
};
};
