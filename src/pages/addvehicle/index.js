import React, { useRef, useState } from "react";
import Navbar from "../../component/molecule/navbar/navbar";
import Footer from "../../component/molecule/footer/footer";
// import img2 from "../../assets/img/img9.png";
import imgDefault from "../../assets/img/defaultcar.png";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import ButtonComponent from "../../component/molecule/button/button";
import "./updatevehicle.css";
import { Link, useNavigate } from "react-router-dom";
import { createVehicleAction } from "../../redux/actions/vehicle";
import { useDispatch } from "react-redux";
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddVehicle () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const target = useRef(null)
  const [image,setImage]=useState(imgDefault)
  const [imageSend,setImageSend]=useState({})
  const [vehicleName,setVehicleName]=useState('')
  const [location,setLocation]=useState('')
  const [description,setDescription]=useState("")
  const [price,setPrice]=useState("")
  const [status,setStatus]=useState("")
  const [stock,setStock]= useState(1)
  const [category,setCategory]= useState("")
  
  
  console.log("masuk sihhhh",imageSend);

  const handleChangeLocation=(e)=>{
    const result= e.target.value
    setLocation(result)
  }
  const handleChangeDescription=(e)=>{
    const result= e.target.value
    setDescription(result)
  }
  const handleChangePrice=(e)=>{
    const result= e.target.value
    setPrice(result)
  }
  const handleChangeStatus=(selected)=>{

    console.log(selected);
    setStatus(selected)
  }
  const handleChangeCategory=(selected)=>{
    console.log(selected);
    setCategory(selected)
  }
  const handleChangeVehicleName=(e)=>{
    const result= e.target.value
    setVehicleName(result)
  }

  const handleMinStock =()=>{
    const result =  stock - 1 < 1 ? 1 : stock - 1;
    setStock(result)
  }
  const handleSumStock=()=>{
    const result = stock + 1
    setStock(result)
  }

  const handlesave =()=>{
    const formData = new FormData();
    formData.append("vehiclename", vehicleName);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("status", status);
    formData.append("image", imageSend);
    formData.append("stock", stock);
    formData.append("category", category);
    formData.append("description", description);

    console.log("taik",imageSend);
    dispatch(createVehicleAction(formData)).then((result) => {
      console.log(result);
      toast.success("Update Succes", {
        position: toast.POSITION.TOP_CENTER,
    });

    }).catch((err) => { console.log(err);});
  }
  const handleChangeUpload =(e)=>{
    const file = e.target.files[0]
    console.log("ooopopoppppppppppppp",file);
    console.log("woyy", URL.createObjectURL(file));
    setImageSend(file)
    setImage(URL.createObjectURL(file))
  }
    return (
      <div>
        <Navbar />
        <form className="wrap-main-detail">
          <div className="wrap-text-detail">
            <Link to={"/"} className="text-detail">
              &lt;
            </Link>
            <div className="text1-detail">Add new item</div>
          </div>
          <div className="wrap-galery-img">
            <button
              className="galery-img"
              style={{ backgroundImage: `url(${image})` }}
              onClick={(e) => {e.preventDefault();target.current.click()}}
            ></button>
            {/* <button onClick={(e)=> handleupload(e)}>kjsdfldsnfds</button> */}
            <input type="file" ref={target} onChange={(e)=>handleChangeUpload(e)} style={{display:"none"}}/>
            <div className="wrap-detail-vehicle-reservation padding-colomn">
              <input
                className="text-detail-contact1"
                placeholder="Name (max up to 50 words)"
                onChange={(e)=>handleChangeVehicleName(e)}
              />
              <input className="text-detail-contact1" onChange={(e)=>handleChangeLocation(e)} placeholder="location" />
              <input
                className="text-detail-contact1"
                placeholder="Description (max up to 150 words)"
                onChange={(e)=>handleChangeDescription(e)}
              />
              <div className="text-price-edit"> Price:</div>
              <input className="input-price-edit" onChange={(e)=>handleChangePrice(e)} placeholder="Price" />
              <div className="text-price-edit">status:</div>
              <Dropdown as={ButtonGroup} className="input-dropdown" onSelect={(selected)=>handleChangeStatus(selected)}>
                <Button className="btn-dropdown" variant="none">
                  Select status
                </Button>
                <Dropdown.Toggle
                  split
                  variant="none"
                  id="dropdown-split-basic"
                  
                />

                <Dropdown.Menu>
                <Dropdown.Item eventKey={"available"}>available</Dropdown.Item>
                <Dropdown.Item eventKey={"no available"}>no available</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-flex justify-content-between align-items-end">
                <div className="text-price-edit">Stock:</div>
                <div className="wrap-btn-counter">
                  <ButtonComponent
                    type={"total2 btn-total-color-reservation"}
                    text={"-"}
                    onClickBtn={handleMinStock}
                  />
                  <div className="display-total-reservation">{stock}</div>
                  <ButtonComponent
                    type={"total2 btn-total-color1-reservation"}
                    text={"+"}
                    onClickBtn={handleSumStock}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="wrap-btn-edit">
            <Dropdown as={ButtonGroup}  onSelect={(selected)=>handleChangeCategory(selected)}>
              <Dropdown.Toggle className="btn-add-item btn-add-item-color" id="dropdown-basic">
                Add item to 
              </Dropdown.Toggle>

              <Dropdown.Menu>
              <Dropdown.Item eventKey={"car"}>car</Dropdown.Item>
                  <Dropdown.Item eventKey={"motorcycle"}>motorcycle</Dropdown.Item>
                  <Dropdown.Item eventKey={"bicycle"}>bicycle</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>
            <ButtonComponent
              type={"add-item  btn-add-item-color1"}
              text={"Save item"}
              onClickBtn={handlesave}
            />
            <ToastContainer/>
          </div>
        </form>
        <Footer />
      </div>
    );
  }

  export default AddVehicle
