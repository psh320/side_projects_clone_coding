import React from "react";
import Link from 'react-router-dom';
import { ReactComponent as Lang} from "../assets/lang.svg";
import { ReactComponent as ThreeLine} from "../assets/three_line.svg";
import { ReactComponent as UserShape} from "../assets/user_shape.svg";
import { ReactComponent as Logo} from "../assets/logo.svg";

const Header = () => {
    return(
        <div className="nav-bar">
            <div className="flex1">
                <div className="space1">
                    <a className="logo-image" href="#">
                        <div>
                            <Logo />
                        </div>
                    </a>
                    
                </div>
            </div>
            <div className="flex2">
                <div className="option-box">

                        <button className="option-button">
                            <span className="option-text">숙소</span>
                        </button>
                        <button className="option-button">
                            <span className="option-text">체험</span>
                        </button>

                    <div>
                        <a href="#" className="no-underline text1">
                            <div className="option-text">
                                온라인 체험
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex3">
                <div className="login-box">
                    <div className="etc">
                        <a href="#" className="host no-underline">
                            <div>호스트 되기</div>
                        </a>
                        <button className="lang-button">
                            <div><Lang /></div>
                        </button>
                        
                    </div>
                    <div>
                        <div>
                            <button type="button" className="login">
                                <div>
                                    <ThreeLine />
                                </div>
                                <div className="_retf">
                                    <UserShape width="30" height="30" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Header;