import React from 'react'

function ActiveImage({ Image }) {
    return (
        <>
            <img src={Image.src} alt="active-image" className="active-image" />
        </>
    )
}

export default ActiveImage