import { useCallback, useContext, useState } from "react";
import ImageViewer from "react-simple-image-viewer";
import { ViewWidthContext } from "../../../App";
import { RaffleContext } from "../raffleDetailPage";
import RaffleLargeImageComponent from "./raffleDetailImagesComponents/raffleLargeImageComponent";
import RaffleSliderImageComponent from "./raffleDetailImagesComponents/raffleSliderImageComponent";

function RaffleDetailImages() {

    const { raffle, setRaffle } = useContext(RaffleContext)
    const [currentImage, setCurrentImage] = useState(0)
    const [isViewerOpen, setIsViewerOpen] = useState(false)
    const secondaryImages = raffle.products[0].images.slice(1); 
    const imagesViewer = raffle.products[0].images.map((image) => {
        return image.url
    })


  const { viewWidth, setViewWidth } = useContext(ViewWidthContext);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);


    const closeImageViewer = () => {
        setCurrentImage(0)
        setIsViewerOpen(false)
    }
    return (
        <div id="compras" className="row mt-5">
            {isViewerOpen && (
                <ImageViewer
                    src={imagesViewer}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: 'rgba(0,0,0,0.9)',
                    }}
                    closeOnClickOutside={true}
                />
            )}
            {viewWidth > 768 ? (
                <RaffleLargeImageComponent
                    firstImage={raffle.products[0].images[0].url}
                    secondaryImages={secondaryImages}
                    onClickImage={(int) => openImageViewer(int)}
                ></RaffleLargeImageComponent>
            ) : (
                <RaffleSliderImageComponent
                    images={raffle.products[0].images}
                ></RaffleSliderImageComponent>
            )}
        </div>
    )

}

export default RaffleDetailImages;
