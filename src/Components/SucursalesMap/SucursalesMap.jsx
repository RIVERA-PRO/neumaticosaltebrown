import React from 'react'
import './SucursalesMap.css'
import ImagesFlex from '../ImagesFlex/ImagesFlex'
export default function SucursalesMap() {
    return (
        <div className='SucursalesMap'>
            <ImagesFlex />
            <h1 className='titles'>ENCONTRANOS EN NUESTRAS DOS SUCURSALES</h1>
            <div className='cardsSucursales'>

                <div className='cardSucursal'>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115903.57678092191!2d-65.51303049239486!3d-24.795906396607652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3a35151b7f9%3A0xa5cd992cd587f206!2sSalta!5e0!3m2!1ses-419!2sar!4v1710882537548!5m2!1ses-419!2sar"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className='cardTextSucursal'>
                        <h2>SUCURSAL CENTRO </h2>
                        <h4>HORARIOS DE ATENCIÓN</h4>
                        <p>Lunes a Viernes de 08:30–13:00 14:00–18:30 </p>
                        <p>Sábados de 08:30–13:00 </p>
                    </div>

                </div>
                <div className='cardSucursal'>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115903.57678092191!2d-65.51303049239486!3d-24.795906396607652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3a35151b7f9%3A0xa5cd992cd587f206!2sSalta!5e0!3m2!1ses-419!2sar!4v1710882537548!5m2!1ses-419!2sar"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className='cardTextSucursal'>
                        <h2>SUCURSAL ACCESO RUTA 9</h2>
                        <h4>HORARIOS DE ATENCIÓN</h4>
                        <p>Lunes a Viernes de 08:30–13:00 14:00–18:30 </p>
                        <p>Sábados de 08:30–13:00 </p>
                    </div>

                </div>
            </div>

        </div>
    )
}
