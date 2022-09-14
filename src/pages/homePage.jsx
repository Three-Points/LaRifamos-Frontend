import TabsComponent from "../components/tabsComponent";
import SliderComponent from "../components/sliderComponent";
import { useState } from "react";
import { useEffect } from "react";



function HomePage() {


    const [viewWidth, setViewWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setViewWidth(window.innerWidth); 
        }
        
        window.addEventListener('resize', handleResize); 
    })

    const seccionParaTi = {
        titulo: "Solo Para Ti",
        descripcion: `Teniendo su cuenta de LaRfiamos, hace que sea fácil rifar haciendo transparente
        sus posibilidades de ganar productos y sin complicaciones.`,
        opciones: [
            {
                titulo: "Registro de sorteo",
                descripcion: "La plataforma verifica que la rifa sea posible y una vez validada se registra en la Agencia de Loterías y Quinielas.",
                imagen: "./imgs/inicio1.png"
            },
            {
                titulo: "Describe tu sorteo",
                descripcion: "La plataforma verifica que la rifa sea posible y una vez validada se registra en la Agencia de Loterías y Quinielas.",
                imagen: "./imgs/inicio2.png"
            },
            {
                titulo: "Inicio del evento",
                descripcion: "La plataforma verifica que la rifa sea posible y una vez validada se registra en la Agencia de Loterías y Quinielas.",
                imagen: "./imgs/inicio3.png"
            }
        ]
    }
    return (
        <>
            <div className="container px-4 mt-md-5 d-flex flex-md-row mb-">
                <div className="col-12 col-md-6 mt-md-5">
                    <h1 className="fw-bold">Empieza a ganar</h1>
                    <p className="">¡Con LaRifamos tienes más oportunidades de ganar porque siempre estás a 1 número de lo que más
                        quieres!</p>
                    <button className="btn btn-primary d-flex align-items-center"><img className="logo-rif" src="./imgs/Icon_Rifamos.svg"
                        alt="" /><span className="mx-1 text-white">¡A Rifar!</span></button>
                    <div className="row mt-4">
                        <div className="col-3">
                            <h3>+55</h3>
                            <p>Juegos</p>
                        </div>
                        <div className="col-4">
                            <h3>+60</h3>
                            <p>Ganadores</p>
                        </div>
                        <div className="col-5">
                            <h3>+34,000</h3>
                            <p>Jugadores</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 img-fluid text-center img-inicio-container" >
                    <img src="./imgs/inicio.png" alt="" className="img-inicio" />
                </div>

            </div>
            {/* Sección iconos */}
            <div className="container d-flex flex-column flex-md-row px-4 mt-1 ">
                <hr />
                <div className="col-12 col-md-4 mt-3">
                    <div className="row ">
                        <div className="col-4 col-md-12 d-flex justify-content-md-center">
                            <img className="carac-img img-fluid" src="./imgs/carac1.svg" alt="" />
                        </div>
                        <div className="col-8 col-md-12 d-flex flex-column justify-content-md-center text-md-center mt-md-3">
                            <p className="fw-bold mb-0">Confiable</p>
                            <p className="fs-80 m-0 px-3 px-lg-5">Sorteos a realizar con escribano público o con Loterías y Quinielas</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mt-3 mx-md-3">
                    <div className="row">
                        <div className="col-4 col-md-12 d-flex justify-content-md-center">
                            <img className="carac-img img-fluid" src="./imgs/carac2.svg" alt="" />
                        </div>
                        <div className="col-8 col-md-12 d-flex flex-column justify-content-md-center text-md-center mt-md-3">
                            <p className="fw-bold mb-0">Pago Digital</p>
                            <p className="fs-80 m-0 px-3 px-lg-5">Todos tus pagos son seguros y configables a través de Mercado Pago</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mt-3">
                    <div className="row">
                        <div className="col-4 col-md-12 d-flex justify-content-md-center">
                            <img className="carac-img img-fluid" src="./imgs/carac3.svg" alt="" />
                        </div>
                        <div className="col-8 col-md-12 d-flex flex-column justify-content-md-center text-md-center mt-md-3">
                            <p className="fw-bold mb-0">Seguridad</p>
                            <p className="fs-80 m-0 px-3 px-lg-5">Tus datos están seguros, blindando en todo momento tu información</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            {/* Sección Solo Para Ti */}
            {(viewWidth >= 768) ?
                <div className="container mt-2 mt-lg-5">
                    <TabsComponent titulo={seccionParaTi.titulo} descripcion={seccionParaTi.descripcion}
                        opciones={seccionParaTi.opciones}></TabsComponent>
                </div> : <div className="container mt-2 d-flex align-items-center justify-content-center">
                    <SliderComponent></SliderComponent>
                </div>
            }



            {/* Sección Empieza a Ganar */}
            <div className="container d-flex flex-column align-items-center mt-4 mb-5">
                <h2 className="mb-4">Empieza a ganar</h2>
                <button className="btn btn-primary d-flex align-items-center mb-1"><img className="logo-rif" src="./imgs/Icon_Rifamos.svg"
                    alt="" /><span className="mx-1 text-white">¡A Rifar!</span></button>
                <a className="ini-cuenta px-2 pb-1 mt-2 " href=""><span>Crear una cuenta</span></a>
            </div>
        </>

    )
}

export default HomePage; 