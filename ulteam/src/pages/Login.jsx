import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useState } from 'react'
import { loginProcess } from '../server_methodes'
import { useDispatch, useSelector } from 'react-redux'

import Alert from '@mui/material/Alert';


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
        &&:hover{
            background-color: #3dc3b6;
        }
`

const Link = styled.div`
    
    margin: 5px 0px;
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 100;
    cursor:pointer;

`

const Login = () => {

    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const dispatch = useDispatch()
    const { errorFlag } =useSelector((state) => state.user)
    const handleLogin = (event) => {
        event.preventDefault();
        loginProcess(dispatch,{username,password})
    }

    return (
        

        <Container>
            <Wrapper>
                <Title>Meldaan</Title>
                <Form>
                    <Input placeholder="gebruikersnaam"
                    onChange={(event) => setUsername(event.target.value)}
                    />
                    <Input
                    type="password" style={{font: "large Verdana,sans-serif",letterSpacing: "0.12em"}}
                    placeholder="wachtwoord"
                    onChange={(event) => setPassword(event.target.value)}/>
                    <Button onClick={handleLogin}>Meld aan</Button>
                    {errorFlag
                    ? <Alert style={{ flex:"1",  margin: "10px 12px 10px 0px"}} variant="filled" severity="error">Combination seems not to be right..</Alert>
                    : <></>
                    }
                    <Link>Wachtwoord vergeten ?</Link>
                    <Link>Maak een nieuwe account aan</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
