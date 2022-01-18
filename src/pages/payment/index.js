import React from "react";
import Navbar from "../../component/molecule/navbar/navbar";
import "./payment.css";
import ButtonComponent from "../../component/molecule/button/button";
import Footer from "../../component/molecule/footer/footer";
import { useSelector } from "react-redux";

export default function Payment() {
  const allState = useSelector((state) => state);
  const vehicle = allState.detailVehicle.datavehicle;
  const reservetion = allState.setReservation.reservation;
  const {userinfo} = allState.getProfile

  console.log('lala',reservetion,vehicle);
  return (
    <div>
      <Navbar />
      <div className="wrap-main-detail">
        <div className="wrap-text-detail">
          <a href="/" className="text-detail">
            &lt;
          </a>
          <div className="text1-detail">Payment</div>
        </div>
        <div className="wrap-galery-img">
          <div
            className="galery-img-payment"
            style={{ backgroundImage: `url(${vehicle.photo})` }}
          ></div>
          <div className="wrap-detail-vehicle">
            <div className="text-name-payment">{vehicle.vehiclename}</div>
            <div className="text-location-payment">{vehicle.location}</div>
            <div className="text-payment-payment">No prepayment </div>
            <div className="text-booking-payment">#{reservetion.bookingCode}</div>
            <ButtonComponent
              type={"booking btn-total-color1"}
              text={"Copy booking code"}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="quantity">
            <p className="text-quantity">Quantity : </p>
            <p>{reservetion.quantityTotal} bikes</p>
          </div>
          <div className="reservation-date">
            <p className="text-quantity">Reservation Date :</p>
            <p>{reservetion.startDate}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="order-detail">
            <p className="text-quantity">Order details :</p>
            <p>1 bike : Rp. 78.000</p>
            <p>1 bike : Rp. 78.000</p>
            <p className="text-quantity">Total : Rp {reservetion.totalPrice}</p>
          </div>
          <div className="identify-payment">
            <p className="text-quantity">Identity :</p>
            <p>{`${userinfo.displayname} (${userinfo.phone})`}</p>
            <p>{userinfo.email}</p>
          </div>
        </div>
        <div className="wrap-payment-code">
          <p className="text-payment-code">Payment code :</p>
          <div className="code-payment-code">
            <p className="text-booking-payment-small">#{reservetion.paymentCode}</p>
            <ButtonComponent
              type={"booking-small btn-chat-admin-color"}
              text={"Copy"}
            />
          </div>
          <select
            className="select-payment-methods code-payment-code"
            name="payment-methods"
            id="payment"
          >
            <option value="Cash">Cash</option>
            <option value="Transfer">Transfer</option>
          </select>
        </div>
        <ButtonComponent
          type={"price btn-total-color1-reservation"}
          text={"Pay before : 59:30"}
        />
      </div>
      <Footer />
    </div>
  );
}
