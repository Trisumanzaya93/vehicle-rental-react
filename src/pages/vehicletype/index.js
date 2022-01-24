import React, { useEffect, useState } from "react";
import Navbar from "../../component/molecule/navbar/navbar";
import Footer from "../../component/molecule/footer/footer";
import CardComponent from "../../component/molecule/card/card";
import img1 from "../../assets/img/defaultcar.png";
import './vehicletype.css'
import { useDispatch } from "react-redux";
import { getPopularAction, getVehicleTypeAction } from "../../redux/actions/vehicle";
import { useNavigate } from "react-router-dom";

export default function VehicleType() {
  const navigate = useNavigate()
  const dispatch= useDispatch()
  const [popular, setPopular] = useState([]);
  const [car, setCar] = useState([]);
  const [motorBike, setMotorBike] = useState([]);
  const [bycycle, setBycycle] = useState([]);

  const handleDetailVehicle = (id) => {
    navigate(`/vehicle/${id}`);
  };

  const getPopular = () => {
    dispatch(getPopularAction())
      .then((result) => {
        const data = result.value.data.data;
        // setdetailhistory(data);
        setPopular(data);
        console.log('parameter',data);

      })
      .catch((err) => console.log(err));
    };

    const getVehicleCar = () => {
      dispatch(getVehicleTypeAction("car"))
        .then((result) => {
          const data = result.value.data.data;
          // setdetailhistory(data);
          setCar(data);
          console.log('ini apa sihhhhh',data);
  
        })
        .catch((err) => console.log(err));
      };

      const getVehicleMotorBike = () => {
        dispatch(getVehicleTypeAction("motorcycle"))
          .then((result) => {
            const data = result.value.data.data;
            // setdetailhistory(data);
            setMotorBike(data);
            console.log('hayooo apa inii',data);
    
          })
          .catch((err) => console.log(err));
        };

        const getVehicleBycicle = () => {
          dispatch(getVehicleTypeAction("bicycle"))
            .then((result) => {
              const data = result.value.data.data;
              // setdetailhistory(data);
              setBycycle(data);
              console.log('what the fuck men',data);
      
            })
            .catch((err) => console.log(err));
          };

    useEffect(() => {
      getPopular();
    }, []);

    useEffect(() => {
      getVehicleCar();
    }, []);

    useEffect(() => {
      getVehicleMotorBike();
    }, []);

    useEffect(() => {
      getVehicleBycicle();
    }, []);
    

  return (
    <div>
      <Navbar />
          <div className="container-search">
            <input type="search" id="form1" className="form-control "  placeholder="Search"/>
          <button type="button" className="btn btn-primary" >
            <i className="fa fa-search" style={{"margin":"0px"}} ></i>
          </button>
          </div>
      <div className="container-home">
        <div className="d-flex justify-content-between">
          <h1 className="text3">Popular in town</h1>
          <a href="/" style={{ paddingTop: "100px" }}>
            view all
          </a>
        </div>
        <div className="wrap-card">
          {popular.slice(0, 4).map((item, key) => {
            if(item.photo===null){
              item.photo = img1
              return item.photo
            }
            return (
              <div onClick={() => handleDetailVehicle(item.id)} key={key}>
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

      </div>
      <div className="container-home">
        <div className="d-flex justify-content-between">
          <h1 className="text3">Cars</h1>
          <a href="/" style={{ paddingTop: "100px" }}>
            view all
          </a>
        </div>
        <div className="wrap-card">
          {car.slice(0, 4).map((item, key) => {
            if(item.photo===null){
              item.photo = img1
              return item.photo
            }
            return (
              <div onClick={() => handleDetailVehicle(item.id)} key={key}>
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
      </div>
      <div className="container-home">
        <div className="d-flex justify-content-between">
          <h1 className="text3">Motor Bike</h1>
          <a href="/" style={{ paddingTop: "100px" }}>
            view all
          </a>
        </div>
        <div className="wrap-card">
          {motorBike.slice(0, 4).map((item, key) => {
            if(item.photo===null){
              item.photo = img1
              return item.photo
            }
            return (
              <div onClick={() => handleDetailVehicle(item.id)} key={key}>
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
      </div>
      <div className="container-home">
        <div className="d-flex justify-content-between">
          <h1 className="text3">Bike</h1>
          <a href="/" style={{ paddingTop: "100px" }}>
            view all
          </a>
        </div>
        <div className="wrap-card">
          {bycycle.slice(0, 4).map((item, key) => {
            if(item.photo===null){
              item.photo = img1
              return item.photo
            }
            return (
              <div onClick={() => handleDetailVehicle(item.id)} key={key}>
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
      </div>

      <Footer />
    </div>
  );
}
