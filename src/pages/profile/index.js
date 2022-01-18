import React, { Component } from "react";
import "./profile.css";
import axios from "axios";
import ButtonComponent from "../../component/molecule/button/button";
import Navbar from "../../component/molecule/navbar/navbar";
import Footer from "../../component/molecule/footer/footer";
import dayjs from "dayjs";

export default class Profile extends Component {
  constructor() {
    super()
    this.state = { 
      id:null,
      username: "",
    email: "",
    phone: "",
    image: "",
    displayname: "",
    birthday: "",
    created_at: "",
    address: "",
    isDisableEdit:true
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeAddress = this.handleChangeAddress.bind(this)
    this.handleChangePhone = this.handleChangePhone.bind(this)
    this.handleChangeDisplayName = this.handleChangeDisplayName.bind(this)
    this.handleChangeBirthday = this.handleChangeBirthday.bind(this)
    this.handleSumbitProfile = this.handleSumbitProfile.bind(this)
  }

  

  
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
          // let tempBirthday = (result.birthday);
          // let dateBirthday =
          //   tempBirthday.getDate() +
          //   "-" +
          //   parseInt(tempBirthday.getMonth() + 1) +
          //   "-" +
          //   tempBirthday.getFullYear();
          let tempCreated = new Date(result.created_at);
          let timeCreated = tempCreated.getFullYear();
          this.setState({
            id: result.id,
            username: result.username,
            email: result.email,
            phone: result.phone,
            image: result.image,
            displayname: result.displayname,
            birthday: dayjs(result.birthday).format('DD-MM-YYYY'),
            created_at: timeCreated,
            address: result.address,
          });
          console.log(this.state);
        }
      })
      .catch((error) => console.error(error));
  }

  handleEditbtn= (e) =>{
    this.setState({isDisableEdit: !this.state.isDisableEdit})
  }
  // handleSumbitProfile = (e) => {
  //   e.preventDefault();
  //       console.log(e);
  // }
  handleChangeEmail(event) {
    this.setState({ email: event.target.value ?? this.state.email })
  }
  handleChangeAddress(event) {
    this.setState({ address: event.target.value ??this.state.address })
  }
  handleChangePhone(event) {
    this.setState({ phone: event.target.value ?? this.state.phone })
  }
  handleChangeDisplayName(event) {
    this.setState({ displayname: event.target.value ?? this.state.displayname })
  }
  handleChangeBirthday(event) {
    this.setState({ birthday: event.target.value ?? this.state.birthday })
   }

   handleImageChange = (event) =>{
    event.preventDefault();

    let file = event.target.files[0];
    
      const formData = new FormData();
      formData.append("image", file);
    const URL = "http://localhost:8000/api/users";
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
       axios
           .patch(URL,  
            formData, {
             headers: {
               "x-access-token": token,
             }
           })
           .then((response) => {
             console.log(response);
               if(response.data.statusCode === 200){
                 
                    this.setState({
                      ...response.data.data
                  });
                   alert("update succes")
               }else{
                   alert(response.data.massage);
               }
           })
           .catch((err) => console.error(err));
   }
   

   handleSumbitProfile(event) {
    event.preventDefault()
     const body = {
      username: this.state.username,
    email: this.state.email,
    phone: this.state.phone,
    displayname: this.state.displayname,
    birthday: dayjs(this.state.birthday).format('YYYY-MM-DD'),
    address: this.state.address
     }
     console.log(body);
     const URL = "http://localhost:8000/api/users";
     const token = JSON.parse(localStorage.getItem("token"));
     console.log(token);
        axios
            .patch(URL,  
              body, {
              headers: {
                "x-access-token": token,
              }
            })
            .then((response) => {
              console.log(response);
                if(response.data.statusCode === 200){
                    alert("update succes")
                }else{
                    alert(response.data.massage);
                }
            })
            .catch((err) => console.error(err));
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
                <div className="dropdown" >
                  <button
                    className="btn update-image  fa fa-pencil fa-2x"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    
                  >
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <input className="dropdown-item" type="file" onChange={(e) => this.handleImageChange(e)} />
                    
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
          <form className="contact" onSubmit={this.handleSumbitProfile}>
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
            <div className="col-lg 10 ">
              <p className="text-contact">Contact</p>
            </div>
            <div className="text-detail-contact">Email address :</div>
            <input
              className="text-detail-contact1"
              placeholder={this.state.email}
              disabled={this.state.isDisableEdit}
              name="email"
              onChange={this.handleChangeEmail}
            />
            <div className="text-detail-contact">Address :</div>
            <input
              className="text-detail-contact1"
              placeholder={this.state.address}
              disabled={this.state.isDisableEdit}
              name="address"
              onChange={this.handleChangeAddress}
            />
            <div className="text-detail-contact">Mobile Number :</div>
            <input
              className="text-detail-contact1"
              placeholder={this.state.phone}
              disabled={this.state.isDisableEdit}
              name="phone"
              onChange={this.handleChangePhone}
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
                disabled={this.state.isDisableEdit}
                name="displayname"
                onChange={this.handleChangeDisplayName}
              />
              <input
                className="text-detail-contact2"
                placeholder={this.state.birthday}
                disabled={this.state.isDisableEdit}
                onChange={this.handleChangeBirthday}
              />
            </div>
            <div className="wraper-btn">
              <ButtonComponent
                type={"save btn-save-color"}
                text={"Save Change"}
                typeBtn={"submit"}
                
              />
              <ButtonComponent
                type={"save btn-save-color1"}
                text={"Edit Password"}
                onClickBtn={this.handleEditbtn}
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
