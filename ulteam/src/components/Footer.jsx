import { Instagram, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`

const Desc = styled.p`

`

const SocialContainer = styled.div`

`

const SocialIcon = styled.div`

`

const Center = styled.div`
    flex: 1;
`

const Right = styled.div`
    flex: 1;
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
                    <SocialIcon>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>
        </Container>
    )
}

export default Footer
