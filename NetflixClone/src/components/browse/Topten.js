import styled from "styled-components"
import React, { Component, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import {ReactComponent as One} from "../common/svg/rank/One.svg"
import {ReactComponent as Two} from "../common/svg/rank/Two.svg"
import {ReactComponent as Three} from "../common/svg/rank/Three.svg"
import {ReactComponent as Four} from "../common/svg/rank/Four.svg"
import {ReactComponent as Five} from "../common/svg/rank/Five.svg"
import {ReactComponent as Six} from "../common/svg/rank/Six.svg"
import {ReactComponent as Seven} from "../common/svg/rank/Seven.svg"
import {ReactComponent as Eight} from "../common/svg/rank/Eight.svg"
import {ReactComponent as Nine} from "../common/svg/rank/Nine.svg"
import {ReactComponent as Ten} from "../common/svg/rank/Ten.svg"
import { ReactComponent as Play} from "../common/svg/Play.svg";
import { ReactComponent as Plus} from "../common/svg/Plus.svg";
import { ReactComponent as Like} from "../common/svg/Like.svg";
import { ReactComponent as Arrowdown} from "../common/svg/Arrowdown.svg";
import { openModal, updateId } from "../../store/actions/modal";
import axios from "axios";
const Topten = () => {
    const {user} = useSelector((state) => state.LoginReducer);
    const dispatch = useDispatch();

    const [ToptenMovies, setToptenMovies] = useState([])
    const [Profile, setProfile] = useState(0);
    useEffect(() => {
        getToptenData()
        setProfile(user.profile)
    }, [])

    const getToptenData = async () => {
        try {
            const response = await axios.get("/videos/top");
            setToptenMovies(response.data.result);
        }
        catch (error) {
            console.error(error);
        }
    }
    const postBookmark = async (profileIdx, videoIdx)  => {
        try {
            const response = await axios.post("/bookmarks", {
              profileIdx: profileIdx,
              videoIdx: videoIdx
          })
          console.log(response)
        }
        catch (error) {
            console.error(error);
        }
    }
    const mapIndexToSvg = (index) => {
        switch(index) {
            case 0:
                return <One className="rank"/>
            case 1:
                return <Two className="rank"/>
            case 2:
                return <Three className="rank"/>
            case 3:
                return <Four className="rank"/>
            case 4:
                return <Five className="rank"/>
            case 5:
                return <Six className="rank"/>
            case 6:
                return <Seven className="rank"/>
            case 7:
                return <Eight className="rank"/>
            case 8:
                return <Nine className="rank"/>  
            case 9:
                return <Ten className="rank"/>
            default:
                break;
        }
    }
    const handleOpenModal = (e) => {
        dispatch(updateId(e));
        dispatch(openModal(true));
    }
    const handleClickBookmark = (profileIdx, videoIdx) => {
        console.log(profileIdx, videoIdx)
        postBookmark(profileIdx, videoIdx);
    }
    const renderedToptenContents = () => {
        return ToptenMovies && ToptenMovies.map((movie, index) => {
            let season
            if(movie.season === 0) {
                season = <span className="duration">{movie.runningTime}</span>
            } else {
                season = <span className="duration">시즌 {movie.season}개</span>
            }
            let characters
            characters = (movie.character).map(text=> {
                return (
                <>
                <div className="genre">{text}</div>
                <div className="dot"></div>
                </>
                );
            })
            return (
                <div className="card">
                        <div className="moreinfo-container">
                        <div className="show-rank">
                            {mapIndexToSvg(index)}
                            <img className="card-img" src={movie.photoUrl}/>
                        </div>
                        <div className="show-img">
                            <img className="card-img" src="https://occ-0-3996-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeqUWWnT33KQE_XXVK29T3_LQQqIjr4MMANpD9VdTEgqw2CXE2cC879dstK0p6FpVDydZQkHjwZNNRfcO32_OhtKC2Tx5JYJiv8KcC6_WIw9ZwtxLTBUeKmguCS8q8UlFIPxWiAgzEmOqtijWRKUtBoqoH0mRlcIn-L3q4Gcic5HW2uQnLyK466OI5w3.webp?r=68d"/>
                        </div>
                          <MoreinfoStyle className="show-moreinfo">
                            <div className="moreinfo-row1">
                              <div className="moreinfo-icons">
                                <button className="moreinfo-button">
                                  <div className="moreinfo-svg">
                                    <Play />
                                  </div>
                                </button>
                                <button className="moreinfo-button" onClick={() => handleClickBookmark(Profile,movie.videoIdx)}>
                                  <div className="moreinfo-svg">
                                    <Plus />
                                  </div>
                                </button>
                                <button className="moreinfo-button">
                                  <div className="moreinfo-svg">
                                    <Like />
                                  </div>
                                </button>
                              </div>

                              <button className="moreinfo-button" onClick={() => handleOpenModal(movie.videoIdx)}>
                                  <div className="moreinfo-svg">
                                    <Arrowdown />
                                  </div>
                                </button>
                              
                            </div>
                            <div className="moreinfo-row2">
                                <div className="videodata-first">
                                <span className="meta-score">99% 일치</span>
                                </div>
                                <div className="videodata-second">
                                <span className="maturity-rate">{movie.ageGrade}+</span>
                                {season}
                                <span className="resolution">{movie.resolution}</span>
                                </div>
                            </div>
                            <div className="moreinfo-row3">
                                {characters}
                            </div>
                          </MoreinfoStyle>
                        </div>
                    </div>
            );
        })
    }
      console.log(ToptenMovies)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 2
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      };
    return (
        <ContentListWrap>
            <h2>
                <div className="row-title">
                    오늘 한국의 TOP 10 콘텐츠
                </div>
            </h2> 
            <SliderWrap>
                <Slider {...settings}>
                    {renderedToptenContents()}
                </Slider>
            </SliderWrap>
        
        </ContentListWrap>
    );
}

