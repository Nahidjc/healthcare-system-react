import React from "react";
import img from "../../images/not.jpg";
const NotFound = () => {
  return (
    <div className="m-auto">
      <img
        className="mx-auto d-block"
        style={{ height: "700px" }}
        src={img}
        alt="Not Found"
      />
    </div>
  );
};

export default NotFound;
