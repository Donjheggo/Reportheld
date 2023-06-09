import React from "react";
import { HashLoader } from "react-spinners";
import Box from "@mui/material/Box";

const Loader = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <HashLoader
        color={props.darkMode ? "#347d39" : "#99cc33"}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  );
};

export default Loader;
