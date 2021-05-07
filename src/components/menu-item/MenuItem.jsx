import React from 'react'

import './MenuItem.scss';

function MenuItem({ title, imageURL, size }) {
    return (
        <div className={`${size} menu-item`}  >
            <div className='background-img' style={{
                backgroundImage: `url(${imageURL})`
            }} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem
