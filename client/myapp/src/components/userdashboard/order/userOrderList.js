import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link, Navigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
  IconButton,
} from "@mui/material";
import Nav from "../../layouts/nav";
import { useDispatch, useSelector } from "react-redux";

import UserSideBar from "../userSideBar";
import { useEffect, useState } from "react";
import { deleteaddress, getaddress } from "../../../redux/actions/addressactions";
import Updateaddress from "../address/updateaddress";

const UserOrderList = () => {
  const [open, setOpen] = useState(false);
  const [currentaddress, setcurrentaddress] = useState(null);

  const dispatch = useDispatch();
  const bar = document.getElementById("sidebar");
  const handleSlide = () => {
    if (bar.style.left === "-60%") {
      bar.style.left = "0%";
    } else {
      bar.style.left = "-60%";
    }
  };
  useEffect(() => {
    dispatch(getaddress());
  }, []);

  const address_ = useSelector((state) => state.address.addressess);
  const handleupdate = async (address) => {
    setcurrentaddress(address);
    setOpen(true);
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
                Orders List
              </Typography>
            </Stack>
                      </Box>






          {/* Header */}
          <Box mt="20px">
                 
                    <Grid
                      container
                      sx={{
                        color:"gray",
                        padding:"0px 16px",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      spacing={2}
                    >
                      <Grid item xs={2}>
                        <Typography fontSize="18px">Order #</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography fontSize="18px">
                          Status
                        </Typography>
                      </Grid>

                      <Grid item xs={2} fontSize="18px">
                        <Typography>Date</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography fontSize="18px">Total</Typography>
                      </Grid>

                      <Grid item xs={1}>
                        <Typography sx={{display:"flex", justifyContent:"center"}}>
                          
                        </Typography>
                      </Grid>
                    </Grid>
          </Box>
          {/* Addresses */}
          <Box mt="20px">
            {address_?.length > 0
              ? address_.map((address) => (
                  <Paper
                    sx={{ mt: "20px", p: "8px 16px", borderRadius: "5px" }}
                  >
                    <Grid
                      container
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                      spacing={2}
                    >
                      <Grid item xs={2}>
                        <Typography>{address?.user?.username}</Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <Typography noWrap>
                          {address?.streetaddress} {", "}
                          {address?.city} {", "}
                          {address?.country}
                        </Typography>
                      </Grid>

                      <Grid item xs={2}>
                        <Typography>{address?.phone}</Typography>
                      </Grid>

                      <Grid item xs={2}>
                        <Typography>{address?.phone}</Typography>
                      </Grid>

                      <Grid item xs={1}>
                        <Typography sx={{display:"flex", justifyContent:"center"}}>
                            <Link to="/userorder/1">
                          <IconButton>
                            <ArrowForwardIcon />
                          </IconButton>
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Paper>
                ))
              : "No address found"}
            {/* <Paper sx={{ mt: "20px", p: "8px 16px", borderRadius: "5px" }}>
              <Grid
                container
                sx={{ alignItems: "center", justifyContent: "space-between" }}
                spacing={2}
              >
                <Grid item xs={2}>
                  <Typography>Ralf Edward</Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography noWrap>
                    777 Brockton Avenue, Abington MA 2351
                  </Typography>
                </Grid>

                <Grid item xs={2}>
                  <Typography>+1927987987498</Typography>
                </Grid>

                <Grid item xs={2}>
                  <Typography>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Typography>
                </Grid>
              </Grid>
            </Paper> */}
          </Box>
        </Box>
      </Box>
      <Updateaddress
        open={open}
        setOpen={setOpen}
        currentaddress={currentaddress}
      />
    </>
  );
};

export default UserOrderList;
