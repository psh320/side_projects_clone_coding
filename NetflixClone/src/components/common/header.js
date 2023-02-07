import styled from "styled-components"
import { TextMiddle } from "./styled";
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from "./svg/Logo.svg";
import { ReactComponent as Search} from "./svg/Search.svg";
import { ReactComponent as Edit} from "./svg/Edit.svg";
import { ReactComponent as Help} from "./svg/Help.svg";
import { ReactComponent as Account} from "./svg/Account.svg";
import { ReactComponent as Notification} from "./svg/Notification.svg";
import { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signOut } from "../../store/actions/login";
import { updateProfile } from "../../store/actions/login";

const Header = ({ page }) => {
    const {user} = useSelector(state => state.LoginReducer);
    const dispatch = useDispatch();
    const nav = useNavigate();
    
    const [scrollPos, setScrollPos] = useState(0);
    const [openProfileMenu, setOpenProfileMenu] = useState(false);
    const [openSmallMenu, setOpenSmallMenu] = useState(false);
    const [lang, setLang] = useState("/kr/")
    const [profileList, setProfileList] = useState([]);
    const [avatarUrl, setAvatarUrl] = useState("");

    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
        getProfileList(user.id);
        getProfile(user.profile)
    },[]);
    
    const updateScroll = () => {
        setScrollPos(window.scrollY || document.documentElement.scrollTop);
    }
    const handleMouseOnProfile = () => {
        setOpenProfileMenu(true)
    }
    const handleMouseLeaveProfile = () => {
        setOpenProfileMenu(false)
    }
    const handleLangChange = (e) => {
        setLang(e.target.lang)
    }
    const handleSignInOut = () => {
        if (user.isSignedIn) {
            postLogOut(user.token)
            dispatch(signOut(null))
            nav("/");
        } else {
            nav("/login");
        }
    }
    const handleProfileClick = (e) => {
        dispatch(updateProfile(e));
        getProfile(user.profile)
        nav('/')
    }
    const getProfile = async (profileIdx) => {
        try {
            const response = await axios.get("/profiles/"+profileIdx)
            setAvatarUrl(response.data.result.profilePhotoUrl)
        }
        catch (error) {
            console.error(error);
        }
    }
    
    const getProfileList = async accountIdx => {
        try {
            const response = await axios.get("/profiles/by-account-idx/" + accountIdx);
            setProfileList(response.data.result);
        }
        catch (error) {
            console.error(error);
        }
    }
    console.log(profileList)
    const postLogOut = async (token) => {
        try {
            const response = await axios.post("/accounts/update/email",{}, {
                headers: {
                    "X-ACCESS-TOKEN" : token
                }
            });
            console.log(response);
            switch(response.data.code) {
                case 1000:
                    nav("/signup");
                    break;
                case 2016:
                    alert("이메일 오류");
                    break;
                case 2017:
                    alert("중복 이메일");
                    break;
            }
            
        }
        catch (error) {
            console.error(error);
        }
    }
    
    const renderedProfileList = (profileList) => {
        return profileList && profileList.map((profile) => {
            if(profile.profileIdx != user.profile && profile.status === 1) {
                return (
                    <li className="profile-wrap" onClick={() => handleProfileClick(profile.profileIdx)}>
                        <span className="profile-link">
                            <img className="profile-icon" src={profile.profilePhotoUrl} />
                            <div className="profile-name">{profile.name}</div>
                        </span>
                    </li>
                );
            }
        });
    }
    
    const registerPage = () => {
        return (
            <>
                <LoginButtonStyle className={page} onClick={handleSignInOut}>
                    {user.isSignedIn ? "로그아웃" : "로그인"}
                </LoginButtonStyle>
            </>
        )
    }
    const firstPageMenu = () => {
        return (
            <>
                <LangSelectWrapStyle>
                    <LangSelectStyle placeholder="land-switcher" value="/kr/" onChange={handleLangChange}>
                        <option lang="ko" value="/kr/" >한국어</option>
                        <option>English</option>
                    </LangSelectStyle>
                </LangSelectWrapStyle>
                <Link to='/login'>
                    <LoginButtonStyle className={page} onClick={handleSignInOut}>
                        {user.isSignedIn ? "로그아웃" : "로그인"}
                    </LoginButtonStyle>
                </Link>
            </> 
        );
    }
    const HeaderPage = () => {
        return (
            <HeaderWrapStyle page={page}>
            <HeaderBoxStyle page={page}>
                <LogoWrapStyle>
                    <Link to='/'>
                        <Logo />      
                    </Link>
                </LogoWrapStyle>
                <RightMenuWrapStyle>
                    {page === 'index' &&
                        firstPageMenu()
                    }

                    {page === 'signup' &&
                        registerPage()
                    }

                    {page === 'home' &&
                        <Link to='/'>
                            
                        </Link>
                    }
                </RightMenuWrapStyle>
            </HeaderBoxStyle>
        </HeaderWrapStyle>
        )
    }
    const HeaderBrowse = () => {
        return (
            <HeaderBrowseWrap>
                <div className={scrollPos > 0 ? "pinning-header-container fixed" : "pinning-header-container not-fixed"}>
                    <div className="main-header">
                        <Link to='/browse' className="logo">
                            <Logo />      
                        </Link>
                        <ul className="tabbed-primary-navigation">
                            <li className="navigation-menu" onMouseLeave={() => {setOpenSmallMenu(false)}} onMouseEnter={()=>{setOpenSmallMenu(true)}}>
                                <div className="menu-trigger">메뉴</div>
                                <SmallMenuWrap open={openSmallMenu}>
                                    <div className="navigation-tab1"><Link to="/">홈</Link></div>
                                    <div className="navigation-tab1"><Link to="/">시리즈</Link></div>
                                    <div className="navigation-tab1"><Link to="/">영화</Link></div>
                                    <div className="navigation-tab1"><Link to="/browse/latest">NEW! 요즘 대세 콘텐츠</Link></div>
                                    <div className="navigation-tab1"><Link to="/browse/bookmark">내가 찜한 콘텐츠</Link></div>
                                </SmallMenuWrap>
                            </li>
                            <li className="navigation-tab"><Link to="/">홈</Link></li>
                            <li className="navigation-tab"><Link to="/">시리즈</Link></li>
                            <li className="navigation-tab"><Link to="/">영화</Link></li>
                            <li className="navigation-tab"><Link to="/browse/latest">NEW! 요즘 대세 콘텐츠</Link></li>
                            <li className="navigation-tab"><Link to="/browse/bookmark">내가 찜한 콘텐츠</Link></li>
                        </ul>
                        <div className="secondary-navigation">
                            <div className="nav-element">
                                <div className="search-box">
                                    <button className="searchTab">
                                        <span className="icon-search"><Search /></span>
                                    </button>
                                </div>
                            </div>
                            <div className="nav-element show-kids">
                                <Link to="/">
                                    키즈
                                </Link>
                            </div>
                            <div className="nav-element">
                                <span className="notification">
                                    <button className="notification-menu">
                                        <span className="icon-button-notification">
                                            <Notification />
                                        </span>
                                    </button>
                                </span>
                            </div>
                            <div className="nav-element">
                                <div className="account-menu-item" onMouseEnter={handleMouseOnProfile} onMouseLeave={handleMouseLeaveProfile}>
                                    <div className="account-dropdown-button">
                                        <div>
                                            <span className="profile-link"><img className="profile-icon" src={avatarUrl} /></span>  
                                        </div>
                                        <span className={openProfileMenu ? "caret open" : "caret"}></span>
                                    </div>
                                    <ProfileMenuWrap open={openProfileMenu}>
                                        <ul className="other-profile-list">
                                            {renderedProfileList(profileList)}
                                            <Link to="/profile/manage">
                                                <li className="profile-wrap">
                                                    <span className="profile-link">
                                                        <Edit className="profile-icon" />
                                                        <div className="profile-name">프로필 관리</div>
                                                    </span>
                                                </li>
                                            </Link>
                                        </ul>
                                        <ul className="account-setting">
                                            <li className="profile-wrap">
                                                <span className="profile-link">
                                                    <Account className="profile-icon" />
                                                    <div className="profile-name">계정</div>
                                                </span>
                                            </li>
                                            <li className="profile-wrap">
                                                <span className="profile-link">
                                                    <Help className="profile-icon" />
                                                    <div className="profile-name">고객 센터</div>
                                                </span>
                                            </li>
                                        </ul>
                                        <ul className="logout">
                                            <li className="profile-wrap" onClick={handleSignInOut}>
                                                <span className="profile-link">
                                                    <div className="logout-text">넷플릭스에서 로그아웃</div>
                                                </span>
                                            </li>
                                        </ul>
                                    </ProfileMenuWrap>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </HeaderBrowseWrap>
        )
    }
    return (
        <>
        {page === 'browse' &&
        HeaderBrowse()
        }
        {page != 'browse' &&
        HeaderPage()
        }
        </>
        
    )
}

