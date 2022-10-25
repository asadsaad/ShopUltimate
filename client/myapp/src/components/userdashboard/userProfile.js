import * as React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from "react";
import { makeStyles } from '@material-ui/core'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
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
import { useDispatch } from "react-redux";
import UserSidebar from "../layouts/userSideBar";

const UserProfile = () => {
    const bar = document.getElementById("sidebar");
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState(false);
    const [address, setAddress] = useState('');
    const [addressErr, setAddressErr] = useState(false);
    const [number, setNumber] = useState('');
    const [numberErr, setNumberErr] = useState(false);
    const dispatch = useDispatch();
    const handleSlide = ()=>{
        if(bar.style.left === "-60%"){
            bar.style.left = "0%";
        }
        else{
            bar.style.left = "-60%";
        }
    }
    
    const submitform = async (event) => {
        event.preventDefault();
        setNameErr(false)
        setAddressErr(false)
        setNumberErr(false)

        if (name == '') {
            dispatch(setAlert("Enter Name", "error"))
            setNameErr(true)
        }
        if (address == '') {
            setAddressErr(true)
        }
        if (number == '') {
            setNumberErr(true)
        }
        if (name && address && number) {
            console.log(name, address, number)
        }
    };

    return (
        <>
            <Nav />
            <Box sx={{ display: "flex" }}>
                <Box sx={{ margin: {md:"25px 20px 25px 40px"} }} >
                    <UserSidebar id="sidebar"/>
                </Box>
                <Box sx={{ width: "100%", margin: "25px 40px 25px 20px" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <PersonOutlineIcon fontSize="large" sx={{ color: "red " }} />

                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                Profile
                            </Typography>
                            
                        </Stack>
                        <Box sx={{display:"flex", mt:"20px"}}>
                            <Button component="h2" sx={{ color: "#f44336", backgroundColor: "#ffebee", textTransform:"capitalize", padding:"10px 20px" }}>Edit profile</Button>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleSlide}
                                sx={{ mr: 2, display: { md: 'none' }, marginLeft:"16px" }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    <Grid container sx={{mt:"20px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <Grid item xs={12} md={6} sx={{flex:"4", padding:"20px 0px 0px 0px"}}>
                            <Paper sx={{padding:"15px",display:"flex" , alignItems:"center", justifyContent:"space-between"}}>
                            <Box display="flex">
                            <Avatar sx={{ width: 56, height: 56 }}></Avatar>
                            <Box ml="10px">
                            <Typography variant="h5">Name</Typography>
                            <Typography display="flex">Balance: <Typography color="#d32f2f">$500</Typography></Typography>
                            </Box>
                            </Box>
                            <Typography variant="h5" component="p" align="right">Rank</Typography>
                            </Paper>
                        </Grid >
                        <Grid item sx={{flex:"1", padding:"20px 0px 0px 20px"}}>
                            <Paper sx={{padding:"20px", textAlign:"center"}}>
                            <Typography lineHeight="1"variant="h5" color="#d32f2f">6</Typography>
                            <Typography lineHeight="1">All Orders</Typography>
                            </Paper>
                        </Grid  >
                        <Grid item sx={{flex:"1", padding:"20px 0px 0px 20px"}}>
                            <Paper sx={{padding:"20px", textAlign:"center"}}>
                            <Typography lineHeight="1"variant="h5" color="#d32f2f">6</Typography>
                            <Typography lineHeight="1">All Orders</Typography>
                            </Paper>
                        </Grid >
                        <Grid item sx={{flex:"1", padding:"20px 0px 0px 20px"}}>
                            <Paper sx={{padding:"20px", textAlign:"center"}}>
                            <Typography lineHeight="1"variant="h5" color="#d32f2f">6</Typography>
                            <Typography lineHeight="1">All Orders</Typography>
                            </Paper>
                        </Grid >
                        <Grid item sx={{flex:"1", padding:{xs:"20px 20px 0px 20px" , md:"20px 0px 0px 20px"}}}>
                            <Paper sx={{padding:"20px", textAlign:"center"}}>
                            <Typography lineHeight="1" variant="h5" color="#d32f2f">6</Typography>
                            <Typography lineHeight="1">All Orders</Typography>
                            </Paper>
                        </Grid >
                    </Grid>
                    <Paper padding="20px" mt="20px">
                    <Grid container sx={{display:"flex", flexDirection:{xs:"column", sm:"row"}, justifyContent:"space-around", padding:"20px", mt:"20px"}}>
                            <Grid item><Typography variant="caption" color="gray">Name <Typography color="black">Usama</Typography></Typography></Grid>
                            <Grid item><Typography variant="caption" color="gray">Email<Typography color="black">gujjargaming@gmail.com</Typography></Typography></Grid>
                            <Grid item><Typography variant="caption" color="gray">Address<Typography color="black">Elton st. 133, New York, USA</Typography></Typography></Grid>
                            <Grid item><Typography variant="caption" color="gray">Phone Number<Typography color="black">+123456789</Typography></Typography></Grid>
                            <Grid item><Typography variant="caption" color="gray">Birth Date<Typography color="black">Oct 02 2022</Typography></Typography></Grid>
                    </Grid>

                    </Paper>
                </Box>
            </Box>
        </>
    );
}

export default UserProfile;