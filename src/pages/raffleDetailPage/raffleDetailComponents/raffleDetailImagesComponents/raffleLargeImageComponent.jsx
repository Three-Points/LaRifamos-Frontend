function RaffleLargeImageComponent({firstImage, secondaryImages, onClickImage}) {
    return (
        <>
            <div className="col-6">
                <div className="mx-auto rifa-detail-img-principal-container">
                    <img
                        src={firstImage}
                        alt=""
                        className="rifa-detail-img-principal"
                        onClick={() => onClickImage(0)}
                    />
                </div>
            </div>

            <div className="col-6 d-flex flex-wrap gap-2">
                {secondaryImages.map((image, index) => {
                    return (
                        <div className="rifa-detail-img-secundaria-container">
                            <img
                                src={image.url}
                                alt=""
                                className="rifa-detail-img-secundaria"
                                onClick={() => onClickImage(index)}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default RaffleLargeImageComponent
