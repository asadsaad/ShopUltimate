import React from "react";
import Nav from "../layouts/nav";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  Box,
  IconButton,
  Container,
  Tooltip,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  getaddress,
  setcurrentaddress,
} from "../../redux/actions/addressactions";
import { Edit } from "@mui/icons-material";
import Updateaddress from "../userdashboard/updateaddress";
// import { addshipping, getshipping } from "../../redux/actions/shippingactions";

const Input = styled("input")({
  display: "none",
});
export default function CheckoutandReview(props) {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.address.addressess);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  // const [currentaddress, setcurrentaddress] = useState(null);

  // const loading = useSelector((state) => state.shipping.loading);

  //   const error = useSelector((state) => state.errors);
  useEffect(() => {
    dispatch(getaddress());
  }, []);
  const handleupdate = async (address) => {
    dispatch(setcurrentaddress(address));
    // setcurrentaddress(address);
    setOpen(true);
  };
  // const submitform = (event) => {
  //   event.preventDefault();
  //   const formData = { email, phone, country, city, postalcode, streetaddress };
  //   dispatch(addshipping(formData));
  //   if (!loading) {
  //     props.next();
  //   }
  // };
  // if (loading) {
  //   return "loading";
  // }
  return (
    <div>
      <Paper sx={{ p: 2, mt: 3 }}>
        <Button>Add New Address</Button>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {address && address.length > 0
            ? address.map((item) => (
                <Box
                  key={item._id}
                  onClick={() => setSelected(item)}
                  sx={{
                    p: 2,
                    border:
                      selected?._id == item?._id
                        ? "1px solid orange"
                        : "1px solid #d0d0d0",
                    m: 1,
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <Tooltip title="Edit Address">
                    <IconButton
                      sx={{ position: "absolute", top: "5px", right: 0 }}
                      onClick={() => handleupdate(item)}
                    >
                      <Edit />
                    </IconButton>
                  </Tooltip>
                  <Typography>
                    Delivered to <b>{item?.user?.username}</b>
                  </Typography>
                  <Typography>
                    Email <b>{item?.email}</b>
                  </Typography>
                  <Typography>
                    Phone <b>{item?.phone}</b>
                  </Typography>
                  <Typography>
                    Location{" "}
                    <b>
                      {item?.streetaddress} {item?.city} {item?.country}
                    </b>
                  </Typography>
                </Box>
              ))
            : null}
        </Box>
        <Updateaddress
          open={open}
          setOpen={setOpen}
          // currentaddress={currentaddress}
          // setcurrentaddress={setcurrentaddress}
        />
      </Paper>
    </div>
  );
}
