import React from "react";
import ImageSlider from "react-simple-image-slider";
import { ReactComponent as HeartIcon} from "../../assets/heart.svg";
import {Link} from "react-router-dom";
import './House.css';

const House = (props) => {

    const renderedList = () => {
        return props.data.map(house => {
            return(
            <div className="house-box">
                <Link to="/rooms" className="link-style">
                <div className="house-detail">
                    <div className="house-image">
                        <ImageSlider 
                            width={300}
                            height={200}
                            images={house.images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                    <div className="house-info">
                        <div className="house-row">
                            <div className="house-row1">
                                <div className="house-name font" style={{color: "black"}}>
                                    <div>{house.subtitle}</div> 
                                    <div>{house.title}</div>
                                </div>
                                <div className="heart-icon">
                                    <HeartIcon />
                                </div>
                            </div>
                            <div className="seperate"></div>
                            <div className="font" style={{marginTop: "9px", color:"#717171", fontSize:"14px"}}>
                                <div>{house.option1}</div>
                            </div>
                            <div className="font" style={{marginTop: "3px", color:"#717171", fontSize:"14px"}}>
                                <div>{house.option2}</div>
                            </div>
                            <div className="house-row2">
                                <div className="house-rate" style={{color:"black"}}>
                                    {house.rate}
                                </div>
                                <div className="house-price font" style={{color:"black"}}>
                                    <div>₩{house.price} / 박</div>
                                    <div style={{textAlign: "right", fontSize: "14px"}}>총액 ₩{house.price * house.days}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </Link>
            </div>
            );
        });
    }

    return (
        <div>
            {renderedList()}
        </div>
    );
}

export default House;