import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/detail";
import Home from "./pages/home";
// import Navbar from './component/molecule/navbar/navbar'
import Login from "./pages/login";
import Profile from "./pages/profile";
import SignUp from "./pages/signup";
import VehicleType from "./pages/vehicletype";
import Reservation from "./pages/reservation";
import ViewAll from "./pages/viewall";
import AddVehicle from "./pages/addvehicle";
import Notfound from "./pages/notfound";
import Forgotpassword from "./pages/forgotpassword";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import Payment from "./pages/payment";
import Paymentfinish from "./pages/paymentfinish";
import Chatuser from "./pages/chatuser";
import Detailchat from "./pages/detailchat";
import History from "./pages/history";
import ProtectRoute from "./privateroute";

function Main() {
  return (
    <Router>
      <ReduxProvider store={store}>
        <Routes>
          {/* <Route path="/nav" element={<Navbar />} /> */}
          <Route path="/" element={<Home />} >
          </Route>
          <Route path="/vehicle/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          <Route
            path="/reservation"
            element={
              <ProtectRoute>
                <Reservation />
              </ProtectRoute>
            }
          />

          <Route path="/profile" element={<Profile />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/vehicletype" element={<VehicleType />} />
          <Route path="/viewall" element={<ViewAll />} />
          <Route path="/addVehicle" element={<AddVehicle />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/paymentfinish" element={<Paymentfinish />} />
          <Route path="/chatuser" element={<Chatuser />} />
          <Route path="/detailchat" element={<Detailchat />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </ReduxProvider>
    </Router>
  );
}

export default Main;
