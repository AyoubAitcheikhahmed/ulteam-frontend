import "./adminAddProduct.css";
import Button from "mui-button";
import SendIcon from "@material-ui/icons/Send"
import { useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { addProducts } from "../../../redux/apiRequests";
import { Alert,AlertTitle } from '@mui/material';
import Navbar from '../adminComponents/AdminNavbar';

function AdminAddProduct() {


    
    const [productInput, setProductInput] = useState({});

    //2array categories[] and platforms[]
    const [categories, setCategories] = useState([]);
    const [platforms , setPlatforms] = useState([]);

    const [notifications, setNotifications] = useState();
    const dispatch = useDispatch();
    const { errorFlag } = useSelector((state) => state.product)

    const handleChange = (event) => {
    
        setProductInput(prev => {
            return {...prev, [event.target.name] : event.target.value}
        });
        
        
    }

    const handelPlatforms = (event) => {
        setPlatforms(event.target.value.split(","));
    }
    const handelCategories = (event) => {
        setCategories(event.target.value.split(","))
       
    }

    const handleUpdate = (event) => {

        event.preventDefault();
        //add 2 arrays (categories[,,,] and platform[,,,,] to object )
        
        const finalProduct = {...productInput,categories,platforms};
        setNotifications(handelNotifications(finalProduct));

        addProducts(finalProduct,dispatch);
        
  
    }
    
    //https://github.com/AyoubAitcheikhahmed/ulteam-frontend.git
    //https://github.com/HOGENT-Web/frontendweb-pieter-2122-AyoubAitcheikhahmed.git

    const handelNotifications = (product) => {
        let  keys = Object.keys(product);
        if(keys.length === 2){
            return(
                <Alert severity="error" >
                <AlertTitle>Error</AlertTitle>
                <strong>Error </strong> All Fields are required, please fill all data out
                </Alert>
            );
        }
        
        if(!errorFlag){
            return(
            <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            <strong>{product.title} </strong> lays successfully in our database.
            </Alert>
        );
        }else if (errorFlag){
            return(
                <Alert severity="error" >
                <AlertTitle>Error</AlertTitle>
                <strong>Error </strong> occured during your request.
                </Alert>
            );
        }
        
    }
    return (
        <>
         <Navbar />
        
        <div className="product">
        <div className="header">
            <h1 className="productTitle">Create Game</h1>
                {notifications}
            <Button variant="contained" color="primary" style={{color:"white"}} endIcon={<SendIcon />} onClick={handleUpdate}>Create</Button>
        </div>
        <div className="productBody">


            <div className="productUpdateInfo">
            <h3 className="productTitle">New Game form</h3>
            <form action="" className="productForm">
        <div className="inputItem">
            <label >Game Title </label>
            <input 
            name="title" 
            type="text" 
            className="productInput" 
            onChange={handleChange} />
        </div>
        <div className="inputItem">
            <label >Link to Image </label>
            <input name="image" type="text" className="productInput" onChange={handleChange} />
        </div>
        <div className="inputItem">
            <label >Price</label>
            <input name="price" type="text" className="productInput" onChange={handleChange} />
        </div>
        <div className="inputItem">
            <label >Description </label>
            <input name="desc" type="text" className="productInput" onChange={handleChange} />
            </div>

        <div className="inputItem"> 
            <label >Platform </label>
            <input name="platform" type="text" className="productInput" onChange={handelPlatforms} />
        </div>
        <div className="inputItem">
            <label >Category</label>
            <input name="categories" type="text" className="productInput" onChange={handelCategories} />
        </div>
      
    </form>
            </div>

        </div>
    </div>
    </>
    )
}

export default AdminAddProduct
