import { React, useEffect, useMemo, useRef } from "react";
import Nav from "../layouts/nav";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import JoditEditor from "jodit-react";
import Imagelist from "../upload/progressList/productimagelist";
import {
  Grid,
  TextField,
  Button,
  Typography,
  ImageList,
  ImageListItem,
  IconButton,
  ImageListItemBar,
  Avatar,
  Fab,
  Input,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { clearalert, inprogress } from "../../redux/actions/authactions";
import { styled } from "@mui/material/styles";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { DeleteOutlineOutlined, Send } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { CLEAR_PRODUCT_IMAGE, PRODUCT_ACTION_ATTEMPT } from "../../redux/types";
import Alert from "../layouts/alerts";
import { addproduct } from "../../redux/actions/productactions";
import { getusershops } from "../../redux/actions/shopactions";
import ProgressList from "../upload/progressList/progressList";
import Loading from "../layouts/loading";

export default function Addproduct(props) {
  const [productTitle, setproductTitle] = useState();
  const [productDescription, setproductDescription] = useState();
  const [catagery, setcatagery] = useState();
  const [subcatagery, setsubcatagery] = useState();
  const [productimage, setproductimage] = useState([]);
  const [price, setprice] = useState();
  const [instock, setinstock] = useState();
  const [store, setstore] = useState("");
  const [images, setImages] = useState([]);
  const [brand, setbrand] = useState();
  const [discount, setdiscount] = useState();
  const editor = useRef(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getusershops());
  }, []);
  const shop = useSelector((state) => state.shop.usershops);
  const productimages = useSelector(
    (state) => state.productimages.imagestosend
  );
  const fileRef = useRef();
  const handleClick = () => {
    fileRef.current.click();
  };
  const isLoading = useSelector((state) => state.products.isLoadingp);
  console.log(productimage);
  const handleClose = () => {
    props.setproductaddOpen(false);
  };
  const placeholder = "Start typing";
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typings...",
    }),
    [placeholder]
  );
  const submitform = async (event) => {
    event.preventDefault();
    dispatch({ type: PRODUCT_ACTION_ATTEMPT });

    const formData = {
      productTitle: productTitle,
      productDescription: productDescription,
      catagery: catagery,
      subcatagery: subcatagery,
      images: productimages,
      price: price,
      instock: instock,
      shop: store,
      brand: brand,
      discount: discount,
    };
    console.log(formData);
    dispatch(addproduct(formData));
    // setproductTitle("");
    // setproductDescription("");
    // setcatagery("");
    // setsubcatagery("");
    // setproductimage([]);
    // setprice("");
    // setinstock("");
    // setstore("");
    // setbrand("");
    // setdiscount("");
    // dispatch({ type: CLEAR_PRODUCT_IMAGE });
  };
  return (
    <Dialog
      fullScreen
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.productaddopen}
      sx={{}}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Add New Product
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={() => props.setproductaddOpen(false)}
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
        <Box component="form" style={{}} method="post" onSubmit={submitform}>
          <InputLabel sx={{ color: "#333" }}>Product Title</InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            size="small"
            style={{ marginBottom: "1em" }}
            type="text"
            placeholder="My Awesome Product"
            value={productTitle}
            onChange={(e) => setproductTitle(e.target.value)}
            name="Product Name"
          />
          <InputLabel sx={{ color: "#333" }}>Product Description</InputLabel>
          <JoditEditor
            ref={editor}
            value={productDescription}
            config={config}
            tabIndex={2} // tabIndex of textarea
            onBlur={(newContent) => setproductDescription(newContent)} // preferred to use only this option to update the content for performance reasons
            // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {
              setproductDescription(newContent);
            }}
          />

          <InputLabel sx={{ color: "#333", mt: 2 }}>Catagery</InputLabel>

          <TextField
            variant="outlined"
            fullWidth
            size="small"
            style={{ marginBottom: "1em" }}
            type="text"
            placeholder="Catagery...."
            value={catagery}
            onChange={(e) => setcatagery(e.target.value)}
            name="catagery"
          />
          <InputLabel sx={{ color: "#333" }}>Sub Catagery</InputLabel>

          <TextField
            variant="outlined"
            fullWidth
            size="small"
            style={{ marginBottom: "1em" }}
            type="text"
            placeholder="Sub Catagery"
            value={subcatagery}
            onChange={(e) => setsubcatagery(e.target.value)}
            name="subcatagery"
          />
          <InputLabel sx={{ color: "#333" }}>Brand</InputLabel>

          <TextField
            variant="outlined"
            fullWidth
            size="small"
            style={{ marginBottom: "1em" }}
            type="text"
            placeholder="Brand...."
            value={brand}
            onChange={(e) => setbrand(e.target.value)}
            name="brand"
          />
          <InputLabel sx={{ color: "#333" }}>Price</InputLabel>

          <TextField
            variant="outlined"
            fullWidth
            size="small"
            style={{ marginBottom: "1em" }}
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            name="price"
          />
          <InputLabel sx={{ color: "#333" }}>
            Discount (Percentage) (Optional)
          </InputLabel>

          <TextField
            variant="outlined"
            fullWidth
            size="small"
            style={{ marginBottom: "1em" }}
            type="number"
            placeholder="Discount in %age"
            value={discount}
            onChange={(e) => setdiscount(e.target.value)}
            name="discount"
          />
          <InputLabel sx={{ color: "#333" }}>Avalaible Stock</InputLabel>

          <TextField
            variant="outlined"
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
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Store"
            onChange={(e) => setstore(e.target.value)}
            fullWidth
            defaultValue={shop.length && shop[0]}
            value={store}
            size="small"
          >
            {shop.length > 0
              ? shop.map((item) => (
                  <MenuItem value={item._id} key={item._id}>
                    {item.shopname}
                  </MenuItem>
                ))
              : null}
          </Select>
          <Typography
            component="h5"
            variant="h5"
            align="center"
            sx={{ mt: 2, mb: 1 }}
          >
            Select Images
          </Typography>
          <Typography align="center">
            <Input
              type="file"
              inputProps={{ multiple: true }}
              sx={{ display: "none" }}
              inputRef={fileRef}
              onChange={(e) => setproductimage([...e.target.files])}
            />
            <Fab color="primary" aria-label="add" onClick={handleClick}>
              <AddIcon fontSize="large" />
            </Fab>
            {/* <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                multiple
                onChange={(e) => setproductimage([...e.target.files])}
              />
              <Fab color="primary" aria-label="upload picture">
              <AddIcon />
            </Fab> */}
            {/* <Avatar
                sx={{ width: "100%", height: "300px", cursor: "pointer" }}
                variant="rounded"
              >
                <IconButton
                  color="primary"
                  
                  component="span"
                  align="center"
                >
                  <PhotoCamera />
                </IconButton>
              </Avatar> */}
            {/* </label> */}
          </Typography>
          <ProgressList
            files={productimage}
            images={images}
            setproductimages={setImages}
          />
          <Imagelist />

          <DialogActions>
            <Button
              variant="contained"
              color="success"
              type="submit"
              fullWidth
              endIcon={<Send />}
            >
              Create New Product
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
      <Loading isloading={isLoading} />
    </Dialog>
  );
}