//Header Browse
const HeaderBrowseWrap = styled.div`
    height:70px;
    
    .pinning-header-container {
        transition: background-color .4s;
        left:0;
        right:0;
        z-index:1;
    }
    .fixed {
        top:0px;
        position: fixed;
        background: rgb(20, 20, 20);;
    }
    .not-fixed {
        top:0px;
        position: relative;
        background: transparent;
    }
    .main-header {
        background-image: linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0));
        height: 45px;
        z-index: 2;
        padding: 0 4%;
        position: relative;
        display: flex;
        align-items: center;
        font-size: 0.7rem;
        
        @media screen and (min-width: 950px) {
            height:70px;
        }
        @media screen and (min-width: 1500px) {
            padding: 0 60px;
        }
        @media screen and (min-width: 1200px) {
            font-size: 14px;
        }
    }
    .logo {
        text-decoration: none;
        height: 3.5vh;
        fill: #e50914;
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        margin-right: 5px;
        @media screen and (min-width: 950px) {
            height:28px;
        }
        @media screen and (min-width: 1150px) {
            margin-right: 25px;
        } 
    }
    .svg-icon {
        height: 100%;
        width: 100%;
    }
    .tabbed-primary-navigation {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        color: #fff;
    }
    .navigation-menu {
        position: relative;
        display: none;
        list-style-type: none;
        margin-left: 18px;
        @media screen and (max-width: 885px) {
            display: flex;
            align-items: center;
        }
    }
    .navigation-menu::after {
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 5px 0 5px;
        border-color: #fff transparent transparent transparent;
        margin-left: 5px;
    }
    .navigation-tab {
        list-style-type: none;
        margin-left: 18px;
        @media screen and (max-width: 885px) {
            display: none;
        }
    }
    .menu-trigger {
        cursor: pointer;
    }
    .secondary-navigation {
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: flex-end;
        position: absolute;
        right: 4%;
        top: 0;
        height: 100%;
    }
    .nav-element:not(:last-child) {
        margin-right: 15px;
    }
    .search-box {
        display: inline-block;
        vertical-align: middle;
    }
    .searchTab {
        display: inline-block;
        cursor: pointer;
        border: none;
        background: 0 0;
    }
    .icon-search {
        font-size: 1.3em;
        margin-right: 0;
        vertical-align: middle;
        
    }
    .search-icon {
        font-weight: 700;
        line-height: 1;
        color: #fff;
        fill: #fff;
        text-shadow: 0 1px 1px rgb(0 0 0 / 30%);
    }
    .show-kids a {
        color: #fff;
        font-size:14px;
    }
    .notification-menu {
        background-color: transparent;
        border: none;
        font-size: 1.5em;
        line-height: 1;
        margin-top: 0.2em;
        padding: 2px 6px 3px;
        position: relative;
    }
    .account-dropdown-button {
        width: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    .profile-link {
        position: relative;
        display: flex;
        align-items: center;
    }
    .profile-icon {
        vertical-align: middle;
        height: 32px;
        width: 32px;
        border-radius: 4px;
    }
    .caret {
        margin-left: 10px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 5px 5px 0 5px;
        border-color: #fff transparent transparent transparent;
        transition: transform 367ms cubic-bezier(.21,0,.07,1),-webkit-transform 367ms cubic-bezier(.21,0,.07,1),-moz-transform 367ms cubic-bezier(.21,0,.07,1),-o-transform 367ms cubic-bezier(.21,0,.07,1);
    }
    .open {
        transform: rotate(180deg)
    }
`
const SmallMenuWrap = styled.div`
    display: ${(props) => props.open ? "flex" : "none"};
    flex-direction: column;
    position: absolute;
    right: 50px;
    left: 20px;
    top:10px;
    width: 181px;
    margin-left:0;
    background-color: rgba(0,0,0,.9);
    color: #fff;
    font-size: 14px;
    border: solid 1px rgba(255,255,255,.15);
    cursor: default;
    .navigation-tab1 {
        cursor: pointer;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;
    }
    ul:not(:last-child){
        border-bottom: solid 1px rgba(255,255,255,.15);
    }
    a:hover {
        text-decoration: underline;
    }
`

