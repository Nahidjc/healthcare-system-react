import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const DetailsService = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const serviceId = parseInt(id);
  console.log(service);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Nahidjc/json_Data/main/serviceData.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const info = data.find((dt) => dt.id === serviceId);
        console.log(info);
        setService(info);
      });
  }, []);
  return (
    <div className="container mt-5">
      <Card>
        <Paper sx={{ p: 2, margin: "auto", maxWidth: "auto", flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={4} item>
              <ButtonBase sx={{ height: 228 }}>
                <Img
                  style={{ borderRadius: "10px" }}
                  alt="complex"
                  src={service.picture}
                />
              </ButtonBase>
            </Grid>
            <Grid className="my-auto" item xs={6} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <h3>{service.name}</h3>
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    {service.desc}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    <Link to="/appoinment">
                      <Button variant="contained">Appoinment</Button>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Card>
    </div>
  );
};

export default DetailsService;
