import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Fish.css';
const Fish = () => {
    const [Fish, setFish] = useState([])
    const [HourMonth, setHourMonth] = useState([])
    const getData = async () => {
        try {
            const response = await axios.get('https://acnhapi.com/v1a/fish');
            setFish(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const today = new Date()
        const hour = today.getHours()
        const month = today.getMonth()
        setHourMonth([hour, month])
        getData()
    }, [])

    console.log(Fish)
    const renderedFish = () => {
        const hour = HourMonth[0]
        const month = HourMonth[1]
        return Fish && Fish.map(fish => {
            if(fish.availability["time-array"].includes(hour) && fish.availability["month-array-northern"].includes(month)) {
                return (
                    <div className="fish-box">
                        <div className="fish-row1">
                            <div className="fish-name">{fish.name["name-KRko"]}</div>
                            <div className="fish-icon"><img width="40px" height="40px" src={fish.icon_uri}/></div>
                        </div>
                        <div className="fish-row2">
                            <div className='fish-image'><img width="200px" height="100px" src={fish.image_uri}/></div>
                        </div>
                        <div className="fish-row3">
                            <div className="fish-location">{fish.availability.location}</div>
                            <div className="fish-time">
                                {fish.availability.time === "" ? "하루 종일" : fish.availability.time}
                            </div>
                        </div>
                    </div>
                );
            }
            
        })
    }
    return (
        <div className='fish-main'>
            <div className='header-text'><h3>지금 잡을수 있는 물고기들</h3></div>
            <div className="fish-grid">
                {renderedFish()}
            </div>
        </div>
    );
}

export default Fish;