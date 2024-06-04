import React, { useState, useRef, useEffect } from 'react';
import image from './../../../Assets/Images/t1.webp';
import './ImageSlider.css'; // Import CSS file for styles

function ImageSlider() {
    const [mouseDownAt, setMouseDownAt] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const containerRef = useRef(null);

    const handleMouseDown = (event) => {
        setMouseDownAt(event.clientX);
    };

    const handleMouseUp = () => {
        setMouseDownAt(0);
        setPrevPercentage(prevPercentage);
    };

    const handleMouseMove = (event) => {

        if (mouseDownAt === 0) return;
        const mouseDelta = mouseDownAt - event.clientX;
        const maxDelta = window.innerWidth / 2;
        const percentage = (mouseDelta / maxDelta) * -100;
        const nextPercentage = prevPercentage + percentage;
        setPrevPercentage(nextPercentage);

        const track = document.getElementById('image-track');
        track.style.transition = 'transform 0.3s ease';
        track.style.transform = `translate(${nextPercentage}%)`;
    };
    useEffect(() => {
        const container = containerRef.current;
        const autoScroll = () => {
            container.scrollTop += 1;
            if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
                container.scrollTop = 0;
            }


        };
        const interval = setInterval(autoScroll, 50);
        return () => clearInterval(interval);
    })

    return (
        <div
            id="image-track"
            ref={containerRef}
            className="image-track flex flex-col gap-4 bg-white image-gallery"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <img className='image' src={image} draggable={false} alt="Image 1" />
            <img className='image' src={image} draggable={false} alt="Image 2" />
            <img className='image' src={image} draggable={false} alt="Image 3" />
            <img className='image' src={image} draggable={false} alt="Image 4" />
            <img className='image' src={image} draggable={false} alt="Image 5" />
            <img className='image' src={image} draggable={false} alt="Image 6" />
            <img className='image' src={image} draggable={false} alt="Image 7" />
        </div>
    );
}

export default ImageSlider;
