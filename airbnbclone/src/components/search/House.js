import React from "react";
import ImageSlider from "react-simple-image-slider";
import { ReactComponent as HeartIcon} from "../../assets/heart.svg";
import './House.css';

const House = (props) => {

    const renderedList = () => {
        return props.data.map(house => {
            return(
                <div class="house-box">
                <div class="house-detail">
                    <div class="house-image">
                        <ImageSlider 
                            width={300}
                            height={200}
                            images={house.images}
                            showBullets={true}
                            showNavs={true}
                        />
                    </div>
                    <div class="house-info">
                        <div class="house-row">
                            <div class="house-row1">
                                <div class="house-name font">
                                    <div>{house.subtitle}</div> 
                                    <div>{house.title}</div>
                                </div>
                                <div class="heart-icon">
                                    <HeartIcon />
                                </div>
                            </div>
                            <div class="seperate"></div>
                            <div class="font" style={{marginTop: "9px"}}>
                                <div>{house.option1}</div>
                            </div>
                            <div>
                                <div>{house.option2}</div>
                            </div>
                            <div class="house-row2">
                                <div class="house-rate">
                                    {house.rate}
                                </div>
                                <div class="house-price">
                                    <div>₩{house.price} / 박</div>
                                    <div style={{textAlign: "right", fontSize: "14px"}}>총액 ₩{house.price * house.days}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
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