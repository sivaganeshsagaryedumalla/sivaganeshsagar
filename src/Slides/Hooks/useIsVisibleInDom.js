import { useState, useEffect } from 'react'

function useIsVisibleInDom() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('currentElement');
            const top = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            setIsVisible(top > 0 && top < windowHeight);
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);

    }, [])
    return (isVisible)
}

export default useIsVisibleInDom