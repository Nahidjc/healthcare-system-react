import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailsService = () => {
  const { id } = useParams();
  console.log(id);

  //   useEffect(() => {}, []);
  return <div>{id}</div>;
};

export default DetailsService;
