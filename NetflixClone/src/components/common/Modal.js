import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {ReactComponent as Close} from './svg/Close.svg'
import { ReactComponent as Play} from "./svg/Play.svg";
import { ReactComponent as Plus} from "./svg/Plus.svg";
import { ReactComponent as Like} from "./svg/Like.svg";
import { ReactComponent as Topten} from "./svg/Topten.svg";
import {closeModal, updateId} from '../../store/actions/modal'
import ReactPlayer from 'react-player'
import { useState } from "react";

const Modal = () => {
    const dispatch = useDispatch();
    const {modal} = useSelector((state) => state.ModalReducer);
    const [hideVideo, setHideVideo] = useState(false);

    const onVideoEnd = () => {
        setHideVideo(true)
    }
    const handleClickClose = () => {
        dispatch(updateId(null))
        dispatch(closeModal(false));
    }

    return (
        <>
            {modal.isOpen ?  
            <Background onClick={handleClickClose}>
            <ModalContainer>
                <div className="preview-modal-close" onClick={handleClickClose}><Close /></div>
                <div onClick={e => e.stopPropagation()}>
                <ModalPreviewPlayerStyle>
                    <div className="player-background">
                        <img className="image-preview" src="https://occ-0-3996-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeiIUx6ZFyKZZ7905kaK08fgJqbpB2qMbZkff8QABMukxvsD8l1ZYaS-O5nT1GUqGQpN822zm4sZWk-fS4eMKHRRPv1ONS4zztB2O_t2hfO4Giw2ww.webp?r=794" />
                    </div>
                    <div className={hideVideo ? "video-background hidden": "video-background"}>
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
                    <div className="preview-title-wrapper">
                        <div className="title-button-container">
                            <img className="title-logo" src="https://occ-0-3996-988.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABdrMuQyWoden1l0eUuFJHwmtDnh9EUlRkpJz5B9IgKprI2wve7GFu7ktSs056UylOe55YUL_7yXpk0uBxA0eyHxPzyyP3bDNi5U.webp?r=cbf" />
                            <div className="button-controls-container">
                                <ButtonLinksStyle>
                                    <div className="svg-container"><Play /></div>
                                    <div style={{width:"1rem"}}></div>
                                    <span className="svg-label">재생</span>
                                </ButtonLinksStyle>
                                <button className="moreinfo-button">
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
                        </div>
                    </div>
                </ModalPreviewPlayerStyle>
                <ModalPreviewInfoStyle>
                    <div className="preview-modal-details">
                        <div className="modal-detail-left">
                            <PreviewVideoDataStyle>
                                <div className="videodata-first">
                                    <span className="meta-score">99% 일치</span>
                                </div>
                                <div className="videodata-second">
                                    <span className="maturity-rate">15+</span>
                                    <span className="duration">시즌 1개</span>
                                    <span className="resolution">HD</span>
                                </div>
                            </PreviewVideoDataStyle>
                            <ToptenVideoStyle>
                                <div className="supplemental-message">
                                    <Topten />
                                    오늘 TV 프로그램 순위 4위
                                </div>
                            </ToptenVideoStyle>
                            <p className="modal-synopsis">
                            친구를 대신해 맞선 자리에 나간 하리. 남자가 겁을 먹고 퇴짜를 놓게 할 작정이다. 하지만 맞선남이 하리가 다니는 회사의 CEO로 드러나며 계획은 엉망이 된다. 게다가 그가 청혼을 하다니.
                            </p>
                        </div>
                        <div className="modal-detail-right">
                            <div className="modal-tag">
                                <span className="modal-tag-label">출연: </span>
                                <span className="modal-tag-item">안효섭, </span>
                                <span className="modal-tag-item">김세정, </span>
                                <span className="modal-tag-item">김민규, </span>
                            </div>
                            <div className="modal-tag">
                                <span className="modal-tag-label">장르: </span>
                                <span className="modal-tag-item">웹툰 원작 한국 드라마, </span>
                                <span className="modal-tag-item">로맨틱 코미디 시리즈, </span>
                                <span className="modal-tag-item">한국 드라마 </span>
                            </div>
                            <div className="modal-tag">
                                <span className="modal-tag-label">시리즈 특징: </span>
                                <span className="modal-tag-item">설렘주의, </span>
                                <span className="modal-tag-item">로맨틱 </span>
                            </div>
                        </div>
                    </div>
                </ModalPreviewInfoStyle>
                <EpisodeContainerStyle>
                    <div className="episode-selector-header">
                        <div className="header-one">
                            회차
                        </div>
                        <div className="header-two">
                            시즌 1
                        </div>
                    </div>
                    <div className="episode-selector-container">
                        <div className="titlecard-list">
                            <div className="titlecard-index">
                                1
                            </div>
                            <div className="titlecard-image">
                                <img className="thumbnail" src="https://occ-0-3996-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABV-4HDSdVWtRE3VeIK76kJrSEewETd6cftUdybxCt3XSE-v4G3g01Z3ZPFT24AMyGT2xWET4qWHwllHjJ0u5L8y2KpmVLKDVfn_GrnTO4KThkBvl.webp?r=794" />
                            </div>
                            <div className="titlecard-data">
                                <div className="titlecard-title">
                                    <span className="titlecard-text">1화</span>
                                    <span className="titlecard-duration">60분</span>
                                </div>
                                <p className="titlecard-synopsis">
                                할아버지의 요구를 들어주기 위해 어쩔 수 없이 맞선을 보기로 하는 강태무. 한편 진영서는 맞선 상대가 놀라 도망갈 수 있도록 신하리에게 도움을 청한다.
                                </p>
                            </div>
                        </div>
                        <div className="titlecard-list">
                            <div className="titlecard-index">
                                2
                            </div>
                            <div className="titlecard-image">
                                <img className="thumbnail" src="https://occ-0-3996-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABV-4HDSdVWtRE3VeIK76kJrSEewETd6cftUdybxCt3XSE-v4G3g01Z3ZPFT24AMyGT2xWET4qWHwllHjJ0u5L8y2KpmVLKDVfn_GrnTO4KThkBvl.webp?r=794" />
                            </div>
                            <div className="titlecard-data">
                                <div className="titlecard-title">
                                    <span className="titlecard-text">1화</span>
                                    <span className="titlecard-duration">60분</span>
                                </div>
                                <p className="titlecard-synopsis">
                                할아버지의 요구를 들어주기 위해 어쩔 수 없이 맞선을 보기로 하는 강태무. 한편 진영서는 맞선 상대가 놀라 도망갈 수 있도록 신하리에게 도움을 청한다.
                                </p>
                            </div>
                        </div>

                        <div className="titlecard-list">
                            <div className="titlecard-index">
                                3
                            </div>
                            <div className="titlecard-image">
                                <img className="thumbnail" src="https://occ-0-3996-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABV-4HDSdVWtRE3VeIK76kJrSEewETd6cftUdybxCt3XSE-v4G3g01Z3ZPFT24AMyGT2xWET4qWHwllHjJ0u5L8y2KpmVLKDVfn_GrnTO4KThkBvl.webp?r=794" />
                            </div>
                            <div className="titlecard-data">
                                <div className="titlecard-title">
                                    <span className="titlecard-text">1화</span>
                                    <span className="titlecard-duration">60분</span>
                                </div>
                                <p className="titlecard-synopsis">
                                할아버지의 요구를 들어주기 위해 어쩔 수 없이 맞선을 보기로 하는 강태무. 한편 진영서는 맞선 상대가 놀라 도망갈 수 있도록 신하리에게 도움을 청한다.
                                </p>
                            </div>
                        </div>

                        <div className="titlecard-list">
                            <div className="titlecard-index">
                                4
                            </div>
                            <div className="titlecard-image">
                                <img className="thumbnail" src="https://occ-0-3996-988.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABV-4HDSdVWtRE3VeIK76kJrSEewETd6cftUdybxCt3XSE-v4G3g01Z3ZPFT24AMyGT2xWET4qWHwllHjJ0u5L8y2KpmVLKDVfn_GrnTO4KThkBvl.webp?r=794" />
                            </div>
                            <div className="titlecard-data">
                                <div className="titlecard-title">
                                    <span className="titlecard-text">1화</span>
                                    <span className="titlecard-duration">60분</span>
                                </div>
                                <p className="titlecard-synopsis">
                                할아버지의 요구를 들어주기 위해 어쩔 수 없이 맞선을 보기로 하는 강태무. 한편 진영서는 맞선 상대가 놀라 도망갈 수 있도록 신하리에게 도움을 청한다.
                                </p>
                            </div>
                        </div>
                    </div>
                </EpisodeContainerStyle>
                </div>
            </ModalContainer>
        </Background>
        : <></>  }
        </>
        
        
    );
};

