import user from '../../images/User.svg';
import cross from '../../images/Cross.svg';
import lupa from '../../images/Lupa.svg';


function SideMenu({ enableScroll, onCrossClick }) {
    return (
        <div className="sideMenu ">
            <div className="row mb-5 pt-3">
                <div className="col-6">
                    <a
                        href="javascript:void(0)"
                        onclick="closeSideMenu()"
                        className="mx-3"
                    >
                        <img
                            className="img-side-menu"
                            src={user}
                            alt=""
                        />
                    </a>
                </div>
                <div className="col-6 ">
                    <a
                        href="javascript:void(0)"
                        className="float-end mx-3"
                        onClick={() => {
                            onCrossClick(false)
                            enableScroll()
                        }}
                    >
                        <img
                            src={cross}
                            alt=""
                            className="img-side-menu"
                        />
                    </a>
                </div>
            </div>
            <div className="row mb-3 mx-3 side-search pb-1  ">
                <span>
                    <img src={lupa} alt="" className="img-lupa" />
                </span>
                <input
                    className="side-search-input"
                    type="text"
                    name=""
                    placeholder="Buscar productos..."
                />
            </div>
            <div className="row side-options d-flex align-content-center align-items-center justify-content-center px-4 mb-2">
                <div className="col-3">
                    <div className="side-img"></div>
                </div>
                <div className="col-9 d-flex flex-column justify-content-center px-4">
                    <p className="mb-0">
                        <b>Laptop</b>
                    </p>
                    <p className="mb-0">$ 8,725 MXN</p>
                </div>
            </div>
            <div className="row side-options d-flex align-content-center align-items-center justify-content-center px-4 mb-2">
                <div className="col-3">
                    <div className="side-img"></div>
                </div>
                <div className="col-9 d-flex flex-column justify-content-center px-4">
                    <p className="mb-0">
                        <b>Laptop</b>
                    </p>
                    <p className="mb-0">$ 8,725 MXN</p>
                </div>
            </div>
            <div className="row side-options d-flex align-content-center align-items-center justify-content-center px-4 mb-2">
                <div className="col-3">
                    <div className="side-img"></div>
                </div>
                <div className="col-9 d-flex flex-column justify-content-center px-4">
                    <p className="mb-0">
                        <b>Laptop</b>
                    </p>
                    <p className="mb-0">$ 8,725 MXN</p>
                </div>
            </div>
            <div className="row side-options d-flex align-content-center align-items-center justify-content-center px-4 mb-2">
                <div className="col-3">
                    <div className="side-img"></div>
                </div>
                <div className="col-9 d-flex flex-column justify-content-center px-4">
                    <p className="mb-0">
                        <b>Laptop</b>
                    </p>
                    <p className="mb-0">$ 8,725 MXN</p>
                </div>
            </div>
            <div className="row side-options d-flex align-content-center align-items-center justify-content-center px-4 mb-2">
                <div className="col-3">
                    <div className="side-img"></div>
                </div>
                <div className="col-9 d-flex flex-column justify-content-center px-4">
                    <p className="mb-0">
                        <b>Laptop</b>
                    </p>
                    <p className="mb-0">$ 8,725 MXN</p>
                </div>
            </div>

            <div className="container mt-4 text-center">
                <button className="side-btn py-2">Todos los productos</button>
            </div>
        </div>
    )
}

export default SideMenu
