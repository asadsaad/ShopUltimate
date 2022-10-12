import * as React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { useDropzone } from "react-dropzone";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Alert,
  ImageList,
  ImageListItem,
  IconButton,
  FormControl,
  Autocomplete,
  InputLabel,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { clearalert, inprogress } from "../../redux/actions/authactions";
import { updateshop } from "../../redux/actions/shopactions";
import { styled } from "@mui/material/styles";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});
const Input = styled("input")({
  display: "none",
});

export default function EditShop(props) {
  const [shopname, setshopname] = useState();
  const [aboutShop, setaboutShop] = useState();
  const [catagery, setcatagery] = useState();
  const [subcatagery, setsubcatagery] = useState();
  const [storeimage, setstoreimage] = useState([]);
  const [oldimages, setoldimages] = useState();
  const [brand, setbrand] = useState([]);
  const [storebannerimage, setstorebannerimage] = useState([]);

  const [shoptype, setshoptype] = useState();
  const [shopcountry, setshopcountry] = useState();
  const [shopcity, setshopcity] = useState();
  const [shopstreetaddress, setshopstreetaddress] = useState();
  const [shopphone, setshopphone] = useState();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const error = useSelector((state) => state.errors);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (props.shop) {
      setshopname(props.shop.shopname);
      setaboutShop(props.shop.aboutShop);
      setcatagery(props.shop.catagery);
      setsubcatagery(props.shop.subcatagery);
      setoldimages(props.shop.shopavatar);
      setshopphone(props.shop.shopphone);
      setshopcountry(props.shop.country);
      setshopcity(props.shop.city);
      setshopstreetaddress(props.shop.streetaddress);
      setbrand(props.shop.Brands);
      setshoptype(props.shop.Shoptype);
    }
  }, [props.shop]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const submitform = (event) => {
    console.log("sumit");
    event.preventDefault();
    const formData = {
      _id: props.shop._id,
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
    console.log(formData);

    if (storeimage.length > 0) {
      const promises = [];
      for (let index = 0; index < storeimage.length; index++) {
        const element = storeimage[index];
        const imageref = ref(storage, `images/${element.name}`);
        const upload = uploadBytes(imageref, element).then(async () => {
          await getDownloadURL(imageref).then((url) => {
            formData.shopavatar.push(url);
          });
        });
        promises.push(upload);
        // console.log(promises)
        // upload.then(async ()=>{
        //     await getDownloadURL(imageref).then(url=>{
        //         console.log(url)
        //         formData.shopavatar.push(url)
        //         console.log(formData)
        //     })
        // })

        Promise.all(promises)
          .then(() => {
            dispatch(updateshop(formData));
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      dispatch(updateshop(formData));
    }
  };
  console.log(oldimages);
  return (
    <Dialog
      fullScreen
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      TransitionComponent={Transition}
      sx={{}}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {props.shop ? `Edit Shop #${props.shop._id}` : null}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={() => props.setOpen(false)}
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
        <Box
          component="form"
          sx={{}}
          style={{ marginTop: "2em" }}
          method="post"
          onSubmit={submitform}
        >
          {/* {error.message ?  <Alert onClose={() => {dispatch(clearalert())}} style={{ marginBottom: "10px" }} variant="filled" severity="error">{error.message}</Alert>: null} */}

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
            margin="dense"
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
            defaultValue={brand}
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
          <Typography component="h5" variant="h5" align="center">
            Select Images
          </Typography>
          <Typography align="center">
            <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                multiple
                onChange={(e) => setstoreimage(e.target.files)}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                align="center"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </Typography>
          {/* {storeimage && [...storeimage].map((file)=>(
                        <img src={URL.createObjectURL(file)} />
                    ))} */}
          {oldimages ? (
            <ImageList cols={2} rowHeight={100}>
              {oldimages.map((item) => (
                <ImageListItem key={item} variant="standard">
                  <img
                    height={100}
                    src={item}
                    srcSet={item}
                    alt={item}
                    loading="lazy"
                    sx={{ height: 100 }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          ) : null}
          {/* <ImageList sx={{ width: 700, height: 450 }} cols={4} rowHeight={200}>
                        {storeimage && [...storeimage].map((item) => (
                            <ImageListItem key={item} variant="standard">
                            <img
                                src={URL.createObjectURL(item)}
                                srcSet={URL.createObjectURL(item)}
                                alt={item}
                                loading="lazy"
                                sx={{height:200}}
                            />
                            </ImageListItem>
                        ))}
                    </ImageList> */}
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
          <DialogActions>
            <Button autoFocus type="submit" variant="contained">
              Save changes
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