const Background = styled.div`
    position: fixed;
    overflow-y: initial !important;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.50);
    z-index: 10;
    width: 100%;
    height: 100%;
`;

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: 98%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    
    width: 900px;
    background: #181818;
    border-radius: 10px;
    text-align: center;
    &::-webkit-scrollbar { 
        display: none; 
    }
    .preview-modal-close {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;
        margin: 1em;
        cursor: pointer;
    }
`;

const ModalPreviewPlayerStyle = styled.div`
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    position: relative;
    width: 100%;
    background-color: #000;
    cursor: pointer;
    .image-preview {
        width: 100%;
    }
    .player-background {
        top:0;
        bottom:0;
        left:0;
        right:0;
        overflow: hidden;
    }

    .video-background {
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        overflow: hidden;
    }
    .hidden {
        display: none;
    }
    .preview-title-wrapper {
        opacity: 1;
        background: linear-gradient(to top,#181818,transparent 50%);
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
    }
    .title-button-container {
        width: 40%;
        position: absolute;
        bottom: 5%;
        left: 3em;
    }
    .title-logo {
        width: 100%;
        margin-bottom: 1.5em;
    }
    .button-controls-container {
        display: flex;
        align-items: center;
        margin-bottom: 1em;
        min-height: 2em;
    }


    .moreinfo-button {
      margin-left: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      opacity: 1;
      padding: 0.2rem;
      position: relative;
      user-select: none;
      will-change: background-color, color;
      word-break: break-word;
      white-space: nowrap;

      min-width: 42px;
      min-height: 42px;
      max-width: 42px;
      max-height: 42px;

      border-radius: 50%;
      border-width: 1px;
      background-color: rgba(42,42,42,.6);
      border-color: rgba(255,255,255,.5);
      border: 2px solid rgba(255, 255, 255, 0.7);
      color: white;

    }
    .moreinfo-svg {
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      height: 1.6rem;
      width: 1.6rem;
    }

`

const ModalPreviewInfoStyle = styled.div`
    padding: 0 3em;
    color: white;

    .preview-modal-details {
        display: grid;
        grid-template-columns: minmax(0,2fr) minmax(0,1fr);
        column-gap: 2em;
    }
    .modal-detail-left {
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      color: #fff;
      flex-wrap: wrap;
      margin: 0.5rem;
    }

    .modal-detail-right {
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
    }
    .modal-tag {
        box-sizing: border-box;
        font-size: 14px;
        line-height: 20px;
        margin: 0.5em;
        margin-left: 0%;
        word-break: break-word;
    }
    .modal-tag-label {
        color: #777;
    }
    .modal-tag-item {
        color: #ddd;
        margin: 0;
        cursor: pointer;
        outline-color: #fff;
    }
    .modal-synopsis {
        line-height: 27px;
        font-size: 16px;
        margin-bottom: 0.5em;
        text-align: left;
    }
`
const PreviewVideoDataStyle = styled.div`
    display: flex;
    margin: 0.8em 0;

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
      font-size: 16px;
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
      font-size: 16px;
      margin-right: 0.5em;
    }
    .duration {
      margin-right: 0.5em;
      font-size: 16px;
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
`

const ToptenVideoStyle = styled.div `
    display: flex; 
    margin-bottom: 0.5em;
    align-items: center;
    .svg-icon {
        margin-right: 0.5em;
    }
    .supplemental-message {
        display: flex;
        align-items: center;
    }
`

const EpisodeContainerStyle = styled.div`
    padding: 1em 3em;
    background-color: #181818;
    padding-bottom: 0;
    color: white;

    .episode-selector-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    .header-one {
        font-weight: 700;
        font-size: 24px;
        margin-top: 48px;
        margin-bottom: 20px;
    }
    .header-two {
        font-size: 18px;
        margin-top: 48px;
        margin-bottom: 20px;
    }

    .episode-selector-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        flex-direction: column;
    }

    
    .titlecard-list {
        min-height: 8em;
        border-bottom: 1px solid #404040;
        padding: 1em;
        border-radius: 0.25em;
        overflow:hidden;
        cursor:pointer;
        position: relative;
        display: flex;
        align-items: center;
    }
    .titlecard-list:first-of-type {
        border-top: 1px solid #404040;
    }
    .titlecard-list.current {
        background-color: #333;
    }

    .titlecard-index {
        font-size: 1.5em;
        color: #d2d2d2;
        display: flex;
        justify-content: center;
        flex: 0 0 7%;
    }
    .titlecard-image {
        position:relative;
        overflow: hidden;
        flex: 0 0 18%;
        border-radius: 4px;
    }
    .titlecard-data {
        min-height: 100%;
        flex: 0 0 70%;
        font-size: 1em;
    }
    .thumbnail {
        width: 100%;
    }
    .titlecard-title {
        display: flex;
        justify-content: space-between;
        padding: 1em;
        padding-bottom: 0.5em;
    }
    .titlecard-text {
        color: #fff;
        font-size: 1.2em;
        font-weight: 700;
    }
    .titlecard-duration {
        padding-left: 10px;
        font-size: 1.2em;
    }
    .titlecard-synopsis {
        text-align: left;
        padding: 0 1em 1em;
        margin: 0;
        color: #d2d2d2;
        font-size: 16px;
        line-height: 20px;
    }

`

const ButtonLinksStyle = styled.button`

    align-items: center;
    appearance: none;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    opacity: 1;
    padding: 0.6rem 2.2rem 0.6rem 1.8rem;
    position: relative;
    user-select: none;
    will-change: background-color,color;
    word-break: break-word;
    white-space: nowrap;
    box-sizing: border-box;
    font-size: 10px;
    background-color: white;
    color: black;
    
    .svg-label {
        font-weight: normal;
        display: block;
        font-size: 1.1rem;
        font-weight: bold;
    }
`



export default Modal;