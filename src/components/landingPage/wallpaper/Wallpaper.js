import React from 'react'
import MyName from './MyName'

import '../landing.css'
import Arrow from './Arrow'


const Wallpaper = () => {
    return(
        <div className='nyc-box'>
            <div className='logo-container'>
                <MyName />
                <Arrow />
            </div>
        </div>
    )
}

export default Wallpaper
