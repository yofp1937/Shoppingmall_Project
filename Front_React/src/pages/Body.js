import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

//함수형 컴포넌트
function Body() {
    return (
    <div class="body">Body 입니다.
        <nav>
            <Link to="/Register">회원가입</Link>
            <Link to="/Login">로그인</Link>
        </nav>
        <Routes>
            <Route path="/Register" element={<Register />}>회원가입</Route>
            <Route path="/Login" element={<Login />}>로그인</Route>
        </Routes>
    </div>
    );
}

export default Body;