import * as React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { DeleteOutlineOutlined } from "@mui/icons-material";

import {
  Grid,
  TextField,
  Button,
  Typography,
  Alert,
  ImageList,
  ImageListItem,
  IconButton,
  ImageListItemBar,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { clearalert, inprogress } from "../../redux/actions/authactions";
import { updateproduct } from "../../redux/actions/productactions";
import { styled } from "@mui/material/styles";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Input = styled("input")({
  display: "none",
});

export default function EditProduct(props) {
  const [productTitle, setproductTitle] = useState();
  const [productDescription, setproductDescription] = useState();
  const [catagery, setcatagery] = useState();
  const [subcatagery, setsubcatagery] = useState();
  const [productimage, setproductimage] = useState([]);
  const [price, setprice] = useState();
  const [instock, setinstock] = useState();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const error = useSelector((state) => state.errors);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (props.product) {
      setproductTitle(props.product.productTitle);
      setproductDescription(props.product.productDescription);
      setcatagery(props.product.catagery);
      setsubcatagery(props.product.subcatagery);
      setprice(props.product.price);
      setinstock(props.product.instock);
      //   setproductimage(props.product.productimage);
    }
  }, [props.product]);
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
      id: props.product._id,
      productTitle: productTitle,
      productDescription: productDescription,
      catagery: catagery,
      subcatagery: subcatagery,
      images: [],
      price: price,
      instock: instock,
    };

    if (productimage.length > 0) {
      const promises = [];
      for (let index = 0; index < productimage.length; index++) {
        const element = productimage[index];
        const imageref = ref(storage, `images/${element.name}`);
        const upload = uploadBytes(imageref, element).then(async () => {
          await getDownloadURL(imageref).then((url) => {
            formData.images.push(url);
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
      }
      Promise.all(promises)
        .then(() => {
          console.log("promisses");
          dispatch(updateproduct(formData));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      dispatch(updateproduct(formData));
    }
  };
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      fullScreen
      TransitionComponent={Transition}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {props.product ? `Edit Product #${props.product.id}` : null}
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
            label="Product Name"
            fullWidth
            size="small"
            style={{ marginBottom: "1em" }}
            type="text"
            placeholder="Product Name"
            value={productTitle}
            onChange={(e) => setproductTitle(e.target.value)}
            name="Product Name"
          />
          <TextField
            variant="outlined"
            label="Product Description"
            fullWidth
            multiline
            rows={5}
            size="small"
            style={{ marginBottom: "1em" }}
            type="text"
            placeholder="Product Description"
            value={productDescription}
            onChange={(e) => setproductDescription(e.target.value)}
            name="Product Description"
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
          <TextField
            variant="outlined"
            label="Price"
            fullWidth
            size="small"
            style={{ marginBottom: "1em" }}
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            name="price"
          />
          <TextField
            variant="outlined"
            label="In Stock"
            fullWidth
            size="small"
            style={{ marginBottom: "1em" }}
            type="number"
            placeholder="In Stock"
            value={instock}
            onChange={(e) => setinstock(e.target.value)}
            name="instock"
          />
          <InputLabel id="demo-simple-select-label">Select Store</InputLabel>
          {/* <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Store"
            onChange={(e) => setstore(e.target.value)}
            fullWidth
            value={store}
          >
            {shop.length > 0
              ? shop.map((item) => (
                  <MenuItem value={item._id}>{item.shopname}</MenuItem>
                ))
              : null}
          </Select> */}
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
                onChange={(e) => setproductimage([...e.target.files])}
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
          {productimage && productimage.length > 0 ? (
            <ImageList
              sx={{ width: 700, maxheight: 450 }}
              cols={3}
              rowHeight={200}
            >
              {[...productimage].map((item) => (
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
                          setproductimage(
                            productimage.filter((image) => image !== item)
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
