import React, { useState, useEffect } from 'react'
import './Navbar.css'
import Modal from 'react-modal';
import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";
import InputSearch from '../InputSerach/InputSearchs'
import logo from '../../images/logo.png'
import logobg from '../../images/logobg.png'
import fondo from '../../images/banner1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCube, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos que necesites
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const handleCloseModal = () => {
        setIsOpen(false);
    };
    return (
        <header>
            <nav >





                <Anchor to={`/`} className='logo'>
                    <img src={logo} alt="logo" />
                </Anchor>
                <div className='enlaces'>
                    <Anchor to={`/`} >Inicio</Anchor>
                    <Anchor to={`/tienda`} >Tienda</Anchor>
                    <Anchor to={`/sucursales`} >Sucursales</Anchor>
                    <Anchor to={`/servicios`} >Servicios</Anchor>
                    <Anchor to={`/quienes-somos`} > Quienes somos</Anchor>
                    <Anchor to={`/contacto`} >Contacto</Anchor>


                </div>

                <div className='deFLexNav'>
                    <InputSearch />
                    <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    className="modalNav"
                    overlayClassName="overlay"
                >
                    <div className="modalNav-content">
                        <div className='fondo'>
                            <img src={fondo} alt={`imagen`} />

                        </div>

                        <img src={logobg} alt="logo" className='logoBg' />
                        <div className='enlaces2'>

                            <Anchor to={`/tienda`} onClick={handleCloseModal}>
                                <FontAwesomeIcon icon={faCube} /> Tienda
                            </Anchor>

                            <Anchor to={`/quienes-somos`} onClick={handleCloseModal}>
                                <FontAwesomeIcon icon={faUsers} /> Quienes somos
                            </Anchor>
                            <Anchor to={`/contacto`} onClick={handleCloseModal}>
                                <FontAwesomeIcon icon={faEnvelope} /> Contacto
                            </Anchor>
                            <Anchor to={`/sucursales`} onClick={handleCloseModal}>
                                <FontAwesomeIcon icon={faUsers} />
                                Sucursales</Anchor>
                            <Anchor to={`/servicios`} onClick={handleCloseModal}>
                                <FontAwesomeIcon icon={faCube} />
                                Servicios</Anchor>
                        </div>

                    </div>
                </Modal>

            </nav>
        </header>
    );
}
