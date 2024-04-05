import React from 'react'
import './About.css'

import { Link as Anchor, } from "react-router-dom";
import Banner from '../../images/about.png'
export default function About() {
    return (
        <div className='abouContain'>
            <div className='imgAbout'>
                <img src={Banner} alt="Grupo Cenoa Usados" />
            </div>
            <div className='aboutText'>

                <h1 className='titles'>NEUMÁTICOS</h1>
                <h2 className='subtitles'>ALTE BROWN</h2>
                <h3 className='subtitles2'>NEUMÁTICOS DE PRIMERA CALIDAD
                    EN SALTA Y JUJUY</h3>
                <h3 className='subtitles2'>ESPECIALISTAS EN NEUMÁTICOS DE LA MARCA LIDER, BRIDGESTONE.</h3>
                <p>
                    Somos un grupo económico del NOA

                    que representa a las marcas automotrices
                    más importantes y que desarrolla
                    constantemente servicios de movilidad complementarios
                    a la cadena de valor.

                    nos comprometemos con nuestros clientes, proveedores, colaboradores, accionistas y la sociedad en la que trabajamos, brindando confiabilidad
                    en todas nuestras acciones.

                    buscamos ser la mejor opcion del NOA en servicios y

                    soluciones de movilidad de calidad.

                    Sigamos avanzando juntos.</p>
                <Anchor to={`/`} className='btn'>
                    Contactar
                </Anchor>
            </div>
        </div>
    )
}
