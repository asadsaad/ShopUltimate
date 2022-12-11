import { Box, Grid } from "@mui/material";
import React from "react";
import img1 from "../../images/offer-1.webp";
import img2 from "../../images/offer-2.webp";
import img3 from "../../images/offer-3.webp";

export default function CardSlider() {
  return (
    <>
      <Box sx={{ p: 3, borderBottom: "1px solid #d0d0d0" }}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <img src={img1} width="100%" />
          </Grid>
          <Grid item md={4} xs={12}>
            <img src={img2} width="100%" />
          </Grid>
          <Grid item md={4} xs={12}>
            <img src={img3} width="100%" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
