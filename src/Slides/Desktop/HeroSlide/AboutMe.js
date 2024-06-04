import React, { useEffect, useState } from "react";
import styled from "styled-components";
import device from "../../../Assets/Responsive/BreakPoints";
const AboutMeTitle = styled.div.attrs(props => ({
  style: {
    transform: `translateX(${props.scrollPercent * 2}%)`
  }
}))`
    transition: transform 0.5s ease-out;
    position: absolute;
    color: #3E362E;
    top: 10%;
    left: -15%;
    background:transparent;
    opacity:0.3;
  
    @media ${device.laptop} {
      font-size: 180px;
    }
    @media ${device.laptopL} {
      font-size: 200px;
    }
    @media ${device.desktop} {
      font-size: 350px;
    }
  `;


const AboutMeDescription = styled.div`
  align-items: center;
  font-family: 'nephlim';
  text-align: left;
  position: absolute;
  margin-left: 30%;
  margin-right: 5%;
  top:20%;
  color:#3E362E;
  background:transparent;

  @media ${device.laptop} {
    transform: translateY(90%);
    font-size: 30px;
  }
  @media ${device.laptopL} {
    transform: translateY(87%);
    font-size: 38px;
  }
  @media ${device.desktop} {
    transform: translateY(80%);
    font-size: 70px;
  }
`;
function AboutMe() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const handleScroll = () => {
    const { body, documentElement } = document;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    const scrollPercentageCalculate = (scrollDistance / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const maxLimit = (documentElement.clientHeight * 150) / documentElement.scrollHeight;
    if (scrollDistance >= 0 && scrollPercentageCalculate <= maxLimit && scrollPercentageCalculate <= 30) {
      setScrollPercent(scrollPercentageCalculate);
      console.log('setting scroll', scrollPercentageCalculate);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  return (
    <>
      <div className="w-100 h-[40vh] relative">
        <AboutMeTitle scrollPercent={scrollPercent}>

          ABOUT ME
        </AboutMeTitle>
        <AboutMeDescription>
          Crafting User friendly and aesthetic UI designs is not just my profession, it's my passion
        </AboutMeDescription>
      </div>
    </>
  );
}

export default AboutMe;
