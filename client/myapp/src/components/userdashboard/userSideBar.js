// import * as React from "react"
import { makeStyles } from '@material-ui/core'
import ListSubheader from '@mui/material/ListSubheader'
// import List from '@mui/material/List'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import ListItemText from '@mui/material/ListItemText'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'
// import {
//     Container,
//     Box,
//     Paper,
//     Stack,
//     Typography,
//     Avatar,
//     Button,
//     paperClasses,
//     Grid,
//     TextField,
// } from "@mui/material"
import { NavLink } from "react-router-dom"


//   export default function UserSidebar() {

//     return ( 



//      );
// }
 

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles({
    a:{
        textDecoration:"none",
        color:"black",
    }
  })


 const UserSideBar = () => {
    const classes = useStyles()
    return ( 
        <Box sx={{width:"300px",height:{xs:"100vh", md:"inherit"}, left:{xs:"-60%", md:"0%"},top:"0%", position:{xs:"absolute", md:"relative"},transition : "left 0.5s",zIndex:"2" }}  id="sidebar" >
        <Paper >
        <List
            sx={{ maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Dashboard
                </ListSubheader>
                
            }
        >
            <NavLink to="/orders" className={classes.a}>
                <ListItemButton>
                <ListItemIcon>
                    <ShoppingBagOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Orders" />
                <Typography>12</Typography>
            </ListItemButton>
            </NavLink >
            <NavLink to="/whitelist" className={classes.a}>
            <ListItemButton>
                <ListItemIcon>
                    <FavoriteBorderOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="WhiteList" />
                <Typography>12</Typography>
            </ListItemButton>
            </NavLink>
            <NavLink to="support" className={classes.a}>
            <ListItemButton>
                <ListItemIcon>
                    <SupportAgentOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Support Tickets" />
                <Typography>12</Typography>
            </ListItemButton>
            </NavLink>
        </List>
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Account Settings 
                </ListSubheader>
                
            }
        >
            <NavLink to="profile" className={classes.a}>
            <ListItemButton>
                <ListItemIcon>
                    <PersonOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Profile Info" />
                <Typography>12</Typography>
            </ListItemButton>
            </NavLink>
            <NavLink to="address" className={classes.a}>
            <ListItemButton>
                <ListItemIcon>
                    <LocationOnOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Addresses" />
                <Typography>12</Typography>
            </ListItemButton>
            </NavLink>
            <NavLink to="payment" className={classes.a}>
            <ListItemButton>
                <ListItemIcon>
                    <CreditCardOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Payment Methods" />
                <Typography>12</Typography>
            </ListItemButton>
            </NavLink>
        </List>
        </Paper>
        </Box>
     );
 }
  
 export default UserSideBar;
