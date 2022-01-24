import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./home.css";
import icon1 from "../../assets/img/icon1.png";
import icon2 from "../../assets/img/icon2.png";
import Header from "../../component/molecule/navbar/navbar.js";
import ButtonComponent from "../../component/molecule/button/button";
import CardComponent from "../../component/molecule/card/card";
import { useNavigate } from "react-router-dom";
import Footer from "../../component/molecule/footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../redux/actions/user";
import { getPopularAction, setFilterVehicle } from "../../redux/actions/vehicle";
import defaultimg from "../../assets/img/defaultcar.png"

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allState = useSelector((state) => state);
  const { userinfo } = allState.getProfile;

  const [selectedFilter, setSelectedFilter] = useState({
    location: '',
    status: '',
    type: '',
    date: '',
  });
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

  const handleChangeLocation = (event) => {
    setSelectedFilter({...selectedFilter, location: event.target.value});
  };
  
  const handleChangeStatus = (event) => {
    setSelectedFilter({...selectedFilter, status: event.target.value});
  };
  const handleChangeType = (event) => {
    setSelectedFilter({...selectedFilter, type: event.target.value});
  };
  const handleChangeDate = (event) => {
    setSelectedFilter({...selectedFilter, date: event.target.value});
  };
  const handlebtnExplore = () => {
    console.log('selectedFilter',selectedFilter);
    dispatch(setFilterVehicle(selectedFilter));
    navigate("/viewall");
  };
  const hendlebtnLogin = () => {
    navigate("/login");
  };
  const hendlebtnSignUp = () => {
    navigate("/signup");
  };
  const handleDetailVehicle = (id) => {
    navigate(`/vehicle/${id}`);
  };
  const handleHistory = (id) => {
    navigate(`/history`);
  };
  const handleAddVehicle=()=>{
    navigate("/addvehicle")
  }

  // console.log(imageProfile);
  const checkLogin = () => {
    const getToken = JSON.parse(localStorage.getItem("token"));
    // if (getToken) {
    console.log("diidi");
    dispatch(
      getProfileAction({
        headers: {
          "x-access-token": getToken,
        },
      })
    );
    setImageProfile(userinfo.image);
    localStorage.setItem("imageProfile", userinfo.image);
    console.log("ini dimana", localStorage);
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
    dispatch(getPopularAction())
      .then((result) => {
        const data = result.value.data.data;
        // setdetailhistory(data);
        setPopular(data);
        console.log('parameter',data);

      })
      .catch((err) => console.log(err));
    
    // const URL = `${process.env.REACT_APP_HOST}/history/lampung`;

    // axios
    //   .get(URL)
    //   .then((response) => {
    //     if (response.data.statusCode === 200) {
    //       const result = response.data.data;
    //       setPopular(result);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  useEffect(() => {
    checkLogin();
    // getHistoryPopular();
    //  hendleDEtailVehicle ()
  }, [imageProfile]);

  useEffect(() => {
    getHistoryPopular();
  }, []);

  return (
    <div>
      <Header
        goto={handleHistory}
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
              <select
                className="dropdown-filter"
                onChange={handleChangeLocation} value={selectedFilter.location}
              >
              <option value={""} className="dropdown-item">
                Location
              </option>
                <option value={"lampung"} className="dropdown-item">
                  lampung
                </option>
                <option value={"bandung"} className="dropdown-item">
                  bandung
                </option>
                <option value={"palembang"} className="dropdown-item">
                  palembang
                </option>
              </select>
              <select
                className="dropdown-filter"
                onChange={handleChangeType} value={selectedFilter.type}
              >
              <option value={""} className="dropdown-item">
                Type
              </option>
                <option value={"car"} className="dropdown-item">
                  car
                </option>
                <option value={"bicycle"} className="dropdown-item">
                  bicycle
                </option>
                <option value={"motorcycle"} className="dropdown-item">
                  motorcycle
                </option>
              </select>
            </div>
            <div className="row1">
              <select
                className="dropdown-filter"
                onChange={handleChangeStatus} value={selectedFilter.status}
              >
                
              <option value={""} className="dropdown-item">
                Status
                </option>
                <option value={"available"} className="dropdown-item">
                  available
                </option>
                <option value={"full booked"} className="dropdown-item">
                  full booked
                </option>
              </select>
              <input
                className="dropdown-filter"
                type={"date"}
                onChange={handleChangeDate} value={selectedFilter.date}
              />
            </div>
            <ButtonComponent
              type={"explore"}
              text={"Explore"}
              onClickBtn={handlebtnExplore}
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
            if(item.photo === null){
              item.photo = defaultimg
            }
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
        <div className="d-flex justify-content-center mt-5">
        <ButtonComponent
              type={"explore"}
              text={"Add Vehicle"}
              onClickBtn={handleAddVehicle}
            />
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
