import Header from "../../components/common/header";
import {RegContainerStyle, PageWrap, SignupWrapStyle,ButtonContainerStyle} from "../../components/common/styled";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Registration = () => {

    return (
        <PageWrap>
            <Header page={"signup"}/>
                <SignupWrapStyle>
                    <RegContainerStyle page="register">
                        <div className="steplogo-container">
                            <div className="reg-steplogo"></div>
                        </div>
                        <div className="step-header-container">
                            <span className="step-indicator"><b>1</b>/<b>3단계</b></span>
                            <h1 className="step-title">계정 설정 마무리하기</h1>
                        </div>
                        <div className="context-body">
                            맞춤형 콘텐츠 서비스, 넷플릭스! 비밀번호를 설정해 다양한 디바이스에서 아무 때나 시청하세요.
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





export default Registration;