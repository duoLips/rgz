import React from "react";

const SliderItem = ({time, img, title, classN}) => {

    return (
        <div className={`slider--item slider--item_${classN}`} >
            <img className="slider--item-img" src={img} alt="slider img"/>
            <span className="slider--item-title" >{title}</span>
            <span className="slider--item-time" >{time} секунд</span>
        </div>
    );
};

export default SliderItem