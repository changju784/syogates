import React from "react";

const Nav: React.FC = () => (
    <nav id="nav">
        <ul>
            <li><a href="#about" className="active">학원 소개</a></li>
            <li><a href="#director">원장 약력</a></li>
            <li><a href="#location">오시는 길</a></li>
        </ul>
    </nav>
);

export default Nav;