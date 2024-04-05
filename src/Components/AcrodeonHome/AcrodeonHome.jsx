import React from 'react'
import './AcrodeonHome.css'
import Acordeon from '../Acordeon/Acordeon'
import Img from '../../images/bg2.png'
export default function AcrodeonHome() {
    return (
        <div className='AcrodeonHome'>
            <Acordeon />
            <img src={Img} alt="" />
        </div>
    )
}
