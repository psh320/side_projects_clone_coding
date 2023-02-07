import React from 'react';
import { StoryCardStyle } from '../common/styled';
import styled from 'styled-components';
const StoryCard = () => {

    return (
        <>
            <StoryCardStyle>
                <StoryCardWrapStyle flip={false}>
                    <div className="our-story-card-text">
                        <h1 className="our-story-card-title">TV로 즐기세요.</h1>
                        <div className="our-story-card-subtitle">스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</div>
                    </div>
                    
                    <div className="our-story-card-img-container">
                        <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img" />
                    </div>
                </StoryCardWrapStyle>
            </StoryCardStyle>
            <StoryCardStyle>
                <StoryCardWrapStyle flip={true}>
                    <div className="our-story-card-text">
                        <h1 className="our-story-card-title">간편하게 저장하고 빈틈없이 즐겨보세요.</h1>
                        <div className="our-story-card-subtitle">간편하게 저장하고 빈틈없이 즐겨보세요.</div>
                    </div>
                    
                    <div className="our-story-card-img-container">
                    <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="our-story-card-img" />
                    </div>
                </StoryCardWrapStyle>
            </StoryCardStyle> 
            <StoryCardStyle>
                <StoryCardWrapStyle flip={false}>
                    <div className="our-story-card-text">
                        <h1 className="our-story-card-title">다양한 디바이스에서 시청하세요.</h1>
                        <div className="our-story-card-subtitle">각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.</div>
                    </div>
                    
                    <div className="our-story-card-img-container">
                    <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" data-uia="our-story-card-img" />
                    </div>
                </StoryCardWrapStyle>
            </StoryCardStyle>
            <StoryCardStyle>
                <StoryCardWrapStyle flip={true}>
                    <div className="our-story-card-text">
                        <h1 className="our-story-card-title">어린이 전용 프로필을 만들어 보세요.</h1>
                        <div className="our-story-card-subtitle">자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.</div>
                    </div>
                    
                    <div className="our-story-card-img-container">
                    <img alt="" className="our-story-card-img" src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABTyynLTvOBU46RmBnCIPyjAryrXCZKImpoXdp7Mz54jVGKnBQ1X84bzR-3vtD-RA4uu2b1FjrDgfxE6KElG14WAXW19X.png?r=acf" data-uia="our-story-card-img" />
                    </div>
                </StoryCardWrapStyle>
            </StoryCardStyle>
        </>
    );
}

const StoryCardWrapStyle = styled.div`
    display: flex;
    max-width: 1100px;
    margin: 0 auto; 
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width: 550px) and (max-width: 949px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
        flex-direction: column;
    }

    @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
        flex-direction:${props => (props.flip ? 'row-reverse' : 'row')};
    }

    .our-story-card-text {
        width: 52%;
        height: 100%;
        flex: 0 1 auto;
        padding: 0 3rem 0 0;
        z-index: 3;
        @media only screen and (min-width: 550px) and (max-width: 949px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
            width: 100%;
            text-align: center;
            padding: 0;
        }
    }
    .our-story-card-title {
        line-height: normal;
        font-size: 3.125rem;
        margin: 0 0 0.4em;

        @media only screen and (min-width: 550px) and (max-width: 949px) {
            font-size: 2.5rem;
        }

        @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
            font-size: 1.625rem;
        }
    }
    .our-story-card-subtitle {
        font-size: 1.625rem;
        font-weight: 400;

        @media only screen and (min-width: 550px) and (max-width: 949px) {
            font-size: 1.25rem;
        }

        @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
            font-size: 1.125rem;
        }
    }

    .our-story-card-img-container {
        width: 48%;
        height: 100%;
        flex: 0 1 auto;
        @media only screen and (min-width: 550px) and (max-width: 949px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
            width: 100%;
            max-width: 600px;
            margin-top: 1rem;
        }
    }

    .our-story-card-img {
        z-index:2;
        position: relative;
        max-width: 100%;
        height: auto;
        border: 0;
    }
`

export default StoryCard;