import React, { useState } from 'react';
import './Contact.css';
import logo from '../../images/logo.png';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        province: '',
        phone: ''
    });

    const provinces = ['Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de envío del formulario
        console.log(formData);
        // Reiniciar el estado del formulario después del envío
        setFormData({
            name: '',
            email: '',
            message: '',
            province: '',
            phone: ''
        });
    };

    return (
        <div className='contactContain'>
            <div className='textForm'>
                <h1 >NEUMÁTICOS </h1>

                <h2>ALTE BROWN</h2>
                <h3>NEUMÁTICOS DE PRIMERA CALIDAD
                    EN SALTA Y JUJUY</h3>
                <h3>ESPECIALISTAS EN NEUMÁTICOS DE LA MARCA LIDER, BRIDGESTONE.</h3>
            </div>
            <div className='formContain'>
                <form onSubmit={handleSubmit} className='form'>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder='Nombre y Apellido'
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                        required
                    />

                    <select
                        id="province"
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Seleccionar Provincia</option>
                        {provinces.map((province, index) => (
                            <option key={index} value={province}>{province}</option>
                        ))}
                    </select>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder='Teléfono'
                        required
                    />
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Consulta'
                        required
                    ></textarea>
                    <button type="submit" className='btn'>Enviar</button>
                </form>
            </div>


        </div>
    );
}
