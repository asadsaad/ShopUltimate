import { React, useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit, Preview } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import EditProduct from "./updateproduct";
import { deleteproduct } from "../../redux/actions/productactions";
export default function Productactions({ params, props }) {
  const diapatch = useDispatch();
  const [open, setopen] = useState(false);
  return (
    <Box>
      <Tooltip title="View Product Details">
        <IconButton>
          <Preview />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit this Product">
        <IconButton onClick={() => setopen(true)}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete this Shop">
        <IconButton onClick={() => diapatch(deleteproduct(params.row._id))}>
          <Delete />
        </IconButton>
      </Tooltip>
      <EditProduct open={open} setOpen={setopen} product={params.row} />
    </Box>
  );
}
