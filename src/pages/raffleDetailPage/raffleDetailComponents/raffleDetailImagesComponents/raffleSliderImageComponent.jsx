import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

function RaffleSliderImageComponent({ images }) {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {images.map((image, index) => {
                return (
                    <div className="col-12">
                        <SwiperSlide>
                            <div className="rifa-detail-img-container px-3 px-sm-0">
                                <img
                                    src={image.url}
                                    alt=""
                                    className="rifa-detail-img"
                                />
                            </div>
                        </SwiperSlide>
                    </div>
                )
            })}
        </Swiper>
    )
}

export default RaffleSliderImageComponent
