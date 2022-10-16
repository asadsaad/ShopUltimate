// import * as React from "react";
import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
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
      <CardMedia>
        <SwipeableTextMobileStepper images={props.image && props.image} />
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
