import React,{useState, useEffect} from "react";
import "./HouseDetail.css";
import Header from "../Header"
const HouseDetail = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const [isSearch, setIsSearch] = useState(false);


    return (
        <div>
            <div className="header-rooms">
                <Header pageType={"rooms"} onSelectSearch={setIsSearch} setScrollPos={setScrollPos}/>
            </div>
        </div>
    );
}

export default HouseDetail;