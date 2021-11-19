import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`

    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom right, #3dc3b6,#1b2d51);
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({
        width:"80%"
    })}

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 200;
`

const Input = styled.input`
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: #1b2d51;
    background-color: white;
    outline: none;
    flex:1;
    min-width: 40%;
    margin: 25px 12px 0px 0px;
    ${mobile({
        
    })}
`

const Agreement = styled.span`
    margin-top: 20px;
    font-size: 12px;
    font-weight: 100;
    font-family: 'Roboto';
    ${mobile({
        fontSize:"10px"
    })}
`

const Button = styled.button`
    
    cursor: pointer;
    width: 100%;
    border: none;
    margin-top: 15px;
    color: white;
    padding: 5px;
    background-color: #1b2d51;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Maak Account aan</Title>
                <Form>
                    <Input placeholder="naam"/>
                    <Input placeholder="familienaam"/>
                    <Input placeholder="gebruikersnaam"/>
                    <Input placeholder="email"/>
                    <Input placeholder="wachtwoord"/>
                    <Input placeholder="wachtwoord bevestigen"/>
                    <Agreement>
                        Bij het aanmaken van een account, ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id facilis nam.
                    </Agreement>
                    <Button>Maak Account</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
