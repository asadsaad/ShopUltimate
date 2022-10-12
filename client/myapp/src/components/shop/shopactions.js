import { React, useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit, Preview } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteshop } from "../../redux/actions/shopactions";
import EditShop from "./shopeditmodel";
export default function ShopActions({ params, props }) {
  const diapatch = useDispatch();
  const [open, setopen] = useState(false);
  return (
    <Box>
      <Tooltip title="View Shop Details">
        <IconButton>
          <Preview />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit this Shop">
        <IconButton onClick={() => setopen(true)}>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete this Shop">
        <IconButton onClick={() => diapatch(deleteshop(params.row._id))}>
          <Delete />
        </IconButton>
      </Tooltip>
      <EditShop open={open} setOpen={setopen} shop={params.row} />
    </Box>
  );
}
