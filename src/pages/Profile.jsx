import React, {useState, useEffect} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CardActionArea, TextField } from "@mui/material";

const Profile = () => {

  return (
    <>

    <Card sx={{ maxWidth: "100vw" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Admin SWBT
        </Typography>
        <TextField fullWidth sx={{ marginTop: "10px" }} select label="Language" value="">
          <MenuItem value="Default">Default</MenuItem>
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="German">German</MenuItem>
        </TextField>
        <TextField
          fullWidth
          sx={{ marginTop: "10px" }}
          select
          label="Advanced Graphic Settings"
          value=""
        >
          <MenuItem value="Default">Default</MenuItem>
          <MenuItem value="Performance">Performance</MenuItem>
          <MenuItem value="Compatibility">Compatibility</MenuItem>
        </TextField>

        <TextField
          label="Current Password"
          name="test"
          sx={{ minWidth: "100%", marginTop: "10px" }}
        />
        <TextField
          label="New Password"
          name="test"
          sx={{ minWidth: "100%", marginTop: "10px" }}
        />
        <TextField
          label="Confirm New Password"
          name="test"
          sx={{ minWidth: "100%", marginTop: "10px" }}
        />

        <Button
          color="primary"
          sx={{marginTop: "10px", width: "100%" }}
          variant="contained"
        >
          Save
        </Button>
        <Button
          color="secondary"
          sx={{marginTop: "10px", width: "100%" }}
          variant="contained"
        >
          Sign Out
        </Button>
      </CardContent>
    </Card>
    </>
  );
};

export default Profile;
