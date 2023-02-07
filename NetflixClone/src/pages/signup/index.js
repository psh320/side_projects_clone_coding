import Header from "../../components/common/header";
import {RegContainerStyle, PageWrap, SignupWrapStyle,ButtonContainerStyle} from "../../components/common/styled";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Check} from "../../components/common/svg/Check.svg";

const Signup = () => {

    return (
        <PageWrap>
            <Header page={"signup"}/>
                <SignupWrapStyle>
                    <RegContainerStyle page="register">
                        <div className="steplogo-container">
                            <div className="plan-steplogo"></div>
                        </div>
                        <div className="step-header-container">
                            <span className="step-indicator"><b>2</b>/<b>3단계</b></span>
                            <h1 className="step-title">원하는 멤버십을 선택하세요.</h1>
                        </div>
                        <div className="context-body">
                            <PlanListStyle>
                                <li className="checkmark-row">
                                    <Check className="checkmark-icon" />
                                    <span className="checkmark-text">無약정, 無위약금. 해지도 쿨하게 언제든지.</span>
                                </li>
                                <li className="checkmark-row">
                                    <Check className="checkmark-icon" />
                                    <span className="checkmark-text">넷플릭스의 모든 콘텐츠를 하나의 요금으로.</span>
                                </li>
                                <li className="checkmark-row">
                                    <Check className="checkmark-icon" />
                                    <span className="checkmark-text">모든 디바이스에서 무제한 시청.</span>
                                </li>
                            </PlanListStyle>
                        </div>
                    </RegContainerStyle>
                    <Link to="/signup/planform">
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





export default Signup;