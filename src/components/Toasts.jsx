import React from "react";
import { toast } from "react-toastify";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const ToastSuccess = (description) => {
  toast.success(
    description,
    {
      icon: <CheckCircleIcon sx={{ color: "#99cc33" }} />,
      autoClose: 1500
    },
  );
  return true;
};

const Toasts = {
  ToastSuccess,
};

export default Toasts;
