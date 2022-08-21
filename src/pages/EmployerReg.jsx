import React from "react";
import {
  Typography,
  Container,
  Box,
  Stack,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

export default function EmployerReg() {
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <Stack alignItems="center">
      <Box boxShadow={2} sx={{ width: 700 }}>
        <Container>
          <Typography variant="h4">Employer registeration form</Typography>
          <Grid container paddingTop={2}>
            <Grid xs={12} md={6} padding={1}>
              <TextField
                id="outlined-basic"
                label="FirstName"
             variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} md={6} spacing={3} padding={1}>
              <TextField
                id="outlined-basic"
                label="LastName"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container paddingTop={2}>
            <Grid xs={12} md={6} padding={1}>
              <TextField
                id="outlined-basic"
                label="Age"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} md={6} spacing={3} padding={1}>
              <TextField
                id="outlined-basic"
                label="Aadhar No."
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container paddingTop={2}>
            <Grid xs={12} md={6} padding={1}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} md={6} spacing={3} padding={1}>
              <TextField
                id="outlined-basic"
                label="Phone No."
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid xs={12} spacing={3} padding={1}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Gender"
                value={gender}
                onChange={handleChange}
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Others</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item paddingTop={2} padding={1}>
            <TextField
              id="outlined-basic"
              label="Employer-id"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item paddingTop={2} padding={1}>
            <TextField
              id="outlined-basic"
              label="Gst-No."
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item paddingTop={2} padding={1}>
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item paddingTop={2} padding={1}>
            <TextField
              id="outlined-basic"
              label="Location"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item paddingTop={2} m={1}>
            <Grid sm={10}></Grid>
            <Grid sm={2}>
              <Button variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Stack>
  );
}
