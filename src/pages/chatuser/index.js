import React from "react";
import Navbar from "../../component/molecule/navbar/navbar";
import "./chatuser.css";
import img6 from "../../assets/img/img5.png"
import Footer from "../../component/molecule/footer/footer";
import { useNavigate } from "react-router-dom";

function Chatuser() {
  const navigate= useNavigate
  const handlerChatDetail=()=>{
    navigate("/detailchat")
  }
  return (
    <div>
      <Navbar />
      <div className="wrap-chat">
        <div className="d-flex ">
          <input
            type="search"
            id="form1"
            className="input-search-chat "
            placeholder="Search"
          />
          <select
            className="select-filter-chat"
            name="payment-methods"
            id="payment"
            placeholder="Sort By"
          >
            <option value="read date">Read Date</option>
            <option value="date added">Date Added</option>
            <option value="name">name</option>
          </select>
        </div>
        <div className="wrap-chat-user" onClick={handlerChatDetail}>
            <img src={img6} className="img-chat-user" alt=""/>
            <div className="chat-detail-user">
            <div className="d-flex justify-content-between">
                <p className="chat-user">user 1</p>
                <p className="chat-date">yesterday</p>
                </div>
                <p className="chat-user">Hey, is the vespa still available?</p>
            </div>
        </div>
        <div className="wrap-chat-user" onClick={handlerChatDetail}>
            <img src={img6} className="img-chat-user" alt=""/>
            <div className="chat-detail-user">
            <div className="d-flex justify-content-between">
                <p className="chat-user">user 1</p>
                <p className="chat-date">yesterday</p>
                </div>
                <p className="chat-user">Hey, is the vespa still available?</p>
            </div>
        </div>
        <div className="wrap-chat-user" onClick={handlerChatDetail}>
            <img src={img6} className="img-chat-user" alt=""/>
            <div className="chat-detail-user">
            <div className="d-flex justify-content-between">
                <p className="chat-user">user 1</p>
                <p className="chat-date">yesterday</p>
                </div>
                <p className="chat-user">Hey, is the vespa still available?</p>
            </div>
        </div>
        <div className="wrap-chat-user" onClick={handlerChatDetail}>
            <img src={img6} className="img-chat-user" alt=""/>
            <div className="chat-detail-user">
                <div className="d-flex justify-content-between">
                <p className="chat-user">user 1</p>
                <p className="chat-date">yesterday</p>
                </div>
                <p className="chat-user">Hey, is the vespa still available?</p>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Chatuser;
