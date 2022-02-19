import React from "react";
import "./ExpCard.css";

const ExpCard = (props) => {
    return (
        <div className="exp-image" style={{"backgroundImage" : props.image}}>
            <div className="item-flex">
                <div className="head3">{props.text}</div>
                <a href="#">
                    <div className="link-button">{props.button_text}</div>
                </a>
            </div>
        </div>
    );
}

export default ExpCard;