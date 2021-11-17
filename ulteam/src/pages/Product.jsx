import { Filter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
    display: flex;

`
const ImgContainer = styled.div`
    flex:1;
    `

const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    padding: 0px 50px ;
    `

const Title = styled.h1`
    font-weight: 300;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 3vh;
`

const ButtonsContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
`

const ButtonAdd = styled.button`
    margin-top: 30px;
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
`; 

const ButtonBuy = styled.button`

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
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://www.1337.games/app/uploads/2021/04/zeus-s3-wz-social-share.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Call Of Duty Warzone</Title>
                    <Desc>Ervaar klassieke Call of Duty® first-person-gevechten in
                         een totaal nieuwe gigantische gevechtsarena voor 150 spelers.
                         Doe mee, bewapen je, plunder voor beloningen en vecht je een weg naar de top.
                         Welkom in Warzone</Desc>
                    <Price>22 &euro;</Price>
                    <ButtonsContainer>
                        <ButtonBuy>Buy</ButtonBuy>
                        <ButtonAdd>Add to shoping Cart</ButtonAdd>
                    </ButtonsContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
