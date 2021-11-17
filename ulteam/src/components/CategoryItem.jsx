import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex:1;
    margin: 10px;
    height: 150vh;
    position: relative;
`;
const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 50%;
    overflow: hidden;
    filter: grayscale(90%);
`;
const Info = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 80%;
    flex-direction: column;
    justify-content: center;
    display: flex;
    align-items: center;
    `;
const Title = styled.h1`
    margin: 10px;
    font-size: 6vh;
    text-shadow: 0px 0px 8px white;;
    color: black;
`;
const Button = styled.button`
    border: none;
    padding: 0px 20px;
    font-size: 5vh;
`;


const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}>

            </Image>
            <Info>
                <Title>
                    {item.title}
                </Title>
                <Button>+</Button>
            </Info>

        </Container>
    )
}

export default CategoryItem
