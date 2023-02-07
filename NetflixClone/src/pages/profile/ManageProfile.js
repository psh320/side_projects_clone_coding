import { PageWrap } from "../../components/common/styled";
import Header from "../../components/common/header";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import ManageList from "../../components/profile/ManageList";
import { Link } from "react-router-dom";
import axios from "axios";

const ManageProfile = () => {
    const nav = useNavigate();
    const {user} = useSelector((state) => state.LoginReducer);

    const [profileList, setProfileList] = useState([]);

    useEffect(() => {
        if(user.isSignedIn === null) {
            nav("/")
        }
        if(user.membership === null) {
            nav("/signup")
        }
        getProfileList(user.id);
    },[])
    useEffect(() => {
        getProfileList(user.id);
    })

    
    const getProfileList = async accountIdx => {
        try {
            const response = await axios.get("/profiles/by-account-idx/" + accountIdx);
            setProfileList(response.data.result);
        }
        catch (error) {
            console.error(error);
        }
      }
    return (
        <PageWrap color="#141414">
            <Header page="profile"/>
            <ProfileGateContainerStyle>
                <div className="list-profiles-container">
                    <div className="list-profiles">
                        <h1 className="profile-gate-label">프로필 관리</h1>
                        <ul className="choose-profile">
                            <ManageList data={profileList} />
                        </ul>
                    </div>
                    <span className="profile-manage">
                        <Link to="/profile" className="profile-button">
                            완료
                        </Link>
                    </span>
                </div>
            </ProfileGateContainerStyle>
        </PageWrap>
    );
}

const ProfileGateContainerStyle = styled.div`
    position: fixed;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    text-align: center;
    background: #141414;
    z-index: 0;


    .list-profiles-container {
        z-index: 100;
        position:absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }
    .profile-gate-label {
        width: 100%;
        color: #fff;
        font-size: 3.5vw;
        font-weight: unset;

        opacity: 1;
        transition: opacity .4s ease-out;

        margin: 0.67em 0;
    }
    .choose-profile {
        margin: 2em 0;
        
        opacity: 1;
        transition: opacity .4s ease-out;
    }
    .profile-button {
        display: block;
        margin: 2em 0 1em 0;
        font-size: 1.2vw;
        border: none;
        color: black;
        padding: 0.5em 1.5em;
        letter-spacing: 2px;
        cursor: pointer;
        background-color: white;
    }
    .profile-button:hover {
        color: white;
        background-color: #E50915;
    }
    
`

export default ManageProfile