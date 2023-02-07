import styled from "styled-components"
import { ContentCardStyle, SliderWrap, MoreinfoStyle} from "../common/styled";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { ReactComponent as Play} from "../common/svg/Play.svg";
import { ReactComponent as Plus} from "../common/svg/Plus.svg";
import { ReactComponent as Check} from "../common/svg/Check.svg";
import { ReactComponent as Like} from "../common/svg/Like.svg";
import { ReactComponent as Arrowdown} from "../common/svg/Arrowdown.svg";
import { openModal, updateId } from "../../store/actions/modal";
import axios from "axios";
import { Link } from "react-router-dom";

const ContentList = (props) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.LoginReducer);

  const [Movies, setMovies] = useState([])
  const [Profile, setProfile] = useState(0)

  useEffect(() => {
    getMoviesData(props.genreIdx)
    setProfile(user.profile)
  }, [])

  const getMoviesData = async genreIdx => {
    try {
        const response = await axios.get("/videos/genre/" + genreIdx);
        setMovies(response.data.result);
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

  // const getBookmark = async (profile, video) => {
  //   try {
  //       const response = await axios.get("/bookmarks", {
  //         params: {
  //             profileIdx: profile,
  //             videoIdx: video
  //         }
  //     });
  //       return response.data.result
  //   }
  //   catch (error) {
  //       console.error(error);
  //   }
  // }
  
  const renderedContents = () => {
    return Movies && Movies.map(movie=>{
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
      // const isBookmarked = getBookmark(Profile, movie.videoIdx)
      // console.log(isBookmarked)
      return (
        <ContentCardStyle>
          <div className="moreinfo-container">
            <img className="card-img" src={movie.photoUrl}/>
            <MoreinfoStyle className="show-moreinfo">
              <div className="moreinfo-row1">
                <div className="moreinfo-icons">
                  <Link to="/watch">
                    <button className="moreinfo-button">
                      <div className="moreinfo-svg">
                        <Play />
                      </div>
                    </button>
                  </Link>
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

  var settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            dots: false,
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 4,
            infinite: true,
          }
        },
        {
          breakpoint: 1100,
          settings: {
            infinite: true,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 4
          }
        },
        {
          breakpoint: 800,
          settings: {
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3
          }
        }
      ]
    };

  return (
      <ContentListWrap>
          <h2>
              <div className="row-title">
                  {props.name}
              </div>
          </h2> 
          <SliderWrap>
              <Slider {...settings}>
                {renderedContents()}
              </Slider>
          </SliderWrap>
      
      
      </ContentListWrap>
  );
}

const ContentListWrap = styled.div`
    margin: 4vw 0;
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




export default ContentList;