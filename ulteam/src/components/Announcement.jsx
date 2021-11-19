import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 30px;
    background-color: #1b2d51;
    color: #3dc3b6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
`;

const Announcement = () => {
    return (
        <Container>
            SUPER KORTING! Koop FIFA 22 Legazy edition voor 33 Euro
        </Container>
    )
}

export default Announcement
