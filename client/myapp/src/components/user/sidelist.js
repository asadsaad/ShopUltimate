// import {
//   ChevronLeft,
//   Dashboard,
//   KingBed,
//   Logout,
//   MarkChatUnread,
//   NotificationsActive,
//   PeopleAlt,
//   Star,
// } from "@mui/icons-material";
// import Collapse from "@mui/material/Collapse";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import DraftsIcon from "@mui/icons-material/Drafts";
// import SendIcon from "@mui/icons-material/Send";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import StarBorder from "@mui/icons-material/StarBorder";
// import {
//   Avatar,
//   Box,
//   Divider,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Stack,
//   styled,
//   Tooltip,
//   Typography,
// } from "@mui/material";
// import MuiDrawer from "@mui/material/Drawer";
// import { useMemo, useState } from "react";
// import { Route, Routes, useNavigate } from "react-router-dom";
// import Orders from "../order/dashboardorders";
// import Addshop from "../shop/createshop";
// // import { useValue } from "../../context/ContextProvider";
// import Shops from "../shop/shops";
// import Products from "../user/products";
// import Brands from "./brands";
// import Catagery from "./catagery";

// // import Requests from "./requests/Requests";
// // import Rooms from "./rooms/Rooms";
// // import Users from "./users/Users";
// const drawerWidth = 240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));
// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// // const DrawerHeader = styled("div")(({ theme }) => ({
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "flex-end",
// //   padding: theme.spacing(0, 1),
// //   // necessary for content to be below app bar
// //   ...theme.mixins.toolbar,
// // }));

// // const Drawer = styled(MuiDrawer, {
// //   shouldForwardProp: (prop) => prop !== "open",
// // })(({ theme, open }) => ({
// //   width: drawerWidth,
// //   flexShrink: 0,
// //   whiteSpace: "nowrap",
// //   boxSizing: "border-box",
// //   ...(open && {
// //     ...openedMixin(theme),
// //     "& .MuiDrawer-paper": openedMixin(theme),
// //   }),
// //   ...(!open && {
// //     ...closedMixin(theme),
// //     "& .MuiDrawer-paper": closedMixin(theme),
// //   }),
// // }));

// const SideList = ({ open, setOpen }) => {
//   //   const {
//   //     state: { currentUser },
//   //     dispatch,
//   //   } = useValue();

//   const [selectedLink, setSelectedLink] = useState("");
//   const [openl, setopenl] = useState(false);

//   const list = useMemo(
//     () => [
//       {
//         title: "Main",
//         icon: <Dashboard />,
//         link: "",
//         component: <Dashboard {...{ setSelectedLink, link: "" }} />,
//       },
//       {
//         title: "Shops",
//         icon: <PeopleAlt />,
//         link: "shops",
//         component: <Shops {...{ setSelectedLink, link: "shops" }} />,
//       },
//       {
//         title: "Products",
//         icon: <KingBed />,
//         link: "products",
//         component: <Products {...{ setSelectedLink, link: "products" }} />,
//       },
//       {
//         title: "Orders",
//         icon: <KingBed />,
//         link: "orders",
//         component: <Orders {...{ setSelectedLink, link: "orders" }} />,
//       },
//       {
//         title: "Categeries",
//         icon: <KingBed />,
//         link: "catagery",
//         component: <Catagery {...{ setSelectedLink, link: "catagery" }} />,
//       },
//       {
//         title: "Brand",
//         icon: <KingBed />,
//         link: "brands",
//         component: <Brands {...{ setSelectedLink, link: "brands" }} />,
//       },
//       {
//         title: "Create Shop",
//         icon: <KingBed />,
//         link: "create-shop",
//         component: <Addshop {...{ setSelectedLink, link: "create-shop" }} />,
//       },

//       //   {
//       //     title: "Messages",
//       //     icon: <MarkChatUnread />,
//       //     link: "messages",
//       //     component: <Messages {...{ setSelectedLink, link: "messages" }} />,
//       //   },
//     ],
//     []
//   );

//   const navigate = useNavigate();

