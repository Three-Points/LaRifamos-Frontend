
import SliderComponent from '../../components/sliderComponent'
import { useState } from 'react'
import { useEffect } from 'react'
import InitialSection from './homePageComponents/initialSection'
import FeaturesSection from './homePageComponents/featuresSection'
import OnlyForYouSection from './homePageComponents/onlyForYouSection'
import StartWinningSection from './homePageComponents/startWinningSection'

function HomePage() {

    const seccionParaTi = {
        titulo: 'Solo Para Ti',
        descripcion: `Teniendo su cuenta de LaRfiamos, hace que sea fácil rifar haciendo transparente
        sus posibilidades de ganar productos y sin complicaciones.`,
        opciones: [
            {
                titulo: 'Registro de sorteo',
                descripcion:
                    'La plataforma verifica que la rifa sea posible y una vez validada se registra en la Agencia de Loterías y Quinielas.',
                imagen: './imgs/inicio1.png',
            },
            {
                titulo: 'Describe tu sorteo',
                descripcion:
                    'Si la rifa cuenta con una cantidad mínima de números para ser aprobada, se comienza la recolección de interesados, los cuales reservan los números.',
                imagen: './imgs/inicio2.png',
            },
            {
                titulo: 'Inicio del evento',
                descripcion:
                    'Se realiza el sorteo con escribano público presente, dando como ganador a un usuario. El vendedor del producto recibe su pago y el ganador su premio!',
                imagen: './imgs/inicio3.png',
            },
        ],
    }
    return (
        <>
            <InitialSection></InitialSection>
            {/* Sección iconos */}
            <FeaturesSection></FeaturesSection>
            {/* Sección Solo Para Ti */}
            <OnlyForYouSection {...seccionParaTi}></OnlyForYouSection>
            

            {/* Sección Empieza a Ganar */}
            <StartWinningSection></StartWinningSection>
        </>
    )
}

export default HomePage
