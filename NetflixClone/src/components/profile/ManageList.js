import { Link } from "react-router-dom";
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../../store/actions/login";
import { useEffect, useState } from "react";
import {ReactComponent as Plus} from "../common/svg/Plus.svg";
import {ReactComponent as EditProfile} from "../common/svg/EditProfile.svg";

const ManageList = (props) => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const {user} = useSelector((state) => state.LoginReducer);


    const renderedProfileList = () => {
        return props.data.map(profile => {
            const url = "/profile/edit?id=" + profile.profileIdx
            if(profile.status === 1) {
                return (
                    <ProfileWrap>
                        <div>
                            <Link to={url}>
                            <div className="profile-link">
                                <div className="position">
                                    <ProfileIconStyle image={profile.profilePhotoUrl}></ProfileIconStyle>
                                    <div className="svg-overlay"><EditProfile width="42" height="42"/></div>
                                </div>
                                <span className="profile-name">{profile.name}</span>
                            </div>
                            </Link>
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
    .position {
        position: relative;
    }
    .profile-link {
        color: white;
        position: relative;
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
    .svg-overlay {
        position:absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .svg-overlay:hover::after {
        content: "";
        display: block;
        border-radius: 4px;
        border: 0.3em solid grey;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
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
    opacity: 0.5;
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

export default ManageList;