const ContentListWrap = styled.div`
    margin: 3vw 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    outline: 0;
    transition: transform .54s cubic-bezier(.5,0,.1,1) 0s,-webkit-transform .54s cubic-bezier(.5,0,.1,1) 0s,-moz-transform .54s cubic-bezier(.5,0,.1,1) 0s,-o-transform .54s cubic-bezier(.5,0,.1,1) 0s;

    .row-title {
        position: relative;
        font-size: 1.4vw;
        color: #e5e5e5;
        font-weight: 700;
        margin: 0 4% 0.5em 4%;
        text-decoration: none;
        display: inline-block;
        min-width: 6em;
        z-index: 1;
    }
`
const SliderWrap = styled.div`
    z-index: 2;
    padding: 0 60px;
    position: relative;
    margin: 0;
    padding: 0 4%;
    touch-action: pan-y;
    
    .card {
        /* display: block !important;
        max-height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
        flex-wrap: wrap; */

        position: relative;
        display: flex !important;
        flex-direction: column;
        border-radius: 8px;
        transition: transform 250ms ease-out, border-radius 200ms ease-out;
        overflow: visible;
        z-index: 5;
        height: 100%;
        background-color: #141414;
        height: 160px;
    }
    .card-img {
        height: 100%;
        object-fit: cover;
        position: relative;
        top: 0;
        bottom: 0;
        right: 0;
        left: 50%;
        width: 50%;
    }
    .card:hover {
      transform: scale(1.5);
      z-index: 20;
    }
    .show-rank {
        display: block;
        height: 100%;
    }
    .show-img {
        display: none;
    }
    .card:hover .show-rank {
        display: none;
    }
    .card:hover .show-img {
        display: block;
    }
    .card:hover .card-img {
        height: 100%;
        object-fit: cover;
        position: relative;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
    }
    .card:hover .show-moreinfo {
      visibility: visible;
      z-index: 20;
    }
    .card:hover .moreinfo-container {
      bottom: 50px;
      z-index: 20;
    }

    .slick-slide > div {
      margin-right: 6px;
    }
    .slick-list {
        overflow: visible;
        margin-right: -6px;
    }
    .rank {
        position: absolute;
        top: 0;
        bottom: 0;
        right: auto;
        left: 0;
        width: 50%;
        height: 100%;
        flex-grow: 1;
        transform: scale(1);
        border: solid 1px transparent;
        margin: 0 -1px;
    }

    .moreinfo-container {
      position: absolute;
      height: 100%;
      width: inherit;
    }

    .slick-arrow {
      width: 5%;
      height: 100%;
      z-index:30;
    }
    .slick-prev {
      left: -5%;
    }
    .slick-prev:hover {
      background-color: rgba(0,0,0,.6);
    }
    .slick-prev:hover:before {
        content: '❰' !important;
        font-size: 20px;
        line-height: 1;
        opacity: .75;
        color: #fff;
    }
    .slick-prev:before {
      content: '';
    }
    .slick-next:hover {
      background-color: rgba(0,0,0,.6);
    }
    .slick-next:hover:before {
        content: '❱' !important;
        font-size: 20px;
        line-height: 1;
        opacity: .75;
        color: #fff;
    }
    .slick-next:before {
      content: '';
    }
    
    .slick-next {
      right: -5%;
    }
    /* .slick-dots {
      position: absolute;
      top: -30px;  // play with the number of pixels to position it as you want
      bottom: 0;
      right:0;
      left: 48%;
      height: 30px;
      margin: 0;
    }
    .slick-dots li.slick-active button:before {
      opacity: .75;
      color: #ffffff;
    }
    .slick-dots li button:before {
      content: '•';
      text-align: center;
      opacity: .75;
      color: #6D6968;
    } */
    div[data-index="-1"] {
    visibility: hidden;
    }

`

