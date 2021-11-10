import { Badge } from '@material-ui/core'; 
import { Search, ShoppingBasket } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import logoSrc from '../assets/logo.png';

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
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
`;

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    align-items: center;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    display: flex;
    flex:2;
    align-items: center;
`;
const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;


`;



const Logo = styled.img`

    width: 150px;
    height: 40px;
    margin: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    

`;
const Right = styled.div`
    display: flex;
    justify-content: end;
    flex:2;
`;

const MenuItem = styled.div`
    margin-left: 20px;
    font-size: 14px;
    cursor: pointer;
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
                    <MenuItem>Maak account aan</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingBasket />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
