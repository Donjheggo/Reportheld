import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CardActionArea, TextField } from "@mui/material";

const Profile = () => {
  return (
    <Card sx={{ maxWidth: "100vw" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Admin SWBT
        </Typography>
        <FormControl fullWidth sx={{ marginTop: "10px" }}>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Language"
          >
            <MenuItem value="Default">Default</MenuItem>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="German">German</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ marginTop: "10px" }}>
          <InputLabel id="demo-simple-select-label">
            Advance Graphic Settings
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Language"
          >
            <MenuItem value="Default">Default</MenuItem>
            <MenuItem value="Performance">Performance</MenuItem>
            <MenuItem value="Compatibility">Compatibility</MenuItem>
          </Select>
        </FormControl>
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
          sx={{ backgroundColor: "#99cc33", marginTop: "10px", width: "100%" }}
          variant="contained"
        >
          Save
        </Button>
        <Button
          sx={{ backgroundColor: "gray", marginTop: "10px", width: "100%" }}
          variant="contained"
        >
          Sign Out
        </Button>
      </CardContent>
    </Card>
  );
};

export default Profile;
