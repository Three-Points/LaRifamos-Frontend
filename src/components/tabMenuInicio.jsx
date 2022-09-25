import React, { useState, useEffect } from 'react'

function TabMenuInicio({ titulo, descripcion, opciones }) {
    const [opcionActiva, setOpcionActiva] = useState(true)

    useEffect(
        () => {
            setOpcionActiva(opciones[0].titulo)
        },
        () => {
            const tabs = document
                .getElementById('tab-menu')
                .getElementsByClassName('tab-menu-item')
            console.log(tabs)
            for (let tab of tabs) {
                console.log(tab)
                tab.addEventListener('click', (event) => {
                    setOpcionActiva(event.titulo)
                })
            }
        }
    )

    return (
        <div className="container mt-2 mt-lg-5">
            <h2 className="text-center fw-bold">{titulo}</h2>
            <p className="fs-80 text-center">{descripcion}</p>
            <div className="col-12 d-flex align-content-center align-items-center mt-5 tab-opciones">
                {opciones.map((opcion) => {
                    return (
                        <div className="col text-center">
                            <p className="mb-2">{opcion.titulo}</p>
                        </div>
                    )
                })}
            </div>
            <div
                id="tab-menu"
                className="col-12 d-flex justify-content-between tab-menu"
            >
                {opciones.map((opcion) => {
                    return opcion.titulo === opcionActiva ? (
                        <div className="tab-menu-item bg-primary"></div>
                    ) : (
                        <div className="tab-menu-item"></div>
                    )
                })}
            </div>
        </div>
    )
}

export default TabMenuInicio
