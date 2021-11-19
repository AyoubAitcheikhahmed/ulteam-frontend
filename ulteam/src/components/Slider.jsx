import { ArrowBackIos, ArrowForwardIos} from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data';
import { mobile } from '../responsive'

const Container = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100vh;
    display: flex;
    ${mobile({
        display: "none"
    })}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #d475b3;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    margin: auto;
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 0.9s ease;
`;

const Slide = styled.div`
    
    background-image: url(${props => props.url});
    background-size:cover;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ImgContainer = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
`;
const Image = styled.img`
    height: 80%;

`;
const InfoContainer = styled.div`
    align-items: right;
    padding: 50px;
    flex: 1;
`;

const Title = styled.h1`
    font-size: 90px;
    color: white;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    border: none;
    padding: 5px 60px;
    font-size: 60px;
    cursor: pointer;
    transition: all 0.5s ease;
    
    &&:hover{
        background-color: #3dc3b6;
        color: white;
        transform: scale(1.2);
    }
`; 
const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handelClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handelClick("left")}>
                <ArrowBackIos style={{color: "white"}}/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) =>(
                    <Slide url={item.img} key={item.id}>
                    <ImgContainer>
                        <Image ></Image>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Buy now</Button>
                    </InfoContainer>
                </Slide>
                ))}
                
            </Wrapper>
            <Arrow direction="right" onClick={() => handelClick("right")}>
                <ArrowForwardIos style={{color: "white"}}/>
            </Arrow>
        </Container>
    )
}

export default Slider
