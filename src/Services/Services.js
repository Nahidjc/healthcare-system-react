import React, { useEffect } from "react";
import { useState } from "react";
import Service from "./../pages/Service/Service";
import { Spinner } from "react-bootstrap";
const Services = () => {
  const [services, setServices] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Nahidjc/json_Data/main/serviceData.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoader(false);
      });
  }, []);
  return (
    <div className="row container m-auto my-2">
      <h2 className="text-center">OUR SERVICES</h2>
      {loader && (
        <div id="loader" className="my-5">
          <Spinner animation="grow" />
        </div>
      )}
      {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
    </div>
  );
};

export default Services;
