import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Loader from "../components/Loader"

///////// MUI //////////
import Box from "@mui/material/Box";
import { styled, createTheme, ThemeProvider  } from "@mui/material/styles";

const MainLayout = ({preLoader}) => {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      primary: {
        main: darkMode ? "#347d39" : "#99cc33", 
        contrastText: '#fff',
      },
      secondary: {
        main: darkMode? "#373e47" : "#cdd9e5", 
        contrastText: darkMode? "darkMode?" : "#424949",
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
          {preLoader ? <Loader/> : <Outlet/> }
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
