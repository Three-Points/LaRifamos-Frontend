import React, { useState} from 'react'

function TabsComponent({ titulo, descripcion, opciones }) {
    const [opcionActiva, setOpcionActiva] = useState(opciones[0])

    return (
        <div className="container mt-2 mt-lg-5 mb-5">
            <h2 className="text-center fw-bold">{titulo}</h2>
            <p className="fs-80 text-center">{descripcion}</p>
            <div className="col-12 d-flex align-content-center align-items-center mt-5 tab-opciones">
                {opciones.map((opcion) => {
                    return (
                        <div
                            className="col text-center"
                            onClick={() => setOpcionActiva(opcion)}
                        >
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
                    return opcion.titulo === opcionActiva.titulo ? (
                        <div
                            className="tab-menu-item bg-primary"
                            onClick={() => setOpcionActiva(opcion)}
                        ></div>
                    ) : (
                        <div
                            className="tab-menu-item"
                            onClick={() => setOpcionActiva(opcion)}
                        ></div>
                    )
                })}
            </div>
            <div className="container px-lg-4 mt-5 d-flex align-items-center align-content-center">
                <div className="col-6 px-5">
                    <p className="px-5">{opcionActiva.descripcion}</p>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <img src={opcionActiva.imagen} className="tab-menu-img" />
                </div>
            </div>
        </div>
    )
}

export default TabsComponent
