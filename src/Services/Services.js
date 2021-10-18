import React, { useEffect } from "react";
import { useState } from "react";
import Service from "./../pages/Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./serviceData.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="row container m-auto my-2">
      <h2 className="text-center">OUR SERVICES</h2>
      {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
    </div>
  );
};

export default Services;
