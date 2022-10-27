import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
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
    IconButton,
} from "@mui/material";
import Nav from '../../layouts/nav';
import UserSideBar from '../userSideBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PaymentMethods = () => {
  const dispatch = useDispatch();
  const payments_ = useSelector((state) => state.payment.paymentMethods);

    const bar = document.getElementById("sidebar");
    const handleSlide = () => {
        if (bar.style.left === "-60%") {
            bar.style.left = "0%";
        }
        else {
            bar.style.left = "-60%";
        }
    }

    return (
        <>
            <Nav />
            <Box sx={{ display: "flex", position: "relative" }}>
                <Box sx={{ margin: { md: "25px 20px 25px 40px" }, }}>
                    <UserSideBar />
                </Box>
                <Box sx={{ width: "100%", margin: "25px 40px 25px 20px" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <CreditCardOutlinedIcon fontSize="large" sx={{ color: "red " }} />

                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                Payment Methods
                            </Typography>
                        </Stack>
                        <Box sx={{ display: "flex", '& a':{textDecoration:"none"}}}>
                            <Link to="/useraddmethod"><Button component="p" sx={{ color: "#f44336", backgroundColor: "#ffebee", textTransform:"capitalize", padding:"10px 20px" }}>Add Payment Metod</Button></Link>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleSlide}
                                sx={{ mr: 2, display: { md: 'none' }, marginLeft: "16px" }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>

                    </Box>
                    <Box mt="20px">
                        <Paper sx={{ mt: "20px", p: "8px 16px", borderRadius: "5px" }}>
                            <Grid container sx={{ alignItems: "center", justifyContent: "space-between" }} spacing={2}>
                                <Grid item xs={2} sx={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                                    <Paper><Avatar variant="rounded"  src="https://bazar-react.vercel.app/assets/images/payment-methods/PayPal.svg">
                                    </Avatar></Paper>
                                </Grid>
                                <Grid item xs={3} sx={{display:"flex", justifyContent:"center"}}>
                                <Typography fontWeight="bold">Ralf Edward</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography noWrap>1234************</Typography>
                                </Grid>

                                <Grid item xs={2}>
                                    <Typography>08/2025</Typography>
                                </Grid>

                                <Grid item xs={2}>
                                    <Typography sx={{display:"flex", justifyContent:"center"}}>
                                        <IconButton>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default PaymentMethods;