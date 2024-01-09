import React from "react";
import "../css/Header.css";
import logo from "../img/logo.png";
import search from "../img/search.png"

//함수형 컴포넌트
function Header() {
    return (
    <div class="header">
        <img src={logo}></img>
        <div class="search_div">
            <input type="text" class="search_input" placeholder="검색어를 입력하세요."></input>
            <button type="button" class="search_btn">검색</button>
        </div>
    </div>
    );
}

export default Header;