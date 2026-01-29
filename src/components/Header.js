import React from "react";
import { LOGO } from "../utils/Constants";

const Header = () => {
    return (
        <div className="header-class">
            <img src={LOGO} alt="Restaurant Logo" style={{ height: "80px", margin: "10px" }} />

            <ul>
                <li><a href="home">Home</a></li>
                <li><a href="news">News</a></li>
                <li><a href="contact">Contact</a></li>
                <li><a href="about">About</a></li>
            </ul>
        </div>
    )
}

export default Header;
