import { Instagram, MailOutline, Phone, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from '../responsive'

const Container = styled.div`
    
    display: flex;
    background-color: #3dc3b67b;
    ${mobile({
        flexDirection: "column"
    })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({
            
    })}
`
const Logo = styled.h1`

`

const Desc = styled.p`
    margin: 20px 0px;
    font-family: 'Roboto';
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-right: 10px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
        display:"none"
    })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    cursor: pointer;
    width: 50%;
    margin-bottom: 10px;

`

const ContactItem = styled.div`
    font-family: 'Roboto';
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`
const Payment = styled.img`
    margin-top: 10px;
    width: 50%;
`
const Right = styled.div`

    flex: 1;
    padding: 20px;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo></Logo>
                <Desc>
                2021, Ulteam, Inc. All rights reserved. Ulteam, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Epic Games International, S.à r.l. 
                </Desc>
                <SocialContainer>
                    <SocialIcon color="C13584">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="1DA1F2">
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Free Games</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                    <ContactItem>
                        <MailOutline style={{marginRight: "10px"}}/>ulteam@home.be
                    </ContactItem>
                    <ContactItem>
                        <Phone style={{marginRight: "10px"}}/>+32 466069813
                    </ContactItem>
                    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
