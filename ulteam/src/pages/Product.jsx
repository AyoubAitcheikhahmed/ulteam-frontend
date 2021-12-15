import { Filter } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { mobile } from '../responsive'
import { reqPublic } from '../axiosReq'
import axios from 'axios'
import { addProduct } from '../redux/shoppingCart_redux'
import { useDispatch } from 'react-redux'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    ${mobile({
        padding: "10px",
        flexDirection:"column"
    })}

`
const ImgContainer = styled.div`
    flex:2;
    float:left;
    `

const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;
    float:left;
    ${mobile({
        marginTop:"20px",
        height: "40vh",
    })}
`

const InfoContainer = styled.div`
    padding: 0px 50px;
    flex: 2;
    ${mobile({
        padding: "10px"
    })}
    `

const Title = styled.h1`
    font-weight: 300;
`

const Desc = styled.p`
    font-family: 'Roboto';
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 6vh;
`

const ButtonsContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    ;
    ${mobile({
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    })}
`

const ButtonAdd = styled.button`
    margin-top: 20px;
    cursor: pointer;
    width: 30%;
    border: none;
    padding: 5px 20px;
    font-size: 4vh;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &&:hover{
        background-color: #3dc3b6;
        color: white;
        transform: scale(1.1);
    }
    &&:before{
        content: "Add to cart";
    }
    @media only screen and (max-width: 380px){
        &&:before{
        content: "+";}
    }
`

const ButtonBuy = styled.button`
    cursor: pointer;
    width: 30%;
    border: none;
    padding: 5px 20px;
    font-size: 4vh;
    cursor: pointer;
    transition: all 0.2s ease;

    &&:hover{
        background-color: #1b2d51;
        color: white;
        transform: scale(1.1);
    }
`; 





const Product = () => {

    const prd_id = useLocation().pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();
    
    useEffect(() => {

        const getProduct = async () => {
         
        try{
            const response = await axios.get("http://localhost:5000/api/products/find/"+prd_id);
       
            setProduct(response.data);

        }catch (err){}
            //error
        }; 
        getProduct()
    }, [prd_id]);

    const handleAdd = () => {
        const qty = 1
        dispatch(addProduct({...product,qty}))
    }

    
    
    
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.image}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>{product.price} &euro;</Price>
                    <ButtonsContainer>
                        <ButtonBuy>Buy</ButtonBuy>
                        <ButtonAdd onClick={handleAdd}></ButtonAdd>
                    </ButtonsContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
