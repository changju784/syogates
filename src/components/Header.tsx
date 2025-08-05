import React from "react";

const Header: React.FC = () => (
    <header id="header">
        <span>
            <img src="images/logo.svg" alt="" className="mx-auto max-w-[30%]" />
        </span>
        <h1>S 요가테스</h1>
        <p>
            건강한 움직임의 시작, S-YOGATES<br />
            요가 · 필라테스 · 자이로토닉, 몸과 마음을 위한 공간
        </p>
    </header >
);

export default Header;
