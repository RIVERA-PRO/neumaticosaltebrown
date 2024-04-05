import React, { useState } from 'react';
import './Servicios.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faTools, faBalanceScale, faCar, faCompress } from '@fortawesome/free-solid-svg-icons';
import Banner from '../../images/about.png'
export default function Servicios() {
    const [muted, setMuted] = useState(true);

    return (
        <div className='servicios'>


            <div className='serviciosCards'>
                <div className='servicioCard'>
                    <FontAwesomeIcon icon={faWrench} className='icono' />
                    <h3>REPARACIÓN DE TREN</h3>
                </div>
                <div className='servicioCard'>
                    <FontAwesomeIcon icon={faTools} className='icono' />
                    <h3>REPARACIÓN DE LLANTAS</h3>
                </div>
                <div className='servicioCard'>
                    <FontAwesomeIcon icon={faBalanceScale} className='icono' />
                    <h3>ALINEADO Y BALANCEO</h3>
                </div>
                <div className='servicioCard'>
                    <FontAwesomeIcon icon={faCar} className='icono' />
                    <h3>CAMBIO DE AMORTIGUADORES</h3>
                </div>
                <div className='servicioCard'>
                    <FontAwesomeIcon icon={faCompress} className='icono' />
                    <h3>SUSPENSIÓN TRASERA</h3>
                </div>
            </div>
            <div className='deFlex'>
                <video
                    autoPlay
                    muted={muted}
                    controls
                    style={{ maxWidth: '100%' }}
                    src="https://neumaticosaltebrown.com.ar/wp-content/uploads/2022/08/Feed_AlteBrown.mp4"
                >
                    Tu navegador no admite la etiqueta de video.
                </video>
                <div className='imgAbout'>
                    <img src={Banner} alt="Grupo Cenoa Usados" />
                </div>
            </div>
        </div>
    );
}
