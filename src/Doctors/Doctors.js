import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Nahidjc/json_Data/main/doctosData.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        // setLoader(false);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mx-auto py-3 col-md-6 col-sm-12">
          <div className="sec-heading  center">
            <h2 className="text-center">Meet Doctors</h2>
          </div>
        </div>
      </div>

      <div className="row">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
