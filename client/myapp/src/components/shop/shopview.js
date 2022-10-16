import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getsingleshop } from "../../redux/actions/shopactions";
import Nav from "../layouts/nav";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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
  InputLabel,
  Autocomplete,
  Chip,
  Checkbox,
  TextField,
  Pagination,
} from "@mui/material";
import Productcard from "../product/productcard";
import CircularProgress from "@mui/material/CircularProgress";

import {
  PRODUCT_ACTION_ATTEMPT,
  SHOP_ACTION_ATTEMPT,
  SHOP_ACTION_SUCCESS,
} from "../../redux/types";
import {
  Facebook,
  MessageOutlined,
  FilterAlt,
  Phone,
  NearMe,
} from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function ShopView() {
  const [value, setValue] = useState(0);

  const params = useParams();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.shop.isLoading);

  const shopdata = useSelector((state) => state.shop.shops);

  useEffect(() => {
    dispatch({ type: SHOP_ACTION_ATTEMPT });

    dispatch(getsingleshop(params.id));
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
      <Container sx={{ mt: 3 }} maxWidth="xl">
        <Box
          sx={{
            wdith: "100%",
            height: "300px",
            backgroundImage: `url(${shopdata[0]?.shopbanner[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "12px",
          }}
        ></Box>

        {/* <img
            src={shopdata[0]?.shopbanner[0]}
            width="100%"
            height="200vh"
          ></img> */}
        <Paper sx={{ mt: 2, borderRadius: "12px", p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
              <Avatar
                src={shopdata[0]?.shopavatar[0]}
                variant="rounded"
                sx={{
                  width: 100,
                  height: 100,
                }}
              ></Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {shopdata[0]?.shopname}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <Rating name="read-only" value={5} readOnly size="small" />
                  <Typography>(5)</Typography>
                </Stack>
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <Typography sx={{ fontSize: "12px", mt: 0.5 }}>
                      5 Reviews | 52 Orders
                    </Typography>
                    {/* <Typography>
                    {shopdata[0]?.streetaddress},{shopdata[0]?.city},
                    {shopdata[0]?.country}
                  </Typography>
                  <Typography>{shopdata[0]?.shopphone}</Typography> */}
                  </Box>
                </Box>
              </Box>
            </Stack>
            <Stack spacing="1">
              <Box>
                <Button
                  variant="outlined"
                  endIcon={<MessageOutlined />}
                  color="success"
                >
                  Message
                </Button>
              </Box>
            </Stack>
          </Box>
        </Paper>
        <Grid container spacing={1}>
          <Grid item md={3} xs={12}>
            <Paper sx={{ p: 2, mt: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Filter Products
              </Typography>
              <Box sx={{ borderBottom: "1px solid #d0d0d0", pb: 2 }}>
                <InputLabel sx={{ mb: 1 }}>Product Name</InputLabel>
                <TextField
                  variant="outlined"
                  placeholder="Red Football"
                  fullWidth
                  size="small"
                />
                <InputLabel sx={{ mt: 1, mb: 1 }}>Catagery</InputLabel>

                <Autocomplete
                  id="free-solo-demo"
                  freeSolo
                  options={[]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{ mb: 1 }}
                      size="small"
                      placeholder="Sports"
                    />
                  )}
                />
                <InputLabel sx={{ mb: 1 }}>Brands</InputLabel>
              </Box>
              <Box>
                <InputLabel sx={{ mt: 2 }}>Ratings</InputLabel>
                <Stack>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox />
                    <Rating
                      name="read-only"
                      readOnly
                      value="5"
                      // onChange={(event, newValue) => {
                      //   setValue(newValue);
                      // }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox />
                    <Rating
                      name="read-only"
                      readOnly
                      value="4"
                      // onChange={(event, newValue) => {
                      //   setValue(newValue);
                      // }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox />
                    <Rating
                      name="read-only"
                      readOnly
                      value="3"
                      // onChange={(event, newValue) => {
                      //   setValue(newValue);
                      // }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox />
                    <Rating
                      name="read-only"
                      readOnly
                      value="2"
                      // onChange={(event, newValue) => {
                      //   setValue(newValue);
                      // }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox />
                    <Rating
                      name="read-only"
                      readOnly
                      value="1"
                      // onChange={(event, newValue) => {
                      //   setValue(newValue);
                      // }}
                    />
                  </Box>
                </Stack>
              </Box>
              <Button variant="contained" fullWidth endIcon={<FilterAlt />}>
                Apply Filters
              </Button>
            </Paper>
          </Grid>

          <Grid item md={9} xs={12}>
            {shopdata[0] ? (
              <Box
                sx={{
                  mt: 2,
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(230px, 1fr))!important",
                  gap: "10px",
                }}
              >
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
              </Box>
            ) : (
              <Stack alignItems="center" sx={{ marginTop: 2, marginBottom: 2 }}>
                <CircularProgress disableShrink />
              </Stack>
            )}
            <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
              <Pagination count={10} color="primary" variant="outlined" />
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            border: "1px solid #d0d0d0",
            p: 2,
            mt: 2,
            mb: 2,
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Shop Details" {...a11yProps(0)} />
              <Tab label="Shop Contact" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Typography
              dangerouslySetInnerHTML={{ __html: shopdata[0]?.aboutShop }}
            >
              {/* {shopdata[0]?.aboutShop} */}
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Stack>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Phone sx={{ ml: 1 }} />
                <Typography>{shopdata[0]?.shopphone}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <NearMe />
                <Typography sx={{ ml: 1 }}>
                  {shopdata[0]?.streetaddress +
                    ", " +
                    shopdata[0]?.city +
                    ", " +
                    shopdata[0]?.country}
                </Typography>
              </Box>
            </Stack>
          </TabPanel>
        </Box>
      </Container>
    </div>
  );
}
