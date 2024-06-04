import React, { act, useEffect, useRef } from 'react'
import { useState } from 'react'

function ImageSlideshow({ Images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ImageObjects, setImageObjects] = useState(Images.map(imageString => ({
        src: imageString,
        active: false
    })))
    const [activeImage, setActiveImage] = useState(Images[0])
    const intervalRef = useRef(null);

    useEffect(() => {
        setInterval(() => {

            if (currentIndex === Images.length - 1) {
                setCurrentIndex(0)
            }
            else {
                setCurrentIndex(currentIndex + 1)

            }
            setActiveImage(Images[currentIndex + 1]);

        }, 3000)
        ImageObjects.forEach((image, index) => {
            if (index === currentIndex) {
                image.active = true
            }
            else {
                image.active = false
            }
        })
        setImageObjects([...ImageObjects])





        console.log(Images);
        // return () => {
        //     clearInterval()
        // }
    }, [currentIndex])

    return (
        <React.Fragment>
            <div className='flex flex-row mt-4 relative'>
                <div>
                    {activeImage ? <img className='ml-4 h-96 absolute -left-2/3 bottom-10 transition duration-500 ease-in-out' src={activeImage} alt="" ></img> : ''}
                </div>
                <div className="image-slideshow flex flex-row m-4">
                    {ImageObjects ? ImageObjects.map((image, index) => (
                        <img className={`h-40 bg-red m-4 ${image.active ? 'scale-125 transition duration-500 ease-in-out' : 'scale-100 transition duration-300 ease-in-out'}`} key={index} src={image.src} alt="" />
                    )) : ''}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ImageSlideshow