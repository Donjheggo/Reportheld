import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";

//////// MUI //////////////////
import {
  styled,
  useTheme,
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

/////// MUI ICONS /////////////
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import Groups2Icon from "@mui/icons-material/Groups2";
import ViewListIcon from "@mui/icons-material/ViewList";
import ClassIcon from "@mui/icons-material/Class";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import RateReviewIcon from "@mui/icons-material/RateReview";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FactoryIcon from "@mui/icons-material/Factory";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import logo from "/images/swbt_logo.png";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



export default function Navigation(props) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": {
        ...openedMixin(theme),
        backgroundColor: props.bgColor,
        color: props.textColor
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": {
        ...closedMixin(theme),
        backgroundColor: props.bgColor,
      },
    }),
  }));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const profileNavigate = () => {
    navigate("/profile");
    setAnchorEl(null);
  };

  const logout = () => {
    navigate("/");
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{backgroundColor: props.appbarColor}}
      >
        <Toolbar>
          {!open ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ marginRight: 2 }}
            >
              <MenuIcon sx={{color: props.darkMode ? "white" : "white"}} />
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerClose} color="inherit">
              <ArrowBackIosIcon sx={{color: props.darkMode ? "white" : "white"}} />
            </IconButton>
          )}

          <Typography color={props.darkMode ? "white" : "white"} variant="h6" noWrap component="div">
            Reportheld
          </Typography>
          <SignalCellularAltIcon style={{ marginLeft: "8px", color: props.darkMode ? "white" : "white" }} />
          <Box
            sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
          >
            <Typography color={props.darkMode ? "white" : "white"}>Admin</Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              sx={{ color: props.darkMode ? "white" : "white"}}
            >
              <AccountCircle />
            </IconButton>
            |
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={props.toggleDarkMode}
              sx={{ color: props.darkMode ? "white" : "white"}}
            >
              {props.darkMode ? <LightModeIcon/> :<DarkModeIcon />}
            </IconButton>
          </Box>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: {
                backgroundColor: props.bgColor
              },
            }}
          >
            <MenuItem onClick={profileNavigate}>Profile</MenuItem>
            <MenuItem >German</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ display: "flex", justifyContent: "flex-start" }}>
          <img src={logo} width="50px" style={{ borderRadius: "5px" }} />
          <Typography
            color="primary"
            variant="h3"
            sx={{
              marginLeft: "10px",
              fontWeight: "bolder",
              fontFamily: "tahoma",
            }}
          >
            SWBT
          </Typography>
        </DrawerHeader>
        <Divider />
        <List style={{ paddingTop: "0px"}}>
          {/* SITE */}
          <Divider />
          <List>
            <NavLink to="/site">
              <ListItem key={"Site"} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <LocationOnIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Site"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>

          {/* POWERPLANT */}
          <Divider />
          <List>
            <NavLink to="/powerplant">
              <ListItem
                key={"Powerplant"}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <FactoryIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Powerplant"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>

          {/* POWERPLANT TYPES*/}
          <Divider />
          <List>
            <NavLink to="/powerplant/types">
              <ListItem
                key={"Powerplant Types"}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <InboxIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Powerplant Types"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>

          {/* Manage Protocols */}
          <Divider />
          <List>
            <NavLink to="/protocols/manage">
              <ListItem
                key={"Manage Protocols"}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <AccountTreeIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Manage Protocols"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>

          {/* Templates */}
          <Divider />
          <List>
            <NavLink to="/templates">
              <ListItem
                key={"Templates"}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <ViewListIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Templates"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>

          {/* Variants */}
          <Divider />
          <List>
            <NavLink to="/variants">
              <ListItem
                key={"Variants"}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <WorkspacesIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Variants"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>

          {/* Item Type Definition */}
          <Divider />
          <List>
            <NavLink to="/item/type">
              <ListItem
                key={"Item Type Definition"}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <ClassIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Item Type Definition"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>

          {/* Users */}
          <Divider />
          <List>
            <NavLink to="/users">
              <ListItem key={"Users"} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Groups2Icon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Users"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>

          {/* Groups */}
          <Divider />
          <List>
            <NavLink to="/groups">
              <ListItem key={"Groups"} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Diversity3Icon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Groups"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>

          {/* Feedback */}
          <Divider />
          <List>
            <NavLink to="/feedback">
              <ListItem
                key={"Feedback"}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <RateReviewIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Feedbacks"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>

          {/* Profile */}
          <Divider />
          <List>
            <NavLink to="/profile">
              <ListItem
                key={"Profile"}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <AccountBoxIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Profile"}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </List>
      </Drawer>
    </>
  );
}
