import React from "react";
import Navbar from "../../component/molecule/navbar/navbar";
import Footer from "../../component/molecule/footer/footer";
import CardComponent from "../../component/molecule/card/card";
import img1 from "../../assets/img/img2.png";
import './vehicletype.css'

export default function VehicleType() {
  return (
    <div>
      <Navbar />
          <div class="container-search">
            <input type="search" id="form1" className="form-control "  placeholder="Search"/>
          <button type="button" className="btn btn-primary" >
            <i class="fa fa-search" style={{"margin":"0px"}} ></i>
          </button>
          </div>
      <div className="container-home">
        <div className="d-flex justify-content-between">
          <h1 class="text3">Popular in town</h1>
          <a href="/" style={{ paddingTop: "100px" }}>
            view all
          </a>
        </div>
        <div class="wrap-card">
          <CardComponent
            destination={"Merapi"}
            city={"Yogyakarta"}
            image={img1}
          />
          <CardComponent
            destination={"Merapi"}
            city={"Yogyakarta"}
            image={img1}
          />
          <CardComponent
            destination={"Merapi"}
            city={"Yogyakarta"}
            image={img1}
          />
          <CardComponent
            destination={"Merapi"}
            city={"Yogyakarta"}
            image={img1}
          />
        </div>
      </div>
      <div className="container-home">
        <div className="d-flex justify-content-between">
          <h1 class="text3">Cars</h1>
          <a href="/" style={{ paddingTop: "100px" }}>
            view all
          </a>
        </div>
        <div class="wrap-card">
          <CardComponent
            destination={"Merapi"}
            city={"Yogyakarta"}
            image={img1}
          />
          <CardComponent
            destination={"Merapi"}
            city={"Yogyakarta"}
            image={img1}
          />
          <CardComponent
            destination={"Merapi"}
            city={"Yogyakarta"}
            image={img1}
          />
          <CardComponent
            destination={"Merapi"}
            city={"Yogyakarta"}
            image={img1}
          />
        </div>
      </div>
      <div className="container-home">
        <div className="d-flex justify-content-between">
          <h1 class="text3">Motor Bike</h1>
          <a href="/" style={{ paddingTop: "100px" }}>
            view all
          </a>
        </div>
        <div class="wrap-card">
          <CardComponent
            destination={"Merapi"}
            city={"Yogyakarta"}
            image={img1}
          />
          <CardComponent
            destination={"Merapi"}
            city={"Yogyakarta"}
            image={img1}
          />
          <CardComponent
            destination={"Merapi"}
            city={"Yogyakarta"}
            image={img1}
          />
          <CardComponent
            destination={"Merapi"}
            city={"Yogyakarta"}
            image={img1}
          />
        </div>
      </div>
      <div className="container-home">
        <div className="d-flex justify-content-between">
          <h1 class="text3">Bike</h1>
          <a href="/" style={{ paddingTop: "100px" }}>
            view all
          </a>
        </div>
        <div class="wrap-card">
          <CardComponent
            destination={"Merapi"}
            city={"Yogyakarta"}
            image={img1}
          />
          <CardComponent
            destination={"Merapi"}
            city={"Yogyakarta"}
            image={img1}
          />
          <CardComponent
            destination={"Merapi"}
            city={"Yogyakarta"}
            image={img1}
          />
          <CardComponent
            destination={"Merapi"}
            city={"Yogyakarta"}
            image={img1}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
