import React from 'react'
import ImageSlider from './ImageSlider'
import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import ImageSlideshow from './ImageSlideshow'
import t1 from './t1.webp'
import t2 from '../../../Assets/Images/t2.png'


const animateProject = init => keyframes`
0%{
    transform:translateX(180%)
},
50%{
    transform:translateX(90%)
},
100%{
    transform:translate(0%)
}`
const RevealProject = styled.div`
overflow: hidden;
  animation: ${({ isVisible }) => isVisible ? animateProject : 'none'} 0.8s linear forwards;
`

function MyWorkCardRight() {
    const [isVisible, setIsVisible] = useState(false)
    const Images = [t1, t1, t1, t2]
    // const [Images, setImages] = useState([])

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('currentElement2');
            const top = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (top > 0 && top < windowHeight && isVisible == false) {
                setIsVisible(top > 0 && top < windowHeight);
                window.removeEventListener('scroll', handleScroll)
            }

        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <div id='currentElement2' className='w-ful  flex mt-36'>
            <div className='w-1/3 bg-[#f3ede9] overflow-scroll' >
            </div>
            <div className='w-2/3 p-10'>
                <RevealProject isVisible={isVisible}>


                    <div className='flex flex-col float-right text-white text-right'>
                        <div className=' float-right mr-7 '>
                            02
                        </div>
                        <div className=' float-right mr-7 text-7xl'>
                            We Connect
                        </div>
                        <div className=' float-right mr-7 text-xl'>
                            Software Engineer
                        </div>
                        <p className='text-left word-spacing-2 mt-4'>
                            Led the development of a quoting tool for streamlined contract generation, alongside contributions to billing and support services, including invoicing, billing history, and support ticket tracking. Additionally, played a pivotal role in implementing advanced features such as call twinning and voicemail services.
                        </p>

                    </div>
                </RevealProject>
                <ImageSlideshow Images={Images}></ImageSlideshow>
            </div>

        </div>
    )
}

export default MyWorkCardRight