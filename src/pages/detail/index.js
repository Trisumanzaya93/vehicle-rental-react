import React, { Component } from "react";
import "./detail.css";
import icon6 from "../../assets/img/icon6.png";
import axios from "axios";
import ButtonComponent from '../../component/molecule/button/button'
import Navbar from "../../component/molecule/navbar/navbar";
import Footer from "../../component/molecule/footer/footer";

export default class Detail extends Component {
  state = {
    counter: 0,
    category: "",
    location: "",
    photo: "",
    price: "",
    status: "",
    stock: "",
    vehiclename: "",
    isSucces: false,
  };

  onClickPrevious = () => {
    const number = this.state.counter;
    if (this.state.counter <= 0) {
      this.setState({
        counter: number,
      });
    } else {
      this.setState({
        counter: number - 1,
      });
    }
    /**
     * state = {
     *  ...state,
     * counter: number - 1
     * }
     */
  };
  onClickNextCounter = () => {
    const number = this.state.counter;
    if (this.state.stock === number) {
      this.setState({
        counter: number,
      });
    } else {
      this.setState({
        counter: number + 1,
      });
    }
  };

  getProfile() {
    const URL = "http://localhost:8000/api/vehicle/24";
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    axios
      .get(URL, {
        headers: {
          "x-access-token": token,
        },
      })
      .then((response) => {
        if (response.data.statusCode === 200) {
          let newstate = response.data.data;
          var result = {};
          // console.log(newstate);
          for (var i = 0; i < newstate.length; i++) {
            result = newstate[i];
          }
          this.setState({
            category: result.category,
            location: result.location,
            photo: result.photo,
            price: result.price,
            status: result.status,
            stock: result.stock,
            vehiclename: result.vehiclename,
            isSucces: true,
          });
          console.log("ini", result);
        }
      })
      // confirm( error.response.data.status)
      .catch((error) =>
        alert(error.response.data.status + " silahkan  ke halaman login")
      );
  }
  componentDidMount() {
    this.getProfile();
  }

  render() {
    console.log("state is:", this.state.isSucces);
    return (
      <div>
        <Navbar/>
        <main className="wrap-main-detail">
          <div className="wrap-text-detail">
            <a href="/" className="text-detail">
              &lt;
            </a>
            <div className="text1-detail">Detail</div>
          </div>
          <div className="wrap-galery-img">
            <div
              className="galery-img"
              style={{ backgroundImage: `url(${this.state.photo})` }}></div>
            <div className="wrap-detail-vehicle">
              <div className="text-name">{this.state.vehiclename} </div>
              <div className="text-location">{this.state.location}</div>
              <div className="text-available">{this.state.status}</div>
              <div className="text-payment">No prepayment </div>
              <div className="text-detail">Capacity : 1 person </div>
              <div className="text-detail">Type : {this.state.category}</div>
              <div className="text-detail">Reservation before 2 PM </div>
              <div className="text-price">Rp. {this.state.price}/day </div>
            </div>
          </div>
          <div className="wrap-prev">
            <div className="wrap-img-prev">
              <a href="/" className="prev">
                &lt;
              </a>
              <div
                className="galery-img1"
                style={{ backgroundImage: `url(${this.state.photo})` }}
              ></div>
              <div
                className="galery-img2"
                style={{ backgroundImage: `url(${this.state.photo})` }}
              ></div>
              <a href="/" className="prev">
                &gt;
              </a>
            </div>
            <div className="wrap-img-prev1">
						<ButtonComponent type={"total btn-total-color"} text={"-"} onClickBtn={this.onClickPrevious}/>
              <div className="display-total">{this.state.counter}</div>
							<ButtonComponent type={"total btn-total-color1"} text={"+"} onClickBtn={this.onClickNextCounter}/>
            </div>
          </div>
          <div className="wrap-btn-order">
					<ButtonComponent type={"chat-admin btn-chat-admin-color"} text={"Chat Admin"}/>
					<ButtonComponent type={"chat-admin btn-chat-admin-color1"} text={"Reservation"}/>
            <button className="btn-like">
              <img
                src={icon6}
                style={{ width: "52px", height: "52px", marginRight: "5px" }}
                alt=""
              />{" "}
              Like
            </button>
          </div>
        </main>
        <Footer/>
        
      </div>
    );
  }
}
