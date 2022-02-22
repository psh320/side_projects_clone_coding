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
                <div class="detail1">
                    <div class="detail-row1">
                        <div class="row1-title">
                            <div class="font" style={{paddingTop: "24px", fontWeight:300, fontSize:"28px"}}>[하이레지던스] 신제주 중심 공항근처 신축 스튜디오 (스탠다드)</div>
                            
                        </div>
                        <div class="row1-etc">
                            <div class="etc1 font">
                                <Star />
                                4.64 · 후기 1,242개 · Cheju,제주도,한국
                            </div>
                            <div class="etc2 font">공유하기 저장</div>
                        </div>
                    </div>
                    <div class="detail-row2">
                        <div class="image1"><div class="detail-images" style={{backgroundImage: "url(https://a0.muscache.com/im/pictures/4ff77f88-4110-4ed1-ada3-7fd2de5e45d2.jpg?im_w=1200)"}}></div></div>
                        <div class="image-flex">
                            <div class="image2">
                                <div class="images"><div class="detail-images" style={{backgroundImage: "url(https://a0.muscache.com/im/pictures/c1ee5938-7308-41b9-8bca-913a87248526.jpg?im_w=720)"}}></div></div>
                                <div class="images"><div class="detail-images" style={{backgroundImage: "url(https://a0.muscache.com/im/pictures/930cc2ac-829c-4365-a4b5-9e3f483915f0.jpg?im_w=720)"}}></div></div>
                            </div>
                            <div class="image2">
                                <div class="images"><div class="detail-images" style={{backgroundImage: "url(https://a0.muscache.com/im/pictures/186fcdca-74cd-47ae-9283-9655c3cd7d03.jpg?im_w=720)"}}></div></div>
                                <div class="images"><div class="detail-images" style={{backgroundImage: "url(https://a0.muscache.com/im/pictures/57062fae-fede-4041-8bbb-a1e99a9dd112.jpg?im_w=720)"}}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="detail2">
                <div class="detail-info">
                    <div class="detail-row3">
                        <div class="row3-title">
                            <div class="font" style={{paddingTop: "24px", fontWeight:300, fontSize:"20px"}}>Hi Residences님이 호스팅하는 레지던스 전체</div>
                            
                        </div>
                        <div class="row3-etc">
                            <div class="etc1 font">
                                최대 인원 2명·원룸·침대 1개·욕실 1개
                            </div>
                        </div>
                    </div>

                    <div class="detail-row4">
                        <div class="row4-box">
                            <div><SelfCheckin /></div>
                            <div style={{marginLeft: "16px"}}>
                                <div class="font">셀프 체크인</div>
                                <div class="font">키패드를 이용해 체크인 하세요</div>
                            </div>
                        </div>
                        <div class="row4-box">
                            <div><HouseLocation /></div>
                            <div style={{marginLeft: "16px"}}>
                                <div class="font">훌륭한 숙소 위치</div>
                                <div class="font">최근 숙박한 게스트 중 90%가 위치에 별점 5점을 준 숙소입니다.</div>
                            </div>
                        </div>
                        <div class="row4-box">
                            <div><GoodCheckin /></div>
                            <div style={{marginLeft: "16px"}}>
                                <div class="font">순조로운 체크인 과정</div>
                                <div class="font">최근 숙박한 게스트 중 100%가 체크인 과정에 별점 5점을 준 숙소입니다.</div>
                            </div>
                        </div>
                    </div>

                    <div class="detail-row5">
                        <div class="font">
                            하이레지던스는 2019년 신축된 모던하고 편안한 프리미엄 거주지를 제공합니다.
                            <br/><br/>
                            신제주 도심 중심에 위치, 주변상권이 발달되어 저녁에도 안전히 이용할 수 있습니다. 제주공항에서 차로 10분채 걸리지 않으며, 도보로 즐길 수 있는 로컬식당이 많습니다. 주변에 버스정류장이 많아 대중교통 이용도 편리합니다. 
                        </div>
                        <div class="font">더보기...</div>
                    </div>

                    <div class="detail-row6">
                        <div class="font row6-head">숙박 장소</div>
                        <div class="row6-box">
                            <div class="row6-items">
                                <div style={{marginBottom: "16px"}}>
                                    <DoubleBed />
                                </div>
                                <div class="font" style={{marginBottom: "8px"}}>공용 공간</div>
                                <div class="font" style={{fontSize: "14px"}}>더블 침대 1개</div>
                            </div>
                        </div>
                    </div>
                    <div class="detail-row7">
                        <div class="font row6-head">숙소 편의시설</div>
                        <div class="facility-box">
                            <div>
                                <div class="facility">
                                    <div class="svg-icon"><DoubleBed /></div>
                                    <div class="facility-text">주방</div>
                                </div>
                            </div>
                            <div>
                                <div class="facility">
                                    <div class="svg-icon"><DoubleBed /></div>
                                    <div class="facility-text">주방</div>
                                </div>
                            </div>
                            <div>
                                <div class="facility">
                                    <div class="svg-icon"><DoubleBed /></div>
                                    <div class="facility-text">주방</div>
                                </div>
                            </div>
                            <div>
                                <div class="facility">
                                    <div class="svg-icon"><DoubleBed /></div>
                                    <div class="facility-text">주방</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="detail-row8">
                        <div class="calendar">Calendar Library</div>
                    </div>
                </div>

                <div class="sidebar-box">
                    <div class="sidebar">
                        <div class="bar">
                            <div class="font" style={{fontSize: "20px"}}>요금을 확인하려면 날짜를 <br/>입력하세요.</div>
                            <div class="font side-rate">
                                <div class="etc1 font">
                                    <Star />
                                    4.64 · 후기 1,242개
                                </div>
                            </div>
                            <div class="date-choice">
                                <div class="date-select">
                                    <div class="checkin">
                                        <div class="date-head">체크인</div>
                                        <div class="date-input">날짜 추가</div>
                                    </div>
                                    <div class="checkout">
                                        <div class="date-head">체크아웃</div>
                                        <div class="date-input">날짜 추가</div>
                                    </div>
                                </div>
                                <div class="people-select">
                                    <div class="date-head">인원</div>
                                    <div class="date-input">게스트 1명</div>
                                </div>
                            </div>

                            <div class="checkbutton">
                                <div class="check-date">
                                    예약 가능 여부 보기
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="detail3">
                <div class="detail3-row1">
                    <div class="etc1 font row6-head">
                        <Star />
                        4.64 · 후기 1,242개
                    </div>
                    <div class="d3r1-rate">
                        <div style={{marginBottom: "16px"}}>
                            <div class="rate-box">
                                <div class="rate-name">청결도</div>
                                <div class="rate-bar">
                                    <div class="ratebar-bar">
                                        <span class="bar-fill" style={{width: "100%"}}></span>
                                    </div>
                                    <div class="rate-score">5.0</div>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: "16px"}}>
                            <div class="rate-box">
                                <div class="rate-name">정확성</div>
                                <div class="rate-bar">
                                    <div class="ratebar-bar">
                                        <span class="bar-fill" style={{width: "100%"}}></span>
                                    </div>
                                    <div class="rate-score">5.0</div>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: "16px"}}>
                            <div class="rate-box">
                                <div class="rate-name">의사소통</div>
                                <div class="rate-bar">
                                    <div class="ratebar-bar">
                                        <span class="bar-fill" style={{width: "100%"}}></span>
                                    </div>
                                    <div class="rate-score">5.0</div>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: "16px"}}>
                            <div class="rate-box">
                                <div class="rate-name">위치</div>
                                <div class="rate-bar">
                                    <div class="ratebar-bar">
                                        <span class="bar-fill" style={{width: "100%"}}></span>
                                    </div>
                                    <div class="rate-score">5.0</div>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: "16px"}}>
                            <div class="rate-box">
                                <div class="rate-name">체크인</div>
                                <div class="rate-bar">
                                    <div class="ratebar-bar">
                                        <span class="bar-fill" style={{width: "100%"}}></span>
                                    </div>
                                    <div class="rate-score">5.0</div>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom: "16px"}}>
                            <div class="rate-box">
                                <div class="rate-name">가격 대비 만족도</div>
                                <div class="rate-bar">
                                    <div class="ratebar-bar">
                                        <span class="bar-fill" style={{width: "100%"}}></span>
                                    </div>
                                    <div class="rate-score">5.0</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="d3r1-reviews">
                        test
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HouseDetail;