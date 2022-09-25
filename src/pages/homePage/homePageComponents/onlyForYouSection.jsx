import { useEffect, useState } from "react";
import SliderComponent from "../../../components/sliderComponent";
import TabsComponent from "../../../components/tabsComponent";

function OnlyForYouSection ({titulo, descripcion, opciones}) {

    const [viewWidth, setViewWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setViewWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
    }); 

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
                <SliderComponent></SliderComponent>
            </div>
        )}
        </>
    ); 
}

export default OnlyForYouSection; 