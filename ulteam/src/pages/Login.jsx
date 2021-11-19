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
    width: 30%;
    background-color: white;
    ${mobile({
        width: "70%"
    })}

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 200;
`

const Input = styled.input`
    border: none;
    font-family: 'Roboto';
    flex:1;
    min-width: 40%;
    margin: 25px 12px 0px 0px;
`


const Button = styled.button`
    cursor: pointer;
    width: 100%;
    border: none;
    margin: 20px 0px;
    color: white;
    padding: 5px;
    background-color: #1b2d51;
`

const Link = styled.div`
    
    margin: 5px 0px;
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 100;
    cursor:pointer;

`

const Login = () => {
    return (
<Container>
            <Wrapper>
                <Title>Meldaan</Title>
                <Form>
                    <Input placeholder="gebruikersnaam"/>
                    <Input placeholder="wachtwoord"/>
                    <Button>Meld aan</Button>
                    <Link>Wachtwoord vergeten ?</Link>
                    <Link>Maak een nieuwe account aan</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
