import React from "react";
import Nav from "../layouts/nav";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { useDropzone } from "react-dropzone";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import {
  Grid,
  TextField,
  Button,
  Typography,
  ImageList,
  ImageListItem,
  IconButton,
  ImageListItemBar,
  Container,
  FormControl,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { clearalert, inprogress } from "../../redux/actions/authactions";
import { addshop } from "../../redux/actions/shopactions";
import { styled } from "@mui/material/styles";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { SHOP_ACTION_ATTEMPT } from "../../redux/types";
import Alert from "../layouts/alerts";
import { useNavigate } from "react-router-dom";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Input = styled("input")({
  display: "none",
});
export default function Addshop(props) {
  const [shopname, setshopname] = useState();
  const [aboutShop, setaboutShop] = useState();
  const [catagery, setcatagery] = useState();
  const [subcatagery, setsubcatagery] = useState();
  const [brand, setbrand] = useState([]);

  const [shoptype, setshoptype] = useState();
  const [shopcountry, setshopcountry] = useState();
  const [shopcity, setshopcity] = useState();
  const [shopstreetaddress, setshopstreetaddress] = useState();
  const [shopphone, setshopphone] = useState();

  const [storeimage, setstoreimage] = useState([]);
  const [storebannerimage, setstorebannerimage] = useState([]);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isLoading = useSelector((state) => state.shop.isLoading);
  const catageries = useSelector((state) => state.catageries.catageries);

  const alerts = useSelector((state) => state.alerts);
  const navigate = useNavigate();

  const handleClose = () => {
    props.setshopaddOpen(false);
  };
  const submitform = async (event) => {
    event.preventDefault();
    dispatch({ type: SHOP_ACTION_ATTEMPT });

    const formData = {
      shopname: shopname,
      aboutShop: aboutShop,
      catagery: catagery,
      subcatagery: subcatagery,
      shopavatar: [],
      country: shopcountry,
      city: shopcity,
      streetaddress: shopstreetaddress,
      shopphone: shopphone,
      Shoptype: shoptype,
      Brands: brand,
      shopbanner: [],
    };
    // if (storeimage.length > 0) {
    const promises = [];
    // for (let index = 0; index < storeimage.length; index++) {
    const element = storeimage[0];
    const imageref = ref(storage, `images/${element.name}`);
    const upload = uploadBytes(imageref, element).then(async () => {
      await getDownloadURL(imageref).then((url) => {
        formData.shopavatar.push(url);
      });
    });
    const element1 = storebannerimage[0];
    const imageref1 = ref(storage, `images/${element1.name}`);
    const upload1 = uploadBytes(imageref1, element1).then(async () => {
      await getDownloadURL(imageref1).then((url) => {
        formData.shopbanner.push(url);
      });
    });
    promises.push(upload1);
    // console.log(promises)
    // upload.then(async ()=>{
    //     await getDownloadURL(imageref).then(url=>{
    //         console.log(url)
    //         formData.shopavatar.push(url)
    //         console.log(formData)
    //     })
    // })
    // }
    Promise.all(promises)
      .then(() => {
        dispatch(addshop(formData, navigate));
      })
      .catch((err) => {
        console.log(err);
      });
    // }
    // else {
    // dispatch(addshop(formData));
    // setshopname("");
    // setaboutShop("");
    // setcatagery("");
    // setsubcatagery("");
    // setstoreimage([]);
    // }
  };
  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.shopaddopen}
        sx={{ zIndex: 10000 }}
        fullScreen
        TransitionComponent={Transition}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Create New Shop
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => props.setshopaddOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box component="form" method="post" onSubmit={submitform}>
            <Typography component="h5" variant="h5" sx={{ mt: 1, mb: 1 }}>
              Shop Details
            </Typography>
            <TextField
              variant="outlined"
              label="Shop Name"
              fullWidth
              size="small"
              style={{ marginBottom: "1em" }}
              type="text"
              placeholder="Shop Name"
              value={shopname}
              onChange={(e) => setshopname(e.target.value)}
              name="shopname"
            />
            <TextField
              variant="outlined"
              label="About Shop"
              fullWidth
              multiline
              rows={5}
              size="small"
              style={{ marginBottom: "1em" }}
              type="text"
              placeholder="Description"
              value={aboutShop}
              onChange={(e) => setaboutShop(e.target.value)}
              name="aboutShop"
            />
            <TextField
              variant="outlined"
              label="Catagery"
              fullWidth
              size="small"
              style={{ marginBottom: "1em" }}
              type="text"
              placeholder="Catagery"
              value={catagery}
              onChange={(e) => setcatagery(e.target.value)}
              name="catagery"
            />
            <TextField
              variant="outlined"
              label="Sub Catagery"
              fullWidth
              size="small"
              style={{ marginBottom: "1em" }}
              type="text"
              placeholder="Sub Catagery"
              value={subcatagery}
              onChange={(e) => setsubcatagery(e.target.value)}
              name="subcatagery"
            />
            <Autocomplete
              multiple
              id="tags-filled"
              options={[]}
              freeSolo={true}
              onChange={(event, value) => setbrand(value)}
              // value={brand}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  size="small"
                  label="Select Brands"
                  placeholder="Brands"
                />
              )}
            />
            <FormControl size="small" sx={{ width: "100%", mt: 2 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Select Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={shoptype}
                label="Select Type"
                onChange={(e) => {
                  setshoptype(e.target.value);
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Retail">Retail</MenuItem>
                <MenuItem value="Whole Sale">Whole Sale</MenuItem>
                <MenuItem value="Service">Service</MenuItem>
              </Select>
            </FormControl>

            <Typography component="h5" variant="h5" sx={{ mt: 1, mb: 1 }}>
              Select Shop Logo
            </Typography>
            <Typography align="center">
              <label htmlFor="icon-button-file">
                <Input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  onChange={(e) => setstoreimage([...e.target.files])}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  align="center"
                  variant="contained"
                  size="large"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </Typography>
            {storeimage.length > 0 ? (
              <ImageList
                sx={{ width: 700, maxheight: 450 }}
                cols={3}
                rowHeight={200}
              >
                {[...storeimage].map((item) => (
                  <ImageListItem key={item} variant="standard">
                    <img
                      src={URL.createObjectURL(item)}
                      srcSet={URL.createObjectURL(item)}
                      alt={item}
                      loading="lazy"
                      sx={{ height: 200 }}
                    />
                    <ImageListItemBar
                      sx={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                          "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                      }}
                      position="right"
                      actionIcon={
                        <IconButton
                          sx={{ color: "white" }}
                          aria-label={"delete"}
                          onClick={() =>
                            setstoreimage(
                              storeimage.filter((image) => image !== item)
                            )
                          }
                        >
                          <DeleteOutlineOutlined />
                        </IconButton>
                      }
                      actionPosition="right"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            ) : null}
            <Typography component="h5" variant="h5" sx={{ mt: 1, mb: 1 }}>
              Select Shop Banner
            </Typography>
            <Typography align="center">
              <label htmlFor="icon-button-file1">
                <Input
                  accept="image/*"
                  id="icon-button-file1"
                  type="file"
                  onChange={(e) => setstorebannerimage([...e.target.files])}
                />
                <IconButton
                  color="primary"
                  aria-label="upload banner"
                  component="span"
                  align="center"
                  variant="contained"
                  size="large"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
            </Typography>
            {storebannerimage.length > 0 ? (
              <ImageList sx={{}} cols={1} rowHeight={300}>
                {[...storebannerimage].map((item) => (
                  <ImageListItem key={item} variant="standard">
                    <img
                      src={URL.createObjectURL(item)}
                      srcSet={URL.createObjectURL(item)}
                      alt={item}
                      loading="lazy"
                      sx={{ width: "100%", height: 300 }}
                    />
                    <ImageListItemBar
                      sx={{
                        background:
                          "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                          "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                      }}
                      position="right"
                      actionIcon={
                        <IconButton
                          sx={{ color: "white" }}
                          aria-label={"delete"}
                          onClick={() =>
                            setstorebannerimage(
                              storebannerimage.filter((image) => image !== item)
                            )
                          }
                        >
                          <DeleteOutlineOutlined />
                        </IconButton>
                      }
                      actionPosition="right"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            ) : null}
            <Typography component="h5" variant="h5" sx={{ mt: 1, mb: 1 }}>
              Shop Location Details
            </Typography>
            <TextField
              variant="outlined"
              label="Country"
              fullWidth
              size="small"
              style={{ marginBottom: "1em" }}
              type="text"
              placeholder="Country"
              value={shopcountry}
              onChange={(e) => setshopcountry(e.target.value)}
              name="shopcountry"
            />
            <TextField
              variant="outlined"
              label="City"
              fullWidth
              size="small"
              style={{ marginBottom: "1em" }}
              type="text"
              placeholder="City"
              value={shopcity}
              onChange={(e) => setshopcity(e.target.value)}
              name="shopcity"
            />
            <TextField
              variant="outlined"
              label="Street Address"
              fullWidth
              size="small"
              style={{ marginBottom: "1em" }}
              type="text"
              placeholder="Street Address"
              value={shopstreetaddress}
              onChange={(e) => setshopstreetaddress(e.target.value)}
              name="shopstreetaddress"
            />
            <TextField
              variant="outlined"
              label="Phone"
              fullWidth
              size="small"
              style={{ marginBottom: "1em" }}
              type="text"
              placeholder="Phone"
              value={shopphone}
              onChange={(e) => setshopphone(e.target.value)}
              name="shopphone"
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={isLoading}
            >
              Create Shop
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
