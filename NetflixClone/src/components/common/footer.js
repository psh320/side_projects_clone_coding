import React from "react";
import styled from "styled-components";
const Footer = (props) => {
    return (
        <FooterWrap page={props.page}> 
            <div className={props.page === "index"? "footer-box index-color":"footer-box"}>
                <section className="footer-section">
                    <ul className="footer-column">
                        <li className="footer-row"><a href="#" className="footer-link no-underline">자막 및 음성</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">미디어 센터</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">개인정보</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">문의하기</a></li>
                    </ul>
                </section>

                <section className="footer-section">
                    <ul className="footer-column">
                        <li className="footer-row"><a href="#" className="footer-link no-underline">음성 지원</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">투자 정보(IR)</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">법적 고지</a></li>
                    </ul>
                </section>

                <section className="footer-section">
                    <ul className="footer-column">
                        <li className="footer-row"><a href="#" className="footer-link no-underline">고객 센터</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">입사 정보</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">쿠키 설정</a></li>
                    </ul>
                </section>

                <section className="footer-section">
                    <ul className="footer-column">
                        <li className="footer-row"><a href="#" className="footer-link no-underline">기프트카드</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">이용 약관</a></li>
                        <li className="footer-row"><a href="#" className="footer-link no-underline">회사 정보</a></li>
                    </ul>
                </section>
            </div>
        </FooterWrap>
    );
};

const FooterWrap = styled.div`
    background-color: ${props => props.page === "index" ? "black":"#141414"};
    margin-left: auto;
    margin-right: auto;
    padding: 0 4%;
    max-width: 980px;
    .footer-box {
        display: flex;
        flex-direction: row;
        padding-top: 48px;
        padding-bottom: 48px;
        
    }
    .index-color {
        background-color: black;
    }

    .footer-section {
        flex-basis: 25%;
        padding-left: 12px;
        padding-right: 12px;
    }

    .footer-column {
        list-style: none;
        padding-left: 0px;
    }

    .footer-row {
        margin-top: 16px;
    }

    .head5 {
        font-size: 14px;
        font-weight: 800;
    }

    .footer-link {
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
        color:grey;
    }
`


export default Footer; 