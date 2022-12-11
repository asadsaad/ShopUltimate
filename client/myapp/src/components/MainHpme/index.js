import { Grid } from "@mui/material";
import React from "react";
import BannerArea from "./bannerarea";
import BottomBar from "./bottomnavigation";
import CardSlider from "./cardsslider";
import SideTreeview from "./fsidebar";
import Header from "./header";
import MobileSide from "./mobileside";
import ProductGrid from "./productgrid";
export default function Main() {
  return (
    <>
      <BannerArea />
      <CardSlider />
      <Grid container spacing={2}>
        <Grid item lg={2} md={12}>
          <SideTreeview />
        </Grid>
        <Grid item lg={10} md={12}>
          <ProductGrid />
        </Grid>
      </Grid>
      <BottomBar />
    </>
  );
}
