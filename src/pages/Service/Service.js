import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { id, desc, picture, name } = props.service;

  return (
    <div className="col-md-4 my-4">
      <div className="card" style={{ height: "450px" }}>
        <div
          className="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img
            src={picture}
            style={{ height: "250px" }}
            className="img-fluid"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{desc.slice(0, 200) + "...."}</p>
          <div className="d-flex justify-content-between">
            <Link to="/appoinment">
              <button className="btn btn-primary">Appoinment</button>
            </Link>

            <Link to={`/service-details/${id}`}>More Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
