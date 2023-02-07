import { PageWrap, SignupWrapStyle, RegContainerStyle,ButtonContainerStyle, InputFieldStyle, PlacelabelStyle } from "../../components/common/styled";
import Header from "../../components/common/header";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../../store/actions/login";

const Password = () => {
    const nav = useNavigate();
    const {user} = useSelector((state) => state.LoginReducer);
    const dispatch = useDispatch();

    const [password, setPassword] = useState("");
    const [pwFocus, setPwFocus] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);
    const [errors, setErrors] = useState({});

    const postRegistration = async (password) => {
        try {
            const response = await axios.post("/accounts/login",{
                emailOrPhone: user.email,
                password: password
            });

            console.log(response);
            switch(response.data.code) {
                case 1000:
                    dispatch(signIn(response.data.result));
                    nav("/signup");
                    break;
                case 2023:
                    alert("이메일 오류");
                case 3014:
                    alert("아이디 혹은 비번 오류");
                default:
                    alert("오류")
            }
            
        }
        catch (error) {
            console.error(error);
        }
    }

    const handleRegSubmit = (e) => {
        e.preventDefault();
        postRegistration(password); 
    }

    const onPwFocus = () => {
        setPwFocus(true);
    }
    const onPwBlur = () => {
        setPwFocus(false);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <PageWrap>
            <Header page={"signup"}/>
            <SignupWrapStyle>
                <form onSubmit={handleRegSubmit}>
                    <RegContainerStyle page="regform">
                        <div className="step-header-container">
                            <span className="step-indicator"><b>1</b>/<b>3단계</b></span>
                            <h1 className="step-title">비밀번호를 설정해 멤버십을 시작하세요.</h1>
                        </div>
                        <div className="context-body">
                        몇 단계만 더 거치면 넷플릭스 가입 완료! 복잡한 단계는 모두 없앴습니다.
                        </div>
                        <SimpleFormFieldStyle>
                            <li className="nf-form-space">
                                <div>이메일 주소</div>
                                <div>{user.email}</div>
                            </li>
                            <li className="nf-form-space">
                                <div className="nf-input">
                                    <div className="nf-input-placement">
                                        <label placeholder="email">
                                            <InputFieldStyle 
                                                id="idPassword"
                                                type="password"
                                                name="password"
                                                maxllength="60"
                                                minlength="6"
                                                value={password}
                                                onFocus={onPwFocus}
                                                onBlur={onPwBlur}
                                                onChange={handleChangePassword} 
                                            />
                                            <PlacelabelStyle htmlFor="idPassword" focus={pwFocus} hasValue={password === ""}>
                                                비밀번호를 추가하세요
                                            </PlacelabelStyle>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li className="nf-form-space">
                                <div className="checkbox-input">
                                    <input type="checkbox" name="pipcConsent" id="cbPipcConsent" value="true" />
                                    <label>
                                        예, 저는 개인정보 처리방침에 따른 개인정보 수집 및 활용에 동의합니다.
                                    </label>
                                </div>
                            </li>
                            <li className="nf-form-space">
                                <div className="checkbox-input">
                                    <input type="checkbox" name="EmailPreference" id="cbEmailPreference" value="true" />
                                    <label>
                                        예, 넷플릭스 특별 할인 알림 이메일을 보내주세요. (선택 사항)
                                    </label>
                                </div>
                            </li>
                        </SimpleFormFieldStyle>
                    </RegContainerStyle>
                    <ButtonContainerStyle page="regform">
                        <button type="submit" className="nf-btn">동의하고 계속</button>
                    </ButtonContainerStyle>
                </form >
            </SignupWrapStyle>
        </PageWrap>
    );
}

const SimpleFormFieldStyle = styled.ul`
    margin: 10px 0 20px;
    box-sizing: border-box;
    padding: 0;
    .nf-form-space {
        margin-bottom: 10px;
        list-style: none;
        margin-left: 0;
    }

    .nf-input {
        max-width: 500px;
        position: relative;
    }
    .nf-input-placement {
        position: relative;
    }
    .checkbox-input {
        position: relative;
        box-sizing: border-box;
        padding-left: 36px;
        user-select: none;
        min-height: 32px;
        font-size: 16px;
        max-width: 500px;
    }
    .checkbox-input[type=checkbox]+label::before {
        width: 25px;
        height: 25px;
    }
    .checkbox-input[type=checkbox]+label {
        margin: 8px 0;
    }
`



export default Password;