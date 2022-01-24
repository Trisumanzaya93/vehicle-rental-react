import React, { useEffect, useState } from "react";
import "./navbar.css";
import icon4 from "../../../assets/img/icon4.png";
import BeforeLogin from "./BeforeLogin";
import AfterLogin from "./AfterLogin";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar({ onClickBtn, onClickBtn1, image,goto }) {

  const allState = useSelector((state) => state);
  const {userinfo} = allState.getProfile
  const imageProfile = image ?? userinfo.image;
  const getToken = localStorage.getItem("token");
  const [isLogin, setIsLogin] = useState(getToken !== undefined);
  console.log(isLogin, imageProfile);

  useEffect(() => {
    console.log("getToken",getToken);
    if (getToken) {
      setIsLogin(true);
    }
  }, [isLogin, getToken]);
  return (
    <div className="header-navbar">
      <img src={icon4} className="icon4" alt="icon4" />
      <div className="wrap-btn-auth">
        <div className="option-navbar">
          <Link className="text-options-navbar" to={"/"}>
          Home
          </Link>
          <Link className="text-options-navbar" to={"/vehicletype"}>
          Vehicle type
          </Link>
          <Link className="text-options-navbar" to={"/history"}>
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
