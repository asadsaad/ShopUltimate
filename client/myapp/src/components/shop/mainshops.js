import {
  Grid,
  Container,
  Box,
  Button,
  Typography,
  Stack,
  TextField,
  Paper,
  InputLabel,
  Autocomplete,
  Chip,
  Checkbox,
  Rating,
  ImageList,
  IconButton,
  Tooltip,
} from "@mui/material";
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
import nopreview from "../../images/nopreview.png";
import {
  PRODUCT_ACTION_ATTEMPT,
  SHOP_ACTION_ATTEMPT,
  SHOP_ACTION_SUCCESS,
} from "../../redux/types";
import authreducer from "../../redux/reducers/authreducer";
import { getallshops } from "../../redux/actions/shopactions";
import Shopcard from "./shopcard";
import { Link, useParams } from "react-router-dom";
import {
  FilterAlt,
  FilterList,
  FilterListOff,
  TextFieldsRounded,
} from "@mui/icons-material";
import ShopFilter from "./filtershops";

export default function ShopHome() {
  const [PageNumber, setPageNumber] = useState(1);
  const [open, setOpen] = useState(true);
  const [storename, setstorename] = useState(null);
  const [brand, setbrand] = useState();
  const [catagery, setcatgery] = useState(null);
  const [country, setcountry] = useState(null);

  const shops = useSelector((state) => state.shop.shops);
  const loading = useSelector((state) => state.shop.isLoading);
  const catageries = useSelector((state) => state.catageries.catageries);

  const auth = useSelector((state) => state.auth);
  const params = useParams();
  const observer = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: SHOP_ACTION_ATTEMPT });
    dispatch(getallshops(null));
  }, [PageNumber, dispatch]);

  const loadmore = () => {
    console.log(PageNumber);
    setPageNumber((prevState) => prevState + 1);
  };
  const handlefilter = () => {
    if (!storename && !country && !catagery) {
      dispatch(getallshops(null));
    }
    const data = {
      shopname: storename,
      country: country,
      catagery: catagery,
    };
    dispatch(getallshops(data));
  };
  const handleclear = () => {
    setOpen(!open);
    dispatch(getallshops(null));
  };
  return (
    <div>
      <Nav />

      <Container sx={{ mt: 3 }} maxWidth="xl">
        {loading && (
          <Stack alignItems="center" sx={{ marginTop: 2, marginBottom: 2 }}>
            <CircularProgress disableShrink />
          </Stack>
        )}
        <Box sx={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<FilterListOff />}
            onClick={handleclear}
            sx={{ mr: 1, mb: 1 }}
          >
            Clear Filters
          </Button>
          <Button
            variant="contained"
            color="success"
            endIcon={<FilterList />}
            sx={{ mb: 1 }}
            onClick={() => setOpen(!open)}
          >
            Filter Shops
          </Button>

          {open ? (
            <ShopFilter
              brand={brand}
              setbrand={setbrand}
              storename={storename}
              setstorename={setstorename}
              catagery={catagery}
              setcatgery={setcatgery}
              country={country}
              setcountry={setcountry}
              handlefilter={handlefilter}
            />
          ) : null}
        </Box>
        <ImageList
          gap={12}
          sx={{
            // width: 500,
            // mb: 8,
            // height: "100%",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(280px, 1fr))!important",
          }}
        >
          {shops ? (
            // <Grid container spacing={2}>
            shops.map((item) => (
              <Shopcard
                key={item._id}
                name={item.shopname}
                image={
                  item.shopavatar.length > 0 ? item.shopavatar[0] : nopreview
                }
                banner={item.shopbanner[0]}
                country={item.country && item.country}
                city={item.city && item.city}
                // owner={item.owner.username}
                id={item._id}
              />
            ))
          ) : (
            // </Grid>
            <h3>No Records</h3>
          )}
        </ImageList>

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
    </div>
  );
}
