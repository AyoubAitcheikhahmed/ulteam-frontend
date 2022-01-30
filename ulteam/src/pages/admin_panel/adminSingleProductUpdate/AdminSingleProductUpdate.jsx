import "./adminSingleProduct.css";
import Button from "mui-button";
import SendIcon from "@material-ui/icons/Send"
import { useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { updateProducts } from "../../../redux/apiRequests";
import { Alert,AlertTitle } from '@mui/material';


function AdminSingleProductUpdateUpdate() {

    const productId = useLocation().pathname.split("/")[2];
    const product = useSelector((state) => state.product.products.find(element =>  element._id === productId));
    
    const [productInput, setProductInput] = useState({});
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
        console.log(finalProduct)
        // updateProducts(productId,finalProduct,dispatch);
        
  
    }
    
    const handelNotifications = (product) => {
        
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
    return 1(
        <div className="product">
        <div className="header">
            <h1 className="productTitle">Update Game</h1>
                {notifications}
            <Button variant="contained" color="primary" style={{color:"white"}} endIcon={<SendIcon />} onClick={handleUpdate}>Update</Button>
        </div>
        <div className="productBody">
            <div className="productInfo">
                <div className="topInfo">
                    <h1 className="productTitle">{product.title}</h1>
                    <img src={product.image} alt="BattleField 2042" className="displayImage" />
                </div>
                <div className="bottomInfo">
                    <span className="infoTitle">Descripton</span>
                    <span className="info">{product.desc}</span>
                    <span className="infoTitle">Available on</span>
                    <span className="info">{product.platform}</span>
                    <span className="infoTitle">Price</span>
                    <span className="info">{product.price} &euro;</span>
                    <span className="infoTitle">Category</span>
                    <span className="info">{product.categories}</span>
                    <span></span>
                </div>
            </div>

            <div className="productUpdateInfo">
            <h3 className="productTitle">Update form</h3>
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

    )
}

export default AdminSingleProductUpdateUpdate
