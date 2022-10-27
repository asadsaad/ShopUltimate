import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardHeader from '@mui/material/CardHeader';
import { setAlert } from "../../../redux/actions/alertactions";
import { useDispatch } from "react-redux";
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
import { useEffect, useState } from 'react';
import UserSideBar from '../userSideBar';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
const SupportTicket = () => {
    const bar = document.getElementById("sidebar");
    const handleSlide = () => {
        if (bar.style.left === "-60%") {
            bar.style.left = "0%";
        }
        else {
            bar.style.left = "-60%";
        }
    }
    const [msg, setMsg] = useState('');
    const dispatch = useDispatch();
    const handleMsg = ()=>{
        if (msg == '') {
            dispatch(setAlert("Enter Msg", "error"))
        }
        else{
            console.log(msg);
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
                            <SupportAgentIcon fontSize="large" sx={{ color: "red " }} />

                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                Support Tickets
                            </Typography>
                        </Stack>
                        <Box sx={{ display: "flex" , '& a':{textDecoration : "none"}}}>
                        <Link to="/usersupporttickets" >
                                <Button
                                    component="h2"
                                    sx={{

                                        color: "#f44336",
                                        backgroundColor: "#ffebee",
                                        textTransform: "capitalize",
                                        padding: "10px 20px",
                                    }}
                                >
                                    Back to Support Tickets
                                </Button>
                            </Link>
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
                    <Box >
                        <Box mt="20px">
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="1:39 PM | September 14, 2016"
                            />
                        </Box>
                        <Paper sx={{ marginLeft: "5%", padding: "20px" }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non temporibus, commodi saepe quia provident recusandae. Porro sed earum unde explicabo nesciunt fugiat placeat! Tempora pariatur maxime eos autem ab! Laborum.
                        </Paper>
                        <TextField
                            sx={{ mt: "30px" }}
                            id="outlined-basic"
                            placeholder="Write your message here..."
                            color="error"
                            fullWidth
                            size="large"
                            multiline
                            rows={6}
                            onChange={(e) => setMsg(e.target.value)}
                        />
                        <Box sx={{mt:"20px", textAlign:"right"}}>
                        <Button onClick={handleMsg} type="submit" variant="contained" color="error">Post Message</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default SupportTicket;