import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authactions";
import LoginIcon from "@mui/icons-material/Login";
import Login from "../user/login";
import PersonIcon from "@mui/icons-material/Person";
import Signup from "../user/signup";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../images/logo.png";
import { Avatar, Tooltip, Menu, MenuItem } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

// import MenuIcon from '@mui/icons-material/Menu';

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Nav = () => {
  const [open, setOpen] = React.useState(false);
  const [opensignup, setOpensignup] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handlelogout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };
  const handleClickOpen = () => {
    // event.preventDefault()
    setOpen(true);
  };
  const handleClickOpenSignup = () => {
    // event.preventDefault()
    setOpensignup(true);
  };

  const authnav = (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ShopUltimate
          </Typography>
          {/* <Avatar sx={{ mr: 1 }}></Avatar>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "10px",
            }}
          >
            {auth.user ? auth.user.username : ""}
          </Link>

          <Link to="/cart">
            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={cart ? cart?.cartItems?.length : 1}
                color="secondary"
              >
                <ShoppingCartIcon sx={{ color: "white" }} />
              </StyledBadge>
            </IconButton>
          </Link>
          <Button
            size="small"
            variant="contained"
            color="info"
            onClick={handlelogout}
          >
            Logout
          </Button> */}
          {auth.user?.role === "seller" ? (
            <Link
              to="/dashboard"
              sx={{ textDecoration: "none", color: "white" }}
            >
              <Typography sx={{ mr: 0.5, fontWeight: "bold" }}>
                Dashboard
              </Typography>
            </Link>
          ) : (
            <Typography sx={{ mr: 0.5, fontWeight: "bold" }}>
              Become a Seller
            </Typography>
          )}

          <Link to="/cart">
            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={cart ? cart?.cartItems?.length : 1}
                color="secondary"
              >
                <ShoppingCartIcon sx={{ color: "white" }} />
              </StyledBadge>
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Box
                onClick={handleOpenUserMenu}
                sx={{ p: 0, display: "flex", alignItems: "center" }}
              >
                <IconButton>
                  <Avatar alt={auth.user ? auth.user.username : ""} />
                </IconButton>
                <Typography
                  sx={{
                    ml: 0.5,
                    mr: 0.5,
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  {auth.user ? auth.user.username : ""}
                </Typography>
                <IconButton sx={{ p: 0 }}>
                  <ArrowDropDownIcon sx={{ color: "white" }} />
                </IconButton>
              </Box>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Link
                  to=""
                  style={{ textDecoration: "none" }}
                  onClick={handlelogout}
                >
                  Logout
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/settings" style={{ textDecoration: "none" }}>
                  Settings
                </Link>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
  if (auth.isAuthenticated) {
    return <>{authnav}</>;
  } else {
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                ShopUltimate
              </Typography>
              <Button
                variant="text"
                startIcon={<LoginIcon />}
                sx={{ color: "#fff" }}
                onClick={handleClickOpen}
              >
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Link>
              </Button>
              <Button
                variant="text"
                startIcon={<PersonIcon />}
                sx={{ color: "#fff" }}
                onClick={handleClickOpenSignup}
              >
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Register
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        {/* <Login open={open} setOpen={setOpen} /> */}
        {/* <Signup opensignup={opensignup} setOpensignup={setOpensignup} /> */}
      </>
    );
  }
  // return (

  // );
};

export default Nav;
