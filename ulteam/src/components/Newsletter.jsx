import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
    background-color: #1b2d51;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({
        height: "45vh"
    })}
    `

const Title = styled.h1`
    font-size: 70px;
    color: white;
    margin: 10px;
`

const Description = styled.div`
    font-size: 24px;
    font-family: 'Roboto';
    color: #3dc3b6;
    margin-bottom: 10px;
    ${mobile({
        textAlign: "center",
        fontSize: "2vh",
        padding: "0px 10px",
        width:"80%"
    })}
`

const InputContainer = styled.div`
    width: 50%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid #3dc3b6;
    ${mobile({
        marginBottom: "10px"
    })}
    `

const Input = styled.input`
    border: none;
    flex:8;
    padding-left:10px;
`

const Button = styled.button`
    flex:1;
    border: none;
    background-color: #3dc3b6;
    color: white;
    ${mobile({
        
    })}
    `
const Newsletter = () => {
    return (
        <Container>
            <Title>Subscription</Title>
            <Description>Get weekly updates about the finest games and promotions to boost your game library</Description>
            <InputContainer>
                <Input placeholder="email@email.com"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
