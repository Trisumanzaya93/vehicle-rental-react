import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./home.css";
import icon1 from "../../assets/img/icon1.png";
import icon2 from "../../assets/img/icon2.png";
import Header from "../../component/molecule/navbar/navbar.js";
import ButtonComponent from "../../component/molecule/button/button";
import CardComponent from "../../component/molecule/card/card";
import { useNavigate } from "react-router-dom";
import Footer from "../../component/molecule/footer/footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../redux/actions/user";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allState = useSelector((state) => state);
  const {userinfo} = allState.getProfile

  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [imageProfile, setImageProfile] = useState(userinfo.image);
  const [popular, setPopular] = useState([]);
  // const [vehicleid, setVehicleid] = useState([]);

  // var newpopular = {};
  // for (var i = 0; i < popular.length; ++i)
  // newpopular[i] = popular[i];

  // let newpopular = popular.map(newpopular);

  // for (let index = 0; index < popular.length; index++) {
  //    newpopular = { ...popular[index] }
  // }

  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setStartDate(e);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const hendlebtnLogin = () => {
    navigate("/login");
  };
  const hendlebtnSignUp = () => {
    navigate("/signup");
  };
  const handleDetailVehicle = (id) => {
    navigate(`/${id}`);
  };

  console.log(imageProfile);
  const checkLogin = () => {
    const getToken = JSON.parse(localStorage.getItem("token"));
    // if (getToken) {
      console.log('diidi');
    dispatch(
      getProfileAction({
        headers: {
          "x-access-token": getToken,
        },
      })
    )
    setImageProfile(userinfo.image)
    localStorage.setItem("imageProfile", userinfo.image);
      // .then((result) => {
      //   console.log("ini ", result.value.data.data);
      //   const data = result.value.data.data[0];
      //   setImageProfile(data);
      // })
      // .catch((err) => console.log(err));

    //   const URL = "http://localhost:8000/api/users/profile";
    //   axios
    //     .get(URL, {
    //       headers: {
    //         "x-access-token": getToken,
    //       },
    //     })
    //     .then((response) => {
    //       if (response.data.statusCode === 200) {
    //         const result = response.data.data[0] ?? {};
    //         localStorage.setItem("imageProfile", result.image);
    //         setImageProfile(result.image);
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }
  };

  const getHistoryPopular = () => {
    const URL = "http://localhost:8000/api/history/lampung";

    axios
      .get(URL)
      .then((response) => {
        if (response.data.statusCode === 200) {
          const result = response.data.data;
          setPopular(result);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    checkLogin();
    // getHistoryPopular();
    //  hendleDEtailVehicle ()
  }, []);

  useEffect(() => {
    getHistoryPopular();
  }, []);

  return (
    <div>
      <Header
        onClickBtn={hendlebtnLogin}
        onClickBtn1={hendlebtnSignUp}
        imageProfile={imageProfile}
      />
      <section className="jumbotron jumbotron-fluid">
        <div className="wrap-section">
          <div className="tranparation-black">
            <h1 className="text1">
              Explore and <br />
              Travel
            </h1>
            <h3 className="text2">Vehicle Finder</h3>
            <div className="line"></div>
            <div className="row1">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    paddingLeft: "31px",
                    paddingTop: "21px",
                    paddingBottom: "21px",
                    paddingRight: "123px",
                    borderRadius: "6px",
                  }}
                >
                  Location
                </button>
                <div
                  className="dropdown-menu"
                  style={{ paddingRight: "123px" }}
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/">
                    lampung
                  </a>
                  <a className="dropdown-item" href="/">
                    bandung
                  </a>
                  <a className="dropdown-item" href="/">
                    palembang
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    paddingLeft: "31px",
                    paddingTop: "21px",
                    paddingBottom: "21px",
                    paddingRight: "123px",
                    borderRadius: "6px",
                  }}
                >
                  Type
                </button>
                <div
                  className="dropdown-menu"
                  style={{ paddingRight: "95px" }}
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/">
                    car
                  </a>
                  <a className="dropdown-item" href="/">
                    bicycle
                  </a>
                  <a className="dropdown-item" href="/">
                    motorcycle
                  </a>
                </div>
              </div>
            </div>
            <div className="row1">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    paddingLeft: "31px",
                    paddingTop: "21px",
                    paddingBottom: "21px",
                    paddingRight: "123px",
                    borderRadius: "6px",
                  }}
                >
                  Payment
                </button>
                <div
                  className="dropdown-menu"
                  style={{ paddingRight: "123px" }}
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/">
                    Cash
                  </a>
                  <a className="dropdown-item" href="/">
                    Transfer
                  </a>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    paddingLeft: "31px",
                    paddingTop: "21px",
                    paddingBottom: "21px",
                    paddingRight: "123px",
                    borderRadius: "6px",
                  }}
                  onClick={handleClick}
                >
                  date
                </button>
                {isOpen && (
                  <DatePicker
                    onSelect={startDate}
                    onChange={handleChange}
                    inline
                  />
                )}
              </div>
            </div>
            <ButtonComponent
              type={"explore"}
              text={"Explore"}
              onClickBtn3={hendlebtnLogin}
            />
          </div>
        </div>
      </section>
      <section className="container-home">
        <div className="d-flex justify-content-between">
          <h1 className="text3">Popular in town</h1>
          <a href="/viewall" style={{ paddingTop: "100px" }}>
            view all
          </a>
        </div>
        <div className="wrap-card">
          {popular.slice(0, 4).map((item, key) => {
            return (
              <div onClick={() => handleDetailVehicle(item.id)}>
                <CardComponent
                  key={key}
                  destination={item.vehiclename}
                  city={item.location}
                  image={item.photo}
                  page={item.id}
                  id={item.id}
                />
              </div>
            );
          })}
        </div>
        <div className="wrap-card">
          <div className="col-12">
            <img
              src={icon2}
              style={{ width: "20px", height: "20px", marginLeft: "50%" }}
              alt=""
            />
          </div>
        </div>
        <div className="row ">
          <h1 className="text3">Testimonial</h1>
          <div className="col">
            <div className="row">
              <img
                src={icon1}
                alt=""
                style={{ width: "50px", height: "23px", marginTop: "144px" }}
              />
              <img
                src={icon1}
                alt=""
                style={{ width: "50px", height: "23px", marginTop: "144px" }}
              />
              <img
                src={icon1}
                alt=""
                style={{ width: "50px", height: "23px", marginTop: "144px" }}
              />
              <img
                src={icon1}
                alt=""
                style={{ width: "50px", height: "23px", marginTop: "144px" }}
              />
              <img
                src={icon1}
                alt=""
                style={{
                  width: "50px",
                  height: "23px",
                  marginTop: "144px",
                  marginBottom: "37px",
                }}
              />
            </div>
            <h3 className="text6">
              ”It was the right decision to rent vehicle here, I spent less
              money and enjoy the trip. It was an amazing experience to have a
              ride for wildlife trip!”
            </h3>
            <h3 className="text7">Edward Newgate</h3>
            <h5 className="text8">Founder Circle</h5>
          </div>
          <div className="col-md" style={{ marginLeft: "70px" }}>
            <div className="row-testi">
              <div>
                <div className="wrap-image-testimoni"> </div>
                <div className="img-testimoni">
                  <div className="wrap-btn-img">
                    <button className="next-image">&gt;</button>
                    <button className="next-image">&lt;</button>
                  </div>
                  <div className="plus-img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Home;
