import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMinus } from '@fortawesome/free-solid-svg-icons';
import './Acordeon.css';

export default function Acordeon() {
    const [openIndex, setOpenIndex] = useState(null);
    const [iconState, setIconState] = useState(new Array(6).fill(false));

    const togglePanel = (index) => {
        setOpenIndex(openIndex === index ? null : index);
        const newIconState = [...iconState];
        newIconState[index] = !newIconState[index];
        setIconState(newIconState);
    };

    return (
        <div className="acordeon">
            <div onClick={() => togglePanel(0)}>
                <h3>
                    <FontAwesomeIcon icon={iconState[0] ? faMinus : faChevronDown} className="icon" />
                    ¿QUIÉNES SOMOS?

                </h3>
                <p style={{
                    minHeight: openIndex === 0 ? '200px' : '0',
                    padding: openIndex === 0 ? '20px' : '0',
                }}>
                    Somos un grupo económico del NOA
                    que representa a las marcas automotrices más importantes y que desarrolla constantemente servicios de movilidad complementarios a la cadena de valor. Nos comprometemos con nuestros clientes, proveedores, colaboradores, accionistas y la sociedad en la que trabajamos, brindando confiabilidad en todas nuestras acciones. Buscamos ser la mejor opción del NOA en servicios y soluciones de movilidad de calidad. Sigamos avanzando juntos.
                </p>
            </div>
            <div onClick={() => togglePanel(1)}>
                <h3>
                    <FontAwesomeIcon icon={iconState[1] ? faMinus : faChevronDown} className="icon" />
                    ¿BUSCAS NEUMÁTICOS DE ALTA CALIDAD PARA TU VEHÍCULO?

                </h3>
                <p style={{
                    minHeight: openIndex === 1 ? '200px' : '0',
                    padding: openIndex === 1 ? '20px' : '0',
                }}>
                    Estás en el lugar correcto. Ofrecemos una selección diversa de neumáticos para autos de la marca líder, Bridgestone. Conocida por su excelencia en tecnología de neumáticos, Bridgestone ofrece productos que combinan seguridad, durabilidad y rendimiento, ¡y los tenemos disponibles para ti en Salta y Jujuy!
                </p>
            </div>
            <div onClick={() => togglePanel(2)}>
                <h3>
                    <FontAwesomeIcon icon={iconState[2] ? faMinus : faChevronDown} className="icon" />
                    ¿BUSCAS UN SERVICIO DE ALTA CALIDAD PARA TU VEHÍCULO?

                </h3>
                <p style={{
                    minHeight: openIndex === 2 ? '200px' : '0',
                    padding: openIndex === 2 ? '20px' : '0',
                }}>
                    No solo ofrecemos neumáticos de alta calidad, sino que también brindamos un servicio excepcional. Nuestro personal capacitado está listo para asesorarte en cada paso del camino, desde la selección de neumáticos adecuados hasta la instalación profesional. Nos enorgullecemos de ser la opción preferida para los conductores conscientes de la calidad en Salta y Jujuy.
                </p>
            </div>
            <div onClick={() => togglePanel(3)}>
                <h3>
                    <FontAwesomeIcon icon={iconState[3] ? faMinus : faChevronDown} className="icon" />
                    LA ESENCIA BRIDGESTONE

                </h3>
                <p style={{
                    minHeight: openIndex === 3 ? '200px' : '0',
                    padding: openIndex === 3 ? '20px' : '0',
                }}>
                    La Esencia Bridgestone, nuestra filosofía corporativa, nos guía para construir no sólo mejores productos, sino también mejores comunidades.
                </p>
            </div>
            <div onClick={() => togglePanel(4)}>
                <h3>
                    <FontAwesomeIcon icon={iconState[4] ? faMinus : faChevronDown} className="icon" />
                    INTEGRIDAD Y TRABAJO EN EQUIPO

                </h3>
                <p style={{
                    minHeight: openIndex === 4 ? '200px' : '0',
                    padding: openIndex === 4 ? '20px' : '0',
                }}>
                    Creemos en la adhesión a los principios morales y éticos en todas nuestras acciones. Este énfasis en la integridad fomenta una cultura empresarial que respeta la diversidad de habilidades, conocimientos y experiencias en la vida.
                </p>
            </div>
            <div onClick={() => togglePanel(5)}>
                <h3>
                    <FontAwesomeIcon icon={iconState[5] ? faMinus : faChevronDown} className="icon" />
                    CREATIVIDAD PIONERA

                </h3>
                <p style={{
                    minHeight: openIndex === 5 ? '200px' : '0',
                    padding: openIndex === 5 ? '20px' : '0',
                }}>
                    Nunca nos conformamos con mantenernos igual “status quo”. Constántemente nos retamos para desarrollar innovaciones que respondan a las necesidades del cliente y que beneficien aún más a la sociedad.
                </p>
            </div>
            <div onClick={() => togglePanel(6)}>
                <h3>
                    <FontAwesomeIcon icon={iconState[6] ? faMinus : faChevronDown} className="icon" />
                    PLANIFICACIÓN CUIDADOSA Y ACCIONES DECISIVAS

                </h3>
                <p style={{
                    minHeight: openIndex === 6 ? '200px' : '0',
                    padding: openIndex === 6 ? '20px' : '0',
                }}>
                    Nuestro compromiso con la excelencia nos lleva a considerar todas las opciones y posibilidades, antes de tomar un curso de acción. Posteriormente, avanzamos sin dudarlo.
                </p>
            </div>
        </div>
    );
}
