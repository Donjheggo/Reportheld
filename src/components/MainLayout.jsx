import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

///////// MUI //////////
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const theme = createTheme({
  palette: {
    primary: {
      main: '#99cc33', 
      contrastText: '#fff',
    },
  },
});


const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", backgroundColor: '#e9ecef'}}>
        <Navigation />
        <Box component="main" sx={{ flexGrow: 1, p: 3, height: '100vh' }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
