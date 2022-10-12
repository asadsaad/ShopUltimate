import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getsingleshop } from "../../redux/actions/shopactions";
import Nav from "../layouts/nav";
import {
  Grid,
  Container,
  Stack,
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Rating,
  Button,
} from "@mui/material";
import Productcard from "../product/productcard";
import CircularProgress from "@mui/material/CircularProgress";

import {
  PRODUCT_ACTION_ATTEMPT,
  SHOP_ACTION_ATTEMPT,
  SHOP_ACTION_SUCCESS,
} from "../../redux/types";
export default function ShopView() {
  const params = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.shop.isLoading);

  const shopdata = useSelector((state) => state.shop.shops);

  useEffect(() => {
    dispatch({ type: SHOP_ACTION_ATTEMPT });

    dispatch(getsingleshop(params.id));
  }, []);
  if (loading) {
    return (
      <Stack alignItems="center" sx={{ marginTop: 2, marginBottom: 2 }}>
        <CircularProgress disableShrink />
      </Stack>
    );
  }
  return (
    <div>
      <Nav />
      <Container sx={{ mt: 3 }}>
        <Box
          sx={{
            wdith: "100%",
            border: "1px solid #d0d0d0",
            pb: 1,
            borderRadius: "12px",
          }}
        >
          <img
            src={shopdata[0]?.shopbanner[0]}
            width="100%"
            height="200vh"
          ></img>
          <Stack direction="row" spacing={2}>
            <Avatar
              src={shopdata[0]?.shopavatar[0]}
              sx={{
                width: 140,
                height: 140,
                mt: "-70px",
                border: "5px solid white",
                ml: 3,
              }}
            ></Avatar>
            <Box>
              <Typography variant="h4">{shopdata[0]?.shopname}</Typography>
              <Stack direction="row" spacing={1}>
                <Rating name="read-only" value={5} readOnly />
                <Typography>(5)</Typography>
              </Stack>
              <Box sx={{ display: "flex" }}>
                <Box>
                  <Typography>
                    {shopdata[0]?.streetaddress},{shopdata[0]?.city},
                    {shopdata[0]?.country}
                  </Typography>
                  <Typography>{shopdata[0]?.shopphone}</Typography>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box></Box>

        {/* <Paper sx={{ marginTop: 3, padding: 5 }}>
          <Typography variant="h5">
            More Details About{" "}
            <span style={{ color: "blue" }}>
              {shopdata[0] && shopdata[0].shopname}
            </span>
          </Typography>
          <List>
            <ListItem disablePadding>
              About Shop : {shopdata[0] && shopdata[0].aboutShop}
            </ListItem>
            <ListItem disablePadding>
              Contact Shop : {shopdata[0] ? shopdata[0].shopphone : "---"}
            </ListItem> */}
        {/* <ListItem disablePadding>
              Shop Address
              {shopdata[0].streetaddress && shopdata[0].streetaddress}{" "}
              {shopdata[0].city && shopdata[0].city}{" "}
              {shopdata[0].country && shopdata[0].country}
            </ListItem> */}
        {/* </List>
        </Paper> */}

        {shopdata[0] ? (
          <Paper sx={{ mt: 3, padding: 5 }}>
            <Typography variant="h3" sx={{ textAlign: "center", mb: 2 }}>
              Products
            </Typography>
            <Grid container spacing={2}>
              {shopdata[0].products.length > 0
                ? shopdata[0].products.map((item) => (
                    <Productcard
                      key={item._id}
                      name={item.productTitle}
                      image={item.images && item.images}
                      price={item.price}
                      id={item._id}
                      shopid={shopdata[0]._id}
                    />
                  ))
                : "This Shop Has No Active Products"}
            </Grid>
          </Paper>
        ) : (
          <Stack alignItems="center" sx={{ marginTop: 2, marginBottom: 2 }}>
            <CircularProgress disableShrink />
          </Stack>
        )}
      </Container>
    </div>
  );
}
