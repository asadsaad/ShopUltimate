import * as React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
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
import Nav from "../layouts/nav";
import { setAlert } from "../../redux/actions/alertactions";
import { useDispatch, useSelector } from "react-redux";
import UserSideBar from "./userSideBar";
import { addaddress } from "../../redux/actions/addressactions";
import { useNavigate } from "react-router-dom";

const AddAddress = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [country, setcountry] = useState();
  const [city, setcity] = useState();
  const [postalcode, setpostalcode] = useState();
  const [streetaddress, setstreetaddress] = useState();

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
    const formData = { email, phone, country, city, postalcode, streetaddress };
    dispatch(addaddress(formData, navigate));
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
              <LocationOnIcon fontSize="large" sx={{ color: "red " }} />

              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Add Address
              </Typography>
            </Stack>
            <Box sx={{ display: "flex" }}>
              <Button
                component="h2"
                sx={{
                  color: "#f44336",
                  backgroundColor: "#ffebee",
                  textTransform: "capitalize",
                  padding: "10px 20px",
                }}
              >
                Back to addresses
              </Button>
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
                    label="Email"
                    variant="outlined"
                    color="error"
                    fullWidth
                    value={email}
                    size="small"
                    // error={nameErr}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Phone"
                    value={phone}
                    variant="outlined"
                    color="error"
                    fullWidth
                    size="small"
                    type={Number}
                    //   error={numberErr}
                    onChange={(e) => setphone(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Postal Code"
                    value={postalcode}
                    variant="outlined"
                    color="error"
                    fullWidth
                    size="small"
                    //   type={Number}
                    //   error={numberErr}
                    onChange={(e) => setpostalcode(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="City"
                    value={city}
                    variant="outlined"
                    color="error"
                    fullWidth
                    size="small"
                    //   type={Number}
                    //   error={numberErr}
                    onChange={(e) => setcity(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Countrye"
                    value={country}
                    variant="outlined"
                    color="error"
                    fullWidth
                    size="small"
                    //   type={Number}
                    //   error={numberErr}
                    onChange={(e) => setcountry(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Strret Address"
                    value={streetaddress}
                    variant="outlined"
                    color="error"
                    fullWidth
                    size="small"
                    //   type={Number}
                    //   error={numberErr}
                    onChange={(e) => setstreetaddress(e.target.value)}
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

export default AddAddress;
