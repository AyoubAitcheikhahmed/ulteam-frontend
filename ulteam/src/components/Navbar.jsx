import { Badge } from '@material-ui/core'; 
import { Search, ShoppingBasket } from '@material-ui/icons';
import { mobile } from '../responsive'
import React from 'react';
import styled from 'styled-components';
import logoSrc from '../assets/logo.png';

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

    border: none;
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
    ${mobile({
        display : "none"
    })}
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
                    <Logo src={logoSrc} />
                </Center>
                <Right>
                    <MenuItem>Aanmelden</MenuItem>
                    <MenuItem>Lid Worden</MenuItem>
                    <MenuItem>
                    <Icon> 
                        <Badge badgeContent={4} color="primary">
                           <ShoppingBasket /> 
                        </Badge>
                    </Icon>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
