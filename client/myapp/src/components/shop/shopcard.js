// import * as React from "react";
import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StarBorder } from "@mui/icons-material";
import nopreview from "../../images/nopreview.png";

import {
  Grid,
  Paper,
  Stack,
  Box,
  Avatar,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Rating,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Shopcard(props) {
  const dispatch = useDispatch();
  return (
    // <Grid item md={4} sx={12}>

    <Card sx={{ maxHeight: "250px", minHeight: "250px" }}>
      <Link to={`/shop/${props.id}`}>
        <ImageListItem sx={{ height: "100% !important" }}>
          <ImageListItemBar
            sx={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)",
            }}
            title={props.city ? props.city + "," + props.country : null}
            actionIcon={
              <Tooltip title={props.name} sx={{ mr: "5px", mt: "5px" }}>
                <Avatar src={props.image && props.image} />
              </Tooltip>
            }
            position="top"
          />
          <img
            src={props.image}
            alt={props.name}
            style={{ cursor: "pointer" }}

            // onClick={() => dispatch({ type: 'UPDATE_ROOM', payload: room })}
          />
          <ImageListItemBar
            title={props.name}
            actionIcon={
              <Rating
                sx={{ color: "rgba(255,255,255, 0.8)", mr: "5px" }}
                name="room-rating"
                defaultValue={3.5}
                precision={0.5}
                emptyIcon={
                  <StarBorder sx={{ color: "rgba(255,255,255, 0.8)" }} />
                }
              />
            }
          />
        </ImageListItem>
      </Link>
    </Card>
    // </Grid>

    // <Grid item md={2.4} xs={6}>
    //   <Paper sx={{ p: 1 }}>
    //     <Avatar
    //       variant="rounded"
    //       src={props.image}
    //       alt={props.name}
    //       sx={{ width: "100%", height: "150px" }}
    //     ></Avatar>
    //     <Typography
    //       sx={{ textAlign: "center", mt: 1, mb: 1, fontWeight: "bold" }}
    //     >
    //       {props.name}
    //     </Typography>
    //     <Link
    //       to={`shop/${props.id}`}
    //       style={{ textDecoration: "none", width: "100%" }}
    //     >
    //       <Button
    //         variant="contained"
    //         color="primary"
    //         fullWidth
    //         sx={{ fontWeight: "bold" }}
    //       >
    //         Visit Store
    //       </Button>
    //     </Link>
    //   </Paper>

    /* <Card sx={{}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={props.image}
        />
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="p"></Typography>

          <Button
            variant="outlined"
            color="primary"
            sx={{ marginRight: 1 }}
            size="small"
          >
            {props.catagery}
          </Button>
          <Button variant="outlined" color="primary" size="small">
            {props.subcatagery}
          </Button>
        </CardContent>
        <CardActions>
          <Link
            to={`shop/${props.id}`}
            style={{ textDecoration: "none", width: "100%" }}
          >
            <Button variant="contained" color="primary" fullWidth>
              View Shop
            </Button>
          </Link>
        </CardActions>
      </Card> */
  );
}
