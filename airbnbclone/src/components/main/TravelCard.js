import React from "react";
import './TravelCard.css';
import { Link } from "react-router-dom";

const TravelCard = (props) => {
    return (
        <div className="banner2-item">
            <a href="#" className="no-underline">
                <div className="image" style={{"backgroundImage" : props.image}}>
                </div>
                <div className="image-text" style={{"background" : props.color}}>
                    <div className="ttt">
                        <div className="name">{props.name}</div>
                        <div className="distance">{props.distance} 거리</div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default TravelCard;