import * as React from "react";
import { useState } from "react";
import { makeStyles } from '@material-ui/core'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Input from "@mui/material/Input";

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

const EditProfile = () => {

  
    const useStyles = makeStyles({
        field: {
            error: {

            }
        }
    })

    const classes = useStyles();
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState(false);
    const [address, setAddress] = useState('');
    const [addressErr, setAddressErr] = useState(false);
    const [number, setNumber] = useState('');
    const [numberErr, setNumberErr] = useState(false);
    const dispatch = useDispatch();
    const bar = document.getElementById("sidebar");
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
                <Box sx={{ margin: {md:"25px 20px 25px 40px"}, display: { xs: "none", md: "block" } }} >
                    <UserSidebar id="sidebar"/>
                </Box>
                <Box sx={{ width: "100%", margin: "25px 40px 25px 20px" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <PersonIcon fontSize="large" sx={{ color: "red " }} />

                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                Edit Profile
                            </Typography>
                            
                        </Stack>
                        <Box sx={{display:"flex"}}>
                        <Button component="h2" sx={{ color: "#f44336", backgroundColor: "#ffebee", textTransform:"capitalize", padding:"10px 20px" }}>Back To profile</Button>
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
                    
                    <Paper sx={{ marginTop: "20px" }}>
                        <Box component="form" method="post" onSubmit={submitform} sx={{ padding: "25px" }}>
                        <Typography align="center" m={"0px 30px 30px 30px"}>
              <label htmlFor="icon-button-file">
                <Input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  sx={{display:"none"}}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  align="center"
                  variant="contained"
                  size="small"
                >
                  <Avatar
                    sx={{
                      width: 150,
                      height: 150,
                      align: "center",
                    }}
                  >
                  </Avatar>
                </IconButton>
              </label>
            </Typography>
                            <Grid container rowSpacing={5} columnSpacing={5}>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        id="outlined-basic"
                                        label="New Name"
                                        variant="outlined"
                                        color="error"
                                        fullWidth
                                        size="small"
                                        error={nameErr}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        id="outlined-basic"
                                        label="New Username"
                                        variant="outlined"
                                        color="error"
                                        fullWidth
                                        size="small"
                                        error={nameErr}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Enter your Password"
                                        variant="outlined"
                                        color="error"
                                        type="password"
                                        fullWidth
                                        size="small"
                                        error={addressErr}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </Grid>
        
                            </Grid>
                            <Button type="submit" omponenet="h2" variant="contained" color="error" sx={{ marginTop: "20px" }}>Save Changes</Button>

                        </Box>
                    </Paper>
                    <Paper sx={{ marginTop: "20px" }}>
                        <Box component="form" method="post" onSubmit={submitform} sx={{ padding: "25px" }}>
                            <Typography variant="h4" mb="30px" >Change Password</Typography>
                            <Grid container rowSpacing={5} columnSpacing={5}>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Old Password"
                                        variant="outlined"
                                        color="error"
                                        type="password"
                                        fullWidth
                                        size="small"
                                        error={nameErr}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        id="outlined-basic"
                                        label="New Password"
                                        variant="outlined"
                                        type="password"
                                        color="error"
                                        fullWidth
                                        size="small"
                                        error={nameErr}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField
                                        id="outlined-basic"
                                        label="Confirm New Password"
                                        variant="outlined"
                                        color="error"
                                        type="password"
                                        fullWidth
                                        size="small"
                                        error={addressErr}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </Grid>
        
                            </Grid>
                            <Button type="submit" omponenet="h2" variant="contained" color="error" sx={{ marginTop: "20px" }}>Save Changes</Button>

                        </Box>
                    </Paper>
                </Box>
            </Box>
        </>
    );
}

export default EditProfile;