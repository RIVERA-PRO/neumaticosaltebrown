import React from 'react'
import './CategoriaSection.css'
import { Link as Anchor, } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faTruck } from '@fortawesome/free-solid-svg-icons';

export default function CategoriaSection() {
    return (
        <div className='CategoriaSection'>
            <div className='cardCategori'>
                <FontAwesomeIcon icon={faCar} className='iconCar' />
                <h2>NEUMÁTICOS</h2>
                <h3>AUTOS</h3>
                <Anchor to={`/`} >
                    Ver más
                </Anchor>
            </div>
            <div className='cardCategori'>
                <FontAwesomeIcon icon={faTruck} className='iconCar' />
                <h2>NEUMÁTICOS</h2>
                <h3>CAMIONETAS</h3>
                <Anchor to={`/`} >
                    Ver más
                </Anchor>
            </div>
        </div>
    );
}
