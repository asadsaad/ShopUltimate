// import * as React from "react";
import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, Paper, Stack, Rating, IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Favorite, ShoppingCart, Visibility } from "@mui/icons-material";
import { addtocart } from "../../redux/actions/cartactions";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <Link to={`/product/${props.id}`} style={{ textDecoration: "none" }}>
      <Paper
        sx={{
          position: "relative",
          boxShadow: "0",
          "&:hover": {
            opacity: 1,
            "& .icons": {
              opacity: 1,
            },
          },
        }}
      >
        <Box
          sx={{
            fontSize: "12px",
            backgroundColor: "#009f7f",
            width: "fit-content",
            color: "white",
            padding: "7px",
            borderRadius: "15px",
            position: "absolute",
            right: "5px",
            top: "5px",
            fontWeight: "bold",
          }}
        >
          25%
        </Box>
        <Box
          className="icons"
          sx={{
            color: "#009f7f",
            position: "absolute",
            left: "5px",
            top: "5px",
            display: "flex",
            flexDirection: "column",
            opacity: 0,
          }}
        >
          {/* <Tooltip title="Add To Cart"> */}

          <IconButton
            onClick={() => dispatch(addtocart(props.id, props.shopid))}
          >
            <ShoppingCart />
          </IconButton>
          {/* </Tooltip> */}
          {/* <Tooltip title="Add To Wishlist"> */}
          <IconButton onClick={(e) => e.preventDefault()}>
            <Favorite />
          </IconButton>
          {/* </Tooltip> */}
        </Box>
        <img
          src={props.image && props.image}
          style={{ width: "100%", height: "200px" }}
        ></img>
        {/* <CardMedia>
        <SwipeableTextMobileStepper
          sx={{ margin: "auto" }}
          images={props.image && props.image[0]}
        />
      </CardMedia> */}
        {/* <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={props.image}
        /> */}
        <CardContent sx={{ paddingBottom: 0, paddingTop: "10px" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "#333",
              fontSize: "19px",
            }}
          >
            {props.name}
          </Typography>
          {/* <Rating name="read-only" value={5} readOnly size="small" /> */}

          <Typography sx={{ textAlign: "center", fontSize: "18px" }}>
            ${props.price}
          </Typography>
        </CardContent>
        {/* <CardActions> */}
        {/* <Link
          to={`/product/${props.id}`}
          style={{ width: "100%", textDecoration: "none" }}
        >
         
        </Link> */}
        {/* </CardActions> */}
        <CardActions sx={{ paddingTop: 0 }}>
          {/* <Button
          variant="contained"
          startIcon={<ShoppingCart />}
          fullWidth
          sx={{ background: "#009f7f" }}
          onClick={() => dispatch(addtocart(props.id, props.shopid))}
        >
          Add To Cart
        </Button> */}
        </CardActions>
      </Paper>
    </Link>
  );
}
