import React from "react";
import logo from "./log.png";
import useAuth from "./../../hooks/useAuth";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div
            className="collapse navbar-collapse container"
            id="navbarSupportedContent"
          >
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img src={logo} height="25" alt="" loading="lazy" />
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item my-auto">
                <Link to="/services">Services</Link>
              </li>
              <li className="nav-item my-auto">
                <Link to="/doctors">Doctors</Link>
              </li>
              <li className="nav-item my-auto">
                <a className="nav-link" href="#">
                  Department
                </a>
              </li>
              <li className="nav-item my-auto">
                <Link to="/appoinment">Appoinment</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>

          {user.email ? (
            <div className="d-flex align-items-center ">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {user.email}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {user?.displayName}
                  </a>
                </li>

                <li className="nav-item my-auto">
                  <img
                    src={user.photoURL}
                    className="rounded-circle my-auto"
                    height="25"
                    alt=""
                    loading="lazy"
                  />
                </li>

                <li className="nav-item">
                  <a onClick={logOut} className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary ">Login</button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
