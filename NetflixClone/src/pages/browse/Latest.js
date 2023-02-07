import { PageWrap } from "../../components/common/styled";
import Header from "../../components/common/header";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentList from "../../components/browse/ContentList";
import Topten from "../../components/browse/Topten";
import axios from "axios";

const Latest = () => {
    const {user} = useSelector((state) => state.LoginReducer);
    const nav = useNavigate();

    const [genreList, setGenreList] = useState([]);
    
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
            const response = await axios.get("/categories/main");
            console.log(genreList)
            setGenreList(response.data.result.genres_categories);
        }
        catch (error) {
            console.error(error);
        }
    }
    const renderedContentList = () => {
        return genreList && genreList.map(genre=>{
            return (
                <ContentList genreIdx={genre.genreIdx} name={genre.name} />
            );
        })
    }
    
    return (
        <BrowsePageWrap>
            <Header page="browse"/>
            <MainViewStyle>
                <div className="mainview-margin">
                    <Topten />
                    <ContentList genreIdx="21" name="한국 드라마"/>
                    {renderedContentList()}
                </div>
            </MainViewStyle>
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
        padding-top: 50px;
        z-index: 0;
        overflow: hidden;
    }
`

export default Latest;