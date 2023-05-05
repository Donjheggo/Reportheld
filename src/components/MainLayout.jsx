import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

///////// MUI //////////
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


const MainLayout = (props) => {
  const [darkMode, setDarkMode] = useState(false)
  
  const theme = createTheme({
    palette: {
      primary: {
        main: '#99cc33', 
        contrastText: '#fff',
      },
      text:{
        primary: darkMode ? "#cdd9e5" : "#424949"
      },
      background: {
        default: darkMode ? '#424949' : "#fff"
      },
      typography: {
        body: {
          color: darkMode ? '#cdd9e5' : '#424949',
        },
        h1: {
          color: darkMode ? '#cdd9e5' : '#424949',
        },
        p: {
          color: darkMode ? '#cdd9e5' : '#424949',
        },
      }
    },
    components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: darkMode ? '#424949' : "#fff",
          color: darkMode ? "#cdd9e5" : "#424949"
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: darkMode ? "#cdd9e5" : "#424949"
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          color: darkMode ? "#cdd9e5" : "#424949"
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: darkMode ? '#424949' : "#fff",
          color: darkMode ? "#cdd9e5" : "#424949",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: darkMode ? '#424949' : "#fff",
          color: darkMode ? "#cdd9e5" : "#424949"
        },
      },
    },
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

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", }}>
        <Navigation toggleDarkMode={toggleDarkMode} darkMode={darkMode} bgColor={darkMode ? "#424949" : "#fff"} appbarColor={darkMode? "#424949" : "#99cc33"} />
        <Box component="main" sx={{ flexGrow: 1, p: 3, height: '100vh' }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
