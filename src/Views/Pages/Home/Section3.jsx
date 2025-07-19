import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Section3 = ({ img }) => {
    return (
        <section className="main_container">
            <div className="container">
                <div className="row pt-5">
                    <Swiper
                        slidesPerView={3}
                        loop={true}
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        modules={[Autoplay]}
                        className="mySwiper mt-5"
                    >
                        <SwiperSlide>
                            <img src={"/img/items1.jpg"} alt="image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"/img/items2.jpg"} alt="image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"/img/items3.jpg"} alt="image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"/img/items4.jpg"} alt="image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"/img/items5.jpg"} alt="image" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"/img/items6.jpg"} alt="image" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Section3;
