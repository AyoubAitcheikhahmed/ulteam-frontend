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
           
            try{
                const response = await axios.get(category ? `http://localhost:5000/api/products/?cat=${category}` 
                : "http://localhost:5000/api/products");

                setProducts(response.data);
            }catch (err){
                //error
            };
        };
        getProducts();
    }, [category]);
    
    useEffect(() => {

        filterProducts()
        sortProducts()
        // setNewProducts(
        //     newProducts.filter( element => Object.values(filters)
        //     .some(item => element.categories.indexOf(item.toUpperCase()) >= 0))
        // );

    }, [products, category,filters,sort]);

    /**
     * niewe code 
     */
     function filterProducts() {
        if(filters){
            const res = products.filter(product => {
                return Object.values(filters).every(filter => {
                    return product.categories.includes(filter) 
                })
                });
            const listOfProducts = res
            setNewProducts([...listOfProducts])
        }
      }

      function sortProducts() {
       console.log(sort)
        if (sort){
            setNewProducts( prev => 
                sort === "inc"
                ? [...prev].sort((item1,item2) => item1.price - item2.price)
                : [...prev].sort((item1,item2) => item2.price - item1.price)
                );
        }
    }
      

    //End Nieuwe code

    return (
     
        <Container>
            {newProducts.length > 0 
                ? newProducts.map((element) => <Product element={element} key={element._id}/>) 
                : products.map((element) => <Product element={element} key={element._id}/>)
            }
        </Container>
    )
}

export default Products