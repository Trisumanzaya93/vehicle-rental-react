import React, { useEffect, useState } from "react";
import "./navbar.css";
import icon4 from "../../../assets/img/icon4.png";
import BeforeLogin from "./BeforeLogin";
import AfterLogin from "./AfterLogin";
import { Link } from "react-router-dom";

function Navbar({ onClickBtn, onClickBtn1, image }) {
  const [isLogin, setIsLogin] = useState(false);
  const [imageProfile, setImageProfile] = useState(image);
  useEffect(() => {
    const getImageProfile = localStorage.getItem("imageProfile");
    const getToken = localStorage.getItem("token");
    if (getToken) {
      setIsLogin(true);
    }
    if (getImageProfile) setImageProfile(getImageProfile);
  }, [isLogin, imageProfile]);
  return (
    <div className="header-navbar">
      <img src={icon4} className="icon4" alt="icon4" />
      <div className="wrap-btn-auth">
        <div className="option-navbar">
          <Link className="text-options-navbar" to={"/"}>
          Home
          </Link>
          <Link className="text-options-navbar" to={"/"}>
          Vehicle type
          </Link>
          <Link className="text-options-navbar" to={"/"}>
            History
          </Link>
          <Link className="text-options-navbar" to={"/"}>
            About
          </Link>
        </div>
        {imageProfile ? (
          <AfterLogin image={imageProfile} />
        ) : (
          <BeforeLogin onClickBtn={onClickBtn} onClickBtn1={onClickBtn1} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
