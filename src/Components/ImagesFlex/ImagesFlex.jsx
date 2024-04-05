import React from 'react'
import './ImagesFlex.css'
import img from '../../images/part1.jpg'
import img2 from '../../images/part2.png'
export default function ImagesFlex() {
    return (
        <div className='ImagesFlex'>
            <img src={img} alt="neumaticos alte brown" />
            <img src={img2} alt="neumaticos alte brown" />
        </div>
    )
}
