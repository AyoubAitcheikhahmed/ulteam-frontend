

import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import { useSelector } from "react-redux";


const Container = styled.div`
`

const Wrapper = styled.div`
    padding: 25px;
    ${mobile({
        padding: "10px"
    })}
`

const Title = styled.h1`
    font-weight: 200;
    text-align: center;

`    
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
`
const TopButton = styled.button`
    padding:10px;
    font-weight: 600;
    cursor: pointer;
    border : ${(props)=> props.type === "filled" && "none"};
    background-color : ${(props)=> props.type === "filled" ? " #1b2d51" : "transparent"};
    color : ${(props)=> props.type === "filled" && "#3dc3b6"};
`
const TopTexts = styled.div`
    ${mobile({
        display: "none"
    })}
`
    
const TopText = styled.span`
    cursor:pointer;
    margin: 0px 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
        flexDirection: "column"
    })}
`

const Info = styled.div`
    flex:3;
    
`


const Product = styled.div`
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({
          flexDirection: "column"
    })}

`
const ProductDetail = styled.div`
    flex:2;
    display: flex;
`

const PriceDetail = styled.div`
    font-size: 6vh;
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${mobile({
        marginTop:"10px"
    })}
    `

const Image = styled.img`
    width: 50%;
    border: 1px solid #1b2d51;
    border-radius: 10px;`


const Details = styled.div`
    
    padding:20px;
    display: flex;
    flex-direction: column;
    justify-content: space-space-between;
`
const ProductName = styled.span`
    font-family: 'Roboto';
    margin-bottom: 15px;
`
const ProductPlatform = styled.span`
    font-family: 'Roboto';
`

const Hr = styled.hr`
    border: none;
    height: 5px;
    background-color: #1b2d51;
`


const Sum = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 10px; 
    flex:1;
    border: 0.5px solid #1b2d51;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 20vh;


`
const SumTitle = styled.div`
    font-size: 5vh;
    font-weight: 300;
    
`


const SumTotal = styled.div`
    margin : 20px 0px;
    font-size: 3vh;
`

const Button = styled.button`
    align-content: center;
    cursor: pointer;
    width: 100%;
    border: none;
    padding: 5px 20px;
    font-size: 4vh;
    cursor: pointer;
    transition: all 0.1s ease;
        &&:hover{
            background-color: #1b2d51;
            color: white;
            transform: scale(0.9);
        }
`; 


const ShoppingCart = () => {
   
    const cart_data = useSelector(state => state.cart)

    console.log(cart_data.products)

    return (
    
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>Mandje</Title>
                <Top>
                    <TopButton>Verder met shoppen</TopButton>
                    <TopTexts>
                        <TopText>Shopping cart</TopText>
                        <TopText>Wishlist</TopText>
                    </TopTexts>
                    <TopButton type="filled">Afrekenen</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart_data.products.map((element) => (
                            <Product>
                            <ProductDetail>
                                <Image src={element.image} />
                                    <Details>
                                        <ProductName>{element.title} </ProductName>
                                        <ProductPlatform>{element.platform} </ProductPlatform>
                                    </Details>
                            </ProductDetail>
                            <PriceDetail>
                            {element.price}  &euro;
                            </PriceDetail>
                            
                        </Product>
                        ))
                       }
                        
                    </Info>
                    <Hr />
                    <Sum>
                        <SumTitle>Order total</SumTitle>
                        <SumTotal>{cart_data.totalPrice} &euro;</SumTotal>
                        <Button>Afrekenem</Button>
                    </Sum>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )

}

export default ShoppingCart
