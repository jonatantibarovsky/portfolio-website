import React, { useState } from 'react'
import './menu.css'

const Menubar = () => {

    const [hovered, setHovered] = useState(false)

    const toggleHover = () => {
        setHovered(!hovered)
        console.log('hovered')
    }
    return(
        <div>
            <ul className='list'>
                <li className='list-item'><a>about me</a></li>
                <li className='list-item'><a>timeline</a></li>
                <li className='list-item'><a>projects</a></li>
                <li className='list-item'><a>contact me</a></li>
            </ul>
        </div>
        
    )
}

export default Menubar