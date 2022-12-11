import React from "react";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import demo from "../../images/productdemo.webp";
import { Add } from "@mui/icons-material";
import MobileSide from "./mobileside";

export default function ProductGrid() {
  return (
    <Box sx={{ background: "rgba(243,244,246,0.7)" }}>
      <MobileSide />

      <Grid container spacing={2} sx={{ p: 3 }}>
        <Grid item lg={3} md={3} xs={12} sm={6}>
          <Paper sx={{ p: 2, boxShadow: "0", border: "1px solid #d0d0d0" }}>
            <Box>
              <img src={demo} width="100%" />
            </Box>
            <Box>
              <Typography
                sx={{ color: "#1f2937", fontSize: "16px", fontWeight: "bold" }}
              >
                $1
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#6b7280" }}>
                Wise Cottage Fires Bbq
              </Typography>
              <Button
                fullWidth
                varinat="contained"
                sx={{
                  background: "rgb(243,244,246)",
                  position: "relative",
                  textTransform: "capitalize",
                  color: "rgb(75,85,99)",
                  "&:hover": {
                    background: "rgb(0,159,127)",
                    color: "white",
                    "& .css-1lmlfqd": {
                      background: "rgb(0,159,127)",
                      color: "white",
                    },
                  },
                }}
              >
                <Typography>Add</Typography>
                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    right: "0",
                    justifyContent: "center",
                    width: "50px",
                    height: "100%",
                    textAlign: "center",
                    // background: "rgb(229,231,235)",
                  }}
                >
                  <Add />
                </Box>
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={3} md={3} xs={12} sm={6}>
          <Paper sx={{ p: 2, boxShadow: "0", border: "1px solid #d0d0d0" }}>
            <Box>
              <img src={demo} width="100%" />
            </Box>
            <Box>
              <Typography
                sx={{ color: "#1f2937", fontSize: "16px", fontWeight: "bold" }}
              >
                $1
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#6b7280" }}>
                Wise Cottage Fires Bbq
              </Typography>
              <Button
                fullWidth
                varinat="contained"
                sx={{
                  background: "rgb(243,244,246)",
                  position: "relative",
                  textTransform: "capitalize",
                  color: "rgb(75,85,99)",
                  "&:hover": {
                    background: "rgb(0,159,127)",
                    color: "white",
                    "& .css-1lmlfqd": {
                      background: "rgb(0,159,127)",
                      color: "white",
                    },
                  },
                }}
              >
                <Typography>Add</Typography>
                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    right: "0",
                    justifyContent: "center",
                    width: "50px",
                    height: "100%",
                    textAlign: "center",
                    // background: "rgb(229,231,235)",
                  }}
                >
                  <Add />
                </Box>
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={3} md={3} xs={12} sm={6}>
          <Paper sx={{ p: 2, boxShadow: "0", border: "1px solid #d0d0d0" }}>
            <Box>
              <img src={demo} width="100%" />
            </Box>
            <Box>
              <Typography
                sx={{ color: "#1f2937", fontSize: "16px", fontWeight: "bold" }}
              >
                $1
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#6b7280" }}>
                Wise Cottage Fires Bbq
              </Typography>
              <Button
                fullWidth
                varinat="contained"
                sx={{
                  background: "rgb(243,244,246)",
                  position: "relative",
                  textTransform: "capitalize",
                  color: "rgb(75,85,99)",
                  "&:hover": {
                    background: "rgb(0,159,127)",
                    color: "white",
                    "& .css-1lmlfqd": {
                      background: "rgb(0,159,127)",
                      color: "white",
                    },
                  },
                }}
              >
                <Typography>Add</Typography>
                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    right: "0",
                    justifyContent: "center",
                    width: "50px",
                    height: "100%",
                    textAlign: "center",
                    // background: "rgb(229,231,235)",
                  }}
                >
                  <Add />
                </Box>
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={3} md={3} xs={12} sm={6}>
          <Paper sx={{ p: 2, boxShadow: "0", border: "1px solid #d0d0d0" }}>
            <Box>
              <img src={demo} width="100%" />
            </Box>
            <Box>
              <Typography
                sx={{ color: "#1f2937", fontSize: "16px", fontWeight: "bold" }}
              >
                $1
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#6b7280" }}>
                Wise Cottage Fires Bbq
              </Typography>
              <Button
                fullWidth
                varinat="contained"
                sx={{
                  background: "rgb(243,244,246)",
                  position: "relative",
                  textTransform: "capitalize",
                  color: "rgb(75,85,99)",
                  "&:hover": {
                    background: "rgb(0,159,127)",
                    color: "white",
                    "& .css-1lmlfqd": {
                      background: "rgb(0,159,127)",
                      color: "white",
                    },
                  },
                }}
              >
                <Typography>Add</Typography>
                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    right: "0",
                    justifyContent: "center",
                    width: "50px",
                    height: "100%",
                    textAlign: "center",
                    // background: "rgb(229,231,235)",
                  }}
                >
                  <Add />
                </Box>
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={3} md={3} xs={12} sm={6}>
          <Paper sx={{ p: 2, boxShadow: "0", border: "1px solid #d0d0d0" }}>
            <Box>
              <img src={demo} width="100%" />
            </Box>
            <Box>
              <Typography
                sx={{ color: "#1f2937", fontSize: "16px", fontWeight: "bold" }}
              >
                $1
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#6b7280" }}>
                Wise Cottage Fires Bbq
              </Typography>
              <Button
                fullWidth
                varinat="contained"
                sx={{
                  background: "rgb(243,244,246)",
                  position: "relative",
                  textTransform: "capitalize",
                  color: "rgb(75,85,99)",
                  "&:hover": {
                    background: "rgb(0,159,127)",
                    color: "white",
                    "& .css-1lmlfqd": {
                      background: "rgb(0,159,127)",
                      color: "white",
                    },
                  },
                }}
              >
                <Typography>Add</Typography>
                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    right: "0",
                    justifyContent: "center",
                    width: "50px",
                    height: "100%",
                    textAlign: "center",
                    // background: "rgb(229,231,235)",
                  }}
                >
                  <Add />
                </Box>
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
