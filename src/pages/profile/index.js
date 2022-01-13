import React, { Component } from "react";
import "./profile.css";
import axios from "axios";
import ButtonComponent from "../../component/molecule/button/button";
import Navbar from "../../component/molecule/navbar/navbar";
import Footer from "../../component/molecule/footer/footer";

export default class Profile extends Component {
  state = {
    username: "",
    email: "",
    phone: "",
    image: "",
    displayname: "",
    birthday: "",
    created_at: "",
    address: "",
  };

  componentDidMount() {
    const URL = "http://localhost:8000/api/users/profile";
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

          for (var i = 0; i < newstate.length; i++) {
            result = newstate[i];
          }
          let tempBirthday = new Date(result.birthday);
          let dateBirthday =
            tempBirthday.getDate() +
            "-" +
            parseInt(tempBirthday.getMonth() + 1) +
            "-" +
            tempBirthday.getFullYear();
          let tempCreated = new Date(result.created_at);
          let timeCreated = tempCreated.getFullYear();
          this.setState({
            username: result.username,
            email: result.email,
            phone: result.phone,
            image: result.image,
            displayname: result.displayname,
            birthday: dateBirthday,
            created_at: timeCreated,
            address: result.address,
          });
          console.log(this.state);
        }
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div>
        <Navbar />
        <main className="wrap-main">
          <h1 className="text">Profile</h1>
          <div className="wrap-profil">
            <div
              className="image-profil"
              style={{ backgroundImage: `url(${this.state.image})` }}
            >
              <div className="update-image-wrap">
                {/* <DropdownButton
                  variant="warning"
                  className="update-image fa fa-pencil fa-2x"
                  size="md"
                >
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <input className="dropdown-item" type="file" href="/" />
                </DropdownButton> */}
                <div class="dropdown">
                  <button
                    class="btn update-image  fa fa-pencil fa-2x"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <input className="dropdown-item" type="file" href="/" />
                    
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-profil">{this.state.username}</h1>
            <div className="text-detail-profil">
              {this.state.email}
              <br />
              {this.state.phone}
              <br />
              Has been active since {this.state.created_at}
            </div>
          </div>
          <form className="contact">
            <div className="gender">
              <div className="wrap-gender">
                <input
                  type="radio"
                  className="input-gander "
                  name="jenis_kelamin"
                  value="isi_radio1"
                />
                <label htmlFor="Male" className="text-gender">
                  Male
                </label>
              </div>
              <div className="wrap-gender1">
                <input
                  type="radio"
                  className="input-gander "
                  name="jenis_kelamin"
                />
                <label htmlFor="Female" className="text-gender1">
                  Female
                </label>
              </div>
            </div>
            <div className="text-contact">Contact</div>
            <div className="text-detail-contact">Email address :</div>
            <input
              className="text-detail-contact1"
              placeholder={this.state.email}
            />
            <div className="text-detail-contact">Address :</div>
            <input
              className="text-detail-contact1"
              placeholder={this.state.address}
            />
            <div className="text-detail-contact">Mobile Number :</div>
            <input
              className="text-detail-contact1"
              placeholder={this.state.phone}
            />
            <div className="text-contact">Identify</div>
            <div className="wrap-identify">
              <div className="text-detail-contact3">Display Name:</div>
              <div className="text-detail-contact31">DD/MM/YY :</div>
            </div>
            <div className="wrap-identify">
              <input
                className="text-detail-contact2"
                placeholder={this.state.displayname}
              />
              <input
                className="text-detail-contact2"
                placeholder={this.state.birthday}
              />
            </div>
            <div className="wraper-btn">
              <ButtonComponent
                type={"save btn-save-color"}
                text={"Save Change"}
              />
              <ButtonComponent
                type={"save btn-save-color1"}
                text={"Edit Password"}
              />
              <ButtonComponent type={"save btn-save-color2"} text={"Cancel"} />
            </div>
          </form>
        </main>
        <Footer />
      </div>
    );
  }
}
