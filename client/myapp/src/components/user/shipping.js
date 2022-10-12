import React from "react";
import Nav from "../layouts/nav";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Alert,
  Box,
  IconButton,
  Container,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { addshipping, getshipping } from "../../redux/actions/shippingactions";

const Input = styled("input")({
  display: "none",
});
export default function Shipping(props) {
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [country, setcountry] = useState();
  const [city, setcity] = useState();
  const [postalcode, setpostalcode] = useState();
  const [streetaddress, setstreetaddress] = useState();
  const dispatch = useDispatch();
  const shipping = useSelector((state) => state.shipping.shipping);
  const loading = useSelector((state) => state.shipping.loading);

  //   const error = useSelector((state) => state.errors);
  useEffect(() => {
    dispatch(getshipping());
  }, []);

  const submitform = (event) => {
    event.preventDefault();
    const formData = { email, phone, country, city, postalcode, streetaddress };
    dispatch(addshipping(formData));
    if (!loading) {
      props.next();
    }
  };
  if (loading) {
    return "loading";
  }
  return (
    <div>
      <Container>
        <Typography variant="h4" sx={{ mt: 5 }}>
          Shipping Detailss
        </Typography>
        <Box
          component="form"
          sx={{}}
          style={{ marginTop: "2em" }}
          method="post"
          onSubmit={submitform}
        >
          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            size="small"
            style={{ marginBottom: "1em" }}
            type="text"
            placeholder="Email"
            value={email}
            defaultValue={shipping && shipping.email}
            onChange={(e) => setemail(e.target.value)}
            name="email"
          />
          <TextField
            variant="outlined"
            label="Phone"
            fullWidth
            size="small"
            style={{ marginBottom: "1em" }}
            type="number"
            placeholder="Phone"
            value={phone && phone}
            defaultValue={shipping && shipping.phone}
            onChange={(e) => setphone(e.target.value)}
            name="phone"
          />
          <TextField
            variant="outlined"
            label="Country"
            fullWidth
            size="small"
            style={{ marginBottom: "1em" }}
            type="text"
            placeholder="Country"
            value={country && country}
            defaultValue={shipping && shipping.country}
            onChange={(e) => setcountry(e.target.value)}
            name="country"
          />
          <TextField
            variant="outlined"
            label="City"
            fullWidth
            size="small"
            margin="dense"
            style={{ marginBottom: "1em" }}
            type="text"
            placeholder="City"
            value={city && city}
            defaultValue={shipping && shipping.city}
            onChange={(e) => setcity(e.target.value)}
            name="city"
          />
          <TextField
            variant="outlined"
            label="Postal Code"
            fullWidth
            size="small"
            margin="dense"
            style={{ marginBottom: "1em" }}
            type="number"
            placeholder="Postal Code"
            value={postalcode && postalcode}
            defaultValue={shipping && shipping.postalcode}
            onChange={(e) => setpostalcode.target.value}
            name="postalcode"
          />
          <TextField
            variant="outlined"
            label="Steet Address"
            fullWidth
            size="small"
            margin="dense"
            style={{ marginBottom: "1em" }}
            type="text"
            placeholder="Street Address"
            value={streetaddress && streetaddress}
            defaultValue={shipping && shipping.streetaddress}
            onChange={(e) => setstreetaddress(e.target.value)}
            name="streetaddress"
          />
          <Button autoFocus type="submit" variant="contained">
            Save changes
          </Button>
        </Box>
      </Container>
    </div>
  );
}
