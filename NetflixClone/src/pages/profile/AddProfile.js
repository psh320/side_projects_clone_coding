import { PageWrap } from "../../components/common/styled";
import Header from "../../components/common/header";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as Check} from "../../components/common/svg/Check.svg";
import axios from "axios";

const AddProfile = () => {
    const {user} = useSelector((state) => state.LoginReducer);
    const nav = useNavigate()
    const [formData, setFormData] = useState({name: "", isKid: false, profilePhotoUrl:"",profilePhotoIdx:""})

    useEffect(()=> {
        getRandomPic();
    },[])
    const postCreateProfile = async (name, ageGrade, profilePhotoIdx) => {
        try {
            const response = await axios.post("/profiles/manage",{
                name: name,
                ageGrade: ageGrade,
                accountIdx: user.id,
                profilePhotoIdx: profilePhotoIdx

            })

            switch(response.data.code) {
                case 1000:
                    break;
                case 2023:
                    alert("프로필 생성을 실패하였습니다");
                    break;
                case 4000:
                    alert("데이터 베이스 오류");
                    break;
                default:
                    alert("오류!!!!")
            }
            
        }
        catch (error) {
            console.error(error);
        }
    }
    const getRandomPic = async (profileIdx) => {
        try {
            const response = await axios.get("/profiles/manage")
            setFormData({...formData,profilePhotoIdx:response.data.result.profilePhotoIdx, profilePhotoUrl:response.data.result.profilePhotoUrl})
        }
        catch (error) {
            console.error(error);
        }
    }

    const handleClickKid = () => {
        if(formData.isKid === false) {
            setFormData({...formData, isKid: true})
        } else {
            setFormData({...formData, isKid: false})
        }
    }

    const handleChangeName = (e) => {
        setFormData({...formData, name: e.target.value})
    }
    const handleOnSubmit = () => {
        const ageGrade = formData ? 12 : null;
        postCreateProfile(formData.name, ageGrade, formData.profilePhotoIdx);
        nav('/profile')
    }
    console.log(formData);
    return (
        <PageWrap color="#141414">
            <Header/>
            <ProfileGateContainerStyle>
                <div className="list-profiles-container">
                    <div>
                        <h1 className="header-text-label1">프로필 추가</h1>
                        <h2 className="header-text-label2">넷플릭스를 시청할 다른 사용자를 등록하시려면 프로필을 추가하세요.</h2>
                        <div className="profile-metadata">
                            <div className="profile-avatar">
                                <img className="profile-image" src={formData.profilePhotoUrl} alt="" />
                            </div>
                            <div className="profile-inputs-wrap">
                                <div className="profile-inputs">
                                    <input type="text" id="add-profile-name" placeholder="이름" onChange={(e) => {handleChangeName(e)}}/>
                                        <label for="add-profile-name" aria-label="이름"></label>
                                    <div className="option-wrapper">
                                        <div className="add-kids-option">
                                            <input type="checkbox" id="add-kids-profile" />
                                            <label onClick={handleClickKid} for="add-kids-profile"><Check className={formData.isKid ? null:"hidden"}/></label>
                                            <span className="add-kids-marker">어린이인가요?</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ProfileAddButtonWrap>
                            <span className="profile-manage">
                                <div className="profile-button1" onClick={handleOnSubmit}>
                                    다음
                                </div>
                            </span>
                            <span className="profile-manage">
                                <Link to="/profile" className="profile-button2">
                                    취소
                                </Link>
                            </span>
                        </ProfileAddButtonWrap>
                        
                    </div>
                    
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

        margin: 0;
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

export default AddProfile;