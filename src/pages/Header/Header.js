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
              <li className="nav-item">
                <Link className="nav-link" to="services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Doctors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Department
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Appoinment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {user.email ? (
            <div className="d-flex align-items-center ">
              <ul className="my-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {user.displayName}
                  </a>
                </li>
              </ul>

              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user.photoURL}
                  className="rounded-circle"
                  height="25"
                  alt=""
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a onClick={logOut} className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button class="btn btn-primary ">Login</button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
