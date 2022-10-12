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

  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
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
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "10px",
            }}
          >
            {auth.user ? "Hi " + auth.user.username : ""}
          </Link>
          <Link
            to="/addshop"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "10px",
            }}
          >
            Create Shop
          </Link>
          <Link to="/cart">
            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={cart ? cart?.cartItems?.length : 1}
                color="secondary"
              >
                <ShoppingCartIcon />
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
          </Button>
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
                Login
              </Button>
              <Button
                variant="text"
                startIcon={<PersonIcon />}
                sx={{ color: "#fff" }}
                onClick={handleClickOpenSignup}
              >
                Register
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Login open={open} setOpen={setOpen} />
        <Signup opensignup={opensignup} setOpensignup={setOpensignup} />
      </>
    );
  }
  // return (

  // );
};

export default Nav;
