import React, {useEffect, useState} from "react";
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
import forOne from "../assets/forOneQ.json";
import forTwo from "../assets/forTwoQ.json";
import forFamily from "../assets/forFamily.json";

const SliderCarousel = ({ activeSlide, setActiveSlide,setTime, time }) => {
    useEffect(() => {
        switch (activeSlide) {
            case 0:
                setTime(20)
                break;
            case 1:
                setTime(30)
                break;
            case 2:
                setTime(45)
        }
    }, [activeSlide])
    const pagination = {
        clickable: true,
    };

    return (
        <>
            <Swiper
                onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                spaceBetween={20}
                slidesPerView={1}
                pagination={pagination}
                modules={[Pagination, Navigation]}
                navigation={true}
            >
                <SwiperSlide>
                    <SliderItem time={time} img={oneTimer} title="НА ОДНОГО" />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem time={time} img={twoTimer} title="НА ДВОХ" />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem time={time} img={familyTimer} title="НА СІМ’Ю" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderCarousel