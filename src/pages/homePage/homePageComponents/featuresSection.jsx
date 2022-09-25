
function FeaturesSection () {
    return(
        <div className="container d-flex flex-column flex-md-row px-4 mt-1 ">
                <hr />
                <div className="col-12 col-md-4 mt-3">
                    <div className="row ">
                        <div className="col-4 col-md-12 d-flex justify-content-md-center">
                            <img
                                className="carac-img img-fluid"
                                src="./imgs/carac1.svg"
                                alt=""
                            />
                        </div>
                        <div className="col-8 col-md-12 d-flex flex-column justify-content-md-center text-md-center mt-md-3">
                            <p className="fw-bold mb-0">Confiable</p>
                            <p className="fs-80 m-0 px-3 px-lg-5">
                                Sorteos a realizar con escribano público o con
                                Loterías y Quinielas
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mt-3 mx-md-3">
                    <div className="row">
                        <div className="col-4 col-md-12 d-flex justify-content-md-center">
                            <img
                                className="carac-img img-fluid"
                                src="./imgs/carac2.svg"
                                alt=""
                            />
                        </div>
                        <div className="col-8 col-md-12 d-flex flex-column justify-content-md-center text-md-center mt-md-3">
                            <p className="fw-bold mb-0">Pago Digital</p>
                            <p className="fs-80 m-0 px-3 px-lg-5">
                                Todos tus pagos son seguros y configables a
                                través de Mercado Pago
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 mt-3">
                    <div className="row">
                        <div className="col-4 col-md-12 d-flex justify-content-md-center">
                            <img
                                className="carac-img img-fluid"
                                src="./imgs/carac3.svg"
                                alt=""
                            />
                        </div>
                        <div className="col-8 col-md-12 d-flex flex-column justify-content-md-center text-md-center mt-md-3">
                            <p className="fw-bold mb-0">Seguridad</p>
                            <p className="fs-80 m-0 px-3 px-lg-5">
                                Tus datos están seguros, blindando en todo
                                momento tu información
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
    )
}

export default FeaturesSection; 