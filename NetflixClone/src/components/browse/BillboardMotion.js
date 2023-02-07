import styled from "styled-components";
import { ReactComponent as Replay} from "../common/svg/Replay.svg";
import { ReactComponent as Rating978} from "../common/svg/Rating978.svg";
import ReactPlayer from 'react-player'
import { useState } from "react";

const BillboardMotion = () => {
    const [hideVideo, setHideVideo] = useState(false);
    const onVideoEnd = () => {
        setHideVideo(true)
    }
    return (
        <BillboardMotionWrap>
            <div className="motion-background-container">
                <VideoPlayerContainer hideVideo={hideVideo}>
                    <div className={hideVideo ? "video-container hidden": "video-container"}>
                        <ReactPlayer 
                            url="https://www.youtube.com/watch?v=JYUB1ECx5fw"
                            playing={true}
                            muted={true}
                            width="100%"
                            height="100%"
                            controls={false}
                            onEnded={onVideoEnd}
                        />
                    </div>
                </VideoPlayerContainer>
                <div className="motion-background-image">
                    <div className="image-wrapper">
                        <MotionImageStyle src="https://occ-0-3996-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZkIBHNlgMzrKFdzmXu_J0uH9m9knAMe7wWSaIen7ViIaabj6a-N3oOk2_V84gul1AZabEpqV907fp910zJJ-bMQlPIB.webp?r=43b" />
                        <div class="trailer-vignette vignette-layer"></div>
                        <div class="hero-vignette vignette-layer"></div>
                    </div>
                    <div class="button-layer">
                        <span className="action-buttons">
                            <MotionButtonStyle>
                                <div className="svg-container">
                                    <Replay />
                                </div>
                            </MotionButtonStyle>
                        </span>
                        <span className="maturity-rating">
                            <Rating978 className="svg-icon"/>
                        </span>
                    </div>
                </div>
            </div>
        </BillboardMotionWrap>
    );
}

const BillboardMotionWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .motion-background-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    //video
    
    .video-container{
        height: 100%;
        width: 100%;
        pointer-events: none;
    }
    .hidden {
        display: none;
    }

    //image
    .motion-background-image{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
    }
    .image-wrapper {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .vignette-layer {
        z-index: 8;
    }
    .trailer-vignette{
        background: linear-gradient(77deg,rgba(0,0,0,.6) 0,rgba(0,0,0,0) 85%);
        position: absolute;
        top: 0;
        left: 0;
        right: 26.09%;
        bottom: 0;
        opacity: 1;
        -webkit-transition: opacity .5s;
        -o-transition: opacity .5s;
        -moz-transition: opacity .5s;
        transition: opacity .5s;
    }
    .hero-vignette {
        background-image: linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);
        background-size: 100% 100%;
        background-position: 0 top;
        background-repeat: repeat-x;
        background-color: transparent;
        width: 100%;
        height: 14.7vw;
        top: auto;
        bottom: -1px;
        opacity: 1;
    }

    //button at right
    .button-layer {
        position: absolute;
        right: 0;
        bottom: 35%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        z-index: 9;
    }
    .action-buttons {
        width: 2.4vw;
        height: 2.4vw;
        position: relative;
        margin: 0 1.1vw 0 0;

        display: flex;
        align-items: flex-end;
        flex-direction: column;
        font-size: 1.35rem;
    }
    .maturity-rating {
        border: solid 3px #dcdcdc;
        border-style: none none none solid;
        background-color: rgba(51,51,51,.6);
        font-size: 1.1vw;
        padding: 0.5vw 3.5vw 0.5vw 0.8vw;
        display: flex;
        align-items: center;
        height: 2.4vw;
        box-sizing: border-box;
    }

    .svg-icon {
        width: 2em;
        height: 2em;
        margin: 0 0.4em 0 0;
        vertical-align: middle;
        margin: 0;
        border: solid 1px transparent;
        transform: scale(1);
    }
`

const VideoPlayerContainer = styled.div`
    cursor: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    user-select: none;
    overflow: hidden;
    z-index: ${props => props.hideVideo ? "0": "2"};
    
`

const MotionImageStyle = styled.img`
    position: absolute;
    background-position: center center;
    background-size: cover;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    opacity: 1;
    transition: opacity .4s cubic-bezier(.665,.235,.265,.8) 0s;

    z-index: 0;
    border: 0;
`
const MotionButtonStyle = styled.button`
    background-color: transparent;
    border: 2px solid rgba(255, 255, 255, 0.7);
    color: white;

    padding-left: 0.8rem;
    padding-right: 0.8rem;

    -webkit-box-align: center;
    align-items: center;
    appearance: none;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 1;
    padding: 1.3rem;
    position: relative;
    user-select: none;
    will-change: background-color, color;
    word-break: break-word;
    white-space: nowrap;
    border-radius: 50%;
    border: 2px solid rgb(255, 255, 255);
    overflow: visible;

    width: 100%;
    height: 100%;

    .svg-container {
        height: 1.8rem;
        width: 1.8rem;
        display: flex;
        align-items: center;
        justify-content: center;

    }
`

export default BillboardMotion;