import styled from "styled-components"
import { StoryCardStyle, PageWrap } from "../components/common/styled";
import Header from "../components/common/header";
import StoryCard from "../components/firstpage/StoryCard"
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateEmail } from "../store/actions/login";
import Footer from "../components/common/footer";
const IndexPage = () => {

    //모듈 선언
    const nav = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.LoginReducer);

    //글로벌 스테이트 선언
    useEffect(() => {
        setLoginId(user.email)
    }, [])

    //로컬 스테이트 선언
    const [loginId, setLoginId] = useState("");
    const [emailFocus, setEmailFocus] = useState(false);
    const [signInLevel, setSignInLevel] = useState(null);

    //라이프 싸이클 선언
    useEffect(() => {
        if(user.isSignedIn && user.membership != null) {
            nav('/browse')
        }
    })
    useEffect(() => {
        switch(signInLevel) {
            case "0":
                nav("/signup/registration")
                break;
            case "1":
                nav("/signup/password")
                break;
            case "2":
                nav("/login")
                break;
            default:
                nav("/")
        }
    }, [signInLevel])
    console.log(signInLevel);
    
    //함수 선언
    const getSigninLevel = async email => {
        try {
            const response = await axios.get("/accounts/sign-in-level",{
                params: {
                    email: email
                }
            })
            dispatch(updateEmail(loginId));
            setSignInLevel(response.data.result);
        }
        catch (error) {
            console.error(error);
        }
    }

    const onEmailFocus = () => {
        setEmailFocus(true);
    }
    const onEmailBlur = () => {
        setEmailFocus(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        getSigninLevel(loginId);
    }
    const handleChangeId = (e) => {
        setLoginId(e.target.value)
    }

    const renderIsLoggedIn = () => {
        if (user.isSignedIn && user.membership === null) {
            return(
                <div className="submit-button-wrap">
                    <Link to="/signup">
                    <SubmitButtonStyle>
                        <span className="btn-txt">가입 마무리 하기</span>
                    </SubmitButtonStyle>
                    </Link>
                </div>
            );
        }
        else {
            return(
                <EmailFormLockUpStyle>
                    <div className="email-input-wrap">
                        <EmailInputStyle 
                            id="idEmail" 
                            name="email" 
                            type="email" 
                            onChange={handleChangeId} 
                            value={loginId}
                            onFocus={onEmailFocus}
                            onBlur={onEmailBlur}
                        />
                        <EmailPlacelabelStyle htmlFor="idEmail" focus={emailFocus} hasValue={loginId === ""}>
                            이메일 주소
                        </EmailPlacelabelStyle>
                    </div>
                    
                    <div className="submit-button-wrap">
                        <SubmitButtonStyle type="submit" >
                            <span className="btn-txt">시작하기</span>
                            <span className="right-arrow">></span>
                        </SubmitButtonStyle>
                    </div>

                </EmailFormLockUpStyle>
            );
        }
    }
    //마무리 리턴 문
    return (
        <PageWrap>
            <Header page="index" />
                <div>
                    <StoryCardStyle>
                        <StoryCardBackgroundStyle>
                            <div style={{height: "100%"}}>
                                <img className="storycard-background" src={"https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/25155d75-2aae-4c0a-aee9-25c07646d644/KR-ko-20220307-popsignuptwoweeks-perspective_alpha_website_small.jpg"} />
                                <div className="shadow-one"></div>
                                <div className="shadow-two"></div>
                            </div>
                        </StoryCardBackgroundStyle>
                        <StoryCardTextStyle>
                            <h1 className="storycard-title">영화와 시리즈를 무제한으로.</h1>
                            <h2 className="storycard-subtitle">다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h2>
                            <EmailFormStyle onSubmit={handleSubmit} method="GET" >
                                <h3 className="email-form-title">시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>
                                {renderIsLoggedIn()}
                                
                            </EmailFormStyle>
                        </StoryCardTextStyle>
                    </StoryCardStyle>
                    
                    <StoryCard />
            
                </div>
                <div style={{backgroundColor: "black"}}>
                    <Footer page="index"/>
                </div>
        </PageWrap>
    )
}

const StoryCardBackgroundStyle = styled.div`
    z-index: 0;
    position: absolute;
    top: -70px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;

    @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
        top: -100px;
    }
    .storycard-background {
        width: 100%;
        height: 100%;
        object-fit: cover;
        max-width: 100%;
        border: 0;
    }

    .shadow-one {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
    }
    .shadow-two {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0,0,0,.4);
    }
`

