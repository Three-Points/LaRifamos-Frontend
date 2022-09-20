import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

function SliderComponent() {
    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
                <div class="container mt-2 mt-lg-5">
                    <h2 class="text-center fw-bold">Solo para ti</h2>
                    <p class="fs-80 text-center mb-3">
                        Teniendo su cuenta de LaRfiamos, hace que sea fácil
                        rifar haciendo transparente sus posibilidades de ganar
                        productos y sin complicaciones.
                    </p>

                    <div class="container d-flex flex-column justify-content-center align-items-center mb-4">
                        <div class="ini-img-mob"></div>
                        <p class="mt-3 mb-0">Registro de rifa</p>
                        <p class="mt-2 fs-80">
                            La plataforma verifica que la rifa sea posible y una
                            vez validada se registra en la Agencia de Loterías y
                            Quinielas.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="container mt-2 mt-lg-5">
                    <h2 class="text-center fw-bold">Solo para ti</h2>
                    <p class="fs-80 text-center mb-3">
                        Teniendo su cuenta de LaRfiamos, hace que sea fácil
                        rifar haciendo transparente sus posibilidades de ganar
                        productos y sin complicaciones.
                    </p>

                    <div class="container d-flex flex-column justify-content-center align-items-center mb-4">
                        <div class="ini-img-mob"></div>
                        <p class="mt-3 mb-0">Registro de rifa</p>
                        <p class="mt-2 fs-80">
                            La plataforma verifica que la rifa sea posible y una
                            vez validada se registra en la Agencia de Loterías y
                            Quinielas.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    )
}

export default SliderComponent
