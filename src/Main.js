import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Detail from './pages/detail';
import Home from './pages/home';
// import Navbar from './component/molecule/navbar/navbar'
import Login from "./pages/login"
import Profile from './pages/profile';
import SignUp from './pages/signup';
import VehicleType from './pages/vehicletype'
import Reservation from './pages/reservation'
import ViewAll from './pages/viewall';
import UpdateVehicle from "./pages/updatevehicle"

function Main () {
    return (
        <Router>
            <Routes>
                {/* <Route path="/nav" element={<Navbar />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/vehicletype" element={<VehicleType />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/viewall" element={<ViewAll />} />
                <Route path="/updateVehicle" element={<UpdateVehicle />} />
            </Routes>
        </Router>
    )
}

export default Main
