import { Badge } from '@material-ui/core'; 
import { Search, ShoppingBasket } from '@material-ui/icons';
import LoginIcon from '@mui/icons-material/Login';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import { mobile } from '../responsive'
import React from 'react';
import styled from 'styled-components';
import logoSrc from '../assets/logo.png';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
        display: "none"
        })}
`;

const SearchContainer = styled.div`
    margin-left: 25px;
    padding: 5px;
    border: 0.5px solid #1b2d51;
    display: flex;
    align-items: center;

`;

const Input = styled.input`
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    
    outline: none;
    &&:focus{
        outline: #1b2d51;
        border-bottom-style: #1b2d51;
    }
    ${mobile({
        width: "40px"
        })}
`;

const Container = styled.div`
    height: 60px;
    ${mobile({
        height: "50px",
        padding: "5px 0px"
        })}

`
const Wrapper = styled.div`
    align-items: center;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({
        padding: "10px 0px",

        })}
`
const Left = styled.div`
    display: flex;
    flex:1;
    align-items: center;
`;
const Center = styled.div`
    justify-content: center;
    align-items: center;
    flex: 1;
    display: flex;
`;

const Logo = styled.img`
    width: 150px;
    height: 40px;
    margin: 5px;
    cursor: pointer;
    display: flex;
    ${mobile({
        width: "100px",
        height: "30px",
        })}

    

`;
const Right = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    flex:1;
    ${mobile({
        flex: 2,
        justifyContent: "center"
        })}

`;

const Icon = styled.div`
    transition: all 0.5s ease;
    &&:hover{
        transform: scale(1.2);
    }
`

const IconCart = styled.div`
    transition: all 0.5s ease;
   
    &&:hover{
        transform: scale(1.2);
    }
    ${mobile({display: "none"})}
    `


const MenuItem = styled.div`
    
    margin-left: 20px;
    font-size: 14px;
    font-weight: 200;
    cursor: pointer;
    ${mobile({
        fontSize: "12px",
        padding: "0px 10px",
        marginLeft: "5px"
    })
}
`;

const Navbar = () => {
    const cart = useSelector(state => state.cart);
    

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>NL</Language> 
                    <SearchContainer>
                        <Input></Input>
                        <Search style={{color: "#1b2d51"}}/>                                                   
                    </SearchContainer>
                </Left>
                <Center>
                <Link to="/">
                    <Logo src={logoSrc} />
                </Link>
                </Center>
                <Right>
                    <Link to="/Login">
                    <MenuItem>
                        <Icon>
                        <LoginIcon style={{color: "#1b2d51"}} />
                        </Icon>
                    </MenuItem>
                    </Link>

                    <Link to="/Register">
                    <MenuItem>
                        <Icon>
                        <SwitchAccountIcon style={{color: "#1b2d51"}} />
                        </Icon>
                    </MenuItem>
                    </Link>
                        <MenuItem>
                        <IconCart> 
                            <Badge badgeContent={cart.quantity} color="primary">
                            <Link to="/ShoppingCart">
                            <ShoppingBasket style={{color: "#1b2d51"}} /> 
                            </Link>
                            </Badge>
                        </IconCart>
                        </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
