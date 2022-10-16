import { React, useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Addproduct from "../product/addproduct";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import Productactions from "../product/productactions";
import {
  getuserproducts,
  deleteproduct,
  updateproduct,
} from "../../redux/actions/productactions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Container,
  Button,
  TablePagination,
  TextField,
  Typography,
  Avatar,
  Box,
  Stack,
  Chip,
} from "@mui/material";
import { Edit, Visibility, Delete, Add } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Sidebar from "../layouts/sidebar";
import Loading from "../layouts/loading";
import { PRODUCT_ACTION_ATTEMPT } from "../../redux/types";
import { getallshops } from "../../redux/actions/shopactions";
import EditProduct from "../product/updateproduct";
import Productstatus from "../product/productstatus";
export default function Products() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [shopaddopen, setshopaddOpen] = useState(false);
  const [productaddopen, setproductaddOpen] = useState(false);

  const [currentproduct, setcurrentproduct] = useState();

  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.userproducts);
  const isloadingp = useSelector((state) => state.products.isLoadingp);
  const handleClickproductaddOpen = () => {
    // event.preventDefault()
    setproductaddOpen(true);
  };
  const auth = useSelector((state) => state.auth);
  const shop = useSelector((state) => state.shop.shops);

  useEffect(() => {
    dispatch({ type: PRODUCT_ACTION_ATTEMPT });
    dispatch(getuserproducts());
    dispatch(getallshops());
  }, []);
  const columns = useMemo(
    () => [
      {
        field: "images",
        headerName: "Product Title",
        width: 180,
        renderCell: (params) => {
          return (
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Avatar src={params?.row?.images[0]} variant="rounded"></Avatar>
              <Typography>{params?.row?.productTitle}</Typography>
            </Stack>
          );
        },
      },

      {
        field: "catagery",
        headerName: "Catagery",
        width: 150,
        renderCell: (params) => {
          return <Chip label={params.value} variant="filled" />;
        },
      },
      {
        field: "brand",
        headerName: "Brand",
        width: 150,
        renderCell: (params) => <Typography>{params?.value}</Typography>,
      },
      {
        field: "price",
        headerName: "Price",
        width: 80,
        renderCell: (params) => <Typography>${params?.row?.price}</Typography>,
      },
      {
        field: "discount",
        headerName: "Discount",
        width: 80,
        renderCell: (params) => <Typography>{params?.value}%</Typography>,
      },
      {
        field: "iActive",
        headerName: "Active",
        width: 80,
        renderCell: (params) => <Productstatus {...{ params }} />,
      },

      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        width: 150,
        renderCell: (params) => <Productactions {...{ params }} />,
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
    dispatch(deleteproduct(id));
  };
  const handleClickOpen = (row) => {
    // event.preventDefault()
    setcurrentproduct(row);
    setOpen(true);
  };
  const handleClickaddOpen = () => {
    setshopaddOpen(true);
  };
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" sx={{ mb: 1 }} align="center">
        Manage Products
      </Typography>
      <Box sx={{ height: 550, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row._id}
          rows={products}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          loading={isloadingp}
          // sx={{
          //   "& .MuiDataGrid-columnHeaders": {
          //     backgroundColor: "#d0d0d0",
          //     fontSize: 16,
          //   },
          // }}
        />
        <Button
          variant="outlined"
          startIcon={<Add />}
          onClick={() => handleClickproductaddOpen()}
          sx={{ mt: 1 }}
        >
          Add Product
        </Button>
      </Box>

      <EditProduct open={open} setOpen={setOpen} product={currentproduct} />

      <Addproduct
        productaddopen={productaddopen}
        setproductaddOpen={setproductaddOpen}
      />
    </Container>
  );
}
