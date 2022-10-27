import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
import { useEffect } from 'react';
import UserSideBar from '../userSideBar';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
const Support = () => {
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
                            <SupportAgentIcon fontSize="large" sx={{ color: "red " }} />

                            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                Support Tickets
                            </Typography>
                        </Stack>
                        <Box sx={{ display: "flex" }}>
                            
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
                        <Paper sx={{ marginTop: "20px", p: "8px 16px", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box>
                                <Box>
                                    <Typography>My product is broken and I need refund.</Typography>
                                </Box>
                                <Box sx={{ display: "flex", gap: "20px", color: "gray" }}>
                                    <Typography>Oct 2,2022</Typography>
                                    <Typography>Website Problem</Typography>
                                </Box>
                            </Box>
                            <Box sx={{'& a':{color : "black", lineHeight:"0"}}}>
                                <IconButton><Link to="/usersupportchat"> <ArrowForwardIcon /></Link> </IconButton>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Support;