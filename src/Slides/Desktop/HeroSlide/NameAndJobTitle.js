import React, { useEffect, useState } from 'react'
import NameReveal from './NameReveal'
import TitleReveal from './TitleReveal'


function NameAndJobTitle() {
    const [intro, setIntro] = useState('');
    useEffect(() => {
        let str = "I am...";
        let i = 0;
        let send = '';

        const animateText = () => {
            if (i < str.length) {
                send = send + str[i];
                i++;
                setIntro(send);
                setTimeout(animateText, 800); // Call animateText again after 200ms
            }
        };

        // animateText(); // Start the animation
    }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

    return (
        <>
            <div className='flex justify-center flex-col h-[100vh] w-full '>
                <input animateText={true} className='text-center  text-5xl' style={{ fontFamily: 'cursive-font' }} value={intro}></input>
                <NameReveal text="siva Ganesh Sagar" timeDelay={500}>

                </NameReveal>
                <TitleReveal text="UI Developer" timeDelay={1300}>

                </TitleReveal>

            </div>
        </>
    )
}

export default NameAndJobTitle