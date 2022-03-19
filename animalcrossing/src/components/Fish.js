import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import './Fish.css';
const Fish = () => {
    const monthData = [
        {
            value:1,
            label:1
        },
        {
            value:2,
            label:2
        },
        {
            value:3,
            label:3
        },
        {
            value:4,
            label:4
        },
        {
            value:5,
            label:5
        },
        {
            value:6,
            label:6
        },
        {
            value:7,
            label:7
        },
        {
            value:8,
            label:8
        },
        {
            value:9,
            label:9
        },
        {
            value:10,
            label:10
        },
        {
            value:11,
            label:11
        },
        {
            value:12,
            label:12
        }
    ]
    const hourData = [
        {
            value:1,
            label:1
        },
        {
            value:2,
            label:2
        },
        {
            value:3,
            label:3
        },
        {
            value:4,
            label:4
        },
        {
            value:5,
            label:5
        },
        {
            value:6,
            label:6
        },
        {
            value:7,
            label:7
        },
        {
            value:8,
            label:8
        },
        {
            value:9,
            label:9
        },
        {
            value:10,
            label:10
        },
        {
            value:11,
            label:11
        },
        {
            value:12,
            label:12
        },
        {
            value:13,
            label:13
        },
        {
            value:14,
            label:14
        },
        {
            value:15,
            label:15
        },
        {
            value:16,
            label:16
        },
        {
            value:17,
            label:17
        },
        {
            value:18,
            label:18
        },
        {
            value:19,
            label:19
        },
        {
            value:20,
            label:20
        },
        {
            value:21,
            label:21
        },
        {
            value:22,
            label:22
        },
        {
            value:23,
            label:23
        },
        {
            value:0,
            label:0
        }
    ]
    const [Fish, setFish] = useState([])
    const [SelectedMonth, setSelectedMonth] = useState(null)
    const [SelectedHour, setSelectedHour] = useState(null)
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
        const month = today.getMonth() + 1
        setSelectedMonth({value: month, label:month})
        setSelectedHour({value: hour, label:hour})

        getData()
    }, [])
    const handleMonthChange = (e) => {
        setSelectedMonth(e)
    }
    const handleHourChange = (e) => {
        setSelectedHour(e)
    }
    console.log(SelectedHour)
    console.log(SelectedMonth)
    console.log(Fish)
    const renderedFish = () => {
        const hour = SelectedHour
        const month = SelectedMonth
        return Fish && Fish.map(fish => {
            if(fish.availability["time-array"].includes(hour.value) && fish.availability["month-array-northern"].includes(month.value)) {
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
            <div className="header-box">
                <div className='header-text'><h3>특정 시간에 잡을수 있는 물고기들</h3></div>
                <div className="form-group">
                    <Select 
                        placeholder="몇 달"
                        value = {SelectedMonth}
                        options= {monthData}
                        onChange={handleMonthChange}
                    />
                    
                </div>
                <div>월</div>

                <div className="form-group">
                    <Select 
                        placeholder="몇 시"
                        value = {SelectedHour}
                        options= {hourData}
                        onChange={handleHourChange}
                    />
                </div>
                <div>시</div>

            </div>
            <div className="fish-grid">
                {renderedFish()}
            </div>
        </div>
    );
}

export default Fish;