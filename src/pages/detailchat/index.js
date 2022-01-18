import React from "react";
import Navbar from "../../component/molecule/navbar/navbar";
import img12 from "../../assets/img/img12.png";
import img6 from "../../assets/img/img6.png";
import icon7 from "../../assets/img/icon7.png";
import "./detailchat.css";
import Footer from "../../component/molecule/footer/footer";

function Detailchat() {
  return (
    <div>
      <Navbar />
      <div className="wrap-main-detail">
        <div className="wrap-text-detail">
          <a href="/" className="text-detail">
            &lt;
          </a>
          <div className="text1-detail">Rental 1</div>
        </div>
        <div className="d-flex">
          <img src={img12} className="img-vehicle-chat" alt="" />
          <div className="wrap-text-chat">
            <div className="text-name-chat"> Fixie - Gray</div>
            <div className="text-location-chat">Yogyakarta</div>
            <div className="text-available-chat">available </div>
            <div className="text-price-chat">Rp. 78.000/day </div>
          </div>
        </div>
        <div className="wrap-text-massage">
          <div className="col-sm-12 d-flex justify-content-end">
            <div className="text-massage text-massage-color">
              <p>How many vespa left?</p>
            </div>
            <div className="d-flex justify-content-center align-items-start h-1000px ">
              <img src={img6} className="img-text-chat" alt="" />
            </div>
          </div>
        </div>
        <div className="wrap-text-massage">
          <div className="col-sm-12 d-flex">
            <img src={img6} className="img-text-chat" alt="" />
            <div className="text-massage text-massage-color1">
              <p>How many vespa left? </p>
            </div>
            <div className="d-flex justify-content-center align-items-start h-1000px "></div>
          </div>
        </div>
        <div className="d-flex justify-content-center m-5">
            <div className="col-sm-7 d-flex">
                <p className="text-sugestion3">Pop up suggestion :</p>
                <div className="text-sugestion">Thank you</div>
                <div className="text-sugestion1">Ok</div>
            </div>
        </div>
        <div className="col-sm-11 d-flex justify-content-between input-massage">
            <input placeholder="Type a message" className="input-text-massage"/>
            <img src={icon7} className="img-icon-massage" alt=""/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Detailchat;
