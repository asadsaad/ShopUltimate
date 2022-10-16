import { React, useEffect, useMemo, useRef } from "react";
import Nav from "../layouts/nav";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import JoditEditor from "jodit-react";

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
} from "@mui/material";
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
const Input = styled("input")({
  display: "none",
});
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
    setproductTitle("");
    setproductDescription("");
    setcatagery("");
    setsubcatagery("");
    setproductimage([]);
    setprice("");
    setinstock("");
    setstore("");
    setbrand("");
    setdiscount("");
    dispatch({ type: CLEAR_PRODUCT_IMAGE });

    // if (productimage.length > 0) {
    //   const promises = [];
    //   for (let index = 0; index < productimage.length; index++) {
    //     const element = productimage[index];
    //     const imageref = ref(storage, `images/${element.name}`);
    //     const upload = uploadBytes(imageref, element).then(async () => {
    //       await getDownloadURL(imageref).then((url) => {
    //         formData.images.push(url);
    //       });
    //     });
    //     promises.push(upload);
    //     // console.log(promises)
    //     // upload.then(async ()=>{
    //     //     await getDownloadURL(imageref).then(url=>{
    //     //         console.log(url)
    //     //         formData.shopavatar.push(url)
    //     //         console.log(formData)
    //     //     })
    //     // })
    //   }
    //   Promise.all(promises)
    //     .then(() => {
    //       console.log("promisses");
    //       dispatch(addproduct(formData));
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } else {
    // }
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
          {/* <TextField
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
          /> */}
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
            <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                multiple
                onChange={(e) => setproductimage([...e.target.files])}
              />
              <Avatar
                sx={{ width: "100%", height: "300px", cursor: "pointer" }}
                variant="rounded"
              >
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  align="center"
                >
                  <PhotoCamera />
                </IconButton>
              </Avatar>
            </label>
          </Typography>
          {productimages.length > 0 ? (
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {productimages.map((img) => (
                <Avatar
                  src={img}
                  variant="rounded"
                  sx={{ width: 200, height: 200, m: 1 }}
                ></Avatar>
              ))}
            </Box>
          ) : (
            <ProgressList
              files={productimage}
              images={images}
              setproductimages={setImages}
            />
          )}

          {/* {productimage.length > 0 ? (
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
          ) : null} */}
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
