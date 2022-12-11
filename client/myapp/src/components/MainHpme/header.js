import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Menu,
  InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import {
  ArrowDownwardSharp,
  KeyboardArrowDown,
  Search,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sticky, setSticky] = React.useState(null);

  const open = Boolean(anchorEl);
  const catageries = useSelector((state) => state.catageries.catageries);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    scrollTop >= 300 ? setSticky(true) : setSticky(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: sticky ? "white" : null,
          position: sticky ? "fixed" : null,
          width: sticky ? "100%" : "auto",
          borderBottom: sticky ? "1px solid #d0d0d0" : null,
          height: "90px",
          lineHeight: "90px",
          zIndex: "100",
          // px: 3,
        }}
      >
        <Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center", ml: 3 }}
          >
            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "#333",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  fontSize: "25px",
                }}
              >
                Shop
                <span style={{ color: "#64a832" }}>Ultimate</span>
              </Typography>
            </Box>
            <Box sx={{ display: { lg: "block", md: "none", xs: "none" } }}>
              <Button
                size="large"
                onClick={handleClick}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="outlined"
                endIcon={<KeyboardArrowDown />}
                sx={{
                  color: "rgb(0,159,127)",
                  borderColor: "#d0d0d0",
                  background: "white",
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "rgb(0,159,127)",
                    borderColor: "#d0d0d0",
                    background: "white",
                  },
                }}
              >
                Grocery
              </Button>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 1px 4px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      left: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "left", vertical: "top" }}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              >
                {catageries &&
                  catageries.map((cat) => (
                    <MenuItem
                      sx={{
                        fontSize: "11px",
                        color: "rgb(75,85,99)",
                        fontWeight: "600",
                      }}
                    >
                      {cat.name}
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
          </Stack>
        </Box>
        <Box
          component="form"
          sx={{
            display: { lg: sticky ? "flex" : null, md: "none", xs: "none" },
            alignItems: "center",
            // width: "80%",
            // flex: "2",
            // display: "flex",
            // alignItems: "center",
          }}
        >
          <TextField
            // size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              ml: 1,
              mt: 1,
              "& .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input": {
                padding: "0 !important",
                height: "43px",
              },
              // background: "rgba(243,244,246,0.7)",
            }}
            placeholder="Search for products..."
            // inputProps={{ "aria-label": "search google maps" }}
          />
        </Box>
        <Box sx={{ display: { lg: "flex", md: "flex", xs: "none" }, mr: 3 }}>
          <Stack direction="row" spacing={4}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#1f2937",
                fontSize: "18px",
              }}
            >
              Shop
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#1f2937",
                fontSize: "18px",
              }}
            >
              Products
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#1f2937",
                fontSize: "18px",
              }}
            >
              FAQ
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#1f2937",
                fontSize: "18px",
              }}
            >
              Contact
            </Link>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Box sx={{ ml: 3, mr: 1 }}>
              <Button
                sx={{
                  background: "rgb(0,159,127)",
                  color: "white",
                  fontWeight: "semi-bold",

                  fontSize: "0.875rem",
                  textTransform: "capitalize",
                  "&:hover": { background: "rgb(0,159,127)" },
                }}
              >
                Become a Seller
              </Button>
            </Box>
            <Box>
              <Avatar></Avatar>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
