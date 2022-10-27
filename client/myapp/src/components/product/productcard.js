// import * as React from "react";
import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, Paper, Stack, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ShoppingCart, Visibility } from "@mui/icons-material";
import { addtocart } from "../../redux/actions/cartactions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SwipeableTextMobileStepper from "../layouts/stepper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Productcard(props) {
  const dispatch = useDispatch();

  return (
    <Card sx={{}}>
      
      <CardMedia sx={{position:"relative"}}>
        <SwipeableTextMobileStepper sx={{margin:"auto"}} images={props.image && props.image} />
        <Box sx={{m:1,fontSize:"12px", backgroundColor:"#d32f2f", width:"fit-content",color:"white",padding:"5px", borderRadius:"5px", position:"absolute", top:"0%", left:"0%"}}>
        25% OFF
      </Box>
      </CardMedia>
      {/* <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={props.image}
        /> */}
      <CardContent sx={{ paddingBottom: 0 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {props.name}
        </Typography>
        <Rating name="read-only" value={5} readOnly size="small" />

        <Typography variant="h6">${props.price}</Typography>
      </CardContent>
      <CardActions>
        <Link
          to={`/product/${props.id}`}
          style={{ width: "100%", textDecoration: "none" }}
        >
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            startIcon={<Visibility />}
          >
            View Item
          </Button>
        </Link>
      </CardActions>
      <CardActions sx={{ paddingTop: 0 }}>
        <Button
          variant="outlined"
          startIcon={<ShoppingCart />}
          fullWidth
          onClick={() => dispatch(addtocart(props.id, props.shopid))}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
