import React, {useState, useEffect, useRef} from "react";
import './SearchHouse.css';
import Header from "../Header";
import House from "./House";
import GoogleMap from '../GoogleMap';
const SearchHouse = () => {

    const dummydata = [
        {
            houseId : 1,
            title : "Aewol-eup, Cheju의 주거용 공간 전체",
            subtitle: "오소록 하우스 _나만의 안락하고 편안한 공간",
            option1: "최대 인원 2명·원룸·침대 1개·욕실 1개",
            option2: "무료 주차 공간·주방·무선 인터넷·세탁기",
            rate: 4.89,
            price: 130383,
            days: 5,
            images: [
                {url : "https://a0.muscache.com/im/pictures/4ff77f88-4110-4ed1-ada3-7fd2de5e45d2.jpg?im_w=720"},
                {url : "https://a0.muscache.com/im/pictures/a8b4b91d-cf9f-4f63-8c0f-c38bceb2a48a.jpg?im_w=720"},
                {url : "https://a0.muscache.com/im/pictures/c84eccce-a232-4593-8b19-d02beae6a04f.jpg?im_w=720"},
                {url : "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46907831/original/e4b96cd0-280e-4b86-b716-626de989386c.jpeg?im_w=720"}
            ]
        },
        {
            houseId : 1,
            title : "Aewol-eup, Cheju의 주거용 공간 전체",
            subtitle: "오소록 하우스 _나만의 안락하고 편안한 공간",
            option1: "최대 인원 2명·원룸·침대 1개·욕실 1개",
            option2: "무료 주차 공간·주방·무선 인터넷·세탁기",
            rate: 4.89,
            price: 130383,
            days: 5,
            images: [
                {url : "https://a0.muscache.com/im/pictures/4ff77f88-4110-4ed1-ada3-7fd2de5e45d2.jpg?im_w=720"},
                {url : "https://a0.muscache.com/im/pictures/a8b4b91d-cf9f-4f63-8c0f-c38bceb2a48a.jpg?im_w=720"},
                {url : "https://a0.muscache.com/im/pictures/c84eccce-a232-4593-8b19-d02beae6a04f.jpg?im_w=720"},
                {url : "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46907831/original/e4b96cd0-280e-4b86-b716-626de989386c.jpeg?im_w=720"}
            ]
        },
        {
            houseId : 1,
            title : "Aewol-eup, Cheju의 주거용 공간 전체",
            subtitle: "오소록 하우스 _나만의 안락하고 편안한 공간",
            option1: "최대 인원 2명·원룸·침대 1개·욕실 1개",
            option2: "무료 주차 공간·주방·무선 인터넷·세탁기",
            rate: 4.89,
            price: 130383,
            days: 5,
            images: [
                {url : "https://a0.muscache.com/im/pictures/4ff77f88-4110-4ed1-ada3-7fd2de5e45d2.jpg?im_w=720"},
                {url : "https://a0.muscache.com/im/pictures/a8b4b91d-cf9f-4f63-8c0f-c38bceb2a48a.jpg?im_w=720"},
                {url : "https://a0.muscache.com/im/pictures/c84eccce-a232-4593-8b19-d02beae6a04f.jpg?im_w=720"},
                {url : "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46907831/original/e4b96cd0-280e-4b86-b716-626de989386c.jpeg?im_w=720"}
            ]
        },
        {
            houseId : 1,
            title : "Aewol-eup, Cheju의 주거용 공간 전체",
            subtitle: "오소록 하우스 _나만의 안락하고 편안한 공간",
            option1: "최대 인원 2명·원룸·침대 1개·욕실 1개",
            option2: "무료 주차 공간·주방·무선 인터넷·세탁기",
            rate: 4.89,
            price: 130383,
            days: 5,
            images: [
                {url : "https://a0.muscache.com/im/pictures/4ff77f88-4110-4ed1-ada3-7fd2de5e45d2.jpg?im_w=720"},
                {url : "https://a0.muscache.com/im/pictures/a8b4b91d-cf9f-4f63-8c0f-c38bceb2a48a.jpg?im_w=720"},
                {url : "https://a0.muscache.com/im/pictures/c84eccce-a232-4593-8b19-d02beae6a04f.jpg?im_w=720"},
                {url : "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46907831/original/e4b96cd0-280e-4b86-b716-626de989386c.jpeg?im_w=720"}
            ]
        },
    ]
    const ref = useRef(null);
    const [map_width, set_map_width] = useState(0);
    useEffect(()=> {
        set_map_width(ref.current.offsetWidth)
    })
    // Get width for options responsive
    const [width, setWidth] = useState(0);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize', updateWidth);
    });

    // Get Header status
    const [isSearch, setIsSearch] = useState(false)
    const [scrollPos, setScrollPos] = useState(0);
    useEffect(()=> {
        setIsSearch(false);
        
    },[scrollPos])
    return(
        <div>
            <div className="search-header">
                <Header pageType={"search"} onSelectSearch={setIsSearch} setScrollPos={setScrollPos}/>
                <div className="options-box" style={isSearch ? {display:'none'}:{display:'block'}}>
                    <div className="options-flex">
                        <div className="options-important">
                            <div className="options-items">
                                <button className="options-button">
                                    <span className="options-text">요금</span>
                                </button>
                            </div>
                            <div className="options-items">
                                <button className="options-button">
                                    <span className="options-text">숙소 유형</span>
                                </button>
                            </div>
                            <div style={{height: '20px', borderLeft: '1px solid #DDDDDD'}}></div>
                        </div>
                        
                        <div className="options-etc">
                            <div className="options-items">
                                <button className="options-button">
                                    <span className="options-text">에어컨</span>
                                </button>
                            </div>
                            <div className="options-items">
                                <button className="options-button">
                                    <span className="options-text">무선 인터넷</span>
                                </button>
                            </div>
                            <div className="options-items">
                                <button className="options-button">
                                    <span className="options-text">무료 주차 공간</span>
                                </button>
                            </div>
                            <div className="options-items">
                                <button className="options-button">
                                    <span className="options-text">주방</span>
                                </button>
                            </div>
                            <div className="options-items">
                                <button className="options-button">
                                    <span className="options-text">업무 전용 공간</span>
                                </button>
                            </div>
                            <div className="options-items">
                                <button className="options-button">
                                    <span className="options-text">세탁기</span>
                                </button>
                            </div>
                            <div className="options-items">
                                <button className="options-button">
                                    <span className="options-text">셀프 체크인</span>
                                </button>
                            </div>
                            <div className="options-items">
                                <button className="options-button">
                                    <span className="options-text">다리미</span>
                                </button>
                            </div>
                            <div className="options-items">
                                <button className="options-button">
                                    <span className="options-text">건조기</span>
                                </button>
                            </div>
                            <div className="options-items">
                                <button className="options-button">
                                    <span className="options-text">아침식사</span>
                                </button>
                            </div>
                            <div className="options-items">
                                <button className="options-button">
                                    <span className="options-text">전기차 충전시설</span>
                                </button>
                            </div>
                        </div>
                        <div className="options-filter">
                            <div className="options-items">
                                <button className="options-button">
                                    <span className="options-text">필터</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="main-search">
                <div className="house">
                    <div className="warning">
                        <div className="font">지도에 표시된 지역에 위치한 300개 이상의 숙소</div>
                        <div className="font">예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.</div>
                    </div>

                    <div className="house-list">
                         <House data={dummydata}/>
                    </div>

                </div>
                <div className="map" ref={ref}>
                    <GoogleMap google={window.google} width={map_width} />
                </div>
            </div>
        </div>
    );
}


export default SearchHouse;