//   //   const handleLogout = () => {
//   //     dispatch({ type: "UPDATE_USER", payload: null });
//   //     navigate("/");
//   //   };
//   const handleClick = () => {
//     setOpen(!open);
//   };
//   return (
//     <>
//       <Drawer
//         variant="persistent"
//         anchor="left"
//         open={open}
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//       >
//         <DrawerHeader>
//           <IconButton onClick={() => setOpen(false)}>
//             <ChevronLeft />
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         {/* <List>
//           {list.map((item) => (
//             <ListItem key={item.title} disablePadding sx={{ display: "block" }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? "initial" : "center",
//                   px: 2.5,
//                 }}
//                 onClick={() => navigate(item.link)}
//                 selected={selectedLink === item.link}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : "auto",
//                     justifyContent: "center",
//                   }}
//                 >
//                   {item.icon}
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={item.title}
//                   sx={{ opacity: open ? 1 : 0 }}
//                 />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List> */}
//         {/* <List
//           sx={{ width: "100%", bgcolor: "background.paper" }}
//           aria-label="contacts"
//         >
//           <ListItem disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 <Star />
//               </ListItemIcon>
//               <ListItemText primary="Chelsea Otakan" />
//             </ListItemButton>
//           </ListItem>
//           {open && (
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemText inset primary="Eric Hoffman" />
//               </ListItemButton>
//             </ListItem>
//           )}
//         </List> */}
//         {/* <List>
//           <ListItem disablePadding sx={{ display: "block" }}>
//             <ListItemButton
//               sx={{
//                 minHeight: 48,
//                 justifyContent: open ? "initial" : "center",
//                 px: 2.5,
//               }}
//               // selected={selectedLink === item.link}
//             >
//               <ListItemIcon
//                 sx={{
//                   minWidth: 0,
//                   mr: open ? 3 : "auto",
//                   justifyContent: "center",
//                 }}
//               >
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Title" sx={{ opacity: open ? 1 : 0 }} />
//             </ListItemButton>
//           </ListItem>
//         </List> */}
//         <Stack sx={{}}>
//           <Box sx={{}}>
//             <Typography sx={{ mt: 2 }}>Shops</Typography>
//             <Box
//               sx={{
//                 height: 48,
//                 display: "flex",
//                 cursor: "pointer",
//                 alignItems: "center",
//                 pl: 2,
//                 "&:hover": {
//                   background: "#009f7f",
//                 },
//               }}
//             >
//               <StarBorder sx={{ mr: 1 }} />
//               <Typography>Add Shop</Typography>
//             </Box>
//           </Box>
//         </Stack>
//         <Divider />
//         <Box sx={{ mx: "auto", mt: 3, mb: 1 }}>
//           {/* <Tooltip title={currentUser?.name || ""}>
//             <Avatar
//               src={currentUser?.photoURL}
//               {...(open && { sx: { width: 100, height: 100 } })}
//             />
//           </Tooltip> */}
//         </Box>
//         <Box sx={{ textAlign: "center" }}>
//           {/* {open && <Typography>{currentUser?.name}</Typography>}
//           <Typography variant="body2">{currentUser?.role || "role"}</Typography>
//           {open && (
//             <Typography variant="body2">{currentUser?.email}</Typography>
//           )}
//           <Tooltip title="Logout" sx={{ mt: 1 }}>
//             <IconButton onClick={handleLogout}>
//               <Logout />
//             </IconButton>
//           </Tooltip> */}
//         </Box>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//         <Routes>
//           {list.map((item) => (
//             <Route key={item.title} path={item.link} element={item.component} />
//           ))}
//         </Routes>
//       </Box>
//     </>
//   );
// };
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Assignment,
  AssignmentOutlined,
  AssuredWorkload,
  Dashboard,
  FiberManualRecord,
  Logout,
  Payment,
  PermIdentity,
  Star,
  Storefront,
  ViewInAr,
} from "@mui/icons-material";
import { Avatar, Collapse, Stack, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, Routes, Route } from "react-router-dom";
import Addshop from "../shop/createshop";
import Shops from "../shop/shops";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      width: "100%",
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

export default function SideList({ open, setOpen }) {
  const profile = useSelector((state) => state.profile.profile);
  const [openl, setOpenl] = React.useState(false);
  const [openp, setOpenp] = React.useState(false);
  const [openo, setOpeno] = React.useState(false);

  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpenl(!openl);
  };
  const handleClickp = () => {
    setOpenp(!openp);
  };
  const handleClicko = () => {
    setOpeno(!openo);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        // PaperProps={{
        //   sx: {
        //     backgroundColor: "#009f7f",
        //     color: "white",
        //   },
        // }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <AssuredWorkload
            sx={{
              color: "#333",
              mr: 0.5,
              fontSize: "18px",
              position: "relative",
              top: "-2px",
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#333",
              textTransform: "uppercase",
              fontWeight: "bold",
              letterSpacing: "1px",
              fontSize: "14px",
            }}
          >
            Shop
            <span style={{ color: "#64a832" }}>Ultimate</span>
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            "& .css-cveggr-MuiListItemIcon-root": { minWidth: "40px" },
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton>
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Shops" />
            {openl ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openl} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{
                "& .css-cveggr-MuiListItemIcon-root": { minWidth: "20px" },
              }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FiberManualRecord sx={{ fontSize: "8px" }} />
                </ListItemIcon>
                <Link
                  to="my-shops"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemText primary="My Shops" />
                </Link>
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FiberManualRecord sx={{ fontSize: "8px" }} />
                </ListItemIcon>
                <Link
                  to="create-shop"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItemText primary="Add Shop" />
                </Link>
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClickp}>
            <ListItemIcon>
              <ViewInAr />
            </ListItemIcon>
            <ListItemText primary="Products" />
            {openp ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openp} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{
                "& .css-cveggr-MuiListItemIcon-root": { minWidth: "20px" },
              }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FiberManualRecord sx={{ fontSize: "8px" }} />
                </ListItemIcon>
                <ListItemText primary="My Products" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FiberManualRecord sx={{ fontSize: "8px" }} />
                </ListItemIcon>
                <ListItemText primary="Add Product" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClicko}>
            <ListItemIcon>
              <AssignmentOutlined />
            </ListItemIcon>
            <ListItemText primary="Orders" />
            {openo ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openo} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{
                "& .css-cveggr-MuiListItemIcon-root": { minWidth: "20px" },
              }}
            >
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FiberManualRecord sx={{ fontSize: "8px" }} />
                </ListItemIcon>
                <ListItemText primary="My Orders" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemIcon>
              <Payment />
            </ListItemIcon>
            <ListItemText primary="Payments" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <PermIdentity />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </List>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Avatar
            src={profile?.image}
            sx={{ width: 100, height: 100, alignSelf: "center" }}
          ></Avatar>
          <Typography sx={{ fontWeight: "bold", mt: 1, mb: 1 }}>
            Jon Doe
          </Typography>
          <Box>
            <Tooltip title="Logout">
              <IconButton>
                <Logout />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <Routes>
          <Route path="create-shop" element={<Addshop />} />
          <Route path="my-shops" element={<Shops />} />
        </Routes>
      </Main>
    </Box>
  );
}

// export default SideList;
