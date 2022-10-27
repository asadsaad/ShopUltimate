import { forwardRef, React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getsingleshop } from "../../redux/actions/shopactions";
import Nav from "../layouts/nav";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from '@material-ui/core'
import './shopview.css'
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
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
import Dialog from '@mui/material/Dialog';
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
import FacebookIcon from '@mui/icons-material/Facebook';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function ShopView() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const params = useParams();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.shop.isLoading);

  const shopdata = useSelector((state) => state.shop.shops);

  useEffect(() => {
    dispatch({ type: SHOP_ACTION_ATTEMPT });

    dispatch(getsingleshop(params.id));
  }, []);




  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (loading) {
    return (
      <Stack alignItems="center" sx={{ marginTop: 2, marginBottom: 2 }}>
        <CircularProgress disableShrink />
      </Stack>
    );
  }


  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <Box>
        <Typography className="text" textAlign="center">
          {isReadMore ? text.slice(0, 80) : text} ...
        </Typography>
        <Typography onClick={toggleReadMore} className="read-or-hide" sx={{ color: "green", cursor: "pointer", fontWeight: "bold", textAlign: "center" }}>
          {isReadMore ? "Read more" : "Less"}
        </Typography>
      </Box>
    );
  };



  return (
    <>
      <Nav />
      <Box sx={{ display: "flex", m: "20px", gap: "25px", position: "sticky", top: "0%" }} sticky>
        <Box sx={{ flex: "1", display: { xs: "none", md: "block" } }} >
          <Paper sx={{ borderRadius: "12px", p: 2 }}  >
            <Box
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                color: "gray"
              }}
            >
              <Stack sx={{ alignItems: "center", m: "20px 0px" }} spacing={2}>
                <Avatar
                  src={shopdata[0]?.shopavatar[0]}
                  variant="rounded"
                  sx={{
                    width: 200,
                    height: 200,
                  }}
                ></Avatar>
                <Typography variant="h5" color="black">Shop Name</Typography>

                <ReadMore>
                  GeeksforGeeks: A Computer Science portal for geeks.
                  It contains well written, well thought and well explained
                  computer science, programming articles and quizzes.
                  It provides a variety of services for you to learn, so thrive
                  and also have fun! Free Tutorials, Millions of Articles, Live,
                  Online and Classroom Courses ,Frequent Coding Competitions,
                  Webinars by Industry Experts, Internship opportunities, and Job
                  Opportunities. Knowledge is power!
                </ReadMore>
                <Box sx={{ display: "flex", opacity: "50%", gap: "5px" }}>
                  <Facebook />
                </Box>
              </Stack>

              <Divider fullWidth />
              <Stack sx={{ m: "20px 10px" }} spacing={3}>
                <Box>
                  <Typography fontWeight="bold">Address </Typography>
                  <Typography fontSize="13px">588 Finwood Road, New Jersey, East Dover, 08753, USA</Typography>
                </Box>
                <Box>
                  <Typography fontWeight="bold">Website </Typography>
                  <Typography fontSize="13px">https://redq.io/</Typography>
                </Box>
              </Stack>
              {/* <Box>
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
              {/* </Box>
                  </Box>
                </Box>  */}

            </Box>
          </Paper>
        </Box>
        <Stack sx={{ flex: "3" }} spacing={5}>
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
          >
            <Avatar
              src={shopdata[0]?.shopavatar[0]}
              onClick={handleClickOpen}
              sx={{
                width: 75,
                height: 75,
                margin: "20px",
                borderRadius: "50%",
                boxShadow: "0px 2px 38px -12px rgba(0,0,0,0.74)",
                cursor: "pointer",
                display:{xs:"block", md:"none"}

              }}
            ></Avatar>
          </Box>
          <Grid container spacing={3} paddingRight="45px">
            <Grid item xs={12} md={6} lg={4} sx={{ textAlign: "center" }}>
              <Productcard
                name="Camera"
                image={["https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F4.LumixDSLR.png&w=1920&q=75"]}
                price="$122"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Productcard
                name="Camera"
                image={["https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F4.LumixDSLR.png&w=1920&q=75"]}
                price="$122"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Productcard
                name="Camera"
                image={["https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F4.LumixDSLR.png&w=1920&q=75"]}
                price="$122"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Productcard
                name="Camera"
                image={["https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F4.LumixDSLR.png&w=1920&q=75"]}
                price="$122"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Productcard
                name="Camera"
                image={["https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FElectronics%2F4.LumixDSLR.png&w=1920&q=75"]}
                price="$122"
              />
            </Grid>
          </Grid>
          <Box textAlign="center">
            <Button variant="contained" color="error" > Load more</Button>
          </Box>
        </Stack>

      </Box >
      <Dialog onClose={handleClose} open={open}>
        <Paper sx={{ borderRadius: "12px", p: 2 }}  >
          <Box sx={{alignItems:"end"}}>
          <CloseIcon sx={{cursor:"pointer"}} onClick={handleClose}/>
          </Box>
            <Box
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              color: "gray"
            }}
          >
            <Stack sx={{ alignItems: "center", m: "20px 0px" }} spacing={2}>
              <Avatar
                src={shopdata[0]?.shopavatar[0]}
                variant="rounded"
                sx={{
                  width: 200,
                  height: 200,
                }}
              ></Avatar>
              <Typography variant="h5" color="black">Shop Name</Typography>

              <ReadMore>
                GeeksforGeeks: A Computer Science portal for geeks.
                It contains well written, well thought and well explained
                computer science, programming articles and quizzes.
                It provides a variety of services for you to learn, so thrive
                and also have fun! Free Tutorials, Millions of Articles, Live,
                Online and Classroom Courses ,Frequent Coding Competitions,
                Webinars by Industry Experts, Internship opportunities, and Job
                Opportunities. Knowledge is power!
              </ReadMore>
              <Box sx={{ display: "flex", opacity: "50%", gap: "5px" }}>
                <Facebook />
              </Box>
            </Stack>

            <Divider fullWidth />
            <Stack sx={{ m: "20px 10px" }} spacing={3}>
              <Box>
                <Typography fontWeight="bold">Address </Typography>
                <Typography fontSize="13px">588 Finwood Road, New Jersey, East Dover, 08753, USA</Typography>
              </Box>
              <Box>
                <Typography fontWeight="bold">Website </Typography>
                <Typography fontSize="13px">https://redq.io/</Typography>
              </Box>
            </Stack>
            {/* <Box>
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
            {/* </Box>
                  </Box>
                </Box>  */}

          </Box>
        </Paper>
      </Dialog>


    </>
  );
}
