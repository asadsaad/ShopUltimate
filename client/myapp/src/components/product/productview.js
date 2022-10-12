import { React, useEffect } from "react";
import Nav from "../layouts/nav";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getproduct } from "../../redux/actions/productactions";
import { ShoppingCart } from "@mui/icons-material";
import { addtocart } from "../../redux/actions/cartactions";
import {
  Grid,
  Container,
  Paper,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";
import SwipeableTextMobileStepper from "../layouts/stepper";

export default function ProductView() {
  const params = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.isLoadingp);

  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    // dispatch({ type: SHOP_ACTION_ATTEMPT });

    dispatch(getproduct(params.id));
  }, []);
  if (loading) {
    return (
      <Stack alignItems="center" sx={{ marginTop: 2, marginBottom: 2 }}>
        <CircularProgress disableShrink />
      </Stack>
    );
  }
  return (
    <div>
      <Nav />
      {/* <SwipeableTextMobileStepper images={product && product.images} /> */}
      <Container sx={{ marginTop: 5 }}>
        <Paper sx={{ padding: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img
                src={product && product.images[0]}
                style={{ width: "100%" }}
              ></img>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h3">
                {product && product.productTitle}
              </Typography>
              <Typography variant="h6">
                Price : ${product && product.price}
              </Typography>

              <Typography variant="h6">By {product && product.shop}</Typography>
              <Typography variant="h6">
                In Stock : {product && product.instock}
              </Typography>
              <Button
                sx={{ marginTop: 2 }}
                variant="outlined"
                startIcon={<ShoppingCart />}
                onClick={() => dispatch(addtocart(product.id))}
              >
                Add To Cart
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ padding: 5, mt: 3 }}>
          <Typography>Images</Typography>
          <Grid container spacing={2}>
            {product
              ? product.images.map((item) => {
                  return (
                    <Grid item xs={3}>
                      <img src={item} style={{ width: "100%" }}></img>
                    </Grid>
                  );
                })
              : "No Images"}
          </Grid>
        </Paper>
        <Paper sx={{ padding: 5, mt: 3, mb: 3 }}>
          <Typography variant="h5">Product Description</Typography>

          <Typography variant="p">
            {product && product.productDescription}
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}
