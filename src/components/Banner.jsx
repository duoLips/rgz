import React from "react";

const Banner = () => {
    return (
        <div className={"banner"}>
            <div className="wrapper">
                <div className="banner-text_container">
                    <div className="banner-text_elemR">
                        <span className={"banner-text_1line"}>Збери </span>
                        <span className={"banner-text_2line"}>тривожну</span>
                    </div>
                    <div className="banner-text_elemL">
                        <span className={"banner-text_accent accent"}>валізу</span>
                        <a href="#home" className="button">Спробувати</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;