const ProfileMenuWrap = styled.div`
    display: ${(props) => props.open ? "flex" : "none"};
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 52px;
    width: 181px;
    margin-left:0;

    background-color: rgba(0,0,0,.9);
    color: #fff;
    font-size: 14px;
    border: solid 1px rgba(255,255,255,.15);
    cursor: default;
    
    ul:not(:last-child){
        border-bottom: solid 1px rgba(255,255,255,.15);
    }
    li {
        cursor: pointer;
    }
    li:hover {
        text-decoration: underline;
    }
    .other-profile-list {
        display: flex;
        flex-direction: column;
        padding: 0.5em 1em;
        
    }
    .profile-wrap {
        padding: 0.5em 0;
    }
    .profile-name {
        margin-left: 1em;
    }
    .account-setting {
        display: flex;
        flex-direction: column;
        padding: 0.5em 1em;
    }
    .logout {
        display: flex;
        padding: 0.5em 1em;
        align-items: center;
        justify-content: center;
    }
`


//Header Page
const HeaderWrapStyle = styled.div`
    padding-bottom: ${props => props.page === "signup" ? "20px" : "0px"};
    border-bottom: ${props => props.page === "signup" ? "solid 1px #e6e6e6" : "none"};
    padding-top: 20px;
    position: relative;
    width: 100%;
    margin: 0 auto;
    z-index: 10;
    transition: background-color .5s;
    transition-property: background-color;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    transition-delay: 0s;
    background-color: transparent;
`;

