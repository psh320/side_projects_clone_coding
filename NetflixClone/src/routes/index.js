import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexPage from "../pages"
import HomePage from "../pages/home"
import LoginPage from "../pages/login"

import Regform from "../pages/signup/Regform"
import Registration from "../pages/signup/Registration"
import Signup from "../pages/signup"
import Password from "../pages/signup/Password"
import Planform from "../pages/signup/Planform"

import Browse from "../pages/browse"
import Latest from "../pages/browse/Latest"
import Bookmark from "../pages/browse/Bookmark"

import Profile from "../pages/profile"
import AddProfile from "../pages/profile/AddProfile"
import ManageProfile from "../pages/profile/ManageProfile"
import EditProfile from "../pages/profile/EditProfile"

import NoMatchPage from "../pages/noMatch"
import Modal from "../components/common/Modal";
import Watch from "../pages/watch"

const RootRoute = () => {

    return (
        <BrowserRouter>
            <Routes>

                {/* 기본 루트페이지 */}
                <Route path='/' element={<IndexPage />} key="index" />

                {/* 추가되는 페이지 */}
                <Route path='/home' element={<HomePage />} key="home" />
                <Route path='/login' element={<LoginPage />} key="login" />

                {/* 가입관련 페이지 */}
                <Route path='/signup/registration' element={<Registration />} key="registration" />
                <Route path='/signup/regform' element={<Regform />} key="regform" />
                <Route path='/signup' element={<Signup />} key="signup" />
                <Route path='/signup/password' element={<Password />} key="password" />
                <Route path='/signup/planform' element={<Planform />} key="planform" />

                {/* 로그인 후 페이지들 */}
                <Route path='/profile' element={<Profile />} key="profile" />
                <Route path='/profile/add' element={<AddProfile />} key="addprofile" />
                <Route path='/profile/manage' element={<ManageProfile />} key="manageprofile" />
                <Route path='/profile/edit' element={<EditProfile />} key="editprofile" />

                <Route path='/browse' element={<Browse />} key="browse" />
                <Route path='/browse/latest' element={<Latest />} key="latest" />
                <Route path='/browse/bookmark' element={<Bookmark />} key="bookmark" />

                <Route path='/watch' element={<Watch />} key="watch" />
                {/* 경로가 유효하지 않을 때 */}
                <Route path='*' element={<NoMatchPage />} key="noMatch" />

            </Routes>
            <Modal />
        </BrowserRouter>
    )
}


export default RootRoute