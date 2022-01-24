import React, { useState } from "react";
import Navbar from "../../component/molecule/navbar/navbar";
import "./payment.css";
import ButtonComponent from "../../component/molecule/button/button";
import Footer from "../../component/molecule/footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { createHistoryAction } from "../../redux/actions/history";
import { setReservation } from "../../redux/actions/vehicle";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate()
  const allState = useSelector((state) => state);
  const dispatch = useDispatch();
  const vehicle = allState.detailVehicle.datavehicle;
  const reservetion = allState.setReservation.reservation;
  const {userinfo} = allState.getProfile

  // console.log('lala',reservetion,vehicle);
  // console.log(allState);
  const [reservationDetail, setReservationDetail] = useState(reservetion);

  const handleChange = (event) => {
    const temp = event.target.value;
    setReservationDetail({
      ...reservationDetail,
      status: temp,
    });
    dispatch(setReservation({ ...reservationDetail, status : temp }));
  };
  // console.log("disiniii itu now",reservetion);

  const paymentHandler = () => {
    const body = {
    userId: reservetion.userId,
    vehicleId: reservetion.vehicleId,
    quantityTotal: reservetion.quantityTotal,
    startDate: reservetion.startDate,
    returnDate: reservetion.returnDate,
    bookingCode: reservetion.bookingCode,
    paymentCode: reservetion.paymentCode,
    status: reservetion.status,
    total_price : reservetion.totalPrice
      // bookingCode: "BE84220119175854",
      // paymentCode: "PY84220119175854",
      // quantityTotal: 2,
      // returnDate: "2022-01-22",
      // selectedDay: 3,
      // startDate: "2022-01-19",
      // status: "Transfer",
      // totalPrice: 1200000,
      // userId: 84,
      // vehicleId: 4
    };

    console.log(body);
    dispatch(createHistoryAction(body)).then((result) => {
      console.log(result);
            navigate("/history", { replace: true })

    }).catch((err) => { console.log(err);});
};
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
            <p>{reservetion.quantityTotal} bike : Rp. {vehicle.price} /vehicle</p>
            <p>Lama peminjaman : {reservetion.selectedDay} day</p>
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
            onChange={handleChange}
          >
            <option value="Cash">Cash</option>
            <option value="Transfer">Transfer</option>
          </select>
        </div>
        <ButtonComponent
          type={"price btn-total-color1-reservation"}
          text={"Pay before : 59:30"}
          onClickBtn={paymentHandler}
        />
      </div>
      <Footer />
    </div>
  );
}
