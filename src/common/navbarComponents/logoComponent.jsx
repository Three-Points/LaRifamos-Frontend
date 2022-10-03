import { Link } from "react-router-dom";

function LogoComponent() {
    return (
        <div className="d-flex flex-lg-grow-1 align-items-center mb-3 order-1">
            <ul className="d-flex align-items-center">
                <li className="short">
                    <Link to="/">
                        <img
                            className="logo"
                            src="./imgs/Logo_LaRifamos.png"
                            alt=""
                        />
                    </Link>
                </li>
                <li className="mx-2">
                    <Link to="/rifas"
                        className="rifas-btn d-flex align-content-center justify-content-center"
                    >
                        <span>Rifas</span>
                    </Link>
                </li>
            </ul>
        </div>

    );
}

export default LogoComponent; 