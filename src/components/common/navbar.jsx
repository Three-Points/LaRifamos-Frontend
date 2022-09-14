

function Navbar() {
    return (
        <nav id="barraNavegacion" class="container mt-4">
            <div class="col-9 d-flex align-items-center mb-3">
                <ul class="d-flex align-items-center">
                    <li class="short"><img class="logo" src="./imgs/Logo_LaRifamos.png" alt=""/></li>
                    <li class="mx-2"><a href=""
                        class="rifas-btn d-flex align-content-center justify-content-center"><span>Rifas</span></a></li>
                </ul>
            </div>
            <div class="col-3 d-flex align-items-center justify-content-evenly mb-3">
                <button class="menu-btn"><img src="./imgs/ToggleBars.svg" alt=""/></button>
            </div>
        </nav>
    )
}

export default Navbar; 