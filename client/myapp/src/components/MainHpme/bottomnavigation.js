import {
  CardTravel,
  Home,
  Menu,
  Person,
  Search,
  Shop,
  ShoppingCart,
} from "@mui/icons-material";
import { Box, IconButton, Paper } from "@mui/material";
import * as React from "react";

export default function BottomBar() {
  return (
    <Paper
      sx={{
        display: { xs: "flex", lg: "none", md: "none" },
        justifyContent: "space-between",
        py: 1,
        width: "100%",
        zIndex: "1000",
        position: "fixed",
        bottom: "0",
      }}
    >
      <IconButton>
        <Menu sx={{ color: "#1f2937", fontSize: "26px" }} />
      </IconButton>
      <IconButton>
        <Search sx={{ color: "#1f2937", fontSize: "26px" }} />
      </IconButton>
      <IconButton>
        <Home sx={{ color: "#1f2937", fontSize: "26px" }} />
      </IconButton>
      <IconButton>
        <ShoppingCart sx={{ color: "#1f2937", fontSize: "26px" }} />
      </IconButton>
      <IconButton>
        <Person sx={{ color: "#1f2937", fontSize: "26px" }} />
      </IconButton>
    </Paper>
  );
}
