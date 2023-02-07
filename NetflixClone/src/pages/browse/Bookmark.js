import { PageWrap } from "../../components/common/styled";
import Header from "../../components/common/header";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/common/footer";
import { ReactComponent as Play} from "../../components/common/svg/Play.svg";
import { ReactComponent as Plus} from "../../components/common/svg/Plus.svg";
import { ReactComponent as Like} from "../../components/common/svg/Like.svg";
import { ReactComponent as Arrowdown} from "../../components/common/svg/Arrowdown.svg";
import { openModal, updateId } from "../../store/actions/modal";
import { useDispatch } from "react-redux";

const Bookmark = () => {
    const {user} = useSelector((state) => state.LoginReducer);
    const nav = useNavigate();
    const dispatch = useDispatch();

    const [bookmarkList, setBookmarkList] = useState([]);
    const [Profile, setProfile] = useState(0)
  
    useEffect(() => {
        setProfile(user.profile)
        if(user.isSignedIn === null) {
            nav("/")
        }
        if(user.profile === null) {
            nav("/profile")
        }
        getBookmarkList(user.profile);
    },[])
    console.log(bookmarkList)
    const getBookmarkList = async (profile) => {
      console.log(profile)
        try {
            const response = await axios.get("/bookmarks/" + profile);
            console.log(response)
            setBookmarkList(response.data.result);
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

    const handleOpenModal = (e) => {
        dispatch(updateId(e));
        dispatch(openModal(true));
      }
    const handleClickBookmark = (profileIdx, videoIdx) => {
        console.log(profileIdx, videoIdx)
        postBookmark(profileIdx, videoIdx);
    }
    const renderedContentList = () => {
        return bookmarkList && bookmarkList.map(movie=>{
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
                <ContentCardStyle>
                    <div className="moreinfo-container">
                        <img className="card-img" src={movie.photoUrl}/>
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
                </ContentCardStyle>
            );
        })
    }
    
    return (
        <BrowsePageWrap>
            <Header page="browse"/>
            <MainViewStyle>
                <div className="mainview-margin">
                    <div className="sub-header">내가 찜한 콘텐츠</div>
                    <div className="card-content-grid">
                        {renderedContentList()}
                    </div>
                </div>
            </MainViewStyle>
            <Footer />
        </BrowsePageWrap>
    );
}
const BrowsePageWrap = styled.div`
    background-color: #141414;
    overflow: hidden;
    width: 100%;
`
const MainViewStyle = styled.div`
    position: relative;
    min-height: 1000px;
    z-index: 0;

    .mainview-margin {
        z-index: 0;
        overflow: hidden;
    }
    .sub-header {
        font-size:calc(13px + 1.5vw);
        height: 68px;
        padding: 20px 60px 50px 60px;
        color: #fff;
        font-weight: 400;
        display: inline-block;
        margin-right: 20px;
        line-height: 36px;
        padding-bottom: 50px;
    }
    .card-content-grid {
        overflow: visible;
        padding: 0 60px;
        padding-bottom: 100px;
        display: grid;
        grid-template-columns: repeat(3,minmax(0, 1fr));
        grid-column-gap: 8px;
        grid-row-gap: 60px;
        z-index: 5;
        @media screen and (min-width: 800px) {
            grid-template-columns: repeat(4,minmax(0, 1fr));
        }
        @media screen and (min-width: 1400px) {
            grid-template-columns: repeat(6,minmax(0, 1fr));
        }
        @media screen and (min-width: 1100px) {
            grid-template-columns: repeat(5,minmax(0, 1fr));
        }
    }
`
const ContentCardStyle = styled.div`

    position: relative;
    display: flex !important;
    flex-direction: column;
    border-radius: 8px;
    transition: transform 250ms ease-out, border-radius 200ms ease-out;
    overflow: visible;
    z-index: 1;
    height: 100%;
    background-color: #141414;
    cursor: pointer;
    

    &:hover {
      transition-delay:0.5s;
      transform: scale(1.5) translate(0px, -30px);
      z-index: 20;
    }

    &:hover .show-moreinfo {
      animation: 0.5s fadeIn;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
      z-index: 20;
    }
    @keyframes fadeIn {
      from {
        visibility: hidden;
      }
      to {
        visibility: visible;
      }
    }
    .moreinfo-container {
      margin: 0;
      padding: 0;
      width: inherit;
    }
    &:hover .moreinfo-container {
      z-index: 20;
    }

    .card-img {
      width: 100%;
      border-radius: 5px;
      padding-right: 5px;
    }

`

const MoreinfoStyle = styled.div`
    visibility: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #181818;
    position: absolute;
    z-index: inherit;
    bottom:-90px;

    

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
    .dot:last-of-type {
      display:none;
    }
`

export default Bookmark;