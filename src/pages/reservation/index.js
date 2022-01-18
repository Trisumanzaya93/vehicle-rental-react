import React, { useState } from "react";
import Navbar from "../../component/molecule/navbar/navbar";
import Footer from "../../component/molecule/footer/footer";
import "./reservation.css";
import ButtonComponent from "../../component/molecule/button/button";
import { Dropdown, Button, ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setReservation } from "../../redux/actions/vehicle";
import {useNavigate} from "react-router-dom"
import dayjs from "dayjs";

export default function Reservation() {
  const navigate =useNavigate()
  const dispatch = useDispatch();
  const allState = useSelector((state) => state);
  const vehicle = allState.detailVehicle.datavehicle;
  const reservetion = allState.setReservation.reservation;
  console.log(vehicle, reservetion);

  const [reservationDetail, setReservationDetail] = useState(reservetion);
  const [totalPrice, setTotalPrice] = useState(
    vehicle.price * reservationDetail.quantityTotal
  );

  const handleReservation = () => {
    setReservationDetail({ ...reservationDetail, totalPrice });
    dispatch(setReservation({ ...reservationDetail, totalPrice }));
    navigate("/payment")
  };

  const calculatePrice = (counter,selectedDay) => {
    const calTotalPrice = vehicle.price * counter* selectedDay;
    setTotalPrice(calTotalPrice);
  };

  const onClickPrevious = () => {
    let counter = reservationDetail.quantityTotal;
    const newCounter = counter - 1 < 1 ? 1 : counter - 1;
    setReservationDetail({ ...reservationDetail, quantityTotal: newCounter });
    calculatePrice(newCounter, reservationDetail.selectedDay);
  };
  const addCounter = () => {
    let counter = reservationDetail.quantityTotal;
    const stock = vehicle.stock;
    const newCounter = counter + 1 <= stock ? counter + 1 : stock;
    setReservationDetail({ ...reservationDetail, quantityTotal: newCounter });
    calculatePrice(newCounter, reservationDetail.selectedDay);
  };

  const returnDateDropdown = (selected) => {
    const returnDate = dayjs(reservationDetail.startDate)
      .add(parseInt(selected), "day")
      .format("YYYY-MM-DD");

    setReservationDetail({
      ...reservationDetail,
      returnDate,
      selectedDay: selected
    });
    calculatePrice(reservationDetail.quantityTotal, selected);
  };

  const handleChange = (event) => {
    const temp = event.target.value;
    setReservationDetail({
      ...reservationDetail,
      startDate: temp,
    });
    console.log(temp);
  };
 
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
            style={{ backgroundImage: `url(${vehicle.photo})` }}
          ></div>
          <div className="wrap-detail-vehicle-reservation">
            <div className="text-name-reservation"> {vehicle.vehiclename}</div>
            <div className="text-location-reservation">{vehicle.location}</div>
            <div className="text-payment-reservation">No prepayment </div>
            <div className="wrap-btn-counter">
              <ButtonComponent
                type={"total2 btn-total-color-reservation"}
                text={"-"}
                onClickBtn={onClickPrevious}
              />
              <div className="display-total-reservation">
                {reservationDetail.quantityTotal}
              </div>
              <ButtonComponent
                type={"total2 btn-total-color1-reservation"}
                text={"+"}
                onClickBtn={addCounter}
              />
            </div>
            <div className="text-reservation-date">Reservation Date:</div>
            <input
              className="input-reservation"
              onChange={handleChange}
              type={"date"}
              placeholder="Select Date"
            />
            <Dropdown
              as={ButtonGroup}
              className="input-dropdown"
              onSelect={(selected) => {
                returnDateDropdown(parseInt(selected));
              }}
            >
              <Button className="btn-dropdown" variant="none">
                1 day
              </Button>
              <Dropdown.Toggle split variant="none" id="dropdown-split-basic" />

              <Dropdown.Menu>
                <Dropdown.Item on eventKey="1">
                  1 day
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">2 day</Dropdown.Item>
                <Dropdown.Item eventKey="3">3 day</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <ButtonComponent
          type={"price btn-total-color1-reservation"}
          text={"Pay now : Rp. " + totalPrice}
          onClickBtn={handleReservation}
        />
      </div>
      <Footer />
    </div>
  );
}
