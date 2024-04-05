import React from 'react'
import './PageProductos.css'
import Productos from '../../Components/Productos/Productos'
import { Link as Anchor, } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, } from '@fortawesome/free-solid-svg-icons';
export default function PageProductos() {
    return (
        <div>
            <div className='bgProductos'>

            </div>
            <Productos />
        </div>
    )
}
