import React from "react";
import { useNavigate } from "react-router-dom";

export default function AfterLogin({ image }) {
const navigate = useNavigate()
const hendleLogout=()=>{
    localStorage.removeItem("imageProfile");
    localStorage.removeItem("token");
    navigate("/", { replace: true });
    window.location.reload();
  }
  return (
    <div className="d-flex">
      <div className="icon-image">
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
        <a className="dropdown-item" href="/profile">
          Profil
        </a>
        <button className="dropdown-item" onClick={hendleLogout}>Log out</button>
      </div>
    </div>
  );
}
