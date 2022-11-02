import { useEffect, useState } from "react";
import LogoComponent from "./navbarComponents/logoComponent";
import ProfileButtonComponent from "./navbarComponents/profileButtonComponent";
import SideMenu from "./navbarComponents/sideMenu";

function Navbar() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  function disableScroll() {
    // Get the current page scroll position
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // eslint-disable-next-line no-unused-expressions
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
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
      <nav id="barraNavegacion" class="container mt-4 mb-3 mb-md-0">
        <LogoComponent></LogoComponent>
        <ProfileButtonComponent
          disableScroll={() => disableScroll()}
          onButtonClick={(bool) => setShowSideMenu(bool)}
        ></ProfileButtonComponent>
      </nav>
    </>
  );
}

export default Navbar;
