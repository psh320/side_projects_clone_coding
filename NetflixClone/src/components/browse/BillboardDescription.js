import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Play} from "../common/svg/Play.svg";
import { ReactComponent as Info} from "../common/svg/Info.svg";

const BillboardDescription = () => {
    return (
        <BillboardDescriptionWrap>
            <div className="info">
                <div className="logo-and-text">
                    <div className="title-wrapper">
                        <div className="billboard-title">
                            <BillboardTitleStyle src="https://occ-0-3996-988.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcqQGZPxyfwykoZ-bn3Dv8-x2UQriYysOCJ--hLIUa-ac6vh6SX1BZ7MOyno6-HDTA_SfWW_nlyCe9Oi8cuwQVfan-HvRqgx8rce.webp?r=a3a"/>
                        </div>
                    </div>
                    <div className="info-wrapper">
                        <div className="info-wrapper-fade">
                            <div>
                                <div className="synopsis">
                                꿈을 현실로, 불가능을 가능으로! 아이디어 있겠다, 기술 있겠다. 못 할 것도 없지. 치열한 스타트업의 세계에 뛰어드는 젊은 창업자들. 성공도 사랑도 쟁취하고야 만다!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="billboard-links">
                        <Link to="/watch" className="play-link">
                            <ButtonLinksStyle mode="play">
                                <div className="svg-container"><Play /></div>
                                <div style={{width:"1rem"}}></div>
                                <span className="svg-label">재생</span>
                            </ButtonLinksStyle>
                        </Link>
                        <Link to="/watch" className="play-link">
                            <ButtonLinksStyle mode="info">
                                <div className="svg-container"><Info /></div>
                                <div style={{width:"1rem"}}></div>
                                <span className="svg-label">상세정보</span>
                            </ButtonLinksStyle>
                        </Link>
                    </div>
                </div>
            </div>
        </BillboardDescriptionWrap>
    );
}

const BillboardDescriptionWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .info {
        position: absolute;
        top: 0;
        bottom: 30%;
        left: 4%;
        width: 36%;
        z-index: 10;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
    }

    .logo-and-text {
        width: 100%;
        transition: transform 1.5s cubic-bezier(.165,.84,.44,1),-webkit-transform 1.5s cubic-bezier(.165,.84,.44,1),-moz-transform 1.5s cubic-bezier(.165,.84,.44,1),-o-transform 1.5s cubic-bezier(.165,.84,.44,1);
    }
    .title-wrapper {
        transform-origin: left bottom;
        transform: scale(1) translate3d(0px, 0px, 0px);
        transition-duration: 1300ms;
        transition-delay: 0ms;
    }
    .billboard-title {
        min-height: 13.2vw;
        position: relative;
        margin-bottom: 1.2vw;
    }


    .info-wrapper {
        transform: translate3d(0px, 0px, 0px);
        transition-duration: 1300ms;
        transition-delay: 0ms;
        opacity: 1;
    }
    .info-wrapper-fade {
        opacity: 1;
        transition-duration: 600ms;
        transition-delay: 200ms;
    }

    .synopsis {
        margin: 0.5vw 0 0 0;
        color: #fff;
        font-weight: 400;
        line-height: normal;
        width: 100%;
        font-size: 1.4vw;
        text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
    }

    
    .billboard-links {
        margin-top: 1.5vw;
        white-space: nowrap;
        display: flex;
        line-height: 88%;

        position: relative;
        z-index: 10;
    }
    
    .play-link {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
`

const BillboardTitleStyle = styled.img`
    width: 100%;
    transform-origin: bottom left;
`
const ButtonLinksStyle = styled.button`
    margin-right: 1rem;
    margin-bottom: 1rem;

    align-items: center;
    appearance: none;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    opacity: 1;
    padding: 0.8rem 2.4rem 0.8rem 2rem;
    position: relative;
    user-select: none;
    will-change: background-color,color;
    word-break: break-word;
    white-space: nowrap;
    box-sizing: border-box;
    
    background-color: ${props => props.mode === "play" ? "white" : "rgba(109,109,110,0.7)"}; 
    color: ${props => props.mode === "play" ? "black" : "white"};
    width: 10vw;
    height: 3vw;
    max-width: ${props => props.mode === "play" ? "6vw " : "9vw"};
    min-width: ${props => props.mode === "play" ? "5vw" : "8vw"};
    max-height: 50px;
    .svg-label {
        font-weight: normal;
        display: block;
        font-size: 1.2vw;
        
        
    }
    .svg-icon-browse {
        width: 1.8vw;
    }
`
export default BillboardDescription;