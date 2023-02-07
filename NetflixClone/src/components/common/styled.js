import styled from "styled-components";


export const PageWrap = styled.div`
    position: relative;
    width:100vw;
    height:100vh;
    background: ${props => props.color};
`;
export const TextMiddle = styled.div`
    position:absolute;
    top:50%;
    left:50%;

    transform:translate(-50%,-50%);
`;

export const StoryCardStyle = styled.div`
    background-color: black !important;
    position: relative;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    margin-bottom: 0;
    background: 0 0;
    color: #fff;

    @media only screen and (min-width: 550px) and (max-width: 949px), only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
        padding: 70px 45px;
    }
    
`

export const SignupWrapStyle = styled.div`
    padding: 20px 32px 155px;
    margin: 0 auto 15px;
    display: block;
    overflow: hidden;
    max-width: 978px;
    box-sizing: border-box;
`

export const RegContainerStyle = styled.div`
    max-width: ${props => 
    props.page === "register" && "340px" ||
    props.page === "regform" && "440px" ||
    props.page === "planform" && "978px" ||
    "340px"
    };
    text-align: ${props => 
    props.page === "register" && "center" ||
    props.page === "regform" && "left" ||
    "left"
    };
    margin: 0 auto;

    .steplogo-container {
        display: inline-block;
    }
    .reg-steplogo {
        background: url(https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png) no-repeat 50% 50%;
        height: 90px;
        background-size: 260px;
        margin: 100px 0 20px;
        width: 260px;
    }
    .plan-steplogo {
        background: url(https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png) no-repeat 50% 50%;
        height: 50px;
        background-size: 50px;
        margin: 100px 0 20px;
        width: 50px;
    }
    .step-indicator {
        font-size: 13px;
        line-height: 19px;
        font-weight: 400;
    }
    .step-title {
        font-weight: 600;
        font-size: 32px;
        margin: 0 0 0.4em;
    }
    .context-body {
        font-size: 18px;
        font-weight: 200;
        max-width: 300px;
        display: inline-block;
        line-height: 1.5;
    }
`

export const ButtonContainerStyle = styled.div`
    max-width: ${props => 
    props.page === "register" && "340px" ||
    props.page === "regform" && "440px" ||
    "340px"
    };
    margin: 24px auto 0 auto;
    text-align: center;
    .nf-btn {
        min-height: 64px;
        font-weight: 500;
        font-size: 24px;
        border-radius: 4px;
        line-height: 1;
        padding: 0.75rem 25.333px;
        min-width: 110px;
        width: 100%;

        color: #fff;
        background-color: #e50914;
        border: none;
        cursor: pointer;
    }
    .nf-btn:hover {
        background-color: #F6131D;
    }
`

export const InputFieldStyle = styled.input`
    box-sizing: border-box;
    height: 60px;
    padding: 10px 10px 0;
    width: 100%;
    font-size: 16px;
    border-radius: 2px;
    color: black;
    line-height: normal;

    border: solid 1px #8c8c8c;

`
export const ContentCardStyle = styled.div`
    position: relative;
      display: flex !important;
      flex-direction: column;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      transition: transform 250ms ease-out, border-radius 200ms ease-out;
      overflow: visible;
      z-index: 1;
      height: 180px;
      background-color: #141414;
      cursor: pointer;
      
      &:hover {
      transition-delay:0.5s;
      transform: scale(1.5) translate(0px, -50px);
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
    &:hover .moreinfo-container {
      z-index: 20;
    }

    .card-img {
      width: 100%;
      border-radius: 5px;
      padding-right: 5px;
    }
`
export const SliderWrap = styled.div`
    z-index: 2;
    padding: 0 60px;
    position: relative;
    margin: 0;
    padding: 0 4%;
    touch-action: pan-y;
    background-color: #141414;


    .slick-slide > div {
    margin-right: 6px;
    }
    .slick-list {
    position: static;
    margin-right: -6px;
    overflow: visible;
    background-color: #141414;
    }
    .moreinfo-container {
    position: absolute;
    height: 100%;
    width: inherit;
    }
    .slick-arrow {
    width: 5%;
    height: 100%;
    z-index:10;
    }
    .slick-prev {
    left: -5%;
    /* background-color: rgba(0,0,0,.6); */
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
    /* background-color: rgba(0,0,0,.6); */
    }
    div[data-index="-1"] {
    visibility: hidden;
    }
`

export const MoreinfoStyle = styled.div`
    visibility: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #181818;
    position: absolute;
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
    .dot:last-of-type {
    display:none;
    }
`

export const PlacelabelStyle = styled.label`
    position: absolute;
    top: ${props => (props.focus || !props.hasValue ? "12px" : "50%")};
    font-size: ${props => (props.focus || !props.hasValue ? "13px" : "16px")};
    font-weight: ${props => (props.focus || !props.hasValue ? "800" : "200")};
    left: 10px;
    color: #8c8c8c;
    transform: translateY(-50%);
    transition: font .1s ease,top .1s ease,transform .1s ease,-webkit-transform .1s ease,-moz-transform .1s ease,-o-transform .1s ease
`