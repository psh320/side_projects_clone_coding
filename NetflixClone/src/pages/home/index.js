import styled from "styled-components"
import { TextMiddle, PageWrap } from "../../components/common/styled";
import Header from "../../components/common/header";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const HomePage = () => {

    //외부 모듈
    const nav = useNavigate();

    //global state
    const { user } = useSelector(state => state.LoginReducer);

    //페이지 첫 로딩시 로직
    useEffect(() => {

        //벨리데이션
        if (!user.name) {
            alert("로그인을 해주세요");
            nav('/login');
        }

    }, [])

    return (
        <PageWrap>
            <Header page="home" />
            
        </PageWrap>
    )
}

const IndexText = styled(TextMiddle)`
    font-size:30px;
    font-weight:600;
`;


export default HomePage