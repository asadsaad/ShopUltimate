import { Grid, Container, Box, Button, Typography, Stack } from "@mui/material";
import {
  React,
  useRef,
  useCallback,
  useEffect,
  useState,
  Fragment,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Nav from "../layouts/nav";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  PRODUCT_ACTION_ATTEMPT,
  SHOP_ACTION_ATTEMPT,
  SHOP_ACTION_SUCCESS,
} from "../../redux/types";
import authreducer from "../../redux/reducers/authreducer";
import { getallshops } from "../../redux/actions/shopactions";
import Shopcard from "./shopcard";
import { useParams } from "react-router-dom";

export default function ShopHome() {
  const [PageNumber, setPageNumber] = useState(1);
  // const [hasMore, setHasMore] = useState(false);
  const shops = useSelector((state) => state.shop.shops);
  const loading = useSelector((state) => state.shop.isLoading);

  const auth = useSelector((state) => state.auth);
  const params = useParams();
  const observer = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: SHOP_ACTION_ATTEMPT });

    dispatch(getallshops(PageNumber));
  }, [PageNumber, dispatch]);

  const loadmore = () => {
    console.log(PageNumber);
    setPageNumber((prevState) => prevState + 1);
  };

  return (
    <div>
      <Nav />
      {shops ? (
        <Container sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {shops.map((item) => (
              <Shopcard
                key={item._id}
                name={item.shopname}
                image={item.shopavatar && item.shopavatar[0]}
                catagery={item.catagery}
                subcatagery={item.subcatagery}
                // owner={item.owner.username}
                id={item._id}
              />
            ))}
          </Grid>
          {loading && (
            <Stack alignItems="center" sx={{ marginTop: 2, marginBottom: 2 }}>
              <CircularProgress disableShrink />
            </Stack>
          )}
          {!loading && (
            <Stack alignItems="center">
              <Button
                color="primary"
                onClick={loadmore}
                variant="contained"
                sx={{ marginTop: 2 }}
              >
                Load More
              </Button>
            </Stack>
          )}
        </Container>
      ) : (
        <h3>No Records</h3>
      )}
      {/* {shopDetails}
      <Typography align="center">
        <Button
          color="primary"
          onClick={loadmore}
          variant="contained"
          sx={{ marginTop: 2 }}
        >
          Load More
        </Button>
      </Typography> */}
    </div>
  );
}