const HeaderBoxStyle = styled.div`
    position: relative;
    
    display:flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;

    padding-top: 0.5rem;
    margin: 0 3.5rem;

    height: auto;
`;

const LogoWrapStyle = styled.span`
    margin-right: auto;
    line-height: normal;
    width: 4.65rem;
    height: 1.5rem;
    a {
        fill: #e50914;
    }
    @media only screen and (min-width: 1450px) {
        width: 10.4375rem;
        height: 2.8125rem;
    }

    @media only screen and (min-width: 950px) and (max-width: 1449px) {
        width: 8.375rem;
        height: 2.25rem;
    }
    @media only screen and (min-width: 550px) and (max-width: 949px) {
        width: 6.75rem;
        height: 2rem;
    }
`;
const RightMenuWrapStyle = styled.div`
    display:flex;
    height:100%;
    .signup {
        color: #333333;
        background-color: transparent;
        font-size: 19px;
        font-weight: 700;
    }
`

const LoginButtonStyle = styled.div`
    float: none;
    margin-top: 0;
    white-space: nowrap;

    padding:9px 17px;
    border-radius:3px;

    background-color: #e50914;

    font-size: 1rem;
    font-weight: 400;
    color: white;

    cursor: pointer;
    
`;

const LangSelectWrapStyle = styled.div`
    margin-right: 2rem;
    display: inline-block;
    margin-left: 0.75rem;
`
const LangSelectStyle = styled.select`
    padding: 0.5rem 1.375rem;
    line-height: 1.3em;
    border: 1px solid #aaa;
    color: white;
    font-size: 0.875rem;
    background-color: transparent;
`

export default Header