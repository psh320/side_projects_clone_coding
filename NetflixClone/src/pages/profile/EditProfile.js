import { PageWrap } from "../../components/common/styled";
import Header from "../../components/common/header";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Edit} from "../../components/common/svg/Edit.svg";
import axios from "axios";
import queryString from "query-string";

const EditProfile = () => {
    const location = useLocation();
    const query = queryString.parse(location.search);
    const {user} = useSelector((state) => state.LoginReducer);
    const nav = useNavigate()

    const [formData, setFormData] = useState({name: "", profilePhotoUrl:"", profilePhotoIdx:""})
    const [pictureList, setPictureList] = useState([])
    const [openAvatar, setOpenAvatar] = useState(false);

    useEffect(() => {
        getProfile(query.id)
        getAllPics()
    },[])

    const getProfile = async (profileIdx) => {
        try {
            const response = await axios.get("/profiles/"+profileIdx)
            setFormData({...formData, name:response.data.result.name, profilePhotoUrl:response.data.result.profilePhotoUrl})
        }
        catch (error) {
            console.error(error);
        }
    }
    const getAllPics = async () => {
        try {
            const response = await axios.get("/profiles/manage/photos")
            setPictureList(response.data.result)
        }
        catch (error) {
            console.error(error);
        }
    }
    const patchUpdateProfile = async (name, id) => {
        try {
            const response = await axios.patch("/profiles/manage",{
                profileIdx: id,
                name: name,
                language: "한국어",
                settingAutoNextPlay: 1,
                settingAutoPrePlay: 1
            })

            switch(response.data.code) {
                case 1000:
                    break;
                case 2031:
                    alert("프로필 생성을 실패하였습니다");
                    break;
                case 4000:
                    alert("데이터 베이스 오류");
                    break;
                default:
                    alert("오류")
            }
            
        }
        catch (error) {
            console.error(error);
        }
    }
    const patchUpdateProfilePic = async (profileIdx, photoIdx) => {
        try {
            const response = await axios.patch("/profiles/manage/photos",{
                profileIdx: profileIdx,
                profilePhotoIdx: photoIdx
            })

            switch(response.data.code) {
                case 1000:
                    break;
                case 2031:
                    alert("프로필 생성을 실패하였습니다!!!");
                    break;
                case 4000:
                    alert("데이터 베이스 오류");
                    break;
                default:
                    alert("오류")
            }
            
        }
        catch (error) {
            console.error(error);
        }
    }

    const patchDeleteProfile = async (accountIdx, profileIdx) => {
        try {
            const url = "/profiles/"+accountIdx+"/"+profileIdx+"/deactivate";
            const response = await axios.patch(url)
        }
        catch (error) {
            console.error(error);
        }
    }
    const handleClickChangeAvatar = () => {
        if(openAvatar === false) {
            setOpenAvatar(true)
        } else {
            setOpenAvatar(false)
        }
    }
    const handleChangeName = (e) => {
        setFormData({...formData, name: e.target.value})
    }
    const handleOnSubmit = () => {
        patchUpdateProfile(formData.name, query.id)
        if(formData.profilePhotoIdx != "") {
            patchUpdateProfilePic(query.id, formData.profilePhotoIdx)
        }
        nav('/profile')
    }
    const handleOnDelete = () => {
        patchDeleteProfile(user.id, query.id)
        nav('/profile')
    }
    const handleSelectAvatar = (id, url) => {
        setFormData({...formData,profilePhotoUrl: url ,profilePhotoIdx: id})
        setOpenAvatar(false)
    }   
    const renderedAvatarList = () => {
        return pictureList && pictureList.map(avatar => {
            return (
                <div className="profile-avatar" onClick={()=>{handleSelectAvatar(avatar.profilePhotoIdx, avatar.profilePhotoUrl)}}>
                    <img className="profile-image" src={avatar.profilePhotoUrl} alt="" />
                </div>
            );
        })
    }
    
    return (
        <PageWrap color="#141414">
            <Header/>
            <ProfileGateContainerStyle>
                <div className="list-profiles-container">
                    <div>
                        <h1 className="header-text-label1">프로필 변경</h1>
                        <div className="profile-metadata">
                            <div className="profile-avatar" >
                                <img className="profile-image" src={formData.profilePhotoUrl} alt="" />
                                <AvatarListWrap showList={openAvatar}>
                                    {renderedAvatarList()}
                                </AvatarListWrap>
                                <div className="svg-overlay" onClick={handleClickChangeAvatar}><Edit width="24" height="24"/></div>
                            </div>
                            <div className="profile-inputs-wrap">
                                <div className="profile-inputs">
                                    <input value={formData.name} type="text" id="add-profile-name" placeholder="이름" onChange={(e) => {handleChangeName(e)}}/>
                                        <label for="add-profile-name" aria-label="이름"></label>
                                </div>
                            </div>
                        </div>
                        <ProfileAddButtonWrap>
                            <span className="profile-manage">
                                <div className="profile-button1" onClick={handleOnSubmit}>
                                    저장
                                </div>
                            </span>
                            <span className="profile-manage">
                                <Link to="/profile" className="profile-button2">
                                    취소
                                </Link>
                            </span>
                            <span className="profile-manage" onClick={handleOnDelete}>
                                <div className="profile-button2">
                                    프로필 삭제
                                </div>
                            </span>
                        </ProfileAddButtonWrap>
                        
                    </div>
                    
                </div>
            </ProfileGateContainerStyle>
        </PageWrap>
    );
}

