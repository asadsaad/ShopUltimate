import { Search } from "@mui/icons-material";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import bg from "../../images/grocery.webp";
import Header from "./header";
export default function BannerArea({ group, setgroup, ct, setct }) {
  return (
    <>
      <Box
        sx={{
          display: { lg: "block", md: "block", xs: "none" },
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header group={group} setgroup={setgroup} ct={ct} setct={setct} />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "42px", fontWeight: "bold", color: "#1f2937" }}
          >
            Groceries Delivered in 90 Minute
          </Typography>
          <Typography sx={{ fontSize: "19px", color: "#1f2937", mt: 1, mb: 2 }}>
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </Typography>
          <Box sx={{ position: "relative" }}>
            <TextField
              placeholder="Search Your Products From Here"
              fullWidth
              sx={{ background: "white" }}
            />
            <Button
              startIcon={<Search />}
              size="large"
              sx={{
                height: "100%",
                width: "120px",
                position: "absolute",
                top: "0",
                right: "0",
                background: "rgb(0,159,127)",
                color: "white",
                fontWeight: "bold",

                textTransform: "capitalize",
                "&:hover": { background: "rgb(0,159,127)" },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          alignItems: "center",
          width: "100%",
          // boxShadow: "1px 2px 4px black",
          borderBottom: "1px solid #d0d0d0",
          py: 1,
          position: "fixed",
          top: "0",
          background: "white",
          zIndex: "100",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            width: "100%",
            color: "#333",
            fontWeight: "700",
            letterSpacing: "1px",
            fontSize: "25px",
            textAlign: "center",
          }}
        >
          Shop
          <span style={{ color: "#64a832" }}>Ultimate</span>
        </Typography>
      </Box>
    </>
  );
}
