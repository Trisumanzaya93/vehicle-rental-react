import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavbarAfterLogin from './component/molecule/navbar/NavbarAfterLogin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={NavbarAfterLogin} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
