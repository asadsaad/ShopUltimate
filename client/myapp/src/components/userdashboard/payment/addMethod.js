import * as React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

import {
  Container,
  Box,
  Paper,
  Stack,
  Typography,
  Avatar,
  Button,
  paperClasses,
  Grid,
  TextField,
} from "@mui/material";
import Nav from "../../layouts/nav";
import { setAlert } from "../../../redux/actions/alertactions";
import { useDispatch, useSelector } from "react-redux";
import UserSideBar from "../userSideBar";
import { addaddress } from "../../../redux/actions/addressactions";
import { Link, useNavigate } from "react-router-dom";
import { SimCardDownloadTwoTone } from "@mui/icons-material";

const AddMethod = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setname] = useState();
  const [cardNo, setcardNo] = useState();
  const [expiry, setexpiry] = useState();

  const loading = useSelector((state) => state.address.loading);

  const bar = document.getElementById("sidebar");
  const handleSlide = () => {
    if (bar.style.left === "-60%") {
      bar.style.left = "0%";
    } else {
      bar.style.left = "-60%";
    }
  };

  const submitform = async (event) => {
    event.preventDefault();
    const formData = { name, cardNo, expiry };
  };

  return (
    <>
      <Nav />
      <Box sx={{ display: "flex", position: "relative" }}>
        <Box sx={{ margin: { md: "25px 20px 25px 40px" } }}>
          <UserSideBar />
        </Box>
        <Box sx={{ width: "100%", margin: "25px 40px 25px 20px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <CreditCardOutlinedIcon fontSize="large" sx={{ color: "red " }} />

              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Add Payment Method
              </Typography>
            </Stack>
            <Box sx={{ display: "flex", '& a':{textDecoration : "none"}}}>
              <Link to="/userpayment" >
              <Button
                component="h2"
                sx={{
                  
                  color: "#f44336",
                  backgroundColor: "#ffebee",
                  textTransform: "capitalize",
                  padding: "10px 20px",
                }}
              >
                Back to Payments
              </Button>
              </Link>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleSlide}
                sx={{ mr: 2, display: { md: "none" }, marginLeft: "16px" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
          <Paper sx={{ marginTop: "20px" }}>
            <Box
              component="form"
              method="post"
              onSubmit={submitform}
              sx={{ padding: "25px" }}
            >
              <Grid container rowSpacing={5} columnSpacing={5}>
                <Grid item md={6} xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Name on card"
                    variant="outlined"
                    color="error"
                    fullWidth
                    value={name}
                    size="small"
                    // error={nameErr}
                    onChange={(e) => setname(e.target.value)}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Card Number"
                    value={cardNo}
                    variant="outlined"
                    color="error"
                    fullWidth
                    size="small"
                    type={Number}
                    //   error={numberErr}
                    onChange={(e) => setcardNo(e.target.value)}
                  />
                  </Grid>
                <Grid item md={6} xs={12}>

                  <TextField
                    id="outlined-basic"
                    label="Date of issuence"
                    value={expiry}
                    variant="outlined"
                    color="error"
                    fullWidth
                    size="small"
                    //   type={Number}
                    //   error={numberErr}
                    onChange={(e) => setexpiry(e.target.value)}
                  />
                  </Grid>
               
              </Grid>
              <Button
                type="submit"
                omponenet="h2"
                variant="contained"
                color="error"
                sx={{ marginTop: "20px" }}
              >
                Save Changes
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default AddMethod;
