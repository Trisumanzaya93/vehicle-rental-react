import React, { useEffect, useState } from "react";
import "./detail.css";
import icon6 from "../../assets/img/icon6.png";
import ButtonComponent from '../../component/molecule/button/button'
import Navbar from "../../component/molecule/navbar/navbar";
import Footer from "../../component/molecule/footer/footer";
import {  useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailVehicleAction, setReservation } from "../../redux/actions/vehicle";
import dayjs from "dayjs";
// import {Connect} from "react-redux"

function Detail  ()  {
  const navigate = useNavigate()
  const {id} = useParams()
  const dispatch = useDispatch();
  // selector()
  

  const allState = useSelector((state) => state);
  const {userinfo} = allState.getProfile
  
  const [detailVehicle, setdetailvehicle] = useState({});
  const [counter, setCounter] = useState(1);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
  console.log(allState);
  const onClickPrevious = () => {
    const newCounter = counter - 1 < 0 ? 0 : counter - 1;
    setCounter(newCounter);
    
  }
  const addCounter = () => {
    const stock = detailVehicle.stock
    console.log(stock);
    const newCounter = counter+1 <= stock ?  counter + 1 : stock ;
    setCounter(newCounter);
  };
  const generateCode = () => {
    const code = dayjs().format('YYMMDDHHmmss');

    return {bookingCode: 'BE'+userinfo.id+code, paymentCode:'PY'+userinfo.id+code}
  }
  const handleReservation = () => {
    const{bookingCode, paymentCode} = generateCode()
    dispatch(setReservation({
      userId: userinfo.id,
      vehicleId: detailVehicle.id,
      quantityTotal: counter,
      bookingCode,
      paymentCode
    }))
    navigate("/reservation")
  };

  const getDetailVehicle =()=>{
    dispatch(getDetailVehicleAction(id)).then((result) => {
      console.log('ini ',result.value.data.data);
      const data = result.value.data.data[0]
      setdetailvehicle(data)
  ;

  }).catch((err) => console.log(err));
};

    // const URL = `http://localhost:8000/api/vehicle/${id}`;

    // axios
    //   .get(URL)
    //   .then((response) => {
    //     if (response.data.statusCode === 200) {
    //       const result = response.data.data[0];
    //       setdetailvehicle(result);
    //       console.log(result);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  

  useEffect(() => {
    getDetailVehicle()
    // will unmount
    return () => {};
  }, []);
  // useEffect(() => {
  //   getDetailVehicle()
  // }, [detailVehicle])
  
  // state = {
  //   counter: 0,
  //   category: "",
  //   location: "",
  //   photo: "",
  //   price: "",
  //   status: "",
  //   stock: "",
  //   vehiclename: "",
  //   isSucces: false,
  // };

  // onClickPrevious = () => {
  //   const number = this.state.counter;
  //   if (this.state.counter <= 0) {
  //     this.setState({
  //       counter: number,
  //     });
  //   } else {
  //     this.setState({
  //       counter: number - 1,
  //     });
  //   }
  //   /**
  //    * state = {
  //    *  ...state,
  //    * counter: number - 1
  //    * }
  //    */
  // };
  // onClickNextCounter = () => {
  //   const number = this.state.counter;
  //   if (this.state.stock === number) {
  //     this.setState({
  //       counter: number,
  //     });
  //   } else {
  //     this.setState({
  //       counter: number + 1,
  //     });
  //   }
  // };

  // const getProfile() {
  //   const URL = "http://localhost:8000/api/vehicle/24";
  //   const token = JSON.parse(localStorage.getItem("token"));
  //   console.log(token);
  //   axios
  //     .get(URL, {
  //       headers: {
  //         "x-access-token": token,
  //       },
  //     })
  //     .then((response) => {
  //       if (response.data.statusCode === 200) {
  //         let newstate = response.data.data;
  //         var result = {};
  //         // console.log(newstate);
  //         for (var i = 0; i < newstate.length; i++) {
  //           result = newstate[i];
  //         }
  //         this.setState({
  //           category: result.category,
  //           location: result.location,
  //           photo: result.photo,
  //           price: result.price,
  //           status: result.status,
  //           stock: result.stock,
  //           vehiclename: result.vehiclename,
  //           isSucces: true,
  //         });
  //         console.log("ini", result);
  //       }
  //     })
  //     // confirm( error.response.data.status)
  //     .catch((error) =>
  //       alert(error.response.data.status + " silahkan  ke halaman login")
  //     );
  // }
  // componentDidMount() {
  //   this.getProfile();
  // }

  // render() {
  //   console.log("state is:", this.state.isSucces);
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
              style={{ backgroundImage: `url(${detailVehicle.photo})` }}></div>
            <div className="wrap-detail-vehicle">
              <div className="text-name">{detailVehicle.vehiclename} </div>
              <div className="text-location">{detailVehicle.location}</div>
              <div className="text-available">{detailVehicle.status}</div>
              <div className="text-payment">No prepayment </div>
              <div className="text-detail">Capacity : 1 person </div>
              <div className="text-detail">Type : {detailVehicle.category}</div>
              <div className="text-detail">Reservation before 2 PM </div>
              <div className="text-price">Rp. {detailVehicle.price}/day </div>
            </div>
          </div>
          <div className="wrap-prev">
            <div className="wrap-img-prev">
              <a href="/" className="prev">
                &lt;
              </a>
              <div
                className="galery-img1"
                style={{ backgroundImage: `url(${detailVehicle.photo})` }}
              ></div>
              <div
                className="galery-img2"
                style={{ backgroundImage: `url(${detailVehicle.photo})` }}
              ></div>
              <a href="/" className="prev">
                &gt;
              </a>
            </div>
            <div className="wrap-img-prev1">
						<ButtonComponent type={"total btn-total-color"} text={"-"} onClickBtn={onClickPrevious} />
              <div className="display-total">{counter}</div>
							<ButtonComponent type={"total btn-total-color1"} text={"+"} onClickBtn={addCounter} />
            </div>
          </div>
          <div className="wrap-btn-order">
					<ButtonComponent type={"chat-admin btn-chat-admin-color"} text={"Chat Admin"}/>
					<ButtonComponent type={"chat-admin btn-chat-admin-color1"} text={"Reservation"} onClickBtn={handleReservation}/>
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

  // const mapStateToProps = (state) => {
  //   return {
  //     auth: state.auth,
  //   };
  // };

  export default Detail
