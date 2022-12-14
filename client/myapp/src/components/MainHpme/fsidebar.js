import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import "./styles.css";
import { Box, Typography } from "@mui/material";
import { getsinglecatagerytree } from "../../redux/actions/catageryactions";
import { getproductsbycatagery } from "../../redux/actions/productactions";

export default function SideTreeview({ cat, ct, setct }) {
  const dispatch = useDispatch();
  const [fix, setfix] = useState(false);
  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    scrollTop >= 900 ? setfix(true) : setfix(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  useEffect(() => {
    dispatch(getsinglecatagerytree(cat?._id));
  }, [cat]);
  const catageries = useSelector((state) => state.catageries.catageries);
  const catageriestree = useSelector((state) => state.catageries.currentree);
  console.log(catageriestree);

  const renderTree = (nodes) => (
    <TreeItem
      key={nodes?._id}
      nodeId={nodes?._id}
      label={nodes?.name}
      // label={
      //   <Box sx={{ display: "flex", alignItems: "center" }}>
      //     <ExpandMoreIcon /> <Typography>{nodes?.name}</Typography>
      //   </Box>
      // }
    >
      {Array.isArray(nodes?.children)
        ? nodes.children?.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  const handleChange = async (event, node) => {
    setct(node);
  };
  return (
    <Box
      sx={{
        display: { lg: "block", md: "none", xs: "none" },
        position: fix ? "fixed" : null,
        top: "95px",
      }}
    >
      {cat?.children.length ? (
        cat?.children?.map((item) => (
          <TreeView
            onNodeSelect={handleChange}
            aria-label="rich object"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpanded={["root"]}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 110, flexGrow: 1 }}
          >
            {renderTree(item)}
          </TreeView>
        ))
      ) : (
        <Typography sx={{ color: "#333", p: 1 }}>
          No More Catageries Found
        </Typography>
      )}
    </Box>
  );
}
