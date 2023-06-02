import React from "react";
import "../assets/css/navbar.css";
import logo from "../assets/images/ff.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg bg-body-tertiary text-link" style={{ color: 'white' }}>
          <div className="container-fluid" style={{ backgroundColor: "#03001C" }}>
            <img style={{ height: "40px", width: "60px" }} src={logo} alt="" />
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink to='/' activeclassname="active">
                  <li className="nav-item">
                    Home
                  </li>
                </NavLink>
                <NavLink to='/about' activeclassname="active">
                  <li className="nav-item">
                    About
                  </li>
                </NavLink>
                <NavLink to='/service' activeclassname="active">
                  <li className="nav-item">
                    Services
                  </li>
                </NavLink>
                <NavLink to='/pricing' activeclassname="active" >
                  <li className="nav-item">
                    Pricing
                  </li>
                </NavLink>
                <NavLink to="/contact" activeclassname="active">
                  <li className="nav-item">
                    contact
                  </li>
                </NavLink>
              </ul>
              <Link to='/join'>
              <h5 className='join_btn'>JOIN NOW</h5>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
