import React, { Component } from "react";
import Navbar from "../../component/molecule/navbar/navbar";
import Footer from "../../component/molecule/footer/footer";
import img2 from "../../assets/img/img9.png";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import ButtonComponent from "../../component/molecule/button/button";
import "./updatevehicle.css";

export default class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="wrap-main-detail">
          <div className="wrap-text-detail">
            <a href="/" className="text-detail">
              &lt;
            </a>
            <div className="text1-detail">Add new item</div>
          </div>
          <div className="wrap-galery-img">
            <div
              className="galery-img"
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
            <div className="wrap-detail-vehicle-reservation padding-colomn">
              <input
                className="text-detail-contact1"
                placeholder="Name (max up to 50 words)"
              />
              <input className="text-detail-contact1" placeholder="location" />
              <input
                className="text-detail-contact1"
                placeholder="Description (max up to 150 words)"
              />
              <div className="text-price-edit"> Price:</div>
              <input className="input-price-edit" placeholder="Price" />
              <div className="text-price-edit">status:</div>
              <Dropdown as={ButtonGroup} className="input-dropdown">
                <Button className="btn-dropdown" variant="none">
                  Select status
                </Button>
                <Dropdown.Toggle
                  split
                  variant="none"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">available</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">no available</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-flex justify-content-between align-items-end">
                <div className="text-price-edit">Stock:</div>
                <div className="wrap-btn-counter">
                  <ButtonComponent
                    type={"total2 btn-total-color-reservation"}
                    text={"-"}
                  />
                  <div className="display-total-reservation">1</div>
                  <ButtonComponent
                    type={"total2 btn-total-color1-reservation"}
                    text={"+"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="wrap-btn-edit">
            <Dropdown as={ButtonGroup} >
              <Dropdown.Toggle className="btn-add-item btn-add-item-color" id="dropdown-basic">
                Add item to
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">available</Dropdown.Item>
                <Dropdown.Item href="#/action-2">no available</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <ButtonComponent
              type={"add-item  btn-add-item-color1"}
              text={"Save item"}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
