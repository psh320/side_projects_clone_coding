import React,{useState, useEffect} from "react";
import "./HouseDetail.css";
import Header from "../Header"
import { ReactComponent as Star} from "../../assets/star.svg";
import { ReactComponent as HouseLocation} from "../../assets/facility_svg/house_location.svg";
import { ReactComponent as SelfCheckin} from "../../assets/facility_svg/self_checkin.svg";
import { ReactComponent as GoodCheckin} from "../../assets/facility_svg/good_checkin.svg";
import { ReactComponent as DoubleBed} from "../../assets/double_bed.svg";
const HouseDetail = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const [isSearch, setIsSearch] = useState(false);

    const dummydata = [
        {
            houseId: 1,
            title: "오소록 하우스💫 _나만의 안락하고 편안한 공간",
            loaction: "Aewol-eup, Cheju",
            rate: 4.99,
            reviews: [
                {
                    reviewId: 1,
                    date_year: 2022,
                    date_month: 2,
                    name: "한미",
                    comment: "깨끗하고 편안하고 따뜻하고 예쁜, 나만 알고 싶은 숙소",
                    profile: "https://a0.muscache.com/im/pictures/user/d5c733f2-2e78-4689-8506-0a9e2a399392.jpg?im_w=240"
                },
                {
                    reviewId: 2,
                    date_year: 2022,
                    date_month: 2,
                    name: "휘령",
                    comment: "넘넘 좋았습니다-!!! ✨✨ 숙소도 깔끔하고 과자 구비해주신거 정말 최고에요 ㅠㅠ 가격대비 훌륭합니다!!!",
                    profile: "https://a0.muscache.com/im/pictures/user/ab728146-f37f-41fd-a4f1-6f0c25164ba5.jpg?im_w=240"
                },
                {
                    reviewId: 3,
                    date_year: 2022,
                    date_month: 2,
                    name: "지운",
                    comment: "이번이 두번째 오소록하우스 방문인데 다시와도 정말 완벽한 숙소입니다 🤍 인테리어 하나하나 다 신경쓰신게 느껴지고 인스타 감성 숙소 그 자체에요. 정말 세세한거까지 다 갖춰져있어서 옷만 챙겨오면 불편함없이",
                    profile: "https://a0.muscache.com/im/pictures/user/3ae49368-f4eb-484f-9887-5bbc08563d62.jpg?im_w=240"
                },
                {
                    reviewId: 4,
                    date_year: 2022,
                    date_month: 2,
                    name: "Jaeeon",
                    comment: "숙소가 너무 좋았고 호스트님은 친절하셨습니다.",
                    profile: "https://a0.muscache.com/im/pictures/user/8968281b-05c5-4191-8462-baacfd0cfa1a.jpg?im_w=240"
                },
                {
                    reviewId: 5,
                    date_year: 2022,
                    date_month: 2,
                    name: "영은",
                    comment: "지금껏 다녔던 숙소중 최고였어요ㅠㅠ..들어오자마자 향기도 너무 좋고 씨디 플레이어도 최고💖 화장실도 향기롭고 너무 잘 머물다가네요 덕분에 제주도에서 좋은 기억",
                    profile: "https://a0.muscache.com/im/pictures/user/b39b7c85-6fe8-445d-a75b-8bc078e0ec4c.jpg?im_w=240"
                },
                {
                    reviewId: 6,
                    date_year: 2022,
                    date_month: 2,
                    name: "선횡",
                    comment: "저는 진짜 후기 잘 안남기는데요~ 오소록하우스는 정말 배려가많은곳이었어요~ 도착시간에맞춰 방도따뜻하게해주셨고 음악도틀어져있었어요!",
                    profile: "https://a0.muscache.com/im/pictures/user/d3bcf5c6-e0f2-4592-8c29-91be42f4d9fe.jpg?im_w=240"
                },
                {
                    reviewId: 7,
                    date_year: 2022,
                    date_month: 2,
                    name: "한미",
                    comment: "깨끗하고 편안하고 따뜻하고 예쁜, 나만 알고 싶은 숙소",
                    profile: "https://a0.muscache.com/im/pictures/user/d5c733f2-2e78-4689-8506-0a9e2a399392.jpg?im_w=240"
                }
            ],
            is_superhost: true,
            host_name: "Yejin",
            option1: "최대 인원 2명 · 원룸 · 침대 1개 · 욕실 1개",
            facilities: []
        }
    ]

    return (
        <div>
            <div className="header-rooms">
                <Header pageType={"rooms"} onSelectSearch={setIsSearch} setScrollPos={setScrollPos}/>
            </div>

            <div className="detail-main">
                <div className="detail1">
                    <div className="detail-row1">
                        <div className="row1-title">
                            <div className="font" style={{paddingTop: "24px", fontWeight:300, fontSize:"28px"}}>[하이레지던스] 신제주 중심 공항근처 신축 스튜디오 (스탠다드)</div>
                            
                        </div>
                        <div className="row1-etc">
                            <div className="etc1 font">
                                <Star />
                                4.64 · 후기 1,242개 · Cheju,제주도,한국
                            </div>
                            <div className="etc2 font">공유하기 저장</div>
                        </div>
                    </div>
                    <div className="detail-row2">
                        <div className="image1"><div className="detail-images" style={{backgroundImage: "url(https://a0.muscache.com/im/pictures/4ff77f88-4110-4ed1-ada3-7fd2de5e45d2.jpg?im_w=1200)"}}></div></div>
                        <div className="image-flex">
                            <div className="image2">
                                <div className="images"><div className="detail-images" style={{backgroundImage: "url(https://a0.muscache.com/im/pictures/c1ee5938-7308-41b9-8bca-913a87248526.jpg?im_w=720)"}}></div></div>
                                <div className="images"><div className="detail-images" style={{backgroundImage: "url(https://a0.muscache.com/im/pictures/930cc2ac-829c-4365-a4b5-9e3f483915f0.jpg?im_w=720)"}}></div></div>
                            </div>
                            <div className="image2">
                                <div className="images"><div className="detail-images" style={{backgroundImage: "url(https://a0.muscache.com/im/pictures/186fcdca-74cd-47ae-9283-9655c3cd7d03.jpg?im_w=720)"}}></div></div>
                                <div className="images"><div className="detail-images" style={{backgroundImage: "url(https://a0.muscache.com/im/pictures/57062fae-fede-4041-8bbb-a1e99a9dd112.jpg?im_w=720)"}}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="detail2">
                <div className="detail-info">
                    <div className="detail-row3">
                        <div className="row3-title">
                            <div className="font" style={{paddingTop: "24px", fontWeight:300, fontSize:"20px"}}>Hi Residences님이 호스팅하는 레지던스 전체</div>
                            
                        </div>
                        <div className="row3-etc">
                            <div className="etc1 font">
                                최대 인원 2명·원룸·침대 1개·욕실 1개
                            </div>
                        </div>
                    </div>

                    <div className="detail-row4">
                        <div className="row4-box">
                            <div><SelfCheckin /></div>
                            <div style={{marginLeft: "16px"}}>
                                <div className="font">셀프 체크인</div>
                                <div className="font">키패드를 이용해 체크인 하세요</div>
                            </div>
                        </div>
                        <div className="row4-box">
                            <div><HouseLocation /></div>
                            <div style={{marginLeft: "16px"}}>
                                <div className="font">훌륭한 숙소 위치</div>
                                <div className="font">최근 숙박한 게스트 중 90%가 위치에 별점 5점을 준 숙소입니다.</div>
                            </div>
                        </div>
                        <div className="row4-box">
                            <div><GoodCheckin /></div>
                            <div style={{marginLeft: "16px"}}>
                                <div className="font">순조로운 체크인 과정</div>
                                <div className="font">최근 숙박한 게스트 중 100%가 체크인 과정에 별점 5점을 준 숙소입니다.</div>
                            </div>
                        </div>
                    </div>

                    <div className="detail-row5">
                        <div className="font">
                            하이레지던스는 2019년 신축된 모던하고 편안한 프리미엄 거주지를 제공합니다.
                            <br/><br/>
                            신제주 도심 중심에 위치, 주변상권이 발달되어 저녁에도 안전히 이용할 수 있습니다. 제주공항에서 차로 10분채 걸리지 않으며, 도보로 즐길 수 있는 로컬식당이 많습니다. 주변에 버스정류장이 많아 대중교통 이용도 편리합니다. 
                        </div>
                        <div className="font">더보기...</div>
                    </div>

                    <div className="detail-row6">
                        <div className="font row6-head">숙박 장소</div>
                        <div className="row6-box">
                            <div className="row6-items">
                                <div style={{marginBottom: "16px"}}>
                                    <DoubleBed />
                                </div>
                                <div className="font" style={{marginBottom: "8px"}}>공용 공간</div>
                                <div className="font" style={{fontSize: "14px"}}>더블 침대 1개</div>
                            </div>
                        </div>
                    </div>
                    <div className="detail-row7">
                        <div className="font row6-head">숙소 편의시설</div>
                        <div className="facility-box">
                            <div>
                                <div className="facility">
                                    <div className="svg-icon"><DoubleBed /></div>
                                    <div className="facility-text">주방</div>
                                </div>
                            </div>
                            <div>
                                <div className="facility">
                                    <div className="svg-icon"><DoubleBed /></div>
                                    <div className="facility-text">주방</div>
                                </div>
                            </div>
                            <div>
                                <div className="facility">
                                    <div className="svg-icon"><DoubleBed /></div>
                                    <div className="facility-text">주방</div>
                                </div>
                            </div>
                            <div>
                                <div className="facility">
                                    <div className="svg-icon"><DoubleBed /></div>
                                    <div className="facility-text">주방</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail-row8">
                        <div className="calendar">Calendar Library</div>
                    </div>
                </div>

                <div className="sidebar-box">
                    <div className="sidebar">
                        <div className="bar">
                            <div className="font" style={{fontSize: "20px"}}>요금을 확인하려면 날짜를 <br/>입력하세요.</div>
                            <div className="font side-rate">
                                <div className="etc1 font">
                                    <Star />
                                    4.64 · 후기 1,242개
                                </div>
                            </div>
                            <div className="date-choice">
                                <div className="date-select">
                                    <div className="checkin">
                                        <div className="date-head">체크인</div>
                                        <div className="date-input">날짜 추가</div>
                                    </div>
                                    <div className="checkout">
                                        <div className="date-head">체크아웃</div>
                                        <div className="date-input">날짜 추가</div>
                                    </div>
                                </div>
                                <div className="people-select">
                                    <div className="date-head">인원</div>
                                    <div className="date-input">게스트 1명</div>
                                </div>
                            </div>

                            <div className="checkbutton">
                                <div className="check-date">
                                    예약 가능 여부 보기
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="detail3">
                <div className="detail3-row1">
                    <div className="etc1 font row6-head">
                        <Star />
                        4.64 · 후기 1,242개
                    </div>
                    <div className="d3r1-rate">
                        <div>
                            <div className="rate-box">
                                <div className="rate-name">청결도</div>
                                <div className="rate-bar">
                                    <div className="ratebar-bar">
                                        <span className="bar-fill" style={{width: "100%"}}></span>
                                    </div>
                                    <div className="rate-score">5.0</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="rate-box">
                                <div className="rate-name">정확성</div>
                                <div className="rate-bar">
                                    <div className="ratebar-bar">
                                        <span className="bar-fill" style={{width: "100%"}}></span>
                                    </div>
                                    <div className="rate-score">5.0</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="rate-box">
                                <div className="rate-name">의사소통</div>
                                <div className="rate-bar">
                                    <div className="ratebar-bar">
                                        <span className="bar-fill" style={{width: "100%"}}></span>
                                    </div>
                                    <div className="rate-score">5.0</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="rate-box">
                                <div className="rate-name">위치</div>
                                <div className="rate-bar">
                                    <div className="ratebar-bar">
                                        <span className="bar-fill" style={{width: "100%"}}></span>
                                    </div>
                                    <div className="rate-score">5.0</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="rate-box">
                                <div className="rate-name">체크인</div>
                                <div className="rate-bar">
                                    <div className="ratebar-bar">
                                        <span className="bar-fill" style={{width: "100%"}}></span>
                                    </div>
                                    <div className="rate-score">5.0</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="rate-box">
                                <div className="rate-name">가격 대비 만족도</div>
                                <div className="rate-bar">
                                    <div className="ratebar-bar">
                                        <span className="bar-fill" style={{width: "100%"}}></span>
                                    </div>
                                    <div className="rate-score">5.0</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="d3r1-reviews">
                        <div>
                            <div className="review-user">
                                <div className="user-image">
                                    <img src={dummydata[0].reviews[0].profile} style={{width:"100%", height: "100%", borderRadius: "50%"}}/>
                                </div>
                                <div className="font" style={{marginLeft: "12px"}}>
                                    한미
                                    <div style={{fontSize:14, color:"#717171"}}>2022년 2월</div>
                                </div>
                            </div>
                            <div className="review-text">
                                <span>깨끗하고 편안하고 따뜻하고 예쁜, 나만 알고 싶은 숙소</span>
                            </div>
                        </div>
                        <div>
                            <div className="review-user">
                                <div className="user-image">
                                    <img src={dummydata[0].reviews[0].profile} style={{width:"100%", height: "100%", borderRadius: "50%"}}/>
                                </div>
                                <div className="font" style={{marginLeft: "12px"}}>
                                    한미
                                    <div style={{fontSize:14, color:"#717171"}}>2022년 2월</div>
                                </div>
                            </div>
                            <div className="review-text">
                                <span>이번이 두번째 오소록하우스 방문인데 다시와도 정말 완벽한 숙소입니다 🤍 인테리어 하나하나 다 신경쓰신게 느껴지고 인스타 감성 숙소 그 자체에요. 정말 세세한거까지 다 갖춰져있어서 옷만 챙겨오면 불편함없이 생활 가능해요! 숙소 냄새도 짱 좋아요. 주방에도 조리도구들 다 있어서 요리해먹기 정말 편하고 호스트님도 너무너무 친절하시답니다 ❤️ 이미 너무 인기가 많아서 예약하기 쉽진않겠지만 ,,ㅎㅎ 기회가 된다면 다른 분들도 꼭 와보셨으면 좋겠어요 !</span>
                            </div>
                        </div>
                        <div>
                            <div className="review-user">
                                <div className="user-image">
                                    <img src={dummydata[0].reviews[0].profile} style={{width:"100%", height: "100%", borderRadius: "50%"}}/>
                                </div>
                                <div className="font" style={{marginLeft: "12px"}}>
                                    한미
                                    <div style={{fontSize:14, color:"#717171"}}>2022년 2월</div>
                                </div>
                            </div>
                            <div className="review-text">
                                <span>깨끗하고 편안하고 따뜻하고 예쁜, 나만 알고 싶은 숙소</span>
                            </div>
                        </div>
                        <div>
                            <div className="review-user">
                                <div className="user-image">
                                    <img src={dummydata[0].reviews[0].profile} style={{width:"100%", height: "100%", borderRadius: "50%"}}/>
                                </div>
                                <div className="font" style={{marginLeft: "12px"}}>
                                    한미
                                    <div style={{fontSize:14, color:"#717171"}}>2022년 2월</div>
                                </div>
                            </div>
                            <div className="review-text">
                                <span>깨끗하고 편안하고 따뜻하고 예쁜, 나만 알고 싶은 숙소</span>
                            </div>
                        </div>
                        <div>
                            <div className="review-user">
                                <div className="user-image">
                                    <img src={dummydata[0].reviews[0].profile} style={{width:"100%", height: "100%", borderRadius: "50%"}}/>
                                </div>
                                <div className="font" style={{marginLeft: "12px"}}>
                                    한미
                                    <div style={{fontSize:14, color:"#717171"}}>2022년 2월</div>
                                </div>
                            </div>
                            <div className="review-text">
                                <span>깨끗하고 편안하고 따뜻하고 예쁜, 나만 알고 싶은 숙소</span>
                            </div>
                        </div>
                        <div>
                            <div className="review-user">
                                <div className="user-image">
                                    <img src={dummydata[0].reviews[0].profile} style={{width:"100%", height: "100%", borderRadius: "50%"}}/>
                                </div>
                                <div className="font" style={{marginLeft: "12px"}}>
                                    한미
                                    <div style={{fontSize:14, color:"#717171"}}>2022년 2월</div>
                                </div>
                            </div>
                            <div className="review-text">
                                <span>깨끗하고 편안하고 따뜻하고 예쁜, 나만 알고 싶은 숙소</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detail3-row2">
                    Google Map library
                </div>
            </div>
        </div>
    );
}

export default HouseDetail;