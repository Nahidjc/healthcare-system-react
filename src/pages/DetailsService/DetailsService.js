import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsService = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const serviceId = parseInt(id);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Nahidjc/healthcare-system-react/master/public/serviceData.json?token=AMBJZNLCR7SLMCWIIVT26KLBOAF34"
    )
      .then((res) => res.json())
      .then((data) => {
        const info = data.find((dt) => dt.id === serviceId);
        console.log(info);
        setService(info);
      });
  }, []);
  return (
    <div>
      <p>{service.id}</p>
      {service.name}
    </div>
  );
};

export default DetailsService;