const MoreinfoStyle = styled.div`
    visibility: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #181818;
    position: relative;
    z-index: inherit;

    .moreinfo-row1 {
      display: flex;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      margin-top: 0.5rem;
      justify-content: space-between;
      align-items: center;
      z-index: 30;
    }
    .moreinfo-icons {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      min-height: 2em;
    }
    .moreinfo-icons>* {
      margin:0.25em;
    }
    .moreinfo-button {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      opacity: 1;
      padding: 0.1rem;
      position: relative;
      user-select: none;
      will-change: background-color, color;
      word-break: break-word;
      white-space: nowrap;

      min-width: 28px;
      min-height: 28px;
      max-width: 42px;
      max-height: 42px;

      border-radius: 50%;
      border-width: 1px;
      background-color: rgba(42,42,42,.6);
      border-color: rgba(255,255,255,.5);
      border: 1px solid rgba(255, 255, 255, 0.7);
      color: white;

    }
    .moreinfo-svg {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      height: 0.8rem;
      width: 0.8rem;
    }
    .moreinfo-row2 {
      display: flex;
      box-sizing: border-box;
      color: #fff;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      margin: 0.5rem;
    }
    .videodata-first {
      display: flex;
      align-items: center;
      max-width: 100%;
      margin: 0.25em 0.5em 0.25em 0;
    }
    .meta-score {
      max-width: 300px;
      opacity: 1;
      transition: max-width 550ms cubic-bezier(.86,0,.07,1) 1.65s,opacity 150ms linear 2.2s;
      white-space: unset;
      color: #46d369;
      font-weight: 700;
      display: inline-block;
      font-size: 10px;
    }
    .videodata-second {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    .maturity-rate {
      font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
      text-transform: uppercase;
      border: solid 1px rgba(255,255,255,.4);
      padding: 0 0.4em;
      unicode-bidi: normal;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 10px;
      margin-right: 0.5em;
    }
    .duration {
      margin-right: 0.5em;
      font-size: 10px;
    }
    .resolution {    
      margin-right: 0.5em;
      border: 1px solid rgba(255,255,255,.4);
      color: rgba(255,255,255,.9);
      padding: 0 0.5em;
      font-size: .5em;
      border-radius: 3px;
      white-space: nowrap;
    };

    .moreinfo-row3 {
      margin:0 0.5rem 1.5rem 0.5rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
      font-size: 11px;
    }
    .dot {
      margin-right: 0.5em;
      margin-left: 0.5em;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: white;
    }
    .dot:last-child {
        display: none;
    }
`
export default Topten;