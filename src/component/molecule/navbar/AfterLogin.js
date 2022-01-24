import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AfterLogin({ image }) {
const navigate = useNavigate()
const hendleLogout=()=>{
    localStorage.removeItem("token");
    navigate("/", { replace: true });
    window.location.reload();
  }
  const hendlemassage = () =>{
    navigate("/chatuser", { replace: true });
  }
  return (
    <div className="d-flex">
      <div className="icon-image" onClick={hendlemassage}>
        <div className="massages">1</div>
      </div>
      <div className="icon-profil"></div>
      <a
        className="btn icon-profil dropdown-toggle"
        style={{ backgroundImage: `url(${image})` }}
        href="/"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
      </a>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link to={"/profile"} className="dropdown-item" >
          Profil
        </Link>
        <button className="dropdown-item" onClick={hendleLogout}>Log out</button>
      </div>
    </div>
  );
}
