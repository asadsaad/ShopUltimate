// import * as React from "react";
import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Paper, Stack } from "@mui/material";
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
    <Grid item xs={4}>
      <Card sx={{}}>
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
      </Card>
    </Grid>
  );
}
