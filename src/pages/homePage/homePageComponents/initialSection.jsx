import { Link } from "react-router-dom"

function InitialSection() {
    return (
            <div className="container p-4 initial-section d-flex flex-md-row mb-5">
                <div className="col-12 col-md-6 mt-md-5">
                    <h1 className="fw-bold">Empieza a ganar</h1>
                    <p className="">
                        ¡Con LaRifamos tienes más oportunidades de ganar porque
                        siempre estás a 1 número de lo que más quieres!
                    </p>
                    <button className="btn-initial d-flex align-items-center">
                        <img
                            className="logo-rif"
                            src="./imgs/Icon_Rifamos.svg"
                            alt=""
                        />
                        <Link to="/rifas"><span className="mx-1 text-white">¡A Rifar!</span></Link>
                    </button>
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
                <div className="col-6 img-fluid text-center img-inicio-container">
                    <img
                        src="./imgs/inicio.png"
                        alt=""
                        className="img-inicio"
                    />
                </div>
            </div>
    )
}

export default InitialSection
