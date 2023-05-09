import React from "react";
import { HashLoader } from "react-spinners";
import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <HashLoader
        color="#347d39"
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  );
};

export default Loader;
