// import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/system";
import {
  removefromcart,
  cartitemdecreament,
  cartitemincreament,
} from "../../redux/actions/cartactions";
import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Avatar,
  IconButton,
  Fab,
} from "@mui/material";
import {
  Delete,
  Add,
  Minimize,
  Remove,
  PowerInputSharp,
} from "@mui/icons-material";
import Nav from "../layouts/nav";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Link } from "react-router-dom";

export default function BasicTable(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(props);
  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ mt: 5, mb: 3, fontWeight: "bold" }}>
          Shopping Cart (2)
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={12} md={8}>
            {cart?.carts?.map((cartt) => {
              return (
                <Paper sx={{ borderRadius: "0", mt: 2, mb: 2, p: 2 }}>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ borderBottom: "1px solid #d0d0d0", pb: 1 }}
                  >
                    <StorefrontOutlinedIcon />
                    <Typography>{cartt?.store?.shopname}</Typography>
                  </Stack>

                  {cartt?.cartItems &&
                    cartt?.cartItems?.map((row) => (
                      <Box
                        sx={{
                          pt: 1,
                          pb: 1,
                          borderBottom: "1px solid #d0d0d0",
                        }}
                      >
                        <Box sx={{ display: "flex" }}>
                          <Box>
                            <Avatar
                              variant="square"
                              src={row.product.images[0]}
                              sx={{ width: 130, height: 130 }}
                            ></Avatar>
                          </Box>
                          <Box sx={{ width: "100%" }}>
                            <Grid container>
                              <Grid item xs={8}>
                                <Typography
                                  variant="p"
                                  sx={{ fontWeight: "bold", ml: 2 }}
                                >
                                  {row.product.productTitle}
                                </Typography>
                              </Grid>
                              <Grid item xs={4} sx={{ textAlign: "right" }}>
                                <IconButton
                                  color="secondary"
                                  onClick={() =>
                                    dispatch(
                                      removefromcart(
                                        row.product._id,
                                        cartt._id,
                                        cartt.store
                                      )
                                    )
                                  }
                                >
                                  <Delete />
                                </IconButton>
                              </Grid>
                            </Grid>
                            <Box sx={{ ml: 2 }}>
                              <Typography
                                variant="h5"
                                sx={{
                                  fontWeight: "bold",
                                  fontSize: "18px",
                                }}
                              >
                                ${row.product.price} x {row.quantity}
                              </Typography>
                            </Box>
                            <Box sx={{ ml: 2 }}>
                              <ButtonGroup
                                variant="outlined"
                                aria-label="outlined button group"
                                size="small"
                                sx={{ mt: 1 }}
                              >
                                <Button
                                  variant="contained"
                                  size="small"
                                  sx={{ boxShadow: "0" }}
                                  onClick={() =>
                                    dispatch(
                                      cartitemincreament(
                                        row.product._id,
                                        cartt._id,
                                        cartt.store
                                      )
                                    )
                                  }
                                >
                                  <Add />
                                </Button>
                                <Button sx={{ boxShadow: "0" }} size="small">
                                  {row.quantity}
                                </Button>
                                <Button
                                  disabled={row.quantity == 1}
                                  variant="contained"
                                  sx={{ boxShadow: "0" }}
                                  size="small"
                                  onClick={() =>
                                    dispatch(
                                      cartitemdecreament(
                                        row.product._id,
                                        cartt._id,
                                        cartt.store
                                      )
                                    )
                                  }
                                >
                                  <Remove />
                                </Button>
                              </ButtonGroup>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      // <TableRow
                      //   key={row._id}
                      //   sx={{
                      //     "&:last-child td, &:last-child th": { border: 0 },
                      //   }}
                      // >
                      //   <TableCell>{row._id}</TableCell>
                      //   <TableCell align="center">
                      //     {row.product.productTitle}
                      //   </TableCell>
                      //   <TableCell align="center">
                      //     {row.product.shop.shopname}
                      //   </TableCell>

                      //   <TableCell align="center">
                      //     <ButtonGroup
                      //       variant="outlined"
                      //       aria-label="outlined button group"
                      //       size="small"
                      //       sx={{ mt: 1 }}
                      //     >
                      //       <Button
                      //         onClick={() =>
                      //           dispatch(
                      //             cartitemincreament(
                      //               row.product._id,
                      //               cartt._id,
                      //               cartt.store
                      //             )
                      //           )
                      //         }
                      //       >
                      //         <Add />
                      //       </Button>
                      //       <Button>{row.quantity}</Button>
                      //       <Button
                      //         onClick={() =>
                      //           dispatch(
                      //             cartitemdecreament(
                      //               row.product._id,
                      //               cartt._id,
                      //               cartt.store
                      //             )
                      //           )
                      //         }
                      //       >
                      //         <Remove />
                      //       </Button>
                      //     </ButtonGroup>
                      //   </TableCell>
                      //   <TableCell align="center">{row.product.price}</TableCell>
                      //   <TableCell align="center">
                      //     {row.product.price * row.quantity}
                      //   </TableCell>
                      //   <TableCell align="center">
                      //     <Button
                      //       onClick={() =>
                      //         dispatch(
                      //           removefromcart(
                      //             row.product._id,
                      //             cartt._id,
                      //             cartt.store
                      //           )
                      //         )
                      //       }
                      //       variant="outlined"
                      //       size="small"
                      //       endIcon={<Delete />}
                      //     >
                      //       Remove
                      //     </Button>
                      //   </TableCell>
                      // </TableRow>
                    ))}
                </Paper>
              );
            })}
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 2,
              }}
            >
              <Typography variant="h5">Summary</Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 1,
                  mb: 1,
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                  Total
                </Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                  $39
                </Typography>
              </Box>
              <Button
                variant="contained"
                onClick={props.next}
                fullWidth
                sx={{ borderRadius: "20px" }}
              >
                Proceed To Shipping
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
