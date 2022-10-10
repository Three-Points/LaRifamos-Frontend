import { useContext, useEffect, useState } from "react";
import { ViewWidthContext } from "../../../App";
import SliderComponentHome from "./sliderComponentHome";
import TabsComponent from "./tabsComponentHomePage";

function OnlyForYouSection ({titulo, descripcion, opciones}) {

    const {viewWidth, setViewWidth} = useContext(ViewWidthContext);

    return (
        <>
        {viewWidth >= 768 ? (
            <div className="container mt-2 mt-lg-5">
                <TabsComponent
                    titulo={titulo}
                    descripcion={descripcion}
                    opciones={opciones}
                ></TabsComponent>
            </div>
        ) : (
            <div className="container mt-2 d-flex align-items-center justify-content-center">
                <SliderComponentHome></SliderComponentHome>
            </div>
        )}
        </>
    ); 
}

export default OnlyForYouSection; 