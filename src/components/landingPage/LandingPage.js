import React from 'react'
import Menubar from './menu/Menubar'
import Wallpaper from './wallpaper/Wallpaper'

import './landing.css'

const LandingPage = () => {
    return(
        <div className='intro'>
            <Menubar />
            <Wallpaper />
        </div>
    )
}

export default LandingPage