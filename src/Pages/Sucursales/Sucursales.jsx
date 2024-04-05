import React from 'react'
import SucursalesMap from '../../Components/SucursalesMap/SucursalesMap'
import IconSection from '../../Components/IconSection/IconSection';
import { Link as Anchor, } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, } from '@fortawesome/free-solid-svg-icons';
export default function Sucursales() {
    return (
        <div >
            <div className='bg'>
                <Anchor to={`/`}>
                    <FontAwesomeIcon icon={faHome} /> Inicio
                </Anchor>
                |
                <Anchor to=''>
                    Sucursales
                </Anchor>
            </div>
            <IconSection />
            <SucursalesMap />
        </div>
    )
}
