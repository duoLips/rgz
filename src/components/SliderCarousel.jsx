import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/css/navigation';
import '../styles/slider.scss';
import oneTimer from "../assets/oneTimerBP.png";
import twoTimer from "../assets/twoTimerBP.png";
import familyTimer from "../assets/familyTimerBP.png";
import SliderItem from "./SliderItem";


const SliderCarousel = ({setActiveSlide, time}) => {

    const pagination = {
        clickable: true,
    };

    return (
        <div className="swiper-swiper">
            <Swiper
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                spaceBetween={20}
                slidesPerView={1}
                pagination={pagination}
                modules={[Pagination, Navigation]}
                navigation={true}
            >
                <SwiperSlide>
                    <SliderItem time={time} img={oneTimer} title="НА ОДНОГО" classN="forOne"/>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem time={time} img={twoTimer} title="НА ДВОХ" classN="forTwo"/>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem time={time} img={familyTimer} title="НА СІМ’Ю" classN="forFamily"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SliderCarousel