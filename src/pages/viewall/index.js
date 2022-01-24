import React, { Component } from "react";
import Navbar from "../../component/molecule/navbar/navbar";
import CardComponent from "../../component/molecule/card/card";
import Footer from "../../component/molecule/footer/footer";
import { Pagination } from "react-bootstrap";
import './viewall.css'
import { connect } from "react-redux";
import { getAllVehicleAction } from "../../redux/actions/vehicle";
import img1 from "../../assets/img/defaultcar.png" 
import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

// function pindah (id)  {
//   const navigate= useNavigate
//   return navigate('login')
// }
class ViewAll extends Component {
  constructor() {
    super();
    this.state = {
      allvehicle: [],
      active:1,
      isLoading: false,
      filter: {}
    };
  }

  getData(param) {
    this.props.getAllVehicleAction({...this.state.filter,...param});
    console.log('1', param);
    this.setState({isLoading: true});
  }
  

  hendleButtonPagination=(number)=>{
    this.setState({active:number})
    this.getData({page:number});
  }
  componentDidMount() {
    console.log('this.props.filterAllVehicle', this.props.filterAllVehicle);
    this.setState({filter: this.props.filterAllVehicle});
    this.getData({...this.props.filterAllVehicle, page:this.state.active});
  }
  componentDidUpdate() {
    const getAllVehicle = this.props.getAllVehicle;
    if(getAllVehicle.isFulfilled && this.state.isLoading) {
      this.setState({
        allvehicle: getAllVehicle.allvehicle.allvehicle, 
        isLoading: false
      })
    }
  }
  render() {
    const { allvehicle,active} = this.state;
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
              
              <Link to={`/vehicle/${item.id}`}>
              <CardComponent
                key={item.id}
                destination={item.vehiclename}
                city={item.location}
                image={item.photo ?? img1}
                className='me-5 col-xl-6 card-viewall'
              />
              </Link>
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
const mapStateToProps = (state) => {
  return {
    getAllVehicle: state.getAllVehicle,
    filterAllVehicle: state.setFilterVehicle.filterVehicle,
    
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllVehicleAction: (param) => {
      dispatch(getAllVehicleAction(param));
    },
  };
};
const AppWithRedux = connect(mapStateToProps, mapDispatchToProps)(ViewAll);
export default AppWithRedux;