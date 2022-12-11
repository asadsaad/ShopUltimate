import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import "./styles.css";
import { Box } from "@mui/material";

export default function SideTreeview() {
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
  const catageries = useSelector((state) => state.catageries.catageries);
  const renderTree = (nodes) => (
    <TreeItem key={nodes?._id} nodeId={nodes?._id} label={nodes?.name}>
      {Array.isArray(nodes?.children)
        ? nodes.children?.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  const handleChange = async (event, node) => {
    console.log("nodeId: ", node);
  };
  return (
    <Box
      sx={{
        display: { lg: "block", md: "none", xs: "none" },
        position: fix ? "fixed" : null,
        top: "95px",
      }}
    >
      {catageries &&
        catageries.map((item) => (
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
        ))}
    </Box>
  );
}
