import Header from "../../components/common/header";
import {RegContainerStyle, PageWrap, SignupWrapStyle,ButtonContainerStyle} from "../../components/common/styled";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Check} from "../../components/common/svg/Check.svg";

const Planform = () => {

    return (
        <PageWrap>
            <Header page={"signup"}/>
                <SignupWrapStyle>
                    <RegContainerStyle page="planform">
                        <div className="step-header-container">
                            <span className="step-indicator"><b>2</b>/<b>3단계</b></span>
                            <h1 className="step-title">원하는 멤버십을 선택하세요.</h1>
                        </div>
                        <div className="context-body">
                            <PlanListStyle>
                                <li className="checkmark-row">
                                    <Check className="checkmark-icon" />
                                    <span className="checkmark-text">광고 없이 무제한으로 시청.</span>
                                </li>
                                <li className="checkmark-row">
                                    <Check className="checkmark-icon" />
                                    <span className="checkmark-text">취향에 꼭 맞는 콘텐츠를 추천해 드립니다.</span>
                                </li>
                                <li className="checkmark-row">
                                    <Check className="checkmark-icon" />
                                    <span className="checkmark-text">멤버십은 언제든지 변경 또는 해지 가능.</span>
                                </li>
                            </PlanListStyle>
                        </div>
                    </RegContainerStyle>
                    <Link to="/signup/regform">
                        <ButtonContainerStyle page="register">
                            <button className="nf-btn">다음</button>
                        </ButtonContainerStyle>
                    </Link>
                </SignupWrapStyle>
        </PageWrap>
    );
}

const PlanListStyle = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    margin-bottom: 20px;
    text-align: left !important;
    justify-content: space-between;

    .checkmark-row {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 0;
        flex-direction: row;
        margin-top: 20px;
    }
    .checkmark-icon {
        color: #e50914;
        flex: none;
        height: 24px;
        width: 24px;
        align-self: flex-start;
    }
    .checkmark-text {
        font-size: 18px;
        font-weight: 400;
        margin-left: 10px;
    }
`





export default Planform;