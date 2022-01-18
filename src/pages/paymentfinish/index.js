import React from "react";
import Navbar from "../../component/molecule/navbar/navbar";
import ButtonComponent from "../../component/molecule/button/button";
import "./paymentfinish.css";
import Footer from "../../component/molecule/footer/footer";

export default function Paymentfinish() {
  return (
    <div>
      <Navbar />
      <div className="jumbotron jumbotron-payment-finish text-white">
        <div className="wraper-text-fgp">
          <div className="wrap-text-jp">
            <p className="text-jumbotron-payment">Fixie - Gray Only</p>
            <p className="text-jumbotron-location-payment">Yogyakarta</p>
            <p className="text-jumbotron-payment-methode">No Prepayment</p>
          </div>
          <div className="wraper-input-fgp">
            <ButtonComponent
              type={"send-link btn-total-color2-reservation"}
              text={"Pay before : 59:30"}
            />
          </div>
        </div>
      </div>
      <div className="wrap-code">
        <div className="col-sm-5">
          <p className="text-detail">Payent Code :</p>
          <div className="code-payment-code">
            <p className="text-booking-payment-small">#FG1209878YZS</p>
            <ButtonComponent
              type={"booking-small btn-chat-admin-color"}
              text={"Copy"}
            />
          </div>
        </div>
        <div className="col-sm-5">
          <p className="text-detail">Booking Code :</p>
          <div className="code-payment-code ">
            <p className="text-booking-payment-small">#FG1209878YZS</p>
            <ButtonComponent
              type={"booking-small btn-chat-admin-color"}
              text={"Copy"}
            />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center text-payment-detail-order  ">
        Detail Order :
      </div>
      <div className="wrap-detail-order">
        <div className="d-flex justify-content-between">
          <div className="quantity">
            <p className="text-quantity">Quantity : </p>
            <p>2 bikes</p>
          </div>
          <div className="reservation-date">
            <p className="text-quantity">Reservation Date :</p>
            <p>Jan 18 - 20 2021</p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="order-detail">
            <p className="text-quantity">Order details :</p>
            <p>1 bike : Rp. 78.000</p>
            <p>1 bike : Rp. 78.000</p>
            <p className="text-quantity">Total : 178.000</p>
          </div>
          <div className="identify-payment">
            <p className="text-quantity">Identity :</p>
            <p>Samantha Doe (+6290987682)</p>
            <p>samanthadoe@mail.com</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
