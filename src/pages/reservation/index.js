import React from "react";
import Navbar from "../../component/molecule/navbar/navbar";
import Footer from "../../component/molecule/footer/footer";
import img2 from "../../assets/img/img2.png";
import "./reservation.css";
import ButtonComponent from "../../component/molecule/button/button";
import {  Dropdown, Button,ButtonGroup} from "react-bootstrap";

export default function Reservation() {
  return (
    <div>
      <Navbar />
      <div className="wrap-main-detail">
        <div className="wrap-text-detail">
          <a href="/" className="text-detail">
            &lt;
          </a>
          <div className="text1-detail">Reservation</div>
        </div>
        <div className="wrap-galery-img">
          <div
            className="galery-img"
            style={{ backgroundImage: `url(${img2})` }}
          ></div>
          <div className="wrap-detail-vehicle-reservation">
            <div className="text-name-reservation"> Fixie - Gray</div>
            <div className="text-location-reservation">Yogyakarta</div>
            <div className="text-payment-reservation">No prepayment </div>
            <div className="wrap-btn-counter">
              <ButtonComponent
                type={"total2 btn-total-color-reservation"}
                text={"-"}
              />
              <div className="display-total-reservation">1</div>
              <ButtonComponent
                type={"total2 btn-total-color1-reservation"}
                text={"+"}
              />
            </div>
            <div className="text-reservation-date">Reservation Date:</div>
            <input className="input-reservation" placeholder="Select Date" />
            <Dropdown as={ButtonGroup} className="input-dropdown">
              <Button className="btn-dropdown" variant="none">1 day</Button>
              <Dropdown.Toggle
                split
                variant="none"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <ButtonComponent
                type={"price btn-total-color1-reservation"}
                text={"Pay now : Rp. 178.000"}
              />
      </div>
      <Footer />
    </div>
  );
}
