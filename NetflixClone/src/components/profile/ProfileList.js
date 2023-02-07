import { Link } from "react-router-dom";
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../store/actions/login";
import { useEffect, useState } from "react";
import {ReactComponent as Plus} from "../common/svg/Plus.svg"

const ProfileList = (props) => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const {user} = useSelector((state) => state.LoginReducer);
    const [profile, setProfile] = useState([])

    const handleProfileClick = (e) => {
        dispatch(updateProfile(e));
        setProfile({...profile})
        nav('/browse')
    }

    const renderedProfileList = () => {
        return props.data.map(profile => {
            if(profile.status === 1) {
                return (
                    <ProfileWrap>
                        <div>
                            <div className="profile-link" onClick={() => handleProfileClick(profile.profileIdx)}>
                                <div>
                                    <ProfileIconStyle image={profile.profilePhotoUrl}></ProfileIconStyle>
                                </div>
                                <span className="profile-name">{profile.name}</span>
                            </div>
                        </div>
                    </ProfileWrap>
                );
            }
        })
    }


    return (
        <>
            {renderedProfileList()}
            <ProfileWrap>
                <div>
                    <Link className="profile-link" to="/profile/add">
                        <div>
                            <ProfileIconStyle className="add-icon">
                                <Plus width="100" height="100"/>
                            </ProfileIconStyle>
                        </div>
                        <span className="profile-name">프로필 추가</span>
                    </Link>
                </div>
            </ProfileWrap>
        </>
    );
}

const ProfileWrap = styled.li`
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0 2vw 0 0;
    width: 10vw;
    max-width: 200px;
    min-width: 84px;

    .profile-link {
        color: white;
    }
    .profile-name {
        line-height: 1.5;
        min-height: 1.8em;
        color: grey;
        display: block;
        text-align: center;
        font-size: 1.3vw;
        margin: 0.6em 0;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .add-icon {
        display:flex;
        align-items: center;
        justify-content: center;
    }
`

const ProfileIconStyle = styled.div`
    height: 10vw;
    width: 10vw;
    max-width: 200px;
    max-height: 200px;
    min-width: 84px;
    min-height: 84px;
    box-sizing: border-box;
    position: relative;
    text-decoration: none;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #333;
    background-image: url(${props=>(props.image)});
    border: none;
    border-radius: 4px;

    &:hover::after {
        content: "";
        display: block;
        border-radius: 4px;
        border: 0.3em solid white;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    
    
`

export default ProfileList;