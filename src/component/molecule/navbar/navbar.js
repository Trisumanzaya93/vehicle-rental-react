import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Button } from "react-bootstrap";
import icon4 from "../../../assets/img/icon4.png";
import BeforeLogin from "./BeforeLogin"
import AfterLogin from "./AfterLogin";


function Navbar({onClickBtn,onClickBtn1, image}) {
  
  const [isLogin, setIsLogin] = useState(false);
  const [imageProfile, setImageProfile] = useState(image);
  useEffect(() => {
    const getImageProfile = localStorage.getItem("imageProfile");
    const getToken = localStorage.getItem("token");
    if(getToken){
      setIsLogin(true);
    }
    if(getImageProfile) setImageProfile(getImageProfile);
    
  }, [isLogin, imageProfile])
  return (
    <div className="header">
      <img src={icon4} className="icon4" alt="icon4" />
      <div className="wrap-btn-auth">
        <div className="option-header">
          <Button variant="link" className="text-options-header">
            Home
          </Button>
          <Button variant="link" className="text-options-header">
            Vehicle type
          </Button>
          <Button variant="link" className="text-options-header">
            History
          </Button>
          <Button variant="link" className="text-options-header">
            About
          </Button>
        </div>
        {
          imageProfile ? <AfterLogin image={imageProfile}/> : <BeforeLogin onClickBtn={onClickBtn} onClickBtn1={onClickBtn1}/>
        }
      </div>
    </div>
  );
}

export default Navbar;
