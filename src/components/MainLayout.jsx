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
      background: {
        default: darkMode ? '#22272e' : "#fff"
      }
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
        <Navigation  />
        <Box component="main" sx={{ flexGrow: 1, p: 3, height: '100vh' }}>
          <DrawerHeader />
          <Outlet />
          <Button onClick={toggleDarkMode} variant="contained" color="primary" sx={{position: 'fixed', bottom: '20px', right: '20px', borderRadius: '100px'}}>
            {darkMode ? <LightModeIcon/> : <DarkModeIcon/> }
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
