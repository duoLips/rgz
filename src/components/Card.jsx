import React from "react";

const Card = (props) => {

    return (
        <div className="card">
            <img className="card--icon" src={props.icon} alt="icon"/>
            <span className="card--title">{props.title}</span>
            <p className="card--text" > {props.text}</p>
        </div>
    )
}

export default Card