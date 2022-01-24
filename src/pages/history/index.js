import React, { useEffect, useState } from "react";
import Navbar from "../../component/molecule/navbar/navbar";
import icon8 from "../../assets/img/icon8.png";
import icon9 from "../../assets/img/icon9.png";
import img7 from "../../assets/img/img13.png";
import CardComponent from "../../component/molecule/card/card";
import "./history.css";
import Footer from "../../component/molecule/footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { getDetailHistoryAction } from "../../redux/actions/history";
import { getVehicleTypeAction } from "../../redux/actions/vehicle";
import { Link, useNavigate } from "react-router-dom";
import defaultimg from "../../assets/img/defaultcar.png"
import dayjs from "dayjs";

function History() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [detailhistory, setdetailhistory] = useState([]);
  const [vehicle , setVehicle]= useState([])
  const [parameter, setParameter] = useState({
    search: '',
    sortBy: '',
    sort: '',
  });

  const handleDetailVehicle = (id) => {
    navigate(`/vehicle/${id}`);
  };

  const handleChangeSearch=(event)=>{
    const search = event.target.value;
    setParameter({...parameter, search})
    console.log('search',search);
  }

  const handleSearch=()=>{
    console.log('handleSearch');
    getHistory()
  }

  const handleselectsort=(e)=>{
    const sortBy = e.target.value
    setParameter({...parameter, sortBy,sort: "ASC"})
    dispatch(getDetailHistoryAction({...parameter, sortBy,sort: "ASC"}))
      .then((result) => {
        const data = result.value.data.data;
        setdetailhistory(data);

      })
      .catch((err) => console.log(err));
  }
  const getHistory = () => {
    dispatch(getDetailHistoryAction(parameter))
      .then((result) => {
        const data = result.value.data.data;
        setdetailhistory(data);

      })
      .catch((err) => console.log(err));
  };

  const getVehicle = () => {
    dispatch(getVehicleTypeAction("car"))
      .then((result) => {
        const data = result.value.data.data;
        // setdetailhistory(data);
        setVehicle(data);
        console.log('ini apa sihhhhh',data);

      })
      .catch((err) => console.log(err));
    };
  useEffect(() => {
    getHistory();
    // will unmount
    return () => {};
  }, []);

  useEffect(() => {
    getVehicle();
    // will unmount
    return () => {};
  }, []);
  return (
    <div>
      <Navbar />
      <div className="wraper-section">
        <div className="col-lg-9">
          <div className="d-flex justify-content-between">
            <div className="col-lg-9 wrap-search">
              <input placeholder="search" className="col-lg-11 input-search" onChange={handleChangeSearch} />
              <img src={icon8} className="img-search" alt="" onClick={handleSearch} />
            </div>

            <select
              className="select-filter-history col-lg-2"
              onChange={(e)=>handleselectsort(e)}
            >
              <option value="" disabled selected hidden>
                Filter
              </option>
              <option value="category">Type</option>
              <option value="start_date">Date Added</option>
              <option value="vehiclename">name</option>
              <option value="total_price">Price</option>
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
            {detailhistory.map((item, key) => {
              if(item.photo === null){
                item.photo = defaultimg
              }
              return(
            <div className="col-lg-12 d-flex  mt-5" key={key}>
              <div className="col-lg-3 ">
                <img src={item.photo} className="img-history" alt="" />
              </div>
              <div className="col-lg-8 ms-5 mt-3">
                <p className="text-name-history">{item.vehiclename}</p>
                <p className="text-date-card-history">{dayjs(item.start_date).format('DD-MM-YYYY')} to {dayjs(item.return_date).format("DD-MM-YYYY")}</p>
                <p className="text-payment-history">Prepayment : Rp. {item.total_price}</p>
                <p className="text-status-history success">{item.status_return}</p>
              </div>
            </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-3">
          <div className="mt-3 d-flex justify-content-center">
            <p className="text-title-card-history">New Arrival</p>
          </div>
          {vehicle.slice(0, 2).map((item, key) => {
            if(item.photo === null){
              item.photo = defaultimg
            }
            return (
              <div className="mt-3 ps-5 d-flex justify-content-center">
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
          </div>
            );
          })}

          <Link to={"/viewall"} className="d-flex justify-content-center ">
            View More
          </Link>
          <div className="d-flex justify-content-center mt-3">
            <img src={icon9} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default History;
