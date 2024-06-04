import React, { useEffect, useState } from 'react'
import device from './../../../Assets/Responsive/BreakPoints';
import styled, { keyframes } from 'styled-components'


const moveUp = init => keyframes`
0%{
    transform: translateY(${init}px);
}
100%{
    transform: translateY(0px);
}
`;

const hideWhiteBlocks = () => keyframes`
0%{
    opacity: 1;
    height: 35vh;
}
100%{
    opacity: 0;
    height: 0vh;
}
`;

const TextToReveal = styled.div`
  font-family: ${props => props.fontFam};
  text-align:center;
  color:#3E362E;
  @media ${device.tablet} {
    font-size: 28px;
    animation: ${props => (props.reveal ? moveUp(28) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${28 * 1.4}px);
  }
  @media ${device.laptop} {
    font-size: 40px;
    animation: ${props => (props.reveal ? moveUp(40) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${40 * 1.4}px);
  }
  @media ${device.laptopL} {
    font-size: 50px;
    animation: ${props => (props.reveal ? moveUp(50) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${50 * 1.4}px);
  }
  @media ${device.desktop} {
    font-size: 60px;
    animation: ${props => (props.reveal ? moveUp(60) : 'none')} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
    transform: translateY(${60 * 1.4}px);
  }
`;

const WhiteBlock = styled.div`
position: absolute;
margin-right:100%;
width: 120%;
height: 35vh;
animation: ${hideWhiteBlocks} 0.5s linear forwards;
animation-delay: 2s;
/* border: 1px solid grey; */
`;



function TitleReveal({ text, timeDelay }) {
    const [reveal, setReveal] = useState(false);
    useEffect(() => {
        const revealText = setTimeout(() => {
            setReveal(true);

        }, timeDelay);
        return () => clearTimeout(revealText);
    }, [timeDelay])
    return (
        <div className='relative w-full'>
            <TextToReveal reveal={reveal}>
                {text}
            </TextToReveal>
            <WhiteBlock></WhiteBlock>
        </div>
    )
}

export default TitleReveal