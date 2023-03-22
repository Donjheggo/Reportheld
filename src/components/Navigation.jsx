import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom'

//////// MUI //////////////////
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

/////// MUI ICONS /////////////
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Reportheld
          </Typography>
          <SignalCellularAltIcon/>
          
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List style={{paddingTop: '0px'}}>
     
              {/* SITE */}
             <Divider />
              <NavLink to="/">
                <ListItem key={"Site"} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                    <InboxIcon /> 
                    </ListItemIcon>
                    <ListItemText primary={"Site"} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </NavLink>

              {/* POWERPLANT */}
             <Divider />
             <NavLink to="/powerplant">
                <ListItem key={"Powerplant"} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                    <InboxIcon /> 
                    </ListItemIcon>
                    <ListItemText primary={"Powerplant"} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </NavLink>

              {/* POWERPLANT TYPES*/}
             <Divider />
             <NavLink to="/powerplant/types">
                <ListItem key={"Powerplant Types"} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                    <InboxIcon /> 
                    </ListItemIcon>
                    <ListItemText primary={"Powerplant Types"} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </NavLink>

              {/* Manage Protocols */}
             <Divider />
             <NavLink to="/protocols/manage">
                <ListItem key={"Manage Protocols"} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                    <InboxIcon /> 
                    </ListItemIcon>
                    <ListItemText primary={"Manage Protocols"} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </NavLink>

              {/* Templates */}
             <Divider />
             <NavLink to="/templates">
                <ListItem key={"Templates"} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                    <InboxIcon /> 
                    </ListItemIcon>
                    <ListItemText primary={"Templates"} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </NavLink>

              {/* Variants */}
             <Divider />
              <NavLink to="/variants">
                <ListItem key={"Variants"} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                    <InboxIcon /> 
                    </ListItemIcon>
                    <ListItemText primary={"Variants"} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </NavLink>
              
              {/* Item Type */}
             <Divider />
             <NavLink to="/item/type">
                <ListItem key={"Item Type"} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                    <InboxIcon /> 
                    </ListItemIcon>
                    <ListItemText primary={"Item Type"} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </NavLink>

              {/* Definitions */}
             <Divider />
             <NavLink to="/definitions">
                <ListItem key={"Definitions"} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                    <InboxIcon /> 
                    </ListItemIcon>
                    <ListItemText primary={"Definitions"} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
             </NavLink>

              {/* Users */}
             <Divider />
             <NavLink to="/users">
                <ListItem key={"Users"} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                    <InboxIcon /> 
                    </ListItemIcon>
                    <ListItemText primary={"Users"} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </NavLink>

              {/* Groups */}
             <Divider />
             <NavLink to="/groups">
                <ListItem key={"Groups"} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                    <InboxIcon /> 
                    </ListItemIcon>
                    <ListItemText primary={"Groups"} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </NavLink>

              {/* Feedback */}
             <Divider />
             <NavLink to="/feedback">
                <ListItem key={"Feedback"} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                    <InboxIcon /> 
                    </ListItemIcon>
                    <ListItemText primary={"Feedback"} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </NavLink>

              {/* Profile */}
             <Divider />
             <NavLink to="/profile">
                <ListItem key={"Profile"} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                    <InboxIcon /> 
                    </ListItemIcon>
                    <ListItemText primary={"Profile"} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
             </NavLink>

        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            
        <Outlet/>

      </Box>
    </Box>
  );
}