const StoryCardTextStyle = styled.div`
    position: relative;
    width: 100%;
    padding: 75px 0;
    max-width: 950px;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
    margin-bottom: 1rem;

    .storycard-title {
        font-size: 1.75rem;
        line-height: normal;
        text-align: center;
        margin: 0 auto;
        font-weight: 600;
        
        @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
            font-size: 4rem;
            max-width: 800px;
            margin: 0 auto;
        }

        @media only screen and (min-width: 950px) and (max-width: 1449px) {
            max-width: 650px;
            font-size: 3.125rem;
            margin: 0 auto;
        }

        @media only screen and (min-width: 550px) and (max-width: 949px) {
            font-size: 3.125rem;
            margin: 0 auto;
        }
        @media only screen and (min-width: 550px) and (max-width: 650px) {
            font-size: 3.125rem;
            max-width: 350px;
        }
    }

    .storycard-subtitle {
        font-weight: 400;
        font-size: 1.125rem;
        margin: 1rem auto;
        line-height: normal;
        text-align: center;

        @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
            font-size: 1.625rem;
            max-width: 800px;
            margin: 1rem auto;
        }

        @media only screen and (min-width: 950px) and (max-width: 1449px) {
            max-width: 650px;
            font-size: 1.625rem;
            margin: 1rem auto;
        }

        @media only screen and (min-width: 550px) and (max-width: 949px) {
            font-size: 1.625rem;
            margin: 1rem auto;
        }
    }
`

const EmailFormStyle = styled.form`
    display: flex;
    flex-direction: column;
    padding-top: 0.85rem;

    .email-form-title {
        margin: 0 auto; 
        font-weight: 400;
        font-size: 18px;
        padding: 0 5%;
        @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
            font-size: 1.2rem;
            max-width: none;
            padding-bottom: 20px;
        }

        @media only screen and (min-width: 550px) and (max-width: 949px) {
            max-width: 450px;
            font-size: 23px;
            margin: 0 auto;
            padding: 0 10%;
        }
    }
`

const EmailFormLockUpStyle = styled.div`
    display: flex;
    margin: 0 auto;

    @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
        flex-direction: row;
    }

    @media only screen and (max-width: 949px) {
        flex-direction: column;
    }

    .email-input-wrap {
        flex: 1 0 auto;
        position: relative;
    }

    .submit-button-wrap {
        flex: 1 0 auto;
    }

    .placelabel:focus{
        top:10%;
    }
`
const EmailPlacelabelStyle = styled.label`
    position: absolute;
    top: ${props => (props.focus || !props.hasValue ? "12px" : "50%")};
    font-size: ${props => (props.focus || !props.hasValue ? "13px" : "16px")};
    font-weight: ${props => (props.focus || !props.hasValue ? "800" : "200")};
    left: 10px;
    color: #8c8c8c;
    transform: translateY(-50%);
    transition: font .1s ease,top .1s ease,transform .1s ease,-webkit-transform .1s ease,-moz-transform .1s ease,-o-transform .1s ease
`


const EmailInputStyle = styled.input`
    padding: 10px 10px 0;
    height: 48px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;

    @media only screen and (min-width: 1450px) {
        min-width: 500px;
        height: 60px;
    }

    @media only screen and (min-width: 950px) and (max-width: 1449px) {
        min-width: 450px;
        height: 50px;
    }

    @media only screen and (min-width: 550px) and (max-width: 949px) {
        margin: 10px auto;
        min-width: 450px;
        height: 50px;
    }

    @media only screen and (max-width: 550px) {
        min-width: 300px;
        margin: 10px auto;
    }
`

const SubmitButtonStyle = styled.button`
    color: white;
    margin: 0;
    padding: 0 1em;
    display: inline-flex;
    height: 100%;
    min-width: 74px;
    background-color: #e50914;
    align-items: center;
    line-height: initial;
    width: auto;
    font-weight: 400;
    border: 0;

    .btn-txt {
        padding: 0.5rem 0;
        flex: 1 1 auto;
        text-align: center;
        min-width: 74px;
        @media only screen and (min-width: 1450px) {
            font-size: 1.875rem;
        }

        @media only screen and (min-width: 950px) and (max-width: 1449px) {
            font-size: 1.625rem;
        }
        @media only screen and (max-width: 550px) {
            font-size: 1rem;
            padding: 0.35rem 0;
        }
    }
    .right-arrow {
        height: 0.75em;
        width: 0.35em;
        flex: 0 1 auto;
        margin: 0 0 0 0.5em;
        position: relative;
    }
 `

export default IndexPage;