import React from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit, Preview } from "@mui/icons-material";
import { useDispatch } from "react-redux";

export default function Orderactions() {
  return (
    <Box>
      <Tooltip title="View Order Details">
        <IconButton>
          <Preview />
        </IconButton>
      </Tooltip>
      <Tooltip title="Modify this Order">
        <IconButton>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete this Order">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
