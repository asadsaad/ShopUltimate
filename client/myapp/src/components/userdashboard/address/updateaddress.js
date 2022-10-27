import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { updateaddress } from "../../../redux/actions/addressactions";
import { useDispatch } from "react-redux";
import { Grid } from "@mui/material";
export default function Updateaddress(props) {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [country, setcountry] = useState();
  const [city, setcity] = useState();
  const [postalcode, setpostalcode] = useState();
  const [streetaddress, setstreetaddress] = useState();

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  useEffect(() => {
    console.log(props.currentaddress);
  }, [props]);

  const handleClose = () => {
    props.setOpen(false);
  };
  const handleupdate = () => {
    const formData = {
      email,
      phone,
      country,
      city,
      postalcode,
      streetaddress,
      id: props.currentaddress?._id,
    };
    dispatch(updateaddress(formData, props.setOpen));
  };
  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>Update Address</DialogTitle>
      <DialogContent>
        <Grid container  rowSpacing={5} columnSpacing={5}>
          <Grid item xs={12} marginTop="10px">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              color="error"
              fullWidth
              defaultValue={props.currentaddress?.email}
              value={email}
              size="small"
              // error={nameErr}
              onChange={(e) => setemail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Phone"
              value={phone}
              defaultValue={props.currentaddress?.phone}
              variant="outlined"
              color="error"
              fullWidth
              size="small"
              type={Number}
              //   error={numberErr}
              onChange={(e) => setphone(e.target.value)}
            />
            </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Postal Code"
              defaultValue={props.currentaddress?.postalcode}
              value={postalcode}
              variant="outlined"
              color="error"
              fullWidth
              size="small"
              //   type={Number}
              //   error={numberErr}
              onChange={(e) => setpostalcode(e.target.value)}
            />
            </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="City"
              defaultValue={props.currentaddress?.city}
              value={city}
              variant="outlined"
              color="error"
              fullWidth
              size="small"
              //   type={Number}
              //   error={numberErr}
              onChange={(e) => setcity(e.target.value)}
            />
            </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Countrye"
              value={country}
              defaultValue={props.currentaddress?.country}
              variant="outlined"
              color="error"
              fullWidth
              size="small"
              //   type={Number}
              //   error={numberErr}
              onChange={(e) => setcountry(e.target.value)}
            />
            </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Strret Address"
              value={streetaddress}
              defaultValue={props.currentaddress?.streetaddress}
              variant="outlined"
              color="error"
              fullWidth
              size="small"
              //   type={Number}
              //   error={numberErr}
              onChange={(e) => setstreetaddress(e.target.value)}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleupdate}>Update</Button>
      </DialogActions>
    </Dialog>
  );
}
