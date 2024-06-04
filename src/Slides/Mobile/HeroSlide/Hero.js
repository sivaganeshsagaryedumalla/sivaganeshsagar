import React from 'react'
import NameAndJobTitle from './NameAndJobTitle'
import AboutMe from './AboutMe'

function Hero() {
    return (
        <React.Fragment>
            <NameAndJobTitle></NameAndJobTitle>
            <AboutMe></AboutMe>
        </React.Fragment>
    )
}

export default Hero