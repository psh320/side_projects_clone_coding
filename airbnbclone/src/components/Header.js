import React, {useState, useEffect} from "react";
import {Link , useNavigate} from 'react-router-dom';
import { ReactComponent as Lang} from "../assets/lang.svg";
import { ReactComponent as ThreeLine} from "../assets/three_line.svg";
import { ReactComponent as UserShape} from "../assets/user_shape.svg";
import { ReactComponent as Logo} from "../assets/logo.svg";
import { ReactComponent as SearchIcon} from "../assets/search_icon.svg";
import "./Header.css";
import Calendar from './Calendar';
import {useSelector, useDispatch} from 'react-redux';
import moment from "moment";
import {Placeholder} from "../styles"
import { updateLocation } from "../actions";

const Header = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const checkdate = useSelector((state) => state.search)
    const [searchbar, SetSearchbar] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);
    const updateScroll = () => {
        setScrollPos(window.scrollY || document.documentElement.scrollTop);
        props.setScrollPos(window.scrollY || document.documentElement.scrollTop)
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    },[]);

    useEffect(()=> {
        SetSearchbar(false);
        props.onSelectSearch(false)
        setOpenCalendar(false);
    },[scrollPos])
    const onclick_toggle = () => {
        SetSearchbar(true);
        props.onSelectSearch(true)
    }

    const [openCalendar, setOpenCalendar] = useState(false);
    const toggle_calendar = () => {
        setOpenCalendar(true);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate.push("/s")
    }
    const onlineExp = () => {
        if (props.pageType == "main") {
            return (
                <div>
                    <Link to="#" className="no-underline text1">
                        <div className="option-text">
                            온라인 체험
                        </div>
                    </Link>
                </div>
            );
        } else {
            return null;
        }
    }
    const paddingType = () => {
        if (props.pageType == "main") {
            return "padding-main header";
        } else if(props.pageType == "rooms") {
            return "padding-rooms header";
        } else {
            return "header";
        }
    }

    return (
        <div className={paddingType()} >
            <div className="nav-bar" style={props.pageType == "rooms" ? {minWidth: "1000px"}: {minWidth: "1300px"}}>
                <div className="flex1">
                    <div className="space1">
                        <Link className="logo-image" to="/">
                            <div>
                                <Logo />
                            </div>
                        </Link>
                        
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
                            <Link to="/s">
                                <button className="option-button">
                                    <span className="option-text">숙소</span>
                                </button>
                            </Link>
                            <Link to="/s">
                                <button className="option-button">
                                    <span className="option-text">체험</span>
                                </button>
                            </Link>
                        {onlineExp()}
                    </div>
                </div>
                <div className="flex3">
                    <div className="login-box">
                        <div className="etc">
                            <Link to="#" className="host no-underline">
                                <div>호스트 되기</div>
                            </Link>
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
                <form id="search" onSubmit={handleSubmit}>
                    <div className="search-bar" id="searchbar">
                        <div className="searchbar1">
                            <div>
                                <label className="search-label">위치</label>
                                <input className="no_border" placeholder="어디로 여행가세요?" value={checkdate.location} onChange={(e) => dispatch(updateLocation(e.target.value))} />
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="searchbar2" onClick={toggle_calendar}>
                            <div role="button" className="inputs">
                                <label className="search-label">체크인</label>
                                <Placeholder isNull={checkdate.date.startDate == null}>
                                    {checkdate.date.startDate == null ? "날짜 입력" : moment(checkdate.date.startDate).format('MM월 DD일')}
                                </Placeholder>
                            </div>
                            <div className="calendar-box" style={openCalendar ? {display:"flex"}:{display:"none"}}>
                                <Calendar />
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="searchbar3" onClick={toggle_calendar}>
                            <div role="button" className="inputs">
                                <label className="search-label">체크아웃</label>
                                <Placeholder isNull={checkdate.date.endDate == null}>
                                    {checkdate.date.endDate == null ? "날짜 입력" : moment(checkdate.date.endDate).format('MM월 DD일')}
                                </Placeholder>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="searchbar4">
                            <div role="button" className="inputs">
                                <label className="search-label">인원</label>
                                <div className="placeholder font">게스트 추가</div>
                            </div>

                            <div className="submit">
                                <button className="search-button1" form="search">
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