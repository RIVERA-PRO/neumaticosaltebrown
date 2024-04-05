import React from 'react'
import Header from '../Pages/Header/Header'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import ProductosHome from '../Components/ProductosHome/ProductosHome'
import TilteSection from '../Components/TilteSection/TilteSection'
import BtnWhatsapp from '../Components/BtnWhatsapp/BtnWhatsapp'
import Scocial from '../Components/Social/Social'
import Contact from '../Components/Contact/Contact'
import CategoriaSection from '../CategoriaSection/CategoriaSection'
import AcrodeonHome from '../Components/AcrodeonHome/AcrodeonHome'
export default function IndexLayout() {
    return (
        <div>
            <Header />

            <div className='espacio'>

            </div>
            <Hero />
            <TilteSection title="Neumáticos destacados" more="Ver más" link="tienda" />
            <ProductosHome />
            <CategoriaSection />
            <h1 className='title2'>CONOCÉ ALTE BROWN</h1>
            <AcrodeonHome />
            <h1 className='title2'>COMUNICATE CON NOSOTROS</h1>
            <Contact />
            <Scocial />
            <Footer />
            <BtnWhatsapp />
        </div>
    )
}
