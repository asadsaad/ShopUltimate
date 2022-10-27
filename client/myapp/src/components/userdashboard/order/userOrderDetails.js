import * as React from "react";
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
    Container,
    Box,
    Paper,
    Stack,
    Typography,
    Avatar,
    Grid,
    Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import UserSideBar from "../userSideBar";
import Nav from "../../layouts/nav";
const UserOrderDetails = () => {
    return (
        <>
            <Nav />
            <Box sx={{ display: "flex", position: "relative" }}>
                <Box sx={{ margin: { md: "25px 20px 25px 40px" } }}>
                    <UserSideBar />
                </Box>
                <Box sx={{ width: "100%", margin: "25px 40px 25px 20px" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                        <Stack direction="row" spacing={1}>
                            <ShoppingBagIcon fontSize="large" sx={{ color: "red " }} />

                            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                                Order Details
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Button variant="contained" color="success">
                                Pending
                            </Button>
                            <Button variant="contained">Paid</Button>
                        </Stack>
                    </Box>

                    <Paper sx={{ mt: 2 }}>
                        <Box
                            sx={{
                                background: "#F3F5F9",
                                display: "flex",
                                justifyContent: "space-between",
                                p: 2,
                                flexWrap: "wrap",
                            }}
                        >
                            <Typography>
                                <span style={{ color: "#7D879C" }}>Order ID:</span> 123456
                            </Typography>
                            <Typography>
                                <span style={{ color: "#7D879C" }}>Placed ON:</span> 22-6-22
                            </Typography>
                            <Typography>
                                <span style={{ color: "#7D879C" }}>Delevery Date:</span> 22-6-22
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex ", p: 3 }}>
                            <Box sx={{}}>
                                <Avatar
                                    variant="square"
                                    sx={{ width: 56, height: 56, mr: 2 }}
                                ></Avatar>
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: "bold" }}>Product Name</Typography>
                                <Typography sx={{ color: "#7D879C" }}>$250 x 1</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex ", p: 3 }}>
                            <Box sx={{}}>
                                <Avatar
                                    variant="square"
                                    sx={{ width: 56, height: 56, mr: 2 }}
                                ></Avatar>
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: "bold" }}>Product Name</Typography>
                                <Typography sx={{ color: "#7D879C" }}>$250 x 1</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex ", p: 3 }}>
                            <Box sx={{}}>
                                <Avatar
                                    variant="square"
                                    sx={{ width: 56, height: 56, mr: 2 }}
                                ></Avatar>
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: "bold" }}>Product Name</Typography>
                                <Typography sx={{ color: "#7D879C" }}>$250 x 1</Typography>
                            </Box>
                        </Box>
                    </Paper>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            <Paper sx={{ p: 3, mt: 3 }}>
                                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                    Shipping Address
                                </Typography>
                                <Typography variant="p">
                                    Kelly Williams 777 Brockton Avenue, Abington MA 2351
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Paper sx={{ p: 3, mt: 3 }}>
                                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                    Order Summary
                                </Typography>
                                <Box
                                    sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
                                >
                                    <Typography sx={{ color: "#7D879C" }}>Sub Total</Typography>
                                    <Typography sx={{ fontWeight: "bold" }}>$39</Typography>
                                </Box>
                                <Box
                                    sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
                                >
                                    <Typography sx={{ color: "#7D879C" }}>Shipping</Typography>
                                    <Typography sx={{ fontWeight: "bold" }}>$99</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        borderBottom: "1px solid #d0d0d0",
                                        pb: 1,
                                    }}
                                >
                                    <Typography sx={{ color: "#7D879C" }}>Discount</Typography>
                                    <Typography sx={{ fontWeight: "bold" }}>$100</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        mt: 1,
                                        mb: 1,
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "bold" }}>Total</Typography>
                                    <Typography sx={{ fontWeight: "bold" }}>$99</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        borderTop: "1px solid #d0d0d0",
                                        pt: 1,
                                    }}
                                >
                                    <Typography sx={{ fontWeight: "bold" }}>Paid</Typography>
                                    <Typography sx={{ fontWeight: "bold" }}>Not Paid</Typography>
                                </Box>
                                <Box>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{ mt: 1, borderRadius: "20px" }}
                                    >
                                        Pay Now
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};
export default UserOrderDetails;
