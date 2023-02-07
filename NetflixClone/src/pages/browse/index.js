import { PageWrap } from "../../components/common/styled";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BillboardMotion from "../../components/browse/BillboardMotion";
import BillboardDescription from "../../components/browse/BillboardDescription";
import ContentList from "../../components/browse/ContentList";
import Topten from "../../components/browse/Topten";
import ReactLoading from 'react-loading';
import axios from "axios";

const Browse = () => {
    const {user} = useSelector((state) => state.LoginReducer);
    const nav = useNavigate();

    const [genreList, setGenreList] = useState([]);
    const [loading, setLoading] = useState(null)
    useEffect(() => {
        if(user.isSignedIn === null) {
            nav("/")
        }
        if(user.profile === null) {
            nav("/profile")
        }
        getGenreList();
    },[])

    const getGenreList = async () => {
        try {
            setLoading(true)
            const response = await axios.get("/categories/main");
            setGenreList(response.data.result.genres_categories);
        }
        catch (error) {
            console.error(error);
        }
        setLoading(false)
    }
    const renderedContentList = () => {
        return genreList && genreList.map(genre=>{
            return (
                <ContentList genreIdx={genre.genreIdx} name={genre.name} />
            );
        })
    }
    function Loader({type, color, message}) { 
        return ( <div class="contentWrap"> <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}> <h2>{message}</h2> <h2>창을 닫지 말아주세요.</h2> <ReactLoading type={type} color={color} height={'80%'} width={'80%'} /> </div> </div> );}

    return (
        <BrowsePageWrap>
            <Header page="browse"/>
            <MainViewStyle>
                <div className="mainview-margin">
                    <BackgroundAnimationWrap>
                        <div className="billboard-row">
                            <div className="billboard">
                                <BillboardMotion />
                                <BillboardDescription />
                            </div>
                        </div>
                    </BackgroundAnimationWrap>
                    <ContentList genreIdx="21" name="한국 드라마"/>
                    <Topten />
                    {renderedContentList()}
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
        margin-top: -70px;
        padding: 0 0 50px;
        z-index: 0;
        overflow: hidden;
    }
`

const BackgroundAnimationWrap = styled.span`
    display: block;
    z-index: 1;
    position: relative;
    padding-bottom: 50px;

    .billboard-row {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        user-select: none;
        margin-bottom: 20px;
        background-color: #000;
        position: relative;
        padding-bottom: 40%;
    }
    .billboard {
        position: absolute;
        background-color: #000;
        width: 100%;
        height: 56.25vw;
        z-index: 0;
    }
`

export default Browse;