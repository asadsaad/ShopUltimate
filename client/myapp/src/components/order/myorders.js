import React, { useEffect } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import {
  Pagination,
  Stack,
  Paper,
  Box,
  Container,
  Typography,
  Chip,
  IconButton,
  Grid,
} from "@mui/material";
import Nav from "../layouts/nav";
import { useDispatch, useSelector } from "react-redux";
import { getorders_c } from "../../redux/actions/orderactions";
import { Link } from "react-router-dom";
const Myorders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getorders_c());
  }, []);
  const orders = useSelector((state) => state.order.c_orders);
  return (
    <>
      <Nav />
      <Container>
        <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
          <ShoppingBagIcon fontSize="large" sx={{ color: "red " }} />

          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            My Orders
          </Typography>
        </Stack>
        <Box sx={{ m: 1, p: 1 }}>
          <Grid container sx={{}} spacing={2}>
            <Grid item xs={2.4}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#7D879C",
                  fontSize: "18px",
                }}
              >
                Order#
              </Typography>
            </Grid>
            <Grid item xs={2.4}>
              <Typography
                sx={{ fontWeight: "bold", color: "#7D879C", fontSize: "18px" }}
              >
                Status
              </Typography>
            </Grid>

            <Grid item xs={2.4}>
              <Typography
                sx={{ fontWeight: "bold", color: "#7D879C", fontSize: "18px" }}
              >
                Date Purchased
              </Typography>
            </Grid>

            <Grid item xs={2.4}>
              <Typography
                sx={{ fontWeight: "bold", color: "#7D879C", fontSize: "18px" }}
              >
                Total
              </Typography>
            </Grid>

            <Grid item xs={2.4}>
              <Box></Box>
            </Grid>
          </Grid>
        </Box>
        {/* ############# */}
        <Box>
          {orders &&
            orders.map((order) => {
              return (
                <Paper sx={{ m: 1, p: 1, borderRadius: "5px" }}>
                  <Grid container sx={{ alignItems: "center" }} spacing={2}>
                    <Grid item xs={2.4}>
                      <Typography>{order._id}</Typography>
                    </Grid>
                    <Grid item xs={2.4}>
                      <Chip label={order.deliverystatus} />
                    </Grid>

                    <Grid item xs={2.4}>
                      <Typography>{order.createdat}</Typography>
                    </Grid>

                    <Grid item xs={2.4}>
                      <Typography>${order.ordertotal}</Typography>
                    </Grid>

                    <Grid item xs={2.4}>
                      <Link to={`/order/${order._id}`}>
                        <IconButton>
                          <ArrowForwardIcon />
                        </IconButton>
                      </Link>
                    </Grid>
                  </Grid>
                </Paper>
              );
            })}
        </Box>
      </Container>
    </>
  );
};
export default Myorders;
