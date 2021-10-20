import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCol,
} from "mdb-react-ui-kit";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Doctor = (props) => {
  console.log(props.doctor);
  const { name, desc, img } = props.doctor;
  return (
    <div className="col-md-4 mt-4">
      <MDBCard style={{ maxWidth: "24rem", height: "350px" }}>
        <MDBCardImage
          style={{ maxWidth: "200px", height: "200px" }}
          src={img}
          className="rounded-circle m-auto"
          position="top"
          alt="..."
        />
        <div className="m-auto">
          <MDBCardBody>
            <MDBCardTitle>
              <p
                className="text-center"
                style={{ color: "#4A5682", fontWeight: "bolder" }}
              >
                {name}
              </p>
            </MDBCardTitle>
            <MDBCardText>
              <p className="text-center"> {desc}</p>
            </MDBCardText>
            <MDBCol md="12" className="d-flex justify-content-center">
              <Link to="/contact">
                <Button variant="contained">Appoinment</Button>
              </Link>
            </MDBCol>
          </MDBCardBody>
        </div>
      </MDBCard>
    </div>
  );
};

export default Doctor;
