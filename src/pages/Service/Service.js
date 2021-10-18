import React from "react";

const Service = (props) => {
  console.log(props);
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
            <button className="btn btn-primary">Appoinment</button>
            <p>More Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
