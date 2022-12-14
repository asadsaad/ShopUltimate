import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproductsbycatagery } from "../../redux/actions/productactions";
import BannerArea from "./bannerarea";
import BottomBar from "./bottomnavigation";
import CardSlider from "./cardsslider";
import SideTreeview from "./fsidebar";
import Header from "./header";
import MobileSide from "./mobileside";
import ProductGrid from "./productgrid";
export default function Main() {
  const dispatch = useDispatch();
  const [group, setgroup] = React.useState();
  const [currentcat, setcurreentcat] = React.useState();

  const catageries = useSelector((state) => state.catageries.catageries);

  useEffect(() => {
    if (!group) {
      setgroup(catageries[Math.floor(Math.random() * catageries.length)]);
    }
  }, [catageries]);
  useEffect(() => {
    if (group) {
      setcurreentcat(group?._id);
    }
  }, []);
  useEffect(() => {
    dispatch(getproductsbycatagery(currentcat));
  }, [currentcat]);

  return (
    <>
      <BannerArea
        group={group}
        setgroup={setgroup}
        ct={currentcat}
        setct={setcurreentcat}
      />
      <CardSlider />
      <Grid container spacing={2} sx={{ minHeight: "60vh" }}>
        <Grid item lg={2} md={12}>
          <SideTreeview cat={group} ct={currentcat} setct={setcurreentcat} />
        </Grid>
        <Grid item lg={10} md={12}>
          <ProductGrid group={group} />
        </Grid>
      </Grid>
      <BottomBar />
    </>
  );
}
