import React from "react";
import './TravelCard.css';
import { Link } from "react-router-dom";

const TravelCard = (props) => {
    return (
        <div class="banner2-item">
            <a href="#" class="no-underline">
                <div class="image" style={{"background-image" : props.image}}>
                </div>
                <div class="image-text" style={{"background" : props.color}}>
                    <div class="ttt">
                        <div class="name">{props.name}</div>
                        <div class="distance">{props.distance} 거리</div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default TravelCard;