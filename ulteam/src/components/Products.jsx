import React from 'react'
import { useState, useEffect} from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'
import { Category } from '@material-ui/icons'
import Alert from '@mui/material/Alert';

const Container = styled.div`
    padding:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    `
const Products = ({category,filters,sort}) => {

    const [products,setProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
           
            try{
                const response = await axios.get("https://ulteam-api.herokuapp.com/api/products");
                if(category){
                    const firstFilter = response.data.filter(product => {
                        return product.categories.includes(category)
                        });            
                    setNewProducts([...firstFilter])
                }

                setProducts(response.data);
            }catch (err){
                setApiError(true);
            };
        };
        getProducts();
    }, [category]);
    
    useEffect(() => {
        if (filters){
            filterProducts();
        }
        if (sort){
            sortProducts();
        }
    }, [products, category,filters,sort]);

    /**
     * niewe code 
     */
     function filterProducts() {
         //console.log("filters : ",filters)
        if(filters.categories){
            const res = products.filter(product => {
                return Object.values(filters).every(filter => {
                    return product.categories.includes(filter) 
                })
                });
            const listOfProducts = res
            setNewProducts([...listOfProducts])
        }else if(filters.platform){
            const res = products.filter(product => {
                return Object.values(filters).every(filter => {
                    return product.platform.includes(filter) 
                })
                });
            const listOfProducts = res
            setNewProducts([...listOfProducts])
        }
      }

      function sortProducts() {
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
            {
            newProducts.length > 0 
                ? newProducts.map((element) => <Product element={element} key={element._id}/>) 
                : products.slice(0,12)
                .map((element) => <Product element={element} key={element._id}/>)
            }
                              
            {
            apiError &&
            <Alert style={{ flex:"1",  margin: "10px 12px 0px 0px",letterSpacing: "3px",fontSize: "30px"}} variant="filled" severity="error">
                Something went wrong during data fetching, consult the <string>support</string>
            </Alert>
            }
        </Container>
    )
}

export default Products