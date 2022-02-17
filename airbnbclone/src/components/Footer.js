import React from "react";
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer"> 
            <div className="footer-box">
                <section className="footer-section">
                    <div className="head5">에어비엔비 지원</div>
                    <ul className="footer-column">
                        <li className="footer-row"><a href="#" className="footer-link no-underline">도움말 센터</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">안전 정보</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">예약 취소 옵션</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">에어비엔비의 코로나19 대응 방안</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">장애인 지원</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">이웃 민원 신고</a></li>
                    </ul>
                </section>

                <section className="footer-section">
                    <div className="head5">커뮤니티</div>
                    <ul className="footer-column">
                        <li className="footer-row"><a href="#" className="footer-link no-underline">Airbnb.org: 재난 구호 숙소</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">아프간 난민 지원</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">차별 철폐를 위한 노력</a></li>
                    </ul>
                </section>

                <section className="footer-section">
                    <div className="head5">호스팅</div>
                    <ul className="footer-column">
                        <li className="footer-row"><a href="#" className="footer-link no-underline">호스팅 시작하기</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">에어커버: 호스트를 위한 보호 프로그램</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">호스팅 자료 둘러보기</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">커뮤니티 포럼 방문하기</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">책임감 있는 호스팅</a></li>
                    </ul>
                </section>

                <section className="footer-section">
                    <div className="head5">소개</div>
                    <ul className="footer-column">
                        <li className="footer-row"><a href="#" className="footer-link no-underline">뉴스룸</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">새로운 기능에 대해 알아보기</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">에어비엔비 공동창업자의 메시지</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">채용정보</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">투자자 정보</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">에어비엔비 Luxe</a></li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Footer; 