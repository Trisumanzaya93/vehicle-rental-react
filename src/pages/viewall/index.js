import React, { Component } from "react";
import Navbar from "../../component/molecule/navbar/navbar";
import CardComponent from "../../component/molecule/card/card";
import Footer from "../../component/molecule/footer/footer";
import axios from "axios";
import { Pagination } from "react-bootstrap";
import './viewall.css'
// import { useNavigate } from "react-router-dom";

// function pindah (id)  {
//   const navigate= useNavigate
//   return navigate('login')
// }
export default class ViewAll extends Component {
  constructor() {
    super();
    this.state = {
      allvehicle: [],
      active:1
    };
  }
  getDataVehicle=(number)=>{
    const URL = `http://localhost:8000/api/vehicle?per_page=10&page=${number}`;

    axios
      .get(URL)
      .then((response) => {
        if (response.data.statusCode === 200) {
          const result = response.data.data;
          this.setState({ allvehicle: result });
          console.log(result);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  

  hendleButtonPagination=(number)=>{
    this.setState({active:number})
    this.getDataVehicle(number)
  }
  componentDidMount() {
    this.getDataVehicle(this.state.active)
  }

  render() {
    const { allvehicle,active} = this.state;
   const handleDetailVehicle = (id) => {
     console.log("sadad",id);
      
    };
    let items = [];
    for (let number = 1; number <= 3; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active} onClick={() => this.hendleButtonPagination(number)}>
          {number}
        </Pagination.Item>
      );
    }
    return (
      <div>
        <Navbar />
        <div className="container container-home">
            <h1 className="text3">Motor Bike</h1>
          <div className="card-group  col-xl-11 d-flex justify-content-center me-2">.
            {allvehicle.map((item, idx) => (
              <div onClick={()=> handleDetailVehicle(item.id)}>
              <CardComponent
                key={idx}
                destination={item.vehiclename}
                city={item.location}
                image={item.photo}
                className='me-5 col-xl-6 card-viewall'
              />
              </div>
            ))}
          </div>
          <Pagination>{items}</Pagination>
          <div></div>
        </div>
        <Footer />
      </div>
    );
  }
}
