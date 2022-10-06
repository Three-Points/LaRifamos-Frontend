import { Link } from 'react-router-dom'

function WebLinksComponent() {
    return (
        <ul className="order-1 order-md-3 d-flex flex-row justify-content-between px-3 pt-3">
            <li className="mx-md-1">
                <Link to="aboutus" className="foot-opc fs-80">
                    Nosotros
                </Link>
            </li>
            <li className="mx-md-1">
                <Link to="/faqs" className="foot-opc fs-80">
                    FAQs
                </Link>
            </li>
            <li className="mx-md-1">
                <Link to="/privacidad" className="foot-opc fs-80">
                    Privacidad
                </Link>
            </li>
            <li className="mx-md-1">
                <Link to="terminos" className="foot-opc fs-80">
                    Términos
                </Link>
            </li>
        </ul>
    )
}

export default WebLinksComponent
