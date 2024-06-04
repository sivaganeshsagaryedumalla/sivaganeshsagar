import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

const animateProject = init => keyframes`
0%{
    transform:translateX(-80%)
},
50%{
    transform:translateX(-30%)
},
100%{
    transform:translate(0%)
}`
const animateWork = init => keyframes`
0%{
    transform:translateX(-80%)
},
50%{
    transform:translateX(-30%)
},
100%{
    transform:translate(0%)
}`
const RevealProject = styled.div`
overflow: hidden;
  animation: ${({ isVisible }) => isVisible ? animateProject : 'none'} 0.8s linear forwards;
`
const RevealWork = styled.div`
overflow:hidden;
animation:${({ isVisible }) => isVisible ? animateWork : 'none'} 1.5s linear forwards`
function MyWorkCardLeft() {
    const [isVisible, setIsVisible] = useState(false)
    const [isWorkVisible, setIsWorkVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('currentElement');
            const top = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (top > 0 && top < windowHeight && isVisible == false) {
                setIsVisible(top > 0 && top < windowHeight);
                window.removeEventListener('scroll', handleScroll)
            }
            setTimeout(() => {
                setIsWorkVisible(isVisible)
            }, 500);
        }
        // if (!isVisible) {
        //     window.addEventListener('scroll', handleScroll);
        // }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [isVisible])
    return (
        <div id='currentElement' className='w-ful  flex mt-52'>
            <div className='w-3/6 p-8'>
                <div className='flex flex-col float-left text-white text-left'>
                    <RevealProject isVisible={isVisible}>
                        <div className='ml-4' >
                            01
                        </div>
                        <div className='text-7xl'>
                            Kinetic Sales Quest
                        </div>
                        <div className='text-xl'>
                            Software Engineer
                        </div>
                    </RevealProject>
                    <RevealProject isVisible={isWorkVisible}>
                        {isWorkVisible ? <p className='mt-10 word-spacing-2'>Experience in developing comprehensive mobile and desktop applications tailored for sales, user administration, vendor management, and product inventory across diverse locations, akin to modem sales. Proficient in integrating payment options and facilitating contract generation within these applications.</p> : ''}
                    </RevealProject>
                </div>
            </div>
            <div className='w-3/6 bg-[#f3ede9]'>

            </div>

        </div>
    )
}

export default MyWorkCardLeft