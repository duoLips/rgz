import React from "react";

const SliderItem = ({ time, img, title }) => {

    return (
        <>
            <div >
                <img src={img} alt="slider img"/>
                <span>{title}</span>
                <span>{time} секунд</span>
            </div>
        </>
    );
};

export default SliderItem