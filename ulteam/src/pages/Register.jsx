import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useForm } from './useForm';
import { useState, useEffect } from "react";
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

    const [values, setValues] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        passwordConf: ''
    });
    const [warnings, setWarnings] = useState({});
    const [submitFlag, setSubmitFlag] = useState(false);
    
    const handleChange = (event) => {
        
        const { name, value } = event.target;

        setValues({...values,[name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setWarnings(validateForm(values));
        setSubmitFlag(true);
    }

    useEffect(() =>{
        console.log(Object.values(warnings).map((item) => "item "+item))
        if(Object.keys(warnings).length === 0 && submitFlag){
                console.log("ERRORS : ", Object.keys(warnings))
        }
    },[warnings]);

    const validateForm = (values) => {
        const warningMsg = {};
        
        if(!values.name.trim()){
            warningMsg.name = "Name is required";
        }
        if(!values.username.trim()){
            warningMsg.username = "Username is required";
        }
        if (!values.email) {
            warningMsg.email = 'Email required';
          } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            warningMsg.email = 'Email address is invalid';
          }
        if(!values.password.trim()){
            warningMsg.password = "Password is required";
        }
        if(!values.passwordConf.trim()){
            warningMsg.password = "Password is required";
        }

        return warningMsg;
        
    };
   


    return (
        <Container>
            <Wrapper>
                <Title>Maak Account aan</Title>
                <Form onSubmit={handleSubmit}>
                    <Input placeholder="naam"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    />
                    <Input placeholder="gebruikersnaam"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    />
                    <Input placeholder="email"
                     name="email"
                     value={values.email}
                     onChange={handleChange}
                     />
                    <Input placeholder="wachtwoord"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    />
                    <Input placeholder="wachtwoord bevestigen"
                     name="passwordConf"
                     value={values.passwordConf}
                     onChange={handleChange}
                    />
                  
                    {
                    
                    Object.values(warnings)
                    .map((item) => 
                    <Alert style={{ flex:"1",  margin: "10px 12px 0px 0px"}} variant="filled" severity="error">
                        {item}
                    </Alert>)
                    }
                    
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
