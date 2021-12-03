import React from 'react'
import { useState, useEffect} from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'
import { Category } from '@material-ui/icons'

const Container = styled.div`
    padding:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    `
const Products = ({category,filters,sort}) => {

    const [products,setProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);

    useEffect(() => {
        
        const getProducts = async () => {
            console.log("inside getProducts ",category)
            try{
                const response = await axios.get(category ? `http://localhost:5000/api/products/?cat=${category}` 
                : "http://localhost:5000/api/products");
                setNewProducts(response.data);
            }catch (err){
                //error
            };
        };
        getProducts();
    }, [category]);
    
    useEffect(() => {
        console.log(category)
        category && setNewProducts(
            products.filter( element => Object.entries(filters).every(([key,value]) => 
                element[key].includes(value)
            )
            )
        );

    }, [products, category,filters]);


    return (
        <Container>
            {newProducts.map((element) => (
                
                <Product element={element} key={element._id}/>
            ))}
        </Container>
    )
}

export default Products