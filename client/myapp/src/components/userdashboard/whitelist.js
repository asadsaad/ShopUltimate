import * as React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
import UserSideBar from "./userSideBar";
import Productcard from "../product/productcard";

const Whitelist = () => {


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
                            <FavoriteIcon fontSize="large" sx={{ color: "red " }} />

                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                Whitelist
                            </Typography>

                        </Stack>
                        <Box sx={{ display: "flex" }}>
                            <Button component="h2" sx={{ color: "#f44336", backgroundColor: "#ffebee", textTransform: "capitalize", padding: "10px 20px" }}>Add All to Cart</Button>
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
                    <Grid container spacing={5} mt="10px">
                        <Grid item xs={12} md={6} lg={4} >
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


                </Box>
            </Box>
        </>
    );
}

export default Whitelist;