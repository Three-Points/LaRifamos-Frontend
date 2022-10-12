import { Link } from "react-router-dom";

function StartWinningSection () {
    return(
        <div className="container d-flex flex-column align-items-center mt-4 mb-5">
                <h2 className="mb-4 fw-bold pt-4">Empieza a ganar</h2>
                <Link to="/rifas" className="btn-initial d-flex align-items-center mb-1" >
                    <img
                        className="logo-rif"
                        src="./imgs/Icon_Rifamos.svg"
                        alt=""
                    />
                    <span className="mx-1 text-white">¡A Rifar!</span>
                </Link>
                <a className="ini-cuenta px-2 pb-1 mt-2 " href="">
                    <span>Crear una cuenta</span>
                </a>
            </div>
    ); 
}

export default StartWinningSection; 