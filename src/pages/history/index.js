import React from "react";
import Navbar from "../../component/molecule/navbar/navbar";
import icon8 from "../../assets/img/icon8.png";
import icon9 from "../../assets/img/icon9.png";
import img7 from "../../assets/img/img13.png";
import CardComponent from "../../component/molecule/card/card";
import "./history.css";
import Footer from "../../component/molecule/footer/footer";


function History() {
  
  return (
    <div>
      <Navbar />
      <div className="wraper-section">
        <div className="col-lg-9">
          <div className="d-flex justify-content-between">
            <div className="col-lg-9 wrap-search">
              <input placeholder="search" className="col-lg-11 input-search" />
              <img src={icon8} className="img-search" alt="" />
            </div>

            <select
              className="select-filter-history col-lg-2"
              name="filter"
              id="filter"
              placeholder="filter"
            >
              <option value="" disabled selected hidden>
                Filter
              </option>
              <option value="type">Type</option>
              <option value="date added">Date Added</option>
              <option value="name">name</option>
              <option value="favorite added">Favorite added</option>
            </select>
          </div>
          <div className="col-12">
            <p className="text-date-history">Today</p>
            <p className="text-value-history">
              Please finish your payment for vespa for Vespa Rental Jogja
            </p>
            <p className="text-value-history">
              Your payment has been confirmed!
            </p>
            <p className="text-date-history">A week ago</p>
            <div className="col-lg-12 d-flex  mt-5">
              <div className="col-lg-3 ">
                <img src={img7} className="img-history" alt="" />
              </div>
              <div className="col-lg-8 ms-5 mt-3">
                <p className="text-name-history">Vespa Matic</p>
                <p className="text-date-card-history">Jan 18 to 21 2021</p>
                <p className="text-payment-history">Prepayment : Rp. 245.000</p>
                <p className="text-status-history success">Has been returned</p>
              </div>
            </div>
            <div className="col-lg-12 d-flex  mt-5">
              <div className="col-lg-3 ">
                <img src={img7} className="img-history" alt="" />
              </div>
              <div className="col-lg-8 ms-5 mt-3">
                <p className="text-name-history">Vespa Matic</p>
                <p className="text-date-card-history">Jan 18 to 21 2021</p>
                <p className="text-payment-history">Prepayment : Rp. 245.000</p>
                <p className="text-status-history success">Has been returned</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="mt-3 d-flex justify-content-center">
            <p className="text-title-card-history">New Arrival</p>
          </div>
          <div className="mt-3 ps-5 d-flex justify-content-center">
            <CardComponent
              destination={"Lamborghini"}
              city={"Lampung"}
              image={img7}
            />
          </div>
          <div className="mt-3 ps-5 d-flex justify-content-center">
            <CardComponent
              destination={"Lamborghini"}
              city={"Lampung"}
              image={img7}
            />
          </div>
          <a href="/viewall" className="d-flex justify-content-center ">
            View More
          </a>
          <div className="d-flex justify-content-center mt-3" >
            <img src={icon9} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default History;
