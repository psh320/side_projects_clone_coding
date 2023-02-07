import { PageWrap ,InputFieldStyle, PlacelabelStyle, ButtonContainerStyle } from "../../components/common/styled"
import Header from "../../components/common/header"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import { loginAction } from "../../store/actions/login"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { signIn, updateEmail } from "../../store/actions/login"
import GoogleAuth from "../../components/common/GoogleAuth"

const LoginPage = () => {
    
    //외부 모듈
    const nav = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.LoginReducer);

    //state 생성
    const [name, setName] = useState('');
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [emailFocus, setEmailFocus] = useState(false);
    const [pwFocus, setPwFocus] = useState(false);

    useEffect(() => {
        setEmailId(user.email)
    }, [])

    const getMembership = async (accountIdx) => {
        try {
            console.log(accountIdx)
            const response = await axios.get("/accounts/" + accountIdx);

            console.log("after login", response);
            
            switch(response.data.code) {
                case 1000:
                    if(response.data.result.membership === null) {
                        nav("/signup");
                    } else {
                        nav("/browse");
                    }
                    break;
                default:
                    alert("오류")
            }
            
        }
        catch (error) {
            console.error(error);
        }
    }

    const postLogin = async (email, password) => {
        try {
            const response = await axios.post("/accounts/login",{
                emailOrPhone: email,
                password: password
            })

            console.log("before login", response);
            
            switch(response.data.code) {
                case 1000:
                    dispatch(signIn(response.data.result));
                    getMembership(response.data.result.accountIdx);
                    break;
                case 2023:
                    alert("이메일 오류");
                    break;
                case 3014:
                    alert("아이디 혹은 비번 오류");
                    break;
                default:
                    alert("오류")
            }
            
        }
        catch (error) {
            console.error(error);
        }
    }
 
    const getGoogleLogin = async (accountIdx) => {
        try {
            const response = await axios.get("/google-accounts/auth-url");
            switch(response.data.code) {
                case 1000:
                    window.open(response.data.result, '_blank');
                    break;
                default:
                    alert("오류")
            }
            
        }
        catch (error) {
            console.error(error);
        }
    }
    
    //name 셋팅
    const handleLoginSubmit = (e) => {
       e.preventDefault();
       dispatch(updateEmail(emailId));
       postLogin(emailId, password);
       
    }
    const onEmailFocus = () => {
        setEmailFocus(true);
    }
    const onEmailBlur = () => {
        setEmailFocus(false);
    }
    const handleChangeEmail = (e) => {
        setEmailId(e.target.value);
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
        <div>
            <PageColor>
                <LoginPageBackgroundStyle>
                    <img className="concord-img" src="https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/25155d75-2aae-4c0a-aee9-25c07646d644/KR-ko-20220307-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/25155d75-2aae-4c0a-aee9-25c07646d644/KR-ko-20220307-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/25155d75-2aae-4c0a-aee9-25c07646d644/KR-ko-20220307-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/25155d75-2aae-4c0a-aee9-25c07646d644/KR-ko-20220307-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="" />
                </LoginPageBackgroundStyle>
                <Header page="login" />
                <LoginWrap>
                    <div className="login-content">
                        <div className="login-form-main">
                            <h1>로그인</h1>
                            <form method="post" onSubmit={handleLoginSubmit}>
                                <div className="nf-input">
                                    <div className="nf-input-placement">
                                        <label placeholder="email">
                                            <InputFieldStyle 
                                                className="login-page-input"
                                                id="idEmail"
                                                type="email"
                                                name="email"
                                                maxllength="50"
                                                minlength="5"
                                                value={emailId}
                                                onFocus={onEmailFocus}
                                                onBlur={onEmailBlur}
                                                onChange={handleChangeEmail} 
                                            />
                                            <PlacelabelStyle htmlFor="idEmail" focus={emailFocus} hasValue={emailId === ""}>
                                                이메일 주소
                                            </PlacelabelStyle>
                                        </label>
                                    </div>
                                </div>
                                <div className="nf-input">
                                    <div className="nf-input-placement">
                                        <label placeholder="email">
                                            <InputFieldStyle 
                                                className="login-page-input"
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
                                <ButtonContainerStyle page="regform">
                                    <button type="submit" className="nf-btn small-btn">로그인</button>
                                </ButtonContainerStyle>

                                <div className="login-form-help">
                                    <div>
                                        <input type="checkbox" />
                                        <label>로그인 정보 저장</label>
                                    </div>
                                    <div className="login-help-link">
                                        도움이 필요하신가요?
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="login-form-other">
                            <div>
                                <button onClick={getGoogleLogin}>구글 로그인</button>
                            </div>
                            <div>
                                Netflix 회원이 아닌가요? 지금 가입하세요.
                            </div>
                            <div>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.</div>
                        </div>
                    </div>
                </LoginWrap>
            </PageColor>
        </div>
    )
}
const PageColor = styled.div`
    @media only screen and (min-width: 740px) {
        background-color: rgb(0,0,0,0.5);
    }
    background-color: black;
`

const LoginPageBackgroundStyle = styled.div`
    
    background-size: cover;
    display: none;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    @media only screen and (min-width: 740px) {
        display: block;
    }
    .concord-img {
        min-height: 100vh;
        min-width: 100%;
    }
`

const LoginWrap = styled.div`
    color: #FFFFFF;
    padding: 0 5%;
    margin: 0 auto;
    min-height: 100vh;
    background-color: transparent;
    @media only screen and (min-width: 740px) {
        &:before {
            content: "";
            height: 20px;
            display: block;
        }
        &:after {
            content: "";
            height: 200px;
            display: block;
        }
        max-width: 450px;
        margin: 0 auto -236px;
    }
    h1 {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 28px;
    }
    

    .login-content {
        display: flex;
        background-color: rgba(0,0,0,.75);
        border-radius: 4px;
        box-sizing: border-box;
        flex-direction: column;
        margin: 0;
        width: 100%;

        @media only screen and (min-width: 740px) {
            padding: 60px 68px 40px;
            margin-bottom: 90px;
            min-height: 660px;
        }
        min-height: 550px;
        padding: 20px 0 30px;
    }

    .login-form-main {
        flex-grow: 1;
    }
    .login-form-other {
        flex-grow: 1;
    }

    .nf-input {
        max-width: 500px;
        position: relative;
        padding-bottom: 16px;
    }
    .nf-input-placement {
        position: relative;
    }
    .login-page-input {
        background-color: #333;
        height: 50px;
        color: white;
        border: none;
    }
    .login-page-input:focus {
        outline: none;
        background-color: #454545;
    }

    .small-btn {
        box-sizing: border-box;
        min-height: 32px !important;
        font-size: 16px;
        padding: 16px;
        margin: 24px 0 12px;
    }
    .login-form-help {
        display: flex;
        align-items: center;
        font-size: 13px;
        line-height: 1.2;
        color: #b3b3b3;
        justify-content: space-between;
    }
    .login-help-link {
        padding-top: 2px;
    }
`;


export default LoginPage