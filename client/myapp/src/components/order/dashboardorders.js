import { React, useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getorders_s } from "../../redux/actions/orderactions";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Edit, Visibility, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Add } from "@mui/icons-material";
import Sidebar from "../layouts/sidebar";
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
import Orderactions from "./orderactions";
// import Orderactions from "./orderactions";

export default function Orders() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [shopaddopen, setshopaddOpen] = useState(false);

  const [currentshop, setcurrentshop] = useState();

  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.s_orders);

  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getorders_s());
  }, []);
  const columns = useMemo(
    () => [
      {
        field: "_id",
        headerName: "Order No",
        width: 100,
      },
      {
        field: "to",
        headerName: "Customer",
        width: 130,
        renderCell: (params) => (
          <Typography>{params.row.to.username}</Typography>
        ),
      },
      {
        field: "orderstatus",
        headerName: "Order Status",
        width: 100,
      },
      {
        field: "ordertotal",
        headerName: "Amount",
        width: 100,
      },
      {
        field: "deliverystatus",
        headerName: "Delivery Status",
        width: 100,
      },
      {
        field: "deliverydate",
        headerName: "Delivery Date",
        width: 100,
      },
      {
        field: "createdat",
        headerName: "Placed Date",
        width: 100,
      },

      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        width: 150,
        renderCell: (params) => <Orderactions {...{ params }} />,
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
  };
  const handleClickOpen = (row) => {
    // event.preventDefault()
    setcurrentshop(row);
    setOpen(true);
  };
  const handleClickaddOpen = () => {
    setshopaddOpen(true);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" sx={{ mb: 1 }} align="center">
        Manage Orders
      </Typography>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row._id}
          rows={orders}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          // loading={isloading}
        />
        {/* <Link to="/dashboard/create-shop" style={{ textDecoration: "none" }}> */}

        {/* </Link> */}
      </Box>
    </Container>
  );
}
