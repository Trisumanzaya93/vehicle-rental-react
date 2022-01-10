import React from "react";
import "./navbarAfterLogin.css";
import icon4 from "../../../assets/img/icon4.png";
import icon5 from "../../../assets/img/icon5.png";
import img6 from "../../../assets/img/img6.png";
import { Button } from "react-bootstrap";

function NavbarAfterLogin() {
  return (
    <div className="header1">
      <img src={icon4} className="icon4" alt="icon4" />
      <div className="wrap-btn-auth1">
        <div className="option-header1">
          <Button variant="link" className="text-options-header1">
            Home
          </Button>
          <Button variant="link" className="text-options-header1">
            Vehicle type
          </Button>
          <Button variant="link" className="text-options-header1">
            History
          </Button>
          <Button variant="link" className="text-options-header1">
            About
          </Button>
        </div>
        <div class="icon-image" style={{ backgroundImage: `url(${icon5})` }}>
          <div class="massages">1</div>
        </div>
        <div
          class="icon-profil"
          style={{ backgroundImage: `url(${img6})` }}
        ></div>
      </div>
    </div>
  );
}

export default NavbarAfterLogin;
