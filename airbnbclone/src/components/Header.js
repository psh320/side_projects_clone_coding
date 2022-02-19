import React, {useState, useEffect} from "react";
import Link from 'react-router-dom';
import { ReactComponent as Lang} from "../assets/lang.svg";
import { ReactComponent as ThreeLine} from "../assets/three_line.svg";
import { ReactComponent as UserShape} from "../assets/user_shape.svg";
import { ReactComponent as Logo} from "../assets/logo.svg";
import { ReactComponent as SearchIcon} from "../assets/search_icon.svg";
import "./Header.css";

const Header = (props) => {
    const [searchbar, SetSearchbar] = useState(false);
    
    const [scrollPos, setScrollPos] = useState(0);
    const updateScroll = () => {
        setScrollPos(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    },[]);

    useEffect(()=> {
        SetSearchbar(false);
    },[scrollPos])
    const onclick_toggle = () => {
        SetSearchbar(true);
    }
    console.log(searchbar, scrollPos)
    const onlineExp = () => {
        if (props.isMain) {
            return (
                <div>
                    <a href="#" className="no-underline text1">
                        <div className="option-text">
                            온라인 체험
                        </div>
                    </a>
                </div>
            );
        } else {
            return null;
        }
    }

    return (
        <div className={props.isMain ? "padding-main header" : "header"} >
            <div className="nav-bar">
                <div className="flex1">
                    <div className="space1">
                        <a className="logo-image" href="#">
                            <div>
                                <Logo />
                            </div>
                        </a>
                        
                    </div>
                </div>
                <div className="flex2">
                    <div className="search-button-box" style={searchbar ? {display:"none"}:{display:"flex"}}>
                        <button className="search-button" onClick={onclick_toggle}>
                            <div className="search-text">
                                검색을 시작하세요
                            </div>

                            <div className="search-icon">
                                <SearchIcon />
                            </div>
                        </button>
                    </div>
                    <div className="option-box" style={searchbar ? {display:"flex"}:{display:"none"}}>
                            <button className="option-button">
                                <span className="option-text">숙소</span>
                            </button>
                            <button className="option-button">
                                <span className="option-text">체험</span>
                            </button>
                        {onlineExp()}
                    </div>
                </div>
                <div className="flex3">
                    <div className="login-box">
                        <div className="etc">
                            <a href="#" className="host no-underline">
                                <div>호스트 되기</div>
                            </a>
                            <button className="lang-button">
                                <div><Lang /></div>
                            </button>
                            
                        </div>
                        <div>
                            <div>
                                <button type="button" className="login">
                                    <div>
                                        <ThreeLine />
                                    </div>
                                    <div className="_retf">
                                        <UserShape width="30" height="30" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-form" style={searchbar ? {display:"block"}:{display:"none"}}>
                <form id="search">
                    <div className="search-bar" id="searchbar">
                        <div className="searchbar1">
                            <div>
                                <label className="search-label">위치</label>
                                <input className="no_border" placeholder="어디로 여행가세요?"/>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="searchbar2">
                            <label className="search-label">체크인</label>
                            <div>
                                <input placeholder="날짜 입력"/>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="searchbar3">
                            <label className="search-label">체크아웃</label>
                            <div>
                                <input placeholder="날짜 입력"/>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="searchbar4">
                            <div role="button" className="inputs">
                                <label className="search-label">인원</label>
                                <div className="placeholder font">게스트 추가</div>
                            </div>

                            <div className="submit">
                                <button className="search-button1">
                                    <div className="search-icon1">
                                        <SearchIcon />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
        
    );
}

export default Header;