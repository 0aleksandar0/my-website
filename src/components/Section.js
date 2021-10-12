import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section(props) {
    return (
        <Wrap>
            
            <ItemText>
                <Fade bottom duration={3000}><Myh1>{props.title}</Myh1>
                <Fade duration={5000}><Myp1>{props.description}</Myp1></Fade>
                <Myp2>{props.tel}</Myp2>
                <Myp3>{props.city}</Myp3>
                <Myp4>{props.address}</Myp4></Fade>

            </ItemText>
            <MyImg getImage={props.background}/>
            <Buttons>
                <Fade top duration={3000}>
                    <ButtonGroup id="btnGrp">
                        <Fade left duration={3000}>
                            <LeftButton className="leftBtn">
                                {props.leftBtnText}
                            </LeftButton>
                        </Fade>
                        {props.rightBtnText &&
                            <Fade right duration={3000}>
                            <RightButton>
                                {props.rightBtnText}
                            </RightButton>
                            </Fade>
                        }
                    </ButtonGroup>
                    <DownArrow src="/img/down-arrow.png" />
                </Fade> 
            </Buttons>   
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    //border: outset 30px black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/img/Background.jpg');
    background: wihte;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;

`


const ItemText = styled.div`
    font-size: 220%;
    padding-top: 15vh;
    text-align: center;
`

const Myh1 = styled.div`
    color: white;
    opacity: 0.3;
`
const Myp1 = styled.div`
    opacity: 0.3;
`

const Myp2 = styled.div`
    opacity; 0.3;
    font-size: 15px;
`

const Myp3 = styled.div`
    opacity; 0.3;
    font-size: 15px;
`

const Myp4 = styled.div`
    opacity; 0.3;
    font-size: 15px;
`

const MyImg = styled.img`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 30%;
    height: 50%;
    display: flex;
    opacity: 0.95;
    justify-content: center;
    align-content:center;
    
    background-image: ${props => `url("/img/${props.getImage}")`}

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 100px;
    opacity: 0.55;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;

`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.3;

`

const DownArrow = styled.img`
    margin-top. 20px;
    height: 40px;
    
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`