const AvatarListWrap = styled.div`
    position: absolute;
    display: ${props => props.showList ? "grid": "none"};
    grid-template-columns: repeat(4,minmax(0, 1fr));
    grid-row-gap: 20px;
    margin: 10px 0;
    padding: 20px;
    align-items: center;
    justify-content: center;
    width: 800px;
    height: 200%;
    background-color: #666666;
    overflow-y: scroll;
`

const ProfileGateContainerStyle = styled.div`
    position: fixed;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    text-align: center;
    background: #141414;
    z-index: 0;

    .svg-overlay {
        display:flex;
        align-items: center;
        justify-content: center;
        background-color: #141414;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        color: #fff;
        position:absolute;
        top: 1;
        left: 1;
        right: 5px;
        bottom: 5px;
    }
    .hidden {
        display: none;
    }
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
    .header-text-label1 {
        text-align: left;
        width: 100%;
        color: #fff;
        font-size: 4vw;
        font-weight: unset;

        opacity: 1;
        transition: opacity .4s ease-out;

        margin-bottom: 20px;
    }
    .header-text-label2 {
        text-align: left;
        font-size: 1.3vw;
        color: #666;
        font-weight: 400;
        margin: 1em 0;
    }
    .profile-metadata {
        display: flex;
        padding: 2em 0;
        border-top: 1px solid #333;
        border-bottom: 1px solid #333;
    }
    .profile-avatar {
        position: relative;
        white-space: nowrap;
        margin-right: 1.5vw;
        width: 8vw;
        min-width: 80px;
        max-width: 180px;
    }
    .profile-image {
        width: 100%;
    }
    .profile-inputs {
        display: flex;
        position: relative;
        vertical-align: middle;
        flex-direction: row;
        align-items: center
    }
    .profile-inputs-wrap {
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    .profile-inputs input[type=text] {
        width: 18em;
        height: 2em;
        background: #666;
        border: 1px solid transparent;
        margin: 0 0.8em 0 0;
        padding: 0.2em 0.6em;
        color: #fff;
        font-size: 1.3vw;
        box-sizing: border-box;
        text-indent: 0.1vw;
    }
    .profile-inputs input[type=text]::placeholder {
        color: #B5B5B5;
    }
    .add-kids-option {
        display: flex;
        align-items: center;
        margin: 5px 0;
        position: relative;
        color: #fff;
    }
    .profile-inputs input[type=checkbox] {
        display:none;
    }
    .profile-inputs input[type=checkbox]+label {
        border: 1px solid #333;
        border-radius: 0;
        display: inline-block;
        position: relative;
        margin-right: 0.5em;
        font-size: 0.8vw;
        width: 2.5em;
        height: 2.5em;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .add-kids-marker {
        font-size: 1.3vw;
        font-weight: 400;
    }

    
`

const ProfileAddButtonWrap = styled.div`
    text-align: left;
    
    .profile-button1 {
        text-align: left;
        display: inline-block;
        margin: 2em 20px 1em 0;
        background-color: #fff;
        font-size: 1.2vw;
        border: 1px solid #fff;
        color: #000;
        padding: 0.5em 1.5em;
        letter-spacing: 2px;
        cursor: pointer;
    }
    .profile-button1:hover {
        background-color: #CC0100;
        border: 1px solid #CC0100;
        color: #fff;
    }
    .profile-button2 {
        display: inline-block;
        margin-right: 20px;
        font-size: 1.2vw;
        border: 1px solid grey;
        color: grey;
        padding: 0.5em 1.5em;
        letter-spacing: 2px;
        cursor: pointer;
        background-color: transparent;
    }
    .profile-button2:hover {
        border: 1px solid #fff;
        color: #fff;
    }
    .profile-button:hover {
        color: white;
        border: 1px solid white;
    }
`

export default EditProfile;