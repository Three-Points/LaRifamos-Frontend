import { useEffect, useState } from "react";
import SliderComponentHome from "./sliderComponentHome";
import TabsComponent from "./tabsComponentHomePage";

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
                <SliderComponentHome></SliderComponentHome>
            </div>
        )}
        </>
    ); 
}

export default OnlyForYouSection; 