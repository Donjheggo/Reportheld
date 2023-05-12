import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Loader from "../components/Loader";
import { ToastContainer } from "react-toastify";

///////// MUI //////////
import Box from "@mui/material/Box";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

const MainLayout = () => {
  const [preLoader, setPreloader] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setPreloader(true);
    setTimeout(() => {
      setPreloader(false);
    }, 1500);
  }, [location]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#347d39" : "#99cc33",
        contrastText: "#fff",
      },
      secondary: {
        main: darkMode ? "#373e47" : "#cdd9e5",
        contrastText: darkMode ? "darkMode?" : "#424949",
      },
      text: {
        primary: darkMode ? "#cdd9e5" : "#424949",
      },
      typography: {
        h1: {
          color: darkMode ? "#cdd9e5" : "#424949",
        },
        p: {
          color: darkMode ? "#cdd9e5" : "#424949",
        },
      },
    },
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            backgroundColor: "inherit",
            color: "inherit",
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
    setDarkMode((prev) => !prev);
    console.log(darkMode);
  };

  const StyledToastContainer = styled(ToastContainer)`
    .Toastify__progress-bar {
      background-color: ${(props) => (props.darkMode ? "#347d39" : "#99cc33")};
    }
    .Toastify__toast--success {
      background-color: ${(props) => (props.darkMode ? "#121212" : "#fff")};
    }
    .Toastify__toast--success svg {
      fill: ${(props) => (props.darkMode ? "#347d39" : "#99cc33")};
    }
  `;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <Navigation toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Box component="main" sx={{ flexGrow: 1, p: 3, height: "100vh" }}>
          <DrawerHeader />
          {preLoader ? <Loader darkMode={darkMode} /> : <Outlet />}
        </Box>
      </Box>
      <StyledToastContainer darkMode={darkMode} autoClose={1500} />
    </ThemeProvider>
  );
};

export default MainLayout;
