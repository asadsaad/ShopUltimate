import { React, useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteshop, getusershops } from "../../redux/actions/shopactions";
import moment from "moment";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Edit, Visibility, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import EditShop from "./shopeditmodel";
import { Add } from "@mui/icons-material";
import Sidebar from "../layouts/sidebar";
import Addshop from "./createshop";
import Loading from "../layouts/loading";
import {
  Box,
  Container,
  Button,
  TablePagination,
  TextField,
  Typography,
  Avatar,
  Stack,
  CircularProgress,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ShopActions from "./shopactions";

export default function Shops() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [shopaddopen, setshopaddOpen] = useState(false);

  const [currentshop, setcurrentshop] = useState();

  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const shops = useSelector((state) => state.shop.usershops);
  const isloading = useSelector((state) => state.shop.isLoading);

  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getusershops());
  }, []);
  const columns = useMemo(
    () => [
      {
        field: "shopavatar",
        headerName: "Title",
        width: 180,
        renderCell: (params) => {
          return (
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Avatar src={params?.row?.shopavatar} variant="rounded"></Avatar>
              <Typography>{params?.row?.shopname}</Typography>
            </Stack>
          );
        },
      },
      {
        field: "catagery",
        headerName: "Catagery",
        width: 150,
        renderCell: (params) => {
          return <Typography>{params.value}</Typography>;
        },
      },
      {
        field: "Shoptype",
        headerName: "Shop Type",
        width: 150,
        renderCell: (params) => {
          return <Typography>{params.value}</Typography>;
        },
      },

      {
        field: "createdat",
        headerName: "Create At",
        width: 180,
        renderCell: (params) => {
          return (
            <Typography>
              {moment(params.row.createdat).format("MMMM Do YYYY")}
            </Typography>
          );
        },
      },
      {
        field: "shopcity",
        headerName: "Location",
        width: "180",
        renderCell: (params) => {
          return (
            <Typography>
              {params?.row?.city + ", " + params?.row?.country}
            </Typography>
          );
        },
      },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        width: 150,
        renderCell: (params) => <ShopActions {...{ params }} />,
      },
    ],
    []
  );
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handledelete = (event, id) => {
    event.preventDefault();
    dispatch(deleteshop(id));
  };
  const handleClickOpen = (row) => {
    // event.preventDefault()
    setcurrentshop(row);
    setOpen(true);
  };
  const handleClickaddOpen = () => {
    setshopaddOpen(true);
  };
  const noproducts = shops.products ? shops.products.length : 0;
  const nproducts = shops.length;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" sx={{ mb: 1 }} align="center">
        Manage Shops
      </Typography>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row._id}
          rows={shops}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          loading={isloading}
        />
        {/* <Link to="/dashboard/create-shop" style={{ textDecoration: "none" }}> */}
        <Button
          variant="outlined"
          startIcon={<Add />}
          sx={{ mt: 2 }}
          onClick={() => handleClickaddOpen()}
        >
          Create New Shop
        </Button>
        <Addshop shopaddopen={shopaddopen} setshopaddOpen={setshopaddOpen} />

        {/* </Link> */}
      </Box>
    </Container>
  );
}
