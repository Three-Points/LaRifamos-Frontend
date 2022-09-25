import { useState } from 'react'
import SideMenu from './sideMenu'

function Navbar() {
    const [showSideMenu, setShowSideMenu] = useState(false)

    function disableScroll() {
        // Get the current page scroll position
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop
        // eslint-disable-next-line no-unused-expressions
        var scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop)
        }
    }

    function enableScroll() {
        window.onscroll = function () {}
    }

    return (
        <>
            {showSideMenu ? (
                <SideMenu
                    onCrossClick={(bool) => setShowSideMenu(bool)}
                    enableScroll={() => enableScroll()}
                ></SideMenu>
            ) : (
                <></>
            )}
            <nav id="barraNavegacion" class="container mt-4">
                <div class="col-9 d-flex align-items-center mb-3">
                    <ul class="d-flex align-items-center">
                        <li class="short">
                            <img
                                class="logo"
                                src="./imgs/Logo_LaRifamos.png"
                                alt=""
                            />
                        </li>
                        <li class="mx-2">
                            <a
                                href=""
                                class="rifas-btn d-flex align-content-center justify-content-center"
                            >
                                <span>Rifas</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-3 d-flex align-items-center justify-content-evenly mb-3">
                    <button
                        class="menu-btn"
                        onClick={() => {
                            disableScroll()
                            setShowSideMenu(true)
                        }}
                    >
                        <img
                            src="./imgs/ToggleBars.svg"
                            alt=""
                            className="mx-1"
                        />
                        <img src="./imgs/Login.svg" alt="